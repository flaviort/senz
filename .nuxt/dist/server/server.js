module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/buttons-arrow-down","2":"pages/about","3":"pages/contact","4":"pages/index","5":"pages/projects","6":"pages/projects/lp-fitness","7":"pages/projects/ultra-capital","8":"pages/services"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("162ac6c2", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("53f61d5f", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("76f303e1", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7ad1b6ef", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/services-bg.7edd6a2.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/projects-bg.2d3323a.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
module.exports = __webpack_require__(37);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("fcbcc66c", content, true)

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(25);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(28);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(31);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}body{font-size:1rem;line-height:1.5rem;will-change:auto;}.container-wrapper{margin-left:auto;margin-right:auto;width:100%;max-width:1536px;padding-left:1.5rem;padding-right:1.5rem;}.pointer-events-none{pointer-events:none;}.static{position:static;}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.left-0{left:0px;}.top-16{top:4rem;}.right-6{right:1.5rem;}.top-0{top:0px;}.top-6{top:1.5rem;}.right-5{right:1.25rem;}.bottom-5{bottom:1.25rem;}.top-1\\/2{top:50%;}.left-1\\/2{left:50%;}.right-0{right:0px;}.z-40{z-index:40;}.z-50{z-index:50;}.z-20{z-index:20;}.z-10{z-index:10;}.z-0{z-index:0;}.float-right{float:right;}.float-left{float:left;}.mx-auto{margin-left:auto;margin-right:auto;}.my-1\\.5{margin-top:0.375rem;margin-bottom:0.375rem;}.my-1{margin-top:0.25rem;margin-bottom:0.25rem;}.mb-6{margin-bottom:1.5rem;}.mb-4{margin-bottom:1rem;}.mt-5{margin-top:1.25rem;}.mt-10{margin-top:2.5rem;}.mb-12{margin-bottom:3rem;}.mb-20{margin-bottom:5rem;}.mb-14{margin-bottom:3.5rem;}.mb-7{margin-bottom:1.75rem;}.mt-1{margin-top:0.25rem;}.-ml-1{margin-left:-0.25rem;}.mr-10{margin-right:2.5rem;}.mr-6{margin-right:1.5rem;}.mb-10{margin-bottom:2.5rem;}.mt-14{margin-top:3.5rem;}.mt-8{margin-top:2rem;}.mb-2{margin-bottom:0.5rem;}.-ml-6{margin-left:-1.5rem;}.-mr-6{margin-right:-1.5rem;}.block{display:block;}.inline-block{display:inline-block;}.flex{display:flex;}.hidden{display:none;}.h-screen{height:100vh;}.h-full{height:100%;}.h-auto{height:auto;}.h-\\[2px\\]{height:2px;}.h-0{height:0px;}.h-\\[90vh\\]{height:90vh;}.h-5{height:1.25rem;}.h-14{height:3.5rem;}.h-6{height:1.5rem;}.\\!h-\\[150px\\]{height:150px !important;}.h-\\[1px\\]{height:1px;}.min-h-screen{min-height:100vh;}.w-\\[calc\\(100vw-80px\\)\\]{width:calc(100vw - 80px);}.w-full{width:100%;}.w-24{width:6rem;}.w-8{width:2rem;}.w-0{width:0px;}.w-2\\/3{width:66.666667%;}.w-1\\/2{width:50%;}.w-5{width:1.25rem;}.w-14{width:3.5rem;}.w-6{width:1.5rem;}.\\!w-\\[150px\\]{width:150px !important;}.w-4\\/5{width:80%;}.w-28{width:7rem;}.w-screen{width:100vw;}.max-w-full{max-width:100%;}.-translate-x-full{--tw-translate-x:-100%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.-translate-x-\\[250\\%\\]{--tw-translate-x:-250%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.-rotate-90{--tw-rotate:-90deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.-rotate-180{--tw-rotate:-180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.\\!rotate-0{--tw-rotate:0deg !important;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;}.scale-50{--tw-scale-x:.5;--tw-scale-y:.5;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.\\!scale-100{--tw-scale-x:1 !important;--tw-scale-y:1 !important;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.cursor-pointer{cursor:pointer;}.columns-3{-moz-columns:3;columns:3;}.flex-col{flex-direction:column;}.items-center{align-items:center;}.justify-start{justify-content:flex-start;}.justify-between{justify-content:space-between;}.gap-x-16{-moz-column-gap:4rem;column-gap:4rem;}.overflow-hidden{overflow:hidden;}.rounded{border-radius:0.25rem;}.rounded-full{border-radius:9999px;}.border{border-width:1px;}.border-b{border-bottom-width:1px;}.border-solid{border-style:solid;}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255 / var(--tw-border-opacity));}.border-black{--tw-border-opacity:1;border-color:rgb(0 0 0 / var(--tw-border-opacity));}.border-zinc-600{--tw-border-opacity:1;border-color:rgb(82 82 91 / var(--tw-border-opacity));}.border-zinc-800{--tw-border-opacity:1;border-color:rgb(39 39 42 / var(--tw-border-opacity));}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.bg-zinc-400{--tw-bg-opacity:1;background-color:rgb(161 161 170 / var(--tw-bg-opacity));}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));}.bg-green-100{--tw-bg-opacity:1;background-color:rgb(220 252 231 / var(--tw-bg-opacity));}.bg-blue-100{--tw-bg-opacity:1;background-color:rgb(219 234 254 / var(--tw-bg-opacity));}.bg-red-100{--tw-bg-opacity:1;background-color:rgb(254 226 226 / var(--tw-bg-opacity));}.bg-slate-300{--tw-bg-opacity:1;background-color:rgb(203 213 225 / var(--tw-bg-opacity));}.bg-zinc-800{--tw-bg-opacity:1;background-color:rgb(39 39 42 / var(--tw-bg-opacity));}.bg-zinc-900{--tw-bg-opacity:1;background-color:rgb(24 24 27 / var(--tw-bg-opacity));}.stroke-blue-600{stroke:#2563eb;}.stroke-\\[3px\\]{stroke-width:3px;}.object-cover{-o-object-fit:cover;object-fit:cover;}.object-top{-o-object-position:top;object-position:top;}.p-0{padding:0px;}.py-32{padding-top:8rem;padding-bottom:8rem;}.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}.px-8{padding-left:2rem;padding-right:2rem;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.px-10{padding-left:2.5rem;padding-right:2.5rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.py-5{padding-top:1.25rem;padding-bottom:1.25rem;}.py-14{padding-top:3.5rem;padding-bottom:3.5rem;}.pl-7{padding-left:1.75rem;}.pl-6{padding-left:1.5rem;}.pr-6{padding-right:1.5rem;}.pt-40{padding-top:10rem;}.pb-28{padding-bottom:7rem;}.pt-24{padding-top:6rem;}.pb-32{padding-bottom:8rem;}.pb-\\[90\\%\\]{padding-bottom:90%;}.pt-10{padding-top:2.5rem;}.pt-16{padding-top:4rem;}.pb-12{padding-bottom:3rem;}.text-right{text-align:right;}.align-middle{vertical-align:middle;}.text-4xl{font-size:2.25rem;line-height:2.5rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-\\[12vw\\]{font-size:12vw;}.text-5xl{font-size:3rem;line-height:1;}.text-base{font-size:1rem;line-height:1.5rem;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.font-bold{font-weight:700;}.leading-none{line-height:1;}.\\!leading-normal{line-height:1.5 !important;}.text-black{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));}.text-zinc-400{--tw-text-opacity:1;color:rgb(161 161 170 / var(--tw-text-opacity));}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235 / var(--tw-text-opacity));}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.text-zinc-200{--tw-text-opacity:1;color:rgb(228 228 231 / var(--tw-text-opacity));}.\\!text-transparent{color:transparent !important;}.\\!text-blue-600{--tw-text-opacity:1 !important;color:rgb(37 99 235 / var(--tw-text-opacity)) !important;}.text-zinc-300{--tw-text-opacity:1;color:rgb(212 212 216 / var(--tw-text-opacity));}.text-zinc-600{--tw-text-opacity:1;color:rgb(82 82 91 / var(--tw-text-opacity));}.opacity-0{opacity:0;}.opacity-100{opacity:1;}.mix-blend-difference{mix-blend-mode:difference;}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.transition{transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.transition-colors{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.duration-300{transition-duration:300ms;}.duration-1000{transition-duration:1000ms;}.duration-500{transition-duration:500ms;}.will-change-transform{will-change:transform;}.will-change-\\[opacity\\]{will-change:opacity;}.hvr-bounce-to-right{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-property:color}.hvr-bounce-to-right,.hvr-bounce-to-right:before{transition-duration:.5s}.hvr-bounce-to-right:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#000;transform:scaleX(0);transform-origin:0 50%;transition-property:transform;transition-timing-function:ease-out}.hvr-bounce-to-right:active,.hvr-bounce-to-right:focus,.hvr-bounce-to-right:hover{color:#fff}.hvr-bounce-to-right:active:before,.hvr-bounce-to-right:focus:before,.hvr-bounce-to-right:hover:before{transform:scaleX(1);transition-timing-function:cubic-bezier(.52,1.64,.37,.66)}.hvr-bounce-to-left{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-property:color}.hvr-bounce-to-left,.hvr-bounce-to-left:before{transition-duration:.5s}.hvr-bounce-to-left:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#000;transform:scaleX(0);transform-origin:100% 50%;transition-property:transform;transition-timing-function:ease-out}.hvr-bounce-to-left:active,.hvr-bounce-to-left:focus,.hvr-bounce-to-left:hover{color:#fff}.hvr-bounce-to-left:active:before,.hvr-bounce-to-left:focus:before,.hvr-bounce-to-left:hover:before{transform:scaleX(1);transition-timing-function:cubic-bezier(.52,1.64,.37,.66)}.hvr-bounce-to-bottom{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-property:color}.hvr-bounce-to-bottom,.hvr-bounce-to-bottom:before{transition-duration:.5s}.hvr-bounce-to-bottom:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#000;transform:scaleY(0);transform-origin:50% 0;transition-property:transform;transition-timing-function:ease-out}.hvr-bounce-to-bottom:active,.hvr-bounce-to-bottom:focus,.hvr-bounce-to-bottom:hover{color:#fff}.hvr-bounce-to-bottom:active:before,.hvr-bounce-to-bottom:focus:before,.hvr-bounce-to-bottom:hover:before{transform:scaleY(1);transition-timing-function:cubic-bezier(.52,1.64,.37,.66)}.hvr-bounce-to-top{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;transition-property:color}.hvr-bounce-to-top,.hvr-bounce-to-top:before{transition-duration:.5s}.hvr-bounce-to-top:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;background:#000;transform:scaleY(0);transform-origin:50% 100%;transition-property:transform;transition-timing-function:ease-out}.hvr-bounce-to-top:active,.hvr-bounce-to-top:focus,.hvr-bounce-to-top:hover{color:#fff}.hvr-bounce-to-top:active:before,.hvr-bounce-to-top:focus:before,.hvr-bounce-to-top:hover:before{transform:scaleY(1);transition-timing-function:cubic-bezier(.52,1.64,.37,.66)}.hvr-underline-from-left{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden}.hvr-underline-from-left:before{content:\"\";position:absolute;z-index:-1;left:0;right:100%;bottom:0;background:#000;height:4px;transition-property:right;transition-duration:.3s;transition-timing-function:ease-out}.hvr-underline-from-left:active:before,.hvr-underline-from-left:focus:before,.hvr-underline-from-left:hover:before{right:0}.hvr-underline-from-center{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden}.hvr-underline-from-center:before{content:\"\";position:absolute;z-index:-1;left:50%;right:50%;bottom:0;background:#000;height:4px;transition-property:left,right;transition-duration:.3s;transition-timing-function:ease-out}.hvr-underline-from-center:active:before,.hvr-underline-from-center:focus:before,.hvr-underline-from-center:hover:before{left:0;right:0}.hvr-underline-from-right{display:inline-block;vertical-align:middle;transform:perspective(1px) translateZ(0);box-shadow:0 0 1px transparent;position:relative;overflow:hidden}.hvr-underline-from-right:before{content:\"\";position:absolute;z-index:-1;left:100%;right:0;bottom:0;background:#000;height:4px;transition-property:left;transition-duration:.3s;transition-timing-function:ease-out}.hvr-underline-from-right:active:before,.hvr-underline-from-right:focus:before,.hvr-underline-from-right:hover:before{left:0}html{-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:transparent;scroll-behavior:smooth}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none}a,button,input[type=button],input[type=file],input[type=image],input[type=reset],input[type=submit],label[for]{cursor:pointer}a[href^=tel],button[disabled],input[disabled],select[disabled],textarea[disabled]{cursor:default}a[href^=tel],input[type=color],input[type=date],input[type=datetime-local],input[type=datetime],input[type=email],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}textarea{overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch}@media(prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}@font-face{font-family:\"Plain\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:\"Plain\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");font-weight:900;font-style:normal;font-display:swap}@font-face{font-family:\"Plain\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\");font-weight:700;font-style:normal;font-display:swap}body{background-color:#000;font-family:\"Plain\",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}.animate-fade-in-out-down{-webkit-animation:fade-in-out-down 2s ease-out infinite;animation:fade-in-out-down 2s ease-out infinite}.text-white-shadow{color:transparent;text-shadow:none;-webkit-text-stroke:.8px #fff}.text-black-shadow{color:transparent;text-shadow:none;-webkit-text-stroke:.8px #000}@-webkit-keyframes fade-in-out-down{0%{transform:translateY(-200%);opacity:0}75%{transform:translateY(0);opacity:1}to{transform:translateY(10%);opacity:0}}@keyframes fade-in-out-down{0%{transform:translateY(-200%);opacity:0}75%{transform:translateY(0);opacity:1}to{transform:translateY(10%);opacity:0}}.z-1{z-index:1}.z-2{z-index:2}.z-3{z-index:3}.z-4{z-index:4}.z-5{z-index:5}.z-6{z-index:6}.z-7{z-index:7}.z-8{z-index:8}.z-9{z-index:9}.menu-is-open{overflow:hidden}.menu-is-open .body-wrapper{pointer-events:auto}.menu-is-open .body-wrapper .overlay{opacity:.8}.before\\:absolute::before{content:var(--tw-content);position:absolute;}.before\\:top-0::before{content:var(--tw-content);top:0px;}.before\\:left-0::before{content:var(--tw-content);left:0px;}.before\\:h-full::before{content:var(--tw-content);height:100%;}.before\\:h-\\[2px\\]::before{content:var(--tw-content);height:2px;}.before\\:w-full::before{content:var(--tw-content);width:100%;}.before\\:-translate-x-full::before{content:var(--tw-content);--tw-translate-x:-100%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.before\\:bg-white::before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.before\\:transition-all::before{content:var(--tw-content);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.before\\:delay-100::before{content:var(--tw-content);transition-delay:100ms;}.before\\:delay-200::before{content:var(--tw-content);transition-delay:200ms;}.before\\:duration-300::before{content:var(--tw-content);transition-duration:300ms;}.hover\\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.hover\\:bg-white:hover{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.hover\\:bg-black:hover{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));}.hover\\:text-zinc-400:hover{--tw-text-opacity:1;color:rgb(161 161 170 / var(--tw-text-opacity));}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.hover\\:text-black:hover{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));}.group:hover .group-hover\\:top-0{top:0px;}.group:hover .group-hover\\:-translate-y-16{--tw-translate-y:-4rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.group:hover .group-hover\\:translate-x-\\[250\\%\\]{--tw-translate-x:250%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.group:hover .group-hover\\:-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.group:hover .group-hover\\:translate-x-2{--tw-translate-x:0.5rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.group:hover .group-hover\\:scale-110{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.group:hover .group-hover\\:border-zinc-400{--tw-border-opacity:1;border-color:rgb(161 161 170 / var(--tw-border-opacity));}.group:hover .group-hover\\:opacity-0{opacity:0;}.group:hover .group-hover\\:opacity-100{opacity:1;}.group:hover .group-hover\\:opacity-20{opacity:0.2;}.group:hover .group-hover\\:before\\:translate-x-0::before{content:var(--tw-content);--tw-translate-x:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}@media (min-width: 640px){.sm\\:right-10{right:2.5rem;}.sm\\:bottom-10{bottom:2.5rem;}.sm\\:mb-32{margin-bottom:8rem;}.sm\\:w-1\\/2{width:50%;}.sm\\:py-52{padding-top:13rem;padding-bottom:13rem;}.sm\\:text-7xl{font-size:4.5rem;line-height:1;}.sm\\:text-6xl{font-size:3.75rem;line-height:1;}.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem;}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem;}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem;}.sm\\:text-5xl{font-size:3rem;line-height:1;}}@media (min-width: 768px){.md\\:static{position:static;}.md\\:fixed{position:fixed;}.md\\:relative{position:relative;}.md\\:right-auto{right:auto;}.md\\:right-16{right:4rem;}.md\\:bottom-16{bottom:4rem;}.md\\:float-none{float:none;}.md\\:mx-0{margin-left:0px;margin-right:0px;}.md\\:mx-auto{margin-left:auto;margin-right:auto;}.md\\:mb-10{margin-bottom:2.5rem;}.md\\:mb-6{margin-bottom:1.5rem;}.md\\:mt-0{margin-top:0px;}.md\\:mb-72{margin-bottom:18rem;}.md\\:mb-0{margin-bottom:0px;}.md\\:mt-4{margin-top:1rem;}.md\\:mb-\\[20vh\\]{margin-bottom:20vh;}.md\\:mb-20{margin-bottom:5rem;}.md\\:mt-20{margin-top:5rem;}.md\\:mt-16{margin-top:4rem;}.md\\:mb-12{margin-bottom:3rem;}.md\\:ml-0{margin-left:0px;}.md\\:mr-0{margin-right:0px;}.md\\:block{display:block;}.md\\:inline-block{display:inline-block;}.md\\:flex{display:flex;}.md\\:hidden{display:none;}.md\\:h-screen{height:100vh;}.md\\:w-\\[600px\\]{width:600px;}.md\\:w-auto{width:auto;}.md\\:w-10{width:2.5rem;}.md\\:w-1\\/2{width:50%;}.md\\:w-3\\/4{width:75%;}.md\\:w-2\\/3{width:66.666667%;}.md\\:w-full{width:100%;}.md\\:w-fit{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.md\\:w-\\[50vw\\]{width:50vw;}.md\\:w-\\[250px\\]{width:250px;}.md\\:-translate-y-14{--tw-translate-y:-3.5rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.md\\:columns-2{-moz-columns:2;columns:2;}.md\\:flex-row{flex-direction:row;}.md\\:flex-col{flex-direction:column;}.md\\:items-center{align-items:center;}.md\\:justify-center{justify-content:center;}.md\\:justify-between{justify-content:space-between;}.md\\:gap-4{gap:1rem;}.md\\:border-0{border-width:0px;}.md\\:py-5{padding-top:1.25rem;padding-bottom:1.25rem;}.md\\:py-40{padding-top:10rem;padding-bottom:10rem;}.md\\:py-52{padding-top:13rem;padding-bottom:13rem;}.md\\:pl-5{padding-left:1.25rem;}.md\\:pr-0{padding-right:0px;}.md\\:pl-20{padding-left:5rem;}.md\\:pt-\\[25vh\\]{padding-top:25vh;}.md\\:pt-28{padding-top:7rem;}.md\\:pb-52{padding-bottom:13rem;}.md\\:pt-12{padding-top:3rem;}.md\\:pt-24{padding-top:6rem;}.md\\:text-center{text-align:center;}.md\\:text-right{text-align:right;}.md\\:text-5xl{font-size:3rem;line-height:1;}.md\\:text-2xl{font-size:1.5rem;line-height:2rem;}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}.md\\:text-base{font-size:1rem;line-height:1.5rem;}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem;}}@media (min-width: 1024px){.lg\\:right-24{right:6rem;}.lg\\:bottom-24{bottom:6rem;}.lg\\:w-4\\/12{width:33.333333%;}.lg\\:gap-x-28{-moz-column-gap:7rem;column-gap:7rem;}.lg\\:text-8xl{font-size:6rem;line-height:1;}.lg\\:text-7xl{font-size:4.5rem;line-height:1;}.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}.lg\\:text-6xl{font-size:3.75rem;line-height:1;}}@media (min-width: 1280px){.xl\\:w-2\\/3{width:66.666667%;}.xl\\:w-5\\/12{width:41.666667%;}.xl\\:text-9xl{font-size:8rem;line-height:1;}}@media (max-height: 500px){.small\\:hidden{display:none;}.small\\:translate-y-0{--tw-translate-y:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Plain-Regular.44e1802.woff2";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Plain-Regular.d52adf8.woff";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Plain-Black.c23823d.woff2";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Plain-Black.7192afc.woff";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Plain-Bold.9a5c23d.woff2";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Plain-Bold.87bfd11.woff";

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FsMenu_vue_vue_type_style_index_0_id_a551bdec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FsMenu_vue_vue_type_style_index_0_id_a551bdec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FsMenu_vue_vue_type_style_index_0_id_a551bdec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FsMenu_vue_vue_type_style_index_0_id_a551bdec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FsMenu_vue_vue_type_style_index_0_id_a551bdec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fs-menu.active[data-v-a551bdec]{pointer-events:auto}.fs-menu .nuxt-link-exact-active[data-v-a551bdec]{pointer-events:none}.fs-menu .nuxt-link-exact-active .span-1[data-v-a551bdec]{opacity:0;transform:translateY(-4rem)}.fs-menu .nuxt-link-exact-active .span-2[data-v-a551bdec]{opacity:1;transform:translateY(-4rem)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMenu_vue_vue_type_style_index_0_id_c67f595e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMenu_vue_vue_type_style_index_0_id_c67f595e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMenu_vue_vue_type_style_index_0_id_c67f595e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMenu_vue_vue_type_style_index_0_id_c67f595e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMenu_vue_vue_type_style_index_0_id_c67f595e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".button-side-menu.active span[data-v-c67f595e]:first-child{transform:translateY(8px) rotate(45deg)}.button-side-menu.active span[data-v-c67f595e]:first-child:before{transform:none}.button-side-menu.active span[data-v-c67f595e]:nth-child(2){transform:translateX(-100%);opacity:0}.button-side-menu.active span[data-v-c67f595e]:nth-child(3){transform:translateY(-8px) rotate(-45deg)}.button-side-menu.active span[data-v-c67f595e]:nth-child(3):before{transform:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "FsMenu", function() { return FsMenu; });
__webpack_require__.d(components_namespaceObject, "SideMenu", function() { return SideMenu; });
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer; });
__webpack_require__.d(components_namespaceObject, "FooterTwoBlocks", function() { return FooterTwoBlocks; });
__webpack_require__.d(components_namespaceObject, "ButtonsArrowDown", function() { return ButtonsArrowDown; });
__webpack_require__.d(components_namespaceObject, "ButtonsCircleArrowRight", function() { return ButtonsCircleArrowRight; });
__webpack_require__.d(components_namespaceObject, "ButtonsFollowMouse", function() { return ButtonsFollowMouse; });
__webpack_require__.d(components_namespaceObject, "LogosSenzHorizontal", function() { return LogosSenzHorizontal; });
__webpack_require__.d(components_namespaceObject, "LogosSenzVertical", function() { return LogosSenzVertical; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(13);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', utils_flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function utils_flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(14);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(7);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(6);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _0bea9cba = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 2).then(__webpack_require__.bind(null, 65)));

const _8399aae6 = () => interopDefault(__webpack_require__.e(/* import() | pages/contact */ 3).then(__webpack_require__.bind(null, 66)));

const _1099d646 = () => interopDefault(__webpack_require__.e(/* import() | pages/projects */ 5).then(__webpack_require__.bind(null, 67)));

const _000adf7e = () => interopDefault(__webpack_require__.e(/* import() | pages/projects/lp-fitness */ 6).then(__webpack_require__.bind(null, 68)));

const _12e31095 = () => interopDefault(__webpack_require__.e(/* import() | pages/projects/ultra-capital */ 7).then(__webpack_require__.bind(null, 69)));

const _55af0a7e = () => interopDefault(__webpack_require__.e(/* import() | pages/services */ 8).then(__webpack_require__.bind(null, 70)));

const _2ba2777f = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 4).then(__webpack_require__.bind(null, 71)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about",
    component: _0bea9cba,
    name: "About"
  }, {
    path: "/contact",
    component: _8399aae6,
    name: "Contact"
  }, {
    path: "/projects",
    component: _1099d646,
    name: "Projects",
    children: [{
      path: "lp-fitness",
      component: _000adf7e,
      name: "LP Fitness"
    }, {
      path: "ultra-capital",
      component: _12e31095,
      name: "Ultra Capital"
    }]
  }, {
    path: "/services",
    component: _55af0a7e,
    name: "Services"
  }, {
    path: "/",
    component: _2ba2777f,
    name: "Home"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(19)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2a7d5f1a"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(21)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "120e0464"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/scss/main.scss
var main = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=8e212f92&
var defaultvue_type_template_id_8e212f92_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('FsMenu',{ref:"fsMenuGlobal"}),_vm._ssrNode(" "),_c('SideMenu',{ref:"sideMenuGlobal"}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"body-wrapper\">","</div>",[_vm._ssrNode("<div class=\"fixed top-0 left-0 z-20 block w-full h-full transition-all duration-300 bg-black pointer-events-none overlay opacity-0 will-change-[opacity]\"></div> "),_c('Nuxt',{staticClass:"relative main-container"}),_vm._ssrNode(" "),_c('Footer')],2),_vm._ssrNode(" "),(_vm.$device.isDesktop)?_c('ButtonsFollowMouse'):_vm._e()],2)}
var defaultvue_type_template_id_8e212f92_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=8e212f92&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  
}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_8e212f92_render,
  defaultvue_type_template_id_8e212f92_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "1f5c3c5c"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {FsMenu: __webpack_require__(38).default,SideMenu: __webpack_require__(39).default,Footer: __webpack_require__(40).default,ButtonsFollowMouse: __webpack_require__(42).default})

// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return Object(external_ufo_["withoutTrailingSlash"])(this.$router.options.base);
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(external_ufo_["withoutTrailingSlash"])(Object(external_ufo_["withoutBase"])(Object(external_ufo_["parsePath"])(route).pathname, base));
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(external_ufo_["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },

    async fetchPayload(route, prefetch) {
      const path = Object(external_ufo_["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();

      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw new Error(`Route ${path} is not pre-rendered`);
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(external_ufo_["normalizeURL"])(src));

        if (!prefetch) {
          this.setPagePayload(payload);
        }

        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const FsMenu = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 38)).then(c => wrapFunctional(c.default || c));
const SideMenu = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 39)).then(c => wrapFunctional(c.default || c));
const Footer = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 40)).then(c => wrapFunctional(c.default || c));
const FooterTwoBlocks = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 41)).then(c => wrapFunctional(c.default || c));
const ButtonsArrowDown = () => __webpack_require__.e(/* import() | components/buttons-arrow-down */ 1).then(__webpack_require__.bind(null, 55)).then(c => wrapFunctional(c.default || c));
const ButtonsCircleArrowRight = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 45)).then(c => wrapFunctional(c.default || c));
const ButtonsFollowMouse = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 42)).then(c => wrapFunctional(c.default || c));
const LogosSenzHorizontal = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 44)).then(c => wrapFunctional(c.default || c));
const LogosSenzVertical = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 43)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(36);

// CONCATENATED MODULE: ./.nuxt/device.plugin.js
 // eslint-disable-next-line

const REGEX_MOBILE1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i; // eslint-disable-next-line

const REGEX_MOBILE2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

function isMobile(a) {
  return REGEX_MOBILE1.test(a) || REGEX_MOBILE2.test(a.substr(0, 4));
} // eslint-disable-next-line


const REGEX_MOBILE_OR_TABLET1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i; // eslint-disable-next-line

const REGEX_MOBILE_OR_TABLET2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i; // eslint-disable-next-line

const REGEX_CRAWLER = /Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|seznambot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest.com.bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|pingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb.iss.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot.AraTurka.com|bot-pge.chlooe.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|Seekport Crawler|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider.com|GroupHigh\/|theoldreader.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|Curebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge/;

function isMobileOrTablet(a) {
  return REGEX_MOBILE_OR_TABLET1.test(a) || REGEX_MOBILE_OR_TABLET2.test(a.substr(0, 4));
}

function isIos(a) {
  return /iPad|iPhone|iPod/.test(a);
}

function isAndroid(a) {
  return /android/i.test(a);
}

function isWindows(a) {
  return /Windows/.test(a);
}

function isMacOS(a) {
  return /Mac OS X/.test(a);
} // Following regular expressions are originated from bowser(https://github.com/lancedikson/bowser).
// Copyright 2015, Dustin Diaz (the "Original Author")
// https://github.com/lancedikson/bowser/blob/master/LICENSE


const browsers = [{
  name: 'Samsung',
  test: /SamsungBrowser/i
}, {
  name: 'Edge',
  test: /edg([ea]|ios|)\//i
}, {
  name: 'Firefox',
  test: /firefox|iceweasel|fxios/i
}, {
  name: 'Chrome',
  test: /chrome|crios|crmo/i
}, {
  name: 'Safari',
  test: /safari|applewebkit/i
}];

function getBrowserName(a) {
  for (let b of browsers) {
    if (b.test.test(a)) {
      return b.name;
    }
  }

  return null;
}

const DEFAULT_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
const REFRESH_ON_RESIZE = false;

function extractDevices(ctx, userAgent = DEFAULT_USER_AGENT) {
  let mobile = null;
  let mobileOrTablet = null;
  let ios = null;
  let android = null;

  if (userAgent === 'Amazon CloudFront') {
    if (ctx.req.headers['cloudfront-is-mobile-viewer'] === 'true') {
      mobile = true;
      mobileOrTablet = true;
    }

    if (ctx.req.headers['cloudfront-is-tablet-viewer'] === 'true') {
      mobile = false;
      mobileOrTablet = true;
    }
  } else if (ctx.req && ctx.req.headers['cf-device-type']) {
    // Cloudflare
    switch (ctx.req.headers['cf-device-type']) {
      case 'mobile':
        mobile = true;
        mobileOrTablet = true;
        break;

      case 'tablet':
        mobile = false;
        mobileOrTablet = true;
        break;

      case 'desktop':
        mobile = false;
        mobileOrTablet = false;
        break;
    }
  } else {
    mobile = isMobile(userAgent);
    mobileOrTablet = isMobileOrTablet(userAgent);
    ios = isIos(userAgent);
    android = isAndroid(userAgent);
  }

  const windows = isWindows(userAgent);
  const macOS = isMacOS(userAgent);
  const browserName = getBrowserName(userAgent);
  const isSafari = browserName === 'Safari';
  const isFirefox = browserName === 'Firefox';
  const isEdge = browserName === 'Edge';
  const isChrome = browserName === 'Chrome';
  const isSamsung = browserName === 'Samsung';
  const isCrawler = REGEX_CRAWLER.test(userAgent);
  return {
    mobile,
    mobileOrTablet,
    ios,
    android,
    windows,
    macOS,
    isSafari,
    isFirefox,
    isEdge,
    isChrome,
    isSamsung,
    isCrawler
  };
}

/* harmony default export */ var device_plugin = (async function (ctx, inject) {
  const makeFlags = () => {
    let userAgent = '';

    if (typeof ctx.req !== 'undefined') {
      userAgent = ctx.req.headers['user-agent'];
    } else if (typeof navigator !== 'undefined') {
      userAgent = navigator.userAgent;
    }

    const {
      mobile,
      mobileOrTablet,
      ios,
      android,
      windows,
      macOS,
      isSafari,
      isFirefox,
      isEdge,
      isChrome,
      isSamsung,
      isCrawler
    } = extractDevices(ctx, userAgent);
    return {
      userAgent,
      isMobile: mobile,
      isMobileOrTablet: mobileOrTablet,
      isTablet: !mobile && mobileOrTablet,
      isDesktop: !mobileOrTablet,
      isIos: ios,
      isAndroid: android,
      isWindows: windows,
      isMacOS: macOS,
      isDesktopOrTablet: !mobile,
      isSafari,
      isFirefox,
      isEdge,
      isChrome,
      isSamsung,
      isCrawler
    };
  };

  const flags = makeFlags(ctx);

  if (REFRESH_ON_RESIZE && typeof window !== 'undefined') {
    inject('device', external_vue_default.a.observable(flags));
    window.addEventListener('resize', () => {
      setTimeout(() => {
        const newFlags = makeFlags(ctx);

        for (let key in newFlags) {
          ctx.$device[key] = newFlags[key];
        }
      }, 50);
    });
  } else {
    inject('device', flags);
  }
});
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(3);

// CONCATENATED MODULE: ./.nuxt/gsapModule.js


external_vue_default.a.directive('gsap', (el, binding) => {
  const options = { ...binding.value
  };
  const modifiers = binding.modifiers;

  if (modifiers.set) {
    external_gsap_["gsap"].set(el, options);
  }

  if (modifiers.to) {
    external_gsap_["gsap"].to(el, options);
  }

  if (modifiers.from) {
    external_gsap_["gsap"].from(el, options);
  }

  if (modifiers.fromTo) {
    external_gsap_["gsap"].fromTo(el, { ...binding.value[0]
    }, { ...binding.value[1]
    });
  }
});
/* harmony default export */ var gsapModule = (({
  app
}, inject) => {
  inject('gsap', external_gsap_["gsap"]);

  if (false) {}
});
// CONCATENATED MODULE: ./plugins/global.js

const mixin = {
  methods: {
    setBodyClass() {
      let body = document.body;
      body.classList.toggle('menu-is-open');
    }

  }
};
external_vue_default.a.mixin(mixin);
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./vue-scrollto.js (mode: 'client')

 // Source: ./device.plugin.js (mode: 'all')

 // Source: ./gsapModule.js (mode: 'all')

 // Source: ../plugins/global.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Senz®",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1, shrink-to-fit=no"
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }, {
        "name": "author",
        "content": "Senz Design"
      }, {
        "property": "og:locale",
        "content": "en-US"
      }, {
        "property": "og:type",
        "content": "website"
      }, {
        "property": "og:title",
        "content": "Senz®"
      }, {
        "property": "og:description",
        "content": "Whether you're a startup or a growing company, we provide everything you need to reach your clients."
      }, {
        "property": "og:url",
        "content": "https:\u002F\u002Fsenzdsn.com\u002F"
      }, {
        "property": "og:site_name",
        "content": "Senz®"
      }, {
        "property": "og:image",
        "content": "https:\u002F\u002Fsenzdsn.com\u002Fog-image.jpg"
      }, {
        "property": "og:image:secure_url",
        "content": "https:\u002F\u002Fsenzdsn.com\u002Fog-image.jpg"
      }, {
        "property": "og:image:width",
        "content": "1200"
      }, {
        "property": "og:image:height",
        "content": "630"
      }],
      "link": [{
        "rel": "shortcut icon",
        "type": "image\u002Fpng",
        "href": "favicon.png"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto&display=swap"
      }],
      "script": [],
      "style": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (typeof device_plugin === 'function') {
    await device_plugin(app.context, inject);
  }

  if (typeof gsapModule === 'function') {
    await gsapModule(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/global.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/global.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FsMenu.vue?vue&type=template&id=a551bdec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section"+(_vm._ssrClass("fs-menu fixed left-0 z-40 block w-[calc(100vw-80px)] md:w-[600px] h-screen py-32 pl-7 md:pl-5 text-black bg-white top-o will-change-transform -translate-x-full pointer-events-none",{ active: _vm.isFs }))+" data-v-a551bdec>","</section>",[_vm._ssrNode("<div class=\"flex items-center w-full h-full md:justify-center\" data-v-a551bdec>","</div>",[_vm._ssrNode("<div class=\"flex\" data-v-a551bdec>","</div>",[_vm._ssrNode("<div class=\"block\" data-v-a551bdec>","</div>",[_vm._ssrNode("<p class=\"block mb-6 md:mb-10 text-zinc-400\" data-v-a551bdec>\n\t\t\t\t\t\tMenu\n\t\t\t\t\t</p> "),_vm._ssrNode("<nav data-v-a551bdec>","</nav>",[_vm._ssrNode("<ul data-v-a551bdec>","</ul>",_vm._l((_vm.menu),function(item,i){return _vm._ssrNode("<li class=\"mb-4 text-4xl font-bold text-black menu-link md:mb-6 md:text-5xl\" data-v-a551bdec>","</li>",[_c('NuxtLink',{staticClass:"relative inline-block py-1 overflow-hidden group",attrs:{"to":{name:item.link}}},[_c('span',{ref:"menuText",refInFor:true,staticClass:"relative block transition-all duration-300 span-1 group-hover:-translate-y-16 group-hover:opacity-0"},[_vm._v(_vm._s(item.name))]),_c('span',{staticClass:"absolute left-0 text-blue-600 transition-all duration-300 opacity-0 span-2 top-16 group-hover:top-0 group-hover:opacity-100"},[_vm._v(_vm._s(item.name))])])],1)}),0)])],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FsMenu.vue?vue&type=template&id=a551bdec&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FsMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FsMenuvue_type_script_lang_js_ = ({
  data() {
    return {
      isFs: false,
      menu: [{
        name: 'Home',
        link: 'Home'
      }, {
        name: 'About',
        link: 'About'
      }, {
        name: 'Services',
        link: 'Services'
      }, {
        name: 'Projects',
        link: 'Projects'
      }, {
        name: 'Contact',
        link: 'Contact'
      }]
    };
  },

  methods: {
    toggle() {
      this.isFs = !this.isFs;
      this.$parent.$emit('isOpen');
      this.setBodyClass();
      this.tl.reversed(!this.tl.reversed());
    }

  },

  mounted() {
    let fsmenu = this.$refs.fsMenu;
    let fsmenuTitle = this.$refs.menuTitle;
    let fsmenuLink = this.$refs.menuLink;
    this.tl = this.$gsap.timeline({
      paused: true
    }).to(fsmenu, {
      x: 0
    }).fromTo(fsmenuTitle, {
      autoAlpha: 0,
      y: 10
    }, {
      autoAlpha: 1,
      y: 0
    }, .1).fromTo(fsmenuLink, {
      autoAlpha: 0,
      y: 30
    }, {
      autoAlpha: 1,
      y: 0,
      stagger: .1
    }, .2).reverse();
    let that = this;
    this.$parent.$on('isFs', function () {
      this.$refs.fsMenuGlobal.isFs = !this.$refs.fsMenuGlobal.isFs;
      this.setBodyClass();
      this.$refs.fsMenuGlobal.tl.reversed(!this.$refs.fsMenuGlobal.tl.reversed());
    });
  }

});
// CONCATENATED MODULE: ./components/FsMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FsMenuvue_type_script_lang_js_ = (FsMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FsMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FsMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a551bdec",
  "89825d34"
  
)

/* harmony default export */ var FsMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideMenu.vue?vue&type=template&id=c67f595e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"absolute z-50 w-full pl-6 pr-6 mx-auto mt-5 md:py-5 md:fixed md:items-center md:justify-between md:flex md:pr-0 md:w-auto md:flex-col md:h-screen mix-blend-difference md:mx-0 md:mt-0\" data-v-c67f595e>","</section>",[_c('NuxtLink',{staticClass:"inline-block float-left w-24 h-auto md:w-10 md:float-none md:block",attrs:{"to":{ name: 'Home' }}},[_c('LogosSenzVertical',{staticClass:"hidden text-white transition-all duration-300 md:block hover:text-zinc-400"}),_vm._v(" "),_c('LogosSenzHorizontal',{staticClass:"block text-white transition-all duration-300 md:hidden hover:text-zinc-400"})],1),_vm._ssrNode(" <button"+(_vm._ssrClass("fixed inline-block w-8 p-0 cursor-pointer md:-translate-y-14 small:translate-y-0 right-6 md:right-auto md:relative md:mx-auto open-fs-menu group button-side-menu",{ active: _vm.isOpen }))+" data-v-c67f595e><span class=\"relative overflow-hidden block w-full h-[2px] bg-zinc-400 my-1.5 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-translate-x-full before:transition-all before:duration-300 group-hover:before:translate-x-0 rounded will-change-transform transition-all duration-300\" data-v-c67f595e></span> <span class=\"relative overflow-hidden block w-full h-[2px] bg-zinc-400 my-1.5 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-translate-x-full before:transition-all before:duration-300 group-hover:before:translate-x-0 before:delay-100 rounded will-change-transform transition-all duration-300\" data-v-c67f595e></span> <span class=\"relative overflow-hidden block w-full h-[2px] bg-zinc-400 my-1.5 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-translate-x-full before:transition-all before:duration-300 group-hover:before:translate-x-0 before:delay-200 rounded will-change-transform transition-all duration-300\" data-v-c67f595e></span></button> <a href=\"mailto:hello@senzdsn.com\" class=\"hidden w-0 transition-all duration-300 -rotate-90 small:hidden text-zinc-400 md:inline-block hover:text-white\" data-v-c67f595e>hello@senzdsn.com</a>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SideMenu.vue?vue&type=template&id=c67f595e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SideMenuvue_type_script_lang_js_ = ({
  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      this.$parent.$emit('isFs');
    }

  },

  mounted() {
    let that = this;
    this.$parent.$on('isOpen', function () {
      this.$refs.sideMenuGlobal.isOpen = !this.$refs.sideMenuGlobal.isOpen;
    });
  }

});
// CONCATENATED MODULE: ./components/SideMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SideMenuvue_type_script_lang_js_ = (SideMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SideMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SideMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c67f595e",
  "271d3f70"
  
)

/* harmony default export */ var SideMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LogosSenzVertical: __webpack_require__(43).default,LogosSenzHorizontal: __webpack_require__(44).default})


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/Footer.vue?vue&type=template&id=6288cc1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('FooterTwoBlocks'),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-black md:pl-20\">","</section>",[_vm._ssrNode("<div class=\"container-wrapper\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between pt-16 md:pt-24\">","</div>",[_vm._ssrNode("<h2 class=\"w-4/5 mr-10 text-3xl text-white xs:text-4xl sm:text-5xl lg:text-6xl md:w-full\"><b>Have an idea?</b> <br>\n\t\t\t\t\tLet's talk about it!\n\t\t\t\t</h2> "),_c('NuxtLink',{staticClass:"flex items-center group",attrs:{"to":{name: 'Contact'}}},[_c('span',{staticClass:"hidden mr-6 font-bold text-right text-white align-middle transition-all duration-300 w-28 group-hover:translate-x-2 md:inline-block"},[_vm._v("\n\t\t\t\t\t\tGet in touch\n\t\t\t\t\t")]),_vm._v(" "),_c('ButtonsCircleArrowRight')],1)],2),_vm._ssrNode(" <div class=\"block w-full h-[1px] mb-10 md:mb-20 mt-14 md:mt-20 bg-zinc-800\"></div> "),_vm._ssrNode("<div class=\"justify-between block md:flex\">","</div>",[_vm._ssrNode("<div class=\"w-full md:w-1/2\">","</div>",[_vm._ssrNode("<nav class=\"w-full md:w-fit text-zinc-300\">","</nav>",[_vm._ssrNode("<ul class=\"gap-x-16 lg:gap-x-28 columns-3 md:columns-2\">","</ul>",_vm._l((_vm.menu),function(item,i){return _vm._ssrNode("<li class=\"mb-4\">","</li>",[_c('NuxtLink',{staticClass:"transition-all duration-300 hover:text-white",attrs:{"to":{name:item.link}}},[_vm._v(_vm._s(item.name))])],1)}),0)])]),_vm._ssrNode(" <div class=\"w-full mt-8 md:w-1/2 text-zinc-300 md:mt-0\"><p class=\"mb-2 text-xl font-bold\">\n\t\t\t\t\t\tContact us:\n\t\t\t\t\t</p> <a href=\"mailto:hello@senzdsn.com\" class=\"transition-all duration-300 hover:text-white hvr-underline-from-left before:h-[2px] before:bg-white\">\n\t\t\t\t\t\thello@senzdsn.com\n\t\t\t\t\t</a></div>")],2),_vm._ssrNode(" <div class=\"block w-full h-[1px] mb-6 mt-10 md:mt-16 md:mb-12 bg-zinc-800\"></div> <div class=\"block pb-12 md:text-right\"><p class=\"text-zinc-600\">\n\t\t\t\t\tCopyright@2022 - Senz®\n\t\t\t\t</p></div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/footer/Footer.vue?vue&type=template&id=6288cc1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  data() {
    return {
      menu: [{
        name: 'Home',
        link: 'Home'
      }, {
        name: 'About',
        link: 'About'
      }, {
        name: 'Services',
        link: 'Services'
      }, {
        name: 'Projects',
        link: 'Projects'
      }, {
        name: 'Contact',
        link: 'Contact'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/footer/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footer/Footer.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "441d18a5"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FooterTwoBlocks: __webpack_require__(41).default,ButtonsCircleArrowRight: __webpack_require__(45).default})


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/TwoBlocks.vue?vue&type=template&id=33ac888e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"relative md:pl-20 bg-zinc-900"},[_vm._ssrNode("<div class=\"flex flex-col container-wrapper md:gap-4 two-blocks md:columns-2 md:flex-row\">","</div>",[_vm._ssrNode("<div class=\"relative w-full border-b border-solid border-zinc-800 py-14 md:py-40 md:w-1/2 md:static md:border-0\">","</div>",[_c('NuxtLink',{staticClass:"absolute overflow-hidden top-0 left-0 w-screen md:w-[50vw] h-full z-0 hover:bg-black transition-all duration-300 -ml-6 md:ml-0 group",attrs:{"to":{ name: 'Projects'}}},[_c('span',{staticClass:"absolute top-0 left-0 block w-full h-full transition-all duration-1000 opacity-0 group-hover:opacity-20 group-hover:scale-110 will-change-transform",style:({ backgroundImage: ("url(" + _vm.projectsBg + ")") })})]),_vm._ssrNode(" <h3 class=\"relative text-2xl font-bold text-white pointer-events-none z-2\">\n\t\t\t\tProjects\n\t\t\t</h3> <p class=\"relative block mt-5 mb-10 text-white pointer-events-none z-2 md:w-[250px] max-w-full\">\n\t\t\t\tTake a look at what we've created and get inspired\n\t\t\t</p> <p class=\"relative text-white pointer-events-none z-2\">\n\t\t\t\tView our Projects\n\t\t\t</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"relative w-full py-14 md:py-40 md:w-1/2 md:static\">","</div>",[_c('NuxtLink',{staticClass:"absolute overflow-hidden top-0 right-0 w-screen md:w-[50vw] h-full z-0 hover:bg-black transition-all duration-1000 -mr-6 md:mr-0 group",attrs:{"to":{ name: 'Services' }}},[_c('span',{staticClass:"absolute top-0 left-0 block w-full h-full transition-all duration-1000 opacity-0 group-hover:opacity-20 group-hover:scale-110 will-change-transform",style:({ backgroundImage: ("url(" + _vm.servicesBg + ")") })})]),_vm._ssrNode(" <h3 class=\"relative text-2xl font-bold text-white pointer-events-none z-2\">\n\t\t\t\tServices\n\t\t\t</h3> <p class=\"relative block mt-5 mb-10 text-white pointer-events-none z-2 md:w-[250px] max-w-full\">\n\t\t\t\tSee what we can do and learn more about working together\n\t\t\t</p> <p class=\"relative text-white pointer-events-none z-2\">\n\t\t\t\tView our Services\n\t\t\t</p>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/footer/TwoBlocks.vue?vue&type=template&id=33ac888e&

// EXTERNAL MODULE: ./assets/img/services-bg.jpg
var services_bg = __webpack_require__(15);
var services_bg_default = /*#__PURE__*/__webpack_require__.n(services_bg);

// EXTERNAL MODULE: ./assets/img/projects-bg.jpg
var projects_bg = __webpack_require__(16);
var projects_bg_default = /*#__PURE__*/__webpack_require__.n(projects_bg);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/TwoBlocks.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var TwoBlocksvue_type_script_lang_js_ = ({
  data() {
    return {
      servicesBg: services_bg_default.a,
      projectsBg: projects_bg_default.a
    };
  }

});
// CONCATENATED MODULE: ./components/footer/TwoBlocks.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_TwoBlocksvue_type_script_lang_js_ = (TwoBlocksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/footer/TwoBlocks.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_TwoBlocksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "81792d50"
  
)

/* harmony default export */ var TwoBlocks = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/buttons/FollowMouse.vue?vue&type=template&id=234c4990&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform\"><div class=\"w-5 h-5 transition-all duration-500\"><svg viewbox=\"-100 -100 200 200\" preserveAspectRatio=\"xMidYMid\" class=\"w-full h-full text-blue-600 stroke-blue-600 stroke-[3px] transition-transform duration-500\"><path fill=\"currentColor\" class=\"transition-colors transition-transform duration-500\"><animate attributeName=\"d\" dur=\"7s\" repeatCount=\"indefinite\" values=\"\n\t\t\t\t\t\t\tM46.4,-16.7C52.3,2.8,43.6,25.4,23.9,41.9C4.2,58.3,-26.6,68.6,-46.7,55.9C-66.9,43.2,-76.5,7.6,-67,-17C-57.4,-41.6,-28.7,-55.3,-4.2,-53.9C20.3,-52.6,40.6,-36.2,46.4,-16.7Z;\n\n\t\t\t\t\t\t\tM54.8,-18.7C63.8,9.9,58.9,42.2,38.7,57.9C18.6,73.7,-16.9,72.9,-40.3,55.9C-63.7,38.8,-74.9,5.4,-66.1,-22.8C-57.4,-51,-28.7,-74.1,-2.9,-73.2C22.9,-72.2,45.8,-47.3,54.8,-18.7Z;\n\n\t\t\t\t\t\t\tM65,-25.9C69.9,-5.8,49.9,17.6,25.4,35.5C1,53.4,-27.9,65.7,-43.7,55.3C-59.6,44.9,-62.5,11.8,-53.1,-14.4C-43.6,-40.6,-21.8,-59.9,4.1,-61.3C30,-62.6,60,-45.9,65,-25.9Z;\n\n\t\t\t\t\t\t\tM49.4,-11.1C58.5,12.2,56.8,44,38.7,58.3C20.6,72.7,-13.9,69.6,-34.3,53.3C-54.7,37,-61.1,7.5,-53.1,-14.2C-45,-36,-22.5,-50,-1.2,-49.6C20.1,-49.2,40.2,-34.4,49.4,-11.1Z;\n\n\t\t\t\t\t\t\tM65,-25.9C69.9,-5.8,49.9,17.6,25.4,35.5C1,53.4,-27.9,65.7,-43.7,55.3C-59.6,44.9,-62.5,11.8,-53.1,-14.4C-43.6,-40.6,-21.8,-59.9,4.1,-61.3C30,-62.6,60,-45.9,65,-25.9Z;\n\n\t\t\t\t\t\t\tM54.8,-18.7C63.8,9.9,58.9,42.2,38.7,57.9C18.6,73.7,-16.9,72.9,-40.3,55.9C-63.7,38.8,-74.9,5.4,-66.1,-22.8C-57.4,-51,-28.7,-74.1,-2.9,-73.2C22.9,-72.2,45.8,-47.3,54.8,-18.7Z;\n\n\t\t\t\t\t\t\tM46.4,-16.7C52.3,2.8,43.6,25.4,23.9,41.9C4.2,58.3,-26.6,68.6,-46.7,55.9C-66.9,43.2,-76.5,7.6,-67,-17C-57.4,-41.6,-28.7,-55.3,-4.2,-53.9C20.3,-52.6,40.6,-36.2,46.4,-16.7Z;\n\t\t\t\t\t\t\"></animate></path></svg></div> <span class=\"absolute text-white transition-all duration-500 scale-50 -rotate-180 -translate-x-1/2 -translate-y-1/2 opacity-0 top-1/2 left-1/2 z-2\">\n\t\t\t\tView\n\t\t\t</span></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/buttons/FollowMouse.vue?vue&type=template&id=234c4990&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/buttons/FollowMouse.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FollowMousevue_type_script_lang_js_ = ({
  methods: {
    followMouse() {
      const gsap = this.$gsap;
      const circle = this.$refs.circle;
      const circleSpan = this.$refs.inner;
      const circleSpanSvg = this.$refs.svg;
      const circleSpanText = this.$refs.span;
      let links = this.$root.$el.querySelectorAll('a, button');
      let projectLink = this.$root.$el.querySelectorAll('.project-link');

      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', function () {
          circleSpan.classList.add('!w-[150px]', '!h-[150px]');
          circleSpanSvg.classList.add('!text-transparent');
        });
      }

      ;

      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseleave', function () {
          circleSpan.classList.remove('!w-[150px]', '!h-[150px]');
          circleSpanSvg.classList.remove('!text-transparent');
        });
      }

      ;

      for (let i = 0; i < projectLink.length; i++) {
        projectLink[i].addEventListener('mouseover', function () {
          circleSpan.classList.add('!w-[150px]', '!h-[150px]');
          circleSpanSvg.classList.add('!text-blue-600');
          circleSpanText.classList.add('opacity-100', '!rotate-0', '!scale-100');
        });
      }

      ;

      for (let i = 0; i < projectLink.length; i++) {
        projectLink[i].addEventListener('mouseleave', function () {
          circleSpan.classList.remove('!w-[150px]', '!h-[150px]');
          circleSpanSvg.classList.remove('!text-blue-600');
          circleSpanText.classList.remove('opacity-100', '!rotate-0', '!scale-100');
        });
      }

      ;

      for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
          setTimeout(function () {
            circleSpan.classList.remove('!w-[150px]', '!h-[150px]');
            circleSpanText.classList.remove('opacity-100', '!rotate-0', '!scale-100');
            circleSpanSvg.classList.remove('!text-transparent', '!text-blue-600');
          }, 200);
        });
      }

      ;
      window.addEventListener("mousemove", moveCircle);

      function moveCircle(e) {
        gsap.to(circle, 0.3, {
          x: e.clientX,
          y: e.clientY
        });
      }
    }

  },

  mounted() {
    this.followMouse();
  },

  watch: {
    "$route.path": function () {
      setTimeout(() => {
        this.followMouse();
      }, 600);
    }
  }
});
// CONCATENATED MODULE: ./components/buttons/FollowMouse.vue?vue&type=script&lang=js&
 /* harmony default export */ var buttons_FollowMousevue_type_script_lang_js_ = (FollowMousevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/buttons/FollowMouse.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  buttons_FollowMousevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "36f8ffbc"
  
)

/* harmony default export */ var FollowMouse = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/logos/SenzVertical.vue?vue&type=template&id=6a200d9a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60.84 194.73\" fill=\"currentColor\"><path d=\"M41.79,181c5.31-.82,8-4.25,8-10.3,0-5.48-2.62-9-6.79-9-4,0-5.07,3-6.79,9.32l-1.14,4c-3.68,12.84-8.42,18.07-17.58,18.07C7.11,193.09,0,184.34,0,171c0-12.83,6.21-21.18,17.58-21.83v13.41c-4.5.9-6.95,3.6-6.95,8.91,0,4.91,2.37,7.61,5.89,7.61,3.92-.08,5.15-2.7,6.46-7.28l1.31-4.5C28,154.09,32,147.87,42.36,147.87c11.2,0,18.23,9.32,18.23,23.39s-7,22.9-18.8,23.47Z\"></path><path d=\"M46.77,102.52c8.43,2.62,14.07,10.06,14.07,21.59,0,13.66-8.83,22.41-22.9,22.41-13.41,0-22.81-9.24-22.81-22.65,0-14.31,9.73-22,23.79-22,.41,0,1,.08,1.39.08h.74v31.89c6.46-.57,10.22-4.49,10.22-10.14,0-3.92-1.47-6.62-4.5-8.17ZM33.12,114.71c-5.64.65-8.92,3.92-8.92,9.24s3.28,8.83,8.92,9.57Z\"></path><path d=\"M59.53,98.51H23.14c-2.21,0-4.33,0-6.54.08V86.41h5.89c-3.6-1.8-6.95-6.13-6.95-13.25,0-5.88,2.53-10.3,6.87-12.83,3.76-2.21,7.76-2.46,15.12-2.46h22V70.63H38.76c-8.59,0-13.25,1.47-13.25,7s4.17,8.1,12,8.1h22Z\"></path><path d=\"M50.21,55C41.05,46.86,28.87,36.23,26,33.61l-.08.08c.25,3.52.16,6.22.16,10.06V54.22H16.6V18.57h9.32C42.11,33,46.77,37.05,50,39.83h.09C50,36.15,50,33.12,50,29V17.34h9.57V55Z\"></path><path d=\"M14.9,4.07A2.35,2.35,0,0,0,13,5a3.75,3.75,0,0,0-.51,2.24v3.06h8.3V8.42h-3V7.71l3-1.75V3.82L17.43,5.9A2.51,2.51,0,0,0,14.9,4.07Zm1.34,3.28V8.42H14.07V7.48c0-1,.29-1.56,1.08-1.56S16.24,6.46,16.24,7.35Z\"></path><path d=\"M9.11,7.49A7.5,7.5,0,1,0,16.6,0,7.49,7.49,0,0,0,9.11,7.49Zm13.71,0A6.22,6.22,0,1,1,16.6,1.28,6.23,6.23,0,0,1,22.82,7.49Z\"></path></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/logos/SenzVertical.vue?vue&type=template&id=6a200d9a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/logos/SenzVertical.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d0c4256"
  
)

/* harmony default export */ var SenzVertical = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/logos/SenzHorizontal.vue?vue&type=template&id=4fd37d68&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 194.73 60.84\" fill=\"currentColor\"><path d=\"M13.74,41.79c.82,5.31,4.25,8,10.3,8,5.48,0,9-2.62,9-6.79,0-4-3-5.07-9.33-6.79l-4-1.14C6.87,31.4,1.64,26.66,1.64,17.5,1.64,7.11,10.38,0,23.71,0,36.55,0,44.89,6.21,45.55,17.58H32.14c-.9-4.5-3.6-6.95-8.92-6.95-4.9,0-7.6,2.37-7.6,5.89.08,3.92,2.7,5.15,7.28,6.46l4.49,1.31C40.64,28,46.85,32,46.85,42.36c0,11.2-9.32,18.23-23.38,18.23S.57,53.56,0,41.79Z\"></path><path d=\"M92.2,46.77c-2.61,8.43-10,14.07-21.59,14.07-13.65,0-22.4-8.83-22.4-22.9,0-13.41,9.24-22.81,22.65-22.81,14.31,0,22,9.73,22,23.79,0,.41-.09,1-.09,1.39v.74H60.88c.58,6.46,4.5,10.22,10.14,10.22,3.93,0,6.63-1.47,8.18-4.5ZM80,33.12c-.66-5.64-3.93-8.92-9.24-8.92S62,27.48,61.21,33.12Z\"></path><path d=\"M96.21,59.53V23.14c0-2.21,0-4.33-.08-6.54h12.19v5.89c1.8-3.6,6.13-6.95,13.24-6.95,5.89,0,10.31,2.53,12.84,6.87,2.21,3.76,2.46,7.76,2.46,15.12v22H124.1V38.76c0-8.59-1.47-13.25-7-13.25s-8.1,4.17-8.1,12v22Z\"></path><path d=\"M139.77,50.21c8.1-9.16,18.73-21.34,21.34-24.21l-.08-.08c-3.51.25-6.21.16-10.06.16H140.51V16.6h35.65v9.32C161.77,42.11,157.68,46.77,154.9,50v.09c3.68-.09,6.7-.17,10.87-.17h11.62v9.57H139.77Z\"></path><path d=\"M190.66,14.9a2.38,2.38,0,0,0-.94-1.94,3.77,3.77,0,0,0-2.24-.51h-3.07v8.3h1.9v-3H187l1.75,3h2.13l-2.07-3.32A2.51,2.51,0,0,0,190.66,14.9Zm-3.28,1.34h-1.07V14.07h.94c1,0,1.55.29,1.55,1.08S188.27,16.24,187.38,16.24Z\"></path><path d=\"M187.23,9.11a7.5,7.5,0,1,0,7.5,7.49A7.49,7.49,0,0,0,187.23,9.11Zm0,13.71a6.22,6.22,0,1,1,6.22-6.22A6.22,6.22,0,0,1,187.23,22.82Z\"></path></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/logos/SenzHorizontal.vue?vue&type=template&id=4fd37d68&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/logos/SenzHorizontal.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f88fb27a"
  
)

/* harmony default export */ var SenzHorizontal = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/buttons/CircleArrowRight.vue?vue&type=template&id=512a6603&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<span class=\"relative inline-block overflow-hidden align-middle transition-all duration-300 border border-solid rounded-full border-zinc-600 w-14 h-14 group-hover:border-zinc-400\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"absolute w-6 h-6 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:translate-x-[250%] text-zinc-200\"><path fill-rule=\"evenodd\" d=\"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\"></path></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"absolute w-6 h-6 -translate-x-[250%] -translate-y-1/2 top-1/2 left-1/2 transition-all duration-300 group-hover:-translate-x-1/2 text-white\"><path fill-rule=\"evenodd\" d=\"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\"></path></svg></span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/buttons/CircleArrowRight.vue?vue&type=template&id=512a6603&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/buttons/CircleArrowRight.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7e40302a"
  
)

/* harmony default export */ var CircleArrowRight = __webpack_exports__["default"] = (component.exports);

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map