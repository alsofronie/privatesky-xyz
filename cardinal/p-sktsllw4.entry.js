import{r as e,h as r}from"./p-bd5842d7.js";import{T as t}from"./p-ce13cd9c.js";import"./p-9138c41e.js";import{C as o}from"./p-bd9d7655.js";const s=class{constructor(r){e(this,r)}render(){return r("div",{class:"profile"},r("div",{class:"card-body text-center"},r("img",{src:this.userInfo.avatar,width:"48",height:"48",alt:"card image"}),r("span",null,this.userInfo.username)))}};!function(e,r,t,o){var s,i=arguments.length,c=i<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,r,t,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(c=(i<3?s(c):i>3?s(r,t,c):s(r,t))||c);i>3&&c&&Object.defineProperty(r,t,c)}([o(),t({description:"This property is the user information that needs to be rendered for the user.",isMandatory:!1,propertyType:"any"})],s.prototype,"userInfo",void 0);export{s as mobile_profile_renderer};