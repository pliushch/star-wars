(this.webpackJsonpswapi=this.webpackJsonpswapi||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n.n(a),s=n(11),i=n(18),o=n(30),l=n(12),u=n.n(l),p=n(15),d=n(21),j=n(59),b=n.n(j),m=b.a.create({baseURL:"https://swapi.dev/api/"}),f=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("people/");case 2:return t=e.sent,e.abrupt("return",t.data.results.map(v));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("https://starwars-visualguide.com/assets/img/characters","/").concat(t,".jpg")).then((function(e){return e.config}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("planets/".concat(t,"/")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("people/".concat(t)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(t).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){return Object(p.a)(Object(p.a)({},e),{},{id:y(e)})},y=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},w="FETCH_PEOPLE_REQUEST",N="FETCH_PEOPLE_SUCCESS",k="FETCH_PEOPLE_FAILURE",S="FETCH_DETAILS_REQUEST",E="FETCH_DETAILS_SUCCESS",C="FETCH_DETAILS_FAILURE",I="ADD_TO_FAVORITE_LIST",_="SUCCESS_LOGIN",T="SUCCESS_LOGOUT",L=function(e){return{type:N,payload:e}},M=n(174),F=n(182),A=n(181),P=n(186),R=n(179),D=n(137),H=Object(M.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(1)},block:{outline:"none"}}})),U=function(e){var t=e.showModal,n=e.closeModal,a=e.children,c=H();return Object(r.jsx)(P.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:c.modal,open:t,onClose:function(){return n(!1)},closeAfterTransition:!0,BackdropComponent:R.a,BackdropProps:{timeout:500},children:Object(r.jsx)(D.a,{in:t,children:Object(r.jsx)("div",{className:c.block,children:a})})})},G=n(180),z=Object(M.a)({root:{display:"block",width:"100%",textAlign:"center"}}),W=function(){var e=z();return Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(G.a,{color:"secondary"})})},B=function(e,t){return{type:E,payload:{films:e,vehicles:t}}},J=Object(M.a)((function(e){return{block:Object(o.a)({background:"#ece9e9",padding:e.spacing(4),borderRadius:5,display:"flex",flexDirection:"column",textAlign:"center"},e.breakpoints.up("sm"),{flexDirection:"row"}),name:{textTransform:"uppercase",display:"block"},text:{fontWeight:"bold",fontSize:18},img:Object(o.a)({width:200,height:225,margin:e.spacing(2,0)},e.breakpoints.up("sm"),{width:300,height:400,marginRight:20}),flex:{display:"flex",flexDirection:"column"}}})),Q=function(e){var t=e.id,n=J(),s=Object(i.b)(),o=Object(i.c)((function(e){return e.people})).people.find((function(e){return e.id===t})),l=Object(i.c)((function(e){return e.details})),p=l.vehicles,j=l.films,b=l.loading,m=l.error;return Object(a.useEffect)((function(){s(function(e){return function(){var t=Object(d.a)(u.a.mark((function t(n){var r,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:S}),t.prev=1,t.next=4,O(e);case 4:return r=t.sent,t.next=7,Promise.all(r.films.map(function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,r=n.title,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:return a=t.sent,t.next=10,Promise.all(r.vehicles.map(function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,r=n.name,a=n.model,e.abrupt("return",{name:r,model:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:c=t.sent,n(B(a,c)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),n({type:C});case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[s,t]),b?Object(r.jsx)(W,{}):m?Object(r.jsx)("h2",{children:"Sorry! Something went wrong"}):Object(r.jsxs)("div",{className:n.block,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:n.text,children:o.name}),Object(r.jsx)("img",{className:n.img,src:o.image,alt:o.name})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:n.name,children:"Height: "}),Object(r.jsx)("span",{className:n.text,children:o.height}),Object(r.jsx)("span",{className:n.name,children:"Mass: "}),Object(r.jsx)("span",{className:n.text,children:o.mass}),Object(r.jsx)("span",{className:n.name,children:"Hair color: "}),Object(r.jsx)("span",{className:n.text,children:o.hair_color}),Object(r.jsx)("span",{className:n.name,children:"Skin color: "}),Object(r.jsx)("span",{className:n.text,children:o.skin_color}),Object(r.jsx)("span",{className:n.name,children:"Eye color: "}),Object(r.jsx)("span",{className:n.text,children:o.eye_color}),Object(r.jsx)("span",{className:n.name,children:"Birth year: "}),Object(r.jsx)("span",{className:n.text,children:o.birth_year}),Object(r.jsx)("span",{className:n.name,children:"Gender: "}),Object(r.jsx)("span",{className:n.text,children:o.gender}),Object(r.jsx)("span",{className:n.name,children:"Homeworld: "}),Object(r.jsx)("span",{className:n.text,children:o.homeworld}),Object(r.jsxs)("span",{className:n.flex,children:[Object(r.jsx)("span",{className:n.name,children:"Vehicles: "}),p.length?p.map((function(e){var t=e.name,a=e.model;return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)("span",{className:n.text,children:t}),Object(r.jsx)("span",{className:n.text,children:a})]},t)})):"-"]}),Object(r.jsxs)("span",{className:n.flex,children:[Object(r.jsx)("span",{className:n.name,children:"Films:"}),j.map((function(e){return Object(r.jsx)("span",{className:n.text,children:e},e)}))]})]})]})},V=n(83),$=n.n(V),q=n(58),K=function(e){return function(t){var n=Object(a.useState)(!1),c=Object(q.a)(n,2),s=c[0],i=c[1];return Object(r.jsx)(e,Object(p.a)({showModal:s,handleOpenModal:function(){i(!0)},handleCloseModal:function(){i(!1)}},t))}},X=Object(M.a)((function(e){return{block:{"&:hover > img":{transform:"scale(1.1)"}},title:{fontWeight:"bold",fontSize:20,fontStyle:"italic"},img:{height:"50%",width:"60%",margin:e.spacing(3,0),transition:"ease 0.3s"},color:{color:"black",width:"auto",borderRadius:20,padding:e.spacing(1)},type:{padding:e.spacing(1),fontSize:18,fontStyle:"italic"}}})),Y=K((function(e){var t=e.person,n=e.favorites,a=e.handleOpenModal,c=e.showModal,s=e.handleCloseModal,o=Object(i.b)(),l=X(),u=n.find((function(e){return e.id===t.id}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:l.block,children:[Object(r.jsxs)("div",{onClick:a,children:[Object(r.jsx)("h2",{className:l.title,children:t.name}),Object(r.jsx)("img",{className:l.img,src:t.image,alt:t.name}),Object(r.jsxs)("p",{className:l.color,children:["Genre: ",t.gender]}),Object(r.jsxs)("p",{className:l.color,children:["Homeworld: ",t.homeworld]})]}),Object(r.jsx)("div",{onClick:function(){o(function(e){return{type:I,payload:e}}(t))},children:Object(r.jsx)($.a,{color:u?"secondary":"primary"})})]}),c&&Object(r.jsx)(U,{closeModal:s,showModal:c,children:Object(r.jsx)(Q,{id:t.id})})]})})),Z=Object(M.a)((function(e){return{root:{flexGrow:1},paper:Object(o.a)({padding:e.spacing(1),margin:e.spacing(1),textAlign:"center",cursor:"pointer"},e.breakpoints.up("sm"),{margin:e.spacing(2)})}})),ee=function(){var e=Object(i.b)(),t=Z(),n=Object(i.c)((function(e){return e.people})),c=n.loading,s=n.error,o=n.people,l=n.favorites;return Object(a.useEffect)((function(){if(null!==JSON.parse(localStorage.getItem("redux")))return!0;e(function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:w}),e.prev=1,e.next=4,f();case 4:return n=e.sent,e.next=7,Promise.all(n.map(function(){var e=Object(d.a)(u.a.mark((function e(t){var n,r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t.id);case 2:return n=e.sent,r=n.url,e.next=6,x(t.id);case 6:return a=e.sent,c=a.name,e.abrupt("return",Object(p.a)(Object(p.a)({},t),{},{image:r,homeworld:c}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:r=e.sent,t(L(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:k});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),c?Object(r.jsx)(W,{}):s?Object(r.jsx)("h2",{children:"Sorry! Something went wrong"}):Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(A.a,{container:!0,spacing:2,children:o.map((function(e){return Object(r.jsx)(A.a,{item:!0,xs:12,sm:6,md:3,children:Object(r.jsx)(F.a,{className:t.paper,children:Object(r.jsx)(Y,{person:e,favorites:l})})},e.name)}))})})},te=n(184),ne=n(185),re=Object(M.a)((function(e){return{input:{margin:e.spacing(2),width:300}}})),ae=K((function(e){var t=e.handleOpenModal,n=e.showModal,c=e.handleCloseModal,s=re(),o=Object(i.c)((function(e){return e.people})).people,l=Object(a.useState)(null),u=Object(q.a)(l,2),d=u[0],j=u[1];return Object(r.jsxs)(r.Fragment,{children:[n&&Object(r.jsx)(U,{closeModal:c,showModal:n,children:Object(r.jsx)(Q,{id:d})}),Object(r.jsx)("div",{children:Object(r.jsx)(ne.a,{className:s.input,freeSolo:!0,autoComplete:!0,onChange:function(e,n){var r=o.find((function(e){return e.name===n}));j(r.id),t()},disableClearable:!0,options:o.map((function(e){return e.name})),renderInput:function(e){return Object(r.jsx)(te.a,Object(p.a)(Object(p.a)({},e),{},{label:"Search persons",margin:"normal",variant:"outlined",InputProps:Object(p.a)(Object(p.a)({},e.InputProps),{},{type:"search"})}))}})})]})})),ce=n(49),se=n(14),ie=Object(M.a)((function(e){return{root:{flexGrow:1},paper:Object(o.a)({padding:e.spacing(1),margin:e.spacing(1),textAlign:"center",cursor:"pointer"},e.breakpoints.up("sm"),{margin:e.spacing(2)}),text:{textAlign:"center",fontSize:20,fontWeight:"bold",textTransform:"uppercase"}}})),oe=function(){var e=ie(),t=Object(i.c)((function(e){return e.people})).favorites;return Object(r.jsx)("div",{className:e.root,children:t.length?Object(r.jsx)(A.a,{container:!0,spacing:2,children:t.map((function(n){return Object(r.jsx)(A.a,{item:!0,xs:12,sm:6,md:3,children:Object(r.jsx)(F.a,{className:e.paper,children:Object(r.jsx)(Y,{person:n,favorites:t})})},n.name)}))}):Object(r.jsx)("p",{className:e.text,children:"Nothing added to favorites"})})},le=n(85),ue=n.n(le),pe=n(183),de=Object(M.a)((function(e){return{block:{display:"flex",alignItems:"center"},img:{borderRadius:"50%",height:"fit-content"},text:{display:"flex",flexDirection:"column",justifyContent:"center",margin:e.spacing(0,1),"& p":{margin:0}},btn:{height:"fit-content"}}})),je=function(){var e=Object(i.b)(),t=de(),n=Object(i.c)((function(e){return e.login}));return Object(r.jsx)(r.Fragment,{children:n.isLoggedIn?Object(r.jsxs)("div",{className:t.block,children:[Object(r.jsx)("img",{src:n.picture,alt:n.name,className:t.img}),Object(r.jsxs)("div",{className:t.text,children:[Object(r.jsxs)("p",{children:["Welcome, ",n.name]}),Object(r.jsxs)("p",{children:["Email: ",n.email]})]}),Object(r.jsx)(pe.a,{className:t.btn,variant:"contained",color:"primary",onClick:function(){return e({type:T})},children:"Logout"})]}):Object(r.jsx)(ue.a,{appId:"1437864996545074",fields:"name,email,picture",icon:"fa-facebook",size:"small",callback:function(t){t.status||e(function(e){return{type:_,payload:e}}(t))}})})},be=Object(M.a)((function(e){return{block:{margin:e.spacing(2),display:"flex",alignItems:"center"},link:{textDecoration:"none",display:"flex",alignItems:"center",color:"white",background:e.palette.primary.main,borderRadius:5,padding:e.spacing(1,3),marginRight:e.spacing(3),"&:hover":{background:e.palette.primary.light}},login:{marginLeft:"auto"}}})),me=function(){var e=be();return Object(r.jsxs)("div",{className:e.block,children:[Object(r.jsx)(ce.b,{to:"/",className:e.link,children:"Persons"}),Object(r.jsx)(ce.b,{to:"/favorites",className:e.link,children:"Favorites"}),Object(r.jsx)("div",{className:e.login,children:Object(r.jsx)(je,{})})]})},fe=function(){return Object(r.jsxs)(ce.a,{basename:"/star-wars",children:[Object(r.jsx)(me,{}),Object(r.jsx)(se.a,{exact:!0,path:"/",render:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ae,{}),Object(r.jsx)(ee,{})]})}}),Object(r.jsx)(se.a,{exact:!0,path:"/favorites",component:oe})]})},he=n(32),xe=n(86),Oe=n(87),ge=n(88),ve=n.n(ge),ye=n(89),we={loading:!1,people:[],error:!1,favorites:[]},Ne={loading:!1,films:[],vehicles:[],error:!1},ke={isLoggedIn:!1,userId:"",name:"",email:"",picture:""},Se=Object(he.combineReducers)({people:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0,people:[],error:!1,favorites:[]};case N:return{loading:!1,people:t.payload,error:!1,favorites:[]};case k:return{loading:!1,people:[],error:!0,favorites:[]};case I:if(e.favorites.find((function(e){return e.id===t.payload.id}))){var n=e.favorites.filter((function(e){return e.id!==t.payload.id}));return Object(p.a)(Object(p.a)({},e),{},{favorites:n})}return Object(p.a)(Object(p.a)({},e),{},{favorites:[].concat(Object(ye.a)(e.favorites),[t.payload])});default:return e}},details:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0,films:[],vehicles:[],error:!1};case E:var n=t.payload,r=n.films,a=n.vehicles;return{loading:!1,films:r,vehicles:a,error:!1};case C:return{loading:!1,films:[],vehicles:[],error:!0};default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:!0,userId:t.payload.userId,name:t.payload.name,email:t.payload.email,picture:t.payload.picture.data.url});case T:return ke;default:return e}}}),Ee=Object(he.createStore)(Se,Object(Oe.composeWithDevTools)(Object(he.applyMiddleware)(xe.a),ve()()));n(135);Object(s.render)(Object(r.jsx)(i.a,{store:Ee,children:Object(r.jsx)(fe,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.2625101f.chunk.js.map