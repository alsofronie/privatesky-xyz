import{r as t,h as e}from"./p-87f0c668.js";import"./p-ff3b654f.js";import"./p-185b2ebc.js";import"./p-a5fc534d.js";import{B as o}from"./p-67458612.js";import{C as i}from"./p-b4c074e0.js";const r=class{constructor(e){t(this,e),this.SWAP_TYPE={UP:"up",DOWN:"down"}}__onItemClick(t){t.preventDefault(),t.stopImmediatePropagation();let e=JSON.parse(JSON.stringify(this.items)),o=t.target.id.split("item-")[1],i=e.findIndex(t=>t.value===o);if(-1===i||0===e.length)return;let r=!e[i].selected;e=e.map(t=>Object.assign(Object.assign({},t),{selected:!1})),e[i]=Object.assign(Object.assign({},e[i]),{selected:r}),this.items=e}__onItemsChange(t,e){t.preventDefault(),t.stopImmediatePropagation();let o,i,r=JSON.parse(JSON.stringify(this.items)),s=r.findIndex(t=>!0===t.selected);switch(e){case this.SWAP_TYPE.UP:o=0,i=s-1;break;case this.SWAP_TYPE.DOWN:o=r.length-1,i=s+1;break;default:return}if(-1===s||s===o)return;let n=r[s];r[s]=r[i],r[i]=n;let c=JSON.parse(JSON.stringify(r));this.items=c,this.modelHandler&&this.modelHandler.updateModel("items",c)}__clearMultipleSelections(){let t=this.items;if(void 0===t)return;let e=!1,o=t.length;for(let i=0;i<o;i++)!0===t[i].selected&&!1===e?e=!0:t[i].selected=!1;this.items=t}componentDidLoad(){this.items&&this.__clearMultipleSelections()}render(){let t=this.items?this.items.map(t=>t.selected&&!0===t.selected?e("div",{class:"selectedItem",id:"item-"+t.value,onClick:t=>this.__onItemClick(t)},e("p",null,t.label),e("div",{class:"arrow-button-container"},e("psk-button",{class:"arrow-button",onClick:t=>this.__onItemsChange(t,this.SWAP_TYPE.UP)},e("psk-icon",{icon:"arrow-up",color:"rgb(255, 255, 255)"})),e("psk-button",{class:"arrow-button",onClick:t=>this.__onItemsChange(t,this.SWAP_TYPE.DOWN)},e("psk-icon",{icon:"arrow-down",color:"rgb(255, 255, 255)"})))):e("div",{class:"clearItem",id:"item-"+t.value,onClick:t=>this.__onItemClick(t)},t.label)):e("p",null,"Items were not provided.");return e("div",null,t)}};(function(t,e,o,i){var r,s=arguments.length,n=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(s<3?r(n):s>3?r(e,o,n):r(e,o))||n);s>3&&n&&Object.defineProperty(e,o,n)})([i(),o()],r.prototype,"modelHandler",void 0),r.style=".clearItem,.selectedItem{border:1px solid black;margin-bottom:5px;border-radius:4px;list-style:none;display:flex;justify-content:space-between;padding:0.5rem;box-shadow:0 0 3px 0 rgba(0,0,0,0.75);background-color:white}.selectedItem{background-color:cornsilk}.arrow-button .btn.btn-primary{padding:0;margin-bottom:0}.arrow-button-container{padding:0 !important}";export{r as psk_draggable_list}