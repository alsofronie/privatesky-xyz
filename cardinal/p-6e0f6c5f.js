import{g as e}from"./p-9eaba2bd.js";import{d as t,a as n}from"./p-ba942fe7.js";function o(e){return null!==e&&"string"==typeof e&&!!e.startsWith("@")&&e.length>=1}function i(e,n,i){return!!o(n)&&void 0===i[t(e)]&&"view-model"!==e}function r(e,t){switch(e){case"attr":return function(e,n){this.setAttribute(e,t.getChainValue(n))};default:return function(e,n){this[e]=t.getChainValue(n)}}}function l(e,t){this.createBoundedModel=function(o,i){return i=n(i),t.onChange(i,()=>{e(o,i)}),e(o,i),{updateModel:e=>{t.setChainValue(i,e)}}}}function a(e,t,o){let{properties:i,hasViewModel:a,instanceName:s}=t;e.dispatchEvent(new CustomEvent("getModelEvent",{bubbles:!0,composed:!0,detail:{callback:(t,u)=>{if(t&&console.error(t),a){let t=e.getAttribute("view-model");t=n(t);let o=u.getChainValue(t);for(let e in o)i[e]||(i[e]={value:t?t+"."+e:e,type:"prop"})}let c={};for(let n in i){let t="attr"===i[n].type?e:this,o=new l(r.call(t,i[n].type,u).bind(t),u);c[n]=o.createBoundedModel(n,i[n].value)}if(void 0!==this[s])throw new Error(`BindModel decorator received a wrong argument as instance name: [${s}]`);this[s]={updateModel:(e,t)=>{i[e]&&c[e].updateModel(t)}},o()}}}))}function s(){return(t,n)=>{let{componentWillLoad:r}=t;t.componentWillLoad=function(){let t=this.__proto__,l=this,s=e(l),u=e=>(e||(e=Promise.resolve()),e.then(()=>r&&r.call(l)),e);if(s.isConnected){let e=Object.keys(t),r=s.getAttributeNames(),c={};for(let t=0;t<e.length;t++){let n=e[t];o(this[n])&&(c[n]={value:this[n],type:"prop"})}for(let t=0;t<r.length;t++){let e=r[t],n=s.getAttribute(e);i(e,n,c)&&(c[e]={value:n,type:"attr"})}let f=s.hasAttribute("view-model");if(Object.keys(c).length>0||f)return u(new Promise(e=>{a.call(l,s,{properties:c,hasViewModel:f,instanceName:n},e)}))}return u()}}}export{s as B}