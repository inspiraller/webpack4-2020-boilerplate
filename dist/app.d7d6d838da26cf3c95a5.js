(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./src/Main/App.js":
/*!*************************!*\
  !*** ./src/Main/App.js ***!
  \*************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module uses eval() */function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! react */"./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! prop-types */"./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),Main_RouteWrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! Main/RouteWrapper */"./src/Main/RouteWrapper.jsx"),connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! connected-react-router/immutable */"./node_modules/connected-react-router/immutable.js"),connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_3__),_App_scss__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./_App.scss */"./src/Main/_App.scss"),_App_scss__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_4__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},App=function(_Component){function App(){return _classCallCheck(this,App),_possibleConstructorReturn(this,_getPrototypeOf(App).apply(this,arguments))}return _inherits(App,_Component),_createClass(App,[{key:"componentDidMount",value:function(){document.title="Hello vanilla webpack 4 and all typical packages in a project"}},{key:"render",value:function(){var e=this.props.history;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_3__.ConnectedRouter,{history:e},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main_RouteWrapper__WEBPACK_IMPORTED_MODULE_2__.a,null)))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(react__WEBPACK_IMPORTED_MODULE_0__.Component);App.propTypes={history:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object},App.defaultProps={history:{}};var _default=App,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(App,"App","c:\\baps\\webpack4-2020-boilerplate\\src\\Main\\App.js"),reactHotLoader.register(_default,"default","c:\\baps\\webpack4-2020-boilerplate\\src\\Main\\App.js")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */"./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/Main/RouteWrapper.jsx":
/*!***********************************!*\
  !*** ./src/Main/RouteWrapper.jsx ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses injected variables (module) */function(e,t,o){"use strict";(function(e){var r,a=o(/*! react */"./node_modules/react/index.js"),n=o.n(a),c=o(/*! react-router-dom */"./node_modules/react-router/esm/react-router.js"),l=o(/*! Routes/RouteOne */"./src/Routes/RouteOne.jsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,u,s=function(){return n.a.createElement(c.Switch,null,n.a.createElement(c.Route,{path:"/",exact:!0,component:l.a,key:"a"}))},i=s;t.a=i,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(s,"RouterWrapper","c:\\baps\\webpack4-2020-boilerplate\\src\\Main\\RouteWrapper.jsx"),d.register(i,"default","c:\\baps\\webpack4-2020-boilerplate\\src\\Main\\RouteWrapper.jsx")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,o(/*! ./../../node_modules/webpack/buildin/harmony-module.js */"./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/Main/_App.scss":
/*!****************************!*\
  !*** ./src/Main/_App.scss ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,o){},"./src/Routes/RouteOne.jsx":
/*!*********************************!*\
  !*** ./src/Routes/RouteOne.jsx ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses injected variables (module) */function(e,t,o){"use strict";(function(e){var r,a=o(/*! react */"./node_modules/react/index.js"),n=o.n(a);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,l,d=function(){return n.a.createElement("div",null,"hello route one")},u=d;t.a=u,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(d,"RouteOne","c:\\baps\\webpack4-2020-boilerplate\\src\\Routes\\RouteOne.jsx"),c.register(u,"default","c:\\baps\\webpack4-2020-boilerplate\\src\\Routes\\RouteOne.jsx")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,o(/*! ./../../node_modules/webpack/buildin/harmony-module.js */"./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,o){},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module uses injected variables (module) */function(e,t,o){"use strict";o.r(t),function(e){o(/*! core-js */"./node_modules/core-js/index.js"),o(/*! react-app-polyfill/ie9 */"./node_modules/react-app-polyfill/ie9.js"),o(/*! react-app-polyfill/stable */"./node_modules/react-app-polyfill/stable.js"),o(/*! react-app-polyfill/ie11 */"./node_modules/react-app-polyfill/ie11.js");var t,r=o(/*! react */"./node_modules/react/index.js"),a=o.n(r),n=o(/*! react-dom */"./node_modules/react-dom/index.js"),c=o.n(n),l=o(/*! react-redux */"./node_modules/react-redux/es/index.js"),d=o(/*! react-hot-loader */"./node_modules/react-hot-loader/index.js"),u=o(/*! history */"./node_modules/history/esm/history.js"),s=o(/*! store/configureStore */"./src/store/configureStore.js"),i=o(/*! store/rootReducer */"./src/store/rootReducer.js"),_=o(/*! ./Main/App */"./src/Main/App.js");o(/*! ./index.css */"./src/index.css");(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var p,b,f=Object(u.a)(),y=Object(s.a)({history:f,initialState:{}}).store,O=function(){c.a.render(a.a.createElement(d.AppContainer,null,a.a.createElement(l.Provider,{store:y},a.a.createElement(_.default,{history:f}))),document.getElementById("root"))};O(_.default),e.hot.accept(/*! ./Main/App */"./src/Main/App.js",function(e){_=o(/*! ./Main/App */"./src/Main/App.js"),O()}.bind(this)),e.hot.accept(/*! ./store/rootReducer */"./src/store/rootReducer.js",function(e){i=o(/*! ./store/rootReducer */"./src/store/rootReducer.js"),y.replaceReducer(Object(i.default)(f))}.bind(this)),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(f,"history","c:\\baps\\webpack4-2020-boilerplate\\src\\index.js"),p.register(y,"store","c:\\baps\\webpack4-2020-boilerplate\\src\\index.js"),p.register(O,"render","c:\\baps\\webpack4-2020-boilerplate\\src\\index.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}.call(this,o(/*! ./../node_modules/webpack/buildin/harmony-module.js */"./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/store/configureStore.js":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses injected variables (module) */function(e,t,o){"use strict";(function(e){var r,a=o(/*! redux */"./node_modules/redux/es/redux.js"),n=o(/*! connected-react-router */"./node_modules/connected-react-router/esm/middleware.js"),c=o(/*! redux-thunk */"./node_modules/redux-thunk/es/index.js"),l=o(/*! ./rootReducer */"./src/store/rootReducer.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,u,s=function(e){var t=e.initialState,o=void 0===t?{}:t,r=e.history,d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,u=[c.a,Object(n.a)(r)],s=d(a.a.apply(void 0,u));return{store:Object(a.e)(Object(l.default)(r),o,s)}},i=s;t.a=i,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(s,"configureStore","c:\\baps\\webpack4-2020-boilerplate\\src\\store\\configureStore.js"),d.register(i,"default","c:\\baps\\webpack4-2020-boilerplate\\src\\store\\configureStore.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,o(/*! ./../../node_modules/webpack/buildin/harmony-module.js */"./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/store/menu/_initialState.json":
/*!*******************************************!*\
  !*** ./src/store/menu/_initialState.json ***!
  \*******************************************/
/*! exports provided: open, toptitle, titles, default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e){e.exports=JSON.parse('{"open":false,"toptitle":"i am the top title","titles":["i am the top title","replaced"]}')},"./src/store/menu/actionTypes.js":
/*!***************************************!*\
  !*** ./src/store/menu/actionTypes.js ***!
  \***************************************/
/*! exports provided: default, actionTypes */
/*! exports used: actionTypes */
/*! ModuleConcatenation bailout: Module uses injected variables (module) */function(e,t,o){"use strict";(function(e){var r;o.d(t,"a",(function(){return c})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,n,c={TOGGLE_OPEN:"@menu/TOGGLE_OPEN",TOGGLE_TOPTITLE:"@menu/TOGGLE_TOPTITLE"},l=c;(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(a.register(c,"actionTypes","c:\\baps\\webpack4-2020-boilerplate\\src\\store\\menu\\actionTypes.js"),a.register(l,"default","c:\\baps\\webpack4-2020-boilerplate\\src\\store\\menu\\actionTypes.js")),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,o(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */"./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/store/menu/reducer.js":
/*!***********************************!*\
  !*** ./src/store/menu/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses injected variables (module) */function(e,t,o){"use strict";(function(e){var r,a,n=o(/*! redux-actions */"./node_modules/redux-actions/es/handleActions.js"),c=o(/*! ./_initialState.json */"./src/store/menu/_initialState.json"),l=o(/*! ./actionTypes */"./src/store/menu/actionTypes.js");function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,_,p=Object(n.a)((s(r={},l.a.TOGGLE_OPEN,(function(e,t){return u({},e,{},t.payload)})),s(r,l.a.TOGGLE_TOPTITLE,(function(e,t){return u({},e,{},t.payload)})),r),c),b=p;t.a=b,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(p,"reducer","c:\\baps\\webpack4-2020-boilerplate\\src\\store\\menu\\reducer.js"),i.register(b,"default","c:\\baps\\webpack4-2020-boilerplate\\src\\store\\menu\\reducer.js")),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)}).call(this,o(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */"./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/store/rootReducer.js":
/*!**********************************!*\
  !*** ./src/store/rootReducer.js ***!
  \**********************************/
/*! exports provided: default, rootReducer */
/*! all exports used */
/*! ModuleConcatenation bailout: Module uses injected variables (module) */function(e,t,o){"use strict";o.r(t),function(e){o.d(t,"rootReducer",(function(){return i}));var r,a=o(/*! redux */"./node_modules/redux/es/redux.js"),n=o(/*! connected-react-router */"./node_modules/connected-react-router/esm/index.js"),c=o(/*! ./menu/reducer */"./src/store/menu/reducer.js");function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,s,i={menu:c.a},_=function(e){return Object(a.c)(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){d(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({router:Object(n.a)(e)},i))},p=_;t.default=p,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(i,"rootReducer","c:\\baps\\webpack4-2020-boilerplate\\src\\store\\rootReducer.js"),u.register(_,"createRootReducer","c:\\baps\\webpack4-2020-boilerplate\\src\\store\\rootReducer.js"),u.register(p,"default","c:\\baps\\webpack4-2020-boilerplate\\src\\store\\rootReducer.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}.call(this,o(/*! ./../../node_modules/webpack/buildin/harmony-module.js */"./node_modules/webpack/buildin/harmony-module.js")(e))}},[["./src/index.js",36,4,22,3,26,2,14,15,18,23,19,20,21,17,30,31,34,1,5,6,7,8,9,10,11,12,13,16,24,27,25,28,29,32,33,35]]]);
//# sourceMappingURL=app.d7d6d838da26cf3c95a5.js.map