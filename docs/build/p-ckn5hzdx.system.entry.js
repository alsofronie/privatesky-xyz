var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r["throw"](e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return u([e,t])}}function u(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(e){a=[6,e];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-4cab88ee.system.js","./p-76cb34c8.system.js","./p-5e41a5bc.system.js","./p-bae44982.system.js"],function(e){"use strict";var t,n,r,o,i,a,s,u,c,l,f,h,p,v,d,m,y,g,b,w,k,P,I,T;return{setters:[function(e){t=e.r;n=e.c;r=e.h;o=e.g;i=e.d},function(e){a=e.C},function(e){s=e.m;u=e.a;c=e.s;l=e.b;f=e.c;h=e.d;p=e.e;v=e.f;d=e.g;m=e.h;y=e.i;g=e.j;b=e.k;w=e.l;k=e.n;P=e.o;I=e.p},function(e){T=e.A}],execute:function(){var O=undefined&&undefined.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)if(a=e[s])i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i;return o>3&&i&&Object.defineProperty(t,n,i),i};var L=e("app_menu",function(){function e(e){t(this,e);this.menuItems=null;this.hamburgerMaxWidth=600;this.showHamburgerMenu=false;this.showNavBar=false;this.menuItemClicked=n(this,"menuEvent",7);this.needMenuItemsEvt=n(this,"needMenuItems",7)}e.prototype.checkIfHamburgerIsNeeded=function(){this.showHamburgerMenu=document.documentElement.clientWidth<this.hamburgerMaxWidth};e.prototype.componentDidLoad=function(){this.checkIfHamburgerIsNeeded()};e.prototype.handleClick=function(e){e.preventDefault();var t=e.target.value;for(var n=0;n<this.menuItems.length;n++){this.menuItems[n].active=t===this.menuItems[n]}this.menuItemClicked.emit(e.target.value);this.menuItems=this.menuItems.slice()};e.prototype.toggleNavBar=function(){this.showNavBar=!this.showNavBar};e.prototype.componentWillLoad=function(){var e=this;if(!this.menuItems){this.needMenuItemsEvt.emit(function(t){e.menuItems=t})}};e.prototype.renderItem=function(e){var t=this;var n=this.itemRenderer?this.itemRenderer:"psk-menu-item-renderer";var o=[];if(e.children){for(var i=0;i<e.children.length;i++){o.push(this.renderItem(e.children[i]))}}return r(n,{onclick:function(e){return t.handleClick(e)},active:e.active?e.active:false,children:o,hamburger:this.showHamburgerMenu,value:e})};e.prototype.render=function(){var e=this;var t=[];for(var n=0;n<this.menuItems.length;n++){var o=this.menuItems[n];t.push(this.renderItem(o))}var i=this.menuItems.find(function(e){return e.active});if(this.showHamburgerMenu){t=t.map(function(t){return r("li",{onClick:e.toggleNavBar.bind(e),class:"nav-item"},t)});var a="collapse navbar-collapse "+(""+(this.showNavBar==true?"show":""));return r("nav",{class:"navbar navbar-dark "},r("a",{class:"navbar-brand",href:"#"},i?i.name:"Home"),r("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:this.toggleNavBar.bind(this),"aria-label":"Toggle navigation"},r("span",{class:"navbar-toggler-icon"})),r("div",{class:a},r("ul",{class:"navbar-nav mr-auto"},t)))}else{return t}};Object.defineProperty(e,"style",{get:function(){return":host{width:100%}.navbar{padding:.5rem 1rem .5rem 0}.navbar-brand{padding:5px}"},enumerable:true,configurable:true});return e}());O([a()],L.prototype,"itemRenderer",void 0);var x=[{name:"Home",path:"/home",icon:"fa-home",type:"route",component:"app-home",exact:true},{name:"PSK Components",path:"/psk-components",icon:"fa-bars",type:"abstract",children:[{name:"App Menu",path:"/psk-components/app-menu",component:"app-menu-usage",icon:"fa-bars",type:"route",exact:true},{name:"App Router",component:"app-router-usage",path:"/psk-components/app-router",icon:"fa-bars",type:"route",exact:true},{name:"Attachments List",component:"attachment-list-usage",path:"/psk-components/attach-list",icon:"fa-bars",type:"route",exact:true},{name:"Files Chooser",component:"files-chooser-usage",path:"/psk-components/files-chooser",icon:"fa-bars",type:"route",exact:true},{name:"Modal",component:"modal-usage",path:"/psk-components/modal",icon:"fa-bars",type:"route",exact:true},{name:"Page not found",component:"page-not-found-usage",path:"/psk-components/page-not-found",icon:"fa-bars",type:"route",exact:true},{name:"PIN Popup",component:"pin-popup-usage",path:"/psk-components/pin-popup",icon:"fa-bars",type:"route",exact:true},{name:"UI Loader",component:"ui-loader-usage",path:"/psk-components/ui-loader",icon:"fa-bars",type:"route",exact:true},{name:"User Profile",path:"/psk-components/user-profile",icon:"fa-bars",type:"route",component:"user-profile-usage",exact:true},{name:"Feedback Alert",path:"/psk-components/ui-feedback",icon:"fa-bars",type:"route",component:"feedback-alert-usage",exact:true}]},{name:"Controllers",path:"/controllers",icon:"fa-cog",type:"route",exact:true},{name:"Events",path:"/events",icon:"fa-bolt",type:"route",exact:true},{name:"Services",path:"/services",icon:"fa-server",type:"route",exact:true},{name:"Themes",path:"/themes",icon:"fa-paint-brush",type:"route",component:"psk-themes",exact:true}];var E=function(){function e(e){var t=this;this.element=o(e);this.element.addEventListener("menuEvent",function(e){e.stopImmediatePropagation();if(e.detail.type==="href"){window.location.href=e.detail.path}var n=e.detail;var r=new CustomEvent("routeChanged",{bubbles:true,cancelable:false,detail:n});t.element.dispatchEvent(r)});this.element.addEventListener("needMenuItems",function(e){var t=e.detail;if(t&&typeof t==="function"){t(x)}else{console.error("Callback was not properly provided!")}});this.element.addEventListener("getUserInfo",function(e){var t=e.detail;if(t&&typeof t==="function"){t(null,{username:"PSK Components",email:"info@privatesky.ro",avatar:"https://i.ibb.co/ZTcVc3L/psk-component.png"})}else{console.error("Callback was not properly provided!")}})}return e}();var _=650;var C=e("app_root",function(){function e(e){t(this,e);this.mobileLayout=false;if(!this.controller){this.controller=new E(this)}this.routeChangedEvent=n(this,"routeChanged",7)}e.prototype.checkLayout=function(){this.mobileLayout=document.documentElement.clientWidth<_};e.prototype.componentWillLoad=function(){this.checkLayout()};e.prototype.render=function(){return r("div",{class:"global_container "+(this.mobileLayout?"is-mobile":"")},r("aside",null,r("psk-user-profile",null),r("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:_}," "),this.mobileLayout===false?r("div",{class:"nav-footer"},"version 0.1"):null),r("section",null,r("nav",null),r("psk-app-router",null," "),this.mobileLayout===true?r("div",{class:"nav-footer bottom-stick"},"version 0.1"):null))};Object.defineProperty(e,"style",{get:function(){return"div.global_container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;height:100%;background-color:#f8f9fc}div.global_container.is-mobile{width:100%;-ms-flex-direction:column;flex-direction:column}.is-mobile aside{width:100%;height:auto;overflow:inherit}aside{height:100%;background-color:#4e73df;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(10%,#4e73df),to(#224abe));background-image:linear-gradient(180deg,#4e73df 10%,#224abe);color:#fff;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-ms-flex-order:1;order:1;-ms-flex:1;flex:1;min-width:200px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:auto}nav{width:100%;height:4.375rem;background-color:#fff!important;-webkit-box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important}.nav-footer{text-align:center;width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#142b86;font-size:85%}.nav-footer.bottom-stick{color:#fff;background:#224abe}section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden auto}app-menu,psk-app-router{-ms-flex-positive:1;flex-grow:1}psk-user-profile{-ms-flex-direction:column;flex-direction:column}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}section{-ms-flex-order:2;order:2;-ms-flex:8;flex:8}"},enumerable:true,configurable:true});return e}());var S=e("psk_app_router",function(){function e(e){t(this,e);this.menuItems=[];this.needMenuItemsEvt=n(this,"needMenuItems",7)}e.prototype.componentWillLoad=function(){var e=this;this.needMenuItemsEvt.emit(function(t){e.menuItems=t})};e.prototype.renderItems=function(e){var t=this;var n=e.map(function(e){if(e.children){return t.renderItems(e.children)}else{return r("stencil-route",{url:e.path,exact:e.exactMatch,component:e.component,componentProps:e.componentProps})}});return n};e.prototype.render=function(){var e=this.renderItems(this.menuItems);return r("div",{class:"app_container"},r("stencil-router",null,r("stencil-route-switch",{scrollTopOffset:0},e)))};return e}());var j=e("psk_user_profile",function(){function e(e){t(this,e);this.userInfo=null;this.getUserInfoEvent=n(this,"getUserInfo",7)}e.prototype.componentWillLoad=function(){var e=this;if(!this.userInfo){this.getUserInfoEvent.emit(function(t,n){if(!t){e.userInfo=n}else{console.error("Error getting user info",t)}})}};e.prototype.render=function(){var e=this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer";return r(e,{userInfo:this.userInfo})};return e}());var U=e("stencil_route",function(){function e(e){t(this,e);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}e.prototype.computeMatch=function(e){var t=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!e||t){return}this.previousMatch=this.match;return this.match=s(e.pathname,{path:this.url,exact:this.exact,strict:true})};e.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){e={};if(this.history&&this.history.location.hash){e={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){e={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(e)}else if(this.match&&!u(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(e)}return[2]})})};e.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadCompleted()];case 1:e.sent();return[2]}})})};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadCompleted()];case 1:e.sent();return[2]}})})};e.prototype.render=function(){if(!this.match||!this.history){return null}var e=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},e,{component:this.component}))}if(this.component){var t=this.component;return r(t,Object.assign({},e))}};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:true,configurable:true});return e}());T.injectProps(U,["location","history","historyType","routeViewsUpdated"]);var M=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var R=function(e,t,n){return s(e,{path:t,exact:n,strict:true})};var H=function(e){return e.tagName==="STENCIL-ROUTE"};var A=e("stencil_route_switch",function(){function e(e){t(this,e);this.group=M();this.subscribers=[];this.queue=i(this,"queue")}e.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};e.prototype.regenerateSubscribers=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;var r=this;return __generator(this,function(o){if(e==null){return[2]}t=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(H).map(function(n,r){var o=R(e.pathname,n.url,n.exact);if(o&&t===-1){t=r}return{el:n,match:o}});if(t===-1){return[2]}if(this.activeIndex===t){this.subscribers[t].el.match=this.subscribers[t].match;return[2]}this.activeIndex=t;n=this.subscribers[this.activeIndex];if(this.scrollTopOffset){n.el.scrollTopOffset=this.scrollTopOffset}n.el.group=this.group;n.el.match=n.match;n.el.componentUpdated=function(e){r.queue.write(function(){r.subscribers.forEach(function(e,t){e.el.componentUpdated=undefined;if(t===r.activeIndex){return e.el.style.display=""}if(r.scrollTopOffset){e.el.scrollTopOffset=r.scrollTopOffset}e.el.group=r.group;e.el.match=null;e.el.style.display="none"})});if(r.routeViewsUpdated){r.routeViewsUpdated(Object.assign({scrollTopOffset:r.scrollTopOffset},e))}};return[2]})})};e.prototype.render=function(){return r("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return e}());T.injectProps(A,["location","routeViewsUpdated"]);var N=function(e){var t=[];for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}if(!e){console.warn.apply(console,t)}};var B=function(){var e;var t=[];var n=function(t){N(e==null,"A history supports only one prompt at a time");e=t;return function(){if(e===t){e=null}}};var r=function(t,n,r,o){if(e!=null){var i=typeof e==="function"?e(t,n):e;if(typeof i==="string"){if(typeof r==="function"){r(i,o)}else{N(false,"A history needs a getUserConfirmation function in order to use a prompt message");o(true)}}else{o(i!==false)}}else{o(true)}};var o=function(e){var n=true;var r=function(){var t=[];for(var r=0;r<arguments.length;r++){t[r]=arguments[r]}if(n){e.apply(void 0,t)}};t.push(r);return function(){n=false;t=t.filter(function(e){return e!==r})}};var i=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}t.forEach(function(t){return t.apply(void 0,e)})};return{setPrompt:n,confirmTransitionTo:r,appendListener:o,notifyListeners:i}};var V=function(e,t){if(t===void 0){t="scrollPositions"}var n=new Map;var r=function(t,r){n.set(t,r);if(c(e,"sessionStorage")){var o=[];n.forEach(function(e,t){o.push([t,e])});e.sessionStorage.setItem("scrollPositions",JSON.stringify(o))}};var o=function(e){return n.get(e)};var i=function(e){return n.has(e)};var a=function(t){r(t,[e.scrollX,e.scrollY])};if(c(e,"sessionStorage")){var s=e.sessionStorage.getItem(t);n=s?new Map(JSON.parse(s)):n}if("scrollRestoration"in e.history){history.scrollRestoration="manual"}return{set:r,get:o,has:i,capture:a}};var W="popstate";var D="hashchange";var Y=function(e,t){if(t===void 0){t={}}var n=false;var r=e.history;var o=e.location;var i=e.navigator;var a=l(e);var s=!f(i);var u=V(e);var c=t.forceRefresh!=null?t.forceRefresh:false;var k=t.getUserConfirmation!=null?t.getUserConfirmation:b;var P=t.keyLength!=null?t.keyLength:6;var I=t.basename?h(p(t.basename)):"";var T=function(){try{return e.history.state||{}}catch(e){return{}}};var O=function(e){e=e||{};var t=e.key,n=e.state;var r=o.pathname,i=o.search,a=o.hash;var s=r+i+a;N(!I||m(s,I),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+I+'".');if(I){s=y(s,I)}return v(s,n,t||d(P))};var L=B();var x=function(e){u.capture(Z.location.key);Object.assign(Z,e);Z.location.scrollPosition=u.get(Z.location.key);Z.length=r.length;L.notifyListeners(Z.location,Z.action)};var E=function(e){if(!w(i,e)){C(O(e.state))}};var _=function(){C(O(T()))};var C=function(e){if(n){n=false;x()}else{var t="POP";L.confirmTransitionTo(e,t,k,function(n){if(n){x({action:t,location:e})}else{S(e)}})}};var S=function(e){var t=Z.location;var r=U.indexOf(t.key);var o=U.indexOf(e.key);if(r===-1){r=0}if(o===-1){o=0}var i=r-o;if(i){n=true;q(i)}};var j=O(T());var U=[j.key];var M=0;var R=false;var H=function(e){return I+g(e)};var A=function(e,t){N(!(typeof e==="object"&&e.state!==undefined&&t!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var n="PUSH";var i=v(e,t,d(P),Z.location);L.confirmTransitionTo(i,n,k,function(e){if(!e){return}var t=H(i);var s=i.key,u=i.state;if(a){r.pushState({key:s,state:u},"",t);if(c){o.href=t}else{var l=U.indexOf(Z.location.key);var f=U.slice(0,l===-1?0:l+1);f.push(i.key);U=f;x({action:n,location:i})}}else{N(u===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");o.href=t}})};var Y=function(e,t){N(!(typeof e==="object"&&e.state!==undefined&&t!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var n="REPLACE";var i=v(e,t,d(P),Z.location);L.confirmTransitionTo(i,n,k,function(e){if(!e){return}var t=H(i);var s=i.key,u=i.state;if(a){r.replaceState({key:s,state:u},"",t);if(c){o.replace(t)}else{var l=U.indexOf(Z.location.key);if(l!==-1){U[l]=i.key}x({action:n,location:i})}}else{N(u===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");o.replace(t)}})};var q=function(e){r.go(e)};var F=function(){return q(-1)};var X=function(){return q(1)};var J=function(t){M+=t;if(M===1){e.addEventListener(W,E);if(s){e.addEventListener(D,_)}}else if(M===0){e.removeEventListener(W,E);if(s){e.removeEventListener(D,_)}}};var K=function(e){if(e===void 0){e=""}var t=L.setPrompt(e);if(!R){J(1);R=true}return function(){if(R){R=false;J(-1)}return t()}};var G=function(e){var t=L.appendListener(e);J(1);return function(){J(-1);t()}};var Z={length:r.length,action:"POP",location:j,createHref:H,push:A,replace:Y,go:q,goBack:F,goForward:X,block:K,listen:G,win:e};return Z};var q="hashchange";var F={hashbang:{encodePath:function(e){return e.charAt(0)==="!"?e:"!/"+P(e)},decodePath:function(e){return e.charAt(0)==="!"?e.substr(1):e}},noslash:{encodePath:P,decodePath:p},slash:{encodePath:p,decodePath:p}};var X=function(e,t){if(t===void 0){t={}}var n=false;var r=null;var o=0;var i=false;var a=e.location;var s=e.history;var u=k(e.navigator);var c=t.keyLength!=null?t.keyLength:6;var l=t.getUserConfirmation,f=l===void 0?b:l,w=t.hashType,P=w===void 0?"slash":w;var T=t.basename?h(p(t.basename)):"";var O=F[P],L=O.encodePath,x=O.decodePath;var E=function(){var e=a.href;var t=e.indexOf("#");return t===-1?"":e.substring(t+1)};var _=function(e){return a.hash=e};var C=function(e){var t=a.href.indexOf("#");a.replace(a.href.slice(0,t>=0?t:0)+"#"+e)};var S=function(){var e=x(E());N(!T||m(e,T),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+e+'" to begin with "'+T+'".');if(T){e=y(e,T)}return v(e,undefined,d(c))};var j=B();var U=function(e){Object.assign(ee,e);ee.length=s.length;j.notifyListeners(ee.location,ee.action)};var M=function(){var e=E();var t=L(e);if(e!==t){C(t)}else{var o=S();var i=ee.location;if(!n&&I(i,o)){return}if(r===g(o)){return}r=null;R(o)}};var R=function(e){if(n){n=false;U()}else{var t="POP";j.confirmTransitionTo(e,t,f,function(n){if(n){U({action:t,location:e})}else{H(e)}})}};var H=function(e){var t=ee.location;var r=D.lastIndexOf(g(t));var o=D.lastIndexOf(g(e));if(r===-1){r=0}if(o===-1){o=0}var i=r-o;if(i){n=true;K(i)}};var A=E();var V=L(A);if(A!==V){C(V)}var W=S();var D=[g(W)];var Y=function(e){return"#"+L(T+g(e))};var X=function(e,t){N(t===undefined,"Hash history cannot push state; it is ignored");var n="PUSH";var o=v(e,undefined,d(c),ee.location);j.confirmTransitionTo(o,n,f,function(e){if(!e){return}var t=g(o);var i=L(T+t);var a=E()!==i;if(a){r=t;_(i);var s=D.lastIndexOf(g(ee.location));var u=D.slice(0,s===-1?0:s+1);u.push(t);D=u;U({action:n,location:o})}else{N(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");U()}})};var J=function(e,t){N(t===undefined,"Hash history cannot replace state; it is ignored");var n="REPLACE";var o=v(e,undefined,d(c),ee.location);j.confirmTransitionTo(o,n,f,function(e){if(!e){return}var t=g(o);var i=L(T+t);var a=E()!==i;if(a){r=t;C(i)}var s=D.indexOf(g(ee.location));if(s!==-1){D[s]=t}U({action:n,location:o})})};var K=function(e){N(u,"Hash history go(n) causes a full page reload in this browser");s.go(e)};var G=function(){return K(-1)};var Z=function(){return K(1)};var z=function(e,t){o+=t;if(o===1){e.addEventListener(q,M)}else if(o===0){e.removeEventListener(q,M)}};var Q=function(t){if(t===void 0){t=""}var n=j.setPrompt(t);if(!i){z(e,1);i=true}return function(){if(i){i=false;z(e,-1)}return n()}};var $=function(t){var n=j.appendListener(t);z(e,1);return function(){z(e,-1);n()}};var ee={length:s.length,action:"POP",location:W,createHref:Y,push:X,replace:J,go:K,goBack:G,goForward:Z,block:Q,listen:$,win:e};return ee};var J=function(e,t){var n=e.pathname.indexOf(t)==0?"/"+e.pathname.slice(t.length):e.pathname;return Object.assign({},e,{pathname:n})};var K={browser:Y,hash:X};var G=e("stencil_router",function(){function e(e){var n=this;t(this,e);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(e){if(e===void 0){e={}}if(n.history&&e.scrollToId&&n.historyType==="browser"){var t=n.history.win.document.getElementById(e.scrollToId);if(t){return t.scrollIntoView()}}n.scrollTo(e.scrollTopOffset||n.scrollTopOffset)};this.isServer=i(this,"isServer");this.queue=i(this,"queue")}e.prototype.componentWillLoad=function(){var e=this;this.history=K[this.historyType](this.el.ownerDocument.defaultView);this.history.listen(function(t){t=J(t,e.root);e.location=t});this.location=J(this.history.location,this.root)};e.prototype.scrollTo=function(e){var t=this.history;if(e==null||this.isServer||!t){return}if(t.action==="POP"&&Array.isArray(t.location.scrollPosition)){return this.queue.write(function(){if(t&&t.location&&Array.isArray(t.location.scrollPosition)){t.win.scrollTo(t.location.scrollPosition[0],t.location.scrollPosition[1])}})}return this.queue.write(function(){t.win.scrollTo(0,e)})};e.prototype.render=function(){if(!this.location||!this.history){return}var e={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return r(T.Provider,{state:e},r("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return e}())}}});