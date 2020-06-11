import{r as t,h as e}from"./p-ae2cb5d4.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as i}from"./p-52822181.js";import{C as a}from"./p-c804890d.js";import{B as s}from"./p-824ccda6.js";var o=function(t,e,i,a){var s,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const n=class{constructor(e){t(this,e),this.__inputHandler=t=>{t.stopImmediatePropagation();let e=t.target.value;this.dataFormat&&(this.dataDate=this.changeDateFormat(e,this.dataFormat)),this.modelHandler.updateModel("value",this.dataDate?this.dataDate:e)},this.changeDateFormat=(t,e)=>{let i="",a=t.split("-"),s=(e=e.trim()).split(" ");return s.forEach((t,e)=>{t.includes("M")?(i+=a[1],e<s.length-1&&(i+="/")):t.includes("D")?(i+=a[2],e<s.length-1&&(i+="/")):t.includes("Y")&&(i+=a[0],e<s.length-1&&(i+="/"))}),i},this.label=null,this.value=null,this.name=null,this.placeholder=null,this.required=!1,this.readOnly=!1,this.invalidValue=null,this.dataFormat=null}render(){return e("psk-input",{type:"date",label:this.label,name:this.name,value:this.value,dataDate:this.dataDate,placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,"data-date":this.value,dateClass:this.dataFormat?"formated-date":null,dataDateFormat:this.dataFormat?this.dataFormat:null,invalidValue:this.invalidValue,specificProps:{onKeyUp:this.__inputHandler.bind(this),onChange:this.__inputHandler.bind(this)}})}};o([a(),s()],n.prototype,"modelHandler",void 0),o([i({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],n.prototype,"label",void 0),o([i({description:["Specifies the value of an psk-date-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.',"This property should respect the format give nto the data-format property."],isMandatory:!1,propertyType:"string"})],n.prototype,"value",void 0),o([i({description:["Specifies the name of a psk-date-input component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],n.prototype,"name",void 0),o([i({description:["Specifies a short hint that describes the expected value of an psk-date-input component"],isMandatory:!1,propertyType:"string"})],n.prototype,"placeholder",void 0),o([i({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],n.prototype,"required",void 0),o([i({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],n.prototype,"readOnly",void 0),o([i({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],n.prototype,"invalidValue",void 0),o([i({isMandatory:!1,description:'This property is the format of the date.At the moment the component can format only "MM DD YYYY", "DD MM YYYY", "MM DD YY" and "DD MM YY".',propertyType:"string",defaultValue:"null"})],n.prototype,"dataFormat",void 0);export{n as psk_date_input}