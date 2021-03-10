import{r as e,h as t,g as r}from"./p-986eab93.js";import"./p-d33caa19.js";import{B as i}from"./p-4593fde8.js";import{C as s}from"./p-902ba95e.js";import"./p-66bf9afb.js";import{T as o}from"./p-b13a8264.js";var a=function(e,t,r,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(o<3?s(a):o>3?s(t,r,a):s(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};const n=class{constructor(t){e(this,t),this.errorLoadingPage=!1,this.type="div"}componentWillLoad(){if(this.element.isConnected)return new Promise((e=>{this.getPageContent(this.pageUrl,this.getPageHandler(e))}))}watchHandler(e){this.getPageContent(e,this.getPageHandler())}getPageHandler(e){let t=this;return function(r,i){r?t.errorLoadingPage=!0:(t.errorLoadingPage=!1,t.pageContent=i),"function"==typeof e&&e()}}getPageContent(e,t){let r=new XMLHttpRequest;r.open("GET",e),r.onload=()=>{200!=r.status?t(new Error("Some error occurred")):t(void 0,r.responseText)},r.onerror=()=>{this.errorLoadingPage=!0},r.send()}render(){let e=null;return e=this.type&&"iframe"===this.type.toLowerCase()?t("iframe",{class:"iframe_page_content",frameborder:"0",style:{overflow:"hidden",height:"100%",width:"100%"},src:"data:text/html;charset=utf-8, "+escape(this.pageContent)}):t("div",{class:"page_content",style:{height:"100%",width:"100%"},innerHTML:this.pageContent}),this.errorLoadingPage?t("h4",null,`Page ${this.pageUrl} could not be loaded!`):e}get element(){return r(this)}static get watchers(){return{pageUrl:["watchHandler"]}}};a([i()],n.prototype,"modelHandler",void 0),a([s()],n.prototype,"pageContent",void 0),a([o({description:["This property is the url for the page that needs to be loaded.","When this component loads a get http request will be issued and the cotent of that url will be rendered if it can be accessed."],isMandatory:!0,propertyType:"string"})],n.prototype,"pageUrl",void 0),a([o({description:["This property indicates if the page should use an iframe or div to render the content retrieved using pageSrc property.","Accepted values: iframe, div","Default value:div"],isMandatory:!1,propertyType:"string"})],n.prototype,"type",void 0);export{n as psk_page_loader}