(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b9f47":"236a53df","chunk-2d0c4dab":"362280d6","chunk-2d0d76f4":"8e47af24","chunk-2d0dd9a6":"a9aa71f9","chunk-2d2086b7":"e72433ee","chunk-2d23822a":"dc1d532b","chunk-42863c01":"ed73c500"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-42863c01":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0b9f47":"31d6cfe0","chunk-2d0c4dab":"31d6cfe0","chunk-2d0d76f4":"31d6cfe0","chunk-2d0dd9a6":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d23822a":"31d6cfe0","chunk-42863c01":"6c81df0f"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/Laputaapp/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"035e":function(e,t,n){"use strict";var r=n("600f"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbar"),n("transition",{attrs:{name:"fadeshow",mode:"out-in",appear:""}},[n("router-view")],1)],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-nav-bar",{staticClass:"nav",attrs:{"left-arrow":""},on:{"click-left":e.onClickLeft,"click-right":e.onClickRight}},[n("van-icon",{attrs:{slot:"left",name:e.lefticon,color:"white"},slot:"left"}),n("van-icon",{attrs:{slot:"right",name:"friends",color:"white"},on:{click:e.checkLogin},slot:"right"})],1),n("div",{staticClass:"dang"}),n("img",{staticClass:"logo",attrs:{src:"//spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/logo-cn.00c32c62.svg",alt:"logo"}}),n("transition",{attrs:{name:"fade"}},[e.listshow?n("van-list",{staticClass:"list"},e._l(e.list,(function(t){return n("van-cell",{key:t.name,attrs:{title:t.name},on:{click:function(n){return e.handleClick(t.url)}}})})),1):e._e()],1)],1)},i=[],u=(n("f1dc"),n("6e47")),s=(n("c194"),n("7744")),l=(n("2994"),n("2bdd")),d=(n("61ae"),n("d314")),f=(n("09d3"),n("2d6d")),h=(n("5246"),n("6b41")),p=(n("c3a6"),n("ad06"));r["a"].use(p["a"]),r["a"].use(h["a"]),r["a"].use(f["a"]),r["a"].use(d["a"]),r["a"].use(l["a"]),r["a"].use(s["a"]),r["a"].use(u["a"]);var m={data:function(){return{list:[{url:"/",name:"首页"},{url:"/explore",name:"探索"},{url:"/photographers/recommended",name:"摄影师"},{url:"/notifications/messages",name:"消息"}],listshow:!1,lefticon:"wap-nav"}},methods:{onClickLeft:function(){this.listshow=!this.listshow,this.lefticon="clear"===this.lefticon?"wap-nav":"clear"},onClickRight:function(){},handleClick:function(e){this.listshow=!1,this.lefticon="clear"===this.lefticon?"wap-nav":"clear",this.$router.push(e)},checkLogin:function(){localStorage.getItem("token")||this.$router.push("/login")}}},v=m,b=(n("035e"),n("2877")),g=Object(b["a"])(v,c,i,!1,null,"b95bedc4",null),k=g.exports,w={components:{navbar:k}},y=w,C=(n("5c0b"),Object(b["a"])(y,o,a,!1,null,null,null)),O=C.exports,_=(n("d3b7"),n("8c4f"));r["a"].use(_["a"]);var j=[{path:"/",component:function(){return n.e("chunk-42863c01").then(n.bind(null,"d504"))}},{path:"/explore",component:function(){return n.e("chunk-2d0d76f4").then(n.bind(null,"7797"))}},{path:"/photographers/recommended",component:function(){return n.e("chunk-2d0c4dab").then(n.bind(null,"3d37"))}},{path:"/notifications/messages",component:function(){return n.e("chunk-2d23822a").then(n.bind(null,"fda7"))}},{path:"/video/:id",component:function(){return n.e("chunk-2d0dd9a6").then(n.bind(null,"81a8"))}},{path:"/login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/signup",component:function(){return n.e("chunk-2d0b9f47").then(n.bind(null,"34c3"))}}],x=new _["a"]({mode:"hash",base:"/Laputaapp/",routes:j}),E=x,L=n("2f62"),S={namespaced:!0,state:{token:""},mutations:{setToken:function(e,t){e.token=t}}},P={namespaced:!0,state:{videoId:""},mutations:{setVideoId:function(e,t){e.videoId=t}}},T=n("0e44");r["a"].use(L["a"]);var $=new L["a"].Store({plugins:[Object(T["a"])({reducer:function(e){return{login:e.login,video:e.video}}})],state:{},mutations:{},actions:{},modules:{login:S,video:P}}),A=n("bc3a"),I=n.n(A),N=n("b619");r["a"].config.productionTip=!1,r["a"].prototype.$axios=I.a,r["a"].prototype.$swiper=N["a"],new r["a"]({router:E,store:$,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"600f":function(e,t,n){},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.acbd7ddd.js.map