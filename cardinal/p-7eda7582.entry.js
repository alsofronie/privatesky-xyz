import{r as t,h as r}from"./p-dac455db.js";import"./p-f2139256.js";import{b as s}from"./p-224883a5.js";const l=class{constructor(r){t(this,r),this.title="",this.decoratorProperties=[]}receivedPropertiesDescription(t){const r=t.detail;t.stopImmediatePropagation(),r&&r.length>0&&(this.decoratorProperties=JSON.parse(JSON.stringify(r)))}render(){let t=this.decoratorProperties.map(t=>r("psk-chapter-wrapper",{title:t.propertyName},r("p",{class:"subtitle"},r("i",null,`${t.propertyName}${t.isMandatory?"":"?"}: ${t.propertyType} ${t.isMandatory?"(mandatory)":"(optional)"}`)),Array.isArray(t.description)?t.description.map(t=>r("p",{innerHTML:t})):r("p",null,t.description),t.specialNote?r("p",null,r("b",null,"Note: ",t.specialNote)):null,t.defaultValue?r("p",null,r("i",null,"Default value: ",t.defaultValue)):null));return r("psk-chapter",{title:this.title,id:s(this.title)},t)}};export{l as psk_property_descriptor}