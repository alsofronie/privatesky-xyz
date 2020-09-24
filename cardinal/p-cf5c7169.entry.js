import{r as t,h as i,g as e}from"./p-dac455db.js";import"./p-f2139256.js";import"./p-224883a5.js";import{T as s}from"./p-e04d2587.js";import{C as n}from"./p-5a28b4ba.js";var r=function(t,i,e,s){var n,r=arguments.length,a=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,i,e,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(r<3?n(a):r>3?n(i,e,a):n(i,e))||a);return r>3&&a&&Object.defineProperty(i,e,a),a};const a=class{constructor(i){t(this,i),this.visibleSeconds=10,this.fadeSeconds=1}componentWillLoad(){this.images?(this.marginTop=this.element.getBoundingClientRect().y,this.checkLayout(),this.imagesSrcs=this.images.split(","),this.getAnimationCSS()):console.log("No images provided")}checkLayout(){this.slideshowHeight=document.documentElement.clientHeight-this.marginTop}renderSlide(t,e){return i("li",{id:"slide-"+e,class:"animation-"+e,style:{backgroundImage:"url("+t+")"}})}getAnimationCSS(){let t=this.fadeSeconds+this.visibleSeconds,i=100/(t*this.imagesSrcs.length),e=`@keyframes fade {\n    0% { opacity: 0; }\n    ${i*this.fadeSeconds}% { opacity: 1; }\n    ${i*t}% { opacity: 1; }\n    ${i*(t+this.fadeSeconds)}% { opacity: 0; }\n    100% { opacity: 0; }\n  }`;for(let i=0;i<this.imagesSrcs.length;i++)e+=`#psk-slider li:nth-child(${i}) {\n        animation-delay: ${t*i}s;\n        }`;e+=`#psk-slider li{animation-duration: ${t*this.imagesSrcs.length}s;}`;let s=document.createElement("style");s.innerHTML=e,this.element.shadowRoot.prepend(s)}render(){let t=[];this.imagesSrcs.forEach((i,e)=>{t.push(this.renderSlide(i,e))});let e=this.title?i("div",{class:"title"},this.title):null,s=this.caption?i("div",{class:"caption"},this.caption):null,n=this.element.children.length>0?i("div",{class:"actions"},i("slot",null)):null,r=null;return(e||s||n)&&(r=i("div",{class:"container"},i("div",{class:"content"},[e,s,n]))),i("div",{class:"psk-slideshow"},i("div",{class:"psk-slideshow-container"},r,i("div",{id:"psk-content-slider"},i("div",{id:"psk-slider"},i("div",{id:"psk-slider-mask",style:{height:this.slideshowHeight+"px"}},i("ul",null,t))))))}get element(){return e(this)}};r([n(),s({description:["This property is the images sources separated by ','.","Using this property a new array will be created by splitting this string by ','."],isMandatory:!0,propertyType:"string"})],a.prototype,"images",void 0),r([s({description:["This property is the title of the slideshow that will be rendered.","If this property is given than a new div container will be created with the title as the class and the HTML child."],isMandatory:!1,propertyType:"string",defaultValue:"null"})],a.prototype,"title",void 0),r([s({description:["This property is the caption of the slideshow that will be rendered.","If this property is given than a new div container will be created with the caption as the class and the HTML child."],isMandatory:!1,propertyType:"string",defaultValue:"null"})],a.prototype,"caption",void 0),r([s({description:"This property represents the number of seconds an image is visible.",isMandatory:!1,propertyType:"number",defaultValue:"10"})],a.prototype,"visibleSeconds",void 0),r([s({description:"This property adjusts the transition between images such that its duration is equal to the specified number of seconds.",isMandatory:!1,propertyType:"number",defaultValue:"1"})],a.prototype,"fadeSeconds",void 0);export{a as psk_slideshow}