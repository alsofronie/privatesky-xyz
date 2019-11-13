import{r as e,c as t,h as n}from"./p-a1b3783e.js";import"./p-86d7a324.js";import"./p-50fde516.js";import{T as i}from"./p-9ba64865.js";import{C as r}from"./p-e7e69c7a.js";import{T as s}from"./p-2b58d88b.js";var a=function(e,t,n,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const o=class{constructor(n){e(this,n),this.menuItems=null,this.hamburgerMaxWidth=600,this.showHamburgerMenu=!1,this.showNavBar=!1,this.menuItemClicked=t(this,"menuEvent",7),this.needMenuItemsEvt=t(this,"needMenuItems",7)}checkIfHamburgerIsNeeded(){this.showHamburgerMenu=document.documentElement.clientWidth<this.hamburgerMaxWidth}componentDidLoad(){this.checkIfHamburgerIsNeeded()}handleClick(e){e.preventDefault();let t=e.target.value;for(let n=0;n<this.menuItems.length;n++)this.menuItems[n].active=t===this.menuItems[n];this.menuItemClicked.emit(e.target.value),this.menuItems=[...this.menuItems]}toggleNavBar(){this.showNavBar=!this.showNavBar}componentWillLoad(){this.menuItems||this.needMenuItemsEvt.emit((e,t)=>{e?console.log(e):this.menuItems=t})}renderItem(e){let t=this.itemRenderer?this.itemRenderer:"psk-menu-item-renderer",i=[];if(e.children)for(let n=0;n<e.children.length;n++)i.push(this.renderItem(e.children[n]));return n(t,{onclick:e=>this.handleClick(e),active:!!e.active&&e.active,children:i,hamburger:this.showHamburgerMenu,value:e})}render(){if(!this.menuItems)return;let e=[];for(let n=0;n<this.menuItems.length;n++)e.push(this.renderItem(this.menuItems[n]));let t=this.menuItems.find(e=>e.active);if(this.showHamburgerMenu){e=e.map(e=>n("li",{onClick:this.toggleNavBar.bind(this),class:"nav-item"},e));let i="collapse navbar-collapse "+`${1==this.showNavBar?"show":""}`;return n("nav",{class:"navbar navbar-dark "},n("a",{class:"navbar-brand",href:"#"},t?t.name:"Home"),n("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:this.toggleNavBar.bind(this),"aria-label":"Toggle navigation"},n("span",{class:"navbar-toggler-icon"})),n("div",{class:i},n("ul",{class:"navbar-nav mr-auto"},e)))}return e}};a([r(),i({description:"Another web component that can render each menu item.\n     This component is responsible for rendering children (nested menu items).",isMandatory:!1,propertyType:"string"})],o.prototype,"itemRenderer",void 0),a([i({description:"Menu items datasource. It should be an array if MenuItem[]. \n      If it is not provided, it the component will emit an event (needMenuItems) in order to get the menu items.",isMandatory:!1,propertyType:"array of MenuItem items (MenuItem[])",defaultValue:"null"})],o.prototype,"menuItems",void 0),a([i({description:"This property is intended to be added when you want to change the default value of 600px for switching between normal and hamburger menu.",isMandatory:!1,propertyType:"number",defaultValue:"600"})],o.prototype,"hamburgerMaxWidth",void 0),a([s({eventName:"menuEvent",controllerInteraction:{required:!0},description:"This event will be emited when you click on a menu item and it will create another CustomEvent that will change your route to the page you want to access."})],o.prototype,"menuItemClicked",void 0),a([s({eventName:"needMenuItems",controllerInteraction:{required:!0},description:"If no data is provided for the menuItems property this event will be emited that will render a default menuItem created by us."})],o.prototype,"needMenuItemsEvt",void 0);export{o as app_menu};