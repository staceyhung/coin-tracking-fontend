(self.webpackChunkMy_Project=self.webpackChunkMy_Project||[]).push([[8],{455:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>function(){var e=b((0,s.useState)(),2),n=e[0],r=e[1],e=b((0,s.useState)(),2),a=e[0],t=e[1],o=(0,i.b)(),u=(0,l.g)(),e=function(){var s,r=(s=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n){e.next=6;break}return alert("please input username"),e.abrupt("return");case 6:if(a){e.next=9;break}return alert("please input passward"),e.abrupt("return");case 9:r={username:n,password:a},h.a.login(r).then(function(e){400===e.code?(o(d.error()),o(p.a.warning(e.message))):422===e.code||404===e.code?(o(d.error()),o(p.a.error(e.message))):200===e.code&&(localStorage.setItem("token",e.results.token),localStorage.setItem("id",e.results.userId),o(d.success()),o(p.a.success(e.message)),u.push("/"))});case 10:case"end":return e.stop()}var r},e)}),function(){var e=this,u=arguments;return new Promise(function(r,t){var n=s.apply(e,u);function a(e){y(n,r,t,a,o,"next",e)}function o(e){y(n,r,t,a,o,"throw",e)}a(void 0)})});return function(e){return r.apply(this,arguments)}}();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(f.a,{children:(0,m.jsxs)("form",{onSubmit:e,className:"m-auto mt-10 w-5/6 md:w-1/3 lg:w-1/4 p-5 bg-gray-100 flex-box border-solid border-4 border-indigo-300",children:[(0,m.jsxs)("div",{className:"m-auto w-3/4",children:[(0,m.jsx)("label",{className:"w-full",children:"Username"}),(0,m.jsx)("input",{className:"w-full",type:"text",onChange:function(e){return r(e.target.value)}})]}),(0,m.jsxs)("div",{className:"m-auto w-3/4",children:[(0,m.jsx)("label",{className:"w-full",children:"Password"}),(0,m.jsx)("input",{className:"w-full",type:"password",onChange:function(e){return t(e.target.value)}})]}),(0,m.jsxs)("div",{className:"m-auto mt-4 justify-between",children:[(0,m.jsx)("button",{type:"submit",className:"w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Login"}),(0,m.jsx)(c.b,{to:"register",children:(0,m.jsx)("button",{className:"w-1/2 bg-blue-100 hover:bg-blue-300 text-blue-900 font-bold py-2 px-4  rounded",children:"Register"})})]})]})})})}});var s=t(1),i=t(157),c=t(457),l=t(462),f=t(199),p=t(165),n=t(135);var d={success:function(){return{type:n.a.SUCCESS}},error:function(){return{type:n.a.ERROR}},warning:function(){return{type:n.a.WARNING}}},h=t(175),m=t(3);function y(e,r,t,n,a,o,u){try{var s=e[o](u),i=s.value}catch(e){return void t(e)}s.done?r(i):Promise.resolve(i).then(n,a)}function b(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var n,a,o=[],u=!0,s=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);u=!0);}catch(e){s=!0,a=e}finally{try{u||null==t.return||t.return()}finally{if(s)throw a}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},175:(e,r,t)=>{"use strict";function i(e,r,t,n,a,o,u){try{var s=e[o](u),i=s.value}catch(e){return void t(e)}s.done?r(i):Promise.resolve(i).then(n,a)}function n(s){return function(){var e=this,u=arguments;return new Promise(function(r,t){var n=s.apply(e,u);function a(e){i(n,r,t,a,o,"next",e)}function o(e){i(n,r,t,a,o,"throw",e)}a(void 0)})}}t.d(r,{a:()=>a});var a={register:function(e){return s.apply(this,arguments)},login:function(e){return u.apply(this,arguments)}},o="".concat("https://api.trackyourcypto.com","/api/auth");function u(){return(u=n(regeneratorRuntime.mark(function e(r){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},e.abrupt("return",fetch("".concat(o,"/login"),t).then(function(e){return e.json()}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function s(){return(s=n(regeneratorRuntime.mark(function e(r){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},e.abrupt("return",fetch("".concat(o,"/register"),t).then(function(e){return e.json()}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}}}]);