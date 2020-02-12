import{r as t,c as e,h as s}from"./p-9835b40a.js";import{T as i}from"./p-e67dceeb.js";import{C as o}from"./p-ec895615.js";import{C as r}from"./p-e08ce6d9.js";var a=function(t,e,s,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(r<3?o(a):r>3?o(e,s,a):o(e,s))||a);return r>3&&a&&Object.defineProperty(e,s,a),a};const l=class{constructor(s){t(this,s),this.typeOfAlert=r.ALERT_SUCCESS,this.timeAlive=3e3,this.alert=null,this.isVisible=!0,this.closeFeedback=e(this,"closeFeedback",7)}closeUIFeedback(){this.isVisible=!1,setTimeout(()=>{this.closeFeedback.emit(this.message)},1e3)}render(){return this.alert=s("div",{class:`alert ${this.typeOfAlert} alert-dismissible fade ${this.isVisible?"show":"hide"}`,style:this.styleCustomisation.alert&&this.styleCustomisation.alert.style?this.styleCustomisation.alert.style:{},onClick:()=>{this.closeUIFeedback()}},s("slot",null),s("div",{class:"toast-body"},this.message.content)),setTimeout(()=>{this.closeUIFeedback()},this.timeAlive),this.alert}};a([o(),i({description:"This property is a string that indicates the type of alert that you want so send back to the user",isMandatory:!1,propertyType:"string",defaultValue:"alert-success"})],l.prototype,"typeOfAlert",void 0),a([i({description:"This property is the message that will be rendered on the alert",isMandatory:!1,propertyType:"any"})],l.prototype,"message",void 0),a([i({description:"This property is the time in milliseconds t",isMandatory:!1,propertyType:"any"})],l.prototype,"timeAlive",void 0),a([i({description:"The style customisation for the alert so it looks according to your application",isMandatory:!1,propertyType:"StyleCustomisation"})],l.prototype,"styleCustomisation",void 0);export{l as psk_ui_alert};