(self.webpackChunkMy_Project=self.webpackChunkMy_Project||[]).push([[6],{119:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>function(){var e=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var t,a,i=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return d(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,c.useState)(null),2),n=e[0],r=e[1],t=(0,i.i)().coinname,a=(0,i.g)();return(0,c.useEffect)(function(){return l.a.open(),l.a.emit("coinprice","".concat(t)),function(){l.a.close()}},[]),(0,c.useEffect)(function(){return l.a.on("".concat(t),function(e){r(e)}),function(){l.a.off("".concat(t))}},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"h-1/2",children:(0,s.jsx)(o,{headers:["exchange","price"],rows:n})}),(0,s.jsx)("div",{className:"w-full flex justify-end mt-10",children:(0,s.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",onClick:function(){a.push("/")},children:"Back to Home"})})]})}});var i=r(134),c=r(0),l=r(13),t=r(139),s=r(2),a=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.jsx)(t.b,{to:"exchange/".concat(e.exchange),children:(0,s.jsx)("div",{className:"text-sm text-gray-900",children:e.exchange})})}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,s.jsx)("div",{className:"text-sm text-gray-900",children:e.price})})]})};function o(e){var n;return(0,s.jsx)("div",{className:"flex flex-col",children:(0,s.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,s.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:(0,s.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:(0,s.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,s.jsx)("thead",{className:"bg-gray-50",children:(0,s.jsx)("tr",{children:null===(n=e.headers)||void 0===n?void 0:n.map(function(e,n){return(0,s.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:e},n)})})}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null===(e=e.rows)||void 0===e?void 0:e.map(function(e,n){return(0,s.jsx)("tr",{children:a(e)},n)})})]})})})})})}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}},13:(e,n,r)=>{"use strict";r.d(n,{a:()=>t});const t=(0,r(64).a)("https://api.trackyourcypto.com")}}]);