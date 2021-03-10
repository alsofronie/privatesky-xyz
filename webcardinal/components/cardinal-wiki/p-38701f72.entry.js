import{r as t,h as e,g as s}from"./p-425ef2b7.js";import"./p-72d97d2e.js";import{C as o}from"./p-33fbb83c.js";import{T as r}from"./p-94c7bf9f.js";var i=function(t,e,s,o){var r,i=arguments.length,n=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(i<3?r(n):i>3?r(e,s,n):r(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n};const n=class{constructor(e){t(this,e),this.cellsWidth="",this.tableContent=null}render(){return e("div",{class:"table-responsive"},e("table",{class:"table"},this.tableContent))}componentWillLoad(){let t=[];this.cellsWidth.length>0&&(t=this.cellsWidth.split(",")),t=t.map((t=>parseInt(t)));let e=this.element.innerHTML.split(/\n/g).map((t=>t.trim().replace("\x3c!----\x3e",""))).filter((t=>t.length>0)).map(((e,s)=>{let o=-1;return`<tr style=width:100%;>${e.split("|").map((e=>(o++,this.header&&0===s?`<th style=width:${t.length>o?t[o]+"%;":"auto"}>${e.trim()}</th>`:`<td style=width:${t.length>=o?t[o]+"%;":"auto"}>${e.trim()}</td>`))).join("")}</tr>`})),s=[];this.header?(s.push(this._stringArrayToHTMLElement("thead",e.splice(0,1))),this.footer?(s.push(this._stringArrayToHTMLElement("tbody",e.splice(0,e.length-1))),s.push(this._stringArrayToHTMLElement("tfoot",[e[e.length-1]]))):s.push(this._stringArrayToHTMLElement("tbody",e.splice(0)))):s=[this._stringArrayToHTMLElement("tbody",e)],this.tableContent=s,this.element.innerHTML=""}_stringArrayToHTMLElement(t,s){return e(t,{innerHTML:s.join("")})}get element(){return s(this)}};i([o(),r({description:"If this property is set to true then the first row of the given content will be shown as a table header.",isMandatory:!1,propertyType:"boolean"})],n.prototype,"header",void 0),i([r({description:"If this property is set to true then the last row of the given content will be shown as a table footer.",isMandatory:!1,propertyType:"boolean"})],n.prototype,"footer",void 0);export{n as psk_table}