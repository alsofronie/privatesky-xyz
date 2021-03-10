import{r as t,h as e,g as o}from"./p-8419ec55.js";import{e as r}from"./p-194f580b.js";import{C as s}from"./p-162efa5e.js";import{T as i}from"./p-4ede5822.js";import{A as n}from"./p-732a86ff.js";var l=function(t,e,o,r){var s,i=arguments.length,n=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(i<3?s(n):i>3?s(e,o,n):s(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};const a=class{constructor(e){t(this,e),this.promisifyControllerLoad=(t,e=!1)=>new Promise(((o,s)=>{r.getController(t,e).then((t=>{o(t)})).catch(s)}))}connectedCallback(){this.disconnected=!1}disconnectedCallback(){this.disconnected=!0}render(){return[e("slot",null),this.htmlFilePath&&e("psk-page-loader",{pageUrl:this.htmlFilePath})]}componentWillLoad(){let t;return t="string"==typeof this.controllerName&&this.controllerName.length>0?this.promisifyControllerLoad(this.controllerName):this.promisifyControllerLoad("ContainerController",!0),t.then((t=>{this.disconnected||(this.controller=new t(this._host,this.history),this.__getInnerController.call(this,this._host),this.controllerScript&&this.executeScript(this.controllerScript))})).catch((t=>{console.log(t)})),t}__getInnerController(t){const e=t.children;for(let t=0;t<e.length;t++){const o=e[t];if("script"===o.tagName.toLowerCase())return this.controllerScript=o.innerHTML,void(o.innerHTML="")}}executeScript(t){return"string"==typeof t&&t.trim().length>0&&new Function("controller",t)(this.controller),null}get _host(){return o(this)}};l([s(),i({isMandatory:!1,description:["This property is a string that will permit the developer to choose his own controller.","If no value is sent then the null default value will be taken and the component will use the basic Controller."],propertyType:"string",defaultValue:"null"})],a.prototype,"controllerName",void 0),l([i({description:["This property is the page url (html) that will be passed to the psk-page-loader component","This component will sent a get request to that url in order to get the content of that url."],isMandatory:!1,propertyType:"string",defaultValue:"null"})],a.prototype,"htmlFilePath",void 0),n.injectProps(a,["history","location"]);export{a as psk_container}