(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./node_modules/redux-actions/es/handleActions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/redux-actions/es/handleActions.js + 14 modules ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/invariant/browser.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/reduce-reducers/es/index.js */function(n,e,t){"use strict";var r=t("./node_modules/reduce-reducers/es/index.js"),o=t("./node_modules/invariant/browser.js"),u=t.n(o),i=function(n){if("object"!=typeof n||null===n)return!1;for(var e=n;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(n)===e},c=function(n){return"undefined"!=typeof Map&&n instanceof Map};function f(n){if(c(n))return Array.from(n.keys());if("undefined"!=typeof Reflect&&"function"==typeof Reflect.ownKeys)return Reflect.ownKeys(n);var e=Object.getOwnPropertyNames(n);return"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n))),e}function a(n,e){return c(e)?e.get(n):e[n]}var d,p=(d=function(n){return(i(n)||c(n))&&(e=f(n),t=e.every((function(n){return"next"===n||"throw"===n})),!(e.length&&e.length<=2&&t));var e,t},function n(e,t,r,o){var u=void 0===t?{}:t,i=u.namespace,c=void 0===i?"/":i,p=u.prefix;return void 0===r&&(r={}),void 0===o&&(o=""),f(e).forEach((function(t){var u=function(n){return o||!p||p&&new RegExp("^"+p+c).test(n)?n:""+p+c+n}(function(n){var e;if(!o)return n;var t=n.toString().split("||"),r=o.split("||");return(e=[]).concat.apply(e,r.map((function(n){return t.map((function(e){return""+n+c+e}))}))).join("||")}(t)),i=a(t,e);d(i)?n(i,{namespace:c,prefix:p},r,u):r[u]=i})),r}),s=function(n){return"function"==typeof n},l=function(n){return n},v=function(n){return n.toString()};function y(n,e,t){void 0===t&&(t={}),u()(i(n)||c(n),"Expected handlers to be a plain object.");var o=p(n,t),d=f(o).map((function(n){return function(n,e,t){void 0===e&&(e=l);var r=v(n).split("||");u()(!(void 0===t),"defaultState for reducer handling "+r.join(", ")+" should be defined"),u()(s(e)||i(e),"Expected reducer to be a function or object with next and throw reducers");var o=s(e)?[e,e]:[e.next,e.throw].map((function(n){return function(n){return null==n}(n)?l:n})),c=o[0],f=o[1];return function(n,e){void 0===n&&(n=t);var o=e.type;return o&&-1!==r.indexOf(v(o))?(!0===e.error?f:c)(n,e):n}}(n,a(n,o),e)})),y=r.a.apply(void 0,d.concat([e]));return function(n,t){return void 0===n&&(n=e),y(n,t)}}t.d(e,"a",(function(){return y}))}}]);
//# sourceMappingURL=npm.redux-actions.d7d6d838da26cf3c95a5.js.map