(self.webpackChunkMy_Project=self.webpackChunkMy_Project||[]).push([[14],{460:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var m=n(1),f=n(76),x=n(32),b=n(3);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var l,r,a=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(l=n.next()).done)&&(a.push(l.value),!t||a.length!==t);s=!0);}catch(e){i=!0,r=e}finally{try{s||null==n.return||n.return()}finally{if(i)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var p=["USD","USDT","BTC"];const r=m.memo(a,function(e,t){return e.data===t.data});function a(e){var t=e.show?"flex":"hidden",n=h((0,m.useState)("USD"),2),l=n[0],r=n[1],a=h((0,m.useState)(""),2),s=a[0],i=a[1],o=h((0,m.useState)(!1),2),n=o[0],c=o[1],a=h((0,m.useState)(!1),2),o=a[0],d=a[1],u=(0,x.b)();return(0,b.jsx)("form",{onSubmit:function(e){null!=e&&e.preventDefault()},className:"".concat(t," z-10 w-full h-full fixed top-0 left-0"),onClick:function(){return e.onClose("filter")},children:(0,b.jsxs)("div",{className:"shadow overflow-visible sm:rounded-md relative lg:w-1/3 w-3/4 m-auto bg-white",onClick:function(e){e.stopPropagation()},children:[(0,b.jsxs)("div",{className:"px-4 py-5 h-2/3 bg-white sm:p-6",children:[(0,b.jsx)("div",{className:"w-full flex justify-end",children:(0,b.jsx)("span",{className:"px-3 pb-1 inline-flex text-s leading-6 font-semibold rounded-full bg-gray-300 text-black-800 ",onClick:function(){return e.onClose("filter")},children:"x"})}),(0,b.jsxs)("div",{className:"w-full",children:[(0,b.jsx)("label",{id:"listbox-label",className:"block text-sm font-medium text-gray-700",children:"Filter"}),(0,b.jsxs)("div",{className:"mt-1 relative",children:[(0,b.jsxs)("button",{type:"button",className:"relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","aria-haspopup":"listbox","aria-expanded":"true","aria-labelledby":"listbox-label",onClick:function(){return c(function(e){return!e})},children:[(0,b.jsx)("span",{className:"flex items-center",children:(0,b.jsx)("span",{className:"ml-3 block truncate",children:s||"Coin"})}),(0,b.jsx)("span",{className:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:(0,b.jsx)("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,b.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),(0,b.jsx)("ul",{className:"".concat(n?"":"hidden"," absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto z-10 focus:outline-none sm:text-sm"),tabIndex:-1,role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-option-3",children:e.data.map(function(t,e){return(0,b.jsxs)("li",{className:"text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",id:"listbox-option-".concat(e),role:"option",onClick:function(){return e=t,c(function(e){return!e}),void(e.subscribed?u(f.a.warning("".concat(e.symbol," is already on the subscription"))):i(e.symbol));var e},children:[(0,b.jsx)("div",{className:"flex items-center",children:(0,b.jsx)("span",{className:"font-normal ml-3 block truncate",children:t.name})}),(0,b.jsx)("div",{className:"flex items-center",children:(0,b.jsx)("span",{className:"font-normal ml-3 block truncate",children:t.symbol})}),(0,b.jsx)("div",{children:t.subscribed?(0,b.jsx)("span",{className:"text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4",children:(0,b.jsx)("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,b.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}):""})]},Math.random())})})]})]}),(0,b.jsxs)("div",{className:"w-full",children:[(0,b.jsx)("label",{id:"listbox-label",className:"block text-sm font-medium text-gray-700",children:"Currency"}),(0,b.jsxs)("div",{className:"mt-1 relative",children:[(0,b.jsxs)("button",{type:"button",className:"relative w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm","aria-haspopup":"listbox","aria-expanded":"true","aria-labelledby":"listbox-label",onClick:function(){return d(function(e){return!e})},children:[(0,b.jsx)("span",{className:"flex items-center",children:(0,b.jsx)("span",{className:"ml-3 block truncate",children:l})}),(0,b.jsx)("span",{className:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",children:(0,b.jsx)("svg",{className:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,b.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),(0,b.jsx)("ul",{className:"".concat(o?"":"hidden"," absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto z-10 focus:outline-none sm:text-sm"),tabIndex:-1,role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-option-3",children:p.map(function(t,e){return(0,b.jsx)("li",{className:"text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9",id:"listbox-option-".concat(e),role:"option",onClick:function(){return e=t,d(function(e){return!e}),void r(e);var e},children:(0,b.jsx)("div",{className:"flex items-center",children:(0,b.jsx)("span",{className:"font-normal ml-3 block truncate",children:t})})},Math.random())})})]})]})]}),(0,b.jsx)("div",{className:"px-4 py-3 mt-2  mb-0 bg-gray-50 text-right sm:px-6",children:(0,b.jsx)("button",{className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:function(){e.onSave(s),i(""),r("USD")},children:"Save"})})]})})}}}]);