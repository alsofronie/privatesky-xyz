System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-8cc80ac0.system.js","./p-76ae633a.system.js","./p-9bc303bb.system.js","./p-29529ff4.system.js"],function(e){"use strict";var t,s,i,o,r,n,a;return{setters:[function(e){t=e.r;s=e.c;i=e.h},function(e){o=e.C},function(e){r=e.T},function(){},function(e){n=e.T},function(e){a=e.C}],execute:function(){var p=undefined&&undefined.__decorate||function(e,t,s,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,s):i,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)if(n=e[a])r=(o<3?n(r):o>3?n(t,s,r):n(t,s))||r;return o>3&&r&&Object.defineProperty(t,s,r),r};var l=e("psk_list_feedbacks",function(){function e(e){t(this,e);this.alertOpened=false;this._messagesQueue=[];this._messagesContent=[];this.timer=0;this.opened=false;this.typeOfAlert=[];this.timeAlive=5e3;this.messagesToDisplay=3;this.openFeedbackHandler=s(this,"openFeedback",7)}e.prototype.closeFeedbackHandler=function(e){if(this.alertOpened){this.alertOpened=false}var t=this._messagesContent.indexOf(e.detail);if(t>-1){this.typeOfAlert.splice(t,1);this._messagesContent.splice(t,1);this._messagesContent=this._messagesContent.slice();if(this._messagesQueue.length>0){this._messagesContent=this._messagesContent.concat([this._messagesQueue.shift()])}}};e.prototype.componentWillLoad=function(){var e=this;this.openFeedbackHandler.emit(function(t,s,i){if(i){e.typeOfAlert.push(i)}else{e.typeOfAlert.push("toast")}e.alertOpened=true;if(t instanceof Array){t.forEach(function(t,s){e.addToMessageArray.bind(e)(t,s)})}else{e.addToMessageArray.bind(e)(t,s)}})};e.prototype.timerToShow=function(e){var t=this;if(this._messagesContent.length>0){var s=(new Date).getTime();var i=e.timer;var o=Math.floor((s-i)/a.MINUTE);var r=setTimeout(function(){t.timerToShow.bind(t)(e)},a.MINUTE_TICK);var n=setTimeout(function(){t.timerToShow.bind(t)(e)},a.HOUR_TICK);switch(true){case o<=0:this.timeMeasure=a.RIGHT_NOW;break;case o<60:this.timer=Math.floor((s-i)/a.MINUTE);this.timeMeasure=a.MINUTES;break;case o>=60:this.timer=Math.floor((s-i)/a.HOUR);this.timeMeasure=a.HOURS;break}}else{return}};e.prototype.addToMessageArray=function(e,t){var s=new Date;var i={content:e,timer:s.getTime(),name:t};if(this._messagesContent.length+1<=this.messagesToDisplay){this._messagesContent=this._messagesContent.concat([i])}else{this._messagesQueue=this._messagesQueue.concat([i])}};e.prototype.render=function(){var e=this;var t=[];var s;this._messagesContent.forEach(function(o,r){if(e.typeOfAlert[r]==="toast"){s=e.toastRenderer?e.toastRenderer:"psk-ui-toast";e.timerToShow.bind(e)(o);t.push(i(s,{message:o,timeSinceCreation:e.timer,timeMeasure:e.timeMeasure,styleCustomisation:e.styleCustomisation}))}else{s=e.alertRenderer?e.alertRenderer:"psk-ui-alert";t.push(i(s,{message:e._messagesContent[e._messagesContent.length-1],typeOfAlert:e.typeOfAlert[r],timeAlive:e.timeAlive,styleCustomisation:e.styleCustomisation}))}});return i("div",null,t?t:null)};return e}());p([o(),r({description:"This property is a object based on StyleCustomisation interface ",isMandatory:false,propertyType:"StyleCustomisation type",specialNote:"Even if you do not use all the parameters there will not be a problem with the default renderers."})],l.prototype,"styleCustomisation",void 0);p([r({description:"This property is the auto closing timer in milliseconds for the alert.",isMandatory:false,propertyType:"number",defaultValue:5e3,specialNote:"This property will only be taken into consideration when used with the psk-ui-alert child component"})],l.prototype,"timeAlive",void 0);p([r({description:"This property represents the number of toasts to be renderer on the user interface.",isMandatory:false,propertyType:"number",defaultValue:3,specialNote:"This property will only be taken into consideration when used with the psk-ui-toast child component."})],l.prototype,"messagesToDisplay",void 0);p([r({description:"This property allows the component to display a custom toast in case the default one is not preferred.",isMandatory:false,propertyType:"string",defaultValue:"psk-ui-toast",specialNote:"If this property is missing , psk-ui-toast will be assumed."})],l.prototype,"toastRenderer",void 0);p([r({description:"This property allows the component to display a custom alert in case the default one is not preferred.",isMandatory:false,propertyType:"string",defaultValue:"psk-ui-alert",specialNote:"If this property is missing , psk-ui-alert will be assumed."})],l.prototype,"alertRenderer",void 0);p([n({eventName:"openFeedback",controllerInteraction:{required:true},description:"This even is triggered when the user does an action that require feedback.This event comes with three parameters :\n            message(string) : the message for the action that was executed,\n            name(string) : the name is necessary in case of a toast feedback and\n            typeOfAlert(string) : either toast or a bootstrap alert."})],l.prototype,"openFeedbackHandler",void 0)}}});