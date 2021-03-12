(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{32:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),i=c(11),n=c.n(i),r=(c(32),c(12)),l=c(4),d=c.p+"static/media/logo.f22aa22b.png",o=c(45),j=c(1),h=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"inner-content",children:[Object(j.jsx)("div",{className:"brand",children:Object(j.jsx)(o.a.Brand,{href:"/",children:Object(j.jsx)("img",{src:d,width:"100",height:"50",className:"d-inline-block align-top",alt:"YourWachlist"})})}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/",children:"Watch List"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/watched",children:"Watched"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/add",className:"btn btn-main",children:"Search Movies"})})]})]})})})},b=c(14),O=c(16),u=c(8),m=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(u.a)(Object(u.a)({},e),{},{watchlist:[t.payload].concat(Object(O.a)(e.watchlist))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(u.a)(Object(u.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload}))});case"ADD_MOVIE_TO_WATCHED":return Object(u.a)(Object(u.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload.id})),watched:[t.payload].concat(Object(O.a)(e.watched))});case"MOVE_TO_WATCHLIST":return Object(u.a)(Object(u.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload.id})),watchlist:[t.payload].concat(Object(O.a)(e.watchlist))});case"REMOVE_FROM_WATCHED":return Object(u.a)(Object(u.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});default:return e}},x={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},v=Object(a.createContext)(x),p=function(e){var t=Object(a.useReducer)(m,x),c=Object(b.a)(t,2),s=c[0],i=c[1];Object(a.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(s.watchlist)),localStorage.setItem("watched",JSON.stringify(s.watched))}),[s]);return Object(j.jsx)(v.Provider,{value:{watchlist:s.watchlist,watched:s.watched,addMovieToWatchlist:function(e){i({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},removeMovieFromWatchlist:function(e){i({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToWatched:function(e){i({type:"ADD_MOVIE_TO_WATCHED",payload:e})},moveToWatchlist:function(e){i({type:"MOVE_TO_WATCHLIST",payload:e})},removeFromWatched:function(e){i({type:"REMOVE_FROM_WATCHED",payload:e})}},children:e.children})},f=function(e){var t=e.type,c=e.movie,s=Object(a.useContext)(v),i=s.removeMovieFromWatchlist,n=s.addMovieToWatched,r=s.moveToWatchlist,l=s.removeFromWatched;return Object(j.jsxs)("div",{className:"inner-card-controls",children:["watchlist"===t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"ctrl-btn",onClick:function(){return n(c)},children:Object(j.jsx)("i",{className:"fa-fw far fa-eye"})}),Object(j.jsx)("button",{className:"ctrl-btn",onClick:function(){return i(c.id)},children:Object(j.jsx)("i",{className:"fa-fw fa fa-times"})})]}),"watched"===t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"ctrl-btn",onClick:function(){return r(c)},children:Object(j.jsx)("i",{className:"fa-fw far fa-eye-slash"})}),Object(j.jsx)("button",{className:"ctrl-btn",onClick:function(){return l(c.id)},children:Object(j.jsx)("i",{className:"fa-fw fa fa-times"})})]})]})},N=function(e){var t=e.movie,c=e.type;return Object(j.jsxs)("div",{className:"movie-card",children:[Object(j.jsx)("div",{className:"overlay"}),Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}),Object(j.jsx)(f,{type:c,movie:t})]})},w=function(){var e=Object(a.useContext)(v).watchlist;return Object(j.jsx)("div",{className:"movie-page",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{className:"heading",children:"My Watchlist"}),Object(j.jsxs)("span",{className:"count-pill",children:[e.length," ",1===e.length?"Movie":"Movies"]})]}),e.length>0?Object(j.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(j.jsx)(N,{movie:e,type:"watchlist"},e.id)}))}):Object(j.jsx)("h2",{className:"no-movies",children:"No movies in your list!"})]})})},g=function(){var e=Object(a.useContext)(v).watched;return Object(j.jsx)("div",{className:"movie-page",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{className:"heading",children:"Watched Movies"}),Object(j.jsxs)("span",{className:"count-pill",children:[e.length," ",1===e.length?"Movie":"Movies"]})]}),e.length>0?Object(j.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(j.jsx)(N,{movie:e,type:"watched"},e.id)}))}):Object(j.jsx)("h2",{className:"no-movies",children:"No movies in your list!"})]})})},y=c(26),M=c.n(y),_=function(e){var t=e.movie,c=Object(a.useContext)(v),s=c.addMovieToWatchlist,i=c.addMovieToWatched,n=c.watchlist,r=c.watched,l=n.find((function(e){return e.id===t.id})),d=r.find((function(e){return e.id===t.id})),o=!!l||!!d,h=!!d;return Object(j.jsxs)("div",{className:"result-card",children:[Object(j.jsx)("div",{className:"poster-wrapper",children:t.poster_path?Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):Object(j.jsx)("div",{className:"filler-poster"})}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h3",{className:"title",children:t.title}),Object(j.jsx)("h4",{className:"release-date",children:Object(j.jsx)(M.a,{format:"YYYY",children:t.release_date})})]}),Object(j.jsxs)("div",{className:"controls",children:[Object(j.jsx)("button",{className:"btn",disabled:o,onClick:function(){return s(t)},children:"Add to Watchlist"}),Object(j.jsx)("button",{className:"btn",disabled:h,onClick:function(){return i(t)},children:"Add to Watched"})]})]})]})},T=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)([]),n=Object(b.a)(i,2),r=n[0],l=n[1];return Object(j.jsx)("div",{className:"add-page",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"add-content",children:[Object(j.jsx)("div",{className:"input-wrapper",children:Object(j.jsx)("input",{type:"text",placeholder:"Search Movies...",value:c,onChange:function(e){e.preventDefault(),s(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=3bd8a69d0f86140bc855cc1b3938e1ed&language=en-US&page=1&include_adult=false&query=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){e.errors?l([]):l(e.results)}))}})}),r.length>0&&Object(j.jsx)("ul",{className:"results",children:r.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(_,{movie:e})},e.id)}))})]})})})};c(41);var W=function(){return Object(j.jsx)(p,{children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:"/",children:Object(j.jsx)(w,{})}),Object(j.jsx)(l.b,{exact:!0,path:"/watched",children:Object(j.jsx)(g,{})}),Object(j.jsx)(l.b,{exact:!0,path:"/add",children:Object(j.jsx)(T,{})}),Object(j.jsx)(l.a,{to:"/"})]})]})})};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.7c3744b9.chunk.js.map