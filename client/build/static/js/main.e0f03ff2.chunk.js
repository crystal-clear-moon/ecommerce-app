(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(1),a=n(36),i=n.n(a),s=n(16),o=n(12),u=n(11),l=Object(u.a)([function(e){return e.user}],(function(e){return e.currentUser})),b={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},d=function(e){return{type:b.SIGN_IN_FAILURE,payload:e}},p=function(e){var t=e.user,n=e.additionalData;return{type:b.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},j=n(5),O=n(25),f=Object(u.a)([function(e){return e.directory}],(function(e){return e.sections})),h=(n(66),n(67),Object(s.g)((function(e){var t=e.title,n=e.imageUrl,c=e.size,a=e.history,i=e.linkUrl,s=e.match;return Object(r.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return a.push("".concat(s.url).concat(i))},children:[Object(r.jsx)("div",{className:"background-img",style:{backgroundImage:"url(".concat(n,")")}}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(r.jsx)("span",{className:"subtitle",children:"Shop Now".toUpperCase()})]})]})}))),m=Object(u.b)({sections:f}),x=Object(o.b)(m)((function(e){var t=e.sections;return Object(r.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(O.a)(e,["id"]);return Object(r.jsx)(h,Object(j.a)({},n),t)}))})})),v=n(13),g=n(14);function S(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return S=function(){return e},e}var I=g.b.div(S()),E=function(){return Object(r.jsx)(I,{children:Object(r.jsx)(x,{})})},w={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},y=n(4),_=n.n(y),C=n(33),N=n(34),T=(n(90),n(70),function(){var e=Object(C.a)(_.a.mark((function e(t,n){var r,c,a,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=R.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(j.a)({displayName:c,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());N.a.initializeApp({apiKey:"AIzaSyB9bCRZ-I7KfhimMRQjRC5g3OIXphvN85o",authDomain:"crwn-db-7039c.firebaseapp.com",projectId:"crwn-db-7039c",storageBucket:"crwn-db-7039c.appspot.com",messagingSenderId:"432091753238",appId:"1:432091753238:web:bed41b78501aa669a37e37",measurementId:"G-VFRTP6Y18Y"});var k=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},U=N.a.auth(),R=N.a.firestore(),A=new N.a.auth.GoogleAuthProvider;A.setCustomParameters({prompt:"select_account"});N.a;var L=function(){return{type:w.FETCH_COLLECTIONS_START}},G=function(e){return{type:w.FETCH_COLLECTIONS_SUCCESS,payload:e}},F=function(e){return{type:w.FETCH_COLLECTIONS_FAILURE,payload:e}},P=n(18),M=function(e){return e.shop},H=Object(u.a)([M],(function(e){return e.collections})),D=Object(u.a)([H],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),q=Object(u.a)([M],(function(e){return e.isFetching})),z=Object(u.a)([M],(function(e){return!!e.collections}));function K(){var e=Object(v.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return K=function(){return e},e}function V(){var e=Object(v.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return V=function(){return e},e}var B=g.b.div(V()),W=g.b.div(K()),Q=function(e){return function(t){var n=t.isLoading,c=Object(O.a)(t,["isLoading"]);return n?Object(r.jsx)(B,{children:Object(r.jsx)(W,{})}):Object(r.jsx)(e,Object(j.a)({},c))}},X={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"},Y=function(){return{type:X.TOGGLE_CART_HIDDEN}},J=function(e){return{type:X.ADD_ITEM,payload:e}};function $(){var e=Object(v.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  ","\n"]);return $=function(){return e},e}function Z(){var e=Object(v.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return Z=function(){return e},e}function ee(){var e=Object(v.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(v.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return te=function(){return e},e}var ne=Object(g.a)(te()),re=Object(g.a)(ee()),ce=Object(g.a)(Z()),ae=g.b.button($(),(function(e){return e.isGoogleSignIn?ce:e.inverted?re:ne})),ie=function(e){var t=e.children,n=Object(O.a)(e,["children"]);return Object(r.jsx)(ae,Object(j.a)(Object(j.a)({},n),{},{children:t}))};function se(){var e=Object(v.a)(["\n  width: 10%;\n  text-align: right;\n"]);return se=function(){return e},e}function oe(){var e=Object(v.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return oe=function(){return e},e}function ue(){var e=Object(v.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return ue=function(){return e},e}function le(){var e=Object(v.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return le=function(){return e},e}function be(){var e=Object(v.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n"]);return be=function(){return e},e}function de(){var e=Object(v.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n"]);return de=function(){return e},e}var pe=g.b.div(de()),je=Object(g.b)(ie)(be()),Oe=g.b.div(le(),(function(e){var t=e.imageUrl;return"url(".concat(t,")")})),fe=g.b.div(ue()),he=g.b.span(oe()),me=g.b.span(se()),xe=(n(72),Object(o.b)(null,(function(e){return{addItem:function(t){return e(J(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,a=t.price,i=t.imageUrl;return Object(r.jsxs)(pe,{children:[Object(r.jsx)(Oe,{style:{backgroundImage:"url(".concat(i,")")}}),Object(r.jsxs)(fe,{children:[Object(r.jsx)(he,{children:c}),Object(r.jsx)(me,{children:a})]}),Object(r.jsx)(je,{onClick:function(){return n(t)},inverted:!0,children:" Add to Cart "})]})}))),ve=(n(73),function(e){var t=e.title,n=e.items;return Object(r.jsxs)("div",{className:"collection-preview",children:[Object(r.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(r.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(r.jsx)(xe,{item:e},e.id)}))})]})}),ge=(n(74),Object(u.b)({collections:D})),Se=Object(o.b)(ge)((function(e){var t=e.collections;return Object(r.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(O.a)(e,["id"]);return Object(r.jsx)(ve,Object(j.a)({},n),t)}))})})),Ie=Object(u.b)({isLoading:q}),Ee=Object(P.d)(Object(o.b)(Ie),Q)(Se),we=(n(75),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(u.a)([H],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(r.jsxs)("div",{className:"collection-page",children:[Object(r.jsx)("h2",{className:"title",children:n.toUpperCase()}),Object(r.jsx)("div",{className:"items",children:c.map((function(e){return Object(r.jsx)(xe,{item:e},e.id)}))})]})}))),ye=Object(u.b)({isLoading:function(e){return!z(e)}}),_e=Object(P.d)(Object(o.b)(ye),Q)(we),Ce=Object(o.b)(null,(function(e){return{fetchCollectionsStart:function(){return e(L())}}}))((function(e){var t=e.fetchCollectionsStart,n=e.match;return Object(c.useEffect)((function(){t()}),[t]),Object(r.jsxs)("div",{className:"shop-page",children:[Object(r.jsx)(s.b,{exact:!0,path:"".concat(n.path),component:Ee}),Object(r.jsx)(s.b,{path:"".concat(n.path,"/:collectionId"),component:_e})]})})),Ne=function(e){return e.cart},Te=Object(u.a)([Ne],(function(e){return e.cartItems})),ke=Object(u.a)([Ne],(function(e){return e.hidden})),Ue=Object(u.a)([Te],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Re=Object(u.a)([Te],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));n(76);function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Le(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var Ge=c.createElement("desc",null,"Created with Sketch."),Fe=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function Pe(e,t){var n=e.title,r=e.titleId,a=Le(e,["title","titleId"]);return c.createElement("svg",Ae({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"Group"):n?c.createElement("title",{id:r},n):null,Ge,Fe)}var Me=c.forwardRef(Pe),He=(n.p,n(26));function De(){var e=Object(v.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return De=function(){return e},e}function qe(){var e=Object(v.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return qe=function(){return e},e}function ze(){var e=Object(v.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n"]);return ze=function(){return e},e}function Ke(){var e=Object(v.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return Ke=function(){return e},e}var Ve=g.b.div(Ke()),Be=Object(g.b)(He.b)(ze()),We=g.b.div(qe()),Qe=Object(g.b)(He.b)(De());function Xe(){return(Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ye(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var Je=c.createElement("g",null),$e=c.createElement("g",null),Ze=c.createElement("g",null),et=c.createElement("g",null),tt=c.createElement("g",null),nt=c.createElement("g",null),rt=c.createElement("g",null),ct=c.createElement("g",null),at=c.createElement("g",null),it=c.createElement("g",null),st=c.createElement("g",null),ot=c.createElement("g",null),ut=c.createElement("g",null),lt=c.createElement("g",null),bt=c.createElement("g",null);function dt(e,t){var n=e.title,r=e.titleId,a=Ye(e,["title","titleId"]);return c.createElement("svg",Xe({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Je,$e,Ze,et,tt,nt,rt,ct,at,it,st,ot,ut,lt,bt)}var pt=c.forwardRef(dt),jt=(n.p,n(77),Object(u.b)({itemCount:Ue})),Ot=Object(o.b)(jt,(function(e){return{toggleCartHidden:function(){return e(Y())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(r.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(r.jsx)(pt,{className:"shopping-icon"}),Object(r.jsx)("span",{className:"item-count",children:n})]})})),ft=(n(78),function(e){var t=e.item,n=t.imageUrl,c=t.price,a=t.name,i=t.quantity;return Object(r.jsxs)("div",{className:"cart-item",children:[Object(r.jsx)("img",{src:n,alt:"item"}),Object(r.jsxs)("div",{className:"item-details",children:[Object(r.jsx)("span",{className:"name",children:a}),Object(r.jsxs)("span",{className:"price",children:[i," * $",c]})]})]})});function ht(){var e=Object(v.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n"]);return ht=function(){return e},e}function mt(){var e=Object(v.a)(["\n  font-size: 18px;\n  margin: 50px auto;\n"]);return mt=function(){return e},e}function xt(){var e=Object(v.a)(["\n  margin-top: auto;\n"]);return xt=function(){return e},e}function vt(){var e=Object(v.a)(["\n  position: absolute;\n  width: 240px;\n  height: 340px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n  background-color: white;\n  top: 90px;\n  right: 40px;\n  z-index: 5;\n"]);return vt=function(){return e},e}var gt=g.b.div(vt()),St=Object(g.b)(ie)(xt()),It=g.b.span(mt()),Et=g.b.div(ht()),wt=Object(u.b)({cartItems:Te}),yt=Object(s.g)(Object(o.b)(wt)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(r.jsxs)(gt,{children:[Object(r.jsx)(Et,{children:t.length?t.map((function(e){return Object(r.jsx)(ft,{item:e},e.id)})):Object(r.jsx)(It,{children:"Your cart is empty"})}),Object(r.jsx)(St,{onClick:function(){n.push("/checkout"),c(Y())},children:"GO TO CHECKOUT"})]})}))),_t=Object(u.b)({currentUser:l,hidden:ke}),Ct=Object(o.b)(_t,(function(e){return{signOutStart:function(){return e({type:b.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.hidden,c=e.signOutStart;return Object(r.jsxs)(Ve,{children:[Object(r.jsx)(Be,{to:"/",children:Object(r.jsx)(Me,{className:"logo"})}),Object(r.jsxs)(We,{children:[Object(r.jsx)(Qe,{to:"/shop",children:"SHOP"}),Object(r.jsx)(Qe,{to:"/shop",children:"CONTACT"}),t?Object(r.jsx)(Qe,{as:"div",onClick:c,children:"SIGN OUT"}):Object(r.jsx)(Qe,{to:"/sign-in",children:"SIGN IN"}),Object(r.jsx)(Ot,{})]}),n?null:Object(r.jsx)(yt,{})]})})),Nt=n(32),Tt=n(40),kt=(n(79),function(e){var t=e.handleChange,n=e.label,c=Object(O.a)(e,["handleChange","label"]);return Object(r.jsxs)("div",{className:"group",children:[Object(r.jsx)("input",Object(j.a)({className:"form-input",onChange:t},c)),n?Object(r.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})}),Ut=(n(80),Object(o.b)(null,(function(e){return{googleSignInStart:function(){return e({type:b.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e({type:b.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,a=Object(c.useState)({email:"",password:""}),i=Object(Tt.a)(a,2),s=i[0],o=i[1],u=s.email,l=s.password,b=function(){var e=Object(C.a)(_.a.mark((function e(n){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(u,l);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.value,r=t.name;o(Object(j.a)(Object(j.a)({},s),{},Object(Nt.a)({},r,n)))};return Object(r.jsxs)("div",{className:"sign-in",children:[Object(r.jsx)("h2",{children:"I already had an account"}),Object(r.jsx)("span",{children:"Sign in with your email and passowrd"}),Object(r.jsxs)("form",{onSubmit:b,children:[Object(r.jsx)(kt,{name:"email",value:u,type:"email",handleChange:d,label:"email",required:!0}),Object(r.jsx)(kt,{name:"password",value:l,type:"password",handleChange:d,label:"password",required:!0}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)(ie,{type:"submit",children:" Sign In "}),Object(r.jsx)(ie,{type:"button",onClick:n,isGoogleSignIn:!0,children:"Sign In with Google"})]})]})]})}))),Rt=(n(81),Object(o.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:b.SIGN_UP_START,payload:e}}(t))}}}))((function(e){var t=e.signUpStart,n=Object(c.useState)({displayName:"",email:"",password:"",confirmPassword:""}),a=Object(Tt.a)(n,2),i=a[0],s=a[1],o=i.displayName,u=i.email,l=i.password,b=i.confirmPassword,d=function(){var e=Object(C.a)(_.a.mark((function e(n){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),l===b){e.next=4;break}return alert("password don't match"),e.abrupt("return");case 4:t({displayName:o,email:u,password:l});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,n=t.name,r=t.value;s(Object(j.a)(Object(j.a)({},i),{},Object(Nt.a)({},n,r)))};return Object(r.jsxs)("div",{className:"sign-up",children:[Object(r.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(r.jsx)("span",{children:"Sign up with your email and password"}),Object(r.jsxs)("form",{className:"sign-up-form",onSubmit:d,children:[Object(r.jsx)(kt,{type:"text",name:"displayName",value:o,onChange:p,label:"Display Name",required:!0}),Object(r.jsx)(kt,{type:"email",name:"email",value:u,onChange:p,label:"Email",required:!0}),Object(r.jsx)(kt,{type:"password",name:"password",value:l,onChange:p,label:"Password",required:!0}),Object(r.jsx)(kt,{type:"password",name:"confirmPassword",value:b,onChange:p,label:"Confirm Password",required:!0}),Object(r.jsx)(ie,{type:"sumbmit",children:"Sign Up"})]})]})}))),At=(n(82),function(){return Object(r.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(r.jsx)(Ut,{}),Object(r.jsx)(Rt,{})]})}),Lt=(n(83),Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:X.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(J(t))},removeItem:function(t){return e(function(e){return{type:X.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,a=e.removeItem,i=t.name,s=t.imageUrl,o=t.price,u=t.quantity;return Object(r.jsxs)("div",{className:"checkout-item",children:[Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)("img",{src:s,alt:"item"})}),Object(r.jsx)("span",{className:"name",children:i}),Object(r.jsxs)("span",{className:"quantity",children:[Object(r.jsx)("div",{onClick:function(){return a(t)},className:"arrow",children:"\u276e"}),Object(r.jsx)("span",{className:"value",children:u}),Object(r.jsx)("div",{onClick:function(){return c(t)},className:"arrow",children:"\u276f"})]}),Object(r.jsx)("span",{className:"price",children:o}),Object(r.jsx)("div",{onClick:function(){n(t)},className:"remove-button",children:"\u2715"})]})}))),Gt=n(52),Ft=n.n(Gt),Pt=function(e){var t=e.price,n=100*t;return Object(r.jsx)(Ft.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUs.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful!")},stripeKey:"pk_test_51HyJiQI7B86wTwcFdx33hHbKvldPixQyym2R8eRGKhxf8sk0AaMnpuLWncvmmUXvvX0gA0D1aW1ycqm2bsxYRwPe00UEbuCTFd"})},Mt=(n(84),Object(u.b)({cartItems:Te,total:Re})),Ht=Object(o.b)(Mt)((function(e){var t=e.cartItems,n=e.total;return Object(r.jsxs)("div",{className:"checkout-page",children:[Object(r.jsxs)("div",{className:"checkout-header",children:[Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Product"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Description"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Quantity"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Price"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(r.jsx)(Lt,{cartItem:e},e.id)})),Object(r.jsx)("div",{className:"total",children:Object(r.jsxs)("span",{children:["TOTAL: $",n]})}),Object(r.jsx)(Pt,{price:n})]})})),Dt=(n(85),Object(u.b)({currentUser:l})),qt=Object(o.b)(Dt,(function(e){return{checkUserSession:function(){return e({type:b.CHECK_USER_SESSION})}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(c.useEffect)((function(){t()}),[t]),Object(r.jsxs)("div",{children:[Object(r.jsx)(Ct,{}),Object(r.jsxs)(s.d,{children:[Object(r.jsx)(s.b,{exact:!0,path:"/",component:E}),Object(r.jsx)(s.b,{exact:!0,path:"/ecommerce-app",render:function(){return Object(r.jsx)(s.a,{to:"/"})}}),Object(r.jsx)(s.b,{path:"/shop",component:Ce}),Object(r.jsx)(s.b,{exact:!0,path:"/sign-in",render:function(){return n?Object(r.jsx)(s.a,{to:"/"}):Object(r.jsx)(At,{})}}),Object(r.jsx)(s.b,{path:"/checkout",component:Ht})]})]})})),zt=n(53),Kt=n(39),Vt=(n(86),n(56)),Bt=n(8),Wt=_.a.mark(Yt),Qt=_.a.mark(Jt),Xt=_.a.mark($t);function Yt(){var e,t,n;return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=R.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(Bt.b)(k,t);case 7:return n=r.sent,r.next=10,Object(Bt.c)(G(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(Bt.c)(F(r.t0.message));case 16:case"end":return r.stop()}}),Wt,null,[[0,12]])}function Jt(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Bt.d)(w.FETCH_COLLECTIONS_START,Yt);case 2:case"end":return e.stop()}}),Qt)}function $t(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Bt.a)([Object(Bt.b)(Jt)]);case 2:case"end":return e.stop()}}),Xt)}var Zt=_.a.mark(pn),en=_.a.mark(jn),tn=_.a.mark(On),nn=_.a.mark(fn),rn=_.a.mark(hn),cn=_.a.mark(mn),an=_.a.mark(xn),sn=_.a.mark(vn),on=_.a.mark(gn),un=_.a.mark(Sn),ln=_.a.mark(In),bn=_.a.mark(En),dn=_.a.mark(wn);function pn(e,t){var n,r;return _.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(Bt.b)(T,e,t);case 3:return n=c.sent,c.next=6,n.get();case 6:return r=c.sent,c.next=9,Object(Bt.c)((a=Object(j.a)({id:r.id},r.data()),{type:b.SIGN_IN_SUCCESS,payload:a}));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(Bt.c)(d(c.t0));case 15:case"end":return c.stop()}var a}),Zt,null,[[0,11]])}function jn(){var e,t;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,U.signInWithPopup(A);case 3:return e=n.sent,t=e.user,n.next=7,pn(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(Bt.c)(d(n.t0));case 13:case"end":return n.stop()}}),en,null,[[0,9]])}function On(e){var t,n,r,c,a;return _.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,U.signInWithEmailAndPassword(n,r);case 4:return c=i.sent,a=c.user,i.next=8,pn(a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(Bt.c)(d(i.t0));case 14:case"end":return i.stop()}}),tn,null,[[1,10]])}function fn(){var e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=U.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,pn(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(Bt.c)(d(t.t0));case 14:case"end":return t.stop()}}),nn,null,[[0,10]])}function hn(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.signOut();case 3:return e.next=5,Object(Bt.c)({type:b.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Bt.c)((t=e.t0,{type:b.SIGN_IN_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),rn,null,[[0,7]])}function mn(e){var t,n,r,c,a,i;return _.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.email,r=t.password,c=t.displayName,s.prev=1,s.next=4,U.createUserWithEmailAndPassword(n,r);case 4:return a=s.sent,i=a.user,s.next=8,Object(Bt.c)(p({user:i,additionalData:{displayName:c}}));case 8:s.next=14;break;case 10:return s.prev=10,s.t0=s.catch(1),s.next=14,Object(Bt.c)((o=s.t0,{type:b.SIGN_UP_FAILURE,payload:o}));case 14:case"end":return s.stop()}var o}),cn,null,[[1,10]])}function xn(e){var t,n,r;return _.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,c.next=3,pn(n,r);case 3:case"end":return c.stop()}}),an)}function vn(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Bt.d)(b.GOOGLE_SIGN_IN_START,jn);case 2:case"end":return e.stop()}}),sn)}function gn(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Bt.d)(b.EMAIL_SIGN_IN_START,On);case 2:case"end":return e.stop()}}),on)}function Sn(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Bt.d)(b.SIGN_OUT_START,hn);case 2:case"end":return e.stop()}}),un)}function In(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Bt.d)(b.SIGN_UP_START,mn);case 2:case"end":return e.stop()}}),ln)}function En(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Bt.d)(b.SIGN_UP_SUCCESS,xn);case 2:case"end":return e.stop()}}),bn)}function wn(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Bt.a)([Object(Bt.b)(vn),Object(Bt.b)(gn),Object(Bt.b)(fn),Object(Bt.b)(Sn),Object(Bt.b)(In),Object(Bt.b)(En)]);case 2:case"end":return e.stop()}}),dn)}var yn=_.a.mark(Nn),_n=_.a.mark(Tn),Cn=_.a.mark(kn);function Nn(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Bt.c)({type:X.CLEAR_CART});case 2:case"end":return e.stop()}}),yn)}function Tn(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Bt.d)(b.SIGN_OUT_SUCCESS,Nn);case 2:case"end":return e.stop()}}),_n)}function kn(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Bt.a)([Object(Bt.b)(Tn)]);case 2:case"end":return e.stop()}}),Cn)}var Un=_.a.mark(Rn);function Rn(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Bt.a)([Object(Bt.b)($t),Object(Bt.b)(wn),Object(Bt.b)(kn)]);case 2:case"end":return e.stop()}}),Un)}var An=n(54),Ln=n.n(An),Gn={currentUser:null,error:null},Fn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SIGN_IN_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{currentUser:t.payload,error:null});case b.SIGN_OUT_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{currentUser:null,error:null});case b.SIGN_OUT_FAILURE:case b.SIGN_IN_FAILURE:case b.SIGN_UP_FAILURE:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload});default:return e}},Pn=n(55),Mn=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Pn.a)(e),[Object(j.a)(Object(j.a)({},t),{},{quantity:1})])},Hn=function(e,t){return console.log("utils"),1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity-1}):e}))},Dn={hidden:!0,cartItems:[]},qn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X.TOGGLE_CART_HIDDEN:return Object(j.a)(Object(j.a)({},e),{},{hidden:!e.hidden});case X.ADD_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:Mn(e.cartItems,t.payload)});case X.CLEAR_ITEM_FROM_CART:return Object(j.a)(Object(j.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case X.REMOVE_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:Hn(e.cartItems,t.payload)});case X.CLEAR_CART:return Object(j.a)(Object(j.a)({},e),{},{cartItems:[]});default:return e}},zn={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Kn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zn,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Vn={collections:null,isFetching:!1,errorMessage:void 0},Bn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.FETCH_COLLECTIONS_START:return Object(j.a)(Object(j.a)({},e),{},{isFetching:!0});case w.FETCH_COLLECTIONS_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{isFetching:!1,collections:t.payload});case w.FETCH_COLLECTIONS_FAILURE:return Object(j.a)(Object(j.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},Wn={key:"root",storage:Ln.a,whitelist:["cart"]},Qn=Object(P.c)({user:Fn,cart:qn,directory:Kn,shop:Bn}),Xn=Object(Kt.a)(Wn,Qn),Yn=Object(Vt.a)(),Jn=[Yn];var $n=Object(P.e)(Xn,P.a.apply(void 0,Jn));Yn.run(Rn);var Zn=Object(Kt.b)($n);i.a.render(Object(r.jsx)(o.a,{store:$n,children:Object(r.jsx)(He.a,{children:Object(r.jsx)(zt.a,{persistor:Zn,children:Object(r.jsx)(qt,{})})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.e0f03ff2.chunk.js.map