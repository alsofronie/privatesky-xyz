import{r as t,h as e,g as s}from"./p-425ef2b7.js";import{e as i}from"./p-72d97d2e.js";const r=class{constructor(e){t(this,e),this.title="",this.decoratorProperties=[]}receivedPropertiesDescription(t){if(t.detail.tag===this.__host.children[0].tagName.toLowerCase()){const e=t.detail.props;t.stopImmediatePropagation(),e&&e.length>0&&(this.decoratorProperties=JSON.parse(JSON.stringify(e)))}}async componentWillLoad(){this.__setDefineProp()}async connectedCallback(){this.__setDefineProp()}async componentDidLoad(){this.__setDefineProp()}__setDefineProp(){const t=this.__host.children[0];t.hasAttribute("data-define-props")||(t.setAttribute("hidden","true"),t.setAttribute("data-define-props","true"))}render(){let t=this.decoratorProperties.map((t=>e("psk-chapter-wrapper",{title:t.propertyName},e("p",{class:"subtitle"},e("i",null,`${t.propertyName}${t.isMandatory?"":"?"}: ${t.propertyType} ${t.isMandatory?"(mandatory)":"(optional)"}`)),t.description?Array.isArray(t.description)?t.description.map((t=>e("p",{innerHTML:t}))):e("p",null,t.description):null,t.specialNote?e("p",null,e("b",null,"Note: ",t.specialNote)):null,t.defaultValue?e("p",null,e("i",null,"Default value: ",t.defaultValue)):null)));return e("psk-chapter",{title:this.title,id:i(this.title)},t)}get __host(){return s(this)}};export{r as psk_property_descriptor}