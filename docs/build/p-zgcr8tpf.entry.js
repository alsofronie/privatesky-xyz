import{r as t,c as e,h as s,g as o,d as n}from"./p-94bfe925.js";import{C as i}from"./p-c099888b.js";import{m as a,a as r,s as c,b as l,c as h,d as p,e as u,f as d,g as m,h as f,i as g,j as b,k as y,l as v,n as k,o as w,p as P}from"./p-aa67fb06.js";import{A as C}from"./p-26fed1da.js";const L=class{constructor(s){t(this,s),this.menuItems=null,this.hamburgerMaxWidth=600,this.showHamburgerMenu=!1,this.showNavBar=!1,this.menuItemClicked=e(this,"menuEvent",7),this.needMenuItemsEvt=e(this,"needMenuItems",7)}checkIfHamburgerIsNeeded(){this.showHamburgerMenu=document.documentElement.clientWidth<this.hamburgerMaxWidth}componentDidLoad(){this.checkIfHamburgerIsNeeded()}handleClick(t){t.preventDefault();let e=t.target.value;for(let s=0;s<this.menuItems.length;s++)this.menuItems[s].active=e===this.menuItems[s];this.menuItemClicked.emit(t.target.value),this.menuItems=[...this.menuItems]}toggleNavBar(){this.showNavBar=!this.showNavBar}componentWillLoad(){this.menuItems||this.needMenuItemsEvt.emit(t=>{this.menuItems=t})}renderItem(t){let e=this.itemRenderer?this.itemRenderer:"psk-menu-item-renderer",o=[];if(t.children)for(let s=0;s<t.children.length;s++)o.push(this.renderItem(t.children[s]));return s(e,{onclick:t=>this.handleClick(t),active:!!t.active&&t.active,children:o,hamburger:this.showHamburgerMenu,value:t})}render(){if(!this.menuItems)return;let t=[];for(let s=0;s<this.menuItems.length;s++)t.push(this.renderItem(this.menuItems[s]));let e=this.menuItems.find(t=>t.active);if(this.showHamburgerMenu){t=t.map(t=>s("li",{onClick:this.toggleNavBar.bind(this),class:"nav-item"},t));let o="collapse navbar-collapse "+`${1==this.showNavBar?"show":""}`;return s("nav",{class:"navbar navbar-dark "},s("a",{class:"navbar-brand",href:"#"},e?e.name:"Home"),s("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:this.toggleNavBar.bind(this),"aria-label":"Toggle navigation"},s("span",{class:"navbar-toggler-icon"})),s("div",{class:o},s("ul",{class:"navbar-nav mr-auto"},t)))}return t}static get style(){return":host{width:100%}.navbar{padding:.5rem 1rem .5rem 0}.navbar-brand{padding:5px}"}};!function(t,e,s,o){var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(i<3?n(a):i>3?n(e,s,a):n(e,s))||a);i>3&&a&&Object.defineProperty(e,s,a)}([i()],L.prototype,"itemRenderer",void 0);const S={basePagesUrl:"https://raw.githubusercontent.com/PrivateSky/pwc-apps/master/src/pages/",defaultPageProp:{icon:"fa-bars",type:"route",component:"psk-page-loader",exact:!0},profile:{username:"PSK Components",email:"info@privatesky.ro",avatar:"https://i.ibb.co/ZTcVc3L/psk-component.png"}},E=[{name:"Home",path:"/home",icon:"fa-home",type:"route",component:"app-home",exact:!0},{name:"PSK Components",path:"/psk-components",icon:"fa-bars",type:"abstract",children:[{name:"App Menu",path:"/psk-components/app-menu",component:"app-menu-usage",icon:"fa-bars",type:"route",exact:!0},{name:"App Router",component:"app-router-usage",path:"/psk-components/app-router",icon:"fa-bars",type:"route",exact:!0},{name:"Attachments List",component:"attachment-list-usage",path:"/psk-components/attach-list",icon:"fa-bars",type:"route",exact:!0},{name:"Files Chooser",component:"files-chooser-usage",path:"/psk-components/files-chooser",icon:"fa-bars",type:"route",exact:!0},{name:"Modal",component:"modal-usage",path:"/psk-components/modal",icon:"fa-bars",type:"route",exact:!0},{name:"Page not found",component:"page-not-found-usage",path:"/psk-components/page-not-found",icon:"fa-bars",type:"route",exact:!0},{name:"PIN Popup",component:"pin-popup-usage",path:"/psk-components/pin-popup",icon:"fa-bars",type:"route",exact:!0},{name:"UI Loader",component:"ui-loader-usage",path:"/psk-components/ui-loader",icon:"fa-bars",type:"route",exact:!0},{name:"User Profile",path:"/psk-components/user-profile",icon:"fa-bars",type:"route",component:"user-profile-usage",exact:!0},{name:"Feedback Alert",path:"/psk-components/ui-feedback",icon:"fa-bars",type:"route",component:"feedback-alert-usage",exact:!0},{name:"Feedback List",path:"/psk-components/list-feedback",icon:"fa-bars",type:"route",component:"feedback-list-usage",exact:!0},{name:"Wizard",path:"/psk-components/wizard",icon:"fa-bars",type:"route",component:"wizard-usage",exact:!0}]},{name:"Events",path:"/events",icon:"fa-bolt",type:"route",exact:!0},{name:"Services",path:"/services",icon:"fa-server",type:"route",exact:!0}],T=[{stepName:"Name your CSB",stepIndex:0,stepComponent:"enter-csb-name"},{stepName:"Select CSB type(s)",stepIndex:1,stepComponent:"select-csb-type"},{stepName:"Save recovery Phrase",stepIndex:2,stepComponent:"save-recovery-phrase"},{stepName:"Finish",stepIndex:3,stepComponent:"finish-page"}],x=S.basePagesUrl+"pages-structure.json";class O{constructor(t){this.element=o(t),this.element.addEventListener("menuEvent",t=>{t.stopImmediatePropagation(),"href"===t.detail.type&&(window.location.href=t.detail.path);let e=new CustomEvent("routeChanged",{bubbles:!0,cancelable:!1,detail:t.detail});this.element.dispatchEvent(e)}),this.element.addEventListener("needMenuItems",t=>{let e=JSON.parse(JSON.stringify(E)),s=e=>{let s=t.detail;s&&"function"==typeof s?s(e):console.error("Callback was not properly provided!")},o=new XMLHttpRequest;o.open("GET",x),o.onload=()=>{if(200!=o.status)s(e);else{let t=JSON.parse(o.responseText);(t=>{t.forEach(t=>{for(let e in S.defaultPageProp)t[e]||(t[e]=S.defaultPageProp[e]);"psk-page-loader"===t.component&&(t.componentProps||(t.componentProps={}),t.componentProps.pageUrl=S.basePagesUrl+t.pageSrc)})})(t);let n=e.map(t=>t.name);t.forEach((s,o)=>{if(s.parent){let i=n.indexOf(s.parent);i&&(e[i].children||(e[i].children=[]),s.path=e[i].path+s.path,e[i].children.push(s),t.splice(o,1))}}),s(e.concat(t))}},o.onerror=()=>{s(e)},o.send()}),this.element.addEventListener("getUserInfo",t=>{let e=t.detail;e&&"function"==typeof e?e(null,S.profile):console.error("Callback was not properly provided!")}),this.element.addEventListener("needWizardConfiguration",t=>{let e=t.detail;e&&"function"==typeof e?e(T):console.error("Callback was not properly provided!")}),this.element.addEventListener("changeStep",t=>{let e=t.detail.callback;e&&"function"==typeof e?this._handleChangeStep(t.detail):console.error("Callback was not properly provided!")}),this.element.addEventListener("sendPin",t=>{let e=t.detail.callback;e&&"function"==typeof e?this._handleSendPin(t.detail):console.error("Callback was not properly provided!")})}_handleSendPin({pin:t,callback:e}){!t||t.trim().length<6?e("Invalid PIN length. Minimum is 6!"):(console.log(t),e(null))}__getPropertyValue(t,e){return t.stepProperties&&t.stepProperties.hasOwnProperty(e)?t.stepProperties[e]:null}_handleChangeStep(t){let e=t.stepIndexToDisplay,s=t.callback,o=t.wizardSteps,n=t.activeStep,i=null;if(e<0||e>=o.length)i="Index has no valid value";else if(e<=n.stepIndex)o[n.stepIndex]={...n},n={...o[e]};else switch(n.stepProperties.stepPhase){case"csb-name":{const t=this.__getPropertyValue(n,"csbName");null===t||0===t.trim().length?i="CSB Name is empty":(n.stepCompleted=!0,o[n.stepIndex]={...n},n={...o[e]});break}case"csb-type":{const t=this.__getPropertyValue(n,"csbType");null===t||0===t.trim().length?i="CSB Type is empty":(n.stepCompleted=!0,o[n.stepIndex]={...n},n={...o[e]});break}case"save-recovery-phrase":null===this.__getPropertyValue(n,"saveRecoveryPhrase")?i="Recovery phase property is not sent":(n.stepCompleted=!0,o[n.stepIndex]={...n},n={...o[e]})}s(i,{activeStep:n,wizardSteps:o})}}const _=class{constructor(s){t(this,s),this.mobileLayout=!1,this.controller||(this.controller=new O(this)),this.routeChangedEvent=e(this,"routeChanged",7)}checkLayout(){this.mobileLayout=document.documentElement.clientWidth<650}componentWillLoad(){this.checkLayout()}render(){return s("div",{class:`global_container ${this.mobileLayout?"is-mobile":""}`},s("aside",null,s("psk-user-profile",null),s("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:650}," "),!1===this.mobileLayout?s("div",{class:"nav-footer"},"version 0.1"):null),s("section",null,s("nav",null),s("psk-app-router",null," "),!0===this.mobileLayout?s("div",{class:"nav-footer bottom-stick"},"version 0.1"):null))}static get style(){return"div.global_container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;height:100%;background-color:#f8f9fc}div.global_container.is-mobile{width:100%;-ms-flex-direction:column;flex-direction:column}.is-mobile aside{width:100%;height:auto;overflow:inherit}aside{height:100%;background-color:#4e73df;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(10%,#4e73df),to(#224abe));background-image:linear-gradient(180deg,#4e73df 10%,#224abe);color:#fff;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-ms-flex-order:1;order:1;-ms-flex:1;flex:1;min-width:200px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:auto}nav{width:100%;height:4.375rem;background-color:#fff!important;-webkit-box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important}.nav-footer{text-align:center;width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#142b86;font-size:85%}.nav-footer.bottom-stick{color:#fff;background:#224abe}section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden auto}app-menu,psk-app-router{-ms-flex-positive:1;flex-grow:1}psk-user-profile{-ms-flex-direction:column;flex-direction:column}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}section{-ms-flex-order:2;order:2;-ms-flex:8;flex:8}"}},R=class{constructor(s){t(this,s),this.menuItems=[],this.needMenuItemsEvt=e(this,"needMenuItems",7)}componentWillLoad(){this.needMenuItemsEvt.emit(t=>{this.menuItems=t})}renderItems(t){return t.map(t=>t.children?this.renderItems(t.children):s("stencil-route",{url:t.path,exact:t.exactMatch,component:t.component,componentProps:t.componentProps}))}render(){let t=this.renderItems(this.menuItems);return 0===t.length?s("psk-ui-loader",{shouldBeRendered:!0}):s("div",{class:"app_container"},s("stencil-router",null,s("stencil-route-switch",{scrollTopOffset:0},t)))}},H=class{constructor(e){t(this,e),this.shouldBeRendered=!1}render(){if(this.shouldBeRendered)return s("div",{class:"loader-container"},s("div",{class:"sk-fading-circle"},s("div",{class:"sk-circle1 sk-circle"}),s("div",{class:"sk-circle2 sk-circle"}),s("div",{class:"sk-circle3 sk-circle"}),s("div",{class:"sk-circle4 sk-circle"}),s("div",{class:"sk-circle5 sk-circle"}),s("div",{class:"sk-circle6 sk-circle"}),s("div",{class:"sk-circle7 sk-circle"}),s("div",{class:"sk-circle8 sk-circle"}),s("div",{class:"sk-circle9 sk-circle"}),s("div",{class:"sk-circle10 sk-circle"}),s("div",{class:"sk-circle11 sk-circle"}),s("div",{class:"sk-circle12 sk-circle"})))}static get watchers(){return{shouldBeRendered:["render"]}}static get style(){return".sk-fading-circle{margin:auto;width:40px;height:60px;position:relative}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#3944ff;border-radius:100%;-webkit-animation:sk-circleFadeDelay 1.2s ease-in-out infinite both;animation:sk-circleFadeDelay 1.2s ease-in-out infinite both}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}\@-webkit-keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}\@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}.loader-container{background:rgba(173,174,255,.6);height:100%;display:-ms-flexbox;display:flex}"}},I=class{constructor(s){t(this,s),this.userInfo=null,this.getUserInfoEvent=e(this,"getUserInfo",7)}componentWillLoad(){this.userInfo||this.getUserInfoEvent.emit((t,e)=>{t?console.error("Error getting user info",t):this.userInfo=e})}render(){return s(this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer",{userInfo:this.userInfo})}},j=class{constructor(e){t(this,e),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const e=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!e)return this.previousMatch=this.match,this.match=a(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!r(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?s(this.component,Object.assign({},t)):void 0}get el(){return o(this)}static get watchers(){return{location:["computeMatch"]}}static get style(){return"stencil-route.inactive{display:none}"}};C.injectProps(j,["location","history","historyType","routeViewsUpdated"]);const U=t=>"STENCIL-ROUTE"===t.tagName,A=class{constructor(e){t(this,e),this.group=(()=>((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"))(),this.subscribers=[],this.queue=n(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let e=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(U).map((s,o)=>{const n=((t,e,s)=>a(t,{path:e,exact:s,strict:!0}))(t.pathname,s.url,s.exact);return n&&-1===e&&(e=o),{el:s,match:n}}),-1===e)return;if(this.activeIndex===e)return void(this.subscribers[e].el.match=this.subscribers[e].match);this.activeIndex=e;const s=this.subscribers[this.activeIndex];this.scrollTopOffset&&(s.el.scrollTopOffset=this.scrollTopOffset),s.el.group=this.group,s.el.match=s.match,s.el.componentUpdated=t=>{this.queue.write(()=>{this.subscribers.forEach((t,e)=>{if(t.el.componentUpdated=void 0,e===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return s("slot",null)}get el(){return o(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};C.injectProps(A,["location","routeViewsUpdated"]);const N=(t,...e)=>{t||console.warn(...e)},M=()=>{let t,e=[];return{setPrompt:e=>(N(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,s,o,n)=>{if(null!=t){const i="function"==typeof t?t(e,s):t;"string"==typeof i?"function"==typeof o?o(i,n):(N(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),n(!0)):n(!1!==i)}else n(!0)},appendListener:t=>{let s=!0;const o=(...e)=>{s&&t(...e)};return e.push(o),()=>{s=!1,e=e.filter(t=>t!==o)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},B=(t,e="scrollPositions")=>{let s=new Map;const o=(e,o)=>{if(s.set(e,o),c(t,"sessionStorage")){const e=[];s.forEach((t,s)=>{e.push([s,t])}),t.sessionStorage.setItem("scrollPositions",JSON.stringify(e))}};if(c(t,"sessionStorage")){const o=t.sessionStorage.getItem(e);s=o?new Map(JSON.parse(o)):s}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:o,get:t=>s.get(t),has:t=>s.has(t),capture:e=>{o(e,[t.scrollX,t.scrollY])}}},W={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+w(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:w,decodePath:u},slash:{encodePath:u,decodePath:u}},Y=(t,e)=>{const s=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:s})},D={browser:(t,e={})=>{let s=!1;const o=t.history,n=t.location,i=t.navigator,a=l(t),r=!h(i),c=B(t),k=null!=e.forceRefresh&&e.forceRefresh,w=null!=e.getUserConfirmation?e.getUserConfirmation:y,P=null!=e.keyLength?e.keyLength:6,C=e.basename?p(u(e.basename)):"",L=()=>{try{return t.history.state||{}}catch(e){return{}}},S=t=>{t=t||{};const{key:e,state:s}=t,{pathname:o,search:i,hash:a}=n;let r=o+i+a;return N(!C||f(r,C),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+r+'" to begin with "'+C+'".'),C&&(r=g(r,C)),d(r,s,e||m(P))},E=M(),T=t=>{c.capture(D.location.key),Object.assign(D,t),D.location.scrollPosition=c.get(D.location.key),D.length=o.length,E.notifyListeners(D.location,D.action)},x=t=>{v(i,t)||_(S(t.state))},O=()=>{_(S(L()))},_=t=>{if(s)s=!1,T();else{const e="POP";E.confirmTransitionTo(t,e,w,s=>{s?T({action:e,location:t}):R(t)})}},R=t=>{let e=I.indexOf(D.location.key),o=I.indexOf(t.key);-1===e&&(e=0),-1===o&&(o=0);const n=e-o;n&&(s=!0,W(n))},H=S(L());let I=[H.key],j=0,U=!1;const A=t=>C+b(t),W=t=>{o.go(t)},Y=e=>{1===(j+=e)?(t.addEventListener("popstate",x),r&&t.addEventListener("hashchange",O)):0===j&&(t.removeEventListener("popstate",x),r&&t.removeEventListener("hashchange",O))},D={length:o.length,action:"POP",location:H,createHref:A,push:(t,e)=>{N(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const s=d(t,e,m(P),D.location);E.confirmTransitionTo(s,"PUSH",w,t=>{if(!t)return;const e=A(s),{key:i,state:r}=s;if(a)if(o.pushState({key:i,state:r},"",e),k)n.href=e;else{const t=I.indexOf(D.location.key),e=I.slice(0,-1===t?0:t+1);e.push(s.key),I=e,T({action:"PUSH",location:s})}else N(void 0===r,"Browser history cannot push state in browsers that do not support HTML5 history"),n.href=e})},replace:(t,e)=>{N(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const s=d(t,e,m(P),D.location);E.confirmTransitionTo(s,"REPLACE",w,t=>{if(!t)return;const e=A(s),{key:i,state:r}=s;if(a)if(o.replaceState({key:i,state:r},"",e),k)n.replace(e);else{const t=I.indexOf(D.location.key);-1!==t&&(I[t]=s.key),T({action:"REPLACE",location:s})}else N(void 0===r,"Browser history cannot replace state in browsers that do not support HTML5 history"),n.replace(e)})},go:W,goBack:()=>W(-1),goForward:()=>W(1),block:(t="")=>{const e=E.setPrompt(t);return U||(Y(1),U=!0),()=>(U&&(U=!1,Y(-1)),e())},listen:t=>{const e=E.appendListener(t);return Y(1),()=>{Y(-1),e()}},win:t};return D},hash:(t,e={})=>{let s=!1,o=null,n=0,i=!1;const a=t.location,r=t.history,c=k(t.navigator),l=null!=e.keyLength?e.keyLength:6,{getUserConfirmation:h=y,hashType:v="slash"}=e,w=e.basename?p(u(e.basename)):"",{encodePath:C,decodePath:L}=W[v],S=()=>{const t=a.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},E=t=>{const e=a.href.indexOf("#");a.replace(a.href.slice(0,e>=0?e:0)+"#"+t)},T=()=>{let t=L(S());return N(!w||f(t,w),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+w+'".'),w&&(t=g(t,w)),d(t,void 0,m(l))},x=M(),O=t=>{Object.assign(D,t),D.length=r.length,x.notifyListeners(D.location,D.action)},_=()=>{const t=S(),e=C(t);if(t!==e)E(e);else{const t=T(),e=D.location;if(!s&&P(e,t))return;if(o===b(t))return;o=null,R(t)}},R=t=>{if(s)s=!1,O();else{const e="POP";x.confirmTransitionTo(t,e,h,s=>{s?O({action:e,location:t}):H(t)})}},H=t=>{let e=A.lastIndexOf(b(D.location)),o=A.lastIndexOf(b(t));-1===e&&(e=0),-1===o&&(o=0);const n=e-o;n&&(s=!0,B(n))},I=S(),j=C(I);I!==j&&E(j);const U=T();let A=[b(U)];const B=t=>{N(c,"Hash history go(n) causes a full page reload in this browser"),r.go(t)},Y=(t,e)=>{1===(n+=e)?t.addEventListener("hashchange",_):0===n&&t.removeEventListener("hashchange",_)},D={length:r.length,action:"POP",location:U,createHref:t=>"#"+C(w+b(t)),push:(t,e)=>{N(void 0===e,"Hash history cannot push state; it is ignored");const s=d(t,void 0,m(l),D.location);x.confirmTransitionTo(s,"PUSH",h,t=>{if(!t)return;const e=b(s),n=C(w+e);if(S()!==n){o=e,(t=>a.hash=t)(n);const t=A.lastIndexOf(b(D.location)),i=A.slice(0,-1===t?0:t+1);i.push(e),A=i,O({action:"PUSH",location:s})}else N(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),O()})},replace:(t,e)=>{N(void 0===e,"Hash history cannot replace state; it is ignored");const s=d(t,void 0,m(l),D.location);x.confirmTransitionTo(s,"REPLACE",h,t=>{if(!t)return;const e=b(s),n=C(w+e);S()!==n&&(o=e,E(n));const i=A.indexOf(b(D.location));-1!==i&&(A[i]=e),O({action:"REPLACE",location:s})})},go:B,goBack:()=>B(-1),goForward:()=>B(1),block:(e="")=>{const s=x.setPrompt(e);return i||(Y(t,1),i=!0),()=>(i&&(i=!1,Y(t,-1)),s())},listen:e=>{const s=x.appendListener(e);return Y(t,1),()=>{Y(t,-1),s()}},win:t};return D}},F=class{constructor(e){t(this,e),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const e=this.history.win.document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=n(this,"isServer"),this.queue=n(this,"queue")}componentWillLoad(){this.history=D[this.historyType](this.el.ownerDocument.defaultView),this.history.listen(t=>{t=Y(t,this.root),this.location=t}),this.location=Y(this.history.location,this.root)}scrollTo(t){const e=this.history;if(null!=t&&!this.isServer&&e)return"POP"===e.action&&Array.isArray(e.location.scrollPosition)?this.queue.write(()=>{e&&e.location&&Array.isArray(e.location.scrollPosition)&&e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}):this.queue.write(()=>{e.win.scrollTo(0,t)})}render(){if(this.location&&this.history)return s(C.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},s("slot",null))}get el(){return o(this)}};export{L as app_menu,_ as app_root,R as psk_app_router,H as psk_ui_loader,I as psk_user_profile,j as stencil_route,A as stencil_route_switch,F as stencil_router};