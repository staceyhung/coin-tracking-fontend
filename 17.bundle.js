(self.webpackChunkMy_Project=self.webpackChunkMy_Project||[]).push([[17,15],{132:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>function(e){var t=e.show?"flex":"hidden",n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,l,o=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){i=!0,l=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw l}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,c.useState)(x),2),r=n[0],l=n[1],o={type:"default",children:b},a={type:"default",children:h},n=function(e){var t=e.currentTarget.value,e=e.currentTarget.name,t=m(m({},r),{},f({},e,t));l(t)};return(0,d.jsx)("form",{id:"addCoinForm",onSubmit:function(e){null!=e&&e.preventDefault()},className:"".concat(t," z-10 w-full h-full fixed top-0 left-0"),onClick:function(){return e.onClose("add")},children:(0,d.jsxs)("div",{className:"shadow overflow-visible sm:rounded-md relative lg:w-1/3 w-3/4 m-auto bg-white",onClick:function(e){e.stopPropagation()},children:[(0,d.jsxs)("div",{className:"px-4 py-5 h-2/3 bg-white sm:p-6",children:[(0,d.jsx)("div",{className:"w-full flex justify-end",children:(0,d.jsx)("span",{className:"px-3 pb-1 inline-flex text-s leading-6 font-semibold rounded-full bg-gray-300 text-black-800 ",onClick:function(){return e.onClose("add")},children:"x"})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"name",className:"block text-s font-medium text-gray-700",children:"Name"}),(0,d.jsx)("div",{className:"mt-1 relative rounded-md shadow-sm",children:(0,d.jsx)("input",{type:"text",name:"name",id:"name",value:r.name,className:"pl-2 focus:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  block w-full sm:text-sm border-gray-300  rounded-md",placeholder:"Enter the Coin Name",onChange:n})})]}),(0,d.jsxs)("div",{className:"mt-4",children:[(0,d.jsx)("label",{htmlFor:"symbol",className:"block text-s font-medium text-gray-700",children:"Symbol"}),(0,d.jsx)("div",{className:"mt-1 relative rounded-md shadow-sm",children:(0,d.jsx)("input",{type:"text",name:"symbol",id:"symbol",value:r.symbol,className:"pl-2 focus:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  block w-full sm:text-sm border-gray-300  rounded-md",placeholder:"Enter the Coin Symbol",onChange:n})})]}),(0,d.jsx)("div",{className:"mt-4",children:(0,d.jsx)(u.default,{element:o,label:"Currency",placeHolder:"USD",value:r.currency,selectAction:function(e){e="USDT"===e?i.USDT:"BTC"===e?i.BTC:i.USD,e=m(m({},r),{},{currency:e});l(e)}})}),(0,d.jsx)("div",{className:"mt-4",children:(0,d.jsx)(u.default,{element:a,label:"Market Type",placeHolder:"Spot",value:r.marketType,selectAction:function(e){e="Perpetual"===e?s.PERPETUAL:s.SPOT,e=m(m({},r),{},{market:e});l(e)}})})]}),(0,d.jsx)("div",{className:"px-4 py-3 mt-2  mb-0 bg-gray-50 text-right sm:px-6",children:(0,d.jsx)("button",{onClick:function(){e.onSave(r),l(x)},className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Save"})})]})})}});var i,s,c=n(0),u=n(53),d=n(2);function r(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){f(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(n=i=i||{}).USD="USD",n.USDT="USDT",n.BTC="BTC",(n=s=s||{}).SPOT="Spot",n.PERPETUAL="Perpetual";var b=["USD","USDT","BTC"],h=["Spot","Perpetual"],x={name:"",symbol:"",currency:i.USD,marketType:s.SPOT}},53:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>function(t){var e=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,l,o=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){i=!0,l=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw l}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,l.useState)(!1),2),n=e[0],r=e[1],e=function(e){r(!1),t.selectAction&&(0,t.selectAction)(e)};return(0,o.jsxs)("div",{className:"w-full",children:[(0,o.jsx)("label",{id:"listbox-label",className:"block text-sm font-medium text-gray-700",children:t.label}),(0,o.jsxs)("div",{className:"mt-1 relative",children:[(0,o.jsxs)("button",{type:"button",className:"relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","aria-haspopup":"listbox","aria-expanded":"true","aria-labelledby":"listbox-label",onClick:function(){t.onclick&&t.onclick(),r(!n)},children:[(0,o.jsx)("span",{className:"flex items-center",children:(0,o.jsx)("span",{className:"ml-3 block truncate",children:t.value||t.placeHolder})}),(0,o.jsx)("span",{className:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:(0,o.jsx)("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),(0,o.jsxs)("ul",{className:"".concat(n?"":"hidden"," absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto z-10 focus:outline-none sm:text-sm"),tabIndex:-1,role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-option-3",children:["coinList"===t.element.type&&function(e,n){return e.map(function(e,t){return(0,o.jsxs)("li",{className:"text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",id:"listbox-option-".concat(t),role:"option",onClick:function(){return n(e.symbol)},children:[(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)("span",{className:"font-normal ml-3 block truncate",children:e.name})}),(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)("span",{className:"font-normal ml-3 block truncate",children:e.symbol})}),(0,o.jsx)("div",{children:e.subscribed?(0,o.jsx)("span",{className:"text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4",children:(0,o.jsx)("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}):""})]},t)})}(t.element.children,e),"default"===t.element.type&&function(e,n){return e.map(function(e,t){return(0,o.jsx)("li",{className:"text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",id:"listbox-option-".concat(t),role:"option",onClick:function(){return n(e)},children:(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)("span",{className:"font-normal ml-3 block truncate",children:e})})},t)})}(t.element.children,e)]})]})]})}});var l=n(0),o=n(2);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}}}]);