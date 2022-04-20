(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"05c5":function(t,e,a){t.exports=a.p+"img/phoneIcon.fe4ff750.png"},"1a38":function(t,e,a){t.exports=a.p+"img/batteryIcon.697f46f0.png"},"2e5a":function(t,e,a){},"3e4a":function(t,e,a){t.exports=a.p+"img/leafIcon.f8365adb.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavHeader"),a("router-view")],1)},n=[],r=(a("2e5a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-sm navbar-light bg-light border",attrs:{roele:"navigation"}},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"navbar-brand mr-auto",attrs:{to:"/"}},[s("img",{attrs:{src:a("cf05"),alt:"company logo",width:"100",height:"50"}})]),s("ul",{staticClass:"navbar-nav mr-auto"},[s("router-link",{staticClass:"nav-item",attrs:{to:"/",tag:"li"}},[s("a",{staticClass:"nav-link"},[t._v("Home")])]),s("router-link",{staticClass:"nav-item",attrs:{to:"/shop",tag:"li"}},[s("a",{staticClass:"nav-link"},[t._v("Shop")])]),s("router-link",{staticClass:"nav-item",attrs:{to:"/about",tag:"li"}},[s("a",{staticClass:"nav-link"},[t._v("About")])])],1),s("ul",{staticClass:"nav navbar-nav"},[t.isAuthenticated?t._e():s("router-link",{staticClass:"nav-item ",attrs:{to:"/",tag:"li","active-class":"active"}},[s("button",{staticClass:"btn btn-outline-primary force-mr-1",on:{click:t.onLoginClicked}},[t._v("Login")])]),t.isAuthenticated?s("li",{staticClass:"li-pointer nav-item"},[s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.getUserName())+" ")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Account Settings")]),s("a",{staticClass:"dropdown-item",on:{click:t.onLogoutClicked}},[t._v("Logout "+t._s(t.userEmail))])])])]):t._e(),s("li",[s("ShoppingCart")],1)],1)],1)])}),o=[],c=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn btn-primary navbar-btn",attrs:{"data-toggle":"modal","data-target":"#shoppingCart"}},[a("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}}),t._v(" ( "+t._s(t.numInCart)+" ) ")]),a("div",{staticClass:"modal fade",attrs:{id:"shoppingCart"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body shopping-cart-fixed-height"},[a("table",{staticClass:"table"},[a("tbody",[t._l(t.inCart,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.title))]),a("td",[t._v("$"+t._s(e.price))]),a("td",[a("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(a){return t.removeFromCart(e)}}},[t._v("×")])])])})),a("tr",[a("th"),a("th",[t._v("$"+t._s(t.total))]),a("th")])],2)])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{"data-dismiss":"modal"}},[t._v("Keep shopping")]),a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.checkout()}}},[t._v("Check out")])])])])])])}),l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[a("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}}),t._v(" Shopping cart ")]),a("button",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[t._v(" × ")])])}],u=(a("13d5"),{name:"ShoppingCart",computed:{inCart:function(){return this.$store.getters.inCart},numInCart:function(){return this.inCart.length},total:function(){return this.inCart.reduce((function(t,e){return t+e.price}),0)},isAuthenticated:function(){return this.$store.state.user.isAuthenticated}},methods:{removeFromCart:function(t){this.$store.commit("removeFromCart",t)},checkout:function(){this.isAuthenticated?0!=this.numInCart||alert("Your cart is empty!"):alert("Please login to checkout")}}}),d=u,m=a("2877"),p=Object(m["a"])(d,c,l,!1,null,null,null),f=p.exports,h={components:{ShoppingCart:f},name:"NavHeader",computed:{userEmail:function(){return this.isLoggedIn?this.currentUser.email:""},isAuthenticated:function(){return this.$store.state.user.isAuthenticated}},methods:{onLoginClicked:function(){window.location=this.$store.state.endpoints.login},onLogoutClicked:function(){this.$store.commit("logout")},getUserName:function(){return this.$store.state.user.name}}},v=h,g=Object(m["a"])(v,r,o,!1,null,null,null),b=g.exports,C={components:{NavHeader:b},mounted:function(){this.$store.dispatch("getProducts")}},_=C,k=(a("034f"),Object(m["a"])(_,i,n,!1,null,null,null)),y=k.exports,w=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"containter"},[a("div",{staticClass:"row"},t._l(t.products,(function(t){return a("Item",{key:t.id,attrs:{item:t}})})),1)]),t._m(0),t._m(1)])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"jumbotron text-center"},[a("div",{staticClass:"container"},[a("div",{staticClass:"d-flex"},[a("h1",{staticClass:"jumbotron-heading primary force-mr-2"},[t._v("EZ Volt")]),a("h1",{staticClass:"secondary"},[t._v("EZ Life")])]),a("p",{staticClass:"lead text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas tenetur labore alias soluta debitis provident sed quidem! Fugiat voluptatem minima totam velit odio in, doloremque quia quisquam quaerat repellendus.")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"album py-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card mb-4 shadow bg-white jump"},[s("img",{staticClass:"card-img-top",attrs:{src:a("1a38"),alt:"Battery"}}),s("div",{staticClass:"card-body bg-light border-top"},[s("p",{staticClass:"card-text"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iusto obcaecati rem eaque molestias recusandae nam, consequatur porro quo excepturi quae laborum nostrum deserunt explicabo aut, sapiente in dolorum animi.")])])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card mb-4 shadow bg-white jump"},[s("img",{staticClass:"card-img-top",attrs:{src:a("05c5"),alt:"Phone"}}),s("div",{staticClass:"card-body bg-light border-top"},[s("p",{staticClass:"card-text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magnam, consequuntur, cupiditate dolore et dolores ja zeker meer tekst beetje gelijk qmldskfjsqldkfj mlqskd flmsqd fjkkmùsfldkg ùsflmdk gmùfdlk ùsdgk lsdùmls dfg Eaque.")])])])]),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card mb-4 shadow bg-white jump"},[s("img",{staticClass:"card-img-top",attrs:{src:a("3e4a"),alt:"Leaf"}}),s("div",{staticClass:"card-body bg-light border-top"},[s("p",{staticClass:"card-text"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id perspiciatis illum error reprehenderit quia quidem veritatis accusantium est suscipit rerum culpa laboriosam omnis, placeat architecto natus temporibus delectus quae.")])])])])])])])}],j={name:"Home",computed:{products:function(){return this.$store.state.products}}},q=j,O=Object(m["a"])(q,x,$,!1,null,null,null),E=O.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("h4",{staticStyle:{"margin-top":"30px","margin-bottom":"30px"}},[t._v("Logging in ...")])])}],S={name:"Login",mounted:function(){var t=this.$route.query.name,e=this.$route.query.email,a=this.$route.query.id_token,s={name:t,email:e,idToken:a};t&&e&&a&&""!=t&&""!=e&&""!=a?this.$store.commit("login",s):this.$store.commit("logout"),this.$router.push("/")}},P=S,T=Object(m["a"])(P,A,L,!1,null,"24710aea",null),I=T.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],M={},N=Object(m["a"])(M,F,H,!1,null,null,null),B=N.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.products,(function(t){return a("Item",{key:t.id,attrs:{item:t}})})),1)])])},z=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-4 item"},[a("div",{staticClass:"card text-center"},[a("div",[a("img",{staticClass:"card-img-top",attrs:{src:t.item.thumbnail_url,alt:""}})]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.item.title))]),a("h6",{staticClass:"card-subtitle mb-2 remain"},[t._v(t._s(t.item.quantity)+" left in stock")]),a("p",{staticClass:"card-text"},[t._v(t._s(t._f("shortDescription")(t.item.description)))]),a("div",{staticClass:"row"},[a("p",{staticClass:"col-6 lead"},[t._v("$"+t._s(t.item.price))]),a("p",{staticClass:"col-6"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:0===t.item.quantity},on:{click:function(e){return t.addToCart(t.item)}}},[t._v(" Add to cart ")])])])])])])},J=[],R={name:"item",props:["item"],data:function(){return{size:""}},filters:{shortDescription:function(t){return t&&t.length>70?t.substring(0,70)+"...":t}},methods:{addToCart:function(t){this.$store.commit("addToCart",t)}}},Z=R,K=(a("899a"),Object(m["a"])(Z,D,J,!1,null,"012dda82",null)),Q=K.exports,V={name:"Shop",computed:{products:function(){return this.$store.state.products}},components:{Item:Q}},Y=V,G=Object(m["a"])(Y,U,z,!1,null,null,null),W=G.exports;s["a"].use(w["a"]);var X=[{path:"/",name:"Home",component:E},{path:"/shop",name:"Shop",component:W},{path:"/about",name:"About",component:B},{path:"/loginwithtoken",name:"loginwithtoken",component:I}],tt=new w["a"]({mode:"history",base:"/",routes:X}),et=tt,at=(a("a434"),a("d3b7"),a("96cf"),a("1da1")),st=a("2f62"),it=a("0e44");s["a"].use(st["a"]);var nt="http://localhost:8000/products",rt={Accept:"application/json"},ot=new st["a"].Store({plugins:[Object(it["a"])()],state:{products:[],inCart:[],user:{isAuthenticated:!1,name:"",email:"",idToken:""},endpoints:{login:"http://localhost:3000/login"}},getters:{products:function(t){return t.products},inCart:function(t){return t.inCart}},mutations:{setProducts:function(t,e){t.products=e},addToCart:function(t,e){console.log(e),t.inCart.push(e)},removeFromCart:function(t,e){t.inCart.splice(e,1)},logout:function(t){t.user.isAuthenticated=!1,t.user.name="",t.user.email="",t.user.idToken=""},login:function(t,e){t.user.isAuthenticated=!0,t.user.name=e.name,t.user.email=e.email,t.user.idToken=e.idToken}},actions:{getProducts:function(t){return Object(at["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(nt,{headers:rt});case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.commit("setProducts",s),console.log(s);case 8:case"end":return e.stop()}}),e)})))()}},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:et,store:ot,render:function(t){return t(y)}}).$mount("#app")},"6a9c":function(t,e,a){},"85ec":function(t,e,a){},"899a":function(t,e,a){"use strict";a("6a9c")},cf05:function(t,e,a){t.exports=a.p+"img/logo.beb6088a.png"}});
//# sourceMappingURL=app.81f7f6aa.js.map