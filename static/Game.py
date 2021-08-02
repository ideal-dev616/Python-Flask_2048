from flask import Flask, render_template, request, redirect,flash,session,json,jsonify 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os
from sqlalchemy import func
from datetime import timedelta
from datetime import datetime, date
from flask_login import LoginManager,UserMixin,login_required,current_user,login_user,logout_user
import json
import pymysql
pymysql.install_as_MySQLdb()


app = Flask(__name__)
app.config["SECRET_KEY"]="Youwillneverguess"
# app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:@localhost/score"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///score.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db=SQLAlchemy(app)
Migrate(app,db)

login_manager = LoginManager()


now = datetime.now()
login_manager.init_app(app)
login_manager.login_view="login"


@login_manager.user_loader
def load_user(userid):
    return User.query.get(userid)


class User(db.Model , UserMixin):
    id = db.Column(db.Integer , primary_key=True)
    username = db.Column(db.String(50))
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))
    score = db.relationship("Score", backref="Post", lazy=True)

    def __init__(self , username , email, password):
        self.username = username
        self.email = email
        self.password = password
        pass

    @property
    def serialize(self):
       return {
           'username': self.username,
           'email': self.email,
           'password': self.password
       }


class Score(db.Model):
    id = db.Column(db.Integer , primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
    score = db.Column(db.Integer , default = 0)


class Online(db.Model):
    id = db.Column(db.Integer , primary_key=True)
    name = db.Column(db.String(255))
    status = db.Column(db.String(15), default='offline')
    online_at=db.Column(db.DateTime() , default=now)


@app.route("/login")
def Login():
    return render_template("login.html")





@app.route("/" , methods = ["POST","GET"])
def Index():
    try:
        if current_user.email:
            return redirect("/game")
    except:
        try:
            user = User.query.filter_by(email = current_user.email).first()
            if user:
                flash("Already login")
        except:
            if request.method == "POST":
                username = request.form['username']
                password = request.form['password']
                print(username , password)
                user = User.query.filter_by(email=username).first()

                try:
                    if user.email and user.password == "admin":
                        session['admin'] = "yes"
                    if password == user.password:
                        login_user(user)
                        return redirect("/online")
                    else:
                        flash("Wrong Password")
                        return redirect("/")
                except:
                    flash("Wrong Email")
                    return redirect("/")
        return render_template("login.html")



@app.route("/register", methods = ["POST","GET"])
def Register():
    if request.method == "POST":
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        print(username , email , password)
        try:
            check = User.query.filter_by(email=email).first()
            if check:
                flash("Email Address already exists , try different one")

            else:
                print("your are at else")
                user = User(
                    username = username,
                    email = email,
                    password = password
                    )
                db.session.add(user)
                db.session.commit()
                return redirect("/")
        except:
            flash("Problem in adding")
    return render_template("Register.html")




@app.route("/dashboard")
@login_required
def Admin():
    player = User.query.all()
    score = Score.query.order_by(Score.score.desc()).all()
    max = db.session.query(func.max(Score.score)).scalar()
    # player = ([ row.__dict__ for row in player ])
    json_player = []
    for row in player:
        row_dict = row.__dict__
        json_player.append({
            "username": row_dict["username"],
            "email": row_dict["email"],
            "password": row_dict["password"],
        })
    user_id = db.session.query(Score).filter(Score.score == max).all()
    return render_template("admin.html", player = json_player, score = score, max = max)




@app.route("/online")
@login_required
def Online_user():
    print(current_user.username)
    try:
        name = current_user.username
        print(name)
        onlin = Online(
            name=name,
            status="online"
        )
        db.session.add(onlin)
        db.session.commit()
        return redirect("/")
    except Exception as e:
        print(e)
        print("problem")

@app.route("/display_online")
@login_required
def display_online():
    online_user = Online.query.all()
    return render_template("admin.html" , online_user = online_user)

@app.route("/game")
@login_required
def Game():
    admin = ""
    try:
        admin = session['admin']
        print("admin is ", admin)
    except:
        pass
    return render_template("index.html" , admin = admin)



@app.route("/logout")
@login_required
def Logout():
    try:
        online = Online.query.filter_by(name = current_user.username).first()
        db.session.delete(online)
        db.session.commit()
        session.clear()
        logout_user()
    except:
        logout_user()
        print("problem")
    return redirect("/")


@app.route('/process', methods=['POST'])
def process():
    if request.method == "POST":
        try:
            row_score = Score.query.filter_by(user_id = current_user.id).first()
            row_score.score = request.form['score']
            db.session.commit()
        except:
            row_score = Score(
                user_id=current_user.id,
                score=request.form['score']
            )
            db.session.add(row_score)
            db.session.commit()
        return jsonify({"data":"success"})


if __name__  == "__main__":
    app.run(debug = True)