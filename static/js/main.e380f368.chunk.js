(window.webpackJsonpanime=window.webpackJsonpanime||[]).push([[0],{34:function(e,t,n){e.exports=n(60)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},50:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),i=n.n(c),l=(n(39),n(7)),o=n(8),s=n(12),d=n(9),u=n(11),m=(n(40),n(3)),f=(n(41),n(28)),h=(n(42),function(e){return r.a.createElement("img",{className:"image",src:e.src,alt:e.alt})}),p=(n(43),function(e){return r.a.createElement("div",{className:"title",style:e.style,title:e.title},e.text)}),v=(n(44),function(e){return r.a.createElement("div",{className:"score",style:e.style,title:e.score?e.score:"null"},e.score?e.score:"--/--")}),g=(n(45),n(13));function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y=function(e){var t=e.anime,n=t.title,a=t.image_url,c=t.score,i=t.mal_id,l={color:"white"};return r.a.createElement("div",{className:"anime"},r.a.createElement("div",{className:"anime__image-container"},r.a.createElement(g.b,{to:"/anime/".concat(i),style:E({outline:"none"},l)},r.a.createElement(h,{src:a,alt:n}))),r.a.createElement("div",{className:"anime__title-container"},r.a.createElement(g.b,{to:"/anime/".concat(i),style:{textDecoration:"none",outline:"none"}},r.a.createElement(p,{style:l,title:n,text:n.length>23?"".concat(n.substring(0,23)," ..."):n}))),r.a.createElement("div",{className:"anime__score-container"},r.a.createElement(v,{style:l,score:c})))},O=(n(50),n(10)),_=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).onOrderChange=n.onOrderChange.bind(Object(m.a)(n)),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onOrderChange",value:function(e){this.props.onClick(e.target.textContent.replace(/\s/g,""))}},{key:"render",value:function(){var e=this.props.order;return r.a.createElement("div",{className:"order-dropdown"},r.a.createElement("i",{className:"fas fa-sort fa-2x"}),r.a.createElement("div",{className:"order-dropdown__content"},r.a.createElement("div",{className:"order-dropdown__btn ".concat("Default"===e?"active":""),onClick:this.onOrderChange},"Default"),r.a.createElement("div",{className:"order-dropdown__btn ".concat("ScoreAscending"===e?"active":""),onClick:this.onOrderChange},"Score Ascending"),r.a.createElement("div",{className:"order-dropdown__btn ".concat("ScoreDescending"===e?"active":""),onClick:this.onOrderChange},"Score Descending")))}}]),t}(a.Component),j=Object(O.b)(function(e){return{order:e.order}})(_),w=(n(53),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={filter:e.initialFilter},n.filterChange=n.filterChange.bind(Object(m.a)(n)),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"filterChange",value:function(e){var t=this,n=e.target.value;this.setState({filter:n}),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.props.onFilterChange(n)},180)}},{key:"render",value:function(){return r.a.createElement("input",{className:"filter",type:"text",name:"search",value:this.state.filter,onChange:this.filterChange,placeholder:"Search"})}}]),t}(a.Component));var N=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],C="https://api.jikan.moe/v3/schedule",k="SET_ORDER";var x="SET_FILTER";n(54);var S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={visible:!1,timer:0},n.onScrollHandler=n.onScrollHandler.bind(Object(m.a)(n)),n.onClickHandler=n.onClickHandler.bind(Object(m.a)(n)),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScrollHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScrollHandler)}},{key:"onScrollHandler",value:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=this.state.visible;if(e>this.props.showAt){if(t)return;this.setState({visible:!t})}else{if(!t)return;this.setState({visible:!t})}}},{key:"onClickHandler",value:function(){var e=this,t=this.props,n=t.scroll,a=t.delay,r=setInterval(function(){0===window.pageYOffset&&clearInterval(e.state.timer),window.scrollTo(0,window.pageYOffset-n)},a);this.setState({timer:r})}},{key:"render",value:function(){return r.a.createElement("div",{className:"backToTop",style:{display:this.state.visible?"block":"none"},onClick:this.onClickHandler},r.a.createElement("i",{className:"fas fa-arrow-up fa-2x"}))}}]),t}(a.Component),D=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleOrderChange=n.handleOrderChange.bind(Object(m.a)(n)),n.handleFilterChange=n.handleFilterChange.bind(Object(m.a)(n)),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleOrderChange",value:function(e){e!==this.props.order&&this.props.dispatch(function(e){return{type:k,order:e}}(e))}},{key:"handleFilterChange",value:function(e){this.props.dispatch(function(e){return{type:x,filter:e}}(e))}},{key:"render",value:function(){var e,t=this.props,n=t.data,a=t.filter,c=t.order,i=t.loading,l=a.toLowerCase(),o=n.slice();return e="Default"===c?o.filter(function(e){return e.title.toLowerCase().substring(0,l.length)===l}).map(function(e){return r.a.createElement(y,{key:e.mal_id,anime:e})}):o.filter(function(e){return e.title.toLowerCase().substring(0,l.length)===l}).sort(function(e){return"ScoreAscending"===e?function(e,t){return e.score-t.score}:"ScoreDescending"===e?function(e,t){return t.score-e.score}:void 0}(c)).map(function(e){return r.a.createElement(y,{key:e.mal_id,anime:e})}),r.a.createElement("div",{className:"display-container"},r.a.createElement("div",{className:"display-container__overlay"}),i?r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"}),r.a.createElement("h2",null,"Loading...")):r.a.createElement("div",{className:"display"},r.a.createElement("div",{className:"display__filter"},r.a.createElement(w,{initialFilter:a,onFilterChange:this.handleFilterChange})),r.a.createElement("div",{className:"display__order"},r.a.createElement(j,{onClick:this.handleOrderChange})),r.a.createElement("div",{className:"display__content"},e.length>0?r.a.createElement("div",{className:"anime-panel"},e):r.a.createElement("div",{style:{color:"white",textAlign:"center",paddingTop:"20px",fontWeight:"bold"}},"No results")),r.a.createElement(S,{scroll:250,delay:13,showAt:410})))}}]),t}(a.Component),T=Object(O.b)(function(e){return{data:e.data,filter:e.filter,order:e.order,loading:e.loading}})(D),A=(n(55),function(e){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__overlay"}),r.a.createElement(g.b,{to:"/anime",style:{textDecoration:"none",outline:"none"}},r.a.createElement("div",{className:"home__enter-button"},r.a.createElement("span",null,"Enter"))))}),F=(n(56),function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__home-button"},r.a.createElement(g.b,{to:"/",style:{color:"white",outline:"none"}},r.a.createElement("i",{className:"fas fa-home fa-2x"}))),r.a.createElement("div",{className:"header__text"},r.a.createElement("h1",null,e.header)))}),H=n(16),P=(n(57),n(58),function(e){return r.a.createElement("div",{className:"genre",style:e.style,title:e.genre},e.genre)}),L=Object(O.b)(function(e){return{data:e.data}})(function(e){var t=e.data,n=e.match,a=t.find(function(e){return e.mal_id===parseInt(n.params.mal_id)});return r.a.createElement("div",{className:"detail"},r.a.createElement("div",{className:"detail__background-image"},r.a.createElement("div",{className:"detail__overlay"})),a&&r.a.createElement("div",{className:"detail__content"},r.a.createElement("div",{className:"detail__image-container"},r.a.createElement(h,{src:a.image_url,alt:a.title})),r.a.createElement("div",{className:"detail__info-container"},r.a.createElement("div",{className:"detail__title-container"},r.a.createElement(p,{style:{fontSize:"24px",color:"white"},title:a.title,text:a.title})),r.a.createElement("div",{className:"detail__score-container"},r.a.createElement("i",{style:{color:"rgb(234, 238, 18)"},className:"far fa-star"}),r.a.createElement(v,{style:{backgroundColor:"rgb(18, 97, 143)",color:"white",borderRadius:"1px",padding:"2px 10px",left:"25px",transform:"translate(0, -50%)"},score:a.score})),r.a.createElement("div",{className:"detail__genre-container"},a.genres.map(function(e){return r.a.createElement(P,{key:e.mal_id,style:{marginTop:"5px",marginRight:"5px",marginBottom:"5px"},genre:e.name})})),r.a.createElement("div",{className:"detail__synopsis-container",style:{color:"white"}},a.synopsis))))}),I=n(24),R=n.n(I),Y=n(32),B="RECEIVE_DATA";function J(e){return{type:B,data:e}}var M=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(function(){var e=Object(Y.a)(R.a.mark(function e(t){var n,a,r,c,i;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,a=[],e.prev=2,e.next=5,fetch(C,{method:"GET",headers:{accept:"application/json"}});case 5:return r=e.sent,e.next=8,r.json();case 8:for(c=e.sent,i=0;i<7;i++)a=a.concat(c[N[n]]),n++;t(J(a)),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("Error: ".concat(e.t0)),alert("Error: ".concat(e.t0));case 17:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(F,{header:"Anime Currently Airing"}),r.a.createElement(H.c,null,r.a.createElement(H.a,{exact:!0,path:"/",component:A}),r.a.createElement(H.a,{exact:!0,path:"/anime",component:T}),r.a.createElement(H.a,{path:"/anime/:mal_id",component:L}))))}}]),t}(a.Component),W=Object(O.b)()(M),z=n(15);var G=Object(z.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return t.data;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.filter;default:return e}},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Default",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.order;default:return e}},loading:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case B:return!1;default:return e}}}),U=n(33),V=function(e){return function(t){return function(n){console.group(n.type),console.log("The action: ",n);var a=t(n);return console.log("The new state: ",e.getState()),console.groupEnd(),a}}},q=Object(z.a)(U.a,V),K=Object(z.d)(G,q);i.a.render(r.a.createElement(O.a,{store:K},r.a.createElement(W,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e380f368.chunk.js.map