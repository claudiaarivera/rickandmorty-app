(this["webpackJsonprick-and-morty-app"]=this["webpackJsonprick-and-morty-app"]||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(2),s=a.n(n),r=a(35),i=a.n(r),l=a(10),o=(a(43),a(3)),j=a(16),d=a(17),h=a(19),u=a(18),p=a(13),b=(a(44),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsxs)("nav",{className:"nav",children:[Object(c.jsx)(l.b,{to:"/",className:"nav__logo",children:Object(c.jsx)("h1",{className:"title",children:"Rick and Morty App"})}),Object(c.jsxs)("ul",{className:"nav__menu",children:[Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(l.c,{to:"/",className:"nav__link",exact:!0,activeClassName:"nav__link--active",children:"Home"})}),Object(c.jsx)("li",{className:"nav__item",children:Object(c.jsx)(l.c,{to:"/rickandmorty-app/about",className:"nav__link",activeClassName:"nav__link--active",children:"About"})}),Object(c.jsx)("li",{className:"nav__item nav__item--right",children:Object(c.jsx)("a",{className:"nav__link nav__icon",target:"_blank",rel:"noreferrer",href:"https://github.com/claudiaarivera",children:Object(c.jsx)(p.a,{})})})]})]})})})}}]),a}(n.Component));a(50);function m(){return Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsxs)("div",{className:"footer__info",children:[Object(c.jsxs)("ul",{className:"footer__social",children:[Object(c.jsx)("li",{className:"footer__item",children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/claudiariveramacedo/",children:Object(c.jsx)(p.b,{})})}),Object(c.jsx)("li",{className:"footer__item",children:Object(c.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/claudiaarivera",children:Object(c.jsx)(p.a,{})})}),Object(c.jsx)("li",{className:"footer__item",children:Object(c.jsx)("a",{href:"mailto:riveramacedoc@gmail.com",children:Object(c.jsx)(p.c,{})})})]}),Object(c.jsxs)("p",{className:"footer__dev",children:["Developed by ",Object(c.jsx)("a",{href:"/",target:"_blank",className:"footer__link",children:"Claudia Rivera"})," with React and \ud83d\udc99"]})]}),Object(c.jsxs)("p",{className:"footer__copy",children:["\xa9",(new Date).getFullYear()," Rick and Morty App"]})]})}function x(e){var t=e.children;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)("main",{className:"main",children:Object(c.jsx)("div",{className:"wrapper",children:t})}),Object(c.jsx)(m,{})]})}var O=a(8),_=a.n(O),g=a(12),v=a(15);a(52);function f(e){var t=e.name,a=e.image,n=e.species,s=e.gender,r=e.status,i=e.origin,l=e.location;return Object(c.jsxs)("article",{className:"card card--character",children:[Object(c.jsxs)("div",{className:"card__head",children:[Object(c.jsx)("img",{className:"card__image",src:a,alt:t}),Object(c.jsxs)("div",{className:"card__info",children:[Object(c.jsx)("h3",{className:"card__title",children:t}),Object(c.jsx)("span",{className:"card__tag",children:n})]})]}),Object(c.jsxs)("div",{className:"card__body",children:[Object(c.jsxs)("p",{className:"card__text",children:[Object(c.jsx)("span",{children:"Name:"})," ",t]}),Object(c.jsxs)("p",{className:"card__text",children:[Object(c.jsx)("span",{children:"Gender:"})," ",s]}),Object(c.jsxs)("p",{className:"card__text",children:[Object(c.jsx)("span",{children:"Location:"})," ",l.name]}),Object(c.jsxs)("p",{className:"card__text",children:[Object(c.jsx)("span",{children:"Origin:"})," ",i.name]})]}),Object(c.jsx)("div",{className:"card__footer",children:Object(c.jsxs)("p",{className:"card__status",children:[Object(c.jsx)("span",{className:"status__title",children:"Status"}),Object(c.jsx)("span",{className:"status__text status status--".concat(r.toLowerCase()),children:r})]})})]})}var N=a(24),k=a.n(N),P="https://rickandmortyapi.com/api";function y(){return w.apply(this,arguments)}function w(){return(w=Object(g.a)(_.a.mark((function e(){var t,a,c,n=arguments;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,k.a.get("".concat(P,"/character/?page=").concat(t));case 4:return a=e.sent,e.next=7,a.data;case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(1),console.log("error:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function C(e){return A.apply(this,arguments)}function A(){return(A=Object(g.a)(_.a.mark((function e(t){var a,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(P,"/character/?species=").concat(t));case 3:return a=e.sent,e.next=6,a.data;case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log("error:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}a(71);function R(e){return Object(c.jsxs)("div",{className:"custom-select",children:[Object(c.jsxs)("select",{className:"select",value:e.specie,onChange:e.onChangeHandle,children:[Object(c.jsx)("option",{value:"",children:"All"}),Object(c.jsx)("option",{value:"human",children:"Human"}),Object(c.jsx)("option",{value:"alien",children:"Alien"})]}),Object(c.jsx)("div",{className:"arrow"})]})}a(72);var S=a(25);function H(e){var t=e.currentPage,a=e.totalPages,n=e.prevHandle,s=e.nextHandle;return Object(c.jsxs)("ul",{className:"pagination",children:[Object(c.jsx)("li",{className:"pagination__item pagination__item--prev ".concat(t>1?"pagination__item--active":""),children:Object(c.jsxs)("button",{className:"pagination__btn pagination__btn--prev",disabled:t<=1,onClick:n,children:[Object(c.jsx)(S.a,{className:"pagination__icon"}),Object(c.jsx)("span",{children:"prev"})]})}),Object(c.jsx)("li",{className:"pagination__item pagination__item--info",children:Object(c.jsxs)("span",{children:[t," / ",a]})}),Object(c.jsx)("li",{className:"pagination__item pagination__item--next ".concat(t<a?"pagination__item--active":""),children:Object(c.jsxs)("button",{className:"pagination__btn pagination__btn--next",disabled:t>=a,onClick:s,children:[Object(c.jsx)("span",{children:"next"}),Object(c.jsx)(S.b,{className:"pagination__icon"})]})})]})}a(73);var M=a(37),F=a.n(M),L=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var c;return Object(j.a)(this,a),(c=t.call(this,e)).state={characterList:[],currentPage:1,totalPages:0,loading:!1,specie:""},c.nextPage=c.nextPage.bind(Object(v.a)(c)),c.prevPage=c.prevPage.bind(Object(v.a)(c)),c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:(t=e.sent)&&this.setState({characterList:t.results,totalCharacters:t.info.count,totalPages:t.info.pages,loading:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){this.state.currentPage!==t.currentPage&&this.getCharacters()}},{key:"getCharacters",value:function(){var e=Object(g.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!1}),e.next=3,y(this.state.currentPage);case 3:(t=e.sent)&&this.setState({characterList:t.results,loading:!0});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"prevPage",value:function(){this.state.currentPage>1&&this.setState({currentPage:this.state.currentPage-1})}},{key:"nextPage",value:function(){this.state.currentPage<this.state.totalPages&&this.setState({currentPage:this.state.currentPage+1})}},{key:"handleChangeSpecie",value:function(){var e=Object(g.a)(_.a.mark((function e(t){var a,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,this.setState({loading:!1}),e.next=4,C(a);case 4:(c=e.sent)&&this.setState({specie:a,characterList:c.results,currentPage:1,totalPages:c.info.pages,loading:!0});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"/rickandmorty-app"}),Object(c.jsxs)("section",{className:"section section--characters",children:[Object(c.jsxs)("h2",{className:"section__title",children:["There are ",Object(c.jsx)("span",{className:"characteres__count",children:this.state.totalCharacters})," characters, find your favorite \ud83d\ude80"]}),Object(c.jsx)("div",{className:"characteres__top",children:Object(c.jsxs)("div",{className:"characters__actions",children:[Object(c.jsx)(R,{onChangeHandle:this.handleChangeSpecie.bind(this),specie:this.props.specie}),Object(c.jsx)(H,{totalPages:this.state.totalPages,currentPage:this.state.currentPage,prevHandle:this.prevPage,nextHandle:this.nextPage})]})}),this.state.loading?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"grid section__container",children:this.state.characterList.map((function(e){var t=e.id,a=e.name,n=e.image,s=e.species,r=e.gender,i=e.status,l=e.origin,o=e.location;return Object(c.jsx)(f,{name:a,image:n,species:s,gender:r,status:i,origin:l,location:o},t)}))}),Object(c.jsx)(H,{totalPages:this.state.totalPages,currentPage:this.state.currentPage,prevHandle:this.prevPage,nextHandle:this.nextPage})]}):Object(c.jsx)("div",{className:"loading",children:Object(c.jsx)(F.a,{color:"#FA52B4",size:80})})]})]})}}]),a}(n.Component);function T(){return Object(c.jsx)(L,{})}function D(){return Object(c.jsxs)("section",{className:"about",children:[Object(c.jsx)("h3",{className:"section__title",children:"\xbfQu\xe9 es Rick and Morty App?"}),Object(c.jsxs)("p",{children:["Rick and Morty App es una aplicaci\xf3n web que consume la API p\xfablica ",Object(c.jsx)("a",{className:"section__link",href:"https://rickandmortyapi.com/",target:"_blank",rel:"noreferrer",children:"The Rick and Morty API"}),"  basada en la serie de TV Rick and Morty.Como dice en la p\xe1gina oficial de Rick and Morty API, puedes encontrar informaci\xf3n real de la serie, en este caso de los personajes."]}),Object(c.jsx)("h3",{className:"section__title",children:"Sobre el desarrollo \ud83d\ude0e"}),Object(c.jsxs)("p",{children:["Esta aplicaci\xf3n fue construida con fines de aprendizaje, por lo que es problable que encuentres algunos ",Object(c.jsx)("i",{children:"bugs"}),". No dudes en informarme si encuentras alguna, me servir\xeda para seguir aprendiendo\ud83d\ude4f.",Object(c.jsx)("br",{}),"Fuera de eso, la app esta dividida por la secci\xf3n home y about (donde te encuentras), como sabr\xe1s, puedes acceder a estas traves del men\xfa de navegaci\xf3n ubicada en la parte superior de la p\xe1gina."]}),Object(c.jsx)("h4",{children:"Caracteristicas:"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Listado de personajes"}),Object(c.jsx)("li",{children:"Filtrado por especie a trav\xe9s de un men\xfa de selecci\xf3n"}),Object(c.jsx)("li",{children:"Paginaci\xf3n"})]}),Object(c.jsx)("p",{children:" Por implementar: secci\xf3n de detalle de personaje."}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Todas las sugerencias, feedback, errores pueden ser consultadas envi\xe1ndome un mensaje a riveramacedoc@gmail.com "}),Object(c.jsxs)("p",{children:["Repositorio del proyecto: ",Object(c.jsx)("a",{className:"section__link",target:"_blank",rel:"noreferrer",href:"https://reactjs.org",children:"Rick and Morty App"})]}),Object(c.jsxs)("p",{children:["Tecnolog\xedas usadas: ",Object(c.jsx)("a",{className:"section__link",target:"_blank",rel:"noreferrer",href:"https://reactjs.org",children:"ReactJs"})]})]})}var I=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(x,{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/",component:T,exact:!0}),Object(c.jsx)(o.a,{path:"/about",component:D})]})})})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l.a,{basename:"/rickandmorty-app",children:Object(c.jsx)(I,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.56b91a7d.chunk.js.map