import{r as t,h as s,g as e}from"./p-83ba3037.js";import"./p-d8158e24.js";import{b as i}from"./p-70afe4c2.js";const r=class{constructor(s){t(this,s),this.title="",this.decoratorProperties=[]}receivedPropertiesDescription(t){if(t.detail.tag===this.__host.children[0].tagName.toLowerCase()){const s=t.detail.props;t.stopImmediatePropagation(),s&&s.length>0&&(this.decoratorProperties=JSON.parse(JSON.stringify(s)))}}async componentWillLoad(){this.__setDefineProp()}async connectedCallback(){this.__setDefineProp()}async componentDidLoad(){this.__setDefineProp()}__setDefineProp(){const t=this.__host.children[0];t.hasAttribute("data-define-props")||(t.setAttribute("hidden","true"),t.setAttribute("data-define-props","true"))}render(){let t=this.decoratorProperties.map(t=>s("psk-chapter-wrapper",{title:t.propertyName},s("p",{class:"subtitle"},s("i",null,`${t.propertyName}${t.isMandatory?"":"?"}: ${t.propertyType} ${t.isMandatory?"(mandatory)":"(optional)"}`)),t.description?Array.isArray(t.description)?t.description.map(t=>s("p",{innerHTML:t})):s("p",null,t.description):null,t.specialNote?s("p",null,s("b",null,"Note: ",t.specialNote)):null,t.defaultValue?s("p",null,s("i",null,"Default value: ",t.defaultValue)):null));return s("psk-chapter",{title:this.title,id:i(this.title)},t)}get __host(){return e(this)}};export{r as psk_property_descriptor}