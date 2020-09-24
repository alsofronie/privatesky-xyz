import{r as e,h as t}from"./p-dac455db.js";import"./p-f2139256.js";import"./p-224883a5.js";import{T as i}from"./p-e04d2587.js";import{C as s}from"./p-5a28b4ba.js";import{B as o}from"./p-6af54922.js";var a=function(e,t,i,s){var o,a=arguments.length,n=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const n=class{constructor(t){e(this,t),this.__inputHandler=e=>{e.stopImmediatePropagation(),this.modelHandler.updateModel("value",e.target.value)},this.label=null,this.value=null,this.name=null,this.placeholder=null,this.required=!1,this.readOnly=!1,this.invalidValue=null}render(){const e=null===this.invalidValue?"":this.invalidValue?"is-invalid":"is-valid";return t("div",{class:"form-group"},this.label&&t("psk-label",{for:this.name,label:this.label}),t("textarea",{name:this.name,value:this.value,placeholder:this.placeholder,required:this.required,class:"form-control "+e,readOnly:this.readOnly,onKeyUp:this.__inputHandler.bind(this),onChange:this.__inputHandler.bind(this)}))}};a([s(),o()],n.prototype,"modelHandler",void 0),a([i({description:['By filling out this property, the component will display above it, a label using <psk-link tag="psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],n.prototype,"label",void 0),a([i({description:["Specifies the value of an psk-textarea component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link tag="using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],n.prototype,"value",void 0),a([i({description:["Specifies the name of a psk-textarea component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],n.prototype,"name",void 0),a([i({description:["Specifies a short hint that describes the expected value of the psk-textarea component"],isMandatory:!1,propertyType:"string"})],n.prototype,"placeholder",void 0),a([i({description:["Specifies that the textarea field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean"})],n.prototype,"required",void 0),a([i({description:["\tSpecifies that the textarea input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean"})],n.prototype,"readOnly",void 0),a([i({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],n.prototype,"invalidValue",void 0);export{n as psk_textarea}