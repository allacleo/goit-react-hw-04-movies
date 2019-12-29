(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{13:function(e,t,a){e.exports={nav:"Navigation_nav__2UYD2",link:"Navigation_link__RFTvL",active:"Navigation_active__9K764"}},16:function(e,t,a){e.exports={wrapper:"styles_wrapper__2aNVc"}},27:function(e,t,a){e.exports=a(45)},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),i=a(8),l=a(11),u="/",s="/movies",m="/movies/:movieId",h="cast",p="reviews",v=a(13),f=a.n(v),b=function(){return c.a.createElement("ul",{className:f.a.nav},c.a.createElement("li",null,c.a.createElement(i.c,{exact:!0,to:u,className:f.a.link,activeClassName:f.a.active},"Home")),c.a.createElement("li",null,c.a.createElement(i.c,{to:s,className:f.a.link,activeClassName:f.a.active},"Movies")))},E=a(3),g=a(4),d=a(6),y=a(5),j=a(7),O=a(16),k=a.n(O),w={moviePoster:"https://image.tmdb.org/t/p/w300",fetchMoviesTrending:function(){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=08ce4741fc784e2e0a74eb2fa686235b").then((function(e){return e.json()}))},fetchMovieSearch:function(e){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=08ce4741fc784e2e0a74eb2fa686235b&language=en-US&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){return e.results}))},fetchMovieDetails:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=08ce4741fc784e2e0a74eb2fa686235b&language=en-US")).then((function(e){return e.json()}))},fetchMovieCast:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=08ce4741fc784e2e0a74eb2fa686235b")).then((function(e){return e.json()})).then((function(e){return e.cast}))},fetchMovieReviews:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=08ce4741fc784e2e0a74eb2fa686235b&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return e.results}))}},S=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[]},a.fetchTrending=function(){w.fetchMoviesTrending().then((function(e){a.setState({movies:e.results})}))},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.fetchTrending()}},{key:"render",value:function(){var e=this.state.movies;return c.a.createElement("div",{className:k.a.wrapper},c.a.createElement("h1",null,"Trending today"),c.a.createElement("ul",null,e.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(i.b,{to:"".concat(s,"/").concat(e.id)},e.title))}))))}}]),t}(n.Component),_=a(26),M=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.onChange=function(e){a.setState({value:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.onSearch(a.state.value),a.setState({value:""})},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state.value;return c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("input",{type:"text",value:e,onChange:this.onChange}),c.a.createElement("button",{type:"submit"},"Search"))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[]},a.setSearchQuery=function(e){a.props.history.push(Object(_.a)({},a.props.location,{search:"query=".concat(e)}))},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location,a=new URLSearchParams(t.search).get("query");a&&w.fetchMovieSearch(a).then((function(t){e.setState({movies:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this,a=this.props.location,n=new URLSearchParams(e.location.search).get("query"),c=new URLSearchParams(a.search).get("query");n!==c&&w.fetchMovieSearch(c).then((function(e){t.setState({movies:e})}))}},{key:"render",value:function(){var e=this.state.movies,t=this.props,a=t.match,n=t.location;return c.a.createElement("div",{className:k.a.wrapper},c.a.createElement("h1",null,"Movies"),c.a.createElement(M,{onSearch:this.setSearchQuery}),c.a.createElement("ul",null,e.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(i.b,{to:{pathname:"".concat(a.url,"/").concat(e.id),state:{from:n}}},e.original_title||e.original_name))}))))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).state={reviews:[]},a.fetchMovieReviews=function(){var e=a.props.match.params.movieId;w.fetchMovieReviews(e).then((function(e){a.setState({reviews:e})}))},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.fetchMovieReviews()}},{key:"render",value:function(){var e=this.state.reviews;return c.a.createElement(c.a.Fragment,null,e&&c.a.createElement("ul",null,e.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("h3",null,e.author),c.a.createElement("p",null,e.content))}))))}}]),t}(n.Component),N=a(25),A=a.n(N),R=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).state={actors:[]},a.fetchMovieActors=function(){var e=a.props.match.params.movieId;w.fetchMovieCast(e).then((function(e){a.setState({actors:e})}))},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.fetchMovieActors()}},{key:"render",value:function(){var e=this.state.actors;return console.log(e),c.a.createElement(c.a.Fragment,null,e.length>0&&c.a.createElement("ul",null,e.map((function(e){return c.a.createElement("li",{key:A.a.generate()},c.a.createElement("img",{src:w.moviePoster+e.profile_path,alt:e.name,width:"100"}),c.a.createElement("h3",null,e.name),c.a.createElement("p",null,"Character: ",e.character))}))))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).state={movie:null},a.fetchDetails=function(){var e=a.props.match.params.movieId;w.fetchMovieDetails(e).then((function(e){a.setState({movie:e})}))},a.onGoBack=function(){var e=a.props,t=e.location,n=e.history;t.state?n.push(t.state.from):n.push("/")},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.fetchDetails()}},{key:"render",value:function(){var e=this.state.movie,t=this.props.match,a=this.props.location.state;return c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:this.onGoBack},"Go back"),c.a.createElement("h1",null,"Movie Details"),e&&c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:w.moviePoster+e.poster_path,alt:e.title}),c.a.createElement("h2",null,e.original_title||e.original_name),c.a.createElement("p",null,"User score: ",e.popularity,"%"),c.a.createElement("h3",null,"Overview:"),c.a.createElement("p",null,e.overview),c.a.createElement("h3",null,"Genres:"),c.a.createElement("p",null,e.genres.map((function(e){return e.name})))),c.a.createElement("p",null,"Additional information"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:{pathname:"".concat(t.url,"/").concat(h),state:a}},"Cast")),c.a.createElement("li",null,c.a.createElement(i.b,{to:{pathname:"".concat(t.url,"/").concat(p),state:a}},"Reviews"))),c.a.createElement("hr",null),c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"".concat(t.path,"/").concat(h),component:R}),c.a.createElement(l.b,{path:"".concat(t.path,"/").concat(p),component:D})))}}]),t}(n.Component),x=function(){return c.a.createElement(i.a,null,c.a.createElement(b,null),c.a.createElement("div",null,c.a.createElement(l.d,null,c.a.createElement(l.b,{exact:!0,path:u,component:S}),c.a.createElement(l.b,{path:m,component:U}),c.a.createElement(l.b,{path:s,component:C}),c.a.createElement(l.a,{to:u}))))};o.a.render(c.a.createElement(x,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.88c49cc9.chunk.js.map