import{g as e,d as t,n,C as o,a as i,c as r,e as s}from"./p-9e9aa2a3.js";function a(e){return null!==e&&"string"==typeof e&&!!e.startsWith("@")&&e.length>=1}function l(e,n,o){return!!a(n)&&void 0===o[t(e)]&&"view-model"!==e}function c(e,t){switch(e){case"attr":return function(e,n){this.setAttribute(e,t.getChainValue(n))};default:return function(e,n){let o=t.getChainValue(n);this[e]=Array.isArray(this[e])?[...o]:o}}}function p(e,t){this.createBoundedModel=function(o,i){return i=n(i),t.onChange(i,(()=>{e(o,i)})),e(o,i),{updateModel:e=>{t.setChainValue(i,e)}}}}function u(e,t,o){let{properties:i,hasViewModel:r,instanceName:s}=t;e.dispatchEvent(new CustomEvent("getModelEvent",{bubbles:!0,composed:!0,detail:{callback:(t,a)=>{let l;t&&console.error(t);let u={};const f=t=>{if(!u[t]){let n="attr"===i[t].type?e:this,o=new p(c.call(n,i[t].type,a).bind(n),a);u[t]=o.createBoundedModel(t,i[t].value)}},d=()=>{for(let e in i)f(e)};if(r){l=e.getAttribute("view-model"),l=n(l);const t=()=>{let e=a.getChainValue(l);for(let t in e)i[t]||(i[t]={value:l?l+"."+t:t,type:"prop"})};t(),a.onChange(l,(()=>{t(),d()}))}if(d(),void 0!==this[s])throw new Error(`BindModel decorator received a wrong argument as instance name: [${s}]`);this[s]={updateModel:(e,t)=>{i[e]||(i[e]={value:l?l+"."+e:e,type:"prop"},f(e)),u[e].updateModel(t)}},o()}}}))}function f(){return(t,n)=>{let{componentWillLoad:o}=t;t.componentWillLoad=function(){let t=this.__proto__,i=this,r=e(i),s=e=>e?new Promise((t=>{e.then((()=>{t(o&&o.call(i))}))})):o&&o.call(i);if(r.isConnected){let e=Object.keys(t),o=r.getAttributeNames(),c={};for(let t=0;t<e.length;t++){let n=e[t];a(this[n])&&(c[n]={value:this[n],type:"prop"})}for(let e=0;e<o.length;e++){let t=o[e],n=r.getAttribute(t);l(t,n,c)&&(c[t]={value:n,type:"attr"})}let p=r.hasAttribute("view-model");if(Object.keys(c).length>0||p)return s(new Promise((e=>{u.call(i,r,{properties:c,hasViewModel:p,instanceName:n},e)})))}return s()}}}const d={VERSIONS:[{ref:o,version:"v1.0"},{ref:i,version:"v2.0"}]},h=window.customThemeVersion,m=([1,2].includes(h)?d.VERSIONS[h-1]:d.VERSIONS[0]).ref;function b(t){return function(n,o){const{connectedCallback:i,render:a,componentWillLoad:l,componentDidLoad:c}=n;n.componentWillLoad=function(){if(!e(this).hasAttribute("data-define-props"))return l&&l.call(this)},n.componentDidLoad=function(){if(!e(this).hasAttribute("data-define-props"))return c&&c.call(this)},n.connectedCallback=function(){let n=this,s=e(n),a=r(String(o));if(s.hasAttribute("data-define-props")){if(!n.componentDefinitions)return n.componentDefinitions={definedProperties:[Object.assign(Object.assign({},t),{propertyName:a})]},i&&i.call(n);let e=n.componentDefinitions;const o=Object.assign(Object.assign({},t),{propertyName:a});if(e&&e.hasOwnProperty("definedProperties")){let t=[...e.definedProperties];t.push(o),e.definedProperties=[...t]}else e.definedProperties=[o];n.componentDefinitions=Object.assign({},e)}return i&&i.call(n)},n.render=function(){let t=this;const n=e(t).tagName.toLowerCase();if(!t.componentDefinitions||!t.componentDefinitions||!t.componentDefinitions.definedProperties)return a&&a.call(t);let o=t.componentDefinitions.definedProperties;o&&(o=o.reverse()),s("psk-send-props",{composed:!0,bubbles:!0,cancelable:!0,detail:{tag:n,props:o}},!0)}}}export{f as B,m as C,b as T}