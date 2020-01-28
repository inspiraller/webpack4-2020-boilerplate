(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */function(n,t,e){"use strict";function o(n){return"/"===n.charAt(0)}function r(n,t){for(var e=t,o=e+1,r=n.length;o<r;e+=1,o+=1)n[e]=n[o];n.pop()}t.a=function(n,t){void 0===t&&(t="");var e,s=n&&n.split("/")||[],i=t&&t.split("/")||[],a=n&&o(n),p=t&&o(t),u=a||p;if(n&&o(n)?i=s:s.length&&(i.pop(),i=i.concat(s)),!i.length)return"/";if(i.length){var f=i[i.length-1];e="."===f||".."===f||""===f}else e=!1;for(var h=0,l=i.length;l>=0;l--){var c=i[l];"."===c?r(i,l):".."===c?(r(i,l),h++):h&&(r(i,l),h--)}if(!u)for(;h--;h)i.unshift("..");!u||""===i[0]||i[0]&&o(i[0])||i.unshift("");var v=i.join("/");return e&&"/"!==v.substr(-1)&&(v+="/"),v}}}]);
//# sourceMappingURL=npm.resolve-pathname.d7d6d838da26cf3c95a5.js.map