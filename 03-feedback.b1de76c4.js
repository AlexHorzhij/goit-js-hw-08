var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire4c75;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire4c75=n);var a=n("kEUo3");const r=document.querySelector(".feedback-form");r.addEventListener("input",(0,a.throttle)((function(e){const t=r.elements.email,o=r.elements.message,n={email:t.value,message:o.value},a=JSON.stringify(n);console.log(a),localStorage.setItem("feedback-form-state",a)}),500)),r.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:o}=e.currentTarget;console.log(t.value),console.log(o.value),r.reset(),localStorage.removeItem("feedback-form-state")})),document.addEventListener("DOMContentLoaded",(function(){const e=localStorage.getItem("feedback-form-state"),{email:t,message:o}=r.elements;try{const n=JSON.parse(e);n&&(t.value=n.email,o.value=n.message)}catch(e){console.log("storage data error")}}));
//# sourceMappingURL=03-feedback.b1de76c4.js.map
