var __assign=this&&this.__assign||function(){__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o))e[o]=t[o]}return e};return __assign.apply(this,arguments)};var __awaiter=this&&this.__awaiter||function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r["throw"](e))}catch(t){i(t)}}function c(e){e.done?n(e.value):o(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return c([e,t])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(s){a=[6,s];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r};System.register(["./p-bce1ce19.system.js","./p-f36ee125.system.js","./p-168ec2c4.system.js","./p-91e9e4d4.system.js"],(function(e){"use strict";var t,n,r,o,i,a,s,c,u,l,f,p,h,d,v,m,y,g,b,k,w,P,_,I;return{setters:[function(e){t=e.r;n=e.c;r=e.h;o=e.g;i=e.d},function(e){a=e.C},function(e){s=e.m;c=e.a;u=e.s;l=e.b;f=e.c;p=e.d;h=e.e;d=e.f;v=e.g;m=e.h;y=e.i;g=e.j;b=e.k;k=e.l;w=e.n;P=e.o;_=e.p},function(e){I=e.A}],execute:function(){var x=undefined&&undefined.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)if(a=e[s])i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i;return o>3&&i&&Object.defineProperty(t,n,i),i};var O=e("app_menu",function(){function e(e){t(this,e);this.menuItems=null;this.hamburgerMaxWidth=600;this.showHamburgerMenu=false;this.showNavBar=false;this.menuItemClicked=n(this,"menuEvent",7);this.needMenuItemsEvt=n(this,"needMenuItems",7)}e.prototype.checkIfHamburgerIsNeeded=function(){this.showHamburgerMenu=document.documentElement.clientWidth<this.hamburgerMaxWidth};e.prototype.componentDidLoad=function(){this.checkIfHamburgerIsNeeded()};e.prototype.handleClick=function(e){e.preventDefault();var t=e.target.value;for(var n=0;n<this.menuItems.length;n++){this.menuItems[n].active=t===this.menuItems[n]}this.menuItemClicked.emit(e.target.value);this.menuItems=__spreadArrays(this.menuItems)};e.prototype.toggleNavBar=function(){this.showNavBar=!this.showNavBar};e.prototype.componentWillLoad=function(){var e=this;if(!this.menuItems){this.needMenuItemsEvt.emit((function(t){e.menuItems=t}))}};e.prototype.renderItem=function(e){var t=this;var n=this.itemRenderer?this.itemRenderer:"psk-menu-item-renderer";var o=[];if(e.children){for(var i=0;i<e.children.length;i++){o.push(this.renderItem(e.children[i]))}}return r(n,{onclick:function(e){return t.handleClick(e)},active:e.active?e.active:false,children:o,hamburger:this.showHamburgerMenu,value:e})};e.prototype.render=function(){var e=this;if(!this.menuItems){return}var t=[];for(var n=0;n<this.menuItems.length;n++){var o=this.menuItems[n];t.push(this.renderItem(o))}var i=this.menuItems.find((function(e){return e.active}));if(this.showHamburgerMenu){t=t.map((function(t){return r("li",{onClick:e.toggleNavBar.bind(e),class:"nav-item"},t)}));var a="collapse navbar-collapse "+(""+(this.showNavBar==true?"show":""));return r("nav",{class:"navbar navbar-dark "},r("a",{class:"navbar-brand",href:"#"},i?i.name:"Home"),r("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:this.toggleNavBar.bind(this),"aria-label":"Toggle navigation"},r("span",{class:"navbar-toggler-icon"})),r("div",{class:a},r("ul",{class:"navbar-nav mr-auto"},t)))}else{return t}};Object.defineProperty(e,"style",{get:function(){return":host{width:100%}.navbar{padding:.5rem 1rem .5rem 0}.navbar-brand{padding:5px}"},enumerable:true,configurable:true});return e}());x([a()],O.prototype,"itemRenderer",void 0);var T={basePagesUrl:"https://raw.githubusercontent.com/PrivateSky/pwc-apps/master/src/pages/",defaultPageProp:{icon:"fa-bars",type:"route",component:"psk-page-loader",exact:true},profile:{username:"PSK Components",email:"info@privatesky.ro",avatar:"https://i.ibb.co/ZTcVc3L/psk-component.png"}};var L=[{name:"Home",path:"/home",icon:"fa-home",type:"route",component:"app-home",exact:true},{name:"PSK Components",path:"/psk-components",icon:"fa-bars",type:"abstract",children:[{name:"App Menu",path:"/psk-components/app-menu",component:"app-menu-usage",icon:"fa-bars",type:"route",exact:true},{name:"App Router",component:"app-router-usage",path:"/psk-components/app-router",icon:"fa-bars",type:"route",exact:true},{name:"Attachments List",component:"attachment-list-usage",path:"/psk-components/attach-list",icon:"fa-bars",type:"route",exact:true},{name:"Files Chooser",component:"files-chooser-usage",path:"/psk-components/files-chooser",icon:"fa-bars",type:"route",exact:true},{name:"Modal",component:"modal-usage",path:"/psk-components/modal",icon:"fa-bars",type:"route",exact:true},{name:"Page not found",component:"page-not-found-usage",path:"/psk-components/page-not-found",icon:"fa-bars",type:"route",exact:true},{name:"PIN Popup",component:"pin-popup-usage",path:"/psk-components/pin-popup",icon:"fa-bars",type:"route",exact:true},{name:"UI Loader",component:"ui-loader-usage",path:"/psk-components/ui-loader",icon:"fa-bars",type:"route",exact:true},{name:"User Profile",path:"/psk-components/user-profile",icon:"fa-bars",type:"route",component:"user-profile-usage",exact:true},{name:"Feedback Alert",path:"/psk-components/ui-feedback",icon:"fa-bars",type:"route",component:"feedback-alert-usage",exact:true},{name:"Feedback List",path:"/psk-components/list-feedback",icon:"fa-bars",type:"route",component:"feedback-list-usage",exact:true},{name:"Wizard",path:"/psk-components/wizard",icon:"fa-bars",type:"route",component:"wizard-usage",exact:true}]},{name:"Events",path:"/events",icon:"fa-bolt",type:"route",exact:true},{name:"Services",path:"/services",icon:"fa-server",type:"route",exact:true}];var E=[{stepName:"Name your CSB",stepIndex:0,stepComponent:"enter-csb-name"},{stepName:"Select CSB type(s)",stepIndex:1,stepComponent:"select-csb-type"},{stepName:"Save recovery Phrase",stepIndex:2,stepComponent:"save-recovery-phrase"},{stepName:"Finish",stepIndex:3,stepComponent:"finish-page"}];var S=T.basePagesUrl+"pages-structure.json";var C=function(){function e(e){var t=this;this.element=o(e);this.element.addEventListener("menuEvent",(function(e){e.stopImmediatePropagation();if(e.detail.type==="href"){window.location.href=e.detail.path}var n=e.detail;var r=new CustomEvent("routeChanged",{bubbles:true,cancelable:false,detail:n});t.element.dispatchEvent(r)}));this.element.addEventListener("needMenuItems",(function(e){var t=JSON.parse(JSON.stringify(L));var n=function(t){var n=e.detail;if(n&&typeof n==="function"){n(t)}else{console.error("Callback was not properly provided!")}};var r=function(e){e.forEach((function(e){for(var t in T.defaultPageProp){if(!e[t]){e[t]=T.defaultPageProp[t]}}if(e.component==="psk-page-loader"){if(!e.componentProps){e.componentProps={}}e.componentProps.pageUrl=T.basePagesUrl+e.pageSrc}}))};var o=new XMLHttpRequest;o.open("GET",S);o.onload=function(){if(o.status!=200){n(t)}else{var e=JSON.parse(o.responseText);r(e);var i=t.map((function(e){return e.name}));e.forEach((function(n,r){if(n.parent){var o=i.indexOf(n.parent);if(o){if(!t[o].children){t[o].children=[]}n.path=t[o].path+n.path;t[o].children.push(n);e.splice(r,1)}}}));n(t.concat(e))}};o.onerror=function(){n(t)};o.send()}));this.element.addEventListener("getUserInfo",(function(e){var t=e.detail;if(t&&typeof t==="function"){t(null,T.profile)}else{console.error("Callback was not properly provided!")}}));this.element.addEventListener("needWizardConfiguration",(function(e){var t=e.detail;if(t&&typeof t==="function"){t(E)}else{console.error("Callback was not properly provided!")}}));this.element.addEventListener("changeStep",(function(e){var n=e.detail.callback;if(n&&typeof n==="function"){t._handleChangeStep(e.detail)}else{console.error("Callback was not properly provided!")}}));this.element.addEventListener("sendPin",(function(e){var n=e.detail.callback;if(n&&typeof n==="function"){t._handleSendPin(e.detail)}else{console.error("Callback was not properly provided!")}}))}e.prototype._handleSendPin=function(e){var t=e.pin,n=e.callback;if(!t||t.trim().length<6){n("Invalid PIN length. Minimum is 6!")}else{console.log(t);n(null)}};e.prototype.__getPropertyValue=function(e,t){if(e.stepProperties&&e.stepProperties.hasOwnProperty(t)){return e.stepProperties[t]}return null};e.prototype._handleChangeStep=function(e){var t=e.stepIndexToDisplay;var n=e.callback;var r=e.wizardSteps;var o=e.activeStep;var i=null;if(t<0||t>=r.length){i="Index has no valid value"}else if(t<=o.stepIndex){r[o.stepIndex]=__assign({},o);o=__assign({},r[t])}else{switch(o.stepProperties.stepPhase){case"csb-name":{var a=this.__getPropertyValue(o,"csbName");if(a===null||a.trim().length===0){i="CSB Name is empty"}else{o.stepCompleted=true;r[o.stepIndex]=__assign({},o);o=__assign({},r[t])}break}case"csb-type":{var s=this.__getPropertyValue(o,"csbType");if(s===null||s.trim().length===0){i="CSB Type is empty"}else{o.stepCompleted=true;r[o.stepIndex]=__assign({},o);o=__assign({},r[t])}break}case"save-recovery-phrase":{var c=this.__getPropertyValue(o,"saveRecoveryPhrase");if(c===null){i="Recovery phase property is not sent"}else{o.stepCompleted=true;r[o.stepIndex]=__assign({},o);o=__assign({},r[t])}break}default:break}}n(i,{activeStep:o,wizardSteps:r})};return e}();var j=650;var U=e("app_root",function(){function e(e){t(this,e);this.mobileLayout=false;if(!this.controller){this.controller=new C(this)}this.routeChangedEvent=n(this,"routeChanged",7)}e.prototype.checkLayout=function(){this.mobileLayout=document.documentElement.clientWidth<j};e.prototype.componentWillLoad=function(){this.checkLayout()};e.prototype.render=function(){return r("div",{class:"global_container "+(this.mobileLayout?"is-mobile":"")},r("aside",null,r("psk-user-profile",null),r("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:j}," "),this.mobileLayout===false?r("div",{class:"nav-footer"},"version 0.1"):null),r("section",null,r("nav",null),r("psk-app-router",null," "),this.mobileLayout===true?r("div",{class:"nav-footer bottom-stick"},"version 0.1"):null))};Object.defineProperty(e,"style",{get:function(){return"div.global_container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;height:100%;background-color:#f8f9fc}div.global_container.is-mobile{width:100%;-ms-flex-direction:column;flex-direction:column}.is-mobile aside{width:100%;height:auto;overflow:inherit}aside{height:100%;background-color:#4e73df;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(10%,#4e73df),to(#224abe));background-image:linear-gradient(180deg,#4e73df 10%,#224abe);color:#fff;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-ms-flex-order:1;order:1;-ms-flex:1;flex:1;min-width:200px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:auto}nav{width:100%;height:4.375rem;background-color:#fff!important;-webkit-box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important}.nav-footer{text-align:center;width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#142b86;font-size:85%}.nav-footer.bottom-stick{color:#fff;background:#224abe}section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden auto}app-menu,psk-app-router{-ms-flex-positive:1;flex-grow:1}psk-user-profile{-ms-flex-direction:column;flex-direction:column}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}section{-ms-flex-order:2;order:2;-ms-flex:8;flex:8}"},enumerable:true,configurable:true});return e}());var R=e("psk_app_router",function(){function e(e){t(this,e);this.menuItems=[];this.needMenuItemsEvt=n(this,"needMenuItems",7)}e.prototype.componentWillLoad=function(){var e=this;this.needMenuItemsEvt.emit((function(t){e.menuItems=t}))};e.prototype.renderItems=function(e){var t=this;var n=e.map((function(e){if(e.children){return t.renderItems(e.children)}else{return r("stencil-route",{url:e.path,exact:e.exactMatch,component:e.component,componentProps:e.componentProps})}}));return n};e.prototype.render=function(){var e=this.renderItems(this.menuItems);if(e.length===0){return r("psk-ui-loader",{shouldBeRendered:true})}return r("div",{class:"app_container"},r("stencil-router",null,r("stencil-route-switch",{scrollTopOffset:0},e)))};return e}());var M=e("psk_ui_loader",function(){function e(e){t(this,e);this.shouldBeRendered=false}e.prototype.render=function(){if(this.shouldBeRendered){return r("div",{class:"loader-container"},r("div",{class:"sk-fading-circle"},r("div",{class:"sk-circle1 sk-circle"}),r("div",{class:"sk-circle2 sk-circle"}),r("div",{class:"sk-circle3 sk-circle"}),r("div",{class:"sk-circle4 sk-circle"}),r("div",{class:"sk-circle5 sk-circle"}),r("div",{class:"sk-circle6 sk-circle"}),r("div",{class:"sk-circle7 sk-circle"}),r("div",{class:"sk-circle8 sk-circle"}),r("div",{class:"sk-circle9 sk-circle"}),r("div",{class:"sk-circle10 sk-circle"}),r("div",{class:"sk-circle11 sk-circle"}),r("div",{class:"sk-circle12 sk-circle"})))}};Object.defineProperty(e,"watchers",{get:function(){return{shouldBeRendered:["render"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".sk-fading-circle{margin:auto;width:40px;height:60px;position:relative}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#3944ff;border-radius:100%;-webkit-animation:sk-circleFadeDelay 1.2s ease-in-out infinite both;animation:sk-circleFadeDelay 1.2s ease-in-out infinite both}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}\@-webkit-keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}\@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}.loader-container{background:rgba(173,174,255,.6);height:100%;display:-ms-flexbox;display:flex}"},enumerable:true,configurable:true});return e}());var N=e("psk_user_profile",function(){function e(e){t(this,e);this.userInfo=null;this.getUserInfoEvent=n(this,"getUserInfo",7)}e.prototype.componentWillLoad=function(){var e=this;if(!this.userInfo){this.getUserInfoEvent.emit((function(t,n){if(!t){e.userInfo=n}else{console.error("Error getting user info",t)}}))}};e.prototype.render=function(){var e=this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer";return r(e,{userInfo:this.userInfo})};return e}());var A=e("stencil_route",function(){function e(e){t(this,e);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}e.prototype.computeMatch=function(e){var t=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!e||t){return}this.previousMatch=this.match;return this.match=s(e.pathname,{path:this.url,exact:this.exact,strict:true})};e.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e={};if(this.history&&this.history.location.hash){e={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){e={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(e)}else if(this.match&&!c(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(e)}return[2]}))}))};e.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.loadCompleted()];case 1:e.sent();return[2]}}))}))};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.loadCompleted()];case 1:e.sent();return[2]}}))}))};e.prototype.render=function(){if(!this.match||!this.history){return null}var e=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},e,{component:this.component}))}if(this.component){var t=this.component;return r(t,Object.assign({},e))}};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:true,configurable:true});return e}());I.injectProps(A,["location","history","historyType","routeViewsUpdated"]);var H=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var B=function(e,t,n){return s(e,{path:t,exact:n,strict:true})};var V=function(e){return e.tagName==="STENCIL-ROUTE"};var W=e("stencil_route_switch",function(){function e(e){t(this,e);this.group=H();this.subscribers=[];this.queue=i(this,"queue")}e.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};e.prototype.regenerateSubscribers=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;var r=this;return __generator(this,(function(o){if(e==null){return[2]}t=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(V).map((function(n,r){var o=B(e.pathname,n.url,n.exact);if(o&&t===-1){t=r}return{el:n,match:o}}));if(t===-1){return[2]}if(this.activeIndex===t){this.subscribers[t].el.match=this.subscribers[t].match;return[2]}this.activeIndex=t;n=this.subscribers[this.activeIndex];if(this.scrollTopOffset){n.el.scrollTopOffset=this.scrollTopOffset}n.el.group=this.group;n.el.match=n.match;n.el.componentUpdated=function(e){r.queue.write((function(){r.subscribers.forEach((function(e,t){e.el.componentUpdated=undefined;if(t===r.activeIndex){return e.el.style.display=""}if(r.scrollTopOffset){e.el.scrollTopOffset=r.scrollTopOffset}e.el.group=r.group;e.el.match=null;e.el.style.display="none"}))}));if(r.routeViewsUpdated){r.routeViewsUpdated(Object.assign({scrollTopOffset:r.scrollTopOffset},e))}};return[2]}))}))};e.prototype.render=function(){return r("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return e}());I.injectProps(W,["location","routeViewsUpdated"]);var D=function(e){var t=[];for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}if(!e){console.warn.apply(console,t)}};var Y=function(){var e;var t=[];var n=function(t){D(e==null,"A history supports only one prompt at a time");e=t;return function(){if(e===t){e=null}}};var r=function(t,n,r,o){if(e!=null){var i=typeof e==="function"?e(t,n):e;if(typeof i==="string"){if(typeof r==="function"){r(i,o)}else{D(false,"A history needs a getUserConfirmation function in order to use a prompt message");o(true)}}else{o(i!==false)}}else{o(true)}};var o=function(e){var n=true;var r=function(){var t=[];for(var r=0;r<arguments.length;r++){t[r]=arguments[r]}if(n){e.apply(void 0,t)}};t.push(r);return function(){n=false;t=t.filter((function(e){return e!==r}))}};var i=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}t.forEach((function(t){return t.apply(void 0,e)}))};return{setPrompt:n,confirmTransitionTo:r,appendListener:o,notifyListeners:i}};var q=function(e,t){if(t===void 0){t="scrollPositions"}var n=new Map;var r=function(t,r){n.set(t,r);if(u(e,"sessionStorage")){var o=[];n.forEach((function(e,t){o.push([t,e])}));e.sessionStorage.setItem("scrollPositions",JSON.stringify(o))}};var o=function(e){return n.get(e)};var i=function(e){return n.has(e)};var a=function(t){r(t,[e.scrollX,e.scrollY])};if(u(e,"sessionStorage")){var s=e.sessionStorage.getItem(t);n=s?new Map(JSON.parse(s)):n}if("scrollRestoration"in e.history){history.scrollRestoration="manual"}return{set:r,get:o,has:i,capture:a}};var z="popstate";var F="hashchange";var X=function(e,t){if(t===void 0){t={}}var n=false;var r=e.history;var o=e.location;var i=e.navigator;var a=l(e);var s=!f(i);var c=q(e);var u=t.forceRefresh!=null?t.forceRefresh:false;var w=t.getUserConfirmation!=null?t.getUserConfirmation:b;var P=t.keyLength!=null?t.keyLength:6;var _=t.basename?p(h(t.basename)):"";var I=function(){try{return e.history.state||{}}catch(t){return{}}};var x=function(e){e=e||{};var t=e.key,n=e.state;var r=o.pathname,i=o.search,a=o.hash;var s=r+i+a;D(!_||m(s,_),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+_+'".');if(_){s=y(s,_)}return d(s,n,t||v(P))};var O=Y();var T=function(e){c.capture(K.location.key);Object.assign(K,e);K.location.scrollPosition=c.get(K.location.key);K.length=r.length;O.notifyListeners(K.location,K.action)};var L=function(e){if(!k(i,e)){S(x(e.state))}};var E=function(){S(x(I()))};var S=function(e){if(n){n=false;T()}else{var t="POP";O.confirmTransitionTo(e,t,w,(function(n){if(n){T({action:t,location:e})}else{C(e)}}))}};var C=function(e){var t=K.location;var r=U.indexOf(t.key);var o=U.indexOf(e.key);if(r===-1){r=0}if(o===-1){o=0}var i=r-o;if(i){n=true;B(i)}};var j=x(I());var U=[j.key];var R=0;var M=false;var N=function(e){return _+g(e)};var A=function(e,t){D(!(typeof e==="object"&&e.state!==undefined&&t!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var n="PUSH";var i=d(e,t,v(P),K.location);O.confirmTransitionTo(i,n,w,(function(e){if(!e){return}var t=N(i);var s=i.key,c=i.state;if(a){r.pushState({key:s,state:c},"",t);if(u){o.href=t}else{var l=U.indexOf(K.location.key);var f=U.slice(0,l===-1?0:l+1);f.push(i.key);U=f;T({action:n,location:i})}}else{D(c===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");o.href=t}}))};var H=function(e,t){D(!(typeof e==="object"&&e.state!==undefined&&t!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var n="REPLACE";var i=d(e,t,v(P),K.location);O.confirmTransitionTo(i,n,w,(function(e){if(!e){return}var t=N(i);var s=i.key,c=i.state;if(a){r.replaceState({key:s,state:c},"",t);if(u){o.replace(t)}else{var l=U.indexOf(K.location.key);if(l!==-1){U[l]=i.key}T({action:n,location:i})}}else{D(c===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");o.replace(t)}}))};var B=function(e){r.go(e)};var V=function(){return B(-1)};var W=function(){return B(1)};var X=function(t){R+=t;if(R===1){e.addEventListener(z,L);if(s){e.addEventListener(F,E)}}else if(R===0){e.removeEventListener(z,L);if(s){e.removeEventListener(F,E)}}};var J=function(e){if(e===void 0){e=""}var t=O.setPrompt(e);if(!M){X(1);M=true}return function(){if(M){M=false;X(-1)}return t()}};var G=function(e){var t=O.appendListener(e);X(1);return function(){X(-1);t()}};var K={length:r.length,action:"POP",location:j,createHref:N,push:A,replace:H,go:B,goBack:V,goForward:W,block:J,listen:G,win:e};return K};var J="hashchange";var G={hashbang:{encodePath:function(e){return e.charAt(0)==="!"?e:"!/"+P(e)},decodePath:function(e){return e.charAt(0)==="!"?e.substr(1):e}},noslash:{encodePath:P,decodePath:h},slash:{encodePath:h,decodePath:h}};var K=function(e,t){if(t===void 0){t={}}var n=false;var r=null;var o=0;var i=false;var a=e.location;var s=e.history;var c=w(e.navigator);var u=t.keyLength!=null?t.keyLength:6;var l=t.getUserConfirmation,f=l===void 0?b:l,k=t.hashType,P=k===void 0?"slash":k;var I=t.basename?p(h(t.basename)):"";var x=G[P],O=x.encodePath,T=x.decodePath;var L=function(){var e=a.href;var t=e.indexOf("#");return t===-1?"":e.substring(t+1)};var E=function(e){return a.hash=e};var S=function(e){var t=a.href.indexOf("#");a.replace(a.href.slice(0,t>=0?t:0)+"#"+e)};var C=function(){var e=T(L());D(!I||m(e,I),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+e+'" to begin with "'+I+'".');if(I){e=y(e,I)}return d(e,undefined,v(u))};var j=Y();var U=function(e){Object.assign(ee,e);ee.length=s.length;j.notifyListeners(ee.location,ee.action)};var R=function(){var e=L();var t=O(e);if(e!==t){S(t)}else{var o=C();var i=ee.location;if(!n&&_(i,o)){return}if(r===g(o)){return}r=null;M(o)}};var M=function(e){if(n){n=false;U()}else{var t="POP";j.confirmTransitionTo(e,t,f,(function(n){if(n){U({action:t,location:e})}else{N(e)}}))}};var N=function(e){var t=ee.location;var r=V.lastIndexOf(g(t));var o=V.lastIndexOf(g(e));if(r===-1){r=0}if(o===-1){o=0}var i=r-o;if(i){n=true;F(i)}};var A=L();var H=O(A);if(A!==H){S(H)}var B=C();var V=[g(B)];var W=function(e){return"#"+O(I+g(e))};var q=function(e,t){D(t===undefined,"Hash history cannot push state; it is ignored");var n="PUSH";var o=d(e,undefined,v(u),ee.location);j.confirmTransitionTo(o,n,f,(function(e){if(!e){return}var t=g(o);var i=O(I+t);var a=L()!==i;if(a){r=t;E(i);var s=V.lastIndexOf(g(ee.location));var c=V.slice(0,s===-1?0:s+1);c.push(t);V=c;U({action:n,location:o})}else{D(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");U()}}))};var z=function(e,t){D(t===undefined,"Hash history cannot replace state; it is ignored");var n="REPLACE";var o=d(e,undefined,v(u),ee.location);j.confirmTransitionTo(o,n,f,(function(e){if(!e){return}var t=g(o);var i=O(I+t);var a=L()!==i;if(a){r=t;S(i)}var s=V.indexOf(g(ee.location));if(s!==-1){V[s]=t}U({action:n,location:o})}))};var F=function(e){D(c,"Hash history go(n) causes a full page reload in this browser");s.go(e)};var X=function(){return F(-1)};var K=function(){return F(1)};var Z=function(e,t){o+=t;if(o===1){e.addEventListener(J,R)}else if(o===0){e.removeEventListener(J,R)}};var Q=function(t){if(t===void 0){t=""}var n=j.setPrompt(t);if(!i){Z(e,1);i=true}return function(){if(i){i=false;Z(e,-1)}return n()}};var $=function(t){var n=j.appendListener(t);Z(e,1);return function(){Z(e,-1);n()}};var ee={length:s.length,action:"POP",location:B,createHref:W,push:q,replace:z,go:F,goBack:X,goForward:K,block:Q,listen:$,win:e};return ee};var Z=function(e,t){var n=e.pathname.indexOf(t)==0?"/"+e.pathname.slice(t.length):e.pathname;return Object.assign({},e,{pathname:n})};var Q={browser:X,hash:K};var $=e("stencil_router",function(){function e(e){var n=this;t(this,e);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(e){if(e===void 0){e={}}if(n.history&&e.scrollToId&&n.historyType==="browser"){var t=n.history.win.document.getElementById(e.scrollToId);if(t){return t.scrollIntoView()}}n.scrollTo(e.scrollTopOffset||n.scrollTopOffset)};this.isServer=i(this,"isServer");this.queue=i(this,"queue")}e.prototype.componentWillLoad=function(){var e=this;this.history=Q[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(t){t=Z(t,e.root);e.location=t}));this.location=Z(this.history.location,this.root)};e.prototype.scrollTo=function(e){var t=this.history;if(e==null||this.isServer||!t){return}if(t.action==="POP"&&Array.isArray(t.location.scrollPosition)){return this.queue.write((function(){if(t&&t.location&&Array.isArray(t.location.scrollPosition)){t.win.scrollTo(t.location.scrollPosition[0],t.location.scrollPosition[1])}}))}return this.queue.write((function(){t.win.scrollTo(0,e)}))};e.prototype.render=function(){if(!this.location||!this.history){return}var e={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return r(I.Provider,{state:e},r("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return e}())}}}));