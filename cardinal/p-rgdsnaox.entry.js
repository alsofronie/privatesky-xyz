import{r as e,c as t,h as i}from"./p-9835b40a.js";import{T as n}from"./p-e67dceeb.js";import{C as s}from"./p-ec895615.js";import{T as o}from"./p-d293c7ac.js";var r=function(e,t,i,n){var s,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,i,r):s(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};const a=class{constructor(i){e(this,i),this.needWizardConfiguration=t(this,"needWizardConfiguration",7),this.changeStep=t(this,"changeStep",7),this.finishWizard=t(this,"finishWizard",7)}componentWillLoad(){this.needWizardConfiguration.emit(e=>{this.wizardSteps=e,this.activeStep=this.wizardSteps.length>0?this.wizardSteps[0]:null})}handleStepChange(e){this.changeStep.emit({stepIndexToDisplay:e,wizardSteps:this.wizardSteps,activeStep:this.activeStep,callback:(e,t)=>{e?console.error(e):(this.activeStep=t.activeStep,this.wizardSteps=t.wizardSteps)}})}handleFinish(){this.finishWizard.emit({wizardSteps:this.wizardSteps,callback:(e,t)=>{e?console.error(e):console.log(t)}})}handleStepPropertiesChange(e){this.activeStep.stepProperties=e}computeStepDesign(e,t,i){let n="";return 0===e?n+="first ":e===i-1&&(n+="last "),e<t?n+="done":e===t&&(n+="current"),n}render(){const e=this.activeStep.stepComponent;return[i("div",{class:"page-content"},i("div",{class:"wizard-content"},i("div",{class:"wizard-form"},i("form",{class:"form-register",action:"#",method:"post",onSubmit:e=>{e.preventDefault(),e.stopImmediatePropagation()}},i("div",{id:"form-total",class:"wizard clearfix"},i("psk-stepper",{componentRender:this.componentRender,wizardSteps:this.wizardSteps,activeStep:this.activeStep,handleStepChange:this.handleStepChange.bind(this)}),i(e,{onPropertiesChange:this.handleStepPropertiesChange.bind(this),stepProperties:this.activeStep.stepProperties}),i("div",{class:"actions clearfix"},i("ul",{role:"menu","aria-label":"Pagination"},this.activeStep.stepIndex>0?i("li",null,i("button",{role:"menuitem",onClick:this.handleStepChange.bind(this,this.activeStep.stepIndex-1)},"Previous")):null,this.activeStep.stepIndex<this.wizardSteps.length-1?i("li",null,i("button",{role:"menuitem",onClick:this.handleStepChange.bind(this,this.activeStep.stepIndex+1)},"Next")):null,this.activeStep.stepIndex===this.wizardSteps.length-1?i("li",null,i("button",{role:"menuitem",onClick:this.handleFinish.bind(this)},"Finish")):null)))))))]}};r([s(),n({description:"This property is the string that defines the psk-stepper render",isMandatory:!1,propertyType:"string"})],a.prototype,"componentRender",void 0),r([n({description:"This parameter holds the wizard configuration, the names of the steps, the components that will be displayed and if there is the case, other properties, like information for the steps.",isMandatory:!1,propertyType:"array of WizardStep types (WizardStep[])",specialNote:"These information are filled in and handled by the controller of the component, not by the component itself."})],a.prototype,"wizardSteps",void 0),r([o({eventName:"needWizardConfiguration",controllerInteraction:{required:!0},description:"This event is triggered when the component is loaded and if no configuration is given for the wizard.\n            In this case, the controller is responsible to send the configuration to the wizard.\n            This event comes with a single parameter, a callback function that sends the configuration to the component."})],a.prototype,"needWizardConfiguration",void 0),r([o({eventName:"changeStep",controllerInteraction:{required:!0},description:"This event is triggered when the buttons Next, Previous and the step names from the left side of the component are clicked.\n            This event comes with the following parameters:\n                stepIndexToDisplay - the number of the step to be displayed,\n                wizardSteps - the list of the steps from the wizard,\n                activeStep - the step that will be displayed,\n                callback - a callback function that is called from the controller when the validation is done."})],a.prototype,"changeStep",void 0),r([o({eventName:"finishWizard",description:"This event is triggered when the buttons Finish is clicked.\n            This event comes with the following parameters:\n                wizardSteps - the list of the steps from the wizard. Maybe the information inside the wizard will be stored somewhere,\n                callback - a callback function that is called from the controller when the validation is done."})],a.prototype,"finishWizard",void 0);export{a as psk_wizard};