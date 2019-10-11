import { r as registerInstance, h } from './core-210175f2.js';

const PskUiLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        if (this.shouldBeRendered) {
            return (h("div", { class: "loader-container" }, h("div", { class: "sk-fading-circle" }, h("div", { class: "sk-circle1 sk-circle" }), h("div", { class: "sk-circle2 sk-circle" }), h("div", { class: "sk-circle3 sk-circle" }), h("div", { class: "sk-circle4 sk-circle" }), h("div", { class: "sk-circle5 sk-circle" }), h("div", { class: "sk-circle6 sk-circle" }), h("div", { class: "sk-circle7 sk-circle" }), h("div", { class: "sk-circle8 sk-circle" }), h("div", { class: "sk-circle9 sk-circle" }), h("div", { class: "sk-circle10 sk-circle" }), h("div", { class: "sk-circle11 sk-circle" }), h("div", { class: "sk-circle12 sk-circle" }))));
        }
    }
    static get watchers() { return {
        "shouldBeRendered": ["render"]
    }; }
    static get style() { return ".sk-fading-circle {\n    margin: auto;\n    width: 40px;\n    height: 60px;\n    position: relative;\n}\n\n.sk-fading-circle .sk-circle {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.sk-fading-circle .sk-circle:before {\n    content: \'\';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #3944ff;\n    border-radius: 100%;\n    -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n    animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n}\n\n.sk-fading-circle .sk-circle2 {\n    -webkit-transform: rotate(30deg);\n    -ms-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n\n.sk-fading-circle .sk-circle3 {\n    -webkit-transform: rotate(60deg);\n    -ms-transform: rotate(60deg);\n    transform: rotate(60deg);\n}\n\n.sk-fading-circle .sk-circle4 {\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n\n.sk-fading-circle .sk-circle5 {\n    -webkit-transform: rotate(120deg);\n    -ms-transform: rotate(120deg);\n    transform: rotate(120deg);\n}\n\n.sk-fading-circle .sk-circle6 {\n    -webkit-transform: rotate(150deg);\n    -ms-transform: rotate(150deg);\n    transform: rotate(150deg);\n}\n\n.sk-fading-circle .sk-circle7 {\n    -webkit-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    transform: rotate(180deg);\n}\n\n.sk-fading-circle .sk-circle8 {\n    -webkit-transform: rotate(210deg);\n    -ms-transform: rotate(210deg);\n    transform: rotate(210deg);\n}\n\n.sk-fading-circle .sk-circle9 {\n    -webkit-transform: rotate(240deg);\n    -ms-transform: rotate(240deg);\n    transform: rotate(240deg);\n}\n\n.sk-fading-circle .sk-circle10 {\n    -webkit-transform: rotate(270deg);\n    -ms-transform: rotate(270deg);\n    transform: rotate(270deg);\n}\n\n.sk-fading-circle .sk-circle11 {\n    -webkit-transform: rotate(300deg);\n    -ms-transform: rotate(300deg);\n    transform: rotate(300deg);\n}\n\n.sk-fading-circle .sk-circle12 {\n    -webkit-transform: rotate(330deg);\n    -ms-transform: rotate(330deg);\n    transform: rotate(330deg);\n}\n\n.sk-fading-circle .sk-circle2:before {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n}\n\n.sk-fading-circle .sk-circle3:before {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n\n.sk-fading-circle .sk-circle4:before {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n\n.sk-fading-circle .sk-circle5:before {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n}\n\n.sk-fading-circle .sk-circle6:before {\n    -webkit-animation-delay: -0.7s;\n    animation-delay: -0.7s;\n}\n\n.sk-fading-circle .sk-circle7:before {\n    -webkit-animation-delay: -0.6s;\n    animation-delay: -0.6s;\n}\n\n.sk-fading-circle .sk-circle8:before {\n    -webkit-animation-delay: -0.5s;\n    animation-delay: -0.5s;\n}\n\n.sk-fading-circle .sk-circle9:before {\n    -webkit-animation-delay: -0.4s;\n    animation-delay: -0.4s;\n}\n\n.sk-fading-circle .sk-circle10:before {\n    -webkit-animation-delay: -0.3s;\n    animation-delay: -0.3s;\n}\n\n.sk-fading-circle .sk-circle11:before {\n    -webkit-animation-delay: -0.2s;\n    animation-delay: -0.2s;\n}\n\n.sk-fading-circle .sk-circle12:before {\n    -webkit-animation-delay: -0.1s;\n    animation-delay: -0.1s;\n}\n\n\@-webkit-keyframes sk-circleFadeDelay {\n    0%,\n    39%,\n    100% {\n        opacity: 0;\n    }\n    40% {\n        opacity: 1;\n    }\n}\n\n\@keyframes sk-circleFadeDelay {\n    0%,\n    39%,\n    100% {\n        opacity: 0;\n    }\n    40% {\n        opacity: 1;\n    }\n}\n\n.loader-container {\n    background: rgba(173, 174, 255, 0.6);\n    height: 100%;\n    display: grid;\n}"; }
};

export { PskUiLoader as psk_ui_loader };