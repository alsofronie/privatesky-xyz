import{r as t,c as e,h as o,g as s}from"./p-8419ec55.js";import{h as i,i as r,j as c}from"./p-6e5ab94f.js";import{C as a}from"./p-5d035810.js";import{T as p}from"./p-8babdb2d.js";import{T as n}from"./p-a61473c5.js";import{T as h,c as l}from"./p-9dc3d2d8.js";var d=function(t,e,o,s){var i,r=arguments.length,c=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};const y=class{constructor(o){t(this,o),this.getHistoryType=e(this,"getHistoryType",7),this.id="",this.chapterToken=""}componentWillLoad(){this.getHistoryType.emit(((t,e)=>{if(t)console.log(t);else switch(e){case"browser":case"hash":this.chapterToken="?chapter=";break;case"query":this.chapterToken="&chapter="}}))}_copyToClipboardHandler(t){try{let e=window.location.href;-1!==window.location.href.indexOf(this.chapterToken)&&(e=window.location.href.split(this.chapterToken)[0]),navigator.clipboard.writeText(`${e}${this.chapterToken}${t}`);const o=this.element.querySelector(".copy-tooltip");o.innerHTML=h,o.setAttribute("class","copy-tooltip copied"),i(t,r(this.element,"psk-page"))}catch(t){console.error(t)}}_resetTooltip(){const t=this.element.querySelector(".copy-tooltip");t.innerHTML=l,t.setAttribute("class","copy-tooltip")}_isCopySupported(){let t=!!document.queryCommandSupported;return["copy","cut"].forEach((e=>{t=t&&!!document.queryCommandSupported(e)})),t}render(){const t=c(this.id.trim());if(0!==t.length&&this._isCopySupported())return o("div",{class:"tooltip_container",onClick:e=>{e.stopImmediatePropagation(),this._copyToClipboardHandler(t)},onMouseOut:()=>{this._resetTooltip()}},o("a",{class:"mark",href:"#"+t,onClick:t=>{t.preventDefault()}},o("slot",null)),o("span",{class:"copy-tooltip"},l))}get element(){return s(this)}};d([a(),n({eventName:"getHistoryType",controllerInteraction:{required:!0},description:"This event gets the history type in order to see what identificator to use for the selected chapter Token.\n                  The three types of token that can be returned are : browser, hash or query."})],y.prototype,"getHistoryType",void 0),d([p({description:"This property is the id of the textzone that will be copied to the clipboard.\n                  It is necessary (but not mandatory) so the URL can be copied in a simplified fashion.\n                  Special characters(Example : ':','/') will be replaced with dash('-').",isMandatory:!1,propertyType:"string"})],y.prototype,"id",void 0);export{y as psk_copy_clipboard}