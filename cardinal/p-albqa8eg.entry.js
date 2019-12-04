import{r as e,h as t}from"./p-bd5842d7.js";import{T as s}from"./p-ce13cd9c.js";import"./p-9138c41e.js";import{C as o}from"./p-bd9d7655.js";var i=function(e,t,s,o){var i,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(r<3?i(n):r>3?i(t,s,n):i(t,s))||n);return r>3&&n&&Object.defineProperty(t,s,n),n};const r=class{constructor(t){e(this,t),this.opened=!1}render(){return[t("div",{id:"backdrop",onClick:e=>{e.preventDefault(),this.opened=!this.opened}}),t("div",{class:"container"},t("ul",{class:"items"},this.menuItems.map(e=>{t("li",{onClick:()=>{this.opened=!this.opened},class:"nav-item"},e)})),t("div",{class:"toggleFloatingMenu"},t("a",{href:"#",class:"plus",onClick:e=>{e.preventDefault(),this.opened=!this.opened}},t("span",{class:"fa fa-plus"}))))]}};i([o(),s({description:"This property represents the elements that should be rendered in a Floating Menu.",isMandatory:!0,propertyType:"Array of MenuItem(MenuItem[])"})],r.prototype,"menuItems",void 0),i([s({description:"This property shows the state of the backdrop on the Floating Menu and the Floating Menu itself.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],r.prototype,"opened",void 0);export{r as psk_floating_menu};