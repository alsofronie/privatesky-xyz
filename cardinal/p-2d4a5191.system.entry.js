System.register(["./p-7a13ecf1.system.js","./p-ba2a1d52.system.js","./p-f422bb86.system.js","./p-2d5d376b.system.js"],(function(t){"use strict";var e,n,r,o;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(){},function(t){o=t.i},function(){}],execute:function(){var i=t("query_pages_router",function(){function t(t){e(this,t);this.routes={};this.redirectTo=""}t.prototype.componentWillLoad=function(){var t={};var e=function(n){n.forEach((function(n){if(n.children&&n.children.type==="known"){e(n.children.items)}else{var r=n.path,o=n.component,i=n.componentProps;t[r]={component:o,componentProps:i}}}));return t};this.routes=e(this.pages)};t.prototype.locationChanged=function(t){this.currentRoute=t;var e=new URL(window["basePath"]).pathname;if(e.includes(this.currentRoute.pathname)&&this.currentRoute.search===""){this.redirectTo=this.pages[0].path}else{var n=this.pages.map((function(t,e){return t.name=="404"?e:null})).filter((function(t){return t!==null}))[0];if(n){this.redirectTo=this.pages[n].path}else{this.redirectTo=this.pages[0].path}}};t.prototype.render=function(){var t=this.currentRoute.pathname+this.currentRoute.search;if(t.indexOf("&")!==-1){t=t.substring(0,t.indexOf("&"))}var e=this.routes[t];var r="psk-page-not-found";var o={urlDestination:this.redirectTo};if(e){r=e.component;o=e.componentProps}return n("stencil-route",{component:r,componentProps:o})};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["locationChanged"]}},enumerable:true,configurable:true});return t}());o(i)}}}));