function e(e,c={}){return new Promise(((n,t)=>{e.emit(Object.assign(Object.assign({},c),{callback:(e,c)=>{e&&t(e),n(c)}}))}))}function c(e,c,n={}){return new Promise(((t,a)=>{c.dispatchEvent(new CustomEvent(e,Object.assign({bubbles:!0,composed:!0,cancelable:!0,detail:{callback:(e,c)=>{e&&a(e),t(c)}}},n)))}))}export{c as a,e as p}