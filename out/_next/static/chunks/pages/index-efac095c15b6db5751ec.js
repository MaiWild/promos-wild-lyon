_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(t,e,r){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,r=void 0!==e&&e,n=t.hybrid,o=void 0!==n&&n,a=t.hasQuery,i=void 0!==a&&a;return r||o&&i}},"7W2i":function(t,e,r){var n=r("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},"8Kt/":function(t,e,r){"use strict";r("lSNA");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var n,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=n?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=t[o]}r.default=t,e&&e.set(t,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),c=r("FYa8"),s=r("/0+H");function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var r=o.default.Children.toArray(e.props.children);return t.concat(r)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);t.has(c)?a=!1:t.add(c)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var l=p[s];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var f=o.props[l],d=n[l]||new Set;"name"===l&&i||!d.has(f)?(d.add(f),n[l]=d):a=!1}}}return a}}()).reverse().map((function(t,e){var r=t.key||e;return o.default.cloneElement(t,{key:r})}))}function m(t){var e=t.children,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},e)}m.rewind=function(){};var b=m;e.default=b},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,r){"use strict";var n;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.HeadManagerContext=o},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},Nsbk:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,r){"use strict";var n=Object.assign.bind(Object);t.exports=n,t.exports.default=t.exports},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),i=r("Bnag");t.exports=function(t){return n(t)||o(t)||a(t)||i()}},RNiq:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return H}));var n=r("rePB"),o=r("q1tI"),a=r.n(o),i=r("nKUr"),c=r("g4pe"),s=r.n(c),u=r("vRNQ"),l=r.n(u),f=r("7O5W"),p=r("17x9"),d=r.n(p);function m(t){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function v(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function O(t){return e=t,(e-=0)===e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function j(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=O(e.slice(0,n)),a=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:t[o]=a,t}),{})}var x=!1;try{x=!0}catch(R){}function _(t){return f.d.icon?f.d.icon(t):null===t?null:"object"===m(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}function w(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?b({},t,e):{}}function k(t){var e=t.forwardedRef,r=g(t,["forwardedRef"]),n=r.icon,o=r.mask,a=r.symbol,i=r.className,c=r.title,s=r.titleId,u=_(n),l=w("classes",[].concat(v(function(t){var e,r=t.spin,n=t.pulse,o=t.fixedWidth,a=t.inverse,i=t.border,c=t.listItem,s=t.flip,u=t.size,l=t.rotation,f=t.pull,p=(b(e={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":a,"fa-border":i,"fa-li":c,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(u),"undefined"!==typeof u&&null!==u),b(e,"fa-rotate-".concat(l),"undefined"!==typeof l&&null!==l&&0!==l),b(e,"fa-pull-".concat(f),"undefined"!==typeof f&&null!==f),b(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(p).map((function(t){return p[t]?t:null})).filter((function(t){return t}))}(r)),v(i.split(" ")))),p=w("transform","string"===typeof r.transform?f.d.transform(r.transform):r.transform),d=w("mask",_(o)),m=Object(f.b)(u,y({},l,{},p,{},d,{symbol:a,title:c,titleId:s}));if(!m)return function(){var t;!x&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",u),null;var h=m.abstract,O={ref:e};return Object.keys(r).forEach((function(t){k.defaultProps.hasOwnProperty(t)||(O[t]=r[t])})),P(h[0],O)}k.displayName="FontAwesomeIcon",k.propTypes={border:d.a.bool,className:d.a.string,mask:d.a.oneOfType([d.a.object,d.a.array,d.a.string]),fixedWidth:d.a.bool,inverse:d.a.bool,flip:d.a.oneOf(["horizontal","vertical","both"]),icon:d.a.oneOfType([d.a.object,d.a.array,d.a.string]),listItem:d.a.bool,pull:d.a.oneOf(["right","left"]),pulse:d.a.bool,rotation:d.a.oneOf([0,90,180,270]),size:d.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.a.bool,symbol:d.a.oneOfType([d.a.bool,d.a.string]),title:d.a.string,transform:d.a.oneOfType([d.a.string,d.a.object]),swapOpacity:d.a.bool},k.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var P=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),a=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=j(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[O(e)]=n}return t}),{attrs:{}}),i=n.style,c=void 0===i?{}:i,s=g(n,["style"]);return a.attrs.style=y({},a.attrs.style,{},c),e.apply(void 0,[r.tag,y({},a.attrs,{},s)].concat(v(o)))}.bind(null,a.a.createElement),S="js",M="php",A="react",C="symfony",N=[{name:"Jean Michel",stack:[S,"java"],github:"https://github.com",cv:"https://google.com",mail:"johndoe@tonmail.com",portrait:"http://placekitten.com/g/80/80"},{name:"Patrick Jupiter",stack:[M,C],github:"https://github.com",cv:"https://google.com",mail:"johndoe@tonmail.com",portrait:"http://placekitten.com/g/80/80"},{name:"Micheline Yop",stack:[S,A,"node"],github:"https://github.com",cv:"https://google.com",mail:"johndoe@tonmail.com",portrait:"http://placekitten.com/g/80/80"},{name:"Patrick Jupiter",stack:[M,C],github:"https://github.com",cv:"https://google.com",mail:"johndoe@tonmail.com",portrait:"http://placekitten.com/g/80/80"},{name:"Micheline Yop",stack:[S,A],github:"https://github.com",cv:"https://google.com",mail:"johndoe@tonmail.com",portrait:"http://placekitten.com/g/80/80"},{name:"Patrick Jupiter",stack:[M,C],github:"https://github.com",cv:"https://google.com",mail:"johndoe@tonmail.com",portrait:"http://placekitten.com/g/80/80"},{name:"Micheline Yop",stack:[S,A],github:"https://github.com",cv:"https://google.com",mail:"johndoe@tonmail.com",portrait:"http://placekitten.com/g/80/80"}];function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var D=function(t){var e=t.name,r=t.github,n=t.mail,o=t.stack,a=t.cv,c=t.portrait;return Object(i.jsxs)("div",{className:l.a.card,children:[Object(i.jsx)("img",{src:c,className:l.a.portrait}),Object(i.jsx)("h2",{children:e}),Object(i.jsx)("ul",{className:l.a.stack,children:o.map((function(t){return Object(i.jsx)("li",{children:Object(i.jsx)(k,{icon:["fab",t],size:"2x"},t)})}))}),Object(i.jsx)("p",{children:Object(i.jsx)("a",{href:r,children:r})}),Object(i.jsx)("p",{children:Object(i.jsx)("a",{href:"mailto:".concat(n),children:n})}),Object(i.jsx)("a",{href:a,className:l.a.button,children:"Voir le C.V."})]})};function H(){return Object(i.jsxs)("div",{className:l.a.container,children:[Object(i.jsxs)(s.a,{children:[Object(i.jsx)("title",{children:"Promotion D\xe9veloppeur alternant #42"}),Object(i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(i.jsxs)("main",{className:l.a.main,children:[Object(i.jsx)("h1",{className:l.a.title,children:"Promotion D\xe9veloppeur alternant #42"}),Object(i.jsx)("div",{className:l.a.grid,children:N.map((function(t){return Object(o.createElement)(D,I(I({},t),{},{key:t.name}))}))})]}),Object(i.jsxs)("footer",{className:l.a.footer,children:["Done by ",Object(i.jsx)("a",{href:"https://florentbarriol.com",children:" Florent Barriol"}),"."]})]})}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},W8MJ:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},Xuae:function(t,e,r){"use strict";var n=r("RIqP"),o=r("lwsE"),a=r("W8MJ"),i=(r("PJYZ"),r("7W2i")),c=r("a1gu"),s=r("Nsbk");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=s(t);if(e){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}e.__esModule=!0,e.default=void 0;var l=r("q1tI"),f=function(t){i(r,t);var e=u(r);function r(t){var a;return o(this,r),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);e.default=f},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},a1gu:function(t,e,r){var n=r("cDf5"),o=r("PJYZ");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},g4pe:function(t,e,r){t.exports=r("8Kt/")},lSNA:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},lwAK:function(t,e,r){"use strict";var n;e.__esModule=!0,e.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},vRNQ:function(t,e,r){t.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",portrait:"Home_portrait__3AyZr",stack:"Home_stack__Kzhpu",button:"Home_button__Xc9mA",logo:"Home_logo__1YbrH"}},vlRD:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1,2]]]);