(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./node_modules/mini-create-react-context/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */function(t,e,n){"use strict";var o=n(/*! react */"./node_modules/react/index.js"),r=n.n(o),i=n(/*! @babel/runtime/helpers/inheritsLoose */"./node_modules/@babel/runtime/helpers/inheritsLoose.js"),s=n.n(i),u=n(/*! prop-types */"./node_modules/prop-types/index.js"),c=n.n(u),a=n(/*! gud */"./node_modules/gud/index.js"),p=n.n(a);function l(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,o){t=n,e.forEach((function(e){return e(t,o)}))}}}var d=r.a.createContext||function(t,e){var n,r,i="__create-react-context-"+p()()+"__",u=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=l(e.props.value),e}s()(n,t);var o=n.prototype;return o.getChildContext=function(){var t;return(t={})[i]=this.emitter,t},o.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,o=this.props.value,r=t.value;((i=o)===(s=r)?0!==i||1/i==1/s:i!=i&&s!=s)?n=0:(n="function"==typeof e?e(o,r):1073741823,0!==(n|=0)&&this.emitter.set(t.value,n))}var i,s},o.render=function(){return this.props.children},n}(o.Component);u.childContextTypes=((n={})[i]=c.a.object.isRequired,n);var a=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}s()(n,e);var o=n.prototype;return o.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},o.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},o.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},o.getValue=function(){return this.context[i]?this.context[i].get():t},o.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(o.Component);return a.contextTypes=((r={})[i]=c.a.object,r),{Provider:u,Consumer:a}};e.a=d}}]);
//# sourceMappingURL=npm.mini-create-react-context.48296dc81e16fba29623.js.map