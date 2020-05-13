System.register(["./p-3369a689.system.js","./p-272cfaf9.system.js","./p-d7fc1715.system.js","./p-fc8c5dc4.system.js","./p-3f12fd9e.system.js","./p-7e15d096.system.js","./p-119d5c52.system.js"],(function(e){"use strict";var t,i,n,s,o,c,r;return{setters:[function(e){t=e.r;i=e.h;n=e.g},function(e){s=e.C},function(){},function(){},function(e){o=e.T},function(e){c=e.B},function(e){r=e.P}],execute:function(){var l=undefined&&undefined.__decorate||function(e,t,i,n){var s=arguments.length,o=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,c;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)if(c=e[r])o=(s<3?c(o):s>3?c(t,i,o):c(t,i))||o;return s>3&&o&&Object.defineProperty(t,i,o),o};var a=[document,window];var h=e("psk_switch_button",function(){function e(e){t(this,e);this.closed=true}e.prototype.clickHandler=function(e){this.closed=!this.closed;if(this.toggleEvent){e.preventDefault();e.stopImmediatePropagation();var t=new r(this.toggleEvent,{selected:this.closed?this.inactive:this.active,active:this.active,inactive:this.inactive},{bubbles:true,composed:true,cancelable:true});var i=this.htmlElement;if(this.eventDispatcher){if(a.indexOf(window[this.eventDispatcher])!==-1){i=window[this.eventDispatcher]}}i.dispatchEvent(t)}};e.prototype.render=function(){var e=i("div",{class:"status-container",onClick:this.clickHandler.bind(this)},i("h5",null,this.title),i("psk-grid",{class:"two-options-container",columns:2,layout:"xs=[6,6] s=[6,6] m=[6,6] l=[6,6]"},i("div",{class:"switch-item "+(this.closed?"":"selected")},i("p",null,this.active)),i("div",{class:"switch-item "+(this.closed?"selected":"")},i("p",null,this.inactive))));return e};Object.defineProperty(e.prototype,"htmlElement",{get:function(){return n(this)},enumerable:true,configurable:true});return e}());l([c(),s()],h.prototype,"htmlElement",void 0);l([o({description:['This attribute is telling the component where to trigger the event. Accepted values: "document, "window".',"If the value is not set or it is not one of the accepted values, the eventDispatcher will be the component itself."],isMandatory:false,propertyType:"string"})],h.prototype,"eventDispatcher",void 0);l([o({description:["By defining this attribute, the component will be able to trigger an event. The name of the event is the value of the attribute."],isMandatory:false,propertyType:"string"})],h.prototype,"toggleEvent",void 0)}}}));