System.register(["./p-0b2166d8.system.js","./p-45b91fce.system.js"],(function(e){"use strict";var t,r,o;return{setters:[function(e){t=e.r;r=e.h},function(e){o=e.C}],execute:function(){var n=undefined&&undefined.__decorate||function(e,t,r,o){var n=arguments.length,i=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,u;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)if(u=e[s])i=(n<3?u(i):n>3?u(t,r,i):u(t,r))||i;return n>3&&i&&Object.defineProperty(t,r,i),i};var i=650;var u=e("psk_default_renderer",function(){function e(e){t(this,e);this.mobileLayout=false}e.prototype.checkLayout=function(){this.mobileLayout=document.documentElement.clientWidth<i};e.prototype.componentWillLoad=function(){this.checkLayout()};e.prototype.render=function(){return r("div",{class:"global_container "+(this.mobileLayout?"is-mobile":"")},r("aside",null,r("psk-user-profile",null),r("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:i}),this.mobileLayout===false?r("div",{class:"nav-footer"},"version 0.1"):null),r("section",null,r("psk-app-router",{failRedirectTo:"/home",historyType:this.historyType}),this.mobileLayout===true?r("div",{class:"nav-footer bottom-stick"},"version 0.1"):null))};Object.defineProperty(e,"style",{get:function(){return"div.global_container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;height:100%;background-color:#f8f9fc}div.global_container.is-mobile{width:100%;-ms-flex-direction:column;flex-direction:column}.is-mobile aside{width:100%;height:auto;overflow:inherit}aside{height:100%;background-color:#4e73df;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(10%,#4e73df),to(#224abe));background-image:linear-gradient(180deg,#4e73df 10%,#224abe);color:#fff;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-ms-flex-order:1;order:1;-ms-flex:1;flex:1;min-width:320px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:auto;scrollbar-color:#4e73df #e5e5e5;scrollbar-width:thin}.nav-footer{text-align:center;width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#142b86;font-size:85%}.nav-footer.bottom-stick{color:#fff;background:#224abe}section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden auto;scrollbar-color:#4e73df #e5e5e5;scrollbar-width:thin}app-menu,psk-app-router{-ms-flex-positive:1;flex-grow:1}psk-user-profile{-ms-flex-direction:column;flex-direction:column}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}section{-ms-flex-order:2;order:2;-ms-flex:8;flex:8}aside::-webkit-scrollbar,section::-webkit-scrollbar{background-color:#fff;width:8px}aside::-webkit-scrollbar-track,section::-webkit-scrollbar-track{background-color:#e5e5e5}aside::-webkit-scrollbar-thumb,section::-webkit-scrollbar-thumb{background-color:#4e73df;border-radius:8px;border:2px solid #fff}aside::-webkit-scrollbar-button{display:none}"},enumerable:true,configurable:true});return e}());n([o()],u.prototype,"mobileLayout",void 0)}}}));