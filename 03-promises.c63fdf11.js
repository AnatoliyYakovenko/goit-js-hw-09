var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequirebdd5;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequirebdd5=o);var i=o("iQIUW");function r(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{n&&o({position:e,delay:t}),i({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget;let n=+t.elements.delay.value;const o=+t.elements.step.value,l=+t.elements.amount.value;for(let e=1;e<=l;e++)r(e,n).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),n+=o}));
//# sourceMappingURL=03-promises.c63fdf11.js.map