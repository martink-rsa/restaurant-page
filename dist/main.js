!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=8)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),e.push(s))}},e}},function(n,e,t){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function s(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function c(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=r[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(g(o.parts[a],e))}else{for(var s=[];a<o.parts.length;a++)s.push(g(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var o=t.nc;o&&(n.attributes.nonce=o)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function h(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r&&n.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,m=0;function g(n,e){var t,o,r;if(e.singleton){var i=m++;t=f||(f=l(e)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=l(e),o=h.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=s(n,e);return c(t,e),function(n){for(var o=[],i=0;i<t.length;i++){var a=t[i],l=r[a.id];l&&(l.refs--,o.push(l))}n&&c(s(n,e),e);for(var d=0;d<o.length;d++){var u=o[d];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete r[u.id]}}}}},function(n,e,t){var o=t(3);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};t(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""])},function(n,e,t){var o=t(5);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};t(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){e=n.exports=t(0)(!1);var o=t(6)(t(7));e.push([n.i,":root {\n  --main-color-gray: rgb(53, 53, 53);\n  --main-color-hover: rgb(255, 255, 255);\n}\n\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  font-size: 16px;\n}\n\nbody {\n  background: rgb(153, 153, 153);\n  color: rgb(53, 53, 53);\n  font-family: 'Alegreya', serif;\n  text-align: center;\n}\n\nh1 {\n  font-family: 'Mrs Saint Delafield', cursive;\n  font-size: 4em;\n  margin: 0;\n}\n\n.content-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n\n}\n\n.main-container-background {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-image: url("+o+");\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: blur(8px) grayscale(80%);\n}\n\n.main-container {\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n  z-index: 2;\n  background: rgb(214, 214, 214);\n  height: 800px;\n  width: 800px;\n  border-radius: 1px;\n  opacity: 0.8;\n}\n\n/* Logo */\n.logo-main-container {\n  height: auto;\n  width: 100%;\n}\n\n\n.logo-container {\n  height: auto;\n  width: 100%;\n/*   background: rgba(255, 192, 203, .9);\n */}\n\n.logo-text {\n  height:100%;\n  width: 100%;\n}\n\n.logo-slogan {\n  height: auto;\n  font-size: 1.5rem;\n}\n\n\n/* Enter container */\n.enter-container {\n  height: auto;\n  width: 100%;\n  color: var(--main-color-gray);\n  fill: var(--main-color-gray);\n  transition: color 500ms linear, fill 500ms linear;\n}\n\n.enter-container:hover {\n  height: auto;\n  width: 100%;\n  fill: var(--main-color-hover);\n  color: var(--main-color-hover);\n}\n\n\n\n/* Plate icon */\n.svg-icon-plate-container {\n  height: auto;\n  width: auto;\n}\n\n.svg-icon-plate {\n  height: 101px;\n  width: 101px;\n  \n}\n\n.enter-text-container {\n}\n\n\n.enter-text {\n  font-size: 1.5em;\n}\n\n",""])},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof(n=n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){n.exports=t.p+"239ae059cbd6413cef78e9b26e437df5.jpeg"},function(n,e,t){"use strict";t.r(e);t(2),t(4);let o=document.createElement("div");t.d(e,"mainContainer",(function(){return o})),(()=>{console.log("layout loaded");let n=document.getElementById("content");n.classList.add("content-wrapper");let e=document.createElement("div");e.classList.add("main-container-background"),o.classList.add("main-container"),n.appendChild(e),n.appendChild(o)})(),(()=>{console.log("intro");let n=document.createElement("div");n.classList.add("logo-main-container");let e=document.createElement("div");e.classList.add("logo-container");let t=document.createElement("div");t.classList.add("logo-text");let r=document.createElement("h1");r.textContent="Francesco's Ristorante",t.appendChild(r),e.appendChild(t);let i=document.createElement("div");i.classList.add("logo-slogan"),i.textContent="Leave a tip, you cheap bastard.",e.appendChild(i),n.appendChild(e),o.appendChild(n);document.createElement("a");const a=document.createElement("div");a.classList.add("enter-container");const s=document.createElement("div");s.classList.add("svg-icon-plate-container");const c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.setAttribute("viewbox","0 0 100 100"),c.classList.add("svg-icon-plate"),c.id="svg-enter-site";const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","M50.09,7.78A42.16,42.16,0,0,0,33.26,88.6L33.81,78c0-8.47-6.26-5.76-6.26-11.68,0-3.32.11-10.24.11-15.43C27.66,37,33.54,23.62,35,20.63s4.87-6.24,4.91-3.11c0,4.55.19,57.42.19,57.42h0L40.72,91a41.92,41.92,0,0,0,9.37,1.08,42.57,42.57,0,0,0,5.2-.35l1.4-27A13.5,13.5,0,0,1,48.47,59c-2.28-3.41,1.75-33.63,1.75-33.63h2.63V53.76h2.6V25.4H58.3V53.76h2.6V25.4h3V53.76h2.6V25.4h2s4,30.22,1.75,33.63a13.59,13.59,0,0,1-8.12,5.69.35.35,0,0,0-.12,0L63.3,90A42.15,42.15,0,0,0,50.09,7.78Z");const d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("d","M50.09,0a50,50,0,1,0,50,50A50.07,50.07,0,0,0,50.09,0Zm0,96.27A46.28,46.28,0,1,1,96.36,50,46.33,46.33,0,0,1,50.09,96.22Z"),c.appendChild(l),c.appendChild(d),s.appendChild(c),a.appendChild(s);const u=document.createElement("div");u.classList.add("enter-text-container");const p=document.createElement("div");p.classList.add("enter-text"),p.textContent="ENTER",u.appendChild(p),a.appendChild(u),o.appendChild(a)})()}]);