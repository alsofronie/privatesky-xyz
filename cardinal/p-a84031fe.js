import{g as e}from"./p-1c0c10bb.js";import{b as t,c as n,d as s,e as i}from"./p-67893e64.js";import{c}from"./p-ceec60b1.js";function o(o){return function(r,l){const{connectedCallback:f,componentWillLoad:a,componentDidLoad:b,render:d}=r;let u="psk-send-events",p=s,m=t,h="definedEvents";r.componentWillLoad=function(){let s=e(this);if(!s.hasAttribute(t)&&!s.hasAttribute(n))return a&&a.call(this)},r.componentDidLoad=function(){let s=e(this);if(!s.hasAttribute(t)&&!s.hasAttribute(n))return b&&b.call(this)},r.connectedCallback=function(){let t=this,s=e(t);if(o.controllerInteraction&&(m=n,h="definedControllers",p=i,u="psk-send-controllers"),s.hasAttribute(m)){if(!t.componentDefinitions)return t.componentDefinitions={},t.componentDefinitions[h]=[Object.assign(Object.assign({},o),{eventName:String(l)})],f&&f.call(t);let e=t.componentDefinitions;const n=Object.assign(Object.assign({},o),{eventName:String(l)});if(e&&e.hasOwnProperty(p)){let t=[...e[p]];t.push(n),e[p]=[...t]}else e[p]=[n];t.componentDefinitions=Object.assign({},e)}return f&&f.call(t)},r.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[p])return d&&d.call(this);let e=this.componentDefinitions[p];e&&(e=e.reverse()),c(u,{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{o as T}