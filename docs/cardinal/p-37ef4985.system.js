System.register(["./p-52cd94a3.system.js"],function(e){"use strict";var t,n;return{setters:[function(e){t=e.g;n=e.B}],execute:function(){e("C",o);function o(){return function(e){n.cmpDidLoad=true;n.cmpDidUnload=true;var o=e.componentDidLoad,r=e.componentDidUnload;e.componentDidLoad=function(){var e=t(this);if(!e){return}var n=e.tagName.toLowerCase();console.log(typeof globalConfig);if(typeof globalConfig!=="undefined"&&typeof globalConfig.theme==="string"){var r="/themes/"+globalConfig.theme+"/components/"+n+"/"+n+".css";var i=document.createElement("link");i.setAttribute("rel","stylesheet");i.setAttribute("href",r);e.shadowRoot.prepend(i)}return o&&o.call(this)};e.componentDidUnload=function(){return r&&r.call(this)}}}}}});