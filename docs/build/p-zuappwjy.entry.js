import{r as e,h as t}from"./p-2972acc2.js";import"./p-76023420.js";import"./p-e2eec4d0.js";import{T as o}from"./p-400de934.js";const s=class{constructor(t){e(this,t),this.errorLoadingPage=!1}componentWillLoad(){let e=new XMLHttpRequest;e.open("GET",this.pageUrl),e.onload=()=>{200!=e.status?this.errorLoadingPage=!0:this.pageContent=e.responseText},e.onerror=()=>{this.errorLoadingPage=!0},e.send()}render(){return this.errorLoadingPage?t("h4",null,`Page ${this.pageUrl} could not be loaded!`):t("div",{class:"page_content",innerHTML:this.pageContent})}};!function(e,t,o,s){var r,i=arguments.length,p=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,t,o,s);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(p=(i<3?r(p):i>3?r(t,o,p):r(t,o))||p);i>3&&p&&Object.defineProperty(t,o,p)}([o({description:"This property is the url for the page that needs to be loaded",isMandatory:!0,propertyType:"string"})],s.prototype,"pageUrl",void 0);export{s as psk_page_loader};