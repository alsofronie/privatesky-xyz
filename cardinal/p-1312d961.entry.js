import{r as s,c as t,h as i}from"./p-ae2cb5d4.js";import"./p-08e69ed6.js";import{i as e}from"./p-4d62c37f.js";import"./p-1728ead7.js";const o=class{constructor(i){s(this,i),this.isOpened=!1,this.dropDownHasChildActive=!1,this.somethingChanged=!1,this.sectionChange=t(this,"sectionChange",7)}routeChanged(){this.dropDownHasChildActive=window.location.href.includes(this.url),this.dropDownHasChildActive&&(this.isOpened=!0)}openDropDown(s){let t=s.target,i=!0;for(;t.parentElement;)if(t=t.parentElement,t.classList.contains("wrapper_container")&&null!==t.querySelector(".children")){i=!1;break}i||this.isOpened||(this.history.push(this.firstMenuChild.path),this.sectionChange.emit(),s.stopImmediatePropagation()),this.isOpened=!0}closeSection(s){this.isOpened=!1,this.dropDownHasChildActive=!1,s.stopImmediatePropagation()}componentWillLoad(){this.routeChanged()}render(){return i("div",{class:`dropdown ${this.dropDownHasChildActive?"active":""} ${this.isOpened?"isOpened":""}`,onClick:this.openDropDown.bind(this)},this.isOpened?i("button",{class:"close-section",onClick:this.closeSection.bind(this)}):null,i("slot",null))}};e(o);export{o as expandable_renderer}