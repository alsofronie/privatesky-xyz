import{r as t,g as e,h as s}from"./p-bd5842d7.js";import{C as i}from"./p-92afb37f.js";import{T as r}from"./p-99c53673.js";import{e as l,s as o}from"./p-5a953e20.js";const a=class{constructor(e){t(this,e),this.activeChapter=null,this.chapterList=[],this.initialChapterSetupDone=!1}connectedCallback(){this.pskPageElement=l(e(this),"psk-page")}tocReceived(t){if(t.detail){let{chapters:e,active:s}=t.detail;this.chapterList=this._sortChapters(e),this.activeChapter=s}}_sortCurrentChapter(t,e){if(0===t.children.length)return t;let s=[];for(let i=0;i<e.length;++i){let r=t.children.find(t=>t.guid===e[i]);r&&(e.splice(i--,1),s.push(this._sortCurrentChapter(r,e)))}return Object.assign({},t,{children:s})}_sortChapters(t){const e=this.pskPageElement.querySelectorAll("psk-chapter"),s=[];e.forEach(t=>{t.hasAttribute("data-define-props")||t.hasAttribute("data-define-controller")||t.hasAttribute("data-define-events")||!t.hasAttribute("guid")||s.push(t.getAttribute("guid"))});let i=[];for(let e=0;e<s.length;++e){let r=t.find(t=>t.guid===s[e]);r&&(s.splice(e--,1),i.push(this._sortCurrentChapter(r,s)))}return i}_renderChapters(t,e,i){return e.map((e,r)=>{let l=void 0===i?`${r+1}.`:`${i}${r+1}.`;return s("li",{class:e.guid===this.activeChapter&&"active",onClick:s=>{s.stopImmediatePropagation(),s.preventDefault(),o(e.title,t),this.activeChapter=e.guid}},`${l} ${e.title}`,0===e.children.length?null:s("ul",null,this._renderChapters(t,e.children,l)))})}render(){return this.initialChapterSetupDone&&this.activeChapter||!(this.chapterList.length>0)||(this.activeChapter=this.chapterList[0].guid,this.initialChapterSetupDone=!0),s("div",{class:"table-of-content"},s("psk-card",{title:this.title},s("ul",null,this._renderChapters(this.pskPageElement,this.chapterList))))}};!function(t,e,s,i){var r,l=arguments.length,o=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(l<3?r(o):l>3?r(e,s,o):r(e,s))||o);l>3&&o&&Object.defineProperty(e,s,o)}([i(),r({description:"This property is the title of the psk-card that will be created.",isMandatory:!1,propertyType:"string"})],a.prototype,"title",void 0);export{a as psk_toc};