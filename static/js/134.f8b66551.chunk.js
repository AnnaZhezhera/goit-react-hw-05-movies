"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{687:function(t,e,r){r.d(e,{AJ:function(){return o},HI:function(){return s},Jh:function(){return f},_r:function(){return p},gy:function(){return d},vw:function(){return i}});var n=r(861),c=r(757),a=r.n(c),u=r(44),o="https://image.tmdb.org/t/p/",i=function(){var t=(0,n.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("https://api.themoviedb.org/3/trending/movie/day?api_key=bf5cf1e2c182dc5f850732c19ce27d26");case 2:return e=t.sent,console.log(e.data.results),t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=bf5cf1e2c182dc5f850732c19ce27d26"));case 2:return r=t.sent,console.log(r.data),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=bf5cf1e2c182dc5f850732c19ce27d26"));case 2:return r=t.sent,console.log("credits",r.data),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=bf5cf1e2c182dc5f850732c19ce27d26"));case 2:return r=t.sent,console.log("reviews",r.data),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=bf5cf1e2c182dc5f850732c19ce27d26"));case 2:return r=t.sent,console.log("search",r.data),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},134:function(t,e,r){r.r(e);var n=r(861),c=r(885),a=r(757),u=r.n(a),o=r(731),i=r(689),s=r(791),f=r(687),p=r(184);e.default=function(){var t,e=(0,o.lr)(""),r=(0,c.Z)(e,2),a=r[0],d=r[1],l=(0,s.useState)(""),v=(0,c.Z)(l,2),h=v[0],m=v[1],g=(0,s.useState)([]),b=(0,c.Z)(g,2),x=b[0],w=b[1],y=null!==(t=a.get("query"))&&void 0!==t?t:"",k=(0,i.TH)();(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=w,t.next=3,(0,f.gy)(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();y&&(console.log("movieName",y),t(y).catch(console.error))}),[y]);return console.log(k),(0,p.jsxs)("main",{children:[(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d(h?{query:h}:{})},children:[(0,p.jsx)("input",{type:"text",name:"input",value:h,onChange:function(t){var e=t.target.value;m(e),console.log(e)}}),(0,p.jsx)("input",{type:"submit",value:"Search"})]}),(0,p.jsx)("ul",{children:x.results&&x.results.map((function(t){return(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"/movies/"+t.id,state:{from:k},children:t.original_title})},t.id)}))})]})}}}]);
//# sourceMappingURL=134.f8b66551.chunk.js.map