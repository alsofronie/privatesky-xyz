import{r as o,g as l,h as e}from"./p-dac455db.js";import"./p-f2139256.js";import"./p-224883a5.js";import{B as t}from"./p-6af54922.js";const s=class{constructor(e){o(this,e),this.connectedCallback=function(){let o=l(this);console.log("TEST: Connected",o)},this.myState="@ceva"}componentWillLoad(){let o=l(this);console.log("TEST: WillLoad",o),console.log(o.getAttributeNames())}componentDidLoad(){console.log("Loaded");let o=l(this);console.log("TEST: WillLoad",o),console.log(o.getAttributeNames())}render(){let o=l(this);return console.log("TEST: WillLoad",o),console.log(o.getAttributeNames()),e("span",{class:"col-form-label"},"# 1: ",this.firstlabel,e("br",null),"# 2: ",this.secondLabel,e("br",null),"# 3: ",this.thirdLabel,e("br",null),"# 4: ",this.labelValue)}};!function(o,l,e,t){var s,n=arguments.length,c=n<3?l:null===t?t=Object.getOwnPropertyDescriptor(l,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,l,e,t);else for(var i=o.length-1;i>=0;i--)(s=o[i])&&(c=(n<3?s(c):n>3?s(l,e,c):s(l,e))||c);n>3&&c&&Object.defineProperty(l,e,c)}([t()],s.prototype,"modelHandler",void 0);export{s as psk_label_test}