import{r as e,c as t,h as i}from"./p-bd5842d7.js";import{C as o}from"./p-92afb37f.js";import"./p-18c69f0f.js";import{T as n}from"./p-7aa21657.js";import{T as s}from"./p-703a81be.js";var a=function(e,t,i,o){var n,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};const r=class{constructor(i){e(this,i),this.label=null,this.value=null,this.name=null,this.readOnly=!1,this.invalidValue=null,this.checked=!1,this.onChangeRadio=t(this,"onChangeRadio",5)}render(){const e=this.name?this.name:this.label&&this.label.replace(/\s/g,"").toLowerCase();return i("div",{class:"form-check form-check-inline"},i("input",{type:"radio",class:"form-check-input",value:this.value?this.value:e,name:e,readOnly:this.readOnly,checked:this.checked,onChange:this.__handleRadioChange.bind(this)}),i("psk-label",{for:e,label:this.label}))}__handleRadioChange(e){e.preventDefault(),e.stopImmediatePropagation(),this.onChangeRadio.emit({value:e.target.value})}};a([o()],r.prototype,"render",null),a([n({description:['By filling out this property, the component will display near it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],r.prototype,"label",void 0),a([n({description:["Specifies the value of a psk-radio component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],r.prototype,"value",void 0),a([n({description:["Specifies the name of a psk-radio component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],r.prototype,"name",void 0),a([n({description:["\tSpecifies that a psk-radio is read-only and it cannot be changed.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],r.prototype,"readOnly",void 0),a([n({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],r.prototype,"invalidValue",void 0),a([n({description:["This property indicates the status of the component, if it checked or not. Also, by using this property, you can set the default value of the radio, in case you need it to be checked."],isMandatory:!1,propertyType:"boolean"})],r.prototype,"checked",void 0),a([s({description:["This event is being triggered when a radio button is checked.","The event bubbles to the parent component, psk-radio-group, where the component will handle the selection of the radio."],specialNote:"This event is not composed, it will not bubble outside the form!"})],r.prototype,"onChangeRadio",void 0);export{r as psk_radio};