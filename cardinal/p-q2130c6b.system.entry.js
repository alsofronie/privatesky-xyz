System.register(["./p-3369a689.system.js","./p-d7fc1715.system.js","./p-fa4e7901.system.js","./p-44df65c4.system.js","./p-48004ded.system.js"],(function(e){"use strict";var t,n,r,i,o;return{setters:[function(e){t=e.r;n=e.h;r=e.g},function(){},function(){},function(e){i=e.T},function(e){o=e.C}],execute:function(){var a="@event:";var s=function(){function e(){}e._prepareRoutesTree=function(e,t){var n=function(e){var r={};e.forEach((function(e){var i=e.name.replace(/(\s+|-)/g,"").toLowerCase();if(!r[i]){var o=e.path;switch(t){case"browser":case"query":o=e.path;break;case"hash":o="/#"+e.path;break}r[i]={path:o}}if(typeof e.children==="object"&&Array.isArray(e.children.items)){r[i].children={type:"known",items:n(e.children.items)}}else if(typeof e.children==="string"&&e.children.indexOf(a)===0){var s=e.children.substring(a.length);r[i].children={type:"event",event:s}}}));return r};return n(e)};e._prepareConfiguration=function(t,n){var r={};r.baseUrl=n;var i=n+t.basePagesUrl;if(t.modals){r.modals={};if(Object.keys(t.modals).length){for(var o in t.modals){r.modals[o]=i+t.modals[o]}}}if(!t.menu||!t.menu.defaultMenuConfig){throw new Error("Default menu configuration is missing")}var s=t.menu.defaultMenuConfig;if(t.profile){r.profile=t.profile}var c=function(e){for(var t=0;t<e.length;t++){if(e[t].children&&e[t].children.items){c(e[t].children.items)}else{if(typeof e[t].indexed!=="undefined"&&e[t].indexed.toString()==="false"){e.splice(t,1)}}}return e};var f=function(e,t){e.forEach((function(e){if(!e.path){var n=e.name.toLowerCase();var r=n.toLowerCase().replace(/\s+/g,"-");r=r.replace(/[:\/]/g,"");e.path=r}if(e.path.indexOf("/")!==0){e.path="/"+e.path}if(t){e.path=t+e.path}if(e.children){e.type="abstract";if(!e.icon){e.icon=s.icon}}else{for(var o in s){if(!e.hasOwnProperty(o)){e[o]=s[o]}}if(e.component==="psk-page-loader"){if(!e.componentProps){e.componentProps={}}Object.assign(e.componentProps,e.options);if(e.pageSrc){if(e.pageSrc.startsWith("http")){e.componentProps.pageUrl=e.pageSrc}else{e.componentProps.pageUrl=i+e.pageSrc}}else{var c=e.name.replace(/[:.!?]/g,"").replace(/\s/g,"-").toLowerCase();var p="";if(t){p=t.replace(/^\//,"")}if(p.length!==0){p=p+"/"}e.componentProps.pageUrl=i+p+c+".html"}}}if(typeof e.children==="object"&&Array.isArray(e.children)){e.children={type:"known",items:JSON.parse(JSON.stringify(e.children))};f(e.children.items,e.path)}else{if(typeof e.children==="string"&&e.children.indexOf(a)==0){var d=e.children.substring(a.length);e.children={type:"event",event:d};e.component="psk-ssapp-loader"}}}));return e};r.routes=f(t.menu.pages);r.historyType="browser";var p=t.menu.defaultMenuConfig.historyType;if(p==="hash"||p==="query"){r.historyType=p}if(p==="query"){var d="?";if(t.menu.defaultMenuConfig.pagePrefix){d=t.menu.defaultMenuConfig.pagePrefix}var l=function(e){e.forEach((function(e){var t=e.path;if(t.indexOf("/")===0){t=t.substr(1)}e.path=""+d+t;if(e.children){l(e.children.items)}}))};l(r.routes)}var u=function(e){var t=[];function n(e){e.forEach((function(e){if(Object.prototype.hasOwnProperty.call(e,"tags")){var r=e["tags"].split(",").map((function(e){return e.trim()}));r.forEach((function(n){t[n]=e.path}))}if(typeof e.children==="object"&&Array.isArray(e.children.items)){n(e.children.items)}}))}n(e);return t};var h=JSON.parse(JSON.stringify(r.routes));r.menu=c(h);r.tags=u(h);r.pagesHierarchy=e._prepareRoutesTree(r.routes,p);return r};return e}();var c="/app-config.json";window.globalConfig={};var f=function(){function e(e){var t=this;this.configIsLoaded=false;this.pendingRequests=[];this._getAppConfiguration(c,(function(e,n){var r;if(window&&window.location&&window.location.origin){r=window.location.origin}else{r=n.baseUrl}t.configuration=s._prepareConfiguration(n,r);t.configuration.theme=n.theme;t.configuration.appVersion=n.appVersion;t.configIsLoaded=true;while(t.pendingRequests.length){var i=t.pendingRequests.pop();if(!t.configuration[i.configName]){throw new Error("Config "+i.configName+" was not provided. Did you set it in app-config.json?")}i.callback(undefined,t.configuration[i.configName])}}));e.addEventListener("getThemeConfig",this._provideConfig("theme"));e.addEventListener("getAppVersion",this._provideConfig("appVersion"));e.addEventListener("needRoutes",this._provideConfig("routes"));e.addEventListener("needMenuItems",this._provideConfig("menu"));e.addEventListener("getUserInfo",this._provideConfig("profile"));e.addEventListener("getHistoryType",this._provideConfig("historyType"));e.addEventListener("getModals",this._provideConfig("modals"));e.addEventListener("getTags",this._provideConfig("tags"));e.addEventListener("validateUrl",(function(e){e.stopImmediatePropagation();var n=e.detail,r=n.sourceUrl,i=n.callback;if(i&&typeof i==="function"){t._parseSourceUrl(r,i)}else{console.error("Callback was not properly provided!")}}));e.addEventListener("getCustomLandingPage",(function(e){var t=e.detail;if(window.frameElement){if(window.frameElement.hasAttribute("landing-page")){var n=window.frameElement.getAttribute("landing-page");return t(undefined,n)}}t()}))}e.prototype._provideConfig=function(e){var t=this;return function(n){n.stopImmediatePropagation();var r=n.detail;if(r&&typeof r==="function"){if(t.configIsLoaded){if(!t.configuration[e]){throw new Error("Config "+e+" was not provided")}r(undefined,t.configuration[e])}else{t.pendingRequests.push({configName:e,callback:r})}}}};e.prototype._parseSourceUrl=function(e,t){e=e.replace(/(\s+|-)/g,"").toLowerCase();var n=e.split("/");var r=this.configuration.pagesHierarchy;var i=function(i){var o=n[i];var a=Object.keys(r).find((function(e){return r[e].path.toLowerCase().indexOf(o)!==-1}));var s=typeof r[a]!=="undefined";if(!r[o]&&!s){t(e+" is not a valid path in the application!");return"break"}var c=void 0;if(s){c=r[a].children}else{c=r[o].children}if(typeof c==="object"&&typeof c.items==="object"&&i!==n.length){r=c.items;return"continue"}var f=void 0;if(s){f=r[a].path}else{f=r[o].path}return{value:t(undefined,f)}};for(var o=0;o<n.length;o++){var a=i(o);if(typeof a==="object")return a.value;if(a==="break")break}};e.prototype._getAppConfiguration=function(e,t){var n=new XMLHttpRequest;n.open("GET",e);n.onload=function(){if(n.status!=200){t(new Error(n.status.code))}else{var e=JSON.parse(n.responseText);t(null,e)}};n.onerror=function(){t(new Error("An error occurred"))};n.send()};return e}();var p=undefined&&undefined.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)if(a=e[s])o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o;return i>3&&o&&Object.defineProperty(t,n,o),o};var d=e("psk_app_root",function(){function e(e){t(this,e);this.mobileLayout=false;this.componentCode="";this.hasSlot=false}e.prototype.__createLoader=function(){var e=12;var t="";for(var n=1;n<=e;n++){t+='<div class="sk-circle'+n+' sk-circle"></div>'}var r=document.createElement("div");r.className="app-loader";r.innerHTML="<div class='sk-fading-circle'>"+t+"</div>";return r};e.prototype.connectedCallback=function(){this.disconnected=false};e.prototype.disconnectedCallback=function(){this.disconnected=true};e.prototype.componentWillLoad=function(){var e=this;if(this.host.parentElement){this.htmlLoader=this.__createLoader();this.host.parentElement.appendChild(this.htmlLoader)}var t=this.host.innerHTML;t=t.replace(/\s/g,"");if(t.length){this.hasSlot=true}if(typeof this.controller==="string"){return new Promise((function(t,n){o.getController(e.controller).then((function(n){if(e.disconnected){return t()}new n(e.host);t()})).catch(n)}))}else{new f(this.host)}};e.prototype.componentDidLoad=function(){if(this.htmlLoader&&this.htmlLoader.parentNode){this.htmlLoader.parentNode.removeChild(this.htmlLoader)}};e.prototype.render=function(){var e="psk-default-renderer";return this.hasSlot?n("slot",null):n(e,null)};Object.defineProperty(e.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});return e}());p([i({isMandatory:false,description:["This property is a string that will permit the developer to choose his own controller.","If no controller is provided, a default controller will be passed to the component","It is recommended that each app to extend the provided default controller and adapt it to the application needs"],propertyType:"string",defaultValue:"null"})],d.prototype,"controller",void 0)}}}));