import{g as e}from"./p-bd5842d7.js";import{c as t,D as n,a as s,b as i,d as r}from"./p-b6a32a15.js";function o(o){return function(a,c){const{connectedCallback:l,render:d}=a;let f="psk-send-events",b=n,u=s,p="definedEvents";a.connectedCallback=function(){let t=this,n=e(t);if(o.controllerInteraction&&(u=i,p="definedControllers",b=r,f="psk-send-controllers"),n.hasAttribute(u)){if(!t.componentDefinitions)return t.componentDefinitions={},t.componentDefinitions[p]=[Object.assign({},o,{eventName:String(c)})],l&&l.call(t);let e=t.componentDefinitions;const n=Object.assign({},o,{eventName:String(c)});if(e&&e.hasOwnProperty(b)){let t=[...e[b]];t.push(n),e[b]=[...t]}else e[b]=[n];t.componentDefinitions=Object.assign({},e)}return l&&l.call(t)},a.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[b])return d&&d.call(this);let e=this.componentDefinitions[b];e&&(e=e.reverse()),t(f,{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{o as T};