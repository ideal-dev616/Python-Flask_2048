if(!self.define){const e=e=>{"require"!==e&&(e+=".js");
let s=Promise.resolve();
return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");
r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);
return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};
self.define=(s,a,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+s.slice(1)};
return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}}))).then((e=>{const s=c(...e);
return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-15dd0bab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/android-chrome-144x144.png",revision:"132f037927b78732dd8470e5b88a325d"},
{url:"assets/android-chrome-192x192.png",revision:"cbc0f6200833be7711ba0c89fbb96979"},
{url:"assets/android-chrome-256x256.png",revision:"645af78fc3310374db3a88704c5c2525"},
{url:"assets/android-chrome-36x36.png",revision:"ef0c02b8339eb29c27ea960d5bec9085"},
{url:"assets/android-chrome-384x384.png",revision:"3da664bc49b1280266fe9abc794a7809"},
{url:"assets/android-chrome-48x48.png",revision:"874f6921e73bb674013a37afbf39d546"},
{url:"assets/android-chrome-512x512.png",revision:"13ccd0683cb563549971fbef9232cea1"},
{url:"assets/android-chrome-72x72.png",revision:"04c48d108a5078c0348fef0a42da7581"},
{url:"assets/android-chrome-96x96.png",revision:"63fedb6b13b576f73cc2065365de586d"},
{url:"assets/apple-touch-icon-1024x1024.png",revision:"9fd5f829b1f380850c8bf168b0b61a02"},
{url:"assets/apple-touch-icon-114x114.png",revision:"848f25f7bf150bab2b5a78748cfa7018"},
{url:"assets/apple-touch-icon-120x120.png",revision:"d1882352f44e14024d79836d894d46de"},
{url:"assets/apple-touch-icon-144x144.png",revision:"132f037927b78732dd8470e5b88a325d"},
{url:"assets/apple-touch-icon-152x152.png",revision:"f3196ac68b76acbf30f3bfcd207f2046"},
{url:"assets/apple-touch-icon-167x167.png",revision:"c6cae799cae410fa9459c74cc10ee5e1"},
{url:"assets/apple-touch-icon-180x180.png",revision:"b42600ec6c8cf47cea9d3ebb8ca8f5a1"},
{url:"assets/apple-touch-icon-57x57.png",revision:"0d80c5c3ee55c7febbb8ee27a49b72ab"},
{url:"assets/apple-touch-icon-60x60.png",revision:"cbb8dae3393ea0756c77dfe569d9e8ba"},
{url:"assets/apple-touch-icon-72x72.png",revision:"04c48d108a5078c0348fef0a42da7581"},
{url:"assets/apple-touch-icon-76x76.png",revision:"63f7ce64d63843b23c07e31467eb6126"},
{url:"assets/apple-touch-icon-precomposed.png",revision:"b42600ec6c8cf47cea9d3ebb8ca8f5a1"},
{url:"assets/apple-touch-icon.png",revision:"b42600ec6c8cf47cea9d3ebb8ca8f5a1"},
{url:"assets/browserconfig.xml",revision:"6678685f076271f924816248563e7436"},
{url:"assets/favicon-16x16.png",revision:"edc7d5b16a85f1a1d5efe57d444cb237"},
{url:"assets/favicon-32x32.png",revision:"cc0b39a9cb5ca8e397e5f36683b59e31"},
{url:"assets/favicon-48x48.png",revision:"874f6921e73bb674013a37afbf39d546"},
{url:"assets/favicon.ico",revision:"7967eff56a2d93f5bce9a04ff00cf782"},
{url:"assets/manifest.json",revision:"0839f860da775dced3d01fc0a8a6e5f7"},
{url:"assets/mstile-144x144.png",revision:"132f037927b78732dd8470e5b88a325d"},
{url:"assets/mstile-150x150.png",revision:"33e741746145913f76347ddbe2e90945"},
{url:"assets/mstile-310x150.png",revision:"615d54b69f4f98cf19ed499b46746e06"},
{url:"assets/mstile-310x310.png",revision:"af30ee40571c1fe05bd38acd6fd7a4e6"},
{url:"assets/mstile-70x70.png",revision:"15e5ab31da2f92841fe06b6346e236c2"},
{url:"bundle.js",revision:"3bbbd716249c83d9a7ee6a88ce306a3a"},
{url:"bundle.js.LICENSE.txt",revision:"f7e623707d9b37a3821ec4c3548a4309"},
{url:"index.html",revision:"4149bfd9e9b0fe470d70fa61fa01ddec"}],{})}));
