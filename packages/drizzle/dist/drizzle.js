(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("redux-saga"), require("redux"), require("eth-block-tracker-es5"), require("deepmerge"), require("is-plain-object"), require("web3"));
	else if(typeof define === 'function' && define.amd)
		define(["redux-saga", "redux", "eth-block-tracker-es5", "deepmerge", "is-plain-object", "web3"], factory);
	else if(typeof exports === 'object')
		exports["drizzle"] = factory(require("redux-saga"), require("redux"), require("eth-block-tracker-es5"), require("deepmerge"), require("is-plain-object"), require("web3"));
	else
		root["drizzle"] = factory(root["redux-saga"], root["redux"], root["eth-block-tracker-es5"], root["deepmerge"], root["is-plain-object"], root["web3"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_71__, __WEBPACK_EXTERNAL_MODULE_122__, __WEBPACK_EXTERNAL_MODULE_147__, __WEBPACK_EXTERNAL_MODULE_148__, __WEBPACK_EXTERNAL_MODULE_149__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(38)('wks');
var uid = __webpack_require__(23);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(53);
var toPrimitive = __webpack_require__(32);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var ctx = __webpack_require__(15);
var hide = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(17);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(115);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_io__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takem", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "put", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["o"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["r"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["u"]; });


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(59);
var defined = __webpack_require__(35);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return sym; });
/* unused harmony export TASK */
/* unused harmony export HELPER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MATCH; });
/* unused harmony export CANCEL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SELF_CANCELLATION; });
/* unused harmony export konst */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return kTrue; });
/* unused harmony export kFalse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ident; });
/* harmony export (immutable) */ __webpack_exports__["d"] = check;
/* unused harmony export hasOwn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return is; });
/* unused harmony export object */
/* harmony export (immutable) */ __webpack_exports__["n"] = remove;
/* unused harmony export array */
/* unused harmony export deferred */
/* unused harmony export arrayOfDeffered */
/* harmony export (immutable) */ __webpack_exports__["f"] = delay;
/* unused harmony export createMockTask */
/* unused harmony export autoInc */
/* unused harmony export uid */
/* harmony export (immutable) */ __webpack_exports__["l"] = makeIterator;
/* unused harmony export log */
/* harmony export (immutable) */ __webpack_exports__["g"] = deprecate;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return updateIncentive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createSetContextWarning; });
/* unused harmony export wrapSagaDispatch */
/* unused harmony export cloneableGenerator */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var sym = function sym(id) {
  return '@@redux-saga/' + id;
};

var TASK = sym('TASK');
var HELPER = sym('HELPER');
var MATCH = sym('MATCH');
var CANCEL = sym('CANCEL_PROMISE');
var SAGA_ACTION = sym('SAGA_ACTION');
var SELF_CANCELLATION = sym('SELF_CANCELLATION');
var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = konst(true);
var kFalse = konst(false);
var noop = function noop() {};
var ident = function ident(v) {
  return v;
};

function check(value, predicate, error) {
  if (!predicate(value)) {
    log('error', 'uncaught at check', error);
    throw new Error(error);
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(object, property) {
  return is.notUndef(object) && hasOwnProperty.call(object, property);
}

var is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  number: function number(n) {
    return typeof n === 'number';
  },
  string: function string(s) {
    return typeof s === 'string';
  },
  array: Array.isArray,
  object: function object(obj) {
    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  },
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  iterable: function iterable(it) {
    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
  },
  task: function task(t) {
    return t && t[TASK];
  },
  observable: function observable(ob) {
    return ob && is.func(ob.subscribe);
  },
  buffer: function buffer(buf) {
    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
  },
  pattern: function pattern(pat) {
    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
  },
  channel: function channel(ch) {
    return ch && is.func(ch.take) && is.func(ch.close);
  },
  helper: function helper(it) {
    return it && it[HELPER];
  },
  stringableFunc: function stringableFunc(f) {
    return is.func(f) && hasOwn(f, 'toString');
  }
};

var object = {
  assign: function assign(target, source) {
    for (var i in source) {
      if (hasOwn(source, i)) {
        target[i] = source[i];
      }
    }
  }
};

function remove(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

var array = {
  from: function from(obj) {
    var arr = Array(obj.length);
    for (var i in obj) {
      if (hasOwn(obj, i)) {
        arr[i] = obj[i];
      }
    }
    return arr;
  }
};

function deferred() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var def = _extends({}, props);
  var promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}

function arrayOfDeffered(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

function delay(ms) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var timeoutId = void 0;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(function () {
      return resolve(val);
    }, ms);
  });

  promise[CANCEL] = function () {
    return clearTimeout(timeoutId);
  };

  return promise;
}

function createMockTask() {
  var _ref;

  var running = true;
  var _result = void 0,
      _error = void 0;

  return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
    return running;
  }, _ref.result = function result() {
    return _result;
  }, _ref.error = function error() {
    return _error;
  }, _ref.setRunning = function setRunning(b) {
    return running = b;
  }, _ref.setResult = function setResult(r) {
    return _result = r;
  }, _ref.setError = function setError(e) {
    return _error = e;
  }, _ref;
}

function autoInc() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return function () {
    return ++seed;
  };
}

var uid = autoInc();

var kThrow = function kThrow(err) {
  throw err;
};
var kReturn = function kReturn(value) {
  return { value: value, done: true };
};
function makeIterator(next) {
  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var isHelper = arguments[3];

  var iterator = { name: name, next: next, throw: thro, return: kReturn };

  if (isHelper) {
    iterator[HELPER] = true;
  }
  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }
  return iterator;
}

/**
  Print error in a useful way whether in a browser environment
  (with expandable error stack traces), or in a node.js environment
  (text-only log output)
 **/
function log(level, message) {
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  /*eslint-disable no-console*/
  if (typeof window === 'undefined') {
    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
  } else {
    console[level](message, error);
  }
}

function deprecate(fn, deprecationWarning) {
  return function () {
    if (process.env.NODE_ENV === 'development') log('warn', deprecationWarning);
    return fn.apply(undefined, arguments);
  };
}

var updateIncentive = function updateIncentive(deprecated, preferred) {
  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
};

var internalErr = function internalErr(err) {
  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
};

var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
};

var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }));
  };
};

var cloneableGenerator = function cloneableGenerator(generatorFunc) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var history = [];
    var gen = generatorFunc.apply(undefined, args);
    return {
      next: function next(arg) {
        history.push(arg);
        return gen.next(arg);
      },
      clone: function clone() {
        var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
        history.forEach(function (arg) {
          return clonedGen.next(arg);
        });
        return clonedGen;
      },
      return: function _return(value) {
        return gen.return(value);
      },
      throw: function _throw(exception) {
        return gen.throw(exception);
      }
    };
  };
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(72)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(28);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(20);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(58);
var enumBugKeys = __webpack_require__(39);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["q"] = take;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return takem; });
/* harmony export (immutable) */ __webpack_exports__["l"] = put;
/* harmony export (immutable) */ __webpack_exports__["b"] = all;
/* harmony export (immutable) */ __webpack_exports__["m"] = race;
/* harmony export (immutable) */ __webpack_exports__["d"] = call;
/* harmony export (immutable) */ __webpack_exports__["c"] = apply;
/* harmony export (immutable) */ __webpack_exports__["g"] = cps;
/* harmony export (immutable) */ __webpack_exports__["i"] = fork;
/* harmony export (immutable) */ __webpack_exports__["p"] = spawn;
/* harmony export (immutable) */ __webpack_exports__["k"] = join;
/* harmony export (immutable) */ __webpack_exports__["e"] = cancel;
/* harmony export (immutable) */ __webpack_exports__["n"] = select;
/* harmony export (immutable) */ __webpack_exports__["a"] = actionChannel;
/* harmony export (immutable) */ __webpack_exports__["f"] = cancelled;
/* harmony export (immutable) */ __webpack_exports__["h"] = flush;
/* harmony export (immutable) */ __webpack_exports__["j"] = getContext;
/* harmony export (immutable) */ __webpack_exports__["o"] = setContext;
/* harmony export (immutable) */ __webpack_exports__["r"] = takeEvery;
/* harmony export (immutable) */ __webpack_exports__["s"] = takeLatest;
/* harmony export (immutable) */ __webpack_exports__["u"] = throttle;
/* unused harmony export asEffect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sagaHelpers__ = __webpack_require__(117);



var IO = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["o" /* sym */])('IO');
var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';

var effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
};

function take() {
  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  if (arguments.length) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(arguments[0], __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].pattern(patternOrChannel)) {
    return effect(TAKE, { pattern: patternOrChannel });
  }
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].channel(patternOrChannel)) {
    return effect(TAKE, { channel: patternOrChannel });
  }
  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
}

take.maybe = function () {
  var eff = take.apply(undefined, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

var takem = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* deprecate */])(take.maybe, /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__utils__["p" /* updateIncentive */])('takem', 'take.maybe'));

function put(channel, action) {
  if (arguments.length > 1) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'put(channel, action): argument channel is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(action, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'put(channel, action): argument action is undefined');
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'put(action): argument action is undefined');
    action = channel;
    channel = null;
  }
  return effect(PUT, { channel: channel, action: action });
}

put.resolve = function () {
  var eff = put.apply(undefined, arguments);
  eff[PUT].resolve = true;
  return eff;
};

put.sync = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* deprecate */])(put.resolve, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["p" /* updateIncentive */])('put.sync', 'put.resolve'));

function all(effects) {
  return effect(ALL, effects);
}

function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(fn, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, meth + ': argument fn is undefined');

  var context = null;
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].array(fn)) {
    var _fn = fn;
    context = _fn[0];
    fn = _fn[1];
  } else if (fn.fn) {
    var _fn2 = fn;
    context = _fn2.context;
    fn = _fn2.fn;
  }
  if (context && __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].string(fn) && __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func(context[fn])) {
    fn = context[fn];
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(fn, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, meth + ': argument ' + fn + ' is not a function');

  return { context: context, fn: fn, args: args };
}

function call(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return effect(CALL, getFnCallDesc('call', fn, args));
}

function apply(context, fn) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
}

function cps(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return effect(CPS, getFnCallDesc('cps', fn, args));
}

function fork(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return effect(FORK, getFnCallDesc('fork', fn, args));
}

function spawn(fn) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  var eff = fork.apply(undefined, [fn].concat(args));
  eff[FORK].detached = true;
  return eff;
}

function join() {
  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    tasks[_key5] = arguments[_key5];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return join(t);
    }));
  }
  var task = tasks[0];
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'join(task): argument task is undefined');
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  return effect(JOIN, task);
}

function cancel() {
  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    tasks[_key6] = arguments[_key6];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return cancel(t);
    }));
  }
  var task = tasks[0];
  if (tasks.length === 1) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'cancel(task): argument task is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  }
  return effect(CANCEL, task || __WEBPACK_IMPORTED_MODULE_0__utils__["c" /* SELF_CANCELLATION */]);
}

function select(selector) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  if (arguments.length === 0) {
    selector = __WEBPACK_IMPORTED_MODULE_0__utils__["h" /* ident */];
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(selector, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'select(selector,[...]): argument selector is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(selector, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, 'select(selector,[...]): argument ' + selector + ' is not a function');
  }
  return effect(SELECT, { selector: selector, args: args });
}

/**
  channel(pattern, [buffer])    => creates an event channel for store actions
**/
function actionChannel(pattern, buffer) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(pattern, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
  if (arguments.length > 1) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
  }
  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
}

function cancelled() {
  return effect(CANCELLED, {});
}

function flush(channel) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].channel, 'flush(channel): argument ' + channel + ' is not valid channel');
  return effect(FLUSH, channel);
}

function getContext(prop) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(prop, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].string, 'getContext(prop): argument ' + prop + ' is not a string');
  return effect(GET_CONTEXT, prop);
}

function setContext(props) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(props, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].object, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* createSetContextWarning */])(null, props));
  return effect(SET_CONTEXT, props);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
    args[_key8 - 2] = arguments[_key8];
  }

  return fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__["a" /* takeEveryHelper */], patternOrChannel, worker].concat(args));
}

function takeLatest(patternOrChannel, worker) {
  for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
    args[_key9 - 2] = arguments[_key9];
  }

  return fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__["b" /* takeLatestHelper */], patternOrChannel, worker].concat(args));
}

function throttle(ms, pattern, worker) {
  for (var _len10 = arguments.length, args = Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
    args[_key10 - 3] = arguments[_key10];
  }

  return fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__["c" /* throttleHelper */], ms, pattern, worker].concat(args));
}

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[IO] && effect[type];
  };
};

var asEffect = {
  take: createAsEffectType(TAKE),
  put: createAsEffectType(PUT),
  all: createAsEffectType(ALL),
  race: createAsEffectType(RACE),
  call: createAsEffectType(CALL),
  cps: createAsEffectType(CPS),
  fork: createAsEffectType(FORK),
  join: createAsEffectType(JOIN),
  cancel: createAsEffectType(CANCEL),
  select: createAsEffectType(SELECT),
  actionChannel: createAsEffectType(ACTION_CHANNEL),
  cancelled: createAsEffectType(CANCELLED),
  flush: createAsEffectType(FLUSH),
  getContext: createAsEffectType(GET_CONTEXT),
  setContext: createAsEffectType(SET_CONTEXT)
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.getAccountBalances = getAccountBalances;

var _effects = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(getAccountBalances),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(accountBalancesSaga);

function getAccountBalances(action) {
  var accounts, web3, i, account, accountBalance;
  return _regenerator2.default.wrap(function getAccountBalances$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)(getAccountsState);

        case 2:
          accounts = _context.sent;
          web3 = action.web3;


          if (!accounts) {
            console.error('No accounts found while attempting to fetch balances!');
          }

          _context.prev = 5;
          _context.t0 = _regenerator2.default.keys(accounts);

        case 7:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 17;
            break;
          }

          i = _context.t1.value;
          account = accounts[i];
          _context.next = 12;
          return (0, _effects.call)(web3.eth.getBalance, account);

        case 12:
          accountBalance = _context.sent;
          _context.next = 15;
          return (0, _effects.put)({ type: 'ACCOUNT_BALANCE_FETCHED', account: account, accountBalance: accountBalance });

        case 15:
          _context.next = 7;
          break;

        case 17:
          _context.next = 25;
          break;

        case 19:
          _context.prev = 19;
          _context.t2 = _context['catch'](5);
          _context.next = 23;
          return (0, _effects.put)({ type: 'ACCOUNT_BALANCE_FAILED', error: _context.t2 });

        case 23:
          console.error('Error fetching account ' + account + ' balance:');
          console.error(_context.t2);

        case 25:
          _context.next = 27;
          return (0, _effects.put)({ type: 'ACCOUNT_BALANCES_FETCHED' });

        case 27:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[5, 19]]);
}

var getAccountsState = function getAccountsState(state) {
  return state.accounts;
};

function accountBalancesSaga() {
  return _regenerator2.default.wrap(function accountBalancesSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)('ACCOUNT_BALANCES_FETCHING', getAccountBalances);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

exports.default = accountBalancesSaga;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 29 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(126);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(95)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(38)('keys');
var uid = __webpack_require__(23);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(35);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(20);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return qEnd; });
/* harmony export (immutable) */ __webpack_exports__["c"] = safeName;
/* harmony export (immutable) */ __webpack_exports__["a"] = fsmIterator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(13);


var done = { done: true, value: undefined };
var qEnd = {};

function safeName(patternOrChannel) {
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].channel(patternOrChannel)) {
    return 'channel';
  } else if (Array.isArray(patternOrChannel)) {
    return String(patternOrChannel.map(function (entry) {
      return String(entry);
    }));
  } else {
    return String(patternOrChannel);
  }
}

function fsmIterator(fsm, q0) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';

  var updateState = void 0,
      qNext = q0;

  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }

    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);

      var _fsm$qNext = fsm[qNext](),
          q = _fsm$qNext[0],
          output = _fsm$qNext[1],
          _updateState = _fsm$qNext[2];

      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* makeIterator */])(next, function (error) {
    return next(null, error);
  }, name, true);
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return END; });
/* unused harmony export isEnd */
/* unused harmony export emitter */
/* unused harmony export INVALID_BUFFER */
/* unused harmony export UNDEFINED_INPUT_ERROR */
/* unused harmony export channel */
/* unused harmony export eventChannel */
/* unused harmony export stdChannel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffers__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler__ = __webpack_require__(119);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = { type: CHANNEL_END_TYPE };
var isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};

function emitter() {
  var subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["n" /* remove */])(subscribers, sub);
    };
  }

  function emit(item) {
    var arr = subscribers.slice();
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i](item);
    }
  }

  return {
    subscribe: subscribe,
    emit: emit
  };
}

var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

if (process.env.NODE_ENV !== 'production') {
  UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
}

function channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__buffers__["a" /* buffers */].fixed();

  var closed = false;
  var takers = [];

  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].buffer, INVALID_BUFFER);

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__utils__["i" /* internalErr */])('Cannot have a closed channel with pending takers');
    }
    if (takers.length && !buffer.isEmpty()) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__utils__["i" /* internalErr */])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(input, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, UNDEFINED_INPUT_ERROR);
    if (closed) {
      return;
    }
    if (!takers.length) {
      return buffer.put(input);
    }
    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];
      if (!cb[__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* MATCH */]] || cb[__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* MATCH */]](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }

  function take(cb) {
    checkForbiddenStates();
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(cb, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, "channel.take's callback must be a function");

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);
      cb.cancel = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["n" /* remove */])(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(cb, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, "channel.flush' callback must be a function");
    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }
    cb(buffer.flush());
  }

  function close() {
    checkForbiddenStates();
    if (!closed) {
      closed = true;
      if (takers.length) {
        var arr = takers;
        takers = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i](END);
        }
      }
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close,
    get __takers__() {
      return takers;
    },
    get __closed__() {
      return closed;
    }
  };
}

function eventChannel(subscribe) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_1__buffers__["a" /* buffers */].none();
  var matcher = arguments[2];

  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/
  if (arguments.length > 2) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(matcher, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, 'Invalid match function passed to eventChannel');
  }

  var chan = channel(buffer);
  var close = function close() {
    if (!chan.__closed__) {
      if (unsubscribe) {
        unsubscribe();
      }
      chan.close();
    }
  };
  var unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }
    if (matcher && !matcher(input)) {
      return;
    }
    chan.put(input);
  });
  if (chan.__closed__) {
    unsubscribe();
  }

  if (!__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}

function stdChannel(subscribe) {
  var chan = eventChannel(function (cb) {
    return subscribe(function (input) {
      if (input[__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* SAGA_ACTION */]]) {
        cb(input);
        return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_2__scheduler__["a" /* asap */])(function () {
        return cb(input);
      });
    });
  });

  return _extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(matcher, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, "channel.take's matcher argument must be a function");
        cb[__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* MATCH */]] = matcher;
      }
      chan.take(cb);
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(72)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.getAccounts = getAccounts;

var _reduxSaga = __webpack_require__(25);

var _effects = __webpack_require__(11);

var _accountBalancesSaga = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(getAccounts),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(createAccountsPollChannel),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(callCreateAccountsPollChannel),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(accountsSaga);

/*
 * Fetch Accounts List
 */

function getAccounts(action) {
  var web3, accounts;
  return _regenerator2.default.wrap(function getAccounts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          web3 = action.web3;
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.call)(web3.eth.getAccounts);

        case 4:
          accounts = _context.sent;

          if (accounts) {
            _context.next = 7;
            break;
          }

          throw 'No accounts found!';

        case 7:
          _context.next = 9;
          return (0, _effects.put)({ type: 'ACCOUNTS_FETCHED', accounts: accounts });

        case 9:
          _context.next = 17;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context['catch'](1);
          _context.next = 15;
          return (0, _effects.put)({ type: 'ACCOUNTS_FAILED', error: _context.t0 });

        case 15:
          console.error('Error fetching accounts:');
          console.error(_context.t0);

        case 17:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[1, 11]]);
}

/*
 * Poll for Account Changes
 */

function createAccountsPollChannel(_ref) {
  var interval = _ref.interval,
      web3 = _ref.web3;
  return _regenerator2.default.wrap(function createAccountsPollChannel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt('return', (0, _reduxSaga.eventChannel)(function (emit) {
            var persistedWeb3 = web3;

            var accountsPoller = setInterval(function () {
              emit({ type: 'SYNCING_ACCOUNTS', persistedWeb3: persistedWeb3 });
            }, interval); // options.polls.accounts

            var unsubscribe = function unsubscribe() {
              clearInterval(accountsPoller);
            };

            return unsubscribe;
          }));

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function callCreateAccountsPollChannel(_ref2) {
  var interval = _ref2.interval,
      web3 = _ref2.web3;
  var accountsChannel, event;
  return _regenerator2.default.wrap(function callCreateAccountsPollChannel$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.call)(createAccountsPollChannel, { interval: interval, web3: web3 });

        case 2:
          accountsChannel = _context3.sent;
          _context3.prev = 3;

        case 4:
          if (false) {
            _context3.next = 17;
            break;
          }

          _context3.next = 7;
          return (0, _effects.take)(accountsChannel);

        case 7:
          event = _context3.sent;

          if (!(event.type === 'SYNCING_ACCOUNTS')) {
            _context3.next = 13;
            break;
          }

          _context3.next = 11;
          return (0, _effects.call)(getAccounts, { web3: event.persistedWeb3 });

        case 11:
          _context3.next = 13;
          return (0, _effects.call)(_accountBalancesSaga.getAccountBalances, { web3: event.persistedWeb3 });

        case 13:
          _context3.next = 15;
          return (0, _effects.put)(event);

        case 15:
          _context3.next = 4;
          break;

        case 17:
          _context3.prev = 17;

          accountsChannel.close();
          return _context3.finish(17);

        case 20:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[3,, 17, 20]]);
}

function accountsSaga() {
  return _regenerator2.default.wrap(function accountsSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeLatest)('ACCOUNTS_FETCHING', getAccounts);

        case 2:
          _context4.next = 4;
          return (0, _effects.takeLatest)('ACCOUNTS_POLLING', callCreateAccountsPollChannel);

        case 4:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

exports.default = accountsSaga;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(21);
var wksExt = __webpack_require__(46);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.initializeWeb3 = initializeWeb3;
exports.getNetworkId = getNetworkId;

var _effects = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(initializeWeb3),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(callInitializeWeb3),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(getNetworkId),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(callSendTx),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(web3Saga);

var Web3 = __webpack_require__(149);

/*
 * Initialization
 */

function initializeWeb3(_ref) {
  var options = _ref.options;
  var web3, provider;
  return _regenerator2.default.wrap(function initializeWeb3$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          web3 = {};

          // Checking if Web3 has been injected by the browser (Mist/MetaMask)

          if (!(typeof window.web3 !== 'undefined')) {
            _context.next = 10;
            break;
          }

          // Use Mist/MetaMask's provider.
          web3 = new Web3(window.web3.currentProvider);
          web3.eth.cacheSendTransaction = function (txObject) {
            return (0, _effects.put)({ type: 'SEND_WEB3_TX', txObject: txObject, stackId: stackId, web3: web3 });
          };

          console.log('Injected web3 detected.');

          _context.next = 7;
          return (0, _effects.put)({ type: 'WEB3_INITIALIZED' });

        case 7:
          return _context.abrupt('return', web3);

        case 10:
          if (!options.fallback) {
            _context.next = 23;
            break;
          }

          // Attempt fallback if no web3 injection.
          console.log('No web3 instance injected, using fallback.');

          _context.t0 = options.fallback.type;
          _context.next = _context.t0 === 'ws' ? 15 : 22;
          break;

        case 15:
          provider = new Web3.providers.WebsocketProvider(options.fallback.url);

          web3 = new Web3(provider);

          // Attach drizzle functions
          web3.eth['cacheSendTransaction'] = function (txObject) {
            return (0, _effects.put)({ type: 'SEND_WEB3_TX', txObject: txObject, stackId: stackId, web3: web3 });
          };

          _context.next = 20;
          return (0, _effects.put)({ type: 'WEB3_INITIALIZED' });

        case 20:
          return _context.abrupt('return', web3);

        case 22:
          throw "Invalid web3 fallback provided.";

        case 23:
          throw "Cannot find injected web3 or valid fallback.";

        case 24:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function callInitializeWeb3(action) {
  var web3;
  return _regenerator2.default.wrap(function callInitializeWeb3$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)(initializeWeb3, { options: action.options });

        case 3:
          web3 = _context2.sent;
          return _context2.abrupt('return', web3);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2['catch'](0);

          store.dispatch({ type: 'WEB3_FAILED', error: _context2.t0 });
          console.error('Error intializing web3:');
          console.error(_context2.t0);

        case 12:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 7]]);
}

/*
 * Network ID
 */

function getNetworkId(_ref2) {
  var web3 = _ref2.web3;
  var networkId;
  return _regenerator2.default.wrap(function getNetworkId$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.call)(web3.eth.net.getId);

        case 3:
          networkId = _context3.sent;
          _context3.next = 6;
          return (0, _effects.put)({ type: 'NETWORK_ID_FETCHED', networkId: networkId });

        case 6:
          return _context3.abrupt('return', networkId);

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 13;
          return (0, _effects.put)({ type: 'NETWORK_ID_FAILED', error: _context3.t0 });

        case 13:

          console.error('Error fetching network ID:');
          console.error(_context3.t0);

          return _context3.abrupt('return');

        case 16:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[0, 9]]);
}

/*
 * Send Transaction
 */

function createTxChannel(_ref3) {
  var txObject = _ref3.txObject,
      stackId = _ref3.stackId,
      web3 = _ref3.web3;

  var persistTxHash;

  return eventChannel(function (emit) {
    var txPromiEvent = web3.eth.sendTransaction(txObject).on('transactionHash', function (txHash) {
      persistTxHash = txHash;

      emit({ type: 'W3TX_BROADCASTED', txHash: txHash, stackId: stackId });
    }).on('confirmation', function (confirmationNumber, receipt) {
      emit({ type: 'W3TX_CONFIRMAITON', confirmationReceipt: receipt, txHash: persistTxHash });
    }).on('receipt', function (receipt) {
      emit({ type: 'W3TX_SUCCESSFUL', receipt: receipt, txHash: persistTxHash });
      emit(END);
    }).on('error', function (error) {
      emit({ type: 'W3TX_ERROR', error: error, txHash: persistTxHash });
      emit(END);
    });

    var unsubscribe = function unsubscribe() {
      txPromiEvent.off();
    };

    return unsubscribe;
  });
}

function callSendTx(_ref4) {
  var txObject = _ref4.txObject,
      stackId = _ref4.stackId,
      web3 = _ref4.web3;
  var txChannel, event;
  return _regenerator2.default.wrap(function callSendTx$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.call)(createTxChannel, { txObject: txObject, stackId: stackId, web3: web3 });

        case 2:
          txChannel = _context4.sent;
          _context4.prev = 3;

        case 4:
          if (false) {
            _context4.next = 12;
            break;
          }

          _context4.next = 7;
          return take(txChannel);

        case 7:
          event = _context4.sent;
          _context4.next = 10;
          return (0, _effects.put)(event);

        case 10:
          _context4.next = 4;
          break;

        case 12:
          _context4.prev = 12;

          txChannel.close();
          return _context4.finish(12);

        case 15:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[3,, 12, 15]]);
}

function web3Saga() {
  return _regenerator2.default.wrap(function web3Saga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeLatest)('WEB3_INITIALIZING', callInitializeWeb3);

        case 2:
          _context5.next = 4;
          return (0, _effects.takeLatest)('NETWORK_ID_FETCHING', getNetworkId);

        case 4:
          _context5.next = 6;
          return (0, _effects.takeEvery)('SEND_WEB3_TX', callSendTx);

        case 6:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

exports.default = web3Saga;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(52);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(52);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(31)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 54 */
/***/ (function(module, exports) {



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(21);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(56);
var hide = __webpack_require__(7);
var has = __webpack_require__(9);
var Iterators = __webpack_require__(18);
var $iterCreate = __webpack_require__(96);
var setToStringTag = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(100);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(97);
var enumBugKeys = __webpack_require__(39);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(31)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(60).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(98)(false);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
var global = __webpack_require__(0);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(18);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(19);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(18);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(62);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(18);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(5);
var aFunction = __webpack_require__(20);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(15);
var invoke = __webpack_require__(107);
var html = __webpack_require__(60);
var cel = __webpack_require__(31);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(19)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(41);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BUFFER_OVERFLOW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buffers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(13);


var BUFFER_OVERFLOW = "Channel's Buffer overflow!";

var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;

var zeroBuffer = { isEmpty: __WEBPACK_IMPORTED_MODULE_0__utils__["k" /* kTrue */], put: __WEBPACK_IMPORTED_MODULE_0__utils__["m" /* noop */], take: __WEBPACK_IMPORTED_MODULE_0__utils__["m" /* noop */] };

function ringBuffer() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var overflowAction = arguments[1];

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];
    while (length) {
      items.push(take());
    }
    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit = void 0;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;

            arr = flush();

            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;

            arr.length = doubledLimit;
            limit = doubledLimit;

            push(it);
            break;
          default:
          // DROP
        }
      }
    },
    take: take,
    flush: flush
  };
}

var buffers = {
  none: function none() {
    return zeroBuffer;
  },
  fixed: function fixed(limit) {
    return ringBuffer(limit, ON_OVERFLOW_THROW);
  },
  dropping: function dropping(limit) {
    return ringBuffer(limit, ON_OVERFLOW_DROP);
  },
  sliding: function sliding(limit) {
    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
  },
  expanding: function expanding(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  }
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _reduxSaga = __webpack_require__(25);

var _effects = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(callCreateBlockChannel),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(callCreateBlockPollChannel),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(processBlockHeader),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(processBlock),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(blocksSaga);

var BlockTracker = __webpack_require__(122);

/*
 * Listen for Blocks
 */

function createBlockChannel(_ref) {
  var drizzle = _ref.drizzle,
      web3 = _ref.web3;

  return (0, _reduxSaga.eventChannel)(function (emit) {
    var blockEvents = web3.eth.subscribe('newBlockHeaders', function (error, result) {
      if (error) {
        emit({ type: 'BLOCKS_FAILED', error: error });

        console.error('Error in block header subscription:');
        console.error(error);

        emit(_reduxSaga.END);
      }
    }).on('data', function (blockHeader) {
      emit({ type: 'BLOCK_RECEIVED', blockHeader: blockHeader, drizzle: drizzle, web3: web3 });
    }).on('error', function (error) {
      emit({ type: 'BLOCKS_FAILED', error: error });
      emit(_reduxSaga.END);
    });

    var unsubscribe = function unsubscribe() {
      blockEvents.off();
    };

    return unsubscribe;
  });
}

function callCreateBlockChannel(_ref2) {
  var drizzle = _ref2.drizzle,
      web3 = _ref2.web3;
  var blockChannel, event;
  return _regenerator2.default.wrap(function callCreateBlockChannel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(createBlockChannel, { drizzle: drizzle, web3: web3 });

        case 2:
          blockChannel = _context.sent;
          _context.prev = 3;

        case 4:
          if (false) {
            _context.next = 12;
            break;
          }

          _context.next = 7;
          return (0, _effects.take)(blockChannel);

        case 7:
          event = _context.sent;
          _context.next = 10;
          return (0, _effects.put)(event);

        case 10:
          _context.next = 4;
          break;

        case 12:
          _context.prev = 12;

          blockChannel.close();
          return _context.finish(12);

        case 15:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[3,, 12, 15]]);
}

/*
 * Poll for Blocks
 */

function createBlockPollChannel(_ref3) {
  var drizzle = _ref3.drizzle,
      interval = _ref3.interval,
      web3 = _ref3.web3;

  return (0, _reduxSaga.eventChannel)(function (emit) {
    var blockTracker = new BlockTracker({ provider: web3.currentProvider, pollingInterval: interval });

    blockTracker.on('latest', function (block) {
      emit({ type: 'BLOCK_FOUND', block: block, drizzle: drizzle, web3: web3 });
    });

    blockTracker.start().catch(function (error) {
      emit({ type: 'BLOCKS_FAILED', error: error });
      emit(_reduxSaga.END);
    });

    var unsubscribe = function unsubscribe() {
      blockTracker.stop();
    };

    return unsubscribe;
  });
}

function callCreateBlockPollChannel(_ref4) {
  var drizzle = _ref4.drizzle,
      interval = _ref4.interval,
      web3 = _ref4.web3;
  var blockChannel, event;
  return _regenerator2.default.wrap(function callCreateBlockPollChannel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.call)(createBlockPollChannel, { drizzle: drizzle, interval: interval, web3: web3 });

        case 2:
          blockChannel = _context2.sent;
          _context2.prev = 3;

        case 4:
          if (false) {
            _context2.next = 12;
            break;
          }

          _context2.next = 7;
          return (0, _effects.take)(blockChannel);

        case 7:
          event = _context2.sent;
          _context2.next = 10;
          return (0, _effects.put)(event);

        case 10:
          _context2.next = 4;
          break;

        case 12:
          _context2.prev = 12;

          blockChannel.close();
          return _context2.finish(12);

        case 15:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[3,, 12, 15]]);
}

/*
 * Process Blocks
 */

function processBlockHeader(_ref5) {
  var blockHeader = _ref5.blockHeader,
      drizzle = _ref5.drizzle,
      web3 = _ref5.web3;
  var blockNumber, block;
  return _regenerator2.default.wrap(function processBlockHeader$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          blockNumber = blockHeader.number;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _effects.call)(web3.eth.getBlock, blockNumber, true);

        case 4:
          block = _context3.sent;
          _context3.next = 7;
          return (0, _effects.call)(processBlock, { block: block, drizzle: drizzle, web3: web3 });

        case 7:
          _context3.next = 16;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3['catch'](1);

          console.error('Error in block processing:');
          console.error(_context3.t0);

          _context3.next = 15;
          return (0, _effects.put)({ type: 'BLOCK_FAILED', error: _context3.t0 });

        case 15:
          return _context3.abrupt('return');

        case 16:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[1, 9]]);
}

function processBlock(_ref6) {
  var block = _ref6.block,
      drizzle = _ref6.drizzle,
      web3 = _ref6.web3;
  var txs, i, from, fromContract, to, toContract;
  return _regenerator2.default.wrap(function processBlock$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          txs = block.transactions;

          if (!(txs.length > 0)) {
            _context4.next = 18;
            break;
          }

          i = 0;

        case 4:
          if (!(i < txs.length)) {
            _context4.next = 18;
            break;
          }

          from = txs[i].from || '';
          fromContract = drizzle.findContractByAddress(from.toLowerCase());

          if (!fromContract) {
            _context4.next = 10;
            break;
          }

          _context4.next = 10;
          return (0, _effects.put)({ type: 'CONTRACT_SYNCING', contract: fromContract });

        case 10:
          to = txs[i].to || '';
          toContract = drizzle.findContractByAddress(to.toLowerCase());

          if (!toContract) {
            _context4.next = 15;
            break;
          }

          _context4.next = 15;
          return (0, _effects.put)({ type: 'CONTRACT_SYNCING', contract: toContract });

        case 15:
          i++;
          _context4.next = 4;
          break;

        case 18:
          _context4.next = 27;
          break;

        case 20:
          _context4.prev = 20;
          _context4.t0 = _context4['catch'](0);

          console.error('Error in block processing:');
          console.error(_context4.t0);

          _context4.next = 26;
          return (0, _effects.put)({ type: 'BLOCK_FAILED', error: _context4.t0 });

        case 26:
          return _context4.abrupt('return');

        case 27:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[0, 20]]);
}

function blocksSaga() {
  return _regenerator2.default.wrap(function blocksSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeLatest)('BLOCKS_LISTENING', callCreateBlockChannel);

        case 2:
          _context5.next = 4;
          return (0, _effects.takeEvery)('BLOCK_RECEIVED', processBlockHeader);

        case 4:
          _context5.next = 6;
          return (0, _effects.takeLatest)('BLOCKS_POLLING', callCreateBlockPollChannel);

        case 6:
          _context5.next = 8;
          return (0, _effects.takeEvery)('BLOCK_FOUND', processBlock);

        case 8:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

exports.default = blocksSaga;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(28);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(14);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(76);

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.addContract = addContract;
exports.instantiateWeb3Contract = instantiateWeb3Contract;
exports.instantiateContract = instantiateContract;

var _reduxSaga = __webpack_require__(25);

var _effects = __webpack_require__(11);

var _DrizzleContract = __webpack_require__(142);

var _DrizzleContract2 = _interopRequireDefault(_DrizzleContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(addContract),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(instantiateWeb3Contract),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(instantiateContract),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(callListenForContractEvent),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(callSendContractTx),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(callCallContractFn),
    _marked7 = /*#__PURE__*/_regenerator2.default.mark(callSyncContract),
    _marked8 = /*#__PURE__*/_regenerator2.default.mark(contractsSaga);

function addContract(_ref) {
  var drizzle = _ref.drizzle,
      contractConfig = _ref.contractConfig,
      events = _ref.events,
      web3 = _ref.web3;
  var drizzleContract;
  return _regenerator2.default.wrap(function addContract$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!drizzle.loadingContract[contractConfig.contractName]) {
            _context.next = 2;
            break;
          }

          return _context.abrupt('return', false);

        case 2:
          drizzle.loadingContract[contractConfig.contractName] = true;
          drizzleContract = void 0;

          if (!contractConfig.web3Contract) {
            _context.next = 10;
            break;
          }

          _context.next = 7;
          return (0, _effects.call)(instantiateWeb3Contract, { web3Contract: contractConfig.web3Contract, name: contractConfig.contractName, events: events, store: drizzle.store, web3: web3 });

        case 7:
          drizzleContract = _context.sent;
          _context.next = 13;
          break;

        case 10:
          _context.next = 12;
          return (0, _effects.call)(instantiateContract, { contractArtifact: contractConfig, events: events, store: drizzle.store, web3: web3 });

        case 12:
          drizzleContract = _context.sent;

        case 13:
          drizzle._addContract(drizzleContract);
          _context.next = 16;
          return (0, _effects.put)({ type: 'CONTRACT_INITIALIZED', name: contractConfig.contractName });

        case 16:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/*
 * Instantiation
 */

function instantiateWeb3Contract(_ref2) {
  var web3Contract = _ref2.web3Contract,
      name = _ref2.name,
      events = _ref2.events,
      store = _ref2.store,
      web3 = _ref2.web3;
  return _regenerator2.default.wrap(function instantiateWeb3Contract$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt('return', new _DrizzleContract2.default(web3Contract, web3, name, store, events));

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function instantiateContract(_ref3) {
  var contractArtifact = _ref3.contractArtifact,
      events = _ref3.events,
      store = _ref3.store,
      web3 = _ref3.web3;
  var networkId, web3Contract;
  return _regenerator2.default.wrap(function instantiateContract$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.select)(getNetworkId);

        case 2:
          networkId = _context3.sent;


          // Instantiate the contract.
          web3Contract = new web3.eth.Contract(contractArtifact.abi, contractArtifact.networks[networkId].address, {
            from: store.getState().accounts[0],
            data: contractArtifact.deployedBytecode
          });
          return _context3.abrupt('return', new _DrizzleContract2.default(web3Contract, web3, contractArtifact.contractName, store, events));

        case 5:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

/*
 * Events
 */

function createContractEventChannel(_ref4) {
  var contract = _ref4.contract,
      eventName = _ref4.eventName;

  var name = contract.contractName;

  return (0, _reduxSaga.eventChannel)(function (emit) {
    var eventListener = contract.events[eventName]().on('data', function (event) {
      emit({ type: 'EVENT_FIRED', name: name, event: event });
    }).on('changed', function (event) {
      emit({ type: 'EVENT_CHANGED', name: name, event: event });
    }).on('error', function (error) {
      emit({ type: 'EVENT_ERROR', name: name, error: error });
      emit(_reduxSaga.END);
    });

    var unsubscribe = function unsubscribe() {
      eventListener.removeListener(eventName);
    };

    return unsubscribe;
  });
}

function callListenForContractEvent(_ref5) {
  var contract = _ref5.contract,
      eventName = _ref5.eventName;
  var contractEventChannel, event;
  return _regenerator2.default.wrap(function callListenForContractEvent$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.call)(createContractEventChannel, { contract: contract, eventName: eventName });

        case 2:
          contractEventChannel = _context4.sent;

        case 3:
          if (false) {
            _context4.next = 11;
            break;
          }

          _context4.next = 6;
          return (0, _effects.take)(contractEventChannel);

        case 6:
          event = _context4.sent;
          _context4.next = 9;
          return (0, _effects.put)(event);

        case 9:
          _context4.next = 3;
          break;

        case 11:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

/*
 * Send and Cache
 */

function createTxChannel(_ref6) {
  var txObject = _ref6.txObject,
      stackId = _ref6.stackId,
      _ref6$sendArgs = _ref6.sendArgs,
      sendArgs = _ref6$sendArgs === undefined ? {} : _ref6$sendArgs,
      contractName = _ref6.contractName;

  var persistTxHash;

  return (0, _reduxSaga.eventChannel)(function (emit) {
    var txPromiEvent = txObject.send(sendArgs).on('transactionHash', function (txHash) {
      persistTxHash = txHash;

      emit({ type: 'TX_BROADCASTED', txHash: txHash, stackId: stackId });
      emit({ type: 'CONTRACT_SYNC_IND', contractName: contractName });
    }).on('confirmation', function (confirmationNumber, receipt) {
      emit({ type: 'TX_CONFIRMAITON', confirmationReceipt: receipt, txHash: persistTxHash });
    }).on('receipt', function (receipt) {
      emit({ type: 'TX_SUCCESSFUL', receipt: receipt, txHash: persistTxHash });
      emit(_reduxSaga.END);
    }).on('error', function (error) {
      emit({ type: 'TX_ERROR', error: error, txHash: persistTxHash });
      emit(_reduxSaga.END);
    });

    var unsubscribe = function unsubscribe() {
      txPromiEvent.off();
    };

    return unsubscribe;
  });
}

function callSendContractTx(_ref7) {
  var contract = _ref7.contract,
      fnName = _ref7.fnName,
      fnIndex = _ref7.fnIndex,
      args = _ref7.args,
      stackId = _ref7.stackId;
  var finalArg, sendArgs, finalArgTest, contractName, txObject, txChannel, event;
  return _regenerator2.default.wrap(function callSendContractTx$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          // Check for type of object and properties indicative of call/send options.
          if (args.length) {
            finalArg = args.length > 1 ? args[args.length - 1] : args[0];
            sendArgs = {};
            finalArgTest = false;


            if ((typeof finalArg === 'undefined' ? 'undefined' : (0, _typeof3.default)(finalArg)) === 'object') {
              finalArgTest = (0, _effects.call)(isSendOrCallOptions, finalArg);
            }

            if (finalArgTest) {
              sendArgs = finalArg;

              args.length > 1 ? delete args[args.length - 1] : delete args[0];
              args.length = args.length - 1;
            }
          }

          // Get name to mark as desynchronized on tx creation
          contractName = contract.contractName;

          // Create the transaction object and execute the tx.

          _context5.next = 4;
          return _effects.call.apply(undefined, [contract.methods[fnName]].concat((0, _toConsumableArray3.default)(args)));

        case 4:
          txObject = _context5.sent;
          _context5.next = 7;
          return (0, _effects.call)(createTxChannel, { txObject: txObject, stackId: stackId, sendArgs: sendArgs, contractName: contractName });

        case 7:
          txChannel = _context5.sent;
          _context5.prev = 8;

        case 9:
          if (false) {
            _context5.next = 17;
            break;
          }

          _context5.next = 12;
          return (0, _effects.take)(txChannel);

        case 12:
          event = _context5.sent;
          _context5.next = 15;
          return (0, _effects.put)(event);

        case 15:
          _context5.next = 9;
          break;

        case 17:
          _context5.prev = 17;

          txChannel.close();
          return _context5.finish(17);

        case 20:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this, [[8,, 17, 20]]);
}

/*
 * Call and Cache
 */

function callCallContractFn(_ref8) {
  var contract = _ref8.contract,
      fnName = _ref8.fnName,
      fnIndex = _ref8.fnIndex,
      args = _ref8.args,
      argsHash = _ref8.argsHash,
      _ref8$sync = _ref8.sync,
      sync = _ref8$sync === undefined ? false : _ref8$sync;
  var finalArg, callArgs, finalArgTest, txObject, callResult, dispatchArgs, errorArgs;
  return _regenerator2.default.wrap(function callCallContractFn$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (!sync) {
            _context6.next = 2;
            break;
          }

          return _context6.abrupt('return');

        case 2:

          // Check for type of object and properties indicative of call/send options.
          if (args.length) {
            finalArg = args.length > 1 ? args[args.length - 1] : args[0];
            callArgs = {};
            finalArgTest = false;


            if ((typeof finalArg === 'undefined' ? 'undefined' : (0, _typeof3.default)(finalArg)) === 'object') {
              finalArgTest = (0, _effects.call)(isSendOrCallOptions, finalArg);
            }

            if (finalArgTest) {
              callArgs = finalArg;

              args.length > 1 ? delete args[args.length - 1] : delete args[0];
              args.length = args.length - 1;
            }
          }

          // Create the transaction object and execute the call.
          _context6.next = 5;
          return _effects.call.apply(undefined, [contract.methods[fnName]].concat((0, _toConsumableArray3.default)(args)));

        case 5:
          txObject = _context6.sent;
          _context6.prev = 6;
          _context6.next = 9;
          return (0, _effects.call)(txObject.call, callArgs);

        case 9:
          callResult = _context6.sent;
          dispatchArgs = {
            name: contract.contractName,
            variable: contract.abi[fnIndex].name,
            argsHash: argsHash,
            args: args,
            value: callResult,
            fnIndex: fnIndex
          };
          _context6.next = 13;
          return (0, _effects.put)((0, _extends3.default)({ type: 'GOT_CONTRACT_VAR' }, dispatchArgs));

        case 13:
          _context6.next = 21;
          break;

        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6['catch'](6);

          console.error(_context6.t0);

          errorArgs = {
            name: contract.contractName,
            variable: contract.abi[fnIndex].name,
            argsHash: argsHash,
            args: args,
            error: _context6.t0,
            fnIndex: fnIndex
          };
          _context6.next = 21;
          return (0, _effects.put)((0, _extends3.default)({ type: 'ERROR_CONTRACT_VAR' }, errorArgs));

        case 21:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this, [[6, 15]]);
}

/*
 * Sync Contract
 */

function callSyncContract(action) {
  var contract, contractName, contractsState, contractFnsState, fnName, argsHash, fnIndex, args;
  return _regenerator2.default.wrap(function callSyncContract$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          // Get contract state from store
          contract = action.contract;
          contractName = contract.contractName;
          _context7.next = 4;
          return (0, _effects.select)(getContractsState);

        case 4:
          contractsState = _context7.sent;
          contractFnsState = (0, _assign2.default)({}, contractsState[contractName]);

          // Remove unnecessary keys

          delete contractFnsState.initialized;
          delete contractFnsState.synced;
          delete contractFnsState.events;

          // Iterate over functions and hashes
          _context7.t0 = _regenerator2.default.keys(contractFnsState);

        case 10:
          if ((_context7.t1 = _context7.t0()).done) {
            _context7.next = 25;
            break;
          }

          fnName = _context7.t1.value;
          _context7.t2 = _regenerator2.default.keys(contractFnsState[fnName]);

        case 13:
          if ((_context7.t3 = _context7.t2()).done) {
            _context7.next = 23;
            break;
          }

          argsHash = _context7.t3.value;
          fnIndex = contractFnsState[fnName][argsHash].fnIndex;
          args = contractFnsState[fnName][argsHash].args;

          // Pull args and call fn for each given function
          // keeping for pre-v1.1.5 compatibility with CALL_CONTRACT_FN event.

          _context7.next = 19;
          return (0, _effects.put)({ type: 'CALL_CONTRACT_FN', contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, argsHash: argsHash, sync: true });

        case 19:
          _context7.next = 21;
          return (0, _effects.call)(callCallContractFn, { contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, argsHash: argsHash });

        case 21:
          _context7.next = 13;
          break;

        case 23:
          _context7.next = 10;
          break;

        case 25:
          _context7.next = 27;
          return (0, _effects.put)({ type: 'CONTRACT_SYNCED', contractName: contractName });

        case 27:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this);
}

var getContractsState = function getContractsState(state) {
  return state.contracts;
};
var getNetworkId = function getNetworkId(state) {
  return state.web3.networkId;
};

function isSendOrCallOptions(options) {
  if ('from' in options) return true;
  if ('gas' in options) return true;
  if ('gasPrice' in options) return true;
  if ('value' in options) return true;

  return false;
}

function contractsSaga() {
  return _regenerator2.default.wrap(function contractsSaga$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.takeEvery)('SEND_CONTRACT_TX', callSendContractTx);

        case 2:
          _context8.next = 4;
          return (0, _effects.takeEvery)('CALL_CONTRACT_FN', callCallContractFn);

        case 4:
          _context8.next = 6;
          return (0, _effects.takeEvery)('CONTRACT_SYNCING', callSyncContract);

        case 6:
          _context8.next = 8;
          return (0, _effects.takeEvery)('LISTEN_FOR_EVENT', callListenForContractEvent);

        case 8:
          _context8.next = 10;
          return (0, _effects.takeEvery)('ADD_CONTRACT', addContract);

        case 10:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked8, this);
}

exports.default = contractsSaga;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(130);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(132);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(58);
var hiddenKeys = __webpack_require__(39).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = __webpack_require__(11);

var _defaultOptions = __webpack_require__(145);

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

var _mergeOptions = __webpack_require__(146);

var _mergeOptions2 = _interopRequireDefault(_mergeOptions);

var _web3Saga = __webpack_require__(48);

var _accountsSaga = __webpack_require__(44);

var _accountBalancesSaga = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(initializeDrizzle),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(drizzleStatusSaga);

// Initialization Functions


function initializeDrizzle(action) {
  var options, web3Options, drizzle, web3, i, contractConfig, events, contractName, interval;
  return _regenerator2.default.wrap(function initializeDrizzle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          options = (0, _mergeOptions2.default)(_defaultOptions2.default, action.options);
          web3Options = options.web3;
          drizzle = action.drizzle;

          // Initialize web3 and get the current network ID.

          _context.next = 6;
          return (0, _effects.call)(_web3Saga.initializeWeb3, { options: web3Options });

        case 6:
          web3 = _context.sent;

          drizzle.web3 = web3;

          _context.next = 10;
          return (0, _effects.call)(_web3Saga.getNetworkId, { web3: web3 });

        case 10:
          _context.next = 12;
          return (0, _effects.call)(_accountsSaga.getAccounts, { web3: web3 });

        case 12:
          _context.next = 14;
          return (0, _effects.call)(_accountBalancesSaga.getAccountBalances, { web3: web3 });

        case 14:
          i = 0;

        case 15:
          if (!(i < options.contracts.length)) {
            _context.next = 25;
            break;
          }

          contractConfig = options.contracts[i];
          events = [];
          contractName = contractConfig.contractName;


          if (contractName in options.events) {
            events = options.events[contractName];
          }

          _context.next = 22;
          return (0, _effects.put)({ type: 'ADD_CONTRACT', drizzle: drizzle, contractConfig: contractConfig, events: events, web3: web3 });

        case 22:
          i++;
          _context.next = 15;
          break;

        case 25:
          if (!web3.currentProvider.isMetaMask) {
            _context.next = 31;
            break;
          }

          // Using MetaMask, attempt block polling.
          interval = options.polls.blocks;
          _context.next = 29;
          return (0, _effects.put)({ type: 'BLOCKS_POLLING', drizzle: drizzle, interval: interval, web3: web3 });

        case 29:
          _context.next = 33;
          break;

        case 31:
          _context.next = 33;
          return (0, _effects.put)({ type: 'BLOCKS_LISTENING', drizzle: drizzle, web3: web3 });

        case 33:
          if (!('accounts' in options.polls)) {
            _context.next = 36;
            break;
          }

          _context.next = 36;
          return (0, _effects.put)({ type: 'ACCOUNTS_POLLING', interval: options.polls.accounts, web3: web3 });

        case 36:
          _context.next = 45;
          break;

        case 38:
          _context.prev = 38;
          _context.t0 = _context['catch'](0);
          _context.next = 42;
          return (0, _effects.put)({ type: 'DRIZZLE_FAILED', error: _context.t0 });

        case 42:

          console.error('Error initializing Drizzle:');
          console.error(_context.t0);

          return _context.abrupt('return');

        case 45:
          _context.next = 47;
          return (0, _effects.put)({ type: 'DRIZZLE_INITIALIZED' });

        case 47:
          return _context.abrupt('return');

        case 48:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 38]]);
}

function drizzleStatusSaga() {
  return _regenerator2.default.wrap(function drizzleStatusSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)('DRIZZLE_INITIALIZING', initializeDrizzle);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

exports.default = drizzleStatusSaga;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(28);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var accountsReducer = function accountsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === 'ACCOUNTS_FETCHING') {
    return state;
  }

  if (action.type === 'ACCOUNTS_FETCHED') {
    return (0, _assign2.default)({}, state, action.accounts);
  }

  return state;
};

exports.default = accountsReducer;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(49);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(14);

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var accountBalancesReducer = function accountBalancesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === 'ACCOUNT_BALANCE_FETCHED') {
    return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, action.account, action.accountBalance));
  }

  return state;
};

exports.default = accountBalancesReducer;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(49);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends14 = __webpack_require__(14);

var _extends15 = _interopRequireDefault(_extends14);

var _generateContractInitialState = __webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var contractsReducer = function contractsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  /*
   * Contract Status
   */

  if (action.type === 'ADD_CONTRACT') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.contractConfig.contractName, (0, _generateContractInitialState.generateContractInitialState)(action.contractConfig)));
  }

  if (action.type === 'CONTRACT_INITIALIZED') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends15.default)({}, state[action.name], {
      initialized: true,
      synced: true,
      events: []
    })));
  }

  if (action.type === 'CONTRACT_SYNCING') {
    var contractName = action.contract.contractName;

    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, contractName, (0, _extends15.default)({}, state[contractName], {
      synced: false
    })));
  }

  if (action.type === 'CONTRACT_SYNCED') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.contractName, (0, _extends15.default)({}, state[action.contractName], {
      synced: true
    })));
  }

  if (action.type === 'CONTRACT_SYNC_IND') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.contractName, (0, _extends15.default)({}, state[action.contractName], {
      synced: false
    })));
  }

  /*
   * Contract Functions
   */

  if (action.type === 'GOT_CONTRACT_VAR') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends15.default)({}, state[action.name], (0, _defineProperty3.default)({}, action.variable, (0, _extends15.default)({}, state[action.name][action.variable], (0, _defineProperty3.default)({}, action.argsHash, (0, _extends15.default)({}, state[action.name][action.variable][action.argsHash], {
      args: action.args,
      fnIndex: action.fnIndex,
      value: action.value
    })))))));
  }

  if (action.type === 'ERROR_CONTRACT_VAR') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends15.default)({}, state[action.name], (0, _defineProperty3.default)({}, action.variable, (0, _extends15.default)({}, state[action.name][action.variable], (0, _defineProperty3.default)({}, action.argsHash, (0, _extends15.default)({}, state[action.name][action.variable][action.argsHash], {
      args: action.args,
      fnIndex: action.fnIndex,
      error: action.error
    })))))));
  }

  /*
   * Contract Events
   */

  if (action.type === 'EVENT_FIRED') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends15.default)({}, state[action.name], {
      events: [].concat((0, _toConsumableArray3.default)(state[action.name].events), [action.event])
    })));
  }

  return state;
};

exports.default = contractsReducer;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateContractInitialState = generateContractInitialState;

var _getAbi = __webpack_require__(83);

var _getAbi2 = _interopRequireDefault(_getAbi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateContractInitialState(contractConfig) {
  var state = {
    initialized: false,
    synced: false

    // Constant getters
  };var abi = (0, _getAbi2.default)(contractConfig);
  for (var i2 = 0; i2 < abi.length; i2++) {
    var item = abi[i2];

    if (item.type == "function" && item.constant === true) {
      state[item.name] = {};
    }
  }

  return state;
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAbi;
function getAbi(contractEntry) {
  if (contractEntry.web3Contract) {
    return contractEntry.web3Contract.options.jsonInterface;
  } else {
    return contractEntry.abi;
  }
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(14);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  initialized: false
};

var drizzleStatusReducer = function drizzleStatusReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  /*
   * Drizzle Status
   */

  if (action.type === 'DRIZZLE_INITIALIZED') {
    return (0, _extends3.default)({}, state, {
      initialized: true
    });
  }
  return state;
};

exports.default = drizzleStatusReducer;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(49);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends6 = __webpack_require__(14);

var _extends7 = _interopRequireDefault(_extends6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var transactionsReducer = function transactionsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (action.type === 'TX_BROADCASTED') {
        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, action.txHash, {
            status: 'pending',
            confirmations: []
        }));
    }

    if (action.type === 'TX_CONFIRMAITON') {
        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, action.txHash, (0, _extends7.default)({}, state[action.txHash], {
            confirmations: [].concat((0, _toConsumableArray3.default)(state[action.txHash].confirmations), [action.confirmationReceipt])
        })));
    }

    if (action.type === 'TX_SUCCESSFUL') {
        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, action.txHash, (0, _extends7.default)({}, state[action.txHash], {
            status: 'success',
            receipt: action.receipt
        })));
    }

    if (action.type === 'TX_ERROR') {
        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, action.txHash, (0, _extends7.default)({}, state[action.txHash], {
            status: 'error',
            error: action.error
        })));
    }

    return state;
};

exports.default = transactionsReducer;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = [];

var transactionStackReducer = function transactionStackReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (action.type === 'PUSH_TO_TXSTACK') {
        state.push('');

        return [].concat((0, _toConsumableArray3.default)(state));
    }

    if (action.type === 'POP_FROM_TXSTACK') {
        state.pop();

        return [].concat((0, _toConsumableArray3.default)(state));
    }

    if (action.type === 'TX_BROADCASTED') {
        state[action.stackId] = action.txHash;

        return [].concat((0, _toConsumableArray3.default)(state));
    }

    return state;
};

exports.default = transactionStackReducer;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(14);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  status: ''
};

var web3Reducer = function web3Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === 'WEB3_INITIALIZING') {
    return (0, _extends3.default)({}, state, {
      status: 'initializing'
    });
  }

  if (action.type === 'WEB3_INITIALIZED') {
    return (0, _extends3.default)({}, state, {
      status: 'initialized'
    });
  }

  if (action.type === 'WEB3_FAILED') {
    return (0, _extends3.default)({}, state, {
      status: 'failed'
    });
  }

  if (action.type === 'NETWORK_ID_FETCHED') {
    return (0, _extends3.default)({}, state, {
      networkId: action.networkId
    });
  }

  if (action.type === 'NETWORK_ID_FAILED') {
    return (0, _extends3.default)({}, state, {
      networkId: action.networkId
    });
  }

  return state;
};

exports.default = web3Reducer;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _generateContractInitialState = __webpack_require__(82);

function generateContractsInitialState(options) {
  // Preloaded state
  var contractsInitialState = {};

  for (var i = 0; i < options.contracts.length; i++) {
    // Initial contract details
    var contractName = options.contracts[i].contractName;
    contractsInitialState[contractName] = (0, _generateContractInitialState.generateContractInitialState)(options.contracts[i]);
  }

  return contractsInitialState;
}

module.exports = generateContractsInitialState;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drizzleSagas = exports.drizzleReducers = exports.generateStore = exports.generateContractsInitialState = exports.Drizzle = undefined;

var _Drizzle = __webpack_require__(90);

var _Drizzle2 = _interopRequireDefault(_Drizzle);

var _generateStore = __webpack_require__(113);

var _generateStore2 = _interopRequireDefault(_generateStore);

var _generateContractsInitialState = __webpack_require__(88);

var _generateContractsInitialState2 = _interopRequireDefault(_generateContractsInitialState);

var _accountsReducer = __webpack_require__(79);

var _accountsReducer2 = _interopRequireDefault(_accountsReducer);

var _accountBalancesReducer = __webpack_require__(80);

var _accountBalancesReducer2 = _interopRequireDefault(_accountBalancesReducer);

var _contractsReducer = __webpack_require__(81);

var _contractsReducer2 = _interopRequireDefault(_contractsReducer);

var _drizzleStatusReducer = __webpack_require__(84);

var _drizzleStatusReducer2 = _interopRequireDefault(_drizzleStatusReducer);

var _transactionsReducer = __webpack_require__(85);

var _transactionsReducer2 = _interopRequireDefault(_transactionsReducer);

var _transactionStackReducer = __webpack_require__(86);

var _transactionStackReducer2 = _interopRequireDefault(_transactionStackReducer);

var _web3Reducer = __webpack_require__(87);

var _web3Reducer2 = _interopRequireDefault(_web3Reducer);

var _accountsSaga = __webpack_require__(44);

var _accountsSaga2 = _interopRequireDefault(_accountsSaga);

var _accountBalancesSaga = __webpack_require__(27);

var _accountBalancesSaga2 = _interopRequireDefault(_accountBalancesSaga);

var _blocksSaga = __webpack_require__(74);

var _blocksSaga2 = _interopRequireDefault(_blocksSaga);

var _contractsSaga = __webpack_require__(75);

var _contractsSaga2 = _interopRequireDefault(_contractsSaga);

var _drizzleStatusSaga = __webpack_require__(78);

var _drizzleStatusSaga2 = _interopRequireDefault(_drizzleStatusSaga);

var _web3Saga = __webpack_require__(48);

var _web3Saga2 = _interopRequireDefault(_web3Saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drizzleReducers = {
  accounts: _accountsReducer2.default,
  accountBalances: _accountBalancesReducer2.default,
  contracts: _contractsReducer2.default,
  drizzleStatus: _drizzleStatusReducer2.default,
  transactions: _transactionsReducer2.default,
  transactionStack: _transactionStackReducer2.default,
  web3: _web3Reducer2.default

  // Sagas
};

// Reducers


var drizzleSagas = [_accountsSaga2.default, _accountBalancesSaga2.default, _blocksSaga2.default, _contractsSaga2.default, _drizzleStatusSaga2.default, _web3Saga2.default];

exports.Drizzle = _Drizzle2.default;
exports.generateContractsInitialState = _generateContractsInitialState2.default;
exports.generateStore = _generateStore2.default;
exports.drizzleReducers = drizzleReducers;
exports.drizzleSagas = drizzleSagas;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(50);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(51);

var _createClass3 = _interopRequireDefault(_createClass2);

var _promise = __webpack_require__(93);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load as promise so that async Drizzle initialization can still resolve
var windowPromise = new _promise2.default(function (resolve, reject) {
  window.addEventListener('load', resolve);
});

var Drizzle = function () {
  function Drizzle(options, store) {
    var _this = this;

    (0, _classCallCheck3.default)(this, Drizzle);

    // Variables
    this.contracts = {};
    this.contractList = [];
    this.options = options;
    this.store = store;
    this.web3 = {};

    this.loadingContract = {};

    // Wait for window load event in case of injected web3.
    windowPromise.then(function () {
      // Begin Drizzle initialization.
      store.dispatch({ type: 'DRIZZLE_INITIALIZING', drizzle: _this, options: options });
    });
  }

  (0, _createClass3.default)(Drizzle, [{
    key: 'addContract',
    value: function addContract(contractConfig) {
      var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      this.store.dispatch({ type: 'ADD_CONTRACT', drizzle: this, contractConfig: contractConfig, events: events, web3: this.web3 });
    }
  }, {
    key: '_addContract',
    value: function _addContract(drizzleContract) {
      if (this.contracts[drizzleContract.contractName]) {
        throw 'Contract already exists: ' + drizzleContract.contractName;
      }
      this.contracts[drizzleContract.contractName] = drizzleContract;
      this.contractList.push(drizzleContract);
    }
  }, {
    key: 'findContractByAddress',
    value: function findContractByAddress(address) {
      return this.contractList.find(function (contract) {
        return contract.address.toLowerCase() === address.toLowerCase();
      });
    }
  }]);
  return Drizzle;
}();

exports.default = Drizzle;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(3).f });


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(33);
__webpack_require__(61);
__webpack_require__(104);
__webpack_require__(111);
__webpack_require__(112);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var defined = __webpack_require__(35);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(57);
var descriptor = __webpack_require__(17);
var setToStringTag = __webpack_require__(24);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(22);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(99);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(40);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(102);
var step = __webpack_require__(103);
var Iterators = __webpack_require__(18);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(21);
var global = __webpack_require__(0);
var ctx = __webpack_require__(15);
var classof = __webpack_require__(62);
var $export = __webpack_require__(4);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(20);
var anInstance = __webpack_require__(105);
var forOf = __webpack_require__(106);
var speciesConstructor = __webpack_require__(66);
var task = __webpack_require__(67).set;
var microtask = __webpack_require__(108)();
var newPromiseCapabilityModule = __webpack_require__(41);
var perform = __webpack_require__(68);
var promiseResolve = __webpack_require__(69);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(109)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(24)($Promise, PROMISE);
__webpack_require__(110)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(70)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(15);
var call = __webpack_require__(63);
var isArrayIter = __webpack_require__(64);
var anObject = __webpack_require__(5);
var toLength = __webpack_require__(36);
var getIterFn = __webpack_require__(65);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(67).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(19)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var dP = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(4);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(66);
var promiseResolve = __webpack_require__(69);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(41);
var perform = __webpack_require__(68);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _redux = __webpack_require__(71);

var _reduxSaga = __webpack_require__(25);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _rootSaga = __webpack_require__(114);

var _rootSaga2 = _interopRequireDefault(_rootSaga);

var _reducer = __webpack_require__(150);

var _reducer2 = _interopRequireDefault(_reducer);

var _generateContractsInitialState = __webpack_require__(88);

var _getAbi = __webpack_require__(83);

var _getAbi2 = _interopRequireDefault(_getAbi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateStore(options) {
  // Redux DevTools
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

  // Preloaded state
  var preloadedState = {
    contracts: (0, _generateContractsInitialState.generateContractsInitialState)(options)

    // create the saga middleware
  };var sagaMiddleware = (0, _reduxSaga2.default)();

  var store = (0, _redux.createStore)(_reducer2.default, preloadedState, composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware)));

  sagaMiddleware.run(_rootSaga2.default);

  return store;
}

module.exports = generateStore;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = root;

var _effects = __webpack_require__(11);

var _accountsSaga = __webpack_require__(44);

var _accountsSaga2 = _interopRequireDefault(_accountsSaga);

var _accountBalancesSaga = __webpack_require__(27);

var _accountBalancesSaga2 = _interopRequireDefault(_accountBalancesSaga);

var _blocksSaga = __webpack_require__(74);

var _blocksSaga2 = _interopRequireDefault(_blocksSaga);

var _contractsSaga = __webpack_require__(75);

var _contractsSaga2 = _interopRequireDefault(_contractsSaga);

var _drizzleStatusSaga = __webpack_require__(78);

var _drizzleStatusSaga2 = _interopRequireDefault(_drizzleStatusSaga);

var _web3Saga = __webpack_require__(48);

var _web3Saga2 = _interopRequireDefault(_web3Saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(root);

function root() {
  return _regenerator2.default.wrap(function root$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _effects.fork)(_accountsSaga2.default), (0, _effects.fork)(_accountBalancesSaga2.default), (0, _effects.fork)(_blocksSaga2.default), (0, _effects.fork)(_contractsSaga2.default), (0, _effects.fork)(_drizzleStatusSaga2.default), (0, _effects.fork)(_web3Saga2.default)]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(116);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export takeEvery */
/* unused harmony export takeLatest */
/* unused harmony export throttle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__takeEvery__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__takeLatest__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__throttle__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__takeEvery__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__takeLatest__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__throttle__["a"]; });






var deprecationWarning = function deprecationWarning(helperName) {
  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};

var takeEvery = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* deprecate */])(__WEBPACK_IMPORTED_MODULE_0__takeEvery__["a" /* default */], /*#__PURE__*/deprecationWarning('takeEvery'));
var takeLatest = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* deprecate */])(__WEBPACK_IMPORTED_MODULE_1__takeLatest__["a" /* default */], /*#__PURE__*/deprecationWarning('takeLatest'));
var throttle = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* deprecate */])(__WEBPACK_IMPORTED_MODULE_2__throttle__["a" /* default */], /*#__PURE__*/deprecationWarning('throttle'));



/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeEvery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(43);




function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["q" /* take */])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: __WEBPACK_IMPORTED_MODULE_1__io__["i" /* fork */].apply(undefined, [worker].concat(args, [ac])) };
  };

  var action = void 0,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["a" /* default */])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__["a" /* END */] ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["b" /* qEnd */]] : ['q1', yFork(action)];
    }
  }, 'q1', 'takeEvery(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["c" /* safeName */])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = asap;
/* unused harmony export suspend */
/* unused harmony export flush */
var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/
var semaphore = 0;

/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/
function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}

/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/
function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}

/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/
function suspend() {
  semaphore++;
}

/**
  Puts the scheduler in a `released` state.
**/
function release() {
  semaphore--;
}

/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/
function flush() {
  release();

  var task = void 0;
  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(43);




function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["q" /* take */])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: __WEBPACK_IMPORTED_MODULE_1__io__["i" /* fork */].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yCancel = function yCancel(task) {
    return { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["e" /* cancel */])(task) };
  };

  var task = void 0,
      action = void 0;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["a" /* default */])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__["a" /* END */] ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["b" /* qEnd */]] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["c" /* safeName */])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buffers__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(13);






function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action = void 0,
      channel = void 0;

  var yActionChannel = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["a" /* actionChannel */])(pattern, __WEBPACK_IMPORTED_MODULE_3__buffers__["a" /* buffers */].sliding(1)) };
  var yTake = function yTake() {
    return { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["q" /* take */])(channel) };
  };
  var yFork = function yFork(ac) {
    return { done: false, value: __WEBPACK_IMPORTED_MODULE_1__io__["i" /* fork */].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yDelay = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["d" /* call */])(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* delay */], delayLength) };

  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["a" /* default */])({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__["a" /* END */] ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["b" /* qEnd */]] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["c" /* safeName */])(pattern) + ', ' + worker.name + ')');
}

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_122__;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(125) });


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(45);
var pIE = __webpack_require__(29);
var toObject = __webpack_require__(40);
var IObject = __webpack_require__(59);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(16)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(128);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(15);
var $export = __webpack_require__(4);
var toObject = __webpack_require__(40);
var call = __webpack_require__(63);
var isArrayIter = __webpack_require__(64);
var toLength = __webpack_require__(36);
var createProperty = __webpack_require__(129);
var getIterFn = __webpack_require__(65);

$export($export.S + $export.F * !__webpack_require__(70)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3);
var createDesc = __webpack_require__(17);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(61);
module.exports = __webpack_require__(46).f('iterator');


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
__webpack_require__(54);
__webpack_require__(140);
__webpack_require__(141);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(56);
var META = __webpack_require__(135).KEY;
var $fails = __webpack_require__(16);
var shared = __webpack_require__(38);
var setToStringTag = __webpack_require__(24);
var uid = __webpack_require__(23);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(46);
var wksDefine = __webpack_require__(47);
var enumKeys = __webpack_require__(136);
var isArray = __webpack_require__(137);
var anObject = __webpack_require__(5);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(32);
var createDesc = __webpack_require__(17);
var _create = __webpack_require__(57);
var gOPNExt = __webpack_require__(138);
var $GOPD = __webpack_require__(139);
var $DP = __webpack_require__(3);
var $keys = __webpack_require__(22);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(77).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(29).f = $propertyIsEnumerable;
  __webpack_require__(45).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(21)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(23)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(9);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(16)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(45);
var pIE = __webpack_require__(29);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(19);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(77).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(29);
var createDesc = __webpack_require__(17);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(32);
var has = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(53);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47)('asyncIterator');


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47)('observable');


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(143);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(76);

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = __webpack_require__(28);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(50);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(51);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrizzleContract = function () {
  function DrizzleContract(web3Contract, web3, name, store) {
    var events = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    (0, _classCallCheck3.default)(this, DrizzleContract);

    this.abi = web3Contract.options.jsonInterface;
    this.address = web3Contract.options.address;
    this.web3 = web3;
    this.contractName = name;
    this.store = store;

    // Merge web3 contract instance into DrizzleContract instance.
    (0, _assign2.default)(this, web3Contract);

    for (var i = 0; i < this.abi.length; i++) {
      var item = this.abi[i];

      if (item.type == "function" && item.constant === true) {
        this.methods[item.name].cacheCall = this.cacheCallFunction(item.name, i);
      }

      if (item.type == "function" && item.constant === false) {
        this.methods[item.name].cacheSend = this.cacheSendFunction(item.name, i);
      }
    }

    // Register event listeners if any events.
    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        var eventName = events[i];

        store.dispatch({ type: 'LISTEN_FOR_EVENT', contract: this, eventName: eventName });
      }
    }
  }

  (0, _createClass3.default)(DrizzleContract, [{
    key: "cacheCallFunction",
    value: function cacheCallFunction(fnName, fnIndex, fn) {
      var contract = this;

      return function () {
        // Collect args and hash to use as key, 0x0 if no args
        var argsHash = '0x0';
        var args = arguments;

        if (args.length > 0) {
          argsHash = contract.generateArgsHash(args);
        }
        var contractName = contract.contractName;
        var functionState = contract.store.getState().contracts[contractName][fnName];

        // If call result is in state and fresh, return value instead of calling
        if (argsHash in functionState) {
          if (contract.store.getState().contracts[contractName].synced === true) {
            return argsHash;
          }
        }

        // Otherwise, call function and update store
        contract.store.dispatch({ type: 'CALL_CONTRACT_FN', contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, argsHash: argsHash });

        // Return nothing because state is currently empty.
        return argsHash;
      };
    }
  }, {
    key: "cacheSendFunction",
    value: function cacheSendFunction(fnName, fnIndex, fn) {
      // NOTE: May not need fn index
      var contract = this;

      return function () {
        var args = arguments;

        // Generate temporary ID
        var stackId = contract.store.getState().transactionStack.length;

        // Add ID to "transactionStack" with empty value
        contract.store.dispatch({ type: 'PUSH_TO_STACK' });

        // Dispatch tx to saga
        // When txhash received, will be value of stack ID
        contract.store.dispatch({ type: 'SEND_CONTRACT_TX', contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, stackId: stackId });

        // return stack ID
        return stackId;
      };
    }
  }, {
    key: "generateArgsHash",
    value: function generateArgsHash(args) {
      var web3 = this.web3;
      var hashString = '';

      for (var i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'function') {
          var argToHash = args[i];

          // Stringify objects to allow hashing
          if ((typeof argToHash === "undefined" ? "undefined" : (0, _typeof3.default)(argToHash)) === 'object') {
            argToHash = (0, _stringify2.default)(argToHash);
          }

          // Convert number to strong to allow hashing
          if (typeof argToHash === 'number') {
            argToHash = argToHash.toString();
          }

          // This check is in place for web3 v0.x
          if ('utils' in web3) {
            var hashPiece = web3.utils.sha3(argToHash);
          } else {
            var hashPiece = web3.sha3(argToHash);
          }

          hashString += hashPiece;
        }
      }

      return web3.utils.sha3(hashString);
    }
  }]);
  return DrizzleContract;
}();

exports.default = DrizzleContract;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultOptions = {
  web3: {
    // `block` no longer needed;
    // keeping for pre-v1.1.1 compatibility with drizzle-react.
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [],
  events: {},
  polls: {
    blocks: 3000
  }
};

exports.default = defaultOptions;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (defaultOptions, newOptions) {
  return (0, _deepmerge2.default)(defaultOptions, newOptions, {
    isMergeableObject: isPlainObject
  });
};

var _deepmerge = __webpack_require__(147);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isPlainObject = __webpack_require__(148);

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_147__;

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_148__;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_149__;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(71);

var _accountsReducer = __webpack_require__(79);

var _accountsReducer2 = _interopRequireDefault(_accountsReducer);

var _accountBalancesReducer = __webpack_require__(80);

var _accountBalancesReducer2 = _interopRequireDefault(_accountBalancesReducer);

var _contractsReducer = __webpack_require__(81);

var _contractsReducer2 = _interopRequireDefault(_contractsReducer);

var _drizzleStatusReducer = __webpack_require__(84);

var _drizzleStatusReducer2 = _interopRequireDefault(_drizzleStatusReducer);

var _transactionsReducer = __webpack_require__(85);

var _transactionsReducer2 = _interopRequireDefault(_transactionsReducer);

var _transactionStackReducer = __webpack_require__(86);

var _transactionStackReducer2 = _interopRequireDefault(_transactionStackReducer);

var _web3Reducer = __webpack_require__(87);

var _web3Reducer2 = _interopRequireDefault(_web3Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  accounts: _accountsReducer2.default,
  accountBalances: _accountBalancesReducer2.default,
  contracts: _contractsReducer2.default,
  drizzleStatus: _drizzleStatusReducer2.default,
  transactions: _transactionsReducer2.default,
  transactionStack: _transactionStackReducer2.default,
  web3: _web3Reducer2.default
});

exports.default = reducer;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0OGRhOWYxMGM1YTM5ZTk3ZjVmZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9zYWdhSGVscGVycy9mc21JdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9hY2NvdW50c1NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy93ZWIzL3dlYjNTYWdhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvYnVmZmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Jsb2Nrc1NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyYWN0cy9jb250cmFjdHNTYWdhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL2FjY291bnRzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyYWN0cy9jb250cmFjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZXRBYmkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYjMvd2ViM1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJpenpsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9vdFNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9zYWdhSGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9zYWdhSGVscGVycy90YWtlRXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rha2VMYXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXRoLWJsb2NrLXRyYWNrZXItZXM1XCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9Ecml6emxlQ29udHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9kZWZhdWx0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVyZ2VPcHRpb25zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRlZXBtZXJnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzLXBsYWluLW9iamVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJnZXRBY2NvdW50QmFsYW5jZXMiLCJhY2NvdW50QmFsYW5jZXNTYWdhIiwiYWN0aW9uIiwiZ2V0QWNjb3VudHNTdGF0ZSIsImFjY291bnRzIiwid2ViMyIsImNvbnNvbGUiLCJlcnJvciIsImkiLCJhY2NvdW50IiwiZXRoIiwiZ2V0QmFsYW5jZSIsImFjY291bnRCYWxhbmNlIiwidHlwZSIsInN0YXRlIiwiZ2V0QWNjb3VudHMiLCJjcmVhdGVBY2NvdW50c1BvbGxDaGFubmVsIiwiY2FsbENyZWF0ZUFjY291bnRzUG9sbENoYW5uZWwiLCJhY2NvdW50c1NhZ2EiLCJpbnRlcnZhbCIsInBlcnNpc3RlZFdlYjMiLCJhY2NvdW50c1BvbGxlciIsInNldEludGVydmFsIiwiZW1pdCIsInVuc3Vic2NyaWJlIiwiY2xlYXJJbnRlcnZhbCIsImFjY291bnRzQ2hhbm5lbCIsImV2ZW50IiwiY2xvc2UiLCJpbml0aWFsaXplV2ViMyIsImdldE5ldHdvcmtJZCIsImNhbGxJbml0aWFsaXplV2ViMyIsImNhbGxTZW5kVHgiLCJ3ZWIzU2FnYSIsIldlYjMiLCJyZXF1aXJlIiwib3B0aW9ucyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsImNhY2hlU2VuZFRyYW5zYWN0aW9uIiwidHhPYmplY3QiLCJzdGFja0lkIiwibG9nIiwiZmFsbGJhY2siLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYnNvY2tldFByb3ZpZGVyIiwidXJsIiwic3RvcmUiLCJkaXNwYXRjaCIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiY3JlYXRlVHhDaGFubmVsIiwicGVyc2lzdFR4SGFzaCIsImV2ZW50Q2hhbm5lbCIsInR4UHJvbWlFdmVudCIsInNlbmRUcmFuc2FjdGlvbiIsIm9uIiwidHhIYXNoIiwiY29uZmlybWF0aW9uTnVtYmVyIiwicmVjZWlwdCIsImNvbmZpcm1hdGlvblJlY2VpcHQiLCJFTkQiLCJvZmYiLCJ0eENoYW5uZWwiLCJ0YWtlIiwiY2FsbENyZWF0ZUJsb2NrQ2hhbm5lbCIsImNhbGxDcmVhdGVCbG9ja1BvbGxDaGFubmVsIiwicHJvY2Vzc0Jsb2NrSGVhZGVyIiwicHJvY2Vzc0Jsb2NrIiwiYmxvY2tzU2FnYSIsIkJsb2NrVHJhY2tlciIsImNyZWF0ZUJsb2NrQ2hhbm5lbCIsImRyaXp6bGUiLCJibG9ja0V2ZW50cyIsInN1YnNjcmliZSIsInJlc3VsdCIsImJsb2NrSGVhZGVyIiwiYmxvY2tDaGFubmVsIiwiY3JlYXRlQmxvY2tQb2xsQ2hhbm5lbCIsImJsb2NrVHJhY2tlciIsInBvbGxpbmdJbnRlcnZhbCIsImJsb2NrIiwic3RhcnQiLCJjYXRjaCIsInN0b3AiLCJibG9ja051bWJlciIsIm51bWJlciIsImdldEJsb2NrIiwidHhzIiwidHJhbnNhY3Rpb25zIiwibGVuZ3RoIiwiZnJvbSIsImZyb21Db250cmFjdCIsImZpbmRDb250cmFjdEJ5QWRkcmVzcyIsInRvTG93ZXJDYXNlIiwiY29udHJhY3QiLCJ0byIsInRvQ29udHJhY3QiLCJhZGRDb250cmFjdCIsImluc3RhbnRpYXRlV2ViM0NvbnRyYWN0IiwiaW5zdGFudGlhdGVDb250cmFjdCIsImNhbGxMaXN0ZW5Gb3JDb250cmFjdEV2ZW50IiwiY2FsbFNlbmRDb250cmFjdFR4IiwiY2FsbENhbGxDb250cmFjdEZuIiwiY2FsbFN5bmNDb250cmFjdCIsImNvbnRyYWN0c1NhZ2EiLCJjb250cmFjdENvbmZpZyIsImV2ZW50cyIsImxvYWRpbmdDb250cmFjdCIsImNvbnRyYWN0TmFtZSIsImRyaXp6bGVDb250cmFjdCIsIndlYjNDb250cmFjdCIsIm5hbWUiLCJjb250cmFjdEFydGlmYWN0IiwiX2FkZENvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJuZXR3b3JrcyIsImFkZHJlc3MiLCJnZXRTdGF0ZSIsImRhdGEiLCJkZXBsb3llZEJ5dGVjb2RlIiwiY3JlYXRlQ29udHJhY3RFdmVudENoYW5uZWwiLCJldmVudE5hbWUiLCJldmVudExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJjb250cmFjdEV2ZW50Q2hhbm5lbCIsInNlbmRBcmdzIiwic2VuZCIsImZuTmFtZSIsImZuSW5kZXgiLCJhcmdzIiwiZmluYWxBcmciLCJmaW5hbEFyZ1Rlc3QiLCJpc1NlbmRPckNhbGxPcHRpb25zIiwibWV0aG9kcyIsImFyZ3NIYXNoIiwic3luYyIsImNhbGxBcmdzIiwiY2FsbCIsImNhbGxSZXN1bHQiLCJkaXNwYXRjaEFyZ3MiLCJ2YXJpYWJsZSIsInZhbHVlIiwiZXJyb3JBcmdzIiwiZ2V0Q29udHJhY3RzU3RhdGUiLCJjb250cmFjdHNTdGF0ZSIsImNvbnRyYWN0Rm5zU3RhdGUiLCJpbml0aWFsaXplZCIsInN5bmNlZCIsImNvbnRyYWN0cyIsImluaXRpYWxpemVEcml6emxlIiwiZHJpenpsZVN0YXR1c1NhZ2EiLCJ3ZWIzT3B0aW9ucyIsImlzTWV0YU1hc2siLCJwb2xscyIsImJsb2NrcyIsImluaXRpYWxTdGF0ZSIsImFjY291bnRzUmVkdWNlciIsImFjY291bnRCYWxhbmNlc1JlZHVjZXIiLCJjb250cmFjdHNSZWR1Y2VyIiwiZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSIsImkyIiwiaXRlbSIsImNvbnN0YW50IiwiZ2V0QWJpIiwiY29udHJhY3RFbnRyeSIsImpzb25JbnRlcmZhY2UiLCJkcml6emxlU3RhdHVzUmVkdWNlciIsInRyYW5zYWN0aW9uc1JlZHVjZXIiLCJzdGF0dXMiLCJjb25maXJtYXRpb25zIiwidHJhbnNhY3Rpb25TdGFja1JlZHVjZXIiLCJwdXNoIiwicG9wIiwid2ViM1JlZHVjZXIiLCJnZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZSIsImNvbnRyYWN0c0luaXRpYWxTdGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkcml6emxlUmVkdWNlcnMiLCJhY2NvdW50QmFsYW5jZXMiLCJkcml6emxlU3RhdHVzIiwidHJhbnNhY3Rpb25TdGFjayIsImRyaXp6bGVTYWdhcyIsIkRyaXp6bGUiLCJnZW5lcmF0ZVN0b3JlIiwid2luZG93UHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udHJhY3RMaXN0IiwidGhlbiIsImZpbmQiLCJjb21wb3NlRW5oYW5jZXJzIiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwicHJlbG9hZGVkU3RhdGUiLCJzYWdhTWlkZGxld2FyZSIsInJ1biIsInJvb3QiLCJEcml6emxlQ29udHJhY3QiLCJjYWNoZUNhbGwiLCJjYWNoZUNhbGxGdW5jdGlvbiIsImNhY2hlU2VuZCIsImNhY2hlU2VuZEZ1bmN0aW9uIiwiZm4iLCJhcmd1bWVudHMiLCJnZW5lcmF0ZUFyZ3NIYXNoIiwiZnVuY3Rpb25TdGF0ZSIsImhhc2hTdHJpbmciLCJhcmdUb0hhc2giLCJ0b1N0cmluZyIsImhhc2hQaWVjZSIsInV0aWxzIiwic2hhMyIsImRlZmF1bHRPcHRpb25zIiwibmV3T3B0aW9ucyIsImlzTWVyZ2VhYmxlT2JqZWN0IiwiaXNQbGFpbk9iamVjdCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxP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QTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7QUN2TGhCOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FB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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FB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QU87QUFDTEMsWUFBUTtBQURIO0FBWmMsQ0FBdkI7O2tCQWlCZTJELGM7Ozs7Ozs7Ozs7Ozs7a0JDZEEsVUFBVUEsY0FBVixFQUEwQkMsVUFBMUIsRUFBc0M7QUFDbkQsU0FBTyx5QkFBTUQsY0FBTixFQUFzQkMsVUFBdEIsRUFBa0M7QUFDdkNDLHVCQUFtQkM7QUFEb0IsR0FBbEMsQ0FBUDtBQUdELEM7O0FBUEQ7Ozs7OztBQUNBLElBQU1BLGdCQUFnQixtQkFBQXpMLENBQVEsR0FBUixDQUF0QixDOzs7Ozs7QUNEQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0wTCxVQUFVLDRCQUFnQjtBQUM5QnpOLHFDQUQ4QjtBQUU5Qm1MLG1EQUY4QjtBQUc5Qi9CLHVDQUg4QjtBQUk5QmdDLCtDQUo4QjtBQUs5QjdGLDZDQUw4QjtBQU05QjhGLHFEQU44QjtBQU85QnBMO0FBUDhCLENBQWhCLENBQWhCOztrQkFVZXdOLE8iLCJmaWxlIjoiZHJpenpsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlZHV4LXNhZ2FcIiksIHJlcXVpcmUoXCJyZWR1eFwiKSwgcmVxdWlyZShcImV0aC1ibG9jay10cmFja2VyLWVzNVwiKSwgcmVxdWlyZShcImRlZXBtZXJnZVwiKSwgcmVxdWlyZShcImlzLXBsYWluLW9iamVjdFwiKSwgcmVxdWlyZShcIndlYjNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVkdXgtc2FnYVwiLCBcInJlZHV4XCIsIFwiZXRoLWJsb2NrLXRyYWNrZXItZXM1XCIsIFwiZGVlcG1lcmdlXCIsIFwiaXMtcGxhaW4tb2JqZWN0XCIsIFwid2ViM1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkcml6emxlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVkdXgtc2FnYVwiKSwgcmVxdWlyZShcInJlZHV4XCIpLCByZXF1aXJlKFwiZXRoLWJsb2NrLXRyYWNrZXItZXM1XCIpLCByZXF1aXJlKFwiZGVlcG1lcmdlXCIpLCByZXF1aXJlKFwiaXMtcGxhaW4tb2JqZWN0XCIpLCByZXF1aXJlKFwid2ViM1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpenpsZVwiXSA9IGZhY3Rvcnkocm9vdFtcInJlZHV4LXNhZ2FcIl0sIHJvb3RbXCJyZWR1eFwiXSwgcm9vdFtcImV0aC1ibG9jay10cmFja2VyLWVzNVwiXSwgcm9vdFtcImRlZXBtZXJnZVwiXSwgcm9vdFtcImlzLXBsYWluLW9iamVjdFwiXSwgcm9vdFtcIndlYjNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83MV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0N19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0OF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0OV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDg5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0OGRhOWYxMGM1YTM5ZTk3ZjVmZiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjMnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGtleSBpbiBleHBvcnRzKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0IHZhciBzeW0gPSBmdW5jdGlvbiBzeW0oaWQpIHtcbiAgcmV0dXJuICdAQHJlZHV4LXNhZ2EvJyArIGlkO1xufTtcblxuZXhwb3J0IHZhciBUQVNLID0gc3ltKCdUQVNLJyk7XG5leHBvcnQgdmFyIEhFTFBFUiA9IHN5bSgnSEVMUEVSJyk7XG5leHBvcnQgdmFyIE1BVENIID0gc3ltKCdNQVRDSCcpO1xuZXhwb3J0IHZhciBDQU5DRUwgPSBzeW0oJ0NBTkNFTF9QUk9NSVNFJyk7XG5leHBvcnQgdmFyIFNBR0FfQUNUSU9OID0gc3ltKCdTQUdBX0FDVElPTicpO1xuZXhwb3J0IHZhciBTRUxGX0NBTkNFTExBVElPTiA9IHN5bSgnU0VMRl9DQU5DRUxMQVRJT04nKTtcbmV4cG9ydCB2YXIga29uc3QgPSBmdW5jdGlvbiBrb25zdCh2KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuZXhwb3J0IHZhciBrVHJ1ZSA9IGtvbnN0KHRydWUpO1xuZXhwb3J0IHZhciBrRmFsc2UgPSBrb25zdChmYWxzZSk7XG5leHBvcnQgdmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5leHBvcnQgdmFyIGlkZW50ID0gZnVuY3Rpb24gaWRlbnQodikge1xuICByZXR1cm4gdjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVjayh2YWx1ZSwgcHJlZGljYXRlLCBlcnJvcikge1xuICBpZiAoIXByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICBsb2coJ2Vycm9yJywgJ3VuY2F1Z2h0IGF0IGNoZWNrJywgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gIH1cbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24ob2JqZWN0LCBwcm9wZXJ0eSkge1xuICByZXR1cm4gaXMubm90VW5kZWYob2JqZWN0KSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xufVxuXG5leHBvcnQgdmFyIGlzID0ge1xuICB1bmRlZjogZnVuY3Rpb24gdW5kZWYodikge1xuICAgIHJldHVybiB2ID09PSBudWxsIHx8IHYgPT09IHVuZGVmaW5lZDtcbiAgfSxcbiAgbm90VW5kZWY6IGZ1bmN0aW9uIG5vdFVuZGVmKHYpIHtcbiAgICByZXR1cm4gdiAhPT0gbnVsbCAmJiB2ICE9PSB1bmRlZmluZWQ7XG4gIH0sXG4gIGZ1bmM6IGZ1bmN0aW9uIGZ1bmMoZikge1xuICAgIHJldHVybiB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJztcbiAgfSxcbiAgbnVtYmVyOiBmdW5jdGlvbiBudW1iZXIobikge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcic7XG4gIH0sXG4gIHN0cmluZzogZnVuY3Rpb24gc3RyaW5nKHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHMgPT09ICdzdHJpbmcnO1xuICB9LFxuICBhcnJheTogQXJyYXkuaXNBcnJheSxcbiAgb2JqZWN0OiBmdW5jdGlvbiBvYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiAhaXMuYXJyYXkob2JqKSAmJiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgPT09ICdvYmplY3QnO1xuICB9LFxuICBwcm9taXNlOiBmdW5jdGlvbiBwcm9taXNlKHApIHtcbiAgICByZXR1cm4gcCAmJiBpcy5mdW5jKHAudGhlbik7XG4gIH0sXG4gIGl0ZXJhdG9yOiBmdW5jdGlvbiBpdGVyYXRvcihpdCkge1xuICAgIHJldHVybiBpdCAmJiBpcy5mdW5jKGl0Lm5leHQpICYmIGlzLmZ1bmMoaXQudGhyb3cpO1xuICB9LFxuICBpdGVyYWJsZTogZnVuY3Rpb24gaXRlcmFibGUoaXQpIHtcbiAgICByZXR1cm4gaXQgJiYgaXMuZnVuYyhTeW1ib2wpID8gaXMuZnVuYyhpdFtTeW1ib2wuaXRlcmF0b3JdKSA6IGlzLmFycmF5KGl0KTtcbiAgfSxcbiAgdGFzazogZnVuY3Rpb24gdGFzayh0KSB7XG4gICAgcmV0dXJuIHQgJiYgdFtUQVNLXTtcbiAgfSxcbiAgb2JzZXJ2YWJsZTogZnVuY3Rpb24gb2JzZXJ2YWJsZShvYikge1xuICAgIHJldHVybiBvYiAmJiBpcy5mdW5jKG9iLnN1YnNjcmliZSk7XG4gIH0sXG4gIGJ1ZmZlcjogZnVuY3Rpb24gYnVmZmVyKGJ1Zikge1xuICAgIHJldHVybiBidWYgJiYgaXMuZnVuYyhidWYuaXNFbXB0eSkgJiYgaXMuZnVuYyhidWYudGFrZSkgJiYgaXMuZnVuYyhidWYucHV0KTtcbiAgfSxcbiAgcGF0dGVybjogZnVuY3Rpb24gcGF0dGVybihwYXQpIHtcbiAgICByZXR1cm4gcGF0ICYmIChpcy5zdHJpbmcocGF0KSB8fCAodHlwZW9mIHBhdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0KSkgPT09ICdzeW1ib2wnIHx8IGlzLmZ1bmMocGF0KSB8fCBpcy5hcnJheShwYXQpKTtcbiAgfSxcbiAgY2hhbm5lbDogZnVuY3Rpb24gY2hhbm5lbChjaCkge1xuICAgIHJldHVybiBjaCAmJiBpcy5mdW5jKGNoLnRha2UpICYmIGlzLmZ1bmMoY2guY2xvc2UpO1xuICB9LFxuICBoZWxwZXI6IGZ1bmN0aW9uIGhlbHBlcihpdCkge1xuICAgIHJldHVybiBpdCAmJiBpdFtIRUxQRVJdO1xuICB9LFxuICBzdHJpbmdhYmxlRnVuYzogZnVuY3Rpb24gc3RyaW5nYWJsZUZ1bmMoZikge1xuICAgIHJldHVybiBpcy5mdW5jKGYpICYmIGhhc093bihmLCAndG9TdHJpbmcnKTtcbiAgfVxufTtcblxuZXhwb3J0IHZhciBvYmplY3QgPSB7XG4gIGFzc2lnbjogZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yICh2YXIgaSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChoYXNPd24oc291cmNlLCBpKSkge1xuICAgICAgICB0YXJnZXRbaV0gPSBzb3VyY2VbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKGFycmF5LCBpdGVtKSB7XG4gIHZhciBpbmRleCA9IGFycmF5LmluZGV4T2YoaXRlbSk7XG4gIGlmIChpbmRleCA+PSAwKSB7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIGFycmF5ID0ge1xuICBmcm9tOiBmdW5jdGlvbiBmcm9tKG9iaikge1xuICAgIHZhciBhcnIgPSBBcnJheShvYmoubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgaWYgKGhhc093bihvYmosIGkpKSB7XG4gICAgICAgIGFycltpXSA9IG9ialtpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVycmVkKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBkZWYgPSBfZXh0ZW5kcyh7fSwgcHJvcHMpO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgZGVmLnJlamVjdCA9IHJlamVjdDtcbiAgfSk7XG4gIGRlZi5wcm9taXNlID0gcHJvbWlzZTtcbiAgcmV0dXJuIGRlZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5T2ZEZWZmZXJlZChsZW5ndGgpIHtcbiAgdmFyIGFyciA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYXJyLnB1c2goZGVmZXJyZWQoKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gIHZhciB2YWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cbiAgdmFyIHRpbWVvdXRJZCA9IHZvaWQgMDtcbiAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlc29sdmUodmFsKTtcbiAgICB9LCBtcyk7XG4gIH0pO1xuXG4gIHByb21pc2VbQ0FOQ0VMXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gIH07XG5cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2NrVGFzaygpIHtcbiAgdmFyIF9yZWY7XG5cbiAgdmFyIHJ1bm5pbmcgPSB0cnVlO1xuICB2YXIgX3Jlc3VsdCA9IHZvaWQgMCxcbiAgICAgIF9lcnJvciA9IHZvaWQgMDtcblxuICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW1RBU0tdID0gdHJ1ZSwgX3JlZi5pc1J1bm5pbmcgPSBmdW5jdGlvbiBpc1J1bm5pbmcoKSB7XG4gICAgcmV0dXJuIHJ1bm5pbmc7XG4gIH0sIF9yZWYucmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCkge1xuICAgIHJldHVybiBfcmVzdWx0O1xuICB9LCBfcmVmLmVycm9yID0gZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgcmV0dXJuIF9lcnJvcjtcbiAgfSwgX3JlZi5zZXRSdW5uaW5nID0gZnVuY3Rpb24gc2V0UnVubmluZyhiKSB7XG4gICAgcmV0dXJuIHJ1bm5pbmcgPSBiO1xuICB9LCBfcmVmLnNldFJlc3VsdCA9IGZ1bmN0aW9uIHNldFJlc3VsdChyKSB7XG4gICAgcmV0dXJuIF9yZXN1bHQgPSByO1xuICB9LCBfcmVmLnNldEVycm9yID0gZnVuY3Rpb24gc2V0RXJyb3IoZSkge1xuICAgIHJldHVybiBfZXJyb3IgPSBlO1xuICB9LCBfcmVmO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b0luYygpIHtcbiAgdmFyIHNlZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKytzZWVkO1xuICB9O1xufVxuXG5leHBvcnQgdmFyIHVpZCA9IGF1dG9JbmMoKTtcblxudmFyIGtUaHJvdyA9IGZ1bmN0aW9uIGtUaHJvdyhlcnIpIHtcbiAgdGhyb3cgZXJyO1xufTtcbnZhciBrUmV0dXJuID0gZnVuY3Rpb24ga1JldHVybih2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IHRydWUgfTtcbn07XG5leHBvcnQgZnVuY3Rpb24gbWFrZUl0ZXJhdG9yKG5leHQpIHtcbiAgdmFyIHRocm8gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGtUaHJvdztcbiAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcnO1xuICB2YXIgaXNIZWxwZXIgPSBhcmd1bWVudHNbM107XG5cbiAgdmFyIGl0ZXJhdG9yID0geyBuYW1lOiBuYW1lLCBuZXh0OiBuZXh0LCB0aHJvdzogdGhybywgcmV0dXJuOiBrUmV0dXJuIH07XG5cbiAgaWYgKGlzSGVscGVyKSB7XG4gICAgaXRlcmF0b3JbSEVMUEVSXSA9IHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9O1xuICB9XG4gIHJldHVybiBpdGVyYXRvcjtcbn1cblxuLyoqXG4gIFByaW50IGVycm9yIGluIGEgdXNlZnVsIHdheSB3aGV0aGVyIGluIGEgYnJvd3NlciBlbnZpcm9ubWVudFxuICAod2l0aCBleHBhbmRhYmxlIGVycm9yIHN0YWNrIHRyYWNlcyksIG9yIGluIGEgbm9kZS5qcyBlbnZpcm9ubWVudFxuICAodGV4dC1vbmx5IGxvZyBvdXRwdXQpXG4gKiovXG5leHBvcnQgZnVuY3Rpb24gbG9nKGxldmVsLCBtZXNzYWdlKSB7XG4gIHZhciBlcnJvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJyc7XG5cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlKi9cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5sb2coJ3JlZHV4LXNhZ2EgJyArIGxldmVsICsgJzogJyArIG1lc3NhZ2UgKyAnXFxuJyArIChlcnJvciAmJiBlcnJvci5zdGFjayB8fCBlcnJvcikpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGVbbGV2ZWxdKG1lc3NhZ2UsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVwcmVjYXRlKGZuLCBkZXByZWNhdGlvbldhcm5pbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIGxvZygnd2FybicsIGRlcHJlY2F0aW9uV2FybmluZyk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciB1cGRhdGVJbmNlbnRpdmUgPSBmdW5jdGlvbiB1cGRhdGVJbmNlbnRpdmUoZGVwcmVjYXRlZCwgcHJlZmVycmVkKSB7XG4gIHJldHVybiBkZXByZWNhdGVkICsgJyBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mICcgKyBwcmVmZXJyZWQgKyAnLCBwbGVhc2UgdXBkYXRlIHlvdXIgY29kZSc7XG59O1xuXG5leHBvcnQgdmFyIGludGVybmFsRXJyID0gZnVuY3Rpb24gaW50ZXJuYWxFcnIoZXJyKSB7XG4gIHJldHVybiBuZXcgRXJyb3IoJ1xcbiAgcmVkdXgtc2FnYTogRXJyb3IgY2hlY2tpbmcgaG9va3MgZGV0ZWN0ZWQgYW4gaW5jb25zaXN0ZW50IHN0YXRlLiBUaGlzIGlzIGxpa2VseSBhIGJ1Z1xcbiAgaW4gcmVkdXgtc2FnYSBjb2RlIGFuZCBub3QgeW91cnMuIFRoYW5rcyBmb3IgcmVwb3J0aW5nIHRoaXMgaW4gdGhlIHByb2plY3RcXCdzIGdpdGh1YiByZXBvLlxcbiAgRXJyb3I6ICcgKyBlcnIgKyAnXFxuJyk7XG59O1xuXG5leHBvcnQgdmFyIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nID0gZnVuY3Rpb24gY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcoY3R4LCBwcm9wcykge1xuICByZXR1cm4gKGN0eCA/IGN0eCArICcuJyA6ICcnKSArICdzZXRDb250ZXh0KHByb3BzKTogYXJndW1lbnQgJyArIHByb3BzICsgJyBpcyBub3QgYSBwbGFpbiBvYmplY3QnO1xufTtcblxuZXhwb3J0IHZhciB3cmFwU2FnYURpc3BhdGNoID0gZnVuY3Rpb24gd3JhcFNhZ2FEaXNwYXRjaChkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBkaXNwYXRjaChPYmplY3QuZGVmaW5lUHJvcGVydHkoYWN0aW9uLCBTQUdBX0FDVElPTiwgeyB2YWx1ZTogdHJ1ZSB9KSk7XG4gIH07XG59O1xuXG5leHBvcnQgdmFyIGNsb25lYWJsZUdlbmVyYXRvciA9IGZ1bmN0aW9uIGNsb25lYWJsZUdlbmVyYXRvcihnZW5lcmF0b3JGdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGhpc3RvcnkgPSBbXTtcbiAgICB2YXIgZ2VuID0gZ2VuZXJhdG9yRnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KGFyZykge1xuICAgICAgICBoaXN0b3J5LnB1c2goYXJnKTtcbiAgICAgICAgcmV0dXJuIGdlbi5uZXh0KGFyZyk7XG4gICAgICB9LFxuICAgICAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgICB2YXIgY2xvbmVkR2VuID0gY2xvbmVhYmxlR2VuZXJhdG9yKGdlbmVyYXRvckZ1bmMpLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgIGhpc3RvcnkuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgcmV0dXJuIGNsb25lZEdlbi5uZXh0KGFyZyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2xvbmVkR2VuO1xuICAgICAgfSxcbiAgICAgIHJldHVybjogZnVuY3Rpb24gX3JldHVybih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZ2VuLnJldHVybih2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgdGhyb3c6IGZ1bmN0aW9uIF90aHJvdyhleGNlcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIGdlbi50aHJvdyhleGNlcHRpb24pO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI1X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHN5bSwgaXMsIGlkZW50LCBjaGVjaywgZGVwcmVjYXRlLCB1cGRhdGVJbmNlbnRpdmUsIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nLCBTRUxGX0NBTkNFTExBVElPTiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgdGFrZUV2ZXJ5SGVscGVyLCB0YWtlTGF0ZXN0SGVscGVyLCB0aHJvdHRsZUhlbHBlciB9IGZyb20gJy4vc2FnYUhlbHBlcnMnO1xuXG52YXIgSU8gPSBzeW0oJ0lPJyk7XG52YXIgVEFLRSA9ICdUQUtFJztcbnZhciBQVVQgPSAnUFVUJztcbnZhciBBTEwgPSAnQUxMJztcbnZhciBSQUNFID0gJ1JBQ0UnO1xudmFyIENBTEwgPSAnQ0FMTCc7XG52YXIgQ1BTID0gJ0NQUyc7XG52YXIgRk9SSyA9ICdGT1JLJztcbnZhciBKT0lOID0gJ0pPSU4nO1xudmFyIENBTkNFTCA9ICdDQU5DRUwnO1xudmFyIFNFTEVDVCA9ICdTRUxFQ1QnO1xudmFyIEFDVElPTl9DSEFOTkVMID0gJ0FDVElPTl9DSEFOTkVMJztcbnZhciBDQU5DRUxMRUQgPSAnQ0FOQ0VMTEVEJztcbnZhciBGTFVTSCA9ICdGTFVTSCc7XG52YXIgR0VUX0NPTlRFWFQgPSAnR0VUX0NPTlRFWFQnO1xudmFyIFNFVF9DT05URVhUID0gJ1NFVF9DT05URVhUJztcblxudmFyIFRFU1RfSElOVCA9ICdcXG4oSElOVDogaWYgeW91IGFyZSBnZXR0aW5nIHRoaXMgZXJyb3JzIGluIHRlc3RzLCBjb25zaWRlciB1c2luZyBjcmVhdGVNb2NrVGFzayBmcm9tIHJlZHV4LXNhZ2EvdXRpbHMpJztcblxudmFyIGVmZmVjdCA9IGZ1bmN0aW9uIGVmZmVjdCh0eXBlLCBwYXlsb2FkKSB7XG4gIHZhciBfcmVmO1xuXG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbSU9dID0gdHJ1ZSwgX3JlZlt0eXBlXSA9IHBheWxvYWQsIF9yZWY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGFrZSgpIHtcbiAgdmFyIHBhdHRlcm5PckNoYW5uZWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcqJztcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNoZWNrKGFyZ3VtZW50c1swXSwgaXMubm90VW5kZWYsICd0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBwYXR0ZXJuT3JDaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICB9XG4gIGlmIChpcy5wYXR0ZXJuKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIGVmZmVjdChUQUtFLCB7IHBhdHRlcm46IHBhdHRlcm5PckNoYW5uZWwgfSk7XG4gIH1cbiAgaWYgKGlzLmNoYW5uZWwocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gZWZmZWN0KFRBS0UsIHsgY2hhbm5lbDogcGF0dGVybk9yQ2hhbm5lbCB9KTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ3Rha2UocGF0dGVybk9yQ2hhbm5lbCk6IGFyZ3VtZW50ICcgKyBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbCkgKyAnIGlzIG5vdCB2YWxpZCBjaGFubmVsIG9yIGEgdmFsaWQgcGF0dGVybicpO1xufVxuXG50YWtlLm1heWJlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWZmID0gdGFrZS5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIGVmZltUQUtFXS5tYXliZSA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuXG5leHBvcnQgdmFyIHRha2VtID0gLyojX19QVVJFX18qL2RlcHJlY2F0ZSh0YWtlLm1heWJlLCAvKiNfX1BVUkVfXyovdXBkYXRlSW5jZW50aXZlKCd0YWtlbScsICd0YWtlLm1heWJlJykpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHV0KGNoYW5uZWwsIGFjdGlvbikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBjaGVjayhjaGFubmVsLCBpcy5ub3RVbmRlZiwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBjaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICAgIGNoZWNrKGNoYW5uZWwsIGlzLmNoYW5uZWwsICdwdXQoY2hhbm5lbCwgYWN0aW9uKTogYXJndW1lbnQgJyArIGNoYW5uZWwgKyAnIGlzIG5vdCBhIHZhbGlkIGNoYW5uZWwnKTtcbiAgICBjaGVjayhhY3Rpb24sIGlzLm5vdFVuZGVmLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBjaGVjayhjaGFubmVsLCBpcy5ub3RVbmRlZiwgJ3B1dChhY3Rpb24pOiBhcmd1bWVudCBhY3Rpb24gaXMgdW5kZWZpbmVkJyk7XG4gICAgYWN0aW9uID0gY2hhbm5lbDtcbiAgICBjaGFubmVsID0gbnVsbDtcbiAgfVxuICByZXR1cm4gZWZmZWN0KFBVVCwgeyBjaGFubmVsOiBjaGFubmVsLCBhY3Rpb246IGFjdGlvbiB9KTtcbn1cblxucHV0LnJlc29sdmUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZmYgPSBwdXQuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICBlZmZbUFVUXS5yZXNvbHZlID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn07XG5cbnB1dC5zeW5jID0gZGVwcmVjYXRlKHB1dC5yZXNvbHZlLCB1cGRhdGVJbmNlbnRpdmUoJ3B1dC5zeW5jJywgJ3B1dC5yZXNvbHZlJykpO1xuXG5leHBvcnQgZnVuY3Rpb24gYWxsKGVmZmVjdHMpIHtcbiAgcmV0dXJuIGVmZmVjdChBTEwsIGVmZmVjdHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFjZShlZmZlY3RzKSB7XG4gIHJldHVybiBlZmZlY3QoUkFDRSwgZWZmZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGdldEZuQ2FsbERlc2MobWV0aCwgZm4sIGFyZ3MpIHtcbiAgY2hlY2soZm4sIGlzLm5vdFVuZGVmLCBtZXRoICsgJzogYXJndW1lbnQgZm4gaXMgdW5kZWZpbmVkJyk7XG5cbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuICBpZiAoaXMuYXJyYXkoZm4pKSB7XG4gICAgdmFyIF9mbiA9IGZuO1xuICAgIGNvbnRleHQgPSBfZm5bMF07XG4gICAgZm4gPSBfZm5bMV07XG4gIH0gZWxzZSBpZiAoZm4uZm4pIHtcbiAgICB2YXIgX2ZuMiA9IGZuO1xuICAgIGNvbnRleHQgPSBfZm4yLmNvbnRleHQ7XG4gICAgZm4gPSBfZm4yLmZuO1xuICB9XG4gIGlmIChjb250ZXh0ICYmIGlzLnN0cmluZyhmbikgJiYgaXMuZnVuYyhjb250ZXh0W2ZuXSkpIHtcbiAgICBmbiA9IGNvbnRleHRbZm5dO1xuICB9XG4gIGNoZWNrKGZuLCBpcy5mdW5jLCBtZXRoICsgJzogYXJndW1lbnQgJyArIGZuICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXG4gIHJldHVybiB7IGNvbnRleHQ6IGNvbnRleHQsIGZuOiBmbiwgYXJnczogYXJncyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbChmbikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBlZmZlY3QoQ0FMTCwgZ2V0Rm5DYWxsRGVzYygnY2FsbCcsIGZuLCBhcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseShjb250ZXh0LCBmbikge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG5cbiAgcmV0dXJuIGVmZmVjdChDQUxMLCBnZXRGbkNhbGxEZXNjKCdhcHBseScsIHsgY29udGV4dDogY29udGV4dCwgZm46IGZuIH0sIGFyZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNwcyhmbikge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBlZmZlY3QoQ1BTLCBnZXRGbkNhbGxEZXNjKCdjcHMnLCBmbiwgYXJncykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yayhmbikge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyA+IDEgPyBfbGVuMyAtIDEgOiAwKSwgX2tleTMgPSAxOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHJldHVybiBlZmZlY3QoRk9SSywgZ2V0Rm5DYWxsRGVzYygnZm9yaycsIGZuLCBhcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGF3bihmbikge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgYXJnc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIHZhciBlZmYgPSBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW2ZuXS5jb25jYXQoYXJncykpO1xuICBlZmZbRk9SS10uZGV0YWNoZWQgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gam9pbigpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCB0YXNrcyA9IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgdGFza3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIGlmICh0YXNrcy5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIGFsbCh0YXNrcy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBqb2luKHQpO1xuICAgIH0pKTtcbiAgfVxuICB2YXIgdGFzayA9IHRhc2tzWzBdO1xuICBjaGVjayh0YXNrLCBpcy5ub3RVbmRlZiwgJ2pvaW4odGFzayk6IGFyZ3VtZW50IHRhc2sgaXMgdW5kZWZpbmVkJyk7XG4gIGNoZWNrKHRhc2ssIGlzLnRhc2ssICdqb2luKHRhc2spOiBhcmd1bWVudCAnICsgdGFzayArICcgaXMgbm90IGEgdmFsaWQgVGFzayBvYmplY3QgJyArIFRFU1RfSElOVCk7XG4gIHJldHVybiBlZmZlY3QoSk9JTiwgdGFzayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgdGFza3MgPSBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgIHRhc2tzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gIH1cblxuICBpZiAodGFza3MubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiBhbGwodGFza3MubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gY2FuY2VsKHQpO1xuICAgIH0pKTtcbiAgfVxuICB2YXIgdGFzayA9IHRhc2tzWzBdO1xuICBpZiAodGFza3MubGVuZ3RoID09PSAxKSB7XG4gICAgY2hlY2sodGFzaywgaXMubm90VW5kZWYsICdjYW5jZWwodGFzayk6IGFyZ3VtZW50IHRhc2sgaXMgdW5kZWZpbmVkJyk7XG4gICAgY2hlY2sodGFzaywgaXMudGFzaywgJ2NhbmNlbCh0YXNrKTogYXJndW1lbnQgJyArIHRhc2sgKyAnIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0ICcgKyBURVNUX0hJTlQpO1xuICB9XG4gIHJldHVybiBlZmZlY3QoQ0FOQ0VMLCB0YXNrIHx8IFNFTEZfQ0FOQ0VMTEFUSU9OKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdChzZWxlY3Rvcikge1xuICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNyA+IDEgPyBfbGVuNyAtIDEgOiAwKSwgX2tleTcgPSAxOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgYXJnc1tfa2V5NyAtIDFdID0gYXJndW1lbnRzW19rZXk3XTtcbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgc2VsZWN0b3IgPSBpZGVudDtcbiAgfSBlbHNlIHtcbiAgICBjaGVjayhzZWxlY3RvciwgaXMubm90VW5kZWYsICdzZWxlY3Qoc2VsZWN0b3IsWy4uLl0pOiBhcmd1bWVudCBzZWxlY3RvciBpcyB1bmRlZmluZWQnKTtcbiAgICBjaGVjayhzZWxlY3RvciwgaXMuZnVuYywgJ3NlbGVjdChzZWxlY3RvcixbLi4uXSk6IGFyZ3VtZW50ICcgKyBzZWxlY3RvciArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfVxuICByZXR1cm4gZWZmZWN0KFNFTEVDVCwgeyBzZWxlY3Rvcjogc2VsZWN0b3IsIGFyZ3M6IGFyZ3MgfSk7XG59XG5cbi8qKlxuICBjaGFubmVsKHBhdHRlcm4sIFtidWZmZXJdKSAgICA9PiBjcmVhdGVzIGFuIGV2ZW50IGNoYW5uZWwgZm9yIHN0b3JlIGFjdGlvbnNcbioqL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbkNoYW5uZWwocGF0dGVybiwgYnVmZmVyKSB7XG4gIGNoZWNrKHBhdHRlcm4sIGlzLm5vdFVuZGVmLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLC4uLik6IGFyZ3VtZW50IHBhdHRlcm4gaXMgdW5kZWZpbmVkJyk7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGNoZWNrKGJ1ZmZlciwgaXMubm90VW5kZWYsICdhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcik6IGFyZ3VtZW50IGJ1ZmZlciBpcyB1bmRlZmluZWQnKTtcbiAgICBjaGVjayhidWZmZXIsIGlzLmJ1ZmZlciwgJ2FjdGlvbkNoYW5uZWwocGF0dGVybiwgYnVmZmVyKTogYXJndW1lbnQgJyArIGJ1ZmZlciArICcgaXMgbm90IGEgdmFsaWQgYnVmZmVyJyk7XG4gIH1cbiAgcmV0dXJuIGVmZmVjdChBQ1RJT05fQ0hBTk5FTCwgeyBwYXR0ZXJuOiBwYXR0ZXJuLCBidWZmZXI6IGJ1ZmZlciB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbGxlZCgpIHtcbiAgcmV0dXJuIGVmZmVjdChDQU5DRUxMRUQsIHt9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoKGNoYW5uZWwpIHtcbiAgY2hlY2soY2hhbm5lbCwgaXMuY2hhbm5lbCwgJ2ZsdXNoKGNoYW5uZWwpOiBhcmd1bWVudCAnICsgY2hhbm5lbCArICcgaXMgbm90IHZhbGlkIGNoYW5uZWwnKTtcbiAgcmV0dXJuIGVmZmVjdChGTFVTSCwgY2hhbm5lbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0KHByb3ApIHtcbiAgY2hlY2socHJvcCwgaXMuc3RyaW5nLCAnZ2V0Q29udGV4dChwcm9wKTogYXJndW1lbnQgJyArIHByb3AgKyAnIGlzIG5vdCBhIHN0cmluZycpO1xuICByZXR1cm4gZWZmZWN0KEdFVF9DT05URVhULCBwcm9wKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRleHQocHJvcHMpIHtcbiAgY2hlY2socHJvcHMsIGlzLm9iamVjdCwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcobnVsbCwgcHJvcHMpKTtcbiAgcmV0dXJuIGVmZmVjdChTRVRfQ09OVEVYVCwgcHJvcHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFrZUV2ZXJ5KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuOCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuOCA+IDIgPyBfbGVuOCAtIDIgOiAwKSwgX2tleTggPSAyOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgYXJnc1tfa2V5OCAtIDJdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW3Rha2VFdmVyeUhlbHBlciwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFrZUxhdGVzdChwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbjkgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjkgPiAyID8gX2xlbjkgLSAyIDogMCksIF9rZXk5ID0gMjsgX2tleTkgPCBfbGVuOTsgX2tleTkrKykge1xuICAgIGFyZ3NbX2tleTkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh1bmRlZmluZWQsIFt0YWtlTGF0ZXN0SGVscGVyLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShtcywgcGF0dGVybiwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4xMCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMTAgPiAzID8gX2xlbjEwIC0gMyA6IDApLCBfa2V5MTAgPSAzOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSB7XG4gICAgYXJnc1tfa2V5MTAgLSAzXSA9IGFyZ3VtZW50c1tfa2V5MTBdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbdGhyb3R0bGVIZWxwZXIsIG1zLCBwYXR0ZXJuLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5cbnZhciBjcmVhdGVBc0VmZmVjdFR5cGUgPSBmdW5jdGlvbiBjcmVhdGVBc0VmZmVjdFR5cGUodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGVmZmVjdCkge1xuICAgIHJldHVybiBlZmZlY3QgJiYgZWZmZWN0W0lPXSAmJiBlZmZlY3RbdHlwZV07XG4gIH07XG59O1xuXG5leHBvcnQgdmFyIGFzRWZmZWN0ID0ge1xuICB0YWtlOiBjcmVhdGVBc0VmZmVjdFR5cGUoVEFLRSksXG4gIHB1dDogY3JlYXRlQXNFZmZlY3RUeXBlKFBVVCksXG4gIGFsbDogY3JlYXRlQXNFZmZlY3RUeXBlKEFMTCksXG4gIHJhY2U6IGNyZWF0ZUFzRWZmZWN0VHlwZShSQUNFKSxcbiAgY2FsbDogY3JlYXRlQXNFZmZlY3RUeXBlKENBTEwpLFxuICBjcHM6IGNyZWF0ZUFzRWZmZWN0VHlwZShDUFMpLFxuICBmb3JrOiBjcmVhdGVBc0VmZmVjdFR5cGUoRk9SSyksXG4gIGpvaW46IGNyZWF0ZUFzRWZmZWN0VHlwZShKT0lOKSxcbiAgY2FuY2VsOiBjcmVhdGVBc0VmZmVjdFR5cGUoQ0FOQ0VMKSxcbiAgc2VsZWN0OiBjcmVhdGVBc0VmZmVjdFR5cGUoU0VMRUNUKSxcbiAgYWN0aW9uQ2hhbm5lbDogY3JlYXRlQXNFZmZlY3RUeXBlKEFDVElPTl9DSEFOTkVMKSxcbiAgY2FuY2VsbGVkOiBjcmVhdGVBc0VmZmVjdFR5cGUoQ0FOQ0VMTEVEKSxcbiAgZmx1c2g6IGNyZWF0ZUFzRWZmZWN0VHlwZShGTFVTSCksXG4gIGdldENvbnRleHQ6IGNyZWF0ZUFzRWZmZWN0VHlwZShHRVRfQ09OVEVYVCksXG4gIHNldENvbnRleHQ6IGNyZWF0ZUFzRWZmZWN0VHlwZShTRVRfQ09OVEVYVClcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9pby5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0QWNjb3VudEJhbGFuY2VzKGFjdGlvbikge1xuICBjb25zdCBhY2NvdW50cyA9IHlpZWxkIHNlbGVjdChnZXRBY2NvdW50c1N0YXRlKVxuICBjb25zdCB3ZWIzID0gYWN0aW9uLndlYjNcblxuICBpZiAoIWFjY291bnRzKSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gYWNjb3VudHMgZm91bmQgd2hpbGUgYXR0ZW1wdGluZyB0byBmZXRjaCBiYWxhbmNlcyEnKVxuICB9XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBpIGluIGFjY291bnRzKSB7XG4gICAgICB2YXIgYWNjb3VudCA9IGFjY291bnRzW2ldXG4gICAgICB2YXIgYWNjb3VudEJhbGFuY2UgPSB5aWVsZCBjYWxsKHdlYjMuZXRoLmdldEJhbGFuY2UsIGFjY291bnQpXG5cbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRfQkFMQU5DRV9GRVRDSEVEJywgYWNjb3VudCwgYWNjb3VudEJhbGFuY2V9KVxuICAgIH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UX0JBTEFOQ0VfRkFJTEVEJywgZXJyb3J9KVxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFjY291bnQgJyArIGFjY291bnQgKyAnIGJhbGFuY2U6JylcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICB9XG5cbiAgeWllbGQgcHV0KHt0eXBlOiAnQUNDT1VOVF9CQUxBTkNFU19GRVRDSEVEJ30pXG59XG5cbmNvbnN0IGdldEFjY291bnRzU3RhdGUgPSAoc3RhdGUpID0+IHN0YXRlLmFjY291bnRzXG5cbmZ1bmN0aW9uKiBhY2NvdW50QmFsYW5jZXNTYWdhKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KCdBQ0NPVU5UX0JBTEFOQ0VTX0ZFVENISU5HJywgZ2V0QWNjb3VudEJhbGFuY2VzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50QmFsYW5jZXNTYWdhO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYS5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBpcywgbWFrZUl0ZXJhdG9yIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG52YXIgZG9uZSA9IHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9O1xuZXhwb3J0IHZhciBxRW5kID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSB7XG4gIGlmIChpcy5jaGFubmVsKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuICdjaGFubmVsJztcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXR0ZXJuT3JDaGFubmVsLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoZW50cnkpO1xuICAgIH0pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhdHRlcm5PckNoYW5uZWwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZzbUl0ZXJhdG9yKGZzbSwgcTApIHtcbiAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICdpdGVyYXRvcic7XG5cbiAgdmFyIHVwZGF0ZVN0YXRlID0gdm9pZCAwLFxuICAgICAgcU5leHQgPSBxMDtcblxuICBmdW5jdGlvbiBuZXh0KGFyZywgZXJyb3IpIHtcbiAgICBpZiAocU5leHQgPT09IHFFbmQpIHtcbiAgICAgIHJldHVybiBkb25lO1xuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgcU5leHQgPSBxRW5kO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZVN0YXRlICYmIHVwZGF0ZVN0YXRlKGFyZyk7XG5cbiAgICAgIHZhciBfZnNtJHFOZXh0ID0gZnNtW3FOZXh0XSgpLFxuICAgICAgICAgIHEgPSBfZnNtJHFOZXh0WzBdLFxuICAgICAgICAgIG91dHB1dCA9IF9mc20kcU5leHRbMV0sXG4gICAgICAgICAgX3VwZGF0ZVN0YXRlID0gX2ZzbSRxTmV4dFsyXTtcblxuICAgICAgcU5leHQgPSBxO1xuICAgICAgdXBkYXRlU3RhdGUgPSBfdXBkYXRlU3RhdGU7XG4gICAgICByZXR1cm4gcU5leHQgPT09IHFFbmQgPyBkb25lIDogb3V0cHV0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWtlSXRlcmF0b3IobmV4dCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQobnVsbCwgZXJyb3IpO1xuICB9LCBuYW1lLCB0cnVlKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL2ZzbUl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5pbXBvcnQgeyBpcywgY2hlY2ssIHJlbW92ZSwgTUFUQ0gsIGludGVybmFsRXJyLCBTQUdBX0FDVElPTiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgYnVmZmVycyB9IGZyb20gJy4vYnVmZmVycyc7XG5pbXBvcnQgeyBhc2FwIH0gZnJvbSAnLi9zY2hlZHVsZXInO1xuXG52YXIgQ0hBTk5FTF9FTkRfVFlQRSA9ICdAQHJlZHV4LXNhZ2EvQ0hBTk5FTF9FTkQnO1xuZXhwb3J0IHZhciBFTkQgPSB7IHR5cGU6IENIQU5ORUxfRU5EX1RZUEUgfTtcbmV4cG9ydCB2YXIgaXNFbmQgPSBmdW5jdGlvbiBpc0VuZChhKSB7XG4gIHJldHVybiBhICYmIGEudHlwZSA9PT0gQ0hBTk5FTF9FTkRfVFlQRTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0dGVyKCkge1xuICB2YXIgc3Vic2NyaWJlcnMgPSBbXTtcblxuICBmdW5jdGlvbiBzdWJzY3JpYmUoc3ViKSB7XG4gICAgc3Vic2NyaWJlcnMucHVzaChzdWIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlKHN1YnNjcmliZXJzLCBzdWIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0KGl0ZW0pIHtcbiAgICB2YXIgYXJyID0gc3Vic2NyaWJlcnMuc2xpY2UoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcnJbaV0oaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBlbWl0OiBlbWl0XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgSU5WQUxJRF9CVUZGRVIgPSAnaW52YWxpZCBidWZmZXIgcGFzc2VkIHRvIGNoYW5uZWwgZmFjdG9yeSBmdW5jdGlvbic7XG5leHBvcnQgdmFyIFVOREVGSU5FRF9JTlBVVF9FUlJPUiA9ICdTYWdhIHdhcyBwcm92aWRlZCB3aXRoIGFuIHVuZGVmaW5lZCBhY3Rpb24nO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBVTkRFRklORURfSU5QVVRfRVJST1IgKz0gJ1xcbkhpbnRzOlxcbiAgICAtIGNoZWNrIHRoYXQgeW91ciBBY3Rpb24gQ3JlYXRvciByZXR1cm5zIGEgbm9uLXVuZGVmaW5lZCB2YWx1ZVxcbiAgICAtIGlmIHRoZSBTYWdhIHdhcyBzdGFydGVkIHVzaW5nIHJ1blNhZ2EsIGNoZWNrIHRoYXQgeW91ciBzdWJzY3JpYmUgc291cmNlIHByb3ZpZGVzIHRoZSBhY3Rpb24gdG8gaXRzIGxpc3RlbmVyc1xcbiAgJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5uZWwoKSB7XG4gIHZhciBidWZmZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGJ1ZmZlcnMuZml4ZWQoKTtcblxuICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gIHZhciB0YWtlcnMgPSBbXTtcblxuICBjaGVjayhidWZmZXIsIGlzLmJ1ZmZlciwgSU5WQUxJRF9CVUZGRVIpO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCkge1xuICAgIGlmIChjbG9zZWQgJiYgdGFrZXJzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgaW50ZXJuYWxFcnIoJ0Nhbm5vdCBoYXZlIGEgY2xvc2VkIGNoYW5uZWwgd2l0aCBwZW5kaW5nIHRha2VycycpO1xuICAgIH1cbiAgICBpZiAodGFrZXJzLmxlbmd0aCAmJiAhYnVmZmVyLmlzRW1wdHkoKSkge1xuICAgICAgdGhyb3cgaW50ZXJuYWxFcnIoJ0Nhbm5vdCBoYXZlIHBlbmRpbmcgdGFrZXJzIHdpdGggbm9uIGVtcHR5IGJ1ZmZlcicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHB1dChpbnB1dCkge1xuICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgY2hlY2soaW5wdXQsIGlzLm5vdFVuZGVmLCBVTkRFRklORURfSU5QVVRfRVJST1IpO1xuICAgIGlmIChjbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0YWtlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYnVmZmVyLnB1dChpbnB1dCk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2IgPSB0YWtlcnNbaV07XG4gICAgICBpZiAoIWNiW01BVENIXSB8fCBjYltNQVRDSF0oaW5wdXQpKSB7XG4gICAgICAgIHRha2Vycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiBjYihpbnB1dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGFrZShjYikge1xuICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgY2hlY2soY2IsIGlzLmZ1bmMsIFwiY2hhbm5lbC50YWtlJ3MgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuXG4gICAgaWYgKGNsb3NlZCAmJiBidWZmZXIuaXNFbXB0eSgpKSB7XG4gICAgICBjYihFTkQpO1xuICAgIH0gZWxzZSBpZiAoIWJ1ZmZlci5pc0VtcHR5KCkpIHtcbiAgICAgIGNiKGJ1ZmZlci50YWtlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWtlcnMucHVzaChjYik7XG4gICAgICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZW1vdmUodGFrZXJzLCBjYik7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKGNiKSB7XG4gICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTsgLy8gVE9ETzogY2hlY2sgaWYgc29tZSBuZXcgc3RhdGUgc2hvdWxkIGJlIGZvcmJpZGRlbiBub3dcbiAgICBjaGVjayhjYiwgaXMuZnVuYywgXCJjaGFubmVsLmZsdXNoJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgaWYgKGNsb3NlZCAmJiBidWZmZXIuaXNFbXB0eSgpKSB7XG4gICAgICBjYihFTkQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYihidWZmZXIuZmx1c2goKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpO1xuICAgIGlmICghY2xvc2VkKSB7XG4gICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgaWYgKHRha2Vycy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGFyciA9IHRha2VycztcbiAgICAgICAgdGFrZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBhcnJbaV0oRU5EKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGFrZTogdGFrZSxcbiAgICBwdXQ6IHB1dCxcbiAgICBmbHVzaDogZmx1c2gsXG4gICAgY2xvc2U6IGNsb3NlLFxuICAgIGdldCBfX3Rha2Vyc19fKCkge1xuICAgICAgcmV0dXJuIHRha2VycztcbiAgICB9LFxuICAgIGdldCBfX2Nsb3NlZF9fKCkge1xuICAgICAgcmV0dXJuIGNsb3NlZDtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudENoYW5uZWwoc3Vic2NyaWJlKSB7XG4gIHZhciBidWZmZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGJ1ZmZlcnMubm9uZSgpO1xuICB2YXIgbWF0Y2hlciA9IGFyZ3VtZW50c1syXTtcblxuICAvKipcbiAgICBzaG91bGQgYmUgaWYodHlwZW9mIG1hdGNoZXIgIT09IHVuZGVmaW5lZCkgaW5zdGVhZD9cbiAgICBzZWUgUFIgIzI3MyBmb3IgYSBiYWNrZ3JvdW5kIGRpc2N1c3Npb25cbiAgKiovXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgIGNoZWNrKG1hdGNoZXIsIGlzLmZ1bmMsICdJbnZhbGlkIG1hdGNoIGZ1bmN0aW9uIHBhc3NlZCB0byBldmVudENoYW5uZWwnKTtcbiAgfVxuXG4gIHZhciBjaGFuID0gY2hhbm5lbChidWZmZXIpO1xuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBpZiAoIWNoYW4uX19jbG9zZWRfXykge1xuICAgICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICBjaGFuLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuICB2YXIgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaWYgKGlzRW5kKGlucHV0KSkge1xuICAgICAgY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1hdGNoZXIgJiYgIW1hdGNoZXIoaW5wdXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNoYW4ucHV0KGlucHV0KTtcbiAgfSk7XG4gIGlmIChjaGFuLl9fY2xvc2VkX18pIHtcbiAgICB1bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgaWYgKCFpcy5mdW5jKHVuc3Vic2NyaWJlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW4gZXZlbnRDaGFubmVsOiBzdWJzY3JpYmUgc2hvdWxkIHJldHVybiBhIGZ1bmN0aW9uIHRvIHVuc3Vic2NyaWJlJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRha2U6IGNoYW4udGFrZSxcbiAgICBmbHVzaDogY2hhbi5mbHVzaCxcbiAgICBjbG9zZTogY2xvc2VcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZENoYW5uZWwoc3Vic2NyaWJlKSB7XG4gIHZhciBjaGFuID0gZXZlbnRDaGFubmVsKGZ1bmN0aW9uIChjYikge1xuICAgIHJldHVybiBzdWJzY3JpYmUoZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICBpZiAoaW5wdXRbU0FHQV9BQ1RJT05dKSB7XG4gICAgICAgIGNiKGlucHV0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXNhcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYihpbnB1dCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBjaGFuLCB7XG4gICAgdGFrZTogZnVuY3Rpb24gdGFrZShjYiwgbWF0Y2hlcikge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNoZWNrKG1hdGNoZXIsIGlzLmZ1bmMsIFwiY2hhbm5lbC50YWtlJ3MgbWF0Y2hlciBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIGNiW01BVENIXSA9IG1hdGNoZXI7XG4gICAgICB9XG4gICAgICBjaGFuLnRha2UoY2IpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9jaGFubmVsLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFTkQsIGV2ZW50Q2hhbm5lbCB9IGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgeyBnZXRBY2NvdW50QmFsYW5jZXMgfSBmcm9tICcuLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYSdcblxuLypcbiAqIEZldGNoIEFjY291bnRzIExpc3RcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24qIGdldEFjY291bnRzKGFjdGlvbikge1xuICBjb25zdCB3ZWIzID0gYWN0aW9uLndlYjNcblxuICB0cnkge1xuICAgIGNvbnN0IGFjY291bnRzID0geWllbGQgY2FsbCh3ZWIzLmV0aC5nZXRBY2NvdW50cylcblxuICAgIGlmICghYWNjb3VudHMpIHtcbiAgICAgIHRocm93ICdObyBhY2NvdW50cyBmb3VuZCEnXG4gICAgfVxuXG4gICAgeWllbGQgcHV0KHt0eXBlOiAnQUNDT1VOVFNfRkVUQ0hFRCcsIGFjY291bnRzfSlcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UU19GQUlMRUQnLCBlcnJvcn0pXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWNjb3VudHM6JylcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICB9XG59XG5cbi8qXG4gKiBQb2xsIGZvciBBY2NvdW50IENoYW5nZXNcbiAqL1xuXG5mdW5jdGlvbiogY3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbCh7aW50ZXJ2YWwsIHdlYjN9KSB7XG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XG4gICAgY29uc3QgcGVyc2lzdGVkV2ViMyA9IHdlYjNcblxuICAgIGNvbnN0IGFjY291bnRzUG9sbGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1NZTkNJTkdfQUNDT1VOVFMnLCBwZXJzaXN0ZWRXZWIzfSlcbiAgICB9LCBpbnRlcnZhbCkgLy8gb3B0aW9ucy5wb2xscy5hY2NvdW50c1xuICAgIFxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChhY2NvdW50c1BvbGxlcilcbiAgICB9XG5cbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcbiAgfSlcbn1cbiAgXG5mdW5jdGlvbiogY2FsbENyZWF0ZUFjY291bnRzUG9sbENoYW5uZWwoe2ludGVydmFsLCB3ZWIzfSkge1xuICBjb25zdCBhY2NvdW50c0NoYW5uZWwgPSB5aWVsZCBjYWxsKGNyZWF0ZUFjY291bnRzUG9sbENoYW5uZWwsIHtpbnRlcnZhbCwgd2ViM30pXG4gIFxuICB0cnkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgZXZlbnQgPSB5aWVsZCB0YWtlKGFjY291bnRzQ2hhbm5lbClcblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdTWU5DSU5HX0FDQ09VTlRTJykgeyAgICAgIFxuICAgICAgICB5aWVsZCBjYWxsKGdldEFjY291bnRzLCB7d2ViMzogZXZlbnQucGVyc2lzdGVkV2ViM30pXG4gICAgICAgIHlpZWxkIGNhbGwoZ2V0QWNjb3VudEJhbGFuY2VzLCB7d2ViMzogZXZlbnQucGVyc2lzdGVkV2ViM30pICBcbiAgICAgIH1cblxuICAgICAgeWllbGQgcHV0KGV2ZW50KVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBhY2NvdW50c0NoYW5uZWwuY2xvc2UoKVxuICB9XG59XG5cbmZ1bmN0aW9uKiBhY2NvdW50c1NhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoJ0FDQ09VTlRTX0ZFVENISU5HJywgZ2V0QWNjb3VudHMpXG4gIHlpZWxkIHRha2VMYXRlc3QoJ0FDQ09VTlRTX1BPTExJTkcnLCBjYWxsQ3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudHNTYWdhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjY291bnRzL2FjY291bnRzU2FnYS5qcyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuXG52YXIgV2ViMyA9IHJlcXVpcmUoJ3dlYjMnKVxuXG4vKlxuICogSW5pdGlhbGl6YXRpb25cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24qIGluaXRpYWxpemVXZWIzKHtvcHRpb25zfSkge1xuICB2YXIgd2ViMyA9IHt9XG5cbiAgLy8gQ2hlY2tpbmcgaWYgV2ViMyBoYXMgYmVlbiBpbmplY3RlZCBieSB0aGUgYnJvd3NlciAoTWlzdC9NZXRhTWFzaylcbiAgaWYgKHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBVc2UgTWlzdC9NZXRhTWFzaydzIHByb3ZpZGVyLlxuICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpXG4gICAgd2ViMy5ldGguY2FjaGVTZW5kVHJhbnNhY3Rpb24gPSAodHhPYmplY3QpID0+IHB1dCh7dHlwZTogJ1NFTkRfV0VCM19UWCcsIHR4T2JqZWN0LCBzdGFja0lkLCB3ZWIzfSlcblxuICAgIGNvbnNvbGUubG9nKCdJbmplY3RlZCB3ZWIzIGRldGVjdGVkLicpXG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdXRUIzX0lOSVRJQUxJWkVEJ30pXG4gICAgXG4gICAgcmV0dXJuIHdlYjNcbiAgfSBlbHNlIHtcbiAgICBpZiAob3B0aW9ucy5mYWxsYmFjaykge1xuICAgICAgLy8gQXR0ZW1wdCBmYWxsYmFjayBpZiBubyB3ZWIzIGluamVjdGlvbi5cbiAgICAgIGNvbnNvbGUubG9nKCdObyB3ZWIzIGluc3RhbmNlIGluamVjdGVkLCB1c2luZyBmYWxsYmFjay4nKVxuXG4gICAgICBzd2l0Y2ggKG9wdGlvbnMuZmFsbGJhY2sudHlwZSkge1xuICAgICAgICBjYXNlICd3cyc6XG4gICAgICAgICAgdmFyIHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLldlYnNvY2tldFByb3ZpZGVyKG9wdGlvbnMuZmFsbGJhY2sudXJsKVxuICAgICAgICAgIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcilcblxuICAgICAgICAgIC8vIEF0dGFjaCBkcml6emxlIGZ1bmN0aW9uc1xuICAgICAgICAgIHdlYjMuZXRoWydjYWNoZVNlbmRUcmFuc2FjdGlvbiddID0gKHR4T2JqZWN0KSA9PiBwdXQoe3R5cGU6ICdTRU5EX1dFQjNfVFgnLCB0eE9iamVjdCwgc3RhY2tJZCwgd2ViM30pXG5cbiAgICAgICAgICB5aWVsZCBwdXQoe3R5cGU6ICdXRUIzX0lOSVRJQUxJWkVEJ30pXG5cbiAgICAgICAgICByZXR1cm4gd2ViM1xuXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBJbnZhbGlkIG9wdGlvbnM7IHRocm93LlxuICAgICAgICAgIHRocm93IFwiSW52YWxpZCB3ZWIzIGZhbGxiYWNrIHByb3ZpZGVkLlwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3V0IG9mIHdlYjMgb3B0aW9uczsgdGhyb3cuXG4gICAgdGhyb3cgXCJDYW5ub3QgZmluZCBpbmplY3RlZCB3ZWIzIG9yIHZhbGlkIGZhbGxiYWNrLlwiXG4gIH1cbn1cblxuZnVuY3Rpb24qIGNhbGxJbml0aWFsaXplV2ViMyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWIzID0geWllbGQgY2FsbChpbml0aWFsaXplV2ViMywge29wdGlvbnM6IGFjdGlvbi5vcHRpb25zfSlcbiAgICByZXR1cm4gd2ViM1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnV0VCM19GQUlMRUQnLCBlcnJvcn0pXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW50aWFsaXppbmcgd2ViMzonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIH1cbn1cblxuLypcbiAqIE5ldHdvcmsgSURcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24qIGdldE5ldHdvcmtJZCh7d2ViM30pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBuZXR3b3JrSWQgPSB5aWVsZCBjYWxsKHdlYjMuZXRoLm5ldC5nZXRJZClcblxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ05FVFdPUktfSURfRkVUQ0hFRCcsIG5ldHdvcmtJZH0pXG5cbiAgICByZXR1cm4gbmV0d29ya0lkXG4gIH1cbiAgY2F0Y2goZXJyb3Ipe1xuICAgIHlpZWxkIHB1dCh7dHlwZTogJ05FVFdPUktfSURfRkFJTEVEJywgZXJyb3J9KVxuXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbmV0d29yayBJRDonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cbiAgICByZXR1cm5cbiAgfVxufVxuXG4vKlxuICogU2VuZCBUcmFuc2FjdGlvblxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVR4Q2hhbm5lbCh7dHhPYmplY3QsIHN0YWNrSWQsIHdlYjN9KSB7XG4gIHZhciBwZXJzaXN0VHhIYXNoXG5cbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbChlbWl0ID0+IHtcbiAgICBjb25zdCB0eFByb21pRXZlbnQgPSB3ZWIzLmV0aC5zZW5kVHJhbnNhY3Rpb24odHhPYmplY3QpLm9uKCd0cmFuc2FjdGlvbkhhc2gnLCB0eEhhc2ggPT4ge1xuICAgICAgcGVyc2lzdFR4SGFzaCA9IHR4SGFzaFxuXG4gICAgICBlbWl0KHt0eXBlOiAnVzNUWF9CUk9BRENBU1RFRCcsIHR4SGFzaCwgc3RhY2tJZH0pXG4gICAgfSlcbiAgICAub24oJ2NvbmZpcm1hdGlvbicsIChjb25maXJtYXRpb25OdW1iZXIsIHJlY2VpcHQpID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdXM1RYX0NPTkZJUk1BSVRPTicsIGNvbmZpcm1hdGlvblJlY2VpcHQ6IHJlY2VpcHQsIHR4SGFzaDogcGVyc2lzdFR4SGFzaH0pXG4gICAgfSlcbiAgICAub24oJ3JlY2VpcHQnLCByZWNlaXB0ID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdXM1RYX1NVQ0NFU1NGVUwnLCByZWNlaXB0OiByZWNlaXB0LCB0eEhhc2g6IHBlcnNpc3RUeEhhc2h9KVxuICAgICAgZW1pdChFTkQpXG4gICAgfSlcbiAgICAub24oJ2Vycm9yJywgZXJyb3IgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1czVFhfRVJST1InLCBlcnJvcjogZXJyb3IsIHR4SGFzaDogcGVyc2lzdFR4SGFzaH0pXG4gICAgICBlbWl0KEVORClcbiAgICB9KVxuXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgICB0eFByb21pRXZlbnQub2ZmKClcbiAgICB9XG5cbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcbiAgfSlcbn1cblxuZnVuY3Rpb24qIGNhbGxTZW5kVHgoe3R4T2JqZWN0LCBzdGFja0lkLCB3ZWIzfSkge1xuICBjb25zdCB0eENoYW5uZWwgPSB5aWVsZCBjYWxsKGNyZWF0ZVR4Q2hhbm5lbCwge3R4T2JqZWN0LCBzdGFja0lkLCB3ZWIzfSlcblxuICB0cnkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgZXZlbnQgPSB5aWVsZCB0YWtlKHR4Q2hhbm5lbClcbiAgICAgIHlpZWxkIHB1dChldmVudClcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgdHhDaGFubmVsLmNsb3NlKClcbiAgfVxufVxuXG5mdW5jdGlvbiogd2ViM1NhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoJ1dFQjNfSU5JVElBTElaSU5HJywgY2FsbEluaXRpYWxpemVXZWIzKVxuICB5aWVsZCB0YWtlTGF0ZXN0KCdORVRXT1JLX0lEX0ZFVENISU5HJywgZ2V0TmV0d29ya0lkKVxuICB5aWVsZCB0YWtlRXZlcnkoJ1NFTkRfV0VCM19UWCcsIGNhbGxTZW5kVHgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYjNTYWdhXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd2ViMy93ZWIzU2FnYS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICghQlVHR1kgJiYgJG5hdGl2ZSkgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83MV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGtUcnVlLCBub29wIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCB2YXIgQlVGRkVSX09WRVJGTE9XID0gXCJDaGFubmVsJ3MgQnVmZmVyIG92ZXJmbG93IVwiO1xuXG52YXIgT05fT1ZFUkZMT1dfVEhST1cgPSAxO1xudmFyIE9OX09WRVJGTE9XX0RST1AgPSAyO1xudmFyIE9OX09WRVJGTE9XX1NMSURFID0gMztcbnZhciBPTl9PVkVSRkxPV19FWFBBTkQgPSA0O1xuXG52YXIgemVyb0J1ZmZlciA9IHsgaXNFbXB0eToga1RydWUsIHB1dDogbm9vcCwgdGFrZTogbm9vcCB9O1xuXG5mdW5jdGlvbiByaW5nQnVmZmVyKCkge1xuICB2YXIgbGltaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDEwO1xuICB2YXIgb3ZlcmZsb3dBY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgdmFyIGFyciA9IG5ldyBBcnJheShsaW1pdCk7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgcHVzaEluZGV4ID0gMDtcbiAgdmFyIHBvcEluZGV4ID0gMDtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2goaXQpIHtcbiAgICBhcnJbcHVzaEluZGV4XSA9IGl0O1xuICAgIHB1c2hJbmRleCA9IChwdXNoSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgIGxlbmd0aCsrO1xuICB9O1xuXG4gIHZhciB0YWtlID0gZnVuY3Rpb24gdGFrZSgpIHtcbiAgICBpZiAobGVuZ3RoICE9IDApIHtcbiAgICAgIHZhciBpdCA9IGFycltwb3BJbmRleF07XG4gICAgICBhcnJbcG9wSW5kZXhdID0gbnVsbDtcbiAgICAgIGxlbmd0aC0tO1xuICAgICAgcG9wSW5kZXggPSAocG9wSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgICAgcmV0dXJuIGl0O1xuICAgIH1cbiAgfTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICBpdGVtcy5wdXNoKHRha2UoKSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzRW1wdHk6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoID09IDA7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChpdCkge1xuICAgICAgaWYgKGxlbmd0aCA8IGxpbWl0KSB7XG4gICAgICAgIHB1c2goaXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRvdWJsZWRMaW1pdCA9IHZvaWQgMDtcbiAgICAgICAgc3dpdGNoIChvdmVyZmxvd0FjdGlvbikge1xuICAgICAgICAgIGNhc2UgT05fT1ZFUkZMT1dfVEhST1c6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoQlVGRkVSX09WRVJGTE9XKTtcbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX1NMSURFOlxuICAgICAgICAgICAgYXJyW3B1c2hJbmRleF0gPSBpdDtcbiAgICAgICAgICAgIHB1c2hJbmRleCA9IChwdXNoSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgICAgICAgICAgcG9wSW5kZXggPSBwdXNoSW5kZXg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX0VYUEFORDpcbiAgICAgICAgICAgIGRvdWJsZWRMaW1pdCA9IDIgKiBsaW1pdDtcblxuICAgICAgICAgICAgYXJyID0gZmx1c2goKTtcblxuICAgICAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHB1c2hJbmRleCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICBwb3BJbmRleCA9IDA7XG5cbiAgICAgICAgICAgIGFyci5sZW5ndGggPSBkb3VibGVkTGltaXQ7XG4gICAgICAgICAgICBsaW1pdCA9IGRvdWJsZWRMaW1pdDtcblxuICAgICAgICAgICAgcHVzaChpdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIERST1BcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGFrZTogdGFrZSxcbiAgICBmbHVzaDogZmx1c2hcbiAgfTtcbn1cblxuZXhwb3J0IHZhciBidWZmZXJzID0ge1xuICBub25lOiBmdW5jdGlvbiBub25lKCkge1xuICAgIHJldHVybiB6ZXJvQnVmZmVyO1xuICB9LFxuICBmaXhlZDogZnVuY3Rpb24gZml4ZWQobGltaXQpIHtcbiAgICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfVEhST1cpO1xuICB9LFxuICBkcm9wcGluZzogZnVuY3Rpb24gZHJvcHBpbmcobGltaXQpIHtcbiAgICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfRFJPUCk7XG4gIH0sXG4gIHNsaWRpbmc6IGZ1bmN0aW9uIHNsaWRpbmcobGltaXQpIHtcbiAgICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfU0xJREUpO1xuICB9LFxuICBleHBhbmRpbmc6IGZ1bmN0aW9uIGV4cGFuZGluZyhpbml0aWFsU2l6ZSkge1xuICAgIHJldHVybiByaW5nQnVmZmVyKGluaXRpYWxTaXplLCBPTl9PVkVSRkxPV19FWFBBTkQpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvYnVmZmVycy5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRU5ELCBldmVudENoYW5uZWwgfSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlLCB0YWtlRXZlcnksIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5jb25zdCBCbG9ja1RyYWNrZXIgPSByZXF1aXJlKCdldGgtYmxvY2stdHJhY2tlcicpXG5cbi8qXG4gKiBMaXN0ZW4gZm9yIEJsb2Nrc1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrQ2hhbm5lbCh7ZHJpenpsZSwgd2ViM30pIHtcbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbChlbWl0ID0+IHtcbiAgICBjb25zdCBibG9ja0V2ZW50cyA9IHdlYjMuZXRoLnN1YnNjcmliZSgnbmV3QmxvY2tIZWFkZXJzJywgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgIGlmIChlcnJvcilcbiAgICAgIHtcbiAgICAgICAgZW1pdCh7dHlwZTogJ0JMT0NLU19GQUlMRUQnLCBlcnJvcn0pXG5cbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYmxvY2sgaGVhZGVyIHN1YnNjcmlwdGlvbjonKVxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuXG4gICAgICAgIGVtaXQoRU5EKVxuICAgICAgfVxuICAgIH0pXG4gICAgLm9uKCdkYXRhJywgKGJsb2NrSGVhZGVyKSA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnQkxPQ0tfUkVDRUlWRUQnLCBibG9ja0hlYWRlciwgZHJpenpsZSwgd2ViM30pXG4gICAgfSlcbiAgICAub24oJ2Vycm9yJywgZXJyb3IgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ0JMT0NLU19GQUlMRUQnLCBlcnJvcn0pXG4gICAgICBlbWl0KEVORClcbiAgICB9KVxuXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgICBibG9ja0V2ZW50cy5vZmYoKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuXG5mdW5jdGlvbiogY2FsbENyZWF0ZUJsb2NrQ2hhbm5lbCh7ZHJpenpsZSwgd2ViM30pIHtcbiAgY29uc3QgYmxvY2tDaGFubmVsID0geWllbGQgY2FsbChjcmVhdGVCbG9ja0NoYW5uZWwsIHtkcml6emxlLCB3ZWIzfSlcblxuICB0cnkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgZXZlbnQgPSB5aWVsZCB0YWtlKGJsb2NrQ2hhbm5lbClcbiAgICAgIHlpZWxkIHB1dChldmVudClcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgYmxvY2tDaGFubmVsLmNsb3NlKClcbiAgfVxufVxuXG4vKlxuICogUG9sbCBmb3IgQmxvY2tzXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQmxvY2tQb2xsQ2hhbm5lbCh7ZHJpenpsZSwgaW50ZXJ2YWwsIHdlYjN9KSB7XG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XG4gICAgY29uc3QgYmxvY2tUcmFja2VyID0gbmV3IEJsb2NrVHJhY2tlcih7IHByb3ZpZGVyOiB3ZWIzLmN1cnJlbnRQcm92aWRlciwgcG9sbGluZ0ludGVydmFsOiBpbnRlcnZhbH0pXG5cbiAgICBibG9ja1RyYWNrZXIub24oJ2xhdGVzdCcsIChibG9jaykgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ0JMT0NLX0ZPVU5EJywgYmxvY2ssIGRyaXp6bGUsIHdlYjN9KVxuICAgIH0pXG5cbiAgICBibG9ja1RyYWNrZXJcbiAgICAuc3RhcnQoKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdCTE9DS1NfRkFJTEVEJywgZXJyb3J9KVxuICAgICAgZW1pdChFTkQpXG4gICAgfSlcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgYmxvY2tUcmFja2VyLnN0b3AoKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuXG5mdW5jdGlvbiogY2FsbENyZWF0ZUJsb2NrUG9sbENoYW5uZWwoe2RyaXp6bGUsIGludGVydmFsLCB3ZWIzfSkge1xuICBjb25zdCBibG9ja0NoYW5uZWwgPSB5aWVsZCBjYWxsKGNyZWF0ZUJsb2NrUG9sbENoYW5uZWwsIHtkcml6emxlLCBpbnRlcnZhbCwgd2ViM30pXG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZShibG9ja0NoYW5uZWwpXG4gICAgICB5aWVsZCBwdXQoZXZlbnQpXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGJsb2NrQ2hhbm5lbC5jbG9zZSgpXG4gIH1cbn1cblxuLypcbiAqIFByb2Nlc3MgQmxvY2tzXG4gKi9cblxuZnVuY3Rpb24qIHByb2Nlc3NCbG9ja0hlYWRlcih7YmxvY2tIZWFkZXIsIGRyaXp6bGUsIHdlYjN9KSB7XG4gIGNvbnN0IGJsb2NrTnVtYmVyID0gYmxvY2tIZWFkZXIubnVtYmVyXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBibG9jayA9IHlpZWxkIGNhbGwod2ViMy5ldGguZ2V0QmxvY2ssIGJsb2NrTnVtYmVyLCB0cnVlKVxuXG4gICAgeWllbGQgY2FsbChwcm9jZXNzQmxvY2ssIHtibG9jaywgZHJpenpsZSwgd2ViM30pXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYmxvY2sgcHJvY2Vzc2luZzonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS19GQUlMRUQnLCBlcnJvcn0pXG5cbiAgICByZXR1cm5cbiAgfVxufVxuXG5mdW5jdGlvbiogcHJvY2Vzc0Jsb2NrKHtibG9jaywgZHJpenpsZSwgd2ViM30pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0eHMgPSBibG9jay50cmFuc2FjdGlvbnNcblxuICAgIGlmICh0eHMubGVuZ3RoID4gMClcbiAgICB7XG4gICAgICAvLyBMb29wIHRocm91Z2ggdHhzIGxvb2tpbmcgZm9yIGNvbnRyYWN0IGFkZHJlc3NcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHhzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICB2YXIgZnJvbSA9IHR4c1tpXS5mcm9tIHx8ICcnXG4gICAgICAgIHZhciBmcm9tQ29udHJhY3QgPSBkcml6emxlLmZpbmRDb250cmFjdEJ5QWRkcmVzcyhmcm9tLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIGlmIChmcm9tQ29udHJhY3QpIHtcbiAgICAgICAgICB5aWVsZCBwdXQoe3R5cGU6ICdDT05UUkFDVF9TWU5DSU5HJywgY29udHJhY3Q6IGZyb21Db250cmFjdH0pXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG8gPSB0eHNbaV0udG8gfHwgJydcbiAgICAgICAgdmFyIHRvQ29udHJhY3QgPSBkcml6emxlLmZpbmRDb250cmFjdEJ5QWRkcmVzcyh0by50b0xvd2VyQ2FzZSgpKVxuICAgICAgICBpZiAodG9Db250cmFjdCkge1xuICAgICAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0NPTlRSQUNUX1NZTkNJTkcnLCBjb250cmFjdDogdG9Db250cmFjdH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYmxvY2sgcHJvY2Vzc2luZzonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS19GQUlMRUQnLCBlcnJvcn0pXG5cbiAgICByZXR1cm5cbiAgfVxufVxuXG5mdW5jdGlvbiogYmxvY2tzU2FnYSgpIHtcbiAgLy8gQmxvY2sgU3Vic2NyaXB0aW9uc1xuICB5aWVsZCB0YWtlTGF0ZXN0KCdCTE9DS1NfTElTVEVOSU5HJywgY2FsbENyZWF0ZUJsb2NrQ2hhbm5lbClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdCTE9DS19SRUNFSVZFRCcsIHByb2Nlc3NCbG9ja0hlYWRlcilcblxuICAvLyBCbG9jayBQb2xsaW5nXG4gIHlpZWxkIHRha2VMYXRlc3QoJ0JMT0NLU19QT0xMSU5HJywgY2FsbENyZWF0ZUJsb2NrUG9sbENoYW5uZWwpXG4gIHlpZWxkIHRha2VFdmVyeSgnQkxPQ0tfRk9VTkQnLCBwcm9jZXNzQmxvY2spXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJsb2Nrc1NhZ2FcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvYmxvY2tzU2FnYS5qcyIsImltcG9ydCB7IEVORCwgZXZlbnRDaGFubmVsIH0gZnJvbSAncmVkdXgtc2FnYSdcbmltcG9ydCB7IGNhbGwsIHB1dCwgc2VsZWN0LCB0YWtlLCB0YWtlTGF0ZXN0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgRHJpenpsZUNvbnRyYWN0IGZyb20gJy4uL0RyaXp6bGVDb250cmFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uKiBhZGRDb250cmFjdCh7ZHJpenpsZSwgY29udHJhY3RDb25maWcsIGV2ZW50cywgd2ViM30pIHtcbiAgLy8gUHJldmVudHMgZG91YmxlLWFkZGluZyBjb250cmFjdHNcbiAgaWYgKGRyaXp6bGUubG9hZGluZ0NvbnRyYWN0W2NvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZV0pIHsgcmV0dXJuIGZhbHNlIH1cbiAgZHJpenpsZS5sb2FkaW5nQ29udHJhY3RbY29udHJhY3RDb25maWcuY29udHJhY3ROYW1lXSA9IHRydWVcbiAgbGV0IGRyaXp6bGVDb250cmFjdFxuICBpZiAoY29udHJhY3RDb25maWcud2ViM0NvbnRyYWN0KSB7XG4gICAgZHJpenpsZUNvbnRyYWN0ID0geWllbGQgY2FsbChpbnN0YW50aWF0ZVdlYjNDb250cmFjdCwge3dlYjNDb250cmFjdDogY29udHJhY3RDb25maWcud2ViM0NvbnRyYWN0LCBuYW1lOiBjb250cmFjdENvbmZpZy5jb250cmFjdE5hbWUsIGV2ZW50cywgc3RvcmU6IGRyaXp6bGUuc3RvcmUsIHdlYjN9KVxuICB9IGVsc2Uge1xuICAgIGRyaXp6bGVDb250cmFjdCA9IHlpZWxkIGNhbGwoaW5zdGFudGlhdGVDb250cmFjdCwge2NvbnRyYWN0QXJ0aWZhY3Q6IGNvbnRyYWN0Q29uZmlnLCBldmVudHMsIHN0b3JlOiBkcml6emxlLnN0b3JlLCB3ZWIzfSlcbiAgfVxuICBkcml6emxlLl9hZGRDb250cmFjdChkcml6emxlQ29udHJhY3QpXG4gIHlpZWxkIHB1dCh7dHlwZTogJ0NPTlRSQUNUX0lOSVRJQUxJWkVEJywgbmFtZTogY29udHJhY3RDb25maWcuY29udHJhY3ROYW1lfSlcbn1cblxuLypcbiAqIEluc3RhbnRpYXRpb25cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24qIGluc3RhbnRpYXRlV2ViM0NvbnRyYWN0KHt3ZWIzQ29udHJhY3QsIG5hbWUsIGV2ZW50cywgc3RvcmUsIHdlYjN9KSB7XG4gIHJldHVybiBuZXcgRHJpenpsZUNvbnRyYWN0KHdlYjNDb250cmFjdCwgd2ViMywgbmFtZSwgc3RvcmUsIGV2ZW50cylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBpbnN0YW50aWF0ZUNvbnRyYWN0KHtjb250cmFjdEFydGlmYWN0LCBldmVudHMsIHN0b3JlLCB3ZWIzfSkge1xuICBjb25zdCBuZXR3b3JrSWQgPSB5aWVsZCBzZWxlY3QoZ2V0TmV0d29ya0lkKVxuXG4gIC8vIEluc3RhbnRpYXRlIHRoZSBjb250cmFjdC5cbiAgdmFyIHdlYjNDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcbiAgICBjb250cmFjdEFydGlmYWN0LmFiaSxcbiAgICBjb250cmFjdEFydGlmYWN0Lm5ldHdvcmtzW25ldHdvcmtJZF0uYWRkcmVzcyxcbiAgICB7XG4gICAgICBmcm9tOiBzdG9yZS5nZXRTdGF0ZSgpLmFjY291bnRzWzBdLFxuICAgICAgZGF0YTogY29udHJhY3RBcnRpZmFjdC5kZXBsb3llZEJ5dGVjb2RlXG4gICAgfVxuICApXG5cbiAgcmV0dXJuIG5ldyBEcml6emxlQ29udHJhY3Qod2ViM0NvbnRyYWN0LCB3ZWIzLCBjb250cmFjdEFydGlmYWN0LmNvbnRyYWN0TmFtZSwgc3RvcmUsIGV2ZW50cylcbn1cblxuLypcbiAqIEV2ZW50c1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRyYWN0RXZlbnRDaGFubmVsKHtjb250cmFjdCwgZXZlbnROYW1lfSkge1xuICBjb25zdCBuYW1lID0gY29udHJhY3QuY29udHJhY3ROYW1lXG5cbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbChlbWl0ID0+IHtcbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gY29udHJhY3QuZXZlbnRzW2V2ZW50TmFtZV0oKS5vbignZGF0YScsIGV2ZW50ID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdFVkVOVF9GSVJFRCcsIG5hbWUsIGV2ZW50fSlcbiAgICB9KVxuICAgIC5vbignY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdFVkVOVF9DSEFOR0VEJywgbmFtZSwgZXZlbnR9KVxuICAgIH0pXG4gICAgLm9uKCdlcnJvcicsIGVycm9yID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdFVkVOVF9FUlJPUicsIG5hbWUsIGVycm9yfSlcbiAgICAgIGVtaXQoRU5EKVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIGV2ZW50TGlzdGVuZXIucmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuXG5mdW5jdGlvbiogY2FsbExpc3RlbkZvckNvbnRyYWN0RXZlbnQoe2NvbnRyYWN0LCBldmVudE5hbWV9KSB7XG4gIGNvbnN0IGNvbnRyYWN0RXZlbnRDaGFubmVsID0geWllbGQgY2FsbChjcmVhdGVDb250cmFjdEV2ZW50Q2hhbm5lbCwge2NvbnRyYWN0LCBldmVudE5hbWV9KVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZShjb250cmFjdEV2ZW50Q2hhbm5lbClcbiAgICB5aWVsZCBwdXQoZXZlbnQpXG4gIH1cbn1cblxuLypcbiAqIFNlbmQgYW5kIENhY2hlXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlVHhDaGFubmVsKHt0eE9iamVjdCwgc3RhY2tJZCwgc2VuZEFyZ3MgPSB7fSwgY29udHJhY3ROYW1lfSkge1xuICB2YXIgcGVyc2lzdFR4SGFzaFxuXG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XG4gICAgY29uc3QgdHhQcm9taUV2ZW50ID0gdHhPYmplY3Quc2VuZChzZW5kQXJncykub24oJ3RyYW5zYWN0aW9uSGFzaCcsIHR4SGFzaCA9PiB7XG4gICAgICBwZXJzaXN0VHhIYXNoID0gdHhIYXNoXG5cbiAgICAgIGVtaXQoe3R5cGU6ICdUWF9CUk9BRENBU1RFRCcsIHR4SGFzaCwgc3RhY2tJZH0pXG4gICAgICBlbWl0KHt0eXBlOiAnQ09OVFJBQ1RfU1lOQ19JTkQnLCBjb250cmFjdE5hbWV9KVxuICAgIH0pXG4gICAgLm9uKCdjb25maXJtYXRpb24nLCAoY29uZmlybWF0aW9uTnVtYmVyLCByZWNlaXB0KSA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnVFhfQ09ORklSTUFJVE9OJywgY29uZmlybWF0aW9uUmVjZWlwdDogcmVjZWlwdCwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcbiAgICB9KVxuICAgIC5vbigncmVjZWlwdCcsIHJlY2VpcHQgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1RYX1NVQ0NFU1NGVUwnLCByZWNlaXB0OiByZWNlaXB0LCB0eEhhc2g6IHBlcnNpc3RUeEhhc2h9KVxuICAgICAgZW1pdChFTkQpXG4gICAgfSlcbiAgICAub24oJ2Vycm9yJywgZXJyb3IgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1RYX0VSUk9SJywgZXJyb3I6IGVycm9yLCB0eEhhc2g6IHBlcnNpc3RUeEhhc2h9KVxuICAgICAgZW1pdChFTkQpXG4gICAgfSlcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgdHhQcm9taUV2ZW50Lm9mZigpXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlXG4gIH0pXG59XG5cbmZ1bmN0aW9uKiBjYWxsU2VuZENvbnRyYWN0VHgoe2NvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIHN0YWNrSWR9KSB7XG4gIC8vIENoZWNrIGZvciB0eXBlIG9mIG9iamVjdCBhbmQgcHJvcGVydGllcyBpbmRpY2F0aXZlIG9mIGNhbGwvc2VuZCBvcHRpb25zLlxuICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICBjb25zdCBmaW5hbEFyZyA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbYXJncy5sZW5ndGggLSAxXSA6IGFyZ3NbMF1cbiAgICB2YXIgc2VuZEFyZ3MgPSB7fVxuICAgIHZhciBmaW5hbEFyZ1Rlc3QgPSBmYWxzZVxuXG4gICAgaWYgKHR5cGVvZiBmaW5hbEFyZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBmaW5hbEFyZ1Rlc3QgPSBjYWxsKGlzU2VuZE9yQ2FsbE9wdGlvbnMsIGZpbmFsQXJnKVxuICAgIH1cblxuICAgIGlmIChmaW5hbEFyZ1Rlc3QpIHtcbiAgICAgIHNlbmRBcmdzID0gZmluYWxBcmdcblxuICAgICAgYXJncy5sZW5ndGggPiAxID8gZGVsZXRlIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA6IGRlbGV0ZSBhcmdzWzBdXG4gICAgICBhcmdzLmxlbmd0aCA9IGFyZ3MubGVuZ3RoIC0gMVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldCBuYW1lIHRvIG1hcmsgYXMgZGVzeW5jaHJvbml6ZWQgb24gdHggY3JlYXRpb25cbiAgY29uc3QgY29udHJhY3ROYW1lID0gY29udHJhY3QuY29udHJhY3ROYW1lXG5cbiAgLy8gQ3JlYXRlIHRoZSB0cmFuc2FjdGlvbiBvYmplY3QgYW5kIGV4ZWN1dGUgdGhlIHR4LlxuICBjb25zdCB0eE9iamVjdCA9IHlpZWxkIGNhbGwoY29udHJhY3QubWV0aG9kc1tmbk5hbWVdLCAuLi5hcmdzKVxuICBjb25zdCB0eENoYW5uZWwgPSB5aWVsZCBjYWxsKGNyZWF0ZVR4Q2hhbm5lbCwge3R4T2JqZWN0LCBzdGFja0lkLCBzZW5kQXJncywgY29udHJhY3ROYW1lfSlcblxuICB0cnkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgZXZlbnQgPSB5aWVsZCB0YWtlKHR4Q2hhbm5lbClcbiAgICAgIHlpZWxkIHB1dChldmVudClcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgdHhDaGFubmVsLmNsb3NlKClcbiAgfVxufVxuXG4vKlxuICogQ2FsbCBhbmQgQ2FjaGVcbiAqL1xuXG5mdW5jdGlvbiogY2FsbENhbGxDb250cmFjdEZuKHtjb250cmFjdCwgZm5OYW1lLCBmbkluZGV4LCBhcmdzLCBhcmdzSGFzaCwgc3luYyA9IGZhbHNlfSkge1xuICAvLyBrZWVwaW5nIGZvciBwcmUtdjEuMS41IGNvbXBhdGliaWxpdHkgd2l0aCBDQUxMX0NPTlRSQUNUX0ZOIGV2ZW50LlxuICBpZiAoc3luYykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gQ2hlY2sgZm9yIHR5cGUgb2Ygb2JqZWN0IGFuZCBwcm9wZXJ0aWVzIGluZGljYXRpdmUgb2YgY2FsbC9zZW5kIG9wdGlvbnMuXG4gIGlmIChhcmdzLmxlbmd0aCkge1xuICAgIGNvbnN0IGZpbmFsQXJnID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1thcmdzLmxlbmd0aCAtIDFdIDogYXJnc1swXVxuICAgIHZhciBjYWxsQXJncyA9IHt9XG4gICAgdmFyIGZpbmFsQXJnVGVzdCA9IGZhbHNlXG5cbiAgICBpZiAodHlwZW9mIGZpbmFsQXJnID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZpbmFsQXJnVGVzdCA9IGNhbGwoaXNTZW5kT3JDYWxsT3B0aW9ucywgZmluYWxBcmcpXG4gICAgfVxuXG4gICAgaWYgKGZpbmFsQXJnVGVzdCkge1xuICAgICAgY2FsbEFyZ3MgPSBmaW5hbEFyZ1xuXG4gICAgICBhcmdzLmxlbmd0aCA+IDEgPyBkZWxldGUgYXJnc1thcmdzLmxlbmd0aCAtIDFdIDogZGVsZXRlIGFyZ3NbMF1cbiAgICAgIGFyZ3MubGVuZ3RoID0gYXJncy5sZW5ndGggLSAxXG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSB0cmFuc2FjdGlvbiBvYmplY3QgYW5kIGV4ZWN1dGUgdGhlIGNhbGwuXG4gIGNvbnN0IHR4T2JqZWN0ID0geWllbGQgY2FsbChjb250cmFjdC5tZXRob2RzW2ZuTmFtZV0sIC4uLmFyZ3MpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjYWxsUmVzdWx0ID0geWllbGQgY2FsbCh0eE9iamVjdC5jYWxsLCBjYWxsQXJncylcblxuICAgIHZhciBkaXNwYXRjaEFyZ3MgPSB7XG4gICAgICBuYW1lOiBjb250cmFjdC5jb250cmFjdE5hbWUsXG4gICAgICB2YXJpYWJsZTogY29udHJhY3QuYWJpW2ZuSW5kZXhdLm5hbWUsXG4gICAgICBhcmdzSGFzaDogYXJnc0hhc2gsXG4gICAgICBhcmdzOiBhcmdzLFxuICAgICAgdmFsdWU6IGNhbGxSZXN1bHQsXG4gICAgICBmbkluZGV4OiBmbkluZGV4XG4gICAgfVxuXG4gICAgeWllbGQgcHV0KHt0eXBlOiAnR09UX0NPTlRSQUNUX1ZBUicsIC4uLmRpc3BhdGNoQXJnc30pXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcblxuICAgIHZhciBlcnJvckFyZ3MgPSB7XG4gICAgICBuYW1lOiBjb250cmFjdC5jb250cmFjdE5hbWUsXG4gICAgICB2YXJpYWJsZTogY29udHJhY3QuYWJpW2ZuSW5kZXhdLm5hbWUsXG4gICAgICBhcmdzSGFzaDogYXJnc0hhc2gsXG4gICAgICBhcmdzOiBhcmdzLFxuICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgZm5JbmRleDogZm5JbmRleFxuICAgIH1cblxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0VSUk9SX0NPTlRSQUNUX1ZBUicsIC4uLmVycm9yQXJnc30pXG4gIH1cbn1cblxuLypcbiAqIFN5bmMgQ29udHJhY3RcbiAqL1xuXG5mdW5jdGlvbiogY2FsbFN5bmNDb250cmFjdChhY3Rpb24pIHtcbiAgLy8gR2V0IGNvbnRyYWN0IHN0YXRlIGZyb20gc3RvcmVcbiAgY29uc3QgY29udHJhY3QgPSBhY3Rpb24uY29udHJhY3RcbiAgY29uc3QgY29udHJhY3ROYW1lID0gY29udHJhY3QuY29udHJhY3ROYW1lXG5cbiAgY29uc3QgY29udHJhY3RzU3RhdGUgPSB5aWVsZCBzZWxlY3QoZ2V0Q29udHJhY3RzU3RhdGUpXG4gIHZhciBjb250cmFjdEZuc1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgY29udHJhY3RzU3RhdGVbY29udHJhY3ROYW1lXSlcblxuICAvLyBSZW1vdmUgdW5uZWNlc3Nhcnkga2V5c1xuICBkZWxldGUgY29udHJhY3RGbnNTdGF0ZS5pbml0aWFsaXplZFxuICBkZWxldGUgY29udHJhY3RGbnNTdGF0ZS5zeW5jZWRcbiAgZGVsZXRlIGNvbnRyYWN0Rm5zU3RhdGUuZXZlbnRzXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIGZ1bmN0aW9ucyBhbmQgaGFzaGVzXG4gIGZvciAodmFyIGZuTmFtZSBpbiBjb250cmFjdEZuc1N0YXRlKVxuICB7XG4gICAgZm9yICh2YXIgYXJnc0hhc2ggaW4gY29udHJhY3RGbnNTdGF0ZVtmbk5hbWVdKVxuICAgIHtcbiAgICAgIGNvbnN0IGZuSW5kZXggPSBjb250cmFjdEZuc1N0YXRlW2ZuTmFtZV1bYXJnc0hhc2hdLmZuSW5kZXhcbiAgICAgIGNvbnN0IGFyZ3MgPSBjb250cmFjdEZuc1N0YXRlW2ZuTmFtZV1bYXJnc0hhc2hdLmFyZ3NcblxuICAgICAgLy8gUHVsbCBhcmdzIGFuZCBjYWxsIGZuIGZvciBlYWNoIGdpdmVuIGZ1bmN0aW9uXG4gICAgICAvLyBrZWVwaW5nIGZvciBwcmUtdjEuMS41IGNvbXBhdGliaWxpdHkgd2l0aCBDQUxMX0NPTlRSQUNUX0ZOIGV2ZW50LlxuICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQ0FMTF9DT05UUkFDVF9GTicsIGNvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIGFyZ3NIYXNoLCBzeW5jOiB0cnVlfSlcbiAgICAgIHlpZWxkIGNhbGwoY2FsbENhbGxDb250cmFjdEZuLCB7Y29udHJhY3QsIGZuTmFtZSwgZm5JbmRleCwgYXJncywgYXJnc0hhc2h9KVxuICAgIH1cbiAgfVxuXG4gIC8vIFdoZW4gY29tcGxldGUsIGRpc3BhdGNoIENPTlRSQUNUX1NZTkNFRFxuICB5aWVsZCBwdXQoe3R5cGU6ICdDT05UUkFDVF9TWU5DRUQnLCBjb250cmFjdE5hbWV9KVxufVxuXG5jb25zdCBnZXRDb250cmFjdHNTdGF0ZSA9IChzdGF0ZSkgPT4gc3RhdGUuY29udHJhY3RzXG5jb25zdCBnZXROZXR3b3JrSWQgPSAoc3RhdGUpID0+IHN0YXRlLndlYjMubmV0d29ya0lkXG5cbmZ1bmN0aW9uIGlzU2VuZE9yQ2FsbE9wdGlvbnMob3B0aW9ucykge1xuICBpZiAoJ2Zyb20nIGluIG9wdGlvbnMpIHJldHVybiB0cnVlXG4gIGlmICgnZ2FzJyBpbiBvcHRpb25zKSByZXR1cm4gdHJ1ZVxuICBpZiAoJ2dhc1ByaWNlJyBpbiBvcHRpb25zKSByZXR1cm4gdHJ1ZVxuICBpZiAoJ3ZhbHVlJyBpbiBvcHRpb25zKSByZXR1cm4gdHJ1ZVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiogY29udHJhY3RzU2FnYSgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KCdTRU5EX0NPTlRSQUNUX1RYJywgY2FsbFNlbmRDb250cmFjdFR4KVxuICB5aWVsZCB0YWtlRXZlcnkoJ0NBTExfQ09OVFJBQ1RfRk4nLCBjYWxsQ2FsbENvbnRyYWN0Rm4pXG4gIHlpZWxkIHRha2VFdmVyeSgnQ09OVFJBQ1RfU1lOQ0lORycsIGNhbGxTeW5jQ29udHJhY3QpXG4gIHlpZWxkIHRha2VFdmVyeSgnTElTVEVOX0ZPUl9FVkVOVCcsIGNhbGxMaXN0ZW5Gb3JDb250cmFjdEV2ZW50KVxuICB5aWVsZCB0YWtlRXZlcnkoJ0FERF9DT05UUkFDVCcsIGFkZENvbnRyYWN0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250cmFjdHNTYWdhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRyYWN0cy9jb250cmFjdHNTYWdhLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSAnLi4vZGVmYXVsdE9wdGlvbnMnXG5pbXBvcnQgbWVyZ2UgZnJvbSAnLi4vbWVyZ2VPcHRpb25zJ1xuXG4vLyBJbml0aWFsaXphdGlvbiBGdW5jdGlvbnNcbmltcG9ydCB7IGluaXRpYWxpemVXZWIzLCBnZXROZXR3b3JrSWQgfSBmcm9tICcuLi93ZWIzL3dlYjNTYWdhJ1xuaW1wb3J0IHsgZ2V0QWNjb3VudHMgfSBmcm9tICcuLi9hY2NvdW50cy9hY2NvdW50c1NhZ2EnXG5pbXBvcnQgeyBnZXRBY2NvdW50QmFsYW5jZXMgfSBmcm9tICcuLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYSdcblxuZnVuY3Rpb24qIGluaXRpYWxpemVEcml6emxlKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBtZXJnZShkZWZhdWx0T3B0aW9ucywgYWN0aW9uLm9wdGlvbnMpXG4gICAgY29uc3Qgd2ViM09wdGlvbnMgPSBvcHRpb25zLndlYjNcbiAgICBjb25zdCBkcml6emxlID0gYWN0aW9uLmRyaXp6bGVcblxuICAgIC8vIEluaXRpYWxpemUgd2ViMyBhbmQgZ2V0IHRoZSBjdXJyZW50IG5ldHdvcmsgSUQuXG4gICAgdmFyIHdlYjMgPSB5aWVsZCBjYWxsKGluaXRpYWxpemVXZWIzLCB7b3B0aW9uczogd2ViM09wdGlvbnN9KVxuICAgIGRyaXp6bGUud2ViMyA9IHdlYjNcblxuICAgIHlpZWxkIGNhbGwoZ2V0TmV0d29ya0lkLCB7d2ViM30pXG5cbiAgICAvLyBHZXQgaW5pdGlhbCBhY2NvdW50cyBsaXN0IGFuZCBiYWxhbmNlcy5cbiAgICB5aWVsZCBjYWxsKGdldEFjY291bnRzLCB7d2ViM30pXG4gICAgeWllbGQgY2FsbChnZXRBY2NvdW50QmFsYW5jZXMsIHt3ZWIzfSlcblxuICAgIC8vIEluc3RhbnRpYXRlIGNvbnRyYWN0cyBwYXNzZWQgdGhyb3VnaCB2aWEgb3B0aW9ucy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMuY29udHJhY3RzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBjb250cmFjdENvbmZpZyA9IG9wdGlvbnMuY29udHJhY3RzW2ldXG4gICAgICB2YXIgZXZlbnRzID0gW11cbiAgICAgIHZhciBjb250cmFjdE5hbWUgPSBjb250cmFjdENvbmZpZy5jb250cmFjdE5hbWVcblxuICAgICAgaWYgKGNvbnRyYWN0TmFtZSBpbiBvcHRpb25zLmV2ZW50cykge1xuICAgICAgICBldmVudHMgPSBvcHRpb25zLmV2ZW50c1tjb250cmFjdE5hbWVdXG4gICAgICB9XG5cbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FERF9DT05UUkFDVCcsIGRyaXp6bGUsIGNvbnRyYWN0Q29uZmlnLCBldmVudHMsIHdlYjN9KVxuICAgIH1cblxuICAgIGlmICh3ZWIzLmN1cnJlbnRQcm92aWRlci5pc01ldGFNYXNrKSB7XG4gICAgICAvLyBVc2luZyBNZXRhTWFzaywgYXR0ZW1wdCBibG9jayBwb2xsaW5nLlxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBvcHRpb25zLnBvbGxzLmJsb2Nrc1xuICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQkxPQ0tTX1BPTExJTkcnLCBkcml6emxlLCBpbnRlcnZhbCwgd2ViM30pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gTm90IHVzaW5nIE1ldGFNYXNrLCBhdHRlbXB0IHN1YnNjcmlwdGlvbiBibG9jayBsaXN0ZW5pbmcuXG4gICAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS1NfTElTVEVOSU5HJywgZHJpenpsZSwgd2ViM30pXG4gICAgfVxuXG4gICAgLy8gQWNjb3VudHMgUG9sbGluZ1xuICAgIGlmICgnYWNjb3VudHMnIGluIG9wdGlvbnMucG9sbHMpIHtcbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRTX1BPTExJTkcnLCBpbnRlcnZhbDogb3B0aW9ucy5wb2xscy5hY2NvdW50cywgd2ViM30pXG4gICAgfVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0RSSVpaTEVfRkFJTEVEJywgZXJyb3J9KVxuXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIERyaXp6bGU6JylcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuXG4gICAgcmV0dXJuXG4gIH1cblxuICB5aWVsZCBwdXQoe3R5cGU6ICdEUklaWkxFX0lOSVRJQUxJWkVEJ30pXG5cbiAgcmV0dXJuXG59XG5cbmZ1bmN0aW9uKiBkcml6emxlU3RhdHVzU2FnYSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdCgnRFJJWlpMRV9JTklUSUFMSVpJTkcnLCBpbml0aWFsaXplRHJpenpsZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJpenpsZVN0YXR1c1NhZ2E7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzU2FnYS5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmNvbnN0IGFjY291bnRzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FDQ09VTlRTX0ZFVENISU5HJylcbiAge1xuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQUNDT1VOVFNfRkVUQ0hFRCcpXG4gIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIGFjdGlvbi5hY2NvdW50cylcbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50c1JlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY2NvdW50cy9hY2NvdW50c1JlZHVjZXIuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7fVxuXG5jb25zdCBhY2NvdW50QmFsYW5jZXNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQUNDT1VOVF9CQUxBTkNFX0ZFVENIRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5hY2NvdW50XTogYWN0aW9uLmFjY291bnRCYWxhbmNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjY291bnRCYWxhbmNlc1JlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzUmVkdWNlci5qcyIsImltcG9ydCB7IGdlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUgfSBmcm9tICcuLi9nZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fVxuXG5jb25zdCBjb250cmFjdHNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgLypcbiAgICogQ29udHJhY3QgU3RhdHVzXG4gICAqL1xuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9DT05UUkFDVCcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLmNvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZV06IGdlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUoYWN0aW9uLmNvbnRyYWN0Q29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0NPTlRSQUNUX0lOSVRJQUxJWkVEJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFthY3Rpb24ubmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdLFxuICAgICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgICAgc3luY2VkOiB0cnVlLFxuICAgICAgICBldmVudHM6IFtdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ09OVFJBQ1RfU1lOQ0lORycpXG4gIHtcbiAgICBjb25zdCBjb250cmFjdE5hbWUgPSBhY3Rpb24uY29udHJhY3QuY29udHJhY3ROYW1lXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbY29udHJhY3ROYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVtjb250cmFjdE5hbWVdLFxuICAgICAgICBzeW5jZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ09OVFJBQ1RfU1lOQ0VEJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFthY3Rpb24uY29udHJhY3ROYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVthY3Rpb24uY29udHJhY3ROYW1lXSxcbiAgICAgICAgc3luY2VkOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ09OVFJBQ1RfU1lOQ19JTkQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5jb250cmFjdE5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5jb250cmFjdE5hbWVdLFxuICAgICAgICBzeW5jZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogQ29udHJhY3QgRnVuY3Rpb25zXG4gICAqL1xuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0dPVF9DT05UUkFDVF9WQVInKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5uYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0sXG4gICAgICAgIFthY3Rpb24udmFyaWFibGVdOiB7XG4gICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdW2FjdGlvbi52YXJpYWJsZV0sXG4gICAgICAgICAgW2FjdGlvbi5hcmdzSGFzaF06IHtcbiAgICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXVthY3Rpb24udmFyaWFibGVdW2FjdGlvbi5hcmdzSGFzaF0sXG4gICAgICAgICAgICBhcmdzOiBhY3Rpb24uYXJncyxcbiAgICAgICAgICAgIGZuSW5kZXg6IGFjdGlvbi5mbkluZGV4LFxuICAgICAgICAgICAgdmFsdWU6IGFjdGlvbi52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0VSUk9SX0NPTlRSQUNUX1ZBUicpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLm5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXSxcbiAgICAgICAgW2FjdGlvbi52YXJpYWJsZV06IHtcbiAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV1bYWN0aW9uLnZhcmlhYmxlXSxcbiAgICAgICAgICBbYWN0aW9uLmFyZ3NIYXNoXToge1xuICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdW2FjdGlvbi52YXJpYWJsZV1bYWN0aW9uLmFyZ3NIYXNoXSxcbiAgICAgICAgICAgIGFyZ3M6IGFjdGlvbi5hcmdzLFxuICAgICAgICAgICAgZm5JbmRleDogYWN0aW9uLmZuSW5kZXgsXG4gICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogQ29udHJhY3QgRXZlbnRzXG4gICAqL1xuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0VWRU5UX0ZJUkVEJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFthY3Rpb24ubmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdLFxuICAgICAgICBldmVudHM6IFtcbiAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0uZXZlbnRzLFxuICAgICAgICAgIGFjdGlvbi5ldmVudFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyYWN0c1JlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250cmFjdHMvY29udHJhY3RzUmVkdWNlci5qcyIsImltcG9ydCBnZXRBYmkgZnJvbSAnLi9nZXRBYmknXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlIChjb250cmFjdENvbmZpZykge1xuICB2YXIgc3RhdGUgPSB7XG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIHN5bmNlZDogZmFsc2VcbiAgfVxuXG4gIC8vIENvbnN0YW50IGdldHRlcnNcbiAgdmFyIGFiaSA9IGdldEFiaShjb250cmFjdENvbmZpZylcbiAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IGFiaS5sZW5ndGg7IGkyKyspIHtcbiAgICB2YXIgaXRlbSA9IGFiaVtpMl07XG5cbiAgICBpZiAoaXRlbS50eXBlID09IFwiZnVuY3Rpb25cIiAmJiBpdGVtLmNvbnN0YW50ID09PSB0cnVlKSB7XG4gICAgICBzdGF0ZVtpdGVtLm5hbWVdID0ge31cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWJpKGNvbnRyYWN0RW50cnkpIHtcbiAgaWYgKGNvbnRyYWN0RW50cnkud2ViM0NvbnRyYWN0KSB7XG4gICAgcmV0dXJuIGNvbnRyYWN0RW50cnkud2ViM0NvbnRyYWN0Lm9wdGlvbnMuanNvbkludGVyZmFjZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjb250cmFjdEVudHJ5LmFiaVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2V0QWJpLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpbml0aWFsaXplZDogZmFsc2Vcbn1cblxuY29uc3QgZHJpenpsZVN0YXR1c1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAvKlxuICAgKiBEcml6emxlIFN0YXR1c1xuICAgKi9cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdEUklaWkxFX0lOSVRJQUxJWkVEJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGluaXRpYWxpemVkOiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBkcml6emxlU3RhdHVzUmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXIuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7fVxuICBcbmNvbnN0IHRyYW5zYWN0aW9uc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RYX0JST0FEQ0FTVEVEJylcbiAgICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIFthY3Rpb24udHhIYXNoXToge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbnM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdUWF9DT05GSVJNQUlUT04nKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgW2FjdGlvbi50eEhhc2hdOiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLnR4SGFzaF0sXG4gICAgICAgICAgICAgICAgY29uZmlybWF0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXS5jb25maXJtYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uY29uZmlybWF0aW9uUmVjZWlwdFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RYX1NVQ0NFU1NGVUwnKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgW2FjdGlvbi50eEhhc2hdOiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLnR4SGFzaF0sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgcmVjZWlwdDogYWN0aW9uLnJlY2VpcHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfRVJST1InKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgW2FjdGlvbi50eEhhc2hdOiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLnR4SGFzaF0sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2FjdGlvbnNSZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uc1JlZHVjZXIuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSBbXVxuICBcbmNvbnN0IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdQVVNIX1RPX1RYU1RBQ0snKVxuICAgIHtcbiAgICAgICAgc3RhdGUucHVzaCgnJylcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uc3RhdGVcbiAgICAgICAgXVxuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1BPUF9GUk9NX1RYU1RBQ0snKVxuICAgIHtcbiAgICAgICAgc3RhdGUucG9wKClcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uc3RhdGVcbiAgICAgICAgXVxuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RYX0JST0FEQ0FTVEVEJylcbiAgICB7XG4gICAgICAgIHN0YXRlW2FjdGlvbi5zdGFja0lkXSA9IGFjdGlvbi50eEhhc2hcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uc3RhdGVcbiAgICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2FjdGlvblN0YWNrUmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvblN0YWNrUmVkdWNlci5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc3RhdHVzOiAnJ1xufVxuXG5jb25zdCB3ZWIzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1dFQjNfSU5JVElBTElaSU5HJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ2luaXRpYWxpemluZydcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdXRUIzX0lOSVRJQUxJWkVEJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ2luaXRpYWxpemVkJ1xuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1dFQjNfRkFJTEVEJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ2ZhaWxlZCdcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdORVRXT1JLX0lEX0ZFVENIRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbmV0d29ya0lkOiBhY3Rpb24ubmV0d29ya0lkXG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnTkVUV09SS19JRF9GQUlMRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbmV0d29ya0lkOiBhY3Rpb24ubmV0d29ya0lkXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYjNSZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd2ViMy93ZWIzUmVkdWNlci5qcyIsImltcG9ydCB7IGdlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUgfSBmcm9tICcuL2dlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUnXG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlKG9wdGlvbnMpIHtcbiAgLy8gUHJlbG9hZGVkIHN0YXRlXG4gIHZhciBjb250cmFjdHNJbml0aWFsU3RhdGUgPSB7fVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5jb250cmFjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBJbml0aWFsIGNvbnRyYWN0IGRldGFpbHNcbiAgICB2YXIgY29udHJhY3ROYW1lID0gb3B0aW9ucy5jb250cmFjdHNbaV0uY29udHJhY3ROYW1lXG4gICAgY29udHJhY3RzSW5pdGlhbFN0YXRlW2NvbnRyYWN0TmFtZV0gPSBnZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlKG9wdGlvbnMuY29udHJhY3RzW2ldKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRyYWN0c0luaXRpYWxTdGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUuanMiLCJpbXBvcnQgRHJpenpsZSBmcm9tICcuL0RyaXp6bGUuanMnXG5pbXBvcnQgZ2VuZXJhdGVTdG9yZSBmcm9tICcuL2dlbmVyYXRlU3RvcmUnXG5pbXBvcnQgZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUgZnJvbSAnLi9nZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZSdcblxuLy8gUmVkdWNlcnNcbmltcG9ydCBhY2NvdW50c1JlZHVjZXIgZnJvbSAnLi9hY2NvdW50cy9hY2NvdW50c1JlZHVjZXInXG5pbXBvcnQgYWNjb3VudEJhbGFuY2VzUmVkdWNlciBmcm9tICcuL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyJ1xuaW1wb3J0IGNvbnRyYWN0c1JlZHVjZXIgZnJvbSAnLi9jb250cmFjdHMvY29udHJhY3RzUmVkdWNlcidcbmltcG9ydCBkcml6emxlU3RhdHVzUmVkdWNlciBmcm9tICcuL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXInXG5pbXBvcnQgdHJhbnNhY3Rpb25zUmVkdWNlciBmcm9tICcuL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNSZWR1Y2VyJ1xuaW1wb3J0IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyIGZyb20gJy4vdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyJ1xuaW1wb3J0IHdlYjNSZWR1Y2VyIGZyb20gJy4vd2ViMy93ZWIzUmVkdWNlcidcblxuY29uc3QgZHJpenpsZVJlZHVjZXJzID0ge1xuICBhY2NvdW50czogYWNjb3VudHNSZWR1Y2VyLFxuICBhY2NvdW50QmFsYW5jZXM6IGFjY291bnRCYWxhbmNlc1JlZHVjZXIsXG4gIGNvbnRyYWN0czogY29udHJhY3RzUmVkdWNlcixcbiAgZHJpenpsZVN0YXR1czogZHJpenpsZVN0YXR1c1JlZHVjZXIsXG4gIHRyYW5zYWN0aW9uczogdHJhbnNhY3Rpb25zUmVkdWNlcixcbiAgdHJhbnNhY3Rpb25TdGFjazogdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIsXG4gIHdlYjM6IHdlYjNSZWR1Y2VyXG59XG5cbi8vIFNhZ2FzXG5pbXBvcnQgYWNjb3VudHNTYWdhIGZyb20gJy4vYWNjb3VudHMvYWNjb3VudHNTYWdhJ1xuaW1wb3J0IGFjY291bnRCYWxhbmNlc1NhZ2EgZnJvbSAnLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYSdcbmltcG9ydCBibG9ja3NTYWdhIGZyb20gJy4vYmxvY2tzL2Jsb2Nrc1NhZ2EnXG5pbXBvcnQgY29udHJhY3RzU2FnYSBmcm9tICcuL2NvbnRyYWN0cy9jb250cmFjdHNTYWdhJ1xuaW1wb3J0IGRyaXp6bGVTdGF0dXNTYWdhIGZyb20gJy4vZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzU2FnYSdcbmltcG9ydCB3ZWIzU2FnYSBmcm9tICcuL3dlYjMvd2ViM1NhZ2EnXG5cbmNvbnN0IGRyaXp6bGVTYWdhcyA9IFtcbiAgYWNjb3VudHNTYWdhLFxuICBhY2NvdW50QmFsYW5jZXNTYWdhLFxuICBibG9ja3NTYWdhLFxuICBjb250cmFjdHNTYWdhLFxuICBkcml6emxlU3RhdHVzU2FnYSxcbiAgd2ViM1NhZ2Fcbl1cblxuZXhwb3J0IHtcbiAgRHJpenpsZSxcbiAgZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUsXG4gIGdlbmVyYXRlU3RvcmUsXG4gIGRyaXp6bGVSZWR1Y2VycyxcbiAgZHJpenpsZVNhZ2FzXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLy8gTG9hZCBhcyBwcm9taXNlIHNvIHRoYXQgYXN5bmMgRHJpenpsZSBpbml0aWFsaXphdGlvbiBjYW4gc3RpbGwgcmVzb2x2ZVxudmFyIHdpbmRvd1Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzb2x2ZSlcbn0pXG5cbmNsYXNzIERyaXp6bGUge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zLCBzdG9yZSkge1xuICAgIC8vIFZhcmlhYmxlc1xuICAgIHRoaXMuY29udHJhY3RzID0ge31cbiAgICB0aGlzLmNvbnRyYWN0TGlzdCA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuc3RvcmUgPSBzdG9yZVxuICAgIHRoaXMud2ViMyA9IHt9XG5cbiAgICB0aGlzLmxvYWRpbmdDb250cmFjdCA9IHt9XG5cbiAgICAvLyBXYWl0IGZvciB3aW5kb3cgbG9hZCBldmVudCBpbiBjYXNlIG9mIGluamVjdGVkIHdlYjMuXG4gICAgd2luZG93UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIC8vIEJlZ2luIERyaXp6bGUgaW5pdGlhbGl6YXRpb24uXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0RSSVpaTEVfSU5JVElBTElaSU5HJywgZHJpenpsZTogdGhpcywgb3B0aW9uc30pXG4gICAgfSlcbiAgfVxuXG4gIGFkZENvbnRyYWN0IChjb250cmFjdENvbmZpZywgZXZlbnRzID0gW10pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnQUREX0NPTlRSQUNUJywgZHJpenpsZTogdGhpcywgY29udHJhY3RDb25maWcsIGV2ZW50cywgd2ViMzogdGhpcy53ZWIzfSlcbiAgfVxuXG4gIF9hZGRDb250cmFjdCAoZHJpenpsZUNvbnRyYWN0KSB7XG4gICAgaWYgKHRoaXMuY29udHJhY3RzW2RyaXp6bGVDb250cmFjdC5jb250cmFjdE5hbWVdKSB7IHRocm93IGBDb250cmFjdCBhbHJlYWR5IGV4aXN0czogJHtkcml6emxlQ29udHJhY3QuY29udHJhY3ROYW1lfWAgfVxuICAgIHRoaXMuY29udHJhY3RzW2RyaXp6bGVDb250cmFjdC5jb250cmFjdE5hbWVdID0gZHJpenpsZUNvbnRyYWN0XG4gICAgdGhpcy5jb250cmFjdExpc3QucHVzaChkcml6emxlQ29udHJhY3QpXG4gIH1cblxuICBmaW5kQ29udHJhY3RCeUFkZHJlc3MgKGFkZHJlc3MpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdExpc3QuZmluZCgoY29udHJhY3QpID0+IHtcbiAgICAgIHJldHVybiBjb250cmFjdC5hZGRyZXNzLnRvTG93ZXJDYXNlKCkgPT09IGFkZHJlc3MudG9Mb3dlckNhc2UoKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJpenpsZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RyaXp6bGUuanMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcbmltcG9ydCByb290U2FnYSBmcm9tICcuL3Jvb3RTYWdhJ1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IHsgZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUgfSBmcm9tICcuL2dlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlJ1xuaW1wb3J0IGdldEFiaSBmcm9tICcuL2dldEFiaSdcblxuZnVuY3Rpb24gZ2VuZXJhdGVTdG9yZShvcHRpb25zKSB7XG4gIC8vIFJlZHV4IERldlRvb2xzXG4gIGNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5cbiAgLy8gUHJlbG9hZGVkIHN0YXRlXG4gIHZhciBwcmVsb2FkZWRTdGF0ZSA9IHtcbiAgICBjb250cmFjdHM6IGdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlKG9wdGlvbnMpXG4gIH1cblxuICAvLyBjcmVhdGUgdGhlIHNhZ2EgbWlkZGxld2FyZVxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcblxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJlZHVjZXIsXG4gICAgcHJlbG9hZGVkU3RhdGUsXG4gICAgY29tcG9zZUVuaGFuY2VycyhcbiAgICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgICAgc2FnYU1pZGRsZXdhcmVcbiAgICAgIClcbiAgICApXG4gIClcblxuICBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXG5cbiAgcmV0dXJuIHN0b3JlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVTdG9yZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlbmVyYXRlU3RvcmUuanMiLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbmltcG9ydCBhY2NvdW50c1NhZ2EgZnJvbSAnLi9hY2NvdW50cy9hY2NvdW50c1NhZ2EnXG5pbXBvcnQgYWNjb3VudEJhbGFuY2VzU2FnYSBmcm9tICcuL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhJ1xuaW1wb3J0IGJsb2Nrc1NhZ2EgZnJvbSAnLi9ibG9ja3MvYmxvY2tzU2FnYSdcbmltcG9ydCBjb250cmFjdHNTYWdhIGZyb20gJy4vY29udHJhY3RzL2NvbnRyYWN0c1NhZ2EnXG5pbXBvcnQgZHJpenpsZVN0YXR1c1NhZ2EgZnJvbSAnLi9kcml6emxlU3RhdHVzL2RyaXp6bGVTdGF0dXNTYWdhJ1xuaW1wb3J0IHdlYjNTYWdhIGZyb20gJy4vd2ViMy93ZWIzU2FnYSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3QoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayhhY2NvdW50c1NhZ2EpLFxuICAgIGZvcmsoYWNjb3VudEJhbGFuY2VzU2FnYSksXG4gICAgZm9yayhibG9ja3NTYWdhKSxcbiAgICBmb3JrKGNvbnRyYWN0c1NhZ2EpLFxuICAgIGZvcmsoZHJpenpsZVN0YXR1c1NhZ2EpLFxuICAgIGZvcmsod2ViM1NhZ2EpXG4gIF0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm9vdFNhZ2EuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB0YWtlRXZlcnlIZWxwZXIgZnJvbSAnLi90YWtlRXZlcnknO1xuaW1wb3J0IHRha2VMYXRlc3RIZWxwZXIgZnJvbSAnLi90YWtlTGF0ZXN0JztcbmltcG9ydCB0aHJvdHRsZUhlbHBlciBmcm9tICcuL3Rocm90dGxlJztcblxuaW1wb3J0IHsgZGVwcmVjYXRlIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG52YXIgZGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gZGVwcmVjYXRpb25XYXJuaW5nKGhlbHBlck5hbWUpIHtcbiAgcmV0dXJuICdpbXBvcnQgeyAnICsgaGVscGVyTmFtZSArICcgfSBmcm9tIFxcJ3JlZHV4LXNhZ2FcXCcgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBpbXBvcnQgeyAnICsgaGVscGVyTmFtZSArICcgfSBmcm9tIFxcJ3JlZHV4LXNhZ2EvZWZmZWN0c1xcJy5cXG5UaGUgbGF0dGVyIHdpbGwgbm90IHdvcmsgd2l0aCB5aWVsZCosIGFzIGhlbHBlciBlZmZlY3RzIGFyZSB3cmFwcGVkIGF1dG9tYXRpY2FsbHkgZm9yIHlvdSBpbiBmb3JrIGVmZmVjdC5cXG5UaGVyZWZvcmUgeWllbGQgJyArIGhlbHBlck5hbWUgKyAnIHdpbGwgcmV0dXJuIHRhc2sgZGVzY3JpcHRvciB0byB5b3VyIHNhZ2EgYW5kIGV4ZWN1dGUgbmV4dCBsaW5lcyBvZiBjb2RlLic7XG59O1xuXG52YXIgdGFrZUV2ZXJ5ID0gLyojX19QVVJFX18qL2RlcHJlY2F0ZSh0YWtlRXZlcnlIZWxwZXIsIC8qI19fUFVSRV9fKi9kZXByZWNhdGlvbldhcm5pbmcoJ3Rha2VFdmVyeScpKTtcbnZhciB0YWtlTGF0ZXN0ID0gLyojX19QVVJFX18qL2RlcHJlY2F0ZSh0YWtlTGF0ZXN0SGVscGVyLCAvKiNfX1BVUkVfXyovZGVwcmVjYXRpb25XYXJuaW5nKCd0YWtlTGF0ZXN0JykpO1xudmFyIHRocm90dGxlID0gLyojX19QVVJFX18qL2RlcHJlY2F0ZSh0aHJvdHRsZUhlbHBlciwgLyojX19QVVJFX18qL2RlcHJlY2F0aW9uV2FybmluZygndGhyb3R0bGUnKSk7XG5cbmV4cG9ydCB7IHRha2VFdmVyeSwgdGFrZUxhdGVzdCwgdGhyb3R0bGUsIHRha2VFdmVyeUhlbHBlciwgdGFrZUxhdGVzdEhlbHBlciwgdGhyb3R0bGVIZWxwZXIgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZzbUl0ZXJhdG9yLCB7IHFFbmQsIHNhZmVOYW1lIH0gZnJvbSAnLi9mc21JdGVyYXRvcic7XG5pbXBvcnQgeyB0YWtlLCBmb3JrIH0gZnJvbSAnLi4vaW8nO1xuaW1wb3J0IHsgRU5EIH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRha2VFdmVyeShwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogdGFrZShwYXR0ZXJuT3JDaGFubmVsKSB9O1xuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogZm9yay5hcHBseSh1bmRlZmluZWQsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSkgfTtcbiAgfTtcblxuICB2YXIgYWN0aW9uID0gdm9pZCAwLFxuICAgICAgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIFsncTInLCB5VGFrZSwgc2V0QWN0aW9uXTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiBhY3Rpb24gPT09IEVORCA/IFtxRW5kXSA6IFsncTEnLCB5Rm9yayhhY3Rpb24pXTtcbiAgICB9XG4gIH0sICdxMScsICd0YWtlRXZlcnkoJyArIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpICsgJywgJyArIHdvcmtlci5uYW1lICsgJyknKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rha2VFdmVyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBxdWV1ZSA9IFtdO1xuLyoqXG4gIFZhcmlhYmxlIHRvIGhvbGQgYSBjb3VudGluZyBzZW1hcGhvcmVcbiAgLSBJbmNyZW1lbnRpbmcgYWRkcyBhIGxvY2sgYW5kIHB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGBzdXNwZW5kZWRgIHN0YXRlIChpZiBpdCdzIG5vdFxuICAgIGFscmVhZHkgc3VzcGVuZGVkKVxuICAtIERlY3JlbWVudGluZyByZWxlYXNlcyBhIGxvY2suIFplcm8gbG9ja3MgcHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHJlbGVhc2VkYCBzdGF0ZS4gVGhpc1xuICAgIHRyaWdnZXJzIGZsdXNoaW5nIHRoZSBxdWV1ZWQgdGFza3MuXG4qKi9cbnZhciBzZW1hcGhvcmUgPSAwO1xuXG4vKipcbiAgRXhlY3V0ZXMgYSB0YXNrICdhdG9taWNhbGx5Jy4gVGFza3Mgc2NoZWR1bGVkIGR1cmluZyB0aGlzIGV4ZWN1dGlvbiB3aWxsIGJlIHF1ZXVlZFxuICBhbmQgZmx1c2hlZCBhZnRlciB0aGlzIHRhc2sgaGFzIGZpbmlzaGVkIChhc3N1bWluZyB0aGUgc2NoZWR1bGVyIGVuZHVwIGluIGEgcmVsZWFzZWRcbiAgc3RhdGUpLlxuKiovXG5mdW5jdGlvbiBleGVjKHRhc2spIHtcbiAgdHJ5IHtcbiAgICBzdXNwZW5kKCk7XG4gICAgdGFzaygpO1xuICB9IGZpbmFsbHkge1xuICAgIHJlbGVhc2UoKTtcbiAgfVxufVxuXG4vKipcbiAgRXhlY3V0ZXMgb3IgcXVldWVzIGEgdGFzayBkZXBlbmRpbmcgb24gdGhlIHN0YXRlIG9mIHRoZSBzY2hlZHVsZXIgKGBzdXNwZW5kZWRgIG9yIGByZWxlYXNlZGApXG4qKi9cbmV4cG9ydCBmdW5jdGlvbiBhc2FwKHRhc2spIHtcbiAgcXVldWUucHVzaCh0YXNrKTtcblxuICBpZiAoIXNlbWFwaG9yZSkge1xuICAgIHN1c3BlbmQoKTtcbiAgICBmbHVzaCgpO1xuICB9XG59XG5cbi8qKlxuICBQdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZS4gU2NoZWR1bGVkIHRhc2tzIHdpbGwgYmUgcXVldWVkIHVudGlsIHRoZVxuICBzY2hlZHVsZXIgaXMgcmVsZWFzZWQuXG4qKi9cbmV4cG9ydCBmdW5jdGlvbiBzdXNwZW5kKCkge1xuICBzZW1hcGhvcmUrKztcbn1cblxuLyoqXG4gIFB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGByZWxlYXNlZGAgc3RhdGUuXG4qKi9cbmZ1bmN0aW9uIHJlbGVhc2UoKSB7XG4gIHNlbWFwaG9yZS0tO1xufVxuXG4vKipcbiAgUmVsZWFzZXMgdGhlIGN1cnJlbnQgbG9jay4gRXhlY3V0ZXMgYWxsIHF1ZXVlZCB0YXNrcyBpZiB0aGUgc2NoZWR1bGVyIGlzIGluIHRoZSByZWxlYXNlZCBzdGF0ZS5cbioqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoKCkge1xuICByZWxlYXNlKCk7XG5cbiAgdmFyIHRhc2sgPSB2b2lkIDA7XG4gIHdoaWxlICghc2VtYXBob3JlICYmICh0YXNrID0gcXVldWUuc2hpZnQoKSkgIT09IHVuZGVmaW5lZCkge1xuICAgIGV4ZWModGFzayk7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NjaGVkdWxlci5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmc21JdGVyYXRvciwgeyBxRW5kLCBzYWZlTmFtZSB9IGZyb20gJy4vZnNtSXRlcmF0b3InO1xuaW1wb3J0IHsgY2FuY2VsLCB0YWtlLCBmb3JrIH0gZnJvbSAnLi4vaW8nO1xuaW1wb3J0IHsgRU5EIH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRha2VMYXRlc3QocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHlUYWtlID0geyBkb25lOiBmYWxzZSwgdmFsdWU6IHRha2UocGF0dGVybk9yQ2hhbm5lbCkgfTtcbiAgdmFyIHlGb3JrID0gZnVuY3Rpb24geUZvcmsoYWMpIHtcbiAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpIH07XG4gIH07XG4gIHZhciB5Q2FuY2VsID0gZnVuY3Rpb24geUNhbmNlbCh0YXNrKSB7XG4gICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBjYW5jZWwodGFzaykgfTtcbiAgfTtcblxuICB2YXIgdGFzayA9IHZvaWQgMCxcbiAgICAgIGFjdGlvbiA9IHZvaWQgMDtcbiAgdmFyIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRUYXNrKHQpIHtcbiAgICByZXR1cm4gdGFzayA9IHQ7XG4gIH07XG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlUYWtlLCBzZXRBY3Rpb25dO1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gRU5EID8gW3FFbmRdIDogdGFzayA/IFsncTMnLCB5Q2FuY2VsKHRhc2spXSA6IFsncTEnLCB5Rm9yayhhY3Rpb24pLCBzZXRUYXNrXTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiBbJ3ExJywgeUZvcmsoYWN0aW9uKSwgc2V0VGFza107XG4gICAgfVxuICB9LCAncTEnLCAndGFrZUxhdGVzdCgnICsgc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkgKyAnLCAnICsgd29ya2VyLm5hbWUgKyAnKScpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGFrZUxhdGVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmc21JdGVyYXRvciwgeyBxRW5kLCBzYWZlTmFtZSB9IGZyb20gJy4vZnNtSXRlcmF0b3InO1xuaW1wb3J0IHsgdGFrZSwgZm9yaywgYWN0aW9uQ2hhbm5lbCwgY2FsbCB9IGZyb20gJy4uL2lvJztcbmltcG9ydCB7IEVORCB9IGZyb20gJy4uL2NoYW5uZWwnO1xuaW1wb3J0IHsgYnVmZmVycyB9IGZyb20gJy4uL2J1ZmZlcnMnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYWN0aW9uID0gdm9pZCAwLFxuICAgICAgY2hhbm5lbCA9IHZvaWQgMDtcblxuICB2YXIgeUFjdGlvbkNoYW5uZWwgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXJzLnNsaWRpbmcoMSkpIH07XG4gIHZhciB5VGFrZSA9IGZ1bmN0aW9uIHlUYWtlKCkge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogdGFrZShjaGFubmVsKSB9O1xuICB9O1xuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogZm9yay5hcHBseSh1bmRlZmluZWQsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSkgfTtcbiAgfTtcbiAgdmFyIHlEZWxheSA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiBjYWxsKGRlbGF5LCBkZWxheUxlbmd0aCkgfTtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuICB2YXIgc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uIHNldENoYW5uZWwoY2gpIHtcbiAgICByZXR1cm4gY2hhbm5lbCA9IGNoO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIFsncTInLCB5QWN0aW9uQ2hhbm5lbCwgc2V0Q2hhbm5lbF07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4gWydxMycsIHlUYWtlKCksIHNldEFjdGlvbl07XG4gICAgfSxcbiAgICBxMzogZnVuY3Rpb24gcTMoKSB7XG4gICAgICByZXR1cm4gYWN0aW9uID09PSBFTkQgPyBbcUVuZF0gOiBbJ3E0JywgeUZvcmsoYWN0aW9uKV07XG4gICAgfSxcbiAgICBxNDogZnVuY3Rpb24gcTQoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlEZWxheV07XG4gICAgfVxuICB9LCAncTEnLCAndGhyb3R0bGUoJyArIHNhZmVOYW1lKHBhdHRlcm4pICsgJywgJyArIHdvcmtlci5uYW1lICsgJyknKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rocm90dGxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyMl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXRoLWJsb2NrLXRyYWNrZXItZXM1XCJcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBEcml6emxlQ29udHJhY3Qge1xuICBjb25zdHJ1Y3Rvcih3ZWIzQ29udHJhY3QsIHdlYjMsIG5hbWUsIHN0b3JlLCBldmVudHMgPSBbXSkge1xuICAgIHRoaXMuYWJpID0gd2ViM0NvbnRyYWN0Lm9wdGlvbnMuanNvbkludGVyZmFjZVxuICAgIHRoaXMuYWRkcmVzcyA9IHdlYjNDb250cmFjdC5vcHRpb25zLmFkZHJlc3NcbiAgICB0aGlzLndlYjMgPSB3ZWIzXG4gICAgdGhpcy5jb250cmFjdE5hbWUgPSBuYW1lXG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlXG5cbiAgICAvLyBNZXJnZSB3ZWIzIGNvbnRyYWN0IGluc3RhbmNlIGludG8gRHJpenpsZUNvbnRyYWN0IGluc3RhbmNlLlxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgd2ViM0NvbnRyYWN0KVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFiaS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLmFiaVtpXVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09IFwiZnVuY3Rpb25cIiAmJiBpdGVtLmNvbnN0YW50ID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMubWV0aG9kc1tpdGVtLm5hbWVdLmNhY2hlQ2FsbCA9IHRoaXMuY2FjaGVDYWxsRnVuY3Rpb24oaXRlbS5uYW1lLCBpKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09IFwiZnVuY3Rpb25cIiAmJiBpdGVtLmNvbnN0YW50ID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLm1ldGhvZHNbaXRlbS5uYW1lXS5jYWNoZVNlbmQgPSB0aGlzLmNhY2hlU2VuZEZ1bmN0aW9uKGl0ZW0ubmFtZSwgaSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlciBldmVudCBsaXN0ZW5lcnMgaWYgYW55IGV2ZW50cy5cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnRzW2ldXG5cbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdMSVNURU5fRk9SX0VWRU5UJywgY29udHJhY3Q6IHRoaXMsIGV2ZW50TmFtZX0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FjaGVDYWxsRnVuY3Rpb24oZm5OYW1lLCBmbkluZGV4LCBmbikge1xuICAgIHZhciBjb250cmFjdCA9IHRoaXNcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIENvbGxlY3QgYXJncyBhbmQgaGFzaCB0byB1c2UgYXMga2V5LCAweDAgaWYgbm8gYXJnc1xuICAgICAgdmFyIGFyZ3NIYXNoID0gJzB4MCdcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzXG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXJnc0hhc2ggPSBjb250cmFjdC5nZW5lcmF0ZUFyZ3NIYXNoKGFyZ3MpXG4gICAgICB9XG4gICAgICBjb25zdCBjb250cmFjdE5hbWUgPSBjb250cmFjdC5jb250cmFjdE5hbWVcbiAgICAgIGNvbnN0IGZ1bmN0aW9uU3RhdGUgPSBjb250cmFjdC5zdG9yZS5nZXRTdGF0ZSgpLmNvbnRyYWN0c1tjb250cmFjdE5hbWVdW2ZuTmFtZV1cblxuICAgICAgLy8gSWYgY2FsbCByZXN1bHQgaXMgaW4gc3RhdGUgYW5kIGZyZXNoLCByZXR1cm4gdmFsdWUgaW5zdGVhZCBvZiBjYWxsaW5nXG4gICAgICBpZiAoYXJnc0hhc2ggaW4gZnVuY3Rpb25TdGF0ZSkge1xuICAgICAgICBpZiAoY29udHJhY3Quc3RvcmUuZ2V0U3RhdGUoKS5jb250cmFjdHNbY29udHJhY3ROYW1lXS5zeW5jZWQgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc0hhc2hcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIGNhbGwgZnVuY3Rpb24gYW5kIHVwZGF0ZSBzdG9yZVxuICAgICAgY29udHJhY3Quc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdDQUxMX0NPTlRSQUNUX0ZOJywgY29udHJhY3QsIGZuTmFtZSwgZm5JbmRleCwgYXJncywgYXJnc0hhc2h9KVxuXG4gICAgICAvLyBSZXR1cm4gbm90aGluZyBiZWNhdXNlIHN0YXRlIGlzIGN1cnJlbnRseSBlbXB0eS5cbiAgICAgIHJldHVybiBhcmdzSGFzaFxuICAgIH1cbiAgfVxuXG4gIGNhY2hlU2VuZEZ1bmN0aW9uKGZuTmFtZSwgZm5JbmRleCwgZm4pIHtcbiAgICAvLyBOT1RFOiBNYXkgbm90IG5lZWQgZm4gaW5kZXhcbiAgICB2YXIgY29udHJhY3QgPSB0aGlzXG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgICAvLyBHZW5lcmF0ZSB0ZW1wb3JhcnkgSURcbiAgICAgIHZhciBzdGFja0lkID0gY29udHJhY3Quc3RvcmUuZ2V0U3RhdGUoKS50cmFuc2FjdGlvblN0YWNrLmxlbmd0aFxuXG4gICAgICAvLyBBZGQgSUQgdG8gXCJ0cmFuc2FjdGlvblN0YWNrXCIgd2l0aCBlbXB0eSB2YWx1ZVxuICAgICAgY29udHJhY3Quc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdQVVNIX1RPX1NUQUNLJ30pXG5cbiAgICAgIC8vIERpc3BhdGNoIHR4IHRvIHNhZ2FcbiAgICAgIC8vIFdoZW4gdHhoYXNoIHJlY2VpdmVkLCB3aWxsIGJlIHZhbHVlIG9mIHN0YWNrIElEXG4gICAgICBjb250cmFjdC5zdG9yZS5kaXNwYXRjaCh7dHlwZTogJ1NFTkRfQ09OVFJBQ1RfVFgnLCBjb250cmFjdCwgZm5OYW1lLCBmbkluZGV4LCBhcmdzLCBzdGFja0lkfSlcblxuICAgICAgLy8gcmV0dXJuIHN0YWNrIElEXG4gICAgICByZXR1cm4gc3RhY2tJZFxuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlQXJnc0hhc2goYXJncykge1xuICAgIHZhciB3ZWIzID0gdGhpcy53ZWIzXG4gICAgdmFyIGhhc2hTdHJpbmcgPSAnJ1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGlmICh0eXBlb2YgYXJnc1tpXSAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgIHtcbiAgICAgICAgdmFyIGFyZ1RvSGFzaCA9IGFyZ3NbaV1cblxuICAgICAgICAvLyBTdHJpbmdpZnkgb2JqZWN0cyB0byBhbGxvdyBoYXNoaW5nXG4gICAgICAgIGlmICh0eXBlb2YgYXJnVG9IYXNoID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGFyZ1RvSGFzaCA9IEpTT04uc3RyaW5naWZ5KGFyZ1RvSGFzaClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnZlcnQgbnVtYmVyIHRvIHN0cm9uZyB0byBhbGxvdyBoYXNoaW5nXG4gICAgICAgIGlmICh0eXBlb2YgYXJnVG9IYXNoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGFyZ1RvSGFzaCA9IGFyZ1RvSGFzaC50b1N0cmluZygpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIGluIHBsYWNlIGZvciB3ZWIzIHYwLnhcbiAgICAgICAgaWYgKCd1dGlscycgaW4gd2ViMykge1xuICAgICAgICAgIHZhciBoYXNoUGllY2UgPSB3ZWIzLnV0aWxzLnNoYTMoYXJnVG9IYXNoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBoYXNoUGllY2UgPSB3ZWIzLnNoYTMoYXJnVG9IYXNoKVxuICAgICAgICB9XG5cbiAgICAgICAgaGFzaFN0cmluZyArPSBoYXNoUGllY2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gd2ViMy51dGlscy5zaGEzKGhhc2hTdHJpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJpenpsZUNvbnRyYWN0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRHJpenpsZUNvbnRyYWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJyk7XG52YXIgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHsgc3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeSB9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgd2ViMzoge1xuICAgIC8vIGBibG9ja2Agbm8gbG9uZ2VyIG5lZWRlZDtcbiAgICAvLyBrZWVwaW5nIGZvciBwcmUtdjEuMS4xIGNvbXBhdGliaWxpdHkgd2l0aCBkcml6emxlLXJlYWN0LlxuICAgIGJsb2NrOiBmYWxzZSxcbiAgICBmYWxsYmFjazoge1xuICAgICAgdHlwZTogJ3dzJyxcbiAgICAgIHVybDogJ3dzOi8vMTI3LjAuMC4xOjg1NDUnXG4gICAgfVxuICB9LFxuICBjb250cmFjdHM6IFtdLFxuICBldmVudHM6IHt9LFxuICBwb2xsczoge1xuICAgIGJsb2NrczogMzAwMFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRPcHRpb25zXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmF1bHRPcHRpb25zLmpzIiwiaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcbmNvbnN0IGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdpcy1wbGFpbi1vYmplY3QnKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGVmYXVsdE9wdGlvbnMsIG5ld09wdGlvbnMpIHtcbiAgcmV0dXJuIG1lcmdlKGRlZmF1bHRPcHRpb25zLCBuZXdPcHRpb25zLCB7XG4gICAgaXNNZXJnZWFibGVPYmplY3Q6IGlzUGxhaW5PYmplY3RcbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZXJnZU9wdGlvbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTQ3X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJkZWVwbWVyZ2VcIlxuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNDhfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzLXBsYWluLW9iamVjdFwiXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0OV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2ViM1wiXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBhY2NvdW50c1JlZHVjZXIgZnJvbSAnLi9hY2NvdW50cy9hY2NvdW50c1JlZHVjZXInXG5pbXBvcnQgYWNjb3VudEJhbGFuY2VzUmVkdWNlciBmcm9tICcuL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyJ1xuaW1wb3J0IGNvbnRyYWN0c1JlZHVjZXIgZnJvbSAnLi9jb250cmFjdHMvY29udHJhY3RzUmVkdWNlcidcbmltcG9ydCBkcml6emxlU3RhdHVzUmVkdWNlciBmcm9tICcuL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXInXG5pbXBvcnQgdHJhbnNhY3Rpb25zUmVkdWNlciBmcm9tICcuL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNSZWR1Y2VyJ1xuaW1wb3J0IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyIGZyb20gJy4vdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyJ1xuaW1wb3J0IHdlYjNSZWR1Y2VyIGZyb20gJy4vd2ViMy93ZWIzUmVkdWNlcidcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFjY291bnRzOiBhY2NvdW50c1JlZHVjZXIsXG4gIGFjY291bnRCYWxhbmNlczogYWNjb3VudEJhbGFuY2VzUmVkdWNlcixcbiAgY29udHJhY3RzOiBjb250cmFjdHNSZWR1Y2VyLFxuICBkcml6emxlU3RhdHVzOiBkcml6emxlU3RhdHVzUmVkdWNlcixcbiAgdHJhbnNhY3Rpb25zOiB0cmFuc2FjdGlvbnNSZWR1Y2VyLFxuICB0cmFuc2FjdGlvblN0YWNrOiB0cmFuc2FjdGlvblN0YWNrUmVkdWNlcixcbiAgd2ViMzogd2ViM1JlZHVjZXJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==