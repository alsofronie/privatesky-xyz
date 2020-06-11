import{r as e,h as t}from"./p-ae2cb5d4.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as r}from"./p-52822181.js";var p=function(e,t,r,p){var i,s=arguments.length,a=s<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,r):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,p);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,r,a):i(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};const i=class{constructor(t){e(this,t),this.componentRender="psk-stepper-renderer"}render(){return t(this.componentRender,{wizardSteps:this.wizardSteps,activeStep:this.activeStep,handleStepChange:this.handleStepChange})}};p([r({description:"This property is the string that defines the psk-stepper render passed on by the psk-wizard.",isMandatory:!1,propertyType:"string",defaultValue:"psk-stepper-renderer"})],i.prototype,"componentRender",void 0),p([r({description:"This parameter holds an array of:\n            wizard configuration\n            the names of the steps\n            the components that will be displayed\n            other properties, like information for the steps.(optional).",isMandatory:!1,propertyType:"array for WizardStep items(WizardStep[])",defaultValue:"psk-stepper-renderer"})],i.prototype,"wizardSteps",void 0),p([r({description:"The WizardStep created by psk-wizard.",isMandatory:!0,propertyType:"WizardStep"})],i.prototype,"activeStep",void 0),p([r({description:"This property is a function that modifies the way the step change is interpreted in the renderer.",isMandatory:!0,propertyType:"Function"})],i.prototype,"handleStepChange",void 0);export{i as psk_stepper}