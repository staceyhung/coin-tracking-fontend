(self.webpackChunkMy_Project=self.webpackChunkMy_Project||[]).push([[8],{457:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>function(){var n=(0,s.g)(),a=(0,l.b)(),e=m((0,i.useState)(),2),o=e[0],r=e[1],e=m((0,i.useState)(),2),u=e[0],t=e[1],e=function(){var i,r=(i=regeneratorRuntime.mark(function e(r){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),o){e.next=6;break}return alert("please input username"),e.abrupt("return");case 6:if(u){e.next=9;break}return alert("please input passward"),e.abrupt("return");case 9:return e.next=11,p.a.register({username:o,password:u});case 11:(t=e.sent).error?a(f.a.error(t.errors.msg)):(a(f.a.success(t.message)),n.push("login"));case 13:case"end":return e.stop()}},e)}),function(){var e=this,u=arguments;return new Promise(function(r,t){var n=i.apply(e,u);function a(e){h(n,r,t,a,o,"next",e)}function o(e){h(n,r,t,a,o,"throw",e)}a(void 0)})});return function(e){return r.apply(this,arguments)}}();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c.a,{children:(0,d.jsxs)("form",{onSubmit:e,className:"m-auto mt-10 w-5/6 md:w-1/3 lg:w-1/4 p-5 bg-gray-100 flex-box border-solid border-4 border-indigo-300",children:[(0,d.jsxs)("div",{className:"m-auto w-3/4",children:[(0,d.jsx)("label",{className:"w-full",children:"Username"}),(0,d.jsx)("input",{className:"w-full",type:"text",onChange:function(e){return r(e.target.value)}})]}),(0,d.jsxs)("div",{className:"m-auto w-3/4",children:[(0,d.jsx)("label",{className:"w-full",children:"Password"}),(0,d.jsx)("input",{className:"w-full",type:"password",onChange:function(e){return t(e.target.value)}})]}),(0,d.jsx)("div",{className:"m-auto mt-2 max-w-max",children:(0,d.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Register"})})]})})})}});var i=t(1),s=t(466),c=t(186),l=t(168),f=t(107),p=t(230),d=t(3);function h(e,r,t,n,a,o,u){try{var i=e[o](u),s=i.value}catch(e){return void t(e)}i.done?r(s):Promise.resolve(s).then(n,a)}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var n,a,o=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);u=!0);}catch(e){i=!0,a=e}finally{try{u||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},230:(e,r,t)=>{"use strict";function s(e,r,t,n,a,o,u){try{var i=e[o](u),s=i.value}catch(e){return void t(e)}i.done?r(s):Promise.resolve(s).then(n,a)}function n(i){return function(){var e=this,u=arguments;return new Promise(function(r,t){var n=i.apply(e,u);function a(e){s(n,r,t,a,o,"next",e)}function o(e){s(n,r,t,a,o,"throw",e)}a(void 0)})}}t.d(r,{a:()=>a});var a={register:function(e){return i.apply(this,arguments)},login:function(e){return u.apply(this,arguments)}},o="".concat("https://api.trackyourcypto.com","/api/auth");function u(){return(u=n(regeneratorRuntime.mark(function e(r){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},e.abrupt("return",fetch("".concat(o,"/login"),t).then(function(e){return e.json()}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function i(){return(i=n(regeneratorRuntime.mark(function e(r){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},e.abrupt("return",fetch("".concat(o,"/register"),t).then(function(e){return e.json()}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}}}]);