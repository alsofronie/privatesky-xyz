var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r};System.register(["./p-d7daa894.system.js"],(function(e){"use strict";var t,n,r,o;return{setters:[function(e){t=e.g;n=e.B;r=e.r;o=e.h}],execute:function(){var i="with-help";var a="definedProperties";var s="psk-toc-help";function p(e){return function(t,n){var r=t.componentWillLoad;t.componentWillLoad=function(){var t=this;if(t.helpConfiguration){var o=Object.assign({},t.helpConfiguration);var i=Object.assign({},e,{propertyName:n});if(o.hasOwnProperty(a)){var s=__spreadArrays(o[a]);s.push(i);o[a]=__spreadArrays(s)}else{o[a]=[i]}t.helpConfiguration=Object.assign({},o)}return r&&r.call(t)}}}function u(e){return function(r){var o=[];for(var a=1;a<arguments.length;a++){o[a-1]=arguments[a]}n.cmpWillLoad=true;var p=true;var u=r.render,l=r.componentWillLoad;r.componentWillLoad=function(){var n=this;var r=t(n);p=r.hasAttribute(i);if(p){n.helpConfiguration={baseClass:Object.assign({},e)}}return l&&l.call(n)};r.render=function(){var e=this;if(!p){return u&&u.call(e)}document.dispatchEvent(new CustomEvent(s,{bubbles:true,composed:true,cancelable:true,detail:e.helpConfiguration}))}}}var l=undefined&&undefined.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)if(a=e[s])i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i;return o>3&&i&&Object.defineProperty(t,n,i),i};var c=e("psk_page_not_found",function(){function e(e){r(this,e);this.urlDestination=null;this.pageRenderer="psk-page-not-found-renderer"}e.prototype.render=function(){if(this.urlDestination!==null){return o("stencil-router-redirect",{url:this.urlDestination})}else{var e=window.location.pathname;var t=e.indexOf(this.basePath)!=-1;if(t){return o("stencil-router-redirect",{url:this.basePath})}else{return o(this.pageRenderer,null)}}};Object.defineProperty(e,"style",{get:function(){return":host>*{width:100%;height:100%}h1{color:red;padding:1em}a{text-decoration:none;font-style:italic;font-weight:700}"},enumerable:true,configurable:true});return e}());l([p({description:"This property is the base path of the website. \n\t\tIf this parameter is sent to the component, then when the user navigates to an unknown page, he will be redirected to the base path. \n\t\tIt is not mandatory to be the root of the application, it can be the root of a section inside the website.",specialNote:"If this parameter is missing, urlDestination parameter is checked.",mandatory:false})],c.prototype,"basePath",void 0);l([p({description:"This property gives a custom redirect URL destination in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, pageRenderer parameter is checked.",mandatory:false})],c.prototype,"urlDestination",void 0);l([p({description:"This property allows the component to display a custom Page \n\t\tnot found content in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, <b>psk-page-not-found-renderer</b> is assumed.",mandatory:false})],c.prototype,"pageRenderer",void 0);l([u({className:"PskPageNotFound",componentTag:"psk-page-not-found",description:["This component is intended to be used inside a router component, so when the user navigates to an unknown route, this component will be loaded.","This component should be instantiated everywhere in application where there is a possibility to navigate to a wrong or unknown route.","The component has the role to redirect the user to a valid route inside the application by using basePath or urlDestination properties.","If none of these two properties are given, then a third property is checked: pageRenderer.","The the order of the properties priority is the following: basePath; urlDestination - if basePath is not given, this property will be used; pageRenderer - if urlDestination is not given, pageRenderer will be used"]})],c.prototype,"helpConfiguration",void 0)}}}));