import{g as t}from"./p-a9ce478c.js";function n(t,n,e=!1,o=null){const s=new CustomEvent(t,n);e&&(o?o.dispatchEvent(s):document.dispatchEvent(s))}function e(t){return t&&"string"==typeof t&&0!==t.length?t.split("").map((t=>t===t.toLowerCase()?t:"-"+t.toLowerCase())).join(""):""}function o(t,n,e,o=null){let s=t.replace(n,e);return o?o(s):s}function s(t){if("string"!=typeof t)throw new Error("Invalid model chain");return t.split("@").join("")}function c(t){if("boolean"==typeof t)return t;if("string"==typeof t)switch(t.toLowerCase().trim()){case"true":case"1":return!0;case"false":case"0":case null:return!1;default:return Boolean(t)}return Boolean(t)}function i(t){return t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()}))}function r(t,n){const e=document.createElement("style");e.innerHTML=n,t.appendChild(e)}function l(t,n=null){let e=window.$$;return e&&e.SSAPP_CONTEXT&&e.SSAPP_CONTEXT.BASE_URL&&e.SSAPP_CONTEXT.SEED&&0!==t.indexOf(e.SSAPP_CONTEXT.BASE_URL)&&0!==t.indexOf("data:image")&&(t=`${e.SSAPP_CONTEXT.BASE_URL}${0===t.indexOf("/")?t.substr(1):t}`),fetch(t,n)}window.cardinal=window.cardinal||{},window.cardinal.oldCustomTheme=window.cardinal.oldCustomTheme||{};const{oldCustomTheme:a}=window.cardinal;a.dependencies=a.dependencies||{},a.imports=a.imports||{},a.appTheme=a.appTheme||null;const{dependencies:u,imports:w}=a,d=/@import.*?["']([^"']+)["'].*?;/g;function f(t){return new Promise(((n,e)=>{l(t).then((t=>{if(t.ok)return n(t.text());e({url:t.url,status:t.status,statusText:t.statusText})}))}))}function m(t,n){return!!n&&(n.shadowRoot?t.parentNode===n.shadowRoot.host:m(n,n.parentElement))}function b(){let n=t=>{let n={};t.addEventListener("styleExists",(e=>{e.stopImmediatePropagation(),e.preventDefault();let o=e.detail.componentTag;(0,e.detail.callback)(void 0,n.hasOwnProperty(o),t),n[o]||(n[o]=!0)})),t.addEventListener("componentWasRemoved",(t=>{let e=t.detail.componentTag;n[e]&&delete n[e]}))};return n(document.querySelector("body")),e=>{const{componentWillLoad:o,disconnectedCallback:s}=e;e.componentWillLoad=function(){const e=t(this);if(e&&e.isConnected){let t=t=>{const{basePath:s}=window.WebCardinal;let c=e.tagName.toLowerCase(),i=n=>new Promise((e=>{let i=s+"/themes/"+t+"/components/"+c+"/"+c+".css";u[i]||(u[i]=new Promise(((t,n)=>{f(i).then((n=>{t(n)})).catch(n)}))),u[i].then((t=>{var e,o;(e=i,o=t,w[e]||(w[e]=new Promise(((t,n)=>{d.exec(o)?o.replace(d,((e,s)=>{u[s]||(u[s]=f(s)),u[s].then((n=>{t(o.replace(e,n))})).catch(n)})):t(o)}))),w[e]).then((t=>{let e=document.createElement("style");e.innerHTML=t,n.append(e)}))})).catch((t=>{console.log(`Request on resource ${t.url} ended with status: ${t.status} (${t.statusText})`)})).finally((()=>{e(o&&o.call(this))}))}));return e.shadowRoot?(n(e),i(e.shadowRoot)):new Promise(e.isConnected?t=>{let n=m(e,e.parentElement);e.isSlotted=n;let s=new CustomEvent("styleExists",{bubbles:!0,cancelable:!0,composed:!0,detail:{callback:(e,s,c)=>{e?console.log(e):s?t(o&&o.call(this)):(n||(c=c.shadowRoot),i(c).then((()=>{t()})))},componentTag:n?"SLOTTED:"+c:c}});e.dispatchEvent(s)}:t=>{t(o&&o.call(this))})};return a.appTheme?t(a.appTheme):new Promise((n=>{let o=new CustomEvent("getThemeConfig",{bubbles:!0,cancelable:!0,composed:!0,detail:(e,o)=>{if(e)return console.log(e);a.appTheme=o,t(a.appTheme).then((()=>{n()}))}});e.dispatchEvent(o)}))}return o&&o.call(this)},e.disconnectedCallback=function(){const n=t(this);let e=n.tagName.toLowerCase();n.isSlotted&&(e="SLOTTED:"+e);let o=new CustomEvent("componentWasRemoved",{bubbles:!0,cancelable:!0,composed:!0,detail:{componentTag:e}});n.dispatchEvent(o),s&&s.call(this)}}}window.cardinal=window.cardinal||{},window.cardinal.customTheme=window.cardinal.customTheme||{THEME:void 0,IMPORTS:{},EVENTS:{GET_THEME:"getThemeConfig",ADD_STYLE:"CustomTheme:add-style",REMOVE_STYLE:"CustomTheme:remove-style"}};const p=window.cardinal.customTheme;async function h(t){let n="";window&&(window.basePath?n=window.basePath:window.WebCardinal&&window.WebCardinal.basePath&&(n=window.WebCardinal.basePath));const e=t.tagName.toLowerCase(),o=t.mode||t.getAttribute("mode")||"default",s=`${n}/themes/${p.THEME}/components/${e}/${e+("default"!==o?"."+o:"")+".css"}`;if(!p.IMPORTS[s]){const[t,n]=await async function(t){try{const n=await l(t);return[!0,await n.text()]}catch(t){return console.log(t),[!1]}}(s);if(!t)return;p.IMPORTS[s]=n}const c=p.IMPORTS[s];t.shadowRoot?(function(t){const n=t.host,e={true:{},false:{}};n.addEventListener(p.EVENTS.ADD_STYLE,(o=>{o.preventDefault(),o.stopImmediatePropagation();const{data:{tag:s,slotted:c},callback:i}=o.detail;e[c][s]||(i(void 0,c?{target:n}:{target:t}),e[c][s]=!0)})),n.addEventListener(p.EVENTS.REMOVE_STYLE,(t=>{t.preventDefault(),t.stopImmediatePropagation();const{data:{tag:n,slotted:o}}=t.detail;e[o][n]=!1}))}(t.shadowRoot),r(t.shadowRoot,c)):(t.isSlotted=function(t){for(;t.parentElement;){if(t.parentElement.shadowRoot)return t.parentElement.shadowRoot.host===t.parentNode;t=t.parentElement}return!1}(t),t.dispatchEvent(new CustomEvent(p.EVENTS.ADD_STYLE,{bubbles:!0,cancelable:!0,composed:!0,detail:{data:{tag:e,slotted:t.isSlotted},callback:async(t,n)=>{if(t)return console.log(t);const{target:e}=n;r(e,c)}}})))}function g(){return n=>{const{componentWillLoad:e,disconnectedCallback:o}=n;n.componentWillLoad=async function(){const n=t(this);return(n||n.isConnected)&&(p.THEME?await h(n):await async function(t,n){t.dispatchEvent(new CustomEvent(p.EVENTS.GET_THEME,{bubbles:!0,cancelable:!0,composed:!0,detail:async(e,o)=>{if(e)return console.log(e);p.THEME=o,await n(t)}}))}(n,h)),e&&e.call(this)},n.disconnectedCallback=async function(){const n=t(this);return n.dispatchEvent(new CustomEvent(p.EVENTS.REMOVE_STYLE,{bubbles:!0,cancelable:!0,composed:!0,detail:{data:{tag:n.tagName.toLowerCase(),slotted:!!n.isSlotted}}})),o&&o.call(this)}}}window.cardinal=window.cardinal||{},window.cardinal.controllers=window.cardinal.controllers||{},window.cardinal.pendingControllerRequests=window.cardinal.pendingControllerRequests||{};const{controllers:y,pendingControllerRequests:E}=window.cardinal,C={registerController:(t,n)=>{if(y[t]=n,E[t])for(;E[t].length;)E[t].pop().resolve(y[t])},getController:async(t,n=!1)=>{const e=window.WebCardinal;if(e){if(!0===n&&"ContainerController"===t&&(t="WebcController"),"object"==typeof e.controllers){const{controllers:n}=e;if(n[t])return n[t]}if("string"==typeof e.basePath){const{basePath:n}=window.WebCardinal;try{let e=await import(`${n}/scripts/controllers/${t}.js`);return e.default||e}catch(t){return console.error(t),null}}}if(y[t])return y[t];let o=`scripts/controllers/${t}.js`;if(n&&(o=`cardinal/base/controllers/${t}.js`),void 0!==window.basePath){let t="/"===window.basePath[window.basePath.length-1]?"":"/";o=window.basePath+t+o}try{let t=await import(o);return t.default||t}catch(t){return console.error(t),null}}};export{b as C,g as a,s as b,n as c,i as d,C as e,l as f,o as g,e as n,c as s}