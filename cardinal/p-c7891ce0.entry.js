import{r as e,h as t,g as i}from"./p-83ba3037.js";import"./p-d8158e24.js";import"./p-70afe4c2.js";import{T as s}from"./p-ae4ae927.js";import{C as o}from"./p-915522c6.js";import{B as l}from"./p-2dcb830e.js";import{P as r}from"./p-2c4adcd7.js";var h=function(e,t,i,s){var o,l=arguments.length,r=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var h=e.length-1;h>=0;h--)(o=e[h])&&(r=(l<3?o(r):l>3?o(t,i,r):o(t,i))||r);return l>3&&r&&Object.defineProperty(t,i,r),r};const n=class{constructor(t){e(this,t),this.label="Select files",this.listFiles=!1,this.filesAppend=!1,this.files=[]}triggerBrowseFile(e){e.preventDefault(),e.stopImmediatePropagation(),this.htmlElement.querySelector("input").click()}addedFile(e){let t=Array.from(e.target.files);if(this.modelHandler){let e=this.filesAppend?[...this.files,...t]:t;this.modelHandler.updateModel("files",e)}if(this.eventName){e.preventDefault(),e.stopImmediatePropagation();let i=new r(this.eventName,t,{bubbles:!0,composed:!0,cancelable:!0});this.htmlElement.dispatchEvent(i),this.files=t,e.target.value=null}}deleteFileFromList(e){let t=this.files;if(t&&this.modelHandler){let i=t.indexOf(e);i>-1&&(t.splice(i,1),this.modelHandler.updateModel("files",t))}}mapFileToDiv(e){return t("div",{class:"fileDiv"},t("button",{type:"button",class:"btn btn-secondary trashButton",onClick:()=>this.deleteFileFromList(e)},t("psk-icon",{icon:"trash"})),t("p",null,e.name))}render(){let e={},i=null;return"directory"===this.accept&&(e={directory:!0,mozdirectory:!0,webkitdirectory:!0},this.accept=null),this.listFiles&&(i=t("div",null,this.files.map(e=>this.mapFileToDiv(e)))),[t("button",{type:"button",class:"btn btn-secondary",onClick:this.triggerBrowseFile.bind(this)},t("slot",null),t("label",null,this.label,t("input",Object.assign({multiple:!0},e,{accept:this.accept,type:"file",onClick:e=>{e.stopImmediatePropagation()},onChange:this.addedFile.bind(this),class:"form-control-file form-control-sm"})))),i,this.eventName||this.modelHandler?null:t("h5",{class:"mt-4"},"No controller set for this component!")]}get htmlElement(){return i(this)}};h([o(),l()],n.prototype,"modelHandler",void 0),h([s({description:"This is the label of the button",isMandatory:!1,propertyType:"string",defaultValue:"Select files"})],n.prototype,"label",void 0),h([s({description:"This property tells the component which types of files can be uploaded from the user's device.",isMandatory:!1,propertyType:"string",specialNote:"If this property is missing, then all types of files can be uploaded."})],n.prototype,"accept",void 0),h([s({description:"This property tells the component if the list of uploaded files will be visible.",isMandatory:!1,propertyType:"boolean",defaultValue:!1,specialNote:"If this property is missing, then the list of uploaded files will be hidden."})],n.prototype,"listFiles",void 0),h([s({description:"This property tells the component if the uploaded files should be appended to the existing file list.",isMandatory:!1,propertyType:"boolean",defaultValue:!1,specialNote:"If this property is missing, then the list of uploaded files will be overridden every time the user select files again."})],n.prototype,"filesAppend",void 0),h([s({description:"This property represents the list of uploaded files.",isMandatory:!1,propertyType:"File[]"})],n.prototype,"files",void 0),n.style=".fileDiv{display:flex}.trashButton{margin:0 5px 0 0;padding:0 !important;border:0 !important}";var p=function(e,t,i,s){var o,l=arguments.length,r=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var h=e.length-1;h>=0;h--)(o=e[h])&&(r=(l<3?o(r):l>3?o(t,i,r):o(t,i))||r);return l>3&&r&&Object.defineProperty(t,i,r),r};const a=class{constructor(t){e(this,t),this.title="",this.typeOfHighlight="note"}render(){return t("div",{class:"psk-highlight psk-highlight-"+this.typeOfHighlight},this.title?t("div",{class:"header"},this.title):null,t("div",{class:"body"},t("slot",null)))}};p([o(),s({description:"The title of the highlighted section.",isMandatory:!1,propertyType:"string"})],a.prototype,"title",void 0),p([s({description:'This property is the type of highlight. Possible values are: "note", "issue", "example", "warning". Defaults to "note".',isMandatory:!1,propertyType:"string"})],a.prototype,"typeOfHighlight",void 0),a.style=".psk-highlight{border-left:.5em solid;margin:1em auto;padding:.5em}.psk-highlight .body{margin:1em 0}.psk-highlight-note{background-color:#E9FBE9;border-color:#52E052}.psk-highlight-note .header{color:#178217}.psk-highlight-issue{background-color:#FBE9E9;border-color:#E05252}.psk-highlight-issue .header{color:#AE1E1E}.psk-highlight-example,.psk-highlight-warning{background-color:#FCFAEE;border-color:#E0CB52}.psk-highlight-example .header,.psk-highlight-warning .header{color:#827017}";export{n as psk_files_chooser,a as psk_highlight}