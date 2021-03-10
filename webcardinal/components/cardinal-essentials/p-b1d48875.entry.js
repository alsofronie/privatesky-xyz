import{r as t,c as e,h as s}from"./p-8419ec55.js";import"./p-194f580b.js";import{C as i}from"./p-162efa5e.js";import{T as o}from"./p-4ede5822.js";import{T as a}from"./p-128d4e6a.js";import{C as r}from"./p-30fb6952.js";var n=function(t,e,s,i){var o,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(r=(a<3?o(r):a>3?o(e,s,r):o(e,s))||r);return a>3&&r&&Object.defineProperty(e,s,r),r};const h=class{constructor(s){t(this,s),this.openFeedbackHandler=e(this,"openFeedback",7),this._styleCustomisation={},this.alertOpened=!1,this._messagesQueue=[],this._messagesContent=[],this.timer=0,this.opened=!1,this.typeOfAlert=[],this.styleCustomisation={},this.messagesToDisplay=3}styleCustomisationWatcher(t){this._styleCustomisation="string"==typeof t?JSON.parse(t):t}closeFeedbackHandler(t){this.alertOpened&&(this.alertOpened=!1);const e=this._messagesContent.indexOf(t.detail);e>-1&&(this.typeOfAlert.splice(e,1),this._messagesContent.splice(e,1),this._messagesContent=this._messagesContent.slice(),this._messagesQueue.length>0&&(this._messagesContent=[...this._messagesContent,this._messagesQueue.shift()]))}componentWillLoad(){this.styleCustomisationWatcher(this.styleCustomisation),this.openFeedbackHandler.emit(((t,e,s)=>{s?s instanceof Array?s.forEach((t=>{this.typeOfAlert.push(t)})):this.typeOfAlert.push(s):this.typeOfAlert.push("toast"),this.alertOpened=!0,t instanceof Array?t.forEach((t=>{this.addToMessageArray.bind(this)(t,e)})):this.addToMessageArray.bind(this)(t,e)}))}timerToShow(t){if(this._messagesContent.length>0){const e=(new Date).getTime(),s=t.timer;let i=Math.floor((e-s)/r.MINUTE);switch(setTimeout((()=>{this.timerToShow.bind(this)(t)}),r.MINUTE_TICK),setTimeout((()=>{this.timerToShow.bind(this)(t)}),r.HOUR_TICK),!0){case i<=0:this.timeMeasure=r.RIGHT_NOW;break;case i<1:this.timer=Math.floor((e-s)/r.MINUTE),this.timeMeasure="minute ago";break;case i<60:this.timer=Math.floor((e-s)/r.MINUTE),this.timeMeasure=r.MINUTES;break;case i>=60:this.timer=Math.floor((e-s)/r.HOUR),this.timeMeasure=r.HOURS}}}addToMessageArray(t,e){const s={content:t,timer:(new Date).getTime(),name:e};this._messagesContent.length+1<=this.messagesToDisplay?this._messagesContent=[...this._messagesContent,s]:this._messagesQueue=[...this._messagesQueue,s]}render(){let t,e=[];return this._messagesContent.forEach(((i,o)=>{"toast"===this.typeOfAlert[o]?(t=this.toastRenderer?this.toastRenderer:"psk-ui-toast",this.timerToShow.bind(this)(i),e.push(s(t,{message:i,timeSinceCreation:this.timer,timeMeasure:this.timeMeasure,styleCustomisation:this._styleCustomisation}))):(t=this.alertRenderer?this.alertRenderer:"psk-ui-alert",e.push(s(t,{message:this._messagesContent[this._messagesContent.length-1],typeOfAlert:this.typeOfAlert[o],timeAlive:this.timeAlive,styleCustomisation:this._styleCustomisation})))})),s("div",null,e||null)}static get watchers(){return{styleCustomisation:["styleCustomisationWatcher"]}}};n([i(),o({description:"This property is a object based on StyleCustomisation interface ",isMandatory:!1,propertyType:"StyleCustomisation type",specialNote:"Even if you do not use all the parameters there will not be a problem with the default renderers."})],h.prototype,"styleCustomisation",void 0),n([o({description:"This property is the auto closing timer in milliseconds for the alert.",isMandatory:!1,propertyType:"number",defaultValue:5e3,specialNote:"This property will only be taken into consideration when used with the psk-ui-alert child component"})],h.prototype,"timeAlive",void 0),n([o({description:"This property represents the number of toasts to be renderer on the user interface.",isMandatory:!1,propertyType:"number",defaultValue:3,specialNote:"This property will only be taken into consideration when used with the psk-ui-toast child component."})],h.prototype,"messagesToDisplay",void 0),n([o({description:"This property allows the component to display a custom toast in case the default one is not preferred.",isMandatory:!1,propertyType:"string",defaultValue:"psk-ui-toast",specialNote:"If this property is missing , psk-ui-toast will be assumed."})],h.prototype,"toastRenderer",void 0),n([o({description:"This property allows the component to display a custom alert in case the default one is not preferred.",isMandatory:!1,propertyType:"string",defaultValue:"psk-ui-alert",specialNote:"If this property is missing , psk-ui-alert will be assumed."})],h.prototype,"alertRenderer",void 0),n([a({eventName:"openFeedback",controllerInteraction:{required:!0},description:"This even is triggered when the user does an action that require feedback.This event comes with three parameters :\n            message(string) : the message for the action that was executed,\n            name(string) : the name is necessary in case of a toast feedback and\n            typeOfAlert(string) : either toast or a bootstrap alert."})],h.prototype,"openFeedbackHandler",void 0);export{h as psk_list_feedbacks}