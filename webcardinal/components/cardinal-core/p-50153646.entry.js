import{r as e,h as r}from"./p-986eab93.js";import"./p-d33caa19.js";import{B as t}from"./p-4593fde8.js";import{C as o}from"./p-902ba95e.js";import"./p-66bf9afb.js";import{T as s}from"./p-b13a8264.js";var i=function(e,r,t,o){var s,i=arguments.length,a=i<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,o);else for(var p=e.length-1;p>=0;p--)(s=e[p])&&(a=(i<3?s(a):i>3?s(r,t,a):s(r,t))||a);return i>3&&a&&Object.defineProperty(r,t,a),a};const a=class{constructor(r){e(this,r)}render(){return r("div",{class:"profile"},r("div",{class:"card-body text-center"},r("img",{src:this.userInfo.avatar,width:"48",height:"48",alt:"card image"}),r("span",null,this.userInfo.username)))}};i([t()],a.prototype,"modelHandler",void 0),i([o(),s({description:"This property is the user information that needs to be rendered for the user.",isMandatory:!1,propertyType:"any"})],a.prototype,"userInfo",void 0);export{a as mobile_profile_renderer}