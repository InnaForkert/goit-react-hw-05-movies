"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[537],{525:function(n,t,e){e.d(t,{T:function(){return x}});var r,a,i,o=e(168),u=e(87),c=e(444),s=(0,c.ZP)(u.rU)(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 20%;\n  cursor: pointer;\n  transition-property: transform, box-shadow;\n  transition-duration: 250ms;\n  padding-bottom: 10px;\n  background-color: black;\n  color: white;\n  text-decoration: none;\n\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  }\n"]))),p=c.ZP.p(a||(a=(0,o.Z)(["\n  text-align: center;\n  font-size: 16px;\n"]))),l=e(689),d=e(184);function f(n){var t=n.movie,e=t.original_title,r=t.poster_path,a=t.id,i=(0,l.TH)().pathname;return r?(0,d.jsxs)(s,{to:"/"===i?"/movies/".concat(a):"".concat(a),state:{test:"hi"},children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:e}),(0,d.jsx)(p,{children:e})]}):null}var h=c.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 40px;\n"])));function x(n){var t=n.movieList;return(0,d.jsx)(h,{children:t.map((function(n){return(0,d.jsx)(f,{movie:n},n.id)}))})}},174:function(n,t,e){e.d(t,{X:function(){return i}});var r,a=e(168),i=e(444).ZP.h1(r||(r=(0,a.Z)(["\n  font-size: 40px;\n  text-align: center;\n  margin-bottom: 25px;\n"])))},537:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a=e(439),i=e(791),o=e(525),u=e(168),c=e(444).ZP.input(r||(r=(0,u.Z)(["\n  display: block;\n  width: 50%;\n  margin: 20px auto;\n  padding: 10px;\n  border-radius: 15px;\n"]))),s=e(184);function p(n){var t=n.onChange,e=n.value;return(0,s.jsx)(c,{type:"text",onChange:function(n){return t(n)},placeholder:"Find a film",value:e})}var l=e(165),d=e(861),f=e(263),h="8522ceac590a3d887052607dd409b490";function x(){return(x=(0,d.Z)((0,l.Z)().mark((function n(t){var e,r;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/search/movie?api_key=".concat(h,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),n.next=3,f.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var g=e(174),v=e(87);function m(){var n,t=(0,i.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1],c=(0,i.useState)(""),l=(0,a.Z)(c,2),d=l[0],f=l[1],h=(0,v.lr)(),m=(0,a.Z)(h,2),Z=m[0],b=m[1],w=null!==(n=Z.get("filter"))&&void 0!==n?n:"";return(0,i.useEffect)((function(){w?(function(n){return x.apply(this,arguments)}(w).then(u),setTimeout((function(){return f("Nothing found, try again\ud83e\udd14")}),100)):(u([]),f("Nothing here yet\ud83d\ude25"))}),[w]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{onChange:function(n){var t=n.target;b(t.value?{filter:t.value}:{})},value:w}),r.length>0?(0,s.jsx)(o.T,{movieList:r}):(0,s.jsx)(g.X,{children:d})]})}}}]);
//# sourceMappingURL=537.3e67f2ca.chunk.js.map