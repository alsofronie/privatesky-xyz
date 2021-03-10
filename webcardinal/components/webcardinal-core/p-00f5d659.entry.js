import{r as t,c as s,h as i,g as a}from"./p-751bf9a8.js";import{d as e,e as o,M as h}from"./p-5b88ecac.js";import{d as n,f as c,r,B as l}from"./p-c2bba7e7.js";import{p as d}from"./p-794858b0.js";import"./p-0c3518a5.js";const m=class{constructor(i){t(this,i),this.getModelEvent=s(this,"webcardinal:model:get",7),this.getTranslationModelEvent=s(this,"webcardinal:translationModel:get",7),this.condition=void 0,this.model=void 0,this.falseSlotElements=[],this.trueSlotElements=[],this.conditionValue=!1}async componentWillLoad(){if(!this.host.isConnected)return;const t=Array.from(this.host.children);if(this.trueSlotElements=n(t,e),this.falseSlotElements=n(t,o),this.trueSlotElements.length||this.falseSlotElements.length||(this.trueSlotElements=t),c(this.host),this.model)this.localModel=this.model;else try{this.localModel=await d(this.getModelEvent)}catch(t){console.error(t)}try{this.translationModel=await d(this.getTranslationModelEvent)}catch(t){console.error(t)}this.updateConditionValue()}modelWatchHandler(t){this.localModel=t,this.updateConditionValue()}conditionValueWatchHandler(){this.setVisibleContent()}setVisibleContent(){const t=this.conditionValue?this.trueSlotElements:this.falseSlotElements;c(this.host),t.forEach((t=>{const s=t.cloneNode(!0);r(s),this.host.appendChild(s),l.bindElement(s,{model:this.localModel,translationModel:this.translationModel,recursive:!0,enableTranslations:!0})}))}async updateConditionValue(){if(this.condition){if(this.condition.startsWith(h)){const{localModel:t}=this,s=this.condition.slice(1);this.setExtractedConditionValue(t.getChainValue(s)),t.onChange(s,(()=>{this.setExtractedConditionValue(t.getChainValue(s))})),t.hasExpression(s)&&(this.setExtractedConditionValue(t.evaluateExpression(s)),t.onChangeExpressionChain(s,(()=>{this.setExtractedConditionValue(t.evaluateExpression(s))})))}}else this.conditionValue=!1;this.setVisibleContent()}async setExtractedConditionValue(t){let s;if(t instanceof Promise)try{s=await t}catch(t){console.error("webc-if condition promise failed",t),s=!1}else s=t;this.conditionValue=s}render(){return i("slot",null)}get host(){return a(this)}static get watchers(){return{model:["modelWatchHandler"],conditionValue:["conditionValueWatchHandler"]}}};export{m as webc_if}