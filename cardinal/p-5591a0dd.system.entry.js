System.register(["./p-7a13ecf1.system.js","./p-90e1ba03.system.js","./p-ca300ef6.system.js","./p-9221707b.system.js","./p-3f952558.system.js","./p-839127aa.system.js"],(function(e){"use strict";var t,i,n,o,a;return{setters:[function(e){t=e.r;i=e.h},function(){},function(){},function(e){n=e.T},function(e){o=e.C},function(e){a=e.B}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,i,n){var o=arguments.length,a=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)if(s=e[r])a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a;return o>3&&a&&Object.defineProperty(t,i,a),a};var r=e("psk_password_input",function(){function e(e){var i=this;t(this,e);this.__inputHandler=function(e){e.stopImmediatePropagation();var t=e.target.value;i.modelHandler.updateModel("value",t)};this.label=null;this.value=null;this.name=null;this.placeholder=null;this.required=false;this.readOnly=false;this.invalidValue=null}e.prototype.render=function(){return i("psk-input",{type:"password",label:this.label,name:this.name,value:this.value,placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,invalidValue:this.invalidValue,specificProps:{onKeyUp:this.__inputHandler.bind(this),onChange:this.__inputHandler.bind(this)}})};return e}());s([o(),a()],r.prototype,"modelHandler",void 0);s([n({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],r.prototype,"label",void 0);s([n({description:["Specifies the value of an psk-password-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:false,propertyType:"string"})],r.prototype,"value",void 0);s([n({description:["Specifies the name of a psk-password-input component. It is used along with the psk-label component."],isMandatory:false,propertyType:"string"})],r.prototype,"name",void 0);s([n({description:["Specifies a short hint that describes the expected value of an psk-password-input component"],isMandatory:false,propertyType:"string"})],r.prototype,"placeholder",void 0);s([n({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],r.prototype,"required",void 0);s([n({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],r.prototype,"readOnly",void 0);s([n({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:false,propertyType:"boolean"})],r.prototype,"invalidValue",void 0)}}}));