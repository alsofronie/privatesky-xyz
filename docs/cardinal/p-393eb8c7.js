import{g as e}from"./p-bedaeec3.js";import{b as t,c as n}from"./p-20ab6f08.js";import{c as s}from"./p-4f6aca17.js";function i(i){return function(c,r){const{connectedCallback:a,render:o}=c;c.connectedCallback=function(){let s=this;if(e(s).hasAttribute(t)){if(!s.componentDefinitions)return s.componentDefinitions={definedEvents:[Object.assign({},i,{eventName:String(r)})]},a&&a.call(s);let e=s.componentDefinitions;const t=Object.assign({},i,{eventName:String(r)});if(e&&e.hasOwnProperty(n)){let s=[...e[n]];s.push(t),e[n]=[...s]}else e[n]=[t];s.componentDefinitions=Object.assign({},e)}return a&&a.call(s)},c.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[n])return o&&o.call(this);let e=this.componentDefinitions[n];e&&(e=e.reverse()),s("psk-send-events",{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{i as T};