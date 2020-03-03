System.register(["./p-226ad382.system.js","./p-8cc80ac0.system.js","./p-76ae633a.system.js"],function(e){"use strict";var t,n,o,i;return{setters:[function(e){t=e.r;n=e.g;o=e.h},function(e){i=e.T},function(){}],execute:function(){var r=undefined&&undefined.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var s=e("dropdown_renderer",function(){function e(e){t(this,e);this.isOpened=false;this.dropDownHasChildActive=false;this.somethingChanged=false}e.prototype.handleClick=function(e){var t=e.target;if(!n(this).contains(t)){this.isOpened=false}};e.prototype.handleMenuClick=function(e){var t=e.detail;if(n(this).contains(t)){this.isOpened=false}else{this.dropDownHasChildActive=false}};e.prototype.routeChanged=function(){var e=this.url+"/";this.dropDownHasChildActive=window.location.href.includes(e)};e.prototype.toggleDropdown=function(e){var t=e.target;var n=false;while(t.parentElement){t=t.parentElement;if(t.classList.contains("children")){n=true;break}}if(!n){e.stopImmediatePropagation()}this.isOpened=!this.isOpened};e.prototype.render=function(){var e=this;this.routeChanged();return o("div",{class:"dropdown "+(this.dropDownHasChildActive?"active":"")+" "+(this.isOpened?"isOpened":""),onClick:function(t){return e.toggleDropdown(t)}},o("slot",null))};return e}());r([i({description:"This property is used in the css file for renderes in order to verify the state of the component",isMandatory:false,propertyType:"boolean"})],s.prototype,"active",void 0);r([i({description:"This property sets the url for the component in menu in order to be routed.",isMandatory:true,propertyType:"any"})],s.prototype,"url",void 0);r([i({description:"This property tells the component if something changed with the MenuItem",isMandatory:false,propertyType:"boolean"})],s.prototype,"somethingChanged",void 0)}}});