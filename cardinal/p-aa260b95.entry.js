import{r as t,h as o,g as s}from"./p-ae2cb5d4.js";import"./p-08e69ed6.js";import{i as e}from"./p-4d62c37f.js";import"./p-1728ead7.js";const n=class{constructor(o){t(this,o),this.routes={},this.redirectTo=""}componentWillLoad(){let t={},o=function(s){return s.forEach(s=>{if(s.children&&"known"===s.children.type)o(s.children.items);else{let{path:o,component:e,componentProps:n}=s;t[o]={component:e,componentProps:n}}}),t};this.routes=o(this.pages)}locationChanged(t){if(this.currentRoute=t,new URL(window.basePath).pathname.includes(this.currentRoute.pathname)&&""===this.currentRoute.search)this.redirectTo=this.pages[0].path;else{let t=this.pages.map((t,o)=>"404"==t.name?o:null).filter(t=>null!==t)[0];this.redirectTo=t?this.pages[t].path:this.pages[0].path}}render(){let t=this.currentRoute.pathname+this.currentRoute.search;-1!==t.indexOf("&")&&(t=t.substring(0,t.indexOf("&")));let s=this.routes[t],e="psk-page-not-found",n={urlDestination:this.redirectTo};return s&&(e=s.component,n=s.componentProps),o("stencil-route",{component:e,componentProps:n})}get el(){return s(this)}static get watchers(){return{location:["locationChanged"]}}};e(n);export{n as query_pages_router}