System.register(["./p-7a13ecf1.system.js","./p-90e1ba03.system.js","./p-ca300ef6.system.js","./p-839127aa.system.js"],(function(e){"use strict";var t,o,n,l;return{setters:[function(e){t=e.r;o=e.g;n=e.h},function(){},function(){},function(e){l=e.B}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,o,n){var l=arguments.length,s=l<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)if(r=e[c])s=(l<3?r(s):l>3?r(t,o,s):r(t,o))||s;return l>3&&s&&Object.defineProperty(t,o,s),s};var r=e("psk_label_test",function(){function e(e){t(this,e);this.connectedCallback=function(){var e=o(this);console.log("TEST: Connected",e)};this.myState="@ceva"}e.prototype.componentWillLoad=function(){var e=o(this);console.log("TEST: WillLoad",e);console.log(e.getAttributeNames())};e.prototype.componentDidLoad=function(){console.log("Loaded");var e=o(this);console.log("TEST: WillLoad",e);console.log(e.getAttributeNames())};e.prototype.render=function(){var e=o(this);console.log("TEST: WillLoad",e);console.log(e.getAttributeNames());return n("span",{class:"col-form-label"},"# 1: ",this.firstlabel,n("br",null),"# 2: ",this.secondLabel,n("br",null),"# 3: ",this.thirdLabel,n("br",null),"# 4: ",this.labelValue)};return e}());s([l()],r.prototype,"modelHandler",void 0)}}}));