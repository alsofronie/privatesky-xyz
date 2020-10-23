import{r as t,h as e,g as i}from"./p-83ba3037.js";import"./p-d8158e24.js";import"./p-70afe4c2.js";import{T as o}from"./p-f1a309e5.js";import{C as s}from"./p-915522c6.js";import{B as n}from"./p-2dcb830e.js";import"./p-2c4adcd7.js";import{d as r}from"./p-52252159.js";var p=function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var p=t.length-1;p>=0;p--)(s=t[p])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const a=class{constructor(e){t(this,e)}handleClick(){r(this.__host,{eventName:this.eventName,eventData:this.eventData,eventDispatcher:this.eventDispatcher})}render(){const t={"button-link":!0};return this.__host.className&&(t[this.__host.className]=!0),e("psk-link",{page:this.page,class:t,onClick:this.handleClick.bind(this)},this.icon?e("psk-icon",{icon:this.icon}):null,this.name?e("div",null,this.name):e("slot",null))}get __host(){return i(this)}};p([s(),n()],a.prototype,"modelHandler",void 0),p([o({description:"This property is passed to psk-link.",isMandatory:!1,propertyType:"string"})],a.prototype,"page",void 0),p([o({description:["This property is the label for this component.","If this property is not specified, you must provide a slot as content for the label of this component"],isMandatory:!1,propertyType:"string"})],a.prototype,"name",void 0),p([o({description:"This property describes the icon specified for psk-icon.",isMandatory:!1,propertyType:"string"})],a.prototype,"icon",void 0),p([o({description:["By defining this attribute, the component will be able to trigger an event."],isMandatory:!1,propertyType:"string"})],a.prototype,"eventName",void 0),p([o({description:["This attribute is used to pass some information along with an event.","This attribute is taken into consideration only if the event-name has a value. If not, it is ignored."],isMandatory:!1,propertyType:"any"})],a.prototype,"eventData",void 0),p([o({description:['This attribute is telling the component where to trigger the event. Accepted values: "document, "window".',"If the value is not set or it is not one of the accepted values, the event-dispatcher will be the component itself."],isMandatory:!1,propertyType:"string"})],a.prototype,"eventDispatcher",void 0),a.style=":host(.footer-item)>*,:host(.footer-item) psk-icon .icon{margin:0;padding:0}";export{a as psk_button_link}