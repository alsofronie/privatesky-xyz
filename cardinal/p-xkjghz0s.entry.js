import{r as t,h as e,g as s}from"./p-bd5842d7.js";import{L as i,P as r,T as l}from"./p-ce13cd9c.js";import"./p-9138c41e.js";import{C as o}from"./p-bd9d7655.js";const n=class{constructor(e){t(this,e),this.listContent=null}render(){return e(this.listType===i?"ol":"ul",null,this.listContent)}componentWillLoad(){let t="";console.log(this),this.getInnerContent&&(t=this.getInnerContent("innerHTML")),console.log(t);const e=t.split(/\n/g).map(t=>t.trim()).filter(t=>t.length>0&&"\x3c!----\x3e"!==t);if(0===e.length)return;const s=[];let i=!1,l=null,o=0,n="";e.forEach(t=>{if(null!==r.inlineTag.exec(t))i?n+=t:s.push(this._stringToHTMLElement("li",t));else{let e=r.startTag.exec(t);if(null!==e)i=!0,n+=t,l===e[0]?o++:l||(l=e[0]);else{let e=r.endTag.exec(t);null!==e?(n+=t,l===e[0].replace(/\//g,"")&&(0===o?(s.push(this._stringToHTMLElement("li",n)),l=null,n="",i=!1):o--)):i?n+=t:s.push(this._stringToHTMLElement("li",t))}}}),this.element.innerHTML="",this.listContent=[...s]}_stringToHTMLElement(t,s){return e(t,{innerHTML:s})}get element(){return s(this)}};!function(t,e,s,i){var r,l=arguments.length,o=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(o=(l<3?r(o):l>3?r(e,s,o):r(e,s))||o);l>3&&o&&Object.defineProperty(e,s,o)}([o(),l({description:['This property gives the type of the list. It has two type of values, "ordered" or "unordered"','If this property is missing, "unordered is assumed"'],isMandatory:!1,propertyType:"string"})],n.prototype,"listType",void 0);export{n as psk_list};