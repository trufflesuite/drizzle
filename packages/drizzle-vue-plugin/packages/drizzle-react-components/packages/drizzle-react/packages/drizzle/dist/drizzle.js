(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("redux-saga"), require("redux"), require("web3"));
	else if(typeof define === 'function' && define.amd)
		define(["redux-saga", "redux", "web3"], factory);
	else if(typeof exports === 'object')
		exports["drizzle"] = factory(require("redux-saga"), require("redux"), require("web3"));
	else
		root["drizzle"] = factory(root["redux-saga"], root["redux"], root["web3"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_127__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(35)('wks');
var uid = __webpack_require__(23);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(51);
var toPrimitive = __webpack_require__(30);
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

module.exports = __webpack_require__(75);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_io__ = __webpack_require__(19);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(15)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(47)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(16);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54);
var defined = __webpack_require__(32);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(21);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var ctx = __webpack_require__(50);
var hide = __webpack_require__(9);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sagaHelpers__ = __webpack_require__(77);



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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(4);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.getAccountBalances = getAccountBalances;

var _effects = __webpack_require__(5);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(53);
var enumBugKeys = __webpack_require__(36);

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
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(88);

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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return qEnd; });
/* harmony export (immutable) */ __webpack_exports__["c"] = safeName;
/* harmony export (immutable) */ __webpack_exports__["a"] = fsmIterator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(8);


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
/* 27 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler__ = __webpack_require__(79);
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(47)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(4);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.getAccounts = getAccounts;

var _reduxSaga = __webpack_require__(18);

var _effects = __webpack_require__(5);

var _accountBalancesSaga = __webpack_require__(20);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(21);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(11);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(25);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(60);

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__(4);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.instantiateContract = instantiateContract;

var _reduxSaga = __webpack_require__(18);

var _effects = __webpack_require__(5);

var _DrizzleContract = __webpack_require__(119);

var _DrizzleContract2 = _interopRequireDefault(_DrizzleContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(instantiateContract),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(callListenForContractEvent),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(callSendContractTx),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(callCallContractFn),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(callSyncContract),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(contractsSaga);

/*
 * Instantiation
 */

function instantiateContract(_ref) {
  var contractArtifact = _ref.contractArtifact,
      events = _ref.events,
      store = _ref.store,
      web3 = _ref.web3;
  var networkId;
  return _regenerator2.default.wrap(function instantiateContract$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)(getNetworkId);

        case 2:
          networkId = _context.sent;
          return _context.abrupt('return', new _DrizzleContract2.default(contractArtifact, web3, networkId, store, events));

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/*
 * Events
 */

function createContractEventChannel(_ref2) {
  var contract = _ref2.contract,
      eventName = _ref2.eventName;

  var name = contract.contractArtifact.contractName;

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

function callListenForContractEvent(_ref3) {
  var contract = _ref3.contract,
      eventName = _ref3.eventName;
  var contractEventChannel, event;
  return _regenerator2.default.wrap(function callListenForContractEvent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.call)(createContractEventChannel, { contract: contract, eventName: eventName });

        case 2:
          contractEventChannel = _context2.sent;

        case 3:
          if (false) {
            _context2.next = 11;
            break;
          }

          _context2.next = 6;
          return (0, _effects.take)(contractEventChannel);

        case 6:
          event = _context2.sent;
          _context2.next = 9;
          return (0, _effects.put)(event);

        case 9:
          _context2.next = 3;
          break;

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/*
 * Send and Cache
 */

function createTxChannel(_ref4) {
  var txObject = _ref4.txObject,
      stackId = _ref4.stackId,
      _ref4$sendArgs = _ref4.sendArgs,
      sendArgs = _ref4$sendArgs === undefined ? {} : _ref4$sendArgs,
      contractName = _ref4.contractName;

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

function callSendContractTx(_ref5) {
  var contract = _ref5.contract,
      fnName = _ref5.fnName,
      fnIndex = _ref5.fnIndex,
      args = _ref5.args,
      stackId = _ref5.stackId;
  var finalArg, sendArgs, finalArgTest, contractName, txObject, txChannel, event;
  return _regenerator2.default.wrap(function callSendContractTx$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // Check for type of object and properties indicative of call/send options.
          finalArg = args[args.length - 1];
          sendArgs = {};
          finalArgTest = (0, _effects.call)(isSendOrCallOptions, finalArg);


          if ((typeof finalArg === 'undefined' ? 'undefined' : (0, _typeof3.default)(finalArg)) === 'object' && finalArgTest) {
            sendArgs = finalArg;

            delete args[args.length - 1];
            args.length = args.length - 1;
          }

          // Get name to mark as desynchronized on tx creation
          contractName = contract.contractArtifact.contractName;

          // Create the transaction object and execute the tx.

          _context3.next = 7;
          return _effects.call.apply(undefined, [contract.methods[fnName]].concat((0, _toConsumableArray3.default)(args)));

        case 7:
          txObject = _context3.sent;
          _context3.next = 10;
          return (0, _effects.call)(createTxChannel, { txObject: txObject, stackId: stackId, sendArgs: sendArgs, contractName: contractName });

        case 10:
          txChannel = _context3.sent;
          _context3.prev = 11;

        case 12:
          if (false) {
            _context3.next = 20;
            break;
          }

          _context3.next = 15;
          return (0, _effects.take)(txChannel);

        case 15:
          event = _context3.sent;
          _context3.next = 18;
          return (0, _effects.put)(event);

        case 18:
          _context3.next = 12;
          break;

        case 20:
          _context3.prev = 20;

          txChannel.close();
          return _context3.finish(20);

        case 23:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[11,, 20, 23]]);
}

/*
 * Call and Cache
 */

function callCallContractFn(_ref6) {
  var contract = _ref6.contract,
      fnName = _ref6.fnName,
      fnIndex = _ref6.fnIndex,
      args = _ref6.args,
      argsHash = _ref6.argsHash;
  var finalArg, callArgs, finalArgTest, txObject, callResult, dispatchArgs, errorArgs;
  return _regenerator2.default.wrap(function callCallContractFn$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          // Check for type of object and properties indicative of call/send options.
          finalArg = args[args.length - 1];
          callArgs = {};
          finalArgTest = (0, _effects.call)(isSendOrCallOptions, finalArg);


          if ((typeof finalArg === 'undefined' ? 'undefined' : (0, _typeof3.default)(finalArg)) === 'object' && finalArgTest) {
            callArgs = finalArg;

            delete args[args.length - 1];
            args.length = args.length - 1;
          }

          // Create the transaction object and execute the call.
          _context4.next = 6;
          return _effects.call.apply(undefined, [contract.methods[fnName]].concat((0, _toConsumableArray3.default)(args)));

        case 6:
          txObject = _context4.sent;
          _context4.prev = 7;
          _context4.next = 10;
          return (0, _effects.call)(txObject.call, callArgs);

        case 10:
          callResult = _context4.sent;
          dispatchArgs = {
            name: contract.contractArtifact.contractName,
            variable: contract.abi[fnIndex].name,
            argsHash: argsHash,
            args: args,
            value: callResult,
            fnIndex: fnIndex
          };
          _context4.next = 14;
          return (0, _effects.put)((0, _extends3.default)({ type: 'GOT_CONTRACT_VAR' }, dispatchArgs));

        case 14:
          _context4.next = 22;
          break;

        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4['catch'](7);

          console.error(_context4.t0);

          errorArgs = {
            name: contract.contractArtifact.contractName,
            variable: contract.abi[fnIndex].name,
            argsHash: argsHash,
            args: args,
            error: _context4.t0,
            fnIndex: fnIndex
          };
          _context4.next = 22;
          return (0, _effects.put)((0, _extends3.default)({ type: 'ERROR_CONTRACT_VAR' }, errorArgs));

        case 22:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[7, 16]]);
}

/*
 * Sync Contract
 */

function callSyncContract(action) {
  var contract, contractName, contractsState, contractFnsState, fnName, argsHash, fnIndex, args;
  return _regenerator2.default.wrap(function callSyncContract$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          // Get contract state from store
          contract = action.contract;
          contractName = contract.contractArtifact.contractName;
          _context5.next = 4;
          return (0, _effects.select)(getContractsState);

        case 4:
          contractsState = _context5.sent;
          contractFnsState = (0, _assign2.default)({}, contractsState[contractName]);

          // Remove unecessary keys

          delete contractFnsState.initialized;
          delete contractFnsState.synced;
          delete contractFnsState.events;

          // Iterate over functions and hashes
          _context5.t0 = _regenerator2.default.keys(contractFnsState);

        case 10:
          if ((_context5.t1 = _context5.t0()).done) {
            _context5.next = 23;
            break;
          }

          fnName = _context5.t1.value;
          _context5.t2 = _regenerator2.default.keys(contractFnsState[fnName]);

        case 13:
          if ((_context5.t3 = _context5.t2()).done) {
            _context5.next = 21;
            break;
          }

          argsHash = _context5.t3.value;
          fnIndex = contractFnsState[fnName][argsHash].fnIndex;
          args = contractFnsState[fnName][argsHash].args;

          // Pull args and call fn for each given function

          _context5.next = 19;
          return (0, _effects.put)({ type: 'CALL_CONTRACT_FN', contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, argsHash: argsHash });

        case 19:
          _context5.next = 13;
          break;

        case 21:
          _context5.next = 10;
          break;

        case 23:
          _context5.next = 25;
          return (0, _effects.put)({ type: 'CONTRACT_SYNCED', contractName: contractName });

        case 25:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
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
  return _regenerator2.default.wrap(function contractsSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.takeEvery)('SEND_CONTRACT_TX', callSendContractTx);

        case 2:
          _context6.next = 4;
          return (0, _effects.takeEvery)('CALL_CONTRACT_FN', callCallContractFn);

        case 4:
          _context6.next = 6;
          return (0, _effects.takeEvery)('CONTRACT_SYNCING', callSyncContract);

        case 6:
          _context6.next = 8;
          return (0, _effects.takeEvery)('LISTEN_FOR_EVENT', callListenForContractEvent);

        case 8:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

exports.default = contractsSaga;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
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
/* 31 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(35)('keys');
var uid = __webpack_require__(23);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(7);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(39);
var wksExt = __webpack_require__(41);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(4);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.initializeWeb3 = initializeWeb3;
exports.getNetworkId = getNetworkId;

var _effects = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(initializeWeb3),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(callInitializeWeb3),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(getNetworkId),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(callSendTx),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(web3Saga);

var Web3 = __webpack_require__(127);

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(62);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),
/* 47 */
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BUFFER_OVERFLOW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buffers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(8);


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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(4);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _reduxSaga = __webpack_require__(18);

var _effects = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(callCreateBlockChannel),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(callCreateBlockPollChannel),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(processBlock),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(blocksSaga);

/*
 * Listen for Blocks
 */

function createBlockChannel(_ref) {
  var contracts = _ref.contracts,
      contractAddresses = _ref.contractAddresses,
      contractNames = _ref.contractNames,
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
      emit({ type: 'BLOCK_RECEIVED', blockHeader: blockHeader, contracts: contracts, contractAddresses: contractAddresses, contractNames: contractNames, web3: web3 });
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
  var contracts = _ref2.contracts,
      contractAddresses = _ref2.contractAddresses,
      contractNames = _ref2.contractNames,
      web3 = _ref2.web3;
  var blockChannel, event;
  return _regenerator2.default.wrap(function callCreateBlockChannel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(createBlockChannel, { contracts: contracts, contractAddresses: contractAddresses, contractNames: contractNames, web3: web3 });

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
  var contracts = _ref3.contracts,
      contractAddresses = _ref3.contractAddresses,
      contractNames = _ref3.contractNames,
      interval = _ref3.interval,
      web3 = _ref3.web3;

  return (0, _reduxSaga.eventChannel)(function (emit) {
    var blockPoller = setInterval(function () {
      web3.eth.getBlock('latest').then(function (block) {
        emit({ type: 'BLOCK_RECEIVED', blockHeader: block, contracts: contracts, contractAddresses: contractAddresses, contractNames: contractNames, web3: web3 });
      }).catch(function (error) {
        emit({ type: 'BLOCKS_FAILED', error: error });
        emit(_reduxSaga.END);
      });
    }, interval); // options.polls.blocks

    var unsubscribe = function unsubscribe() {
      clearInterval(blockPoller);
    };

    return unsubscribe;
  });
}

function callCreateBlockPollChannel(_ref4) {
  var contracts = _ref4.contracts,
      contractAddresses = _ref4.contractAddresses,
      contractNames = _ref4.contractNames,
      interval = _ref4.interval,
      web3 = _ref4.web3;
  var blockChannel, event;
  return _regenerator2.default.wrap(function callCreateBlockPollChannel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.call)(createBlockPollChannel, { contracts: contracts, contractAddresses: contractAddresses, contractNames: contractNames, interval: interval, web3: web3 });

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

function processBlock(_ref5) {
  var blockHeader = _ref5.blockHeader,
      contracts = _ref5.contracts,
      contractAddresses = _ref5.contractAddresses,
      contractNames = _ref5.contractNames,
      web3 = _ref5.web3;
  var blockNumber, block, txs, i, index, contractName;
  return _regenerator2.default.wrap(function processBlock$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          blockNumber = blockHeader.number;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _effects.call)(web3.eth.getBlock, blockNumber, true);

        case 4:
          block = _context3.sent;
          txs = block.transactions;

          if (!(txs.length > 0)) {
            _context3.next = 19;
            break;
          }

          i = 0;

        case 8:
          if (!(i < txs.length)) {
            _context3.next = 18;
            break;
          }

          if (!(contractAddresses.indexOf(txs[i].from) !== -1 || contractAddresses.indexOf(txs[i].to) !== -1)) {
            _context3.next = 15;
            break;
          }

          index = contractAddresses.indexOf(txs[i].from) !== -1 ? contractAddresses.indexOf(txs[i].from) : contractAddresses.indexOf(txs[i].to);
          contractName = contractNames[index];
          _context3.next = 14;
          return (0, _effects.put)({ type: 'CONTRACT_SYNCING', contract: contracts[contractName] });

        case 14:
          return _context3.abrupt('return');

        case 15:
          i++;
          _context3.next = 8;
          break;

        case 18:
          return _context3.abrupt('return');

        case 19:
          return _context3.abrupt('return');

        case 22:
          _context3.prev = 22;
          _context3.t0 = _context3['catch'](1);

          console.error('Error in block processing:');
          console.error(_context3.t0);

          _context3.next = 28;
          return (0, _effects.put)({ type: 'BLOCK_FAILED', error: _context3.t0 });

        case 28:
          return _context3.abrupt('return');

        case 29:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[1, 22]]);
}

function blocksSaga() {
  return _regenerator2.default.wrap(function blocksSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeLatest)('BLOCKS_LISTENING', callCreateBlockChannel);

        case 2:
          _context4.next = 4;
          return (0, _effects.takeLatest)('BLOCKS_POLLING', callCreateBlockPollChannel);

        case 4:
          _context4.next = 6;
          return (0, _effects.takeEvery)('BLOCK_RECEIVED', processBlock);

        case 6:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

exports.default = blocksSaga;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(84);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(15)(function () {
  return Object.defineProperty(__webpack_require__(52)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(86)(false);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(31);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(33);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(90)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(57)(String, 'String', function (iterated) {
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(39);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(58);
var hide = __webpack_require__(9);
var has = __webpack_require__(7);
var Iterators = __webpack_require__(17);
var $iterCreate = __webpack_require__(91);
var setToStringTag = __webpack_require__(40);
var getPrototypeOf = __webpack_require__(94);
var ITERATOR = __webpack_require__(0)('iterator');
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(92);
var enumBugKeys = __webpack_require__(36);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(52)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(93).appendChild(iframe);
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(102);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(108);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(53);
var hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(4);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = __webpack_require__(5);

var _defaultOptions = __webpack_require__(125);

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

var _deepmerge = __webpack_require__(126);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _web3Saga = __webpack_require__(43);

var _accountsSaga = __webpack_require__(28);

var _accountBalancesSaga = __webpack_require__(20);

var _contractsSaga = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(initializeDrizzle),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(drizzleStatusSaga);

// Initialization Functions


function initializeDrizzle(action) {
  var options, web3Options, web3, i, contractArtifact, events, contractAddresses, contractNames, contract, interval;
  return _regenerator2.default.wrap(function initializeDrizzle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          options = (0, _deepmerge2.default)(_defaultOptions2.default, action.options);
          web3Options = options.web3;

          // Initialize web3 and get the current network ID.

          _context.next = 5;
          return (0, _effects.call)(_web3Saga.initializeWeb3, { options: web3Options });

        case 5:
          web3 = _context.sent;

          action.drizzle.web3 = web3;

          _context.next = 9;
          return (0, _effects.call)(_web3Saga.getNetworkId, { web3: web3 });

        case 9:
          _context.next = 11;
          return (0, _effects.call)(_accountsSaga.getAccounts, { web3: web3 });

        case 11:
          _context.next = 13;
          return (0, _effects.call)(_accountBalancesSaga.getAccountBalances, { web3: web3 });

        case 13:
          i = 0;

        case 14:
          if (!(i < options.contracts.length)) {
            _context.next = 24;
            break;
          }

          contractArtifact = options.contracts[i];
          events = [];


          if (contractArtifact.contractName in options.events) {
            events = options.events[contractArtifact.contractName];
          }

          _context.next = 20;
          return (0, _effects.call)(_contractsSaga.instantiateContract, { contractArtifact: contractArtifact, events: events, store: action.drizzle.store, web3: web3 });

        case 20:
          action.drizzle.contracts[contractArtifact.contractName] = _context.sent;

        case 21:
          i++;
          _context.next = 14;
          break;

        case 24:

          // Collect contract addresses in an array for later comparison in txs.
          contractAddresses = [];
          contractNames = [];


          for (contract in action.drizzle.contracts) {
            contractNames.push(action.drizzle.contracts[contract].contractArtifact.contractName);
            contractAddresses.push(action.drizzle.contracts[contract].options.address);
          }

          if (!web3.currentProvider.isMetaMask) {
            _context.next = 33;
            break;
          }

          // Using MetaMask, attempt block polling.
          interval = options.polls.blocks;
          _context.next = 31;
          return (0, _effects.put)({ type: 'BLOCKS_POLLING', contracts: action.drizzle.contracts, interval: interval, contractAddresses: contractAddresses, contractNames: contractNames, web3: web3 });

        case 31:
          _context.next = 35;
          break;

        case 33:
          _context.next = 35;
          return (0, _effects.put)({ type: 'BLOCKS_LISTENING', contracts: action.drizzle.contracts, contractAddresses: contractAddresses, contractNames: contractNames, web3: web3 });

        case 35:
          if (!('accounts' in options.polls)) {
            _context.next = 38;
            break;
          }

          _context.next = 38;
          return (0, _effects.put)({ type: 'ACCOUNTS_POLLING', interval: options.polls.accounts, web3: web3 });

        case 38:
          _context.next = 47;
          break;

        case 40:
          _context.prev = 40;
          _context.t0 = _context['catch'](0);
          _context.next = 44;
          return (0, _effects.put)({ type: 'DRIZZLE_FAILED', error: _context.t0 });

        case 44:

          console.error('Error initializing Drizzle:');
          console.error(_context.t0);

          return _context.abrupt('return');

        case 47:
          _context.next = 49;
          return (0, _effects.put)({ type: 'DRIZZLE_INITIALIZED' });

        case 49:
          return _context.abrupt('return');

        case 50:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 40]]);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(21);

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(44);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(11);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(25);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(44);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends13 = __webpack_require__(11);

var _extends14 = _interopRequireDefault(_extends13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var contractsReducer = function contractsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  /*
   * Contract Status
   */

  if (action.type === 'CONTRACT_INITIALIZED') {
    return (0, _extends14.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends14.default)({}, state[action.name], {
      initialized: true,
      synced: true,
      events: []
    })));
  }

  if (action.type === 'CONTRACT_SYNCING') {
    var contractName = action.contract.contractArtifact.contractName;

    return (0, _extends14.default)({}, state, (0, _defineProperty3.default)({}, contractName, (0, _extends14.default)({}, state[contractName], {
      synced: false
    })));
  }

  if (action.type === 'CONTRACT_SYNCED') {
    return (0, _extends14.default)({}, state, (0, _defineProperty3.default)({}, action.contractName, (0, _extends14.default)({}, state[action.contractName], {
      synced: true
    })));
  }

  if (action.type === 'CONTRACT_SYNC_IND') {
    return (0, _extends14.default)({}, state, (0, _defineProperty3.default)({}, action.contractName, (0, _extends14.default)({}, state[action.contractName], {
      synced: false
    })));
  }

  /*
   * Contract Functions
   */

  if (action.type === 'GOT_CONTRACT_VAR') {
    return (0, _extends14.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends14.default)({}, state[action.name], (0, _defineProperty3.default)({}, action.variable, (0, _extends14.default)({}, state[action.name][action.variable], (0, _defineProperty3.default)({}, action.argsHash, (0, _extends14.default)({}, state[action.name][action.variable][action.argsHash], {
      args: action.args,
      fnIndex: action.fnIndex,
      value: action.value
    })))))));
  }

  if (action.type === 'ERROR_CONTRACT_VAR') {
    return (0, _extends14.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends14.default)({}, state[action.name], (0, _defineProperty3.default)({}, action.variable, (0, _extends14.default)({}, state[action.name][action.variable], (0, _defineProperty3.default)({}, action.argsHash, (0, _extends14.default)({}, state[action.name][action.variable][action.argsHash], {
      args: action.args,
      fnIndex: action.fnIndex,
      error: action.error
    })))))));
  }

  /*
   * Contract Events
   */

  if (action.type === 'EVENT_FIRED') {
    return (0, _extends14.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends14.default)({}, state[action.name], {
      events: [].concat((0, _toConsumableArray3.default)(state[action.name].events), [action.event])
    })));
  }

  return state;
};

exports.default = contractsReducer;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(11);

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(25);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(44);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends6 = __webpack_require__(11);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(25);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(11);

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drizzleSagas = exports.drizzleReducers = exports.generateStore = exports.generateContractsInitialState = exports.Drizzle = undefined;

var _Drizzle = __webpack_require__(72);

var _Drizzle2 = _interopRequireDefault(_Drizzle);

var _generateStore = __webpack_require__(73);

var _generateStore2 = _interopRequireDefault(_generateStore);

var _generateContractsInitialState = __webpack_require__(129);

var _generateContractsInitialState2 = _interopRequireDefault(_generateContractsInitialState);

var _accountsReducer = __webpack_require__(64);

var _accountsReducer2 = _interopRequireDefault(_accountsReducer);

var _accountBalancesReducer = __webpack_require__(65);

var _accountBalancesReducer2 = _interopRequireDefault(_accountBalancesReducer);

var _contractsReducer = __webpack_require__(66);

var _contractsReducer2 = _interopRequireDefault(_contractsReducer);

var _drizzleStatusReducer = __webpack_require__(67);

var _drizzleStatusReducer2 = _interopRequireDefault(_drizzleStatusReducer);

var _transactionsReducer = __webpack_require__(68);

var _transactionsReducer2 = _interopRequireDefault(_transactionsReducer);

var _transactionStackReducer = __webpack_require__(69);

var _transactionStackReducer2 = _interopRequireDefault(_transactionStackReducer);

var _web3Reducer = __webpack_require__(70);

var _web3Reducer2 = _interopRequireDefault(_web3Reducer);

var _accountsSaga = __webpack_require__(28);

var _accountsSaga2 = _interopRequireDefault(_accountsSaga);

var _accountBalancesSaga = __webpack_require__(20);

var _accountBalancesSaga2 = _interopRequireDefault(_accountBalancesSaga);

var _blocksSaga = __webpack_require__(49);

var _blocksSaga2 = _interopRequireDefault(_blocksSaga);

var _contractsSaga = __webpack_require__(29);

var _contractsSaga2 = _interopRequireDefault(_contractsSaga);

var _drizzleStatusSaga = __webpack_require__(63);

var _drizzleStatusSaga2 = _interopRequireDefault(_drizzleStatusSaga);

var _web3Saga = __webpack_require__(43);

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drizzle = function Drizzle(options, store) {
  var _this = this;

  (0, _classCallCheck3.default)(this, Drizzle);

  // Variables
  this.contracts = {};
  this.options = options;
  this.store = store;
  this.web3 = {};

  // Wait for window load event in case of injected web3.
  window.addEventListener('load', function () {
    // Begin Drizzle initialization.
    store.dispatch({ type: 'DRIZZLE_INITIALIZING', drizzle: _this, options: options });
  });
};

exports.default = Drizzle;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _redux = __webpack_require__(46);

var _reduxSaga = __webpack_require__(18);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _rootSaga = __webpack_require__(74);

var _rootSaga2 = _interopRequireDefault(_rootSaga);

var _reducer = __webpack_require__(128);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateStore(options) {
  // Redux DevTools
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

  // Preloaded state
  var contractsInitialState = {};

  for (var i = 0; i < options.contracts.length; i++) {
    // Initial contract details
    var contractName = options.contracts[i].contractName;

    contractsInitialState[contractName] = {
      initialized: false,
      synced: false

      // Constant getters
    };for (var i2 = 0; i2 < options.contracts[i].abi.length; i2++) {
      var item = options.contracts[i].abi[i2];

      if (item.type == "function" && item.constant === true) {
        contractsInitialState[contractName][item.name] = {};
      }
    }
  }

  var preloadedState = {
    contracts: contractsInitialState

    // create the saga middleware
  };var sagaMiddleware = (0, _reduxSaga2.default)();

  var store = (0, _redux.createStore)(_reducer2.default, preloadedState, composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware)));

  sagaMiddleware.run(_rootSaga2.default);

  return store;
}

module.exports = generateStore;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(4);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = root;

var _effects = __webpack_require__(5);

var _accountsSaga = __webpack_require__(28);

var _accountsSaga2 = _interopRequireDefault(_accountsSaga);

var _accountBalancesSaga = __webpack_require__(20);

var _accountBalancesSaga2 = _interopRequireDefault(_accountBalancesSaga);

var _blocksSaga = __webpack_require__(49);

var _blocksSaga2 = _interopRequireDefault(_blocksSaga);

var _contractsSaga = __webpack_require__(29);

var _contractsSaga2 = _interopRequireDefault(_contractsSaga);

var _drizzleStatusSaga = __webpack_require__(63);

var _drizzleStatusSaga2 = _interopRequireDefault(_drizzleStatusSaga);

var _web3Saga = __webpack_require__(43);

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
/* 75 */
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

module.exports = __webpack_require__(76);

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
/* 76 */
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
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export takeEvery */
/* unused harmony export takeLatest */
/* unused harmony export throttle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__takeEvery__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__takeLatest__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__throttle__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(8);
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
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeEvery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(27);




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
/* 79 */
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
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(27);




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
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buffers__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(8);






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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(12);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(85) });


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(37);
var pIE = __webpack_require__(24);
var toObject = __webpack_require__(38);
var IObject = __webpack_require__(54);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(15)(function () {
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(55);
var toAbsoluteIndex = __webpack_require__(87);
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(95);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var defined = __webpack_require__(32);
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(59);
var descriptor = __webpack_require__(16);
var setToStringTag = __webpack_require__(40);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(13);
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(38);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(50);
var $export = __webpack_require__(12);
var toObject = __webpack_require__(38);
var call = __webpack_require__(96);
var isArrayIter = __webpack_require__(97);
var toLength = __webpack_require__(55);
var createProperty = __webpack_require__(98);
var getIterFn = __webpack_require__(99);

$export($export.S + $export.F * !__webpack_require__(101)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(17);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3);
var createDesc = __webpack_require__(16);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(100);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(17);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(31);
var TAG = __webpack_require__(0)('toStringTag');
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(104);
module.exports = __webpack_require__(41).f('iterator');


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
var global = __webpack_require__(1);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(17);
var TO_STRING_TAG = __webpack_require__(0)('toStringTag');

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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(106);
var step = __webpack_require__(107);
var Iterators = __webpack_require__(17);
var toIObject = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(57)(Array, 'Array', function (iterated, kind) {
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
/* 106 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
__webpack_require__(116);
__webpack_require__(117);
__webpack_require__(118);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(58);
var META = __webpack_require__(111).KEY;
var $fails = __webpack_require__(15);
var shared = __webpack_require__(35);
var setToStringTag = __webpack_require__(40);
var uid = __webpack_require__(23);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(41);
var wksDefine = __webpack_require__(42);
var enumKeys = __webpack_require__(112);
var isArray = __webpack_require__(113);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(30);
var createDesc = __webpack_require__(16);
var _create = __webpack_require__(59);
var gOPNExt = __webpack_require__(114);
var $GOPD = __webpack_require__(115);
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
  __webpack_require__(61).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(24).f = $propertyIsEnumerable;
  __webpack_require__(37).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(39)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(23)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(7);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(15)(function () {
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(37);
var pIE = __webpack_require__(24);
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(31);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10);
var gOPN = __webpack_require__(61).f;
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(24);
var createDesc = __webpack_require__(16);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(30);
var has = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(51);
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
/* 116 */
/***/ (function(module, exports) {



/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('asyncIterator');


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('observable');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(120);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(60);

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = __webpack_require__(21);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(122);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrizzleContract = function () {
  function DrizzleContract(contractArtifact, web3, networkId, store) {
    var events = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    (0, _classCallCheck3.default)(this, DrizzleContract);

    this.contractArtifact = contractArtifact;
    this.abi = contractArtifact.abi;
    this.web3 = web3;
    this.store = store;

    // Instantiate the contract.
    var web3Contract = new web3.eth.Contract(this.abi, this.contractArtifact.networks[networkId].address, {
      from: this.store.getState().accounts[0],
      data: this.contractArtifact.deployedBytecode
    });

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

    var name = contractArtifact.contractName;

    store.dispatch({ type: 'CONTRACT_INITIALIZED', name: name });
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
        var contractName = contract.contractArtifact.contractName;
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(121), __esModule: true };

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(62);

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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(3).f });


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultOptions = {
  web3: {
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
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_127__;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(46);

var _accountsReducer = __webpack_require__(64);

var _accountsReducer2 = _interopRequireDefault(_accountsReducer);

var _accountBalancesReducer = __webpack_require__(65);

var _accountBalancesReducer2 = _interopRequireDefault(_accountBalancesReducer);

var _contractsReducer = __webpack_require__(66);

var _contractsReducer2 = _interopRequireDefault(_contractsReducer);

var _drizzleStatusReducer = __webpack_require__(67);

var _drizzleStatusReducer2 = _interopRequireDefault(_drizzleStatusReducer);

var _transactionsReducer = __webpack_require__(68);

var _transactionsReducer2 = _interopRequireDefault(_transactionsReducer);

var _transactionStackReducer = __webpack_require__(69);

var _transactionStackReducer2 = _interopRequireDefault(_transactionStackReducer);

var _web3Reducer = __webpack_require__(70);

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

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function generateContractsInitialState(options) {
  // Preloaded state
  var contractsInitialState = {};

  for (var i = 0; i < options.contracts.length; i++) {
    // Initial contract details
    var contractName = options.contracts[i].contractName;

    contractsInitialState[contractName] = {
      initialized: false,
      synced: false

      // Constant getters
    };for (var i2 = 0; i2 < options.contracts[i].abi.length; i2++) {
      var item = options.contracts[i].abi[i2];

      if (item.type == "function" && item.constant === true) {
        contractsInitialState[contractName][item.name] = {};
      }
    }
  }

  return contractsInitialState;
}

module.exports = generateContractsInitialState;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NTdlNjg3MmZiMzQzZDI0NDA5MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL2ZzbUl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL2FjY291bnRzU2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJhY3RzL2NvbnRyYWN0c1NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViMy93ZWIzU2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9idWZmZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmxvY2tzU2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL3NyYy9kcml6emxlU3RhdHVzL2RyaXp6bGVTdGF0dXNTYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9hY2NvdW50c1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cmFjdHMvY29udHJhY3RzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvblN0YWNrUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViMy93ZWIzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RyaXp6bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jvb3RTYWdhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGFrZUV2ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9zYWdhSGVscGVycy90YWtlTGF0ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJpenpsZUNvbnRyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmF1bHRPcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWVwbWVyZ2UvZGlzdC9lcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlLmpzIl0sIm5hbWVzIjpbImdldEFjY291bnRCYWxhbmNlcyIsImFjY291bnRCYWxhbmNlc1NhZ2EiLCJhY3Rpb24iLCJnZXRBY2NvdW50c1N0YXRlIiwiYWNjb3VudHMiLCJ3ZWIzIiwiY29uc29sZSIsImVycm9yIiwiaSIsImFjY291bnQiLCJldGgiLCJnZXRCYWxhbmNlIiwiYWNjb3VudEJhbGFuY2UiLCJ0eXBlIiwic3RhdGUiLCJnZXRBY2NvdW50cyIsImNyZWF0ZUFjY291bnRzUG9sbENoYW5uZWwiLCJjYWxsQ3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbCIsImFjY291bnRzU2FnYSIsImludGVydmFsIiwicGVyc2lzdGVkV2ViMyIsImFjY291bnRzUG9sbGVyIiwic2V0SW50ZXJ2YWwiLCJlbWl0IiwidW5zdWJzY3JpYmUiLCJjbGVhckludGVydmFsIiwiYWNjb3VudHNDaGFubmVsIiwiZXZlbnQiLCJjbG9zZSIsImluc3RhbnRpYXRlQ29udHJhY3QiLCJjYWxsTGlzdGVuRm9yQ29udHJhY3RFdmVudCIsImNhbGxTZW5kQ29udHJhY3RUeCIsImNhbGxDYWxsQ29udHJhY3RGbiIsImNhbGxTeW5jQ29udHJhY3QiLCJjb250cmFjdHNTYWdhIiwiY29udHJhY3RBcnRpZmFjdCIsImV2ZW50cyIsInN0b3JlIiwiZ2V0TmV0d29ya0lkIiwibmV0d29ya0lkIiwiY3JlYXRlQ29udHJhY3RFdmVudENoYW5uZWwiLCJjb250cmFjdCIsImV2ZW50TmFtZSIsIm5hbWUiLCJjb250cmFjdE5hbWUiLCJldmVudExpc3RlbmVyIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRyYWN0RXZlbnRDaGFubmVsIiwiY3JlYXRlVHhDaGFubmVsIiwidHhPYmplY3QiLCJzdGFja0lkIiwic2VuZEFyZ3MiLCJwZXJzaXN0VHhIYXNoIiwidHhQcm9taUV2ZW50Iiwic2VuZCIsInR4SGFzaCIsImNvbmZpcm1hdGlvbk51bWJlciIsInJlY2VpcHQiLCJjb25maXJtYXRpb25SZWNlaXB0Iiwib2ZmIiwiZm5OYW1lIiwiZm5JbmRleCIsImFyZ3MiLCJmaW5hbEFyZyIsImxlbmd0aCIsImZpbmFsQXJnVGVzdCIsImlzU2VuZE9yQ2FsbE9wdGlvbnMiLCJtZXRob2RzIiwidHhDaGFubmVsIiwiYXJnc0hhc2giLCJjYWxsQXJncyIsImNhbGwiLCJjYWxsUmVzdWx0IiwiZGlzcGF0Y2hBcmdzIiwidmFyaWFibGUiLCJhYmkiLCJ2YWx1ZSIsImVycm9yQXJncyIsImdldENvbnRyYWN0c1N0YXRlIiwiY29udHJhY3RzU3RhdGUiLCJjb250cmFjdEZuc1N0YXRlIiwiaW5pdGlhbGl6ZWQiLCJzeW5jZWQiLCJjb250cmFjdHMiLCJvcHRpb25zIiwiaW5pdGlhbGl6ZVdlYjMiLCJjYWxsSW5pdGlhbGl6ZVdlYjMiLCJjYWxsU2VuZFR4Iiwid2ViM1NhZ2EiLCJXZWIzIiwicmVxdWlyZSIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsImNhY2hlU2VuZFRyYW5zYWN0aW9uIiwibG9nIiwiZmFsbGJhY2siLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYnNvY2tldFByb3ZpZGVyIiwidXJsIiwiZGlzcGF0Y2giLCJuZXQiLCJnZXRJZCIsImV2ZW50Q2hhbm5lbCIsInNlbmRUcmFuc2FjdGlvbiIsIkVORCIsInRha2UiLCJjYWxsQ3JlYXRlQmxvY2tDaGFubmVsIiwiY2FsbENyZWF0ZUJsb2NrUG9sbENoYW5uZWwiLCJwcm9jZXNzQmxvY2siLCJibG9ja3NTYWdhIiwiY3JlYXRlQmxvY2tDaGFubmVsIiwiY29udHJhY3RBZGRyZXNzZXMiLCJjb250cmFjdE5hbWVzIiwiYmxvY2tFdmVudHMiLCJzdWJzY3JpYmUiLCJyZXN1bHQiLCJibG9ja0hlYWRlciIsImJsb2NrQ2hhbm5lbCIsImNyZWF0ZUJsb2NrUG9sbENoYW5uZWwiLCJibG9ja1BvbGxlciIsImdldEJsb2NrIiwidGhlbiIsImJsb2NrIiwiY2F0Y2giLCJibG9ja051bWJlciIsIm51bWJlciIsInR4cyIsInRyYW5zYWN0aW9ucyIsImluZGV4T2YiLCJmcm9tIiwidG8iLCJpbmRleCIsImluaXRpYWxpemVEcml6emxlIiwiZHJpenpsZVN0YXR1c1NhZ2EiLCJ3ZWIzT3B0aW9ucyIsImRyaXp6bGUiLCJwdXNoIiwiYWRkcmVzcyIsImlzTWV0YU1hc2siLCJwb2xscyIsImJsb2NrcyIsImluaXRpYWxTdGF0ZSIsImFjY291bnRzUmVkdWNlciIsImFjY291bnRCYWxhbmNlc1JlZHVjZXIiLCJjb250cmFjdHNSZWR1Y2VyIiwiZHJpenpsZVN0YXR1c1JlZHVjZXIiLCJ0cmFuc2FjdGlvbnNSZWR1Y2VyIiwic3RhdHVzIiwiY29uZmlybWF0aW9ucyIsInRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyIiwicG9wIiwid2ViM1JlZHVjZXIiLCJkcml6emxlUmVkdWNlcnMiLCJhY2NvdW50QmFsYW5jZXMiLCJkcml6emxlU3RhdHVzIiwidHJhbnNhY3Rpb25TdGFjayIsImRyaXp6bGVTYWdhcyIsIkRyaXp6bGUiLCJnZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZSIsImdlbmVyYXRlU3RvcmUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9zZUVuaGFuY2VycyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbnRyYWN0c0luaXRpYWxTdGF0ZSIsImkyIiwiaXRlbSIsImNvbnN0YW50IiwicHJlbG9hZGVkU3RhdGUiLCJzYWdhTWlkZGxld2FyZSIsInJ1biIsIm1vZHVsZSIsImV4cG9ydHMiLCJyb290IiwiRHJpenpsZUNvbnRyYWN0Iiwid2ViM0NvbnRyYWN0IiwiQ29udHJhY3QiLCJuZXR3b3JrcyIsImdldFN0YXRlIiwiZGF0YSIsImRlcGxveWVkQnl0ZWNvZGUiLCJjYWNoZUNhbGwiLCJjYWNoZUNhbGxGdW5jdGlvbiIsImNhY2hlU2VuZCIsImNhY2hlU2VuZEZ1bmN0aW9uIiwiZm4iLCJhcmd1bWVudHMiLCJnZW5lcmF0ZUFyZ3NIYXNoIiwiZnVuY3Rpb25TdGF0ZSIsImhhc2hTdHJpbmciLCJhcmdUb0hhc2giLCJ0b1N0cmluZyIsImhhc2hQaWVjZSIsInV0aWxzIiwic2hhMyIsImRlZmF1bHRPcHRpb25zIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7Ozs7Ozs7QUNMekMsNkJBQTZCO0FBQzdCLHVDQUF1Qzs7Ozs7OztBQ0R2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBLGlDQUFpQyxRQUFRLG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUMxRSxDQUFDOzs7Ozs7O0FDSEQsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFP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QUFFLEVBQUUsZUFBZTs7QUFFak07QUFDM0M7QUFDSDs7QUFFZjtBQUNBLFdBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7O0FDdkxoQjs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FB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QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxP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OEI7QUFLOUIzQiw2Q0FMOEI7QUFNOUI0QixxREFOOEI7QUFPOUJ4SjtBQVA4QixDQUFoQixDQUFoQjs7a0JBVWVnTSxPOzs7Ozs7Ozs7QUNwQmYsU0FBU3JDLDZCQUFULENBQXVDM0UsT0FBdkMsRUFBZ0Q7QUFDOUM7QUFDQSxNQUFJZ0Ysd0JBQXdCLEVBQTVCOztBQUVBLE9BQUssSUFBSTdKLElBQUksQ0FBYixFQUFnQkEsSUFBSTZFLFFBQVFELFNBQVIsQ0FBa0JuQixNQUF0QyxFQUE4Q3pELEdBQTlDLEVBQW1EO0FBQ2pEO0FBQ0EsUUFBSW9DLGVBQWV5QyxRQUFRRCxTQUFSLENBQWtCNUUsQ0FBbEIsRUFBcUJvQyxZQUF4Qzs7QUFFQXlILDBCQUFzQnpILFlBQXRCLElBQXNDO0FBQ3BDc0MsbUJBQWEsS0FEdUI7QUFFcENDLGNBQVE7O0FBR1Y7QUFMc0MsS0FBdEMsQ0FNQSxLQUFLLElBQUltRixLQUFLLENBQWQsRUFBaUJBLEtBQUtqRixRQUFRRCxTQUFSLENBQWtCNUUsQ0FBbEIsRUFBcUJvRSxHQUFyQixDQUF5QlgsTUFBL0MsRUFBdURxRyxJQUF2RCxFQUE2RDtBQUMzRCxVQUFJQyxPQUFPbEYsUUFBUUQsU0FBUixDQUFrQjVFLENBQWxCLEVBQXFCb0UsR0FBckIsQ0FBeUIwRixFQUF6QixDQUFYOztBQUVBLFVBQUlDLEtBQUsxSixJQUFMLElBQWEsVUFBYixJQUEyQjBKLEtBQUtDLFFBQUwsS0FBa0IsSUFBakQsRUFBdUQ7QUFDckRILDhCQUFzQnpILFlBQXRCLEVBQW9DMkgsS0FBSzVILElBQXpDLElBQWlELEVBQWpEO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU8wSCxxQkFBUDtBQUNEOztBQUVETyxPQUFPQyxPQUFQLEdBQWlCYiw2QkFBakIsQyIsImZpbGUiOiJkcml6emxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVkdXgtc2FnYVwiKSwgcmVxdWlyZShcInJlZHV4XCIpLCByZXF1aXJlKFwid2ViM1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWR1eC1zYWdhXCIsIFwicmVkdXhcIiwgXCJ3ZWIzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXp6bGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpLCByZXF1aXJlKFwicmVkdXhcIiksIHJlcXVpcmUoXCJ3ZWIzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkcml6emxlXCJdID0gZmFjdG9yeShyb290W1wicmVkdXgtc2FnYVwiXSwgcm9vdFtcInJlZHV4XCJdLCByb290W1wid2ViM1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzQ2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTI3X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg1N2U2ODcyZmIzNDNkMjQ0MDkzIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydCB2YXIgc3ltID0gZnVuY3Rpb24gc3ltKGlkKSB7XG4gIHJldHVybiAnQEByZWR1eC1zYWdhLycgKyBpZDtcbn07XG5cbmV4cG9ydCB2YXIgVEFTSyA9IHN5bSgnVEFTSycpO1xuZXhwb3J0IHZhciBIRUxQRVIgPSBzeW0oJ0hFTFBFUicpO1xuZXhwb3J0IHZhciBNQVRDSCA9IHN5bSgnTUFUQ0gnKTtcbmV4cG9ydCB2YXIgQ0FOQ0VMID0gc3ltKCdDQU5DRUxfUFJPTUlTRScpO1xuZXhwb3J0IHZhciBTQUdBX0FDVElPTiA9IHN5bSgnU0FHQV9BQ1RJT04nKTtcbmV4cG9ydCB2YXIgU0VMRl9DQU5DRUxMQVRJT04gPSBzeW0oJ1NFTEZfQ0FOQ0VMTEFUSU9OJyk7XG5leHBvcnQgdmFyIGtvbnN0ID0gZnVuY3Rpb24ga29uc3Qodikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB2O1xuICB9O1xufTtcbmV4cG9ydCB2YXIga1RydWUgPSBrb25zdCh0cnVlKTtcbmV4cG9ydCB2YXIga0ZhbHNlID0ga29uc3QoZmFsc2UpO1xuZXhwb3J0IHZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuZXhwb3J0IHZhciBpZGVudCA9IGZ1bmN0aW9uIGlkZW50KHYpIHtcbiAgcmV0dXJuIHY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2sodmFsdWUsIHByZWRpY2F0ZSwgZXJyb3IpIHtcbiAgaWYgKCFwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgbG9nKCdlcnJvcicsICd1bmNhdWdodCBhdCBjaGVjaycsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIGlzLm5vdFVuZGVmKG9iamVjdCkgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbn1cblxuZXhwb3J0IHZhciBpcyA9IHtcbiAgdW5kZWY6IGZ1bmN0aW9uIHVuZGVmKHYpIHtcbiAgICByZXR1cm4gdiA9PT0gbnVsbCB8fCB2ID09PSB1bmRlZmluZWQ7XG4gIH0sXG4gIG5vdFVuZGVmOiBmdW5jdGlvbiBub3RVbmRlZih2KSB7XG4gICAgcmV0dXJuIHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkO1xuICB9LFxuICBmdW5jOiBmdW5jdGlvbiBmdW5jKGYpIHtcbiAgICByZXR1cm4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbic7XG4gIH0sXG4gIG51bWJlcjogZnVuY3Rpb24gbnVtYmVyKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInO1xuICB9LFxuICBzdHJpbmc6IGZ1bmN0aW9uIHN0cmluZyhzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJztcbiAgfSxcbiAgYXJyYXk6IEFycmF5LmlzQXJyYXksXG4gIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgIWlzLmFycmF5KG9iaikgJiYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iaikpID09PSAnb2JqZWN0JztcbiAgfSxcbiAgcHJvbWlzZTogZnVuY3Rpb24gcHJvbWlzZShwKSB7XG4gICAgcmV0dXJuIHAgJiYgaXMuZnVuYyhwLnRoZW4pO1xuICB9LFxuICBpdGVyYXRvcjogZnVuY3Rpb24gaXRlcmF0b3IoaXQpIHtcbiAgICByZXR1cm4gaXQgJiYgaXMuZnVuYyhpdC5uZXh0KSAmJiBpcy5mdW5jKGl0LnRocm93KTtcbiAgfSxcbiAgaXRlcmFibGU6IGZ1bmN0aW9uIGl0ZXJhYmxlKGl0KSB7XG4gICAgcmV0dXJuIGl0ICYmIGlzLmZ1bmMoU3ltYm9sKSA/IGlzLmZ1bmMoaXRbU3ltYm9sLml0ZXJhdG9yXSkgOiBpcy5hcnJheShpdCk7XG4gIH0sXG4gIHRhc2s6IGZ1bmN0aW9uIHRhc2sodCkge1xuICAgIHJldHVybiB0ICYmIHRbVEFTS107XG4gIH0sXG4gIG9ic2VydmFibGU6IGZ1bmN0aW9uIG9ic2VydmFibGUob2IpIHtcbiAgICByZXR1cm4gb2IgJiYgaXMuZnVuYyhvYi5zdWJzY3JpYmUpO1xuICB9LFxuICBidWZmZXI6IGZ1bmN0aW9uIGJ1ZmZlcihidWYpIHtcbiAgICByZXR1cm4gYnVmICYmIGlzLmZ1bmMoYnVmLmlzRW1wdHkpICYmIGlzLmZ1bmMoYnVmLnRha2UpICYmIGlzLmZ1bmMoYnVmLnB1dCk7XG4gIH0sXG4gIHBhdHRlcm46IGZ1bmN0aW9uIHBhdHRlcm4ocGF0KSB7XG4gICAgcmV0dXJuIHBhdCAmJiAoaXMuc3RyaW5nKHBhdCkgfHwgKHR5cGVvZiBwYXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdCkpID09PSAnc3ltYm9sJyB8fCBpcy5mdW5jKHBhdCkgfHwgaXMuYXJyYXkocGF0KSk7XG4gIH0sXG4gIGNoYW5uZWw6IGZ1bmN0aW9uIGNoYW5uZWwoY2gpIHtcbiAgICByZXR1cm4gY2ggJiYgaXMuZnVuYyhjaC50YWtlKSAmJiBpcy5mdW5jKGNoLmNsb3NlKTtcbiAgfSxcbiAgaGVscGVyOiBmdW5jdGlvbiBoZWxwZXIoaXQpIHtcbiAgICByZXR1cm4gaXQgJiYgaXRbSEVMUEVSXTtcbiAgfSxcbiAgc3RyaW5nYWJsZUZ1bmM6IGZ1bmN0aW9uIHN0cmluZ2FibGVGdW5jKGYpIHtcbiAgICByZXR1cm4gaXMuZnVuYyhmKSAmJiBoYXNPd24oZiwgJ3RvU3RyaW5nJyk7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgb2JqZWN0ID0ge1xuICBhc3NpZ246IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAodmFyIGkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaGFzT3duKHNvdXJjZSwgaSkpIHtcbiAgICAgICAgdGFyZ2V0W2ldID0gc291cmNlW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSkge1xuICB2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cblxuZXhwb3J0IHZhciBhcnJheSA9IHtcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShvYmopIHtcbiAgICB2YXIgYXJyID0gQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgIGlmIChoYXNPd24ob2JqLCBpKSkge1xuICAgICAgICBhcnJbaV0gPSBvYmpbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlcnJlZCgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgZGVmID0gX2V4dGVuZHMoe30sIHByb3BzKTtcbiAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZGVmLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGRlZi5yZWplY3QgPSByZWplY3Q7XG4gIH0pO1xuICBkZWYucHJvbWlzZSA9IHByb21pc2U7XG4gIHJldHVybiBkZWY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheU9mRGVmZmVyZWQobGVuZ3RoKSB7XG4gIHZhciBhcnIgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGFyci5wdXNoKGRlZmVycmVkKCkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxheShtcykge1xuICB2YXIgdmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gIHZhciB0aW1lb3V0SWQgPSB2b2lkIDA7XG4gIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKHZhbCk7XG4gICAgfSwgbXMpO1xuICB9KTtcblxuICBwcm9taXNlW0NBTkNFTF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9O1xuXG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9ja1Rhc2soKSB7XG4gIHZhciBfcmVmO1xuXG4gIHZhciBydW5uaW5nID0gdHJ1ZTtcbiAgdmFyIF9yZXN1bHQgPSB2b2lkIDAsXG4gICAgICBfZXJyb3IgPSB2b2lkIDA7XG5cbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltUQVNLXSA9IHRydWUsIF9yZWYuaXNSdW5uaW5nID0gZnVuY3Rpb24gaXNSdW5uaW5nKCkge1xuICAgIHJldHVybiBydW5uaW5nO1xuICB9LCBfcmVmLnJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCgpIHtcbiAgICByZXR1cm4gX3Jlc3VsdDtcbiAgfSwgX3JlZi5lcnJvciA9IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgIHJldHVybiBfZXJyb3I7XG4gIH0sIF9yZWYuc2V0UnVubmluZyA9IGZ1bmN0aW9uIHNldFJ1bm5pbmcoYikge1xuICAgIHJldHVybiBydW5uaW5nID0gYjtcbiAgfSwgX3JlZi5zZXRSZXN1bHQgPSBmdW5jdGlvbiBzZXRSZXN1bHQocikge1xuICAgIHJldHVybiBfcmVzdWx0ID0gcjtcbiAgfSwgX3JlZi5zZXRFcnJvciA9IGZ1bmN0aW9uIHNldEVycm9yKGUpIHtcbiAgICByZXR1cm4gX2Vycm9yID0gZTtcbiAgfSwgX3JlZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9JbmMoKSB7XG4gIHZhciBzZWVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICsrc2VlZDtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciB1aWQgPSBhdXRvSW5jKCk7XG5cbnZhciBrVGhyb3cgPSBmdW5jdGlvbiBrVGhyb3coZXJyKSB7XG4gIHRocm93IGVycjtcbn07XG52YXIga1JldHVybiA9IGZ1bmN0aW9uIGtSZXR1cm4odmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiB0cnVlIH07XG59O1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VJdGVyYXRvcihuZXh0KSB7XG4gIHZhciB0aHJvID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBrVGhyb3c7XG4gIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnJztcbiAgdmFyIGlzSGVscGVyID0gYXJndW1lbnRzWzNdO1xuXG4gIHZhciBpdGVyYXRvciA9IHsgbmFtZTogbmFtZSwgbmV4dDogbmV4dCwgdGhyb3c6IHRocm8sIHJldHVybjoga1JldHVybiB9O1xuXG4gIGlmIChpc0hlbHBlcikge1xuICAgIGl0ZXJhdG9yW0hFTFBFUl0gPSB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJykge1xuICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gaXRlcmF0b3I7XG59XG5cbi8qKlxuICBQcmludCBlcnJvciBpbiBhIHVzZWZ1bCB3YXkgd2hldGhlciBpbiBhIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAgKHdpdGggZXhwYW5kYWJsZSBlcnJvciBzdGFjayB0cmFjZXMpLCBvciBpbiBhIG5vZGUuanMgZW52aXJvbm1lbnRcbiAgKHRleHQtb25seSBsb2cgb3V0cHV0KVxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvZyhsZXZlbCwgbWVzc2FnZSkge1xuICB2YXIgZXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcnO1xuXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSovXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUubG9nKCdyZWR1eC1zYWdhICcgKyBsZXZlbCArICc6ICcgKyBtZXNzYWdlICsgJ1xcbicgKyAoZXJyb3IgJiYgZXJyb3Iuc3RhY2sgfHwgZXJyb3IpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlW2xldmVsXShtZXNzYWdlLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlY2F0ZShmbiwgZGVwcmVjYXRpb25XYXJuaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSBsb2coJ3dhcm4nLCBkZXByZWNhdGlvbldhcm5pbmcpO1xuICAgIHJldHVybiBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgdXBkYXRlSW5jZW50aXZlID0gZnVuY3Rpb24gdXBkYXRlSW5jZW50aXZlKGRlcHJlY2F0ZWQsIHByZWZlcnJlZCkge1xuICByZXR1cm4gZGVwcmVjYXRlZCArICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiAnICsgcHJlZmVycmVkICsgJywgcGxlYXNlIHVwZGF0ZSB5b3VyIGNvZGUnO1xufTtcblxuZXhwb3J0IHZhciBpbnRlcm5hbEVyciA9IGZ1bmN0aW9uIGludGVybmFsRXJyKGVycikge1xuICByZXR1cm4gbmV3IEVycm9yKCdcXG4gIHJlZHV4LXNhZ2E6IEVycm9yIGNoZWNraW5nIGhvb2tzIGRldGVjdGVkIGFuIGluY29uc2lzdGVudCBzdGF0ZS4gVGhpcyBpcyBsaWtlbHkgYSBidWdcXG4gIGluIHJlZHV4LXNhZ2EgY29kZSBhbmQgbm90IHlvdXJzLiBUaGFua3MgZm9yIHJlcG9ydGluZyB0aGlzIGluIHRoZSBwcm9qZWN0XFwncyBnaXRodWIgcmVwby5cXG4gIEVycm9yOiAnICsgZXJyICsgJ1xcbicpO1xufTtcblxuZXhwb3J0IHZhciBjcmVhdGVTZXRDb250ZXh0V2FybmluZyA9IGZ1bmN0aW9uIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nKGN0eCwgcHJvcHMpIHtcbiAgcmV0dXJuIChjdHggPyBjdHggKyAnLicgOiAnJykgKyAnc2V0Q29udGV4dChwcm9wcyk6IGFyZ3VtZW50ICcgKyBwcm9wcyArICcgaXMgbm90IGEgcGxhaW4gb2JqZWN0Jztcbn07XG5cbmV4cG9ydCB2YXIgd3JhcFNhZ2FEaXNwYXRjaCA9IGZ1bmN0aW9uIHdyYXBTYWdhRGlzcGF0Y2goZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goT2JqZWN0LmRlZmluZVByb3BlcnR5KGFjdGlvbiwgU0FHQV9BQ1RJT04sIHsgdmFsdWU6IHRydWUgfSkpO1xuICB9O1xufTtcblxuZXhwb3J0IHZhciBjbG9uZWFibGVHZW5lcmF0b3IgPSBmdW5jdGlvbiBjbG9uZWFibGVHZW5lcmF0b3IoZ2VuZXJhdG9yRnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBoaXN0b3J5ID0gW107XG4gICAgdmFyIGdlbiA9IGdlbmVyYXRvckZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dChhcmcpIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKGFyZyk7XG4gICAgICAgIHJldHVybiBnZW4ubmV4dChhcmcpO1xuICAgICAgfSxcbiAgICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICAgICAgdmFyIGNsb25lZEdlbiA9IGNsb25lYWJsZUdlbmVyYXRvcihnZW5lcmF0b3JGdW5jKS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICBoaXN0b3J5LmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgIHJldHVybiBjbG9uZWRHZW4ubmV4dChhcmcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb25lZEdlbjtcbiAgICAgIH0sXG4gICAgICByZXR1cm46IGZ1bmN0aW9uIF9yZXR1cm4odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdlbi5yZXR1cm4odmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHRocm93OiBmdW5jdGlvbiBfdGhyb3coZXhjZXB0aW9uKSB7XG4gICAgICAgIHJldHVybiBnZW4udGhyb3coZXhjZXB0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXgtc2FnYVwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBzeW0sIGlzLCBpZGVudCwgY2hlY2ssIGRlcHJlY2F0ZSwgdXBkYXRlSW5jZW50aXZlLCBjcmVhdGVTZXRDb250ZXh0V2FybmluZywgU0VMRl9DQU5DRUxMQVRJT04gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IHRha2VFdmVyeUhlbHBlciwgdGFrZUxhdGVzdEhlbHBlciwgdGhyb3R0bGVIZWxwZXIgfSBmcm9tICcuL3NhZ2FIZWxwZXJzJztcblxudmFyIElPID0gc3ltKCdJTycpO1xudmFyIFRBS0UgPSAnVEFLRSc7XG52YXIgUFVUID0gJ1BVVCc7XG52YXIgQUxMID0gJ0FMTCc7XG52YXIgUkFDRSA9ICdSQUNFJztcbnZhciBDQUxMID0gJ0NBTEwnO1xudmFyIENQUyA9ICdDUFMnO1xudmFyIEZPUksgPSAnRk9SSyc7XG52YXIgSk9JTiA9ICdKT0lOJztcbnZhciBDQU5DRUwgPSAnQ0FOQ0VMJztcbnZhciBTRUxFQ1QgPSAnU0VMRUNUJztcbnZhciBBQ1RJT05fQ0hBTk5FTCA9ICdBQ1RJT05fQ0hBTk5FTCc7XG52YXIgQ0FOQ0VMTEVEID0gJ0NBTkNFTExFRCc7XG52YXIgRkxVU0ggPSAnRkxVU0gnO1xudmFyIEdFVF9DT05URVhUID0gJ0dFVF9DT05URVhUJztcbnZhciBTRVRfQ09OVEVYVCA9ICdTRVRfQ09OVEVYVCc7XG5cbnZhciBURVNUX0hJTlQgPSAnXFxuKEhJTlQ6IGlmIHlvdSBhcmUgZ2V0dGluZyB0aGlzIGVycm9ycyBpbiB0ZXN0cywgY29uc2lkZXIgdXNpbmcgY3JlYXRlTW9ja1Rhc2sgZnJvbSByZWR1eC1zYWdhL3V0aWxzKSc7XG5cbnZhciBlZmZlY3QgPSBmdW5jdGlvbiBlZmZlY3QodHlwZSwgcGF5bG9hZCkge1xuICB2YXIgX3JlZjtcblxuICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW0lPXSA9IHRydWUsIF9yZWZbdHlwZV0gPSBwYXlsb2FkLCBfcmVmO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRha2UoKSB7XG4gIHZhciBwYXR0ZXJuT3JDaGFubmVsID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnKic7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjaGVjayhhcmd1bWVudHNbMF0sIGlzLm5vdFVuZGVmLCAndGFrZShwYXR0ZXJuT3JDaGFubmVsKTogcGF0dGVybk9yQ2hhbm5lbCBpcyB1bmRlZmluZWQnKTtcbiAgfVxuICBpZiAoaXMucGF0dGVybihwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBlZmZlY3QoVEFLRSwgeyBwYXR0ZXJuOiBwYXR0ZXJuT3JDaGFubmVsIH0pO1xuICB9XG4gIGlmIChpcy5jaGFubmVsKHBhdHRlcm5PckNoYW5uZWwpKSB7XG4gICAgcmV0dXJuIGVmZmVjdChUQUtFLCB7IGNoYW5uZWw6IHBhdHRlcm5PckNoYW5uZWwgfSk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCd0YWtlKHBhdHRlcm5PckNoYW5uZWwpOiBhcmd1bWVudCAnICsgU3RyaW5nKHBhdHRlcm5PckNoYW5uZWwpICsgJyBpcyBub3QgdmFsaWQgY2hhbm5lbCBvciBhIHZhbGlkIHBhdHRlcm4nKTtcbn1cblxudGFrZS5tYXliZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVmZiA9IHRha2UuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICBlZmZbVEFLRV0ubWF5YmUgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufTtcblxuZXhwb3J0IHZhciB0YWtlbSA9IC8qI19fUFVSRV9fKi9kZXByZWNhdGUodGFrZS5tYXliZSwgLyojX19QVVJFX18qL3VwZGF0ZUluY2VudGl2ZSgndGFrZW0nLCAndGFrZS5tYXliZScpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHB1dChjaGFubmVsLCBhY3Rpb24pIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgY2hlY2soY2hhbm5lbCwgaXMubm90VW5kZWYsICdwdXQoY2hhbm5lbCwgYWN0aW9uKTogYXJndW1lbnQgY2hhbm5lbCBpcyB1bmRlZmluZWQnKTtcbiAgICBjaGVjayhjaGFubmVsLCBpcy5jaGFubmVsLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50ICcgKyBjaGFubmVsICsgJyBpcyBub3QgYSB2YWxpZCBjaGFubmVsJyk7XG4gICAgY2hlY2soYWN0aW9uLCBpcy5ub3RVbmRlZiwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBhY3Rpb24gaXMgdW5kZWZpbmVkJyk7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2soY2hhbm5lbCwgaXMubm90VW5kZWYsICdwdXQoYWN0aW9uKTogYXJndW1lbnQgYWN0aW9uIGlzIHVuZGVmaW5lZCcpO1xuICAgIGFjdGlvbiA9IGNoYW5uZWw7XG4gICAgY2hhbm5lbCA9IG51bGw7XG4gIH1cbiAgcmV0dXJuIGVmZmVjdChQVVQsIHsgY2hhbm5lbDogY2hhbm5lbCwgYWN0aW9uOiBhY3Rpb24gfSk7XG59XG5cbnB1dC5yZXNvbHZlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWZmID0gcHV0LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgZWZmW1BVVF0ucmVzb2x2ZSA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuXG5wdXQuc3luYyA9IGRlcHJlY2F0ZShwdXQucmVzb2x2ZSwgdXBkYXRlSW5jZW50aXZlKCdwdXQuc3luYycsICdwdXQucmVzb2x2ZScpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFsbChlZmZlY3RzKSB7XG4gIHJldHVybiBlZmZlY3QoQUxMLCBlZmZlY3RzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhY2UoZWZmZWN0cykge1xuICByZXR1cm4gZWZmZWN0KFJBQ0UsIGVmZmVjdHMpO1xufVxuXG5mdW5jdGlvbiBnZXRGbkNhbGxEZXNjKG1ldGgsIGZuLCBhcmdzKSB7XG4gIGNoZWNrKGZuLCBpcy5ub3RVbmRlZiwgbWV0aCArICc6IGFyZ3VtZW50IGZuIGlzIHVuZGVmaW5lZCcpO1xuXG4gIHZhciBjb250ZXh0ID0gbnVsbDtcbiAgaWYgKGlzLmFycmF5KGZuKSkge1xuICAgIHZhciBfZm4gPSBmbjtcbiAgICBjb250ZXh0ID0gX2ZuWzBdO1xuICAgIGZuID0gX2ZuWzFdO1xuICB9IGVsc2UgaWYgKGZuLmZuKSB7XG4gICAgdmFyIF9mbjIgPSBmbjtcbiAgICBjb250ZXh0ID0gX2ZuMi5jb250ZXh0O1xuICAgIGZuID0gX2ZuMi5mbjtcbiAgfVxuICBpZiAoY29udGV4dCAmJiBpcy5zdHJpbmcoZm4pICYmIGlzLmZ1bmMoY29udGV4dFtmbl0pKSB7XG4gICAgZm4gPSBjb250ZXh0W2ZuXTtcbiAgfVxuICBjaGVjayhmbiwgaXMuZnVuYywgbWV0aCArICc6IGFyZ3VtZW50ICcgKyBmbiArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcblxuICByZXR1cm4geyBjb250ZXh0OiBjb250ZXh0LCBmbjogZm4sIGFyZ3M6IGFyZ3MgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGwoZm4pIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZWZmZWN0KENBTEwsIGdldEZuQ2FsbERlc2MoJ2NhbGwnLCBmbiwgYXJncykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkoY29udGV4dCwgZm4pIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXG4gIHJldHVybiBlZmZlY3QoQ0FMTCwgZ2V0Rm5DYWxsRGVzYygnYXBwbHknLCB7IGNvbnRleHQ6IGNvbnRleHQsIGZuOiBmbiB9LCBhcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcHMoZm4pIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gZWZmZWN0KENQUywgZ2V0Rm5DYWxsRGVzYygnY3BzJywgZm4sIGFyZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcmsoZm4pIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFyZ3NbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4gZWZmZWN0KEZPUkssIGdldEZuQ2FsbERlc2MoJ2ZvcmsnLCBmbiwgYXJncykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Bhd24oZm4pIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjQgPiAxID8gX2xlbjQgLSAxIDogMCksIF9rZXk0ID0gMTsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIGFyZ3NbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICB2YXIgZWZmID0gZm9yay5hcHBseSh1bmRlZmluZWQsIFtmbl0uY29uY2F0KGFyZ3MpKTtcbiAgZWZmW0ZPUktdLmRldGFjaGVkID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpvaW4oKSB7XG4gIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgdGFza3MgPSBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgIHRhc2tzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gIH1cblxuICBpZiAodGFza3MubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiBhbGwodGFza3MubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gam9pbih0KTtcbiAgICB9KSk7XG4gIH1cbiAgdmFyIHRhc2sgPSB0YXNrc1swXTtcbiAgY2hlY2sodGFzaywgaXMubm90VW5kZWYsICdqb2luKHRhc2spOiBhcmd1bWVudCB0YXNrIGlzIHVuZGVmaW5lZCcpO1xuICBjaGVjayh0YXNrLCBpcy50YXNrLCAnam9pbih0YXNrKTogYXJndW1lbnQgJyArIHRhc2sgKyAnIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0ICcgKyBURVNUX0hJTlQpO1xuICByZXR1cm4gZWZmZWN0KEpPSU4sIHRhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsKCkge1xuICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRhc2tzID0gQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICB0YXNrc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICB9XG5cbiAgaWYgKHRhc2tzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gYWxsKHRhc2tzLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGNhbmNlbCh0KTtcbiAgICB9KSk7XG4gIH1cbiAgdmFyIHRhc2sgPSB0YXNrc1swXTtcbiAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNoZWNrKHRhc2ssIGlzLm5vdFVuZGVmLCAnY2FuY2VsKHRhc2spOiBhcmd1bWVudCB0YXNrIGlzIHVuZGVmaW5lZCcpO1xuICAgIGNoZWNrKHRhc2ssIGlzLnRhc2ssICdjYW5jZWwodGFzayk6IGFyZ3VtZW50ICcgKyB0YXNrICsgJyBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCAnICsgVEVTVF9ISU5UKTtcbiAgfVxuICByZXR1cm4gZWZmZWN0KENBTkNFTCwgdGFzayB8fCBTRUxGX0NBTkNFTExBVElPTik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3Qoc2VsZWN0b3IpIHtcbiAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjcgPiAxID8gX2xlbjcgLSAxIDogMCksIF9rZXk3ID0gMTsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgIGFyZ3NbX2tleTcgLSAxXSA9IGFyZ3VtZW50c1tfa2V5N107XG4gIH1cblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHNlbGVjdG9yID0gaWRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgY2hlY2soc2VsZWN0b3IsIGlzLm5vdFVuZGVmLCAnc2VsZWN0KHNlbGVjdG9yLFsuLi5dKTogYXJndW1lbnQgc2VsZWN0b3IgaXMgdW5kZWZpbmVkJyk7XG4gICAgY2hlY2soc2VsZWN0b3IsIGlzLmZ1bmMsICdzZWxlY3Qoc2VsZWN0b3IsWy4uLl0pOiBhcmd1bWVudCAnICsgc2VsZWN0b3IgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgcmV0dXJuIGVmZmVjdChTRUxFQ1QsIHsgc2VsZWN0b3I6IHNlbGVjdG9yLCBhcmdzOiBhcmdzIH0pO1xufVxuXG4vKipcbiAgY2hhbm5lbChwYXR0ZXJuLCBbYnVmZmVyXSkgICAgPT4gY3JlYXRlcyBhbiBldmVudCBjaGFubmVsIGZvciBzdG9yZSBhY3Rpb25zXG4qKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcikge1xuICBjaGVjayhwYXR0ZXJuLCBpcy5ub3RVbmRlZiwgJ2FjdGlvbkNoYW5uZWwocGF0dGVybiwuLi4pOiBhcmd1bWVudCBwYXR0ZXJuIGlzIHVuZGVmaW5lZCcpO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBjaGVjayhidWZmZXIsIGlzLm5vdFVuZGVmLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpOiBhcmd1bWVudCBidWZmZXIgaXMgdW5kZWZpbmVkJyk7XG4gICAgY2hlY2soYnVmZmVyLCBpcy5idWZmZXIsICdhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcik6IGFyZ3VtZW50ICcgKyBidWZmZXIgKyAnIGlzIG5vdCBhIHZhbGlkIGJ1ZmZlcicpO1xuICB9XG4gIHJldHVybiBlZmZlY3QoQUNUSU9OX0NIQU5ORUwsIHsgcGF0dGVybjogcGF0dGVybiwgYnVmZmVyOiBidWZmZXIgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxsZWQoKSB7XG4gIHJldHVybiBlZmZlY3QoQ0FOQ0VMTEVELCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbHVzaChjaGFubmVsKSB7XG4gIGNoZWNrKGNoYW5uZWwsIGlzLmNoYW5uZWwsICdmbHVzaChjaGFubmVsKTogYXJndW1lbnQgJyArIGNoYW5uZWwgKyAnIGlzIG5vdCB2YWxpZCBjaGFubmVsJyk7XG4gIHJldHVybiBlZmZlY3QoRkxVU0gsIGNoYW5uZWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGV4dChwcm9wKSB7XG4gIGNoZWNrKHByb3AsIGlzLnN0cmluZywgJ2dldENvbnRleHQocHJvcCk6IGFyZ3VtZW50ICcgKyBwcm9wICsgJyBpcyBub3QgYSBzdHJpbmcnKTtcbiAgcmV0dXJuIGVmZmVjdChHRVRfQ09OVEVYVCwgcHJvcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb250ZXh0KHByb3BzKSB7XG4gIGNoZWNrKHByb3BzLCBpcy5vYmplY3QsIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nKG51bGwsIHByb3BzKSk7XG4gIHJldHVybiBlZmZlY3QoU0VUX0NPTlRFWFQsIHByb3BzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRha2VFdmVyeShwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbjggPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjggPiAyID8gX2xlbjggLSAyIDogMCksIF9rZXk4ID0gMjsgX2tleTggPCBfbGVuODsgX2tleTgrKykge1xuICAgIGFyZ3NbX2tleTggLSAyXSA9IGFyZ3VtZW50c1tfa2V5OF07XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh1bmRlZmluZWQsIFt0YWtlRXZlcnlIZWxwZXIsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRha2VMYXRlc3QocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW45ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW45ID4gMiA/IF9sZW45IC0gMiA6IDApLCBfa2V5OSA9IDI7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcbiAgICBhcmdzW19rZXk5IC0gMl0gPSBhcmd1bWVudHNbX2tleTldO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbdGFrZUxhdGVzdEhlbHBlciwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUobXMsIHBhdHRlcm4sIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuMTAgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjEwID4gMyA/IF9sZW4xMCAtIDMgOiAwKSwgX2tleTEwID0gMzsgX2tleTEwIDwgX2xlbjEwOyBfa2V5MTArKykge1xuICAgIGFyZ3NbX2tleTEwIC0gM10gPSBhcmd1bWVudHNbX2tleTEwXTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW3Rocm90dGxlSGVscGVyLCBtcywgcGF0dGVybiwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuXG52YXIgY3JlYXRlQXNFZmZlY3RUeXBlID0gZnVuY3Rpb24gY3JlYXRlQXNFZmZlY3RUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlZmZlY3QpIHtcbiAgICByZXR1cm4gZWZmZWN0ICYmIGVmZmVjdFtJT10gJiYgZWZmZWN0W3R5cGVdO1xuICB9O1xufTtcblxuZXhwb3J0IHZhciBhc0VmZmVjdCA9IHtcbiAgdGFrZTogY3JlYXRlQXNFZmZlY3RUeXBlKFRBS0UpLFxuICBwdXQ6IGNyZWF0ZUFzRWZmZWN0VHlwZShQVVQpLFxuICBhbGw6IGNyZWF0ZUFzRWZmZWN0VHlwZShBTEwpLFxuICByYWNlOiBjcmVhdGVBc0VmZmVjdFR5cGUoUkFDRSksXG4gIGNhbGw6IGNyZWF0ZUFzRWZmZWN0VHlwZShDQUxMKSxcbiAgY3BzOiBjcmVhdGVBc0VmZmVjdFR5cGUoQ1BTKSxcbiAgZm9yazogY3JlYXRlQXNFZmZlY3RUeXBlKEZPUkspLFxuICBqb2luOiBjcmVhdGVBc0VmZmVjdFR5cGUoSk9JTiksXG4gIGNhbmNlbDogY3JlYXRlQXNFZmZlY3RUeXBlKENBTkNFTCksXG4gIHNlbGVjdDogY3JlYXRlQXNFZmZlY3RUeXBlKFNFTEVDVCksXG4gIGFjdGlvbkNoYW5uZWw6IGNyZWF0ZUFzRWZmZWN0VHlwZShBQ1RJT05fQ0hBTk5FTCksXG4gIGNhbmNlbGxlZDogY3JlYXRlQXNFZmZlY3RUeXBlKENBTkNFTExFRCksXG4gIGZsdXNoOiBjcmVhdGVBc0VmZmVjdFR5cGUoRkxVU0gpLFxuICBnZXRDb250ZXh0OiBjcmVhdGVBc0VmZmVjdFR5cGUoR0VUX0NPTlRFWFQpLFxuICBzZXRDb250ZXh0OiBjcmVhdGVBc0VmZmVjdFR5cGUoU0VUX0NPTlRFWFQpXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvaW8uanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNhbGwsIHB1dCwgc2VsZWN0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRBY2NvdW50QmFsYW5jZXMoYWN0aW9uKSB7XHJcbiAgY29uc3QgYWNjb3VudHMgPSB5aWVsZCBzZWxlY3QoZ2V0QWNjb3VudHNTdGF0ZSlcclxuICBjb25zdCB3ZWIzID0gYWN0aW9uLndlYjNcclxuXHJcbiAgaWYgKCFhY2NvdW50cykge1xyXG4gICAgY29uc29sZS5lcnJvcignTm8gYWNjb3VudHMgZm91bmQgd2hpbGUgYXR0ZW1wdGluZyB0byBmZXRjaCBiYWxhbmNlcyEnKVxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGZvciAodmFyIGkgaW4gYWNjb3VudHMpIHtcclxuICAgICAgdmFyIGFjY291bnQgPSBhY2NvdW50c1tpXVxyXG4gICAgICB2YXIgYWNjb3VudEJhbGFuY2UgPSB5aWVsZCBjYWxsKHdlYjMuZXRoLmdldEJhbGFuY2UsIGFjY291bnQpXHJcblxyXG4gICAgICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UX0JBTEFOQ0VfRkVUQ0hFRCcsIGFjY291bnQsIGFjY291bnRCYWxhbmNlfSlcclxuICAgIH1cclxuICB9XHJcbiAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UX0JBTEFOQ0VfRkFJTEVEJywgZXJyb3J9KVxyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWNjb3VudCAnICsgYWNjb3VudCArICcgYmFsYW5jZTonKVxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICB9XHJcblxyXG4gIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRfQkFMQU5DRVNfRkVUQ0hFRCd9KVxyXG59XHJcblxyXG5jb25zdCBnZXRBY2NvdW50c1N0YXRlID0gKHN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50c1xyXG5cclxuZnVuY3Rpb24qIGFjY291bnRCYWxhbmNlc1NhZ2EoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdCgnQUNDT1VOVF9CQUxBTkNFU19GRVRDSElORycsIGdldEFjY291bnRCYWxhbmNlcylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudEJhbGFuY2VzU2FnYTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1NhZ2EuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzLCBtYWtlSXRlcmF0b3IgfSBmcm9tICcuLi91dGlscyc7XG5cbnZhciBkb25lID0geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH07XG5leHBvcnQgdmFyIHFFbmQgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpIHtcbiAgaWYgKGlzLmNoYW5uZWwocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gJ2NoYW5uZWwnO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhdHRlcm5PckNoYW5uZWwubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhlbnRyeSk7XG4gICAgfSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnNtSXRlcmF0b3IoZnNtLCBxMCkge1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ2l0ZXJhdG9yJztcblxuICB2YXIgdXBkYXRlU3RhdGUgPSB2b2lkIDAsXG4gICAgICBxTmV4dCA9IHEwO1xuXG4gIGZ1bmN0aW9uIG5leHQoYXJnLCBlcnJvcikge1xuICAgIGlmIChxTmV4dCA9PT0gcUVuZCkge1xuICAgICAgcmV0dXJuIGRvbmU7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBxTmV4dCA9IHFFbmQ7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlU3RhdGUgJiYgdXBkYXRlU3RhdGUoYXJnKTtcblxuICAgICAgdmFyIF9mc20kcU5leHQgPSBmc21bcU5leHRdKCksXG4gICAgICAgICAgcSA9IF9mc20kcU5leHRbMF0sXG4gICAgICAgICAgb3V0cHV0ID0gX2ZzbSRxTmV4dFsxXSxcbiAgICAgICAgICBfdXBkYXRlU3RhdGUgPSBfZnNtJHFOZXh0WzJdO1xuXG4gICAgICBxTmV4dCA9IHE7XG4gICAgICB1cGRhdGVTdGF0ZSA9IF91cGRhdGVTdGF0ZTtcbiAgICAgIHJldHVybiBxTmV4dCA9PT0gcUVuZCA/IGRvbmUgOiBvdXRwdXQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VJdGVyYXRvcihuZXh0LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChudWxsLCBlcnJvcik7XG4gIH0sIG5hbWUsIHRydWUpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvZnNtSXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCB7IGlzLCBjaGVjaywgcmVtb3ZlLCBNQVRDSCwgaW50ZXJuYWxFcnIsIFNBR0FfQUNUSU9OIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBidWZmZXJzIH0gZnJvbSAnLi9idWZmZXJzJztcbmltcG9ydCB7IGFzYXAgfSBmcm9tICcuL3NjaGVkdWxlcic7XG5cbnZhciBDSEFOTkVMX0VORF9UWVBFID0gJ0BAcmVkdXgtc2FnYS9DSEFOTkVMX0VORCc7XG5leHBvcnQgdmFyIEVORCA9IHsgdHlwZTogQ0hBTk5FTF9FTkRfVFlQRSB9O1xuZXhwb3J0IHZhciBpc0VuZCA9IGZ1bmN0aW9uIGlzRW5kKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS50eXBlID09PSBDSEFOTkVMX0VORF9UWVBFO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXR0ZXIoKSB7XG4gIHZhciBzdWJzY3JpYmVycyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShzdWIpIHtcbiAgICBzdWJzY3JpYmVycy5wdXNoKHN1Yik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZW1vdmUoc3Vic2NyaWJlcnMsIHN1Yik7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXQoaXRlbSkge1xuICAgIHZhciBhcnIgPSBzdWJzY3JpYmVycy5zbGljZSgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFycltpXShpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGVtaXQ6IGVtaXRcbiAgfTtcbn1cblxuZXhwb3J0IHZhciBJTlZBTElEX0JVRkZFUiA9ICdpbnZhbGlkIGJ1ZmZlciBwYXNzZWQgdG8gY2hhbm5lbCBmYWN0b3J5IGZ1bmN0aW9uJztcbmV4cG9ydCB2YXIgVU5ERUZJTkVEX0lOUFVUX0VSUk9SID0gJ1NhZ2Egd2FzIHByb3ZpZGVkIHdpdGggYW4gdW5kZWZpbmVkIGFjdGlvbic7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFVOREVGSU5FRF9JTlBVVF9FUlJPUiArPSAnXFxuSGludHM6XFxuICAgIC0gY2hlY2sgdGhhdCB5b3VyIEFjdGlvbiBDcmVhdG9yIHJldHVybnMgYSBub24tdW5kZWZpbmVkIHZhbHVlXFxuICAgIC0gaWYgdGhlIFNhZ2Egd2FzIHN0YXJ0ZWQgdXNpbmcgcnVuU2FnYSwgY2hlY2sgdGhhdCB5b3VyIHN1YnNjcmliZSBzb3VyY2UgcHJvdmlkZXMgdGhlIGFjdGlvbiB0byBpdHMgbGlzdGVuZXJzXFxuICAnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbm5lbCgpIHtcbiAgdmFyIGJ1ZmZlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogYnVmZmVycy5maXhlZCgpO1xuXG4gIHZhciBjbG9zZWQgPSBmYWxzZTtcbiAgdmFyIHRha2VycyA9IFtdO1xuXG4gIGNoZWNrKGJ1ZmZlciwgaXMuYnVmZmVyLCBJTlZBTElEX0JVRkZFUik7XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKSB7XG4gICAgaWYgKGNsb3NlZCAmJiB0YWtlcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycignQ2Fubm90IGhhdmUgYSBjbG9zZWQgY2hhbm5lbCB3aXRoIHBlbmRpbmcgdGFrZXJzJyk7XG4gICAgfVxuICAgIGlmICh0YWtlcnMubGVuZ3RoICYmICFidWZmZXIuaXNFbXB0eSgpKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycignQ2Fubm90IGhhdmUgcGVuZGluZyB0YWtlcnMgd2l0aCBub24gZW1wdHkgYnVmZmVyJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHV0KGlucHV0KSB7XG4gICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICBjaGVjayhpbnB1dCwgaXMubm90VW5kZWYsIFVOREVGSU5FRF9JTlBVVF9FUlJPUik7XG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRha2Vycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBidWZmZXIucHV0KGlucHV0KTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjYiA9IHRha2Vyc1tpXTtcbiAgICAgIGlmICghY2JbTUFUQ0hdIHx8IGNiW01BVENIXShpbnB1dCkpIHtcbiAgICAgICAgdGFrZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIGNiKGlucHV0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0YWtlKGNiKSB7XG4gICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICBjaGVjayhjYiwgaXMuZnVuYywgXCJjaGFubmVsLnRha2UncyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG5cbiAgICBpZiAoY2xvc2VkICYmIGJ1ZmZlci5pc0VtcHR5KCkpIHtcbiAgICAgIGNiKEVORCk7XG4gICAgfSBlbHNlIGlmICghYnVmZmVyLmlzRW1wdHkoKSkge1xuICAgICAgY2IoYnVmZmVyLnRha2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRha2Vycy5wdXNoKGNiKTtcbiAgICAgIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZSh0YWtlcnMsIGNiKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goY2IpIHtcbiAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpOyAvLyBUT0RPOiBjaGVjayBpZiBzb21lIG5ldyBzdGF0ZSBzaG91bGQgYmUgZm9yYmlkZGVuIG5vd1xuICAgIGNoZWNrKGNiLCBpcy5mdW5jLCBcImNoYW5uZWwuZmx1c2gnIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICBpZiAoY2xvc2VkICYmIGJ1ZmZlci5pc0VtcHR5KCkpIHtcbiAgICAgIGNiKEVORCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNiKGJ1ZmZlci5mbHVzaCgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgaWYgKCFjbG9zZWQpIHtcbiAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICBpZiAodGFrZXJzLmxlbmd0aCkge1xuICAgICAgICB2YXIgYXJyID0gdGFrZXJzO1xuICAgICAgICB0YWtlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGFycltpXShFTkQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0YWtlOiB0YWtlLFxuICAgIHB1dDogcHV0LFxuICAgIGZsdXNoOiBmbHVzaCxcbiAgICBjbG9zZTogY2xvc2UsXG4gICAgZ2V0IF9fdGFrZXJzX18oKSB7XG4gICAgICByZXR1cm4gdGFrZXJzO1xuICAgIH0sXG4gICAgZ2V0IF9fY2xvc2VkX18oKSB7XG4gICAgICByZXR1cm4gY2xvc2VkO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50Q2hhbm5lbChzdWJzY3JpYmUpIHtcbiAgdmFyIGJ1ZmZlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogYnVmZmVycy5ub25lKCk7XG4gIHZhciBtYXRjaGVyID0gYXJndW1lbnRzWzJdO1xuXG4gIC8qKlxuICAgIHNob3VsZCBiZSBpZih0eXBlb2YgbWF0Y2hlciAhPT0gdW5kZWZpbmVkKSBpbnN0ZWFkP1xuICAgIHNlZSBQUiAjMjczIGZvciBhIGJhY2tncm91bmQgZGlzY3Vzc2lvblxuICAqKi9cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgY2hlY2sobWF0Y2hlciwgaXMuZnVuYywgJ0ludmFsaWQgbWF0Y2ggZnVuY3Rpb24gcGFzc2VkIHRvIGV2ZW50Q2hhbm5lbCcpO1xuICB9XG5cbiAgdmFyIGNoYW4gPSBjaGFubmVsKGJ1ZmZlcik7XG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGlmICghY2hhbi5fX2Nsb3NlZF9fKSB7XG4gICAgICBpZiAodW5zdWJzY3JpYmUpIHtcbiAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIGNoYW4uY2xvc2UoKTtcbiAgICB9XG4gIH07XG4gIHZhciB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaXNFbmQoaW5wdXQpKSB7XG4gICAgICBjbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWF0Y2hlciAmJiAhbWF0Y2hlcihpbnB1dCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hhbi5wdXQoaW5wdXQpO1xuICB9KTtcbiAgaWYgKGNoYW4uX19jbG9zZWRfXykge1xuICAgIHVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBpZiAoIWlzLmZ1bmModW5zdWJzY3JpYmUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbiBldmVudENoYW5uZWw6IHN1YnNjcmliZSBzaG91bGQgcmV0dXJuIGEgZnVuY3Rpb24gdG8gdW5zdWJzY3JpYmUnKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGFrZTogY2hhbi50YWtlLFxuICAgIGZsdXNoOiBjaGFuLmZsdXNoLFxuICAgIGNsb3NlOiBjbG9zZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RkQ2hhbm5lbChzdWJzY3JpYmUpIHtcbiAgdmFyIGNoYW4gPSBldmVudENoYW5uZWwoZnVuY3Rpb24gKGNiKSB7XG4gICAgcmV0dXJuIHN1YnNjcmliZShmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIGlmIChpbnB1dFtTQUdBX0FDVElPTl0pIHtcbiAgICAgICAgY2IoaW5wdXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNiKGlucHV0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGNoYW4sIHtcbiAgICB0YWtlOiBmdW5jdGlvbiB0YWtlKGNiLCBtYXRjaGVyKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY2hlY2sobWF0Y2hlciwgaXMuZnVuYywgXCJjaGFubmVsLnRha2UncyBtYXRjaGVyIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgY2JbTUFUQ0hdID0gbWF0Y2hlcjtcbiAgICAgIH1cbiAgICAgIGNoYW4udGFrZShjYik7XG4gICAgfVxuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL2NoYW5uZWwuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEVORCwgZXZlbnRDaGFubmVsIH0gZnJvbSAncmVkdXgtc2FnYSdcclxuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlLCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50QmFsYW5jZXMgfSBmcm9tICcuLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYSdcclxuXHJcbi8qXHJcbiAqIEZldGNoIEFjY291bnRzIExpc3RcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldEFjY291bnRzKGFjdGlvbikge1xyXG4gIGNvbnN0IHdlYjMgPSBhY3Rpb24ud2ViM1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSB5aWVsZCBjYWxsKHdlYjMuZXRoLmdldEFjY291bnRzKVxyXG5cclxuICAgIGlmICghYWNjb3VudHMpIHtcclxuICAgICAgdGhyb3cgJ05vIGFjY291bnRzIGZvdW5kISdcclxuICAgIH1cclxuXHJcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UU19GRVRDSEVEJywgYWNjb3VudHN9KVxyXG4gIH1cclxuICBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRTX0ZBSUxFRCcsIGVycm9yfSlcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFjY291bnRzOicpXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gIH1cclxufVxyXG5cclxuLypcclxuICogUG9sbCBmb3IgQWNjb3VudCBDaGFuZ2VzXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24qIGNyZWF0ZUFjY291bnRzUG9sbENoYW5uZWwoe2ludGVydmFsLCB3ZWIzfSkge1xyXG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XHJcbiAgICBjb25zdCBwZXJzaXN0ZWRXZWIzID0gd2ViM1xyXG5cclxuICAgIGNvbnN0IGFjY291bnRzUG9sbGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBlbWl0KHt0eXBlOiAnU1lOQ0lOR19BQ0NPVU5UUycsIHBlcnNpc3RlZFdlYjN9KVxyXG4gICAgfSwgaW50ZXJ2YWwpIC8vIG9wdGlvbnMucG9sbHMuYWNjb3VudHNcclxuICAgIFxyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoYWNjb3VudHNQb2xsZXIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlXHJcbiAgfSlcclxufVxyXG4gIFxyXG5mdW5jdGlvbiogY2FsbENyZWF0ZUFjY291bnRzUG9sbENoYW5uZWwoe2ludGVydmFsLCB3ZWIzfSkge1xyXG4gIGNvbnN0IGFjY291bnRzQ2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbCwge2ludGVydmFsLCB3ZWIzfSlcclxuICBcclxuICB0cnkge1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZShhY2NvdW50c0NoYW5uZWwpXHJcblxyXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ1NZTkNJTkdfQUNDT1VOVFMnKSB7ICAgICAgXHJcbiAgICAgICAgeWllbGQgY2FsbChnZXRBY2NvdW50cywge3dlYjM6IGV2ZW50LnBlcnNpc3RlZFdlYjN9KVxyXG4gICAgICAgIHlpZWxkIGNhbGwoZ2V0QWNjb3VudEJhbGFuY2VzLCB7d2ViMzogZXZlbnQucGVyc2lzdGVkV2ViM30pICBcclxuICAgICAgfVxyXG5cclxuICAgICAgeWllbGQgcHV0KGV2ZW50KVxyXG4gICAgfVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICBhY2NvdW50c0NoYW5uZWwuY2xvc2UoKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGFjY291bnRzU2FnYSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KCdBQ0NPVU5UU19GRVRDSElORycsIGdldEFjY291bnRzKVxyXG4gIHlpZWxkIHRha2VMYXRlc3QoJ0FDQ09VTlRTX1BPTExJTkcnLCBjYWxsQ3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudHNTYWdhO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWNjb3VudHMvYWNjb3VudHNTYWdhLmpzIiwiaW1wb3J0IHsgRU5ELCBldmVudENoYW5uZWwgfSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZSwgdGFrZUxhdGVzdCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgRHJpenpsZUNvbnRyYWN0IGZyb20gJy4uL0RyaXp6bGVDb250cmFjdCdcclxuXHJcbi8qXHJcbiAqIEluc3RhbnRpYXRpb25cclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGluc3RhbnRpYXRlQ29udHJhY3Qoe2NvbnRyYWN0QXJ0aWZhY3QsIGV2ZW50cywgc3RvcmUsIHdlYjN9KSB7XHJcbiAgY29uc3QgbmV0d29ya0lkID0geWllbGQgc2VsZWN0KGdldE5ldHdvcmtJZClcclxuXHJcbiAgcmV0dXJuIG5ldyBEcml6emxlQ29udHJhY3QoY29udHJhY3RBcnRpZmFjdCwgd2ViMywgbmV0d29ya0lkLCBzdG9yZSwgZXZlbnRzKVxyXG59XHJcblxyXG4vKlxyXG4gKiBFdmVudHNcclxuICovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250cmFjdEV2ZW50Q2hhbm5lbCh7Y29udHJhY3QsIGV2ZW50TmFtZX0pIHtcclxuICBjb25zdCBuYW1lID0gY29udHJhY3QuY29udHJhY3RBcnRpZmFjdC5jb250cmFjdE5hbWVcclxuXHJcbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbChlbWl0ID0+IHtcclxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSBjb250cmFjdC5ldmVudHNbZXZlbnROYW1lXSgpLm9uKCdkYXRhJywgZXZlbnQgPT4ge1xyXG4gICAgICBlbWl0KHt0eXBlOiAnRVZFTlRfRklSRUQnLCBuYW1lLCBldmVudH0pXHJcbiAgICB9KVxyXG4gICAgLm9uKCdjaGFuZ2VkJywgZXZlbnQgPT4ge1xyXG4gICAgICBlbWl0KHt0eXBlOiAnRVZFTlRfQ0hBTkdFRCcsIG5hbWUsIGV2ZW50fSlcclxuICAgIH0pXHJcbiAgICAub24oJ2Vycm9yJywgZXJyb3IgPT4ge1xyXG4gICAgICBlbWl0KHt0eXBlOiAnRVZFTlRfRVJST1InLCBuYW1lLCBlcnJvcn0pXHJcbiAgICAgIGVtaXQoRU5EKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcclxuICAgICAgZXZlbnRMaXN0ZW5lci5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGNhbGxMaXN0ZW5Gb3JDb250cmFjdEV2ZW50KHtjb250cmFjdCwgZXZlbnROYW1lfSkge1xyXG4gIGNvbnN0IGNvbnRyYWN0RXZlbnRDaGFubmVsID0geWllbGQgY2FsbChjcmVhdGVDb250cmFjdEV2ZW50Q2hhbm5lbCwge2NvbnRyYWN0LCBldmVudE5hbWV9KVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZShjb250cmFjdEV2ZW50Q2hhbm5lbClcclxuICAgIHlpZWxkIHB1dChldmVudClcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIFNlbmQgYW5kIENhY2hlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVHhDaGFubmVsKHt0eE9iamVjdCwgc3RhY2tJZCwgc2VuZEFyZ3MgPSB7fSwgY29udHJhY3ROYW1lfSkge1xyXG4gIHZhciBwZXJzaXN0VHhIYXNoXHJcblxyXG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XHJcbiAgICBjb25zdCB0eFByb21pRXZlbnQgPSB0eE9iamVjdC5zZW5kKHNlbmRBcmdzKS5vbigndHJhbnNhY3Rpb25IYXNoJywgdHhIYXNoID0+IHtcclxuICAgICAgcGVyc2lzdFR4SGFzaCA9IHR4SGFzaFxyXG5cclxuICAgICAgZW1pdCh7dHlwZTogJ1RYX0JST0FEQ0FTVEVEJywgdHhIYXNoLCBzdGFja0lkfSlcclxuICAgICAgZW1pdCh7dHlwZTogJ0NPTlRSQUNUX1NZTkNfSU5EJywgY29udHJhY3ROYW1lfSlcclxuICAgIH0pXHJcbiAgICAub24oJ2NvbmZpcm1hdGlvbicsIChjb25maXJtYXRpb25OdW1iZXIsIHJlY2VpcHQpID0+IHtcclxuICAgICAgZW1pdCh7dHlwZTogJ1RYX0NPTkZJUk1BSVRPTicsIGNvbmZpcm1hdGlvblJlY2VpcHQ6IHJlY2VpcHQsIHR4SGFzaDogcGVyc2lzdFR4SGFzaH0pXHJcbiAgICB9KVxyXG4gICAgLm9uKCdyZWNlaXB0JywgcmVjZWlwdCA9PiB7XHJcbiAgICAgIGVtaXQoe3R5cGU6ICdUWF9TVUNDRVNTRlVMJywgcmVjZWlwdDogcmVjZWlwdCwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcclxuICAgICAgZW1pdChFTkQpXHJcbiAgICB9KVxyXG4gICAgLm9uKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgZW1pdCh7dHlwZTogJ1RYX0VSUk9SJywgZXJyb3I6IGVycm9yLCB0eEhhc2g6IHBlcnNpc3RUeEhhc2h9KVxyXG4gICAgICBlbWl0KEVORClcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XHJcbiAgICAgIHR4UHJvbWlFdmVudC5vZmYoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bnN1YnNjcmliZVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjYWxsU2VuZENvbnRyYWN0VHgoe2NvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIHN0YWNrSWR9KSB7XHJcbiAgLy8gQ2hlY2sgZm9yIHR5cGUgb2Ygb2JqZWN0IGFuZCBwcm9wZXJ0aWVzIGluZGljYXRpdmUgb2YgY2FsbC9zZW5kIG9wdGlvbnMuXHJcbiAgY29uc3QgZmluYWxBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cclxuICB2YXIgc2VuZEFyZ3MgPSB7fVxyXG4gIHZhciBmaW5hbEFyZ1Rlc3QgPSBjYWxsKGlzU2VuZE9yQ2FsbE9wdGlvbnMsIGZpbmFsQXJnKVxyXG5cclxuICBpZiAodHlwZW9mIGZpbmFsQXJnID09PSAnb2JqZWN0JyAmJiBmaW5hbEFyZ1Rlc3QpIHtcclxuICAgIHNlbmRBcmdzID0gZmluYWxBcmdcclxuXHJcbiAgICBkZWxldGUgYXJnc1thcmdzLmxlbmd0aCAtIDFdXHJcbiAgICBhcmdzLmxlbmd0aCA9IGFyZ3MubGVuZ3RoIC0gMVxyXG4gIH1cclxuXHJcbiAgLy8gR2V0IG5hbWUgdG8gbWFyayBhcyBkZXN5bmNocm9uaXplZCBvbiB0eCBjcmVhdGlvblxyXG4gIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGNvbnRyYWN0LmNvbnRyYWN0QXJ0aWZhY3QuY29udHJhY3ROYW1lXHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgdHJhbnNhY3Rpb24gb2JqZWN0IGFuZCBleGVjdXRlIHRoZSB0eC5cclxuICBjb25zdCB0eE9iamVjdCA9IHlpZWxkIGNhbGwoY29udHJhY3QubWV0aG9kc1tmbk5hbWVdLCAuLi5hcmdzKVxyXG4gIGNvbnN0IHR4Q2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlVHhDaGFubmVsLCB7dHhPYmplY3QsIHN0YWNrSWQsIHNlbmRBcmdzLCBjb250cmFjdE5hbWV9KVxyXG5cclxuICB0cnkge1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZSh0eENoYW5uZWwpXHJcbiAgICAgIHlpZWxkIHB1dChldmVudClcclxuICAgIH1cclxuICB9IGZpbmFsbHkge1xyXG4gICAgdHhDaGFubmVsLmNsb3NlKClcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIENhbGwgYW5kIENhY2hlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24qIGNhbGxDYWxsQ29udHJhY3RGbih7Y29udHJhY3QsIGZuTmFtZSwgZm5JbmRleCwgYXJncywgYXJnc0hhc2h9KSB7XHJcbiAgLy8gQ2hlY2sgZm9yIHR5cGUgb2Ygb2JqZWN0IGFuZCBwcm9wZXJ0aWVzIGluZGljYXRpdmUgb2YgY2FsbC9zZW5kIG9wdGlvbnMuXHJcbiAgY29uc3QgZmluYWxBcmcgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cclxuICB2YXIgY2FsbEFyZ3MgPSB7fVxyXG4gIHZhciBmaW5hbEFyZ1Rlc3QgPSBjYWxsKGlzU2VuZE9yQ2FsbE9wdGlvbnMsIGZpbmFsQXJnKVxyXG5cclxuICBpZiAodHlwZW9mIGZpbmFsQXJnID09PSAnb2JqZWN0JyAmJiBmaW5hbEFyZ1Rlc3QpIHtcclxuICAgIGNhbGxBcmdzID0gZmluYWxBcmdcclxuXHJcbiAgICBkZWxldGUgYXJnc1thcmdzLmxlbmd0aCAtIDFdXHJcbiAgICBhcmdzLmxlbmd0aCA9IGFyZ3MubGVuZ3RoIC0gMVxyXG4gIH1cclxuICBcclxuICAvLyBDcmVhdGUgdGhlIHRyYW5zYWN0aW9uIG9iamVjdCBhbmQgZXhlY3V0ZSB0aGUgY2FsbC5cclxuICBjb25zdCB0eE9iamVjdCA9IHlpZWxkIGNhbGwoY29udHJhY3QubWV0aG9kc1tmbk5hbWVdLCAuLi5hcmdzKVxyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYWxsUmVzdWx0ID0geWllbGQgY2FsbCh0eE9iamVjdC5jYWxsLCBjYWxsQXJncylcclxuXHJcbiAgICB2YXIgZGlzcGF0Y2hBcmdzID0ge1xyXG4gICAgICBuYW1lOiBjb250cmFjdC5jb250cmFjdEFydGlmYWN0LmNvbnRyYWN0TmFtZSxcclxuICAgICAgdmFyaWFibGU6IGNvbnRyYWN0LmFiaVtmbkluZGV4XS5uYW1lLFxyXG4gICAgICBhcmdzSGFzaDogYXJnc0hhc2gsXHJcbiAgICAgIGFyZ3M6IGFyZ3MsXHJcbiAgICAgIHZhbHVlOiBjYWxsUmVzdWx0LFxyXG4gICAgICBmbkluZGV4OiBmbkluZGV4XHJcbiAgICB9XHJcbiAgXHJcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdHT1RfQ09OVFJBQ1RfVkFSJywgLi4uZGlzcGF0Y2hBcmdzfSlcclxuICB9XHJcbiAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG5cclxuICAgIHZhciBlcnJvckFyZ3MgPSB7XHJcbiAgICAgIG5hbWU6IGNvbnRyYWN0LmNvbnRyYWN0QXJ0aWZhY3QuY29udHJhY3ROYW1lLFxyXG4gICAgICB2YXJpYWJsZTogY29udHJhY3QuYWJpW2ZuSW5kZXhdLm5hbWUsXHJcbiAgICAgIGFyZ3NIYXNoOiBhcmdzSGFzaCxcclxuICAgICAgYXJnczogYXJncyxcclxuICAgICAgZXJyb3I6IGVycm9yLFxyXG4gICAgICBmbkluZGV4OiBmbkluZGV4XHJcbiAgICB9XHJcbiAgXHJcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdFUlJPUl9DT05UUkFDVF9WQVInLCAuLi5lcnJvckFyZ3N9KVxyXG4gIH1cclxufVxyXG5cclxuLypcclxuICogU3luYyBDb250cmFjdFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uKiBjYWxsU3luY0NvbnRyYWN0KGFjdGlvbikge1xyXG4gIC8vIEdldCBjb250cmFjdCBzdGF0ZSBmcm9tIHN0b3JlXHJcbiAgY29uc3QgY29udHJhY3QgPSBhY3Rpb24uY29udHJhY3RcclxuICBjb25zdCBjb250cmFjdE5hbWUgPSBjb250cmFjdC5jb250cmFjdEFydGlmYWN0LmNvbnRyYWN0TmFtZVxyXG5cclxuICBjb25zdCBjb250cmFjdHNTdGF0ZSA9IHlpZWxkIHNlbGVjdChnZXRDb250cmFjdHNTdGF0ZSlcclxuICB2YXIgY29udHJhY3RGbnNTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRyYWN0c1N0YXRlW2NvbnRyYWN0TmFtZV0pXHJcblxyXG4gIC8vIFJlbW92ZSB1bmVjZXNzYXJ5IGtleXNcclxuICBkZWxldGUgY29udHJhY3RGbnNTdGF0ZS5pbml0aWFsaXplZFxyXG4gIGRlbGV0ZSBjb250cmFjdEZuc1N0YXRlLnN5bmNlZFxyXG4gIGRlbGV0ZSBjb250cmFjdEZuc1N0YXRlLmV2ZW50c1xyXG5cclxuICAvLyBJdGVyYXRlIG92ZXIgZnVuY3Rpb25zIGFuZCBoYXNoZXNcclxuICBmb3IgKHZhciBmbk5hbWUgaW4gY29udHJhY3RGbnNTdGF0ZSlcclxuICB7XHJcbiAgICBmb3IgKHZhciBhcmdzSGFzaCBpbiBjb250cmFjdEZuc1N0YXRlW2ZuTmFtZV0pXHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IGZuSW5kZXggPSBjb250cmFjdEZuc1N0YXRlW2ZuTmFtZV1bYXJnc0hhc2hdLmZuSW5kZXhcclxuICAgICAgY29uc3QgYXJncyA9IGNvbnRyYWN0Rm5zU3RhdGVbZm5OYW1lXVthcmdzSGFzaF0uYXJnc1xyXG5cclxuICAgICAgLy8gUHVsbCBhcmdzIGFuZCBjYWxsIGZuIGZvciBlYWNoIGdpdmVuIGZ1bmN0aW9uXHJcbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0NBTExfQ09OVFJBQ1RfRk4nLCBjb250cmFjdCwgZm5OYW1lLCBmbkluZGV4LCBhcmdzLCBhcmdzSGFzaH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBXaGVuIGNvbXBsZXRlLCBkaXNwYXRjaCBDT05UUkFDVF9TWU5DRURcclxuICB5aWVsZCBwdXQoe3R5cGU6ICdDT05UUkFDVF9TWU5DRUQnLCBjb250cmFjdE5hbWV9KVxyXG59XHJcblxyXG5jb25zdCBnZXRDb250cmFjdHNTdGF0ZSA9IChzdGF0ZSkgPT4gc3RhdGUuY29udHJhY3RzXHJcbmNvbnN0IGdldE5ldHdvcmtJZCA9IChzdGF0ZSkgPT4gc3RhdGUud2ViMy5uZXR3b3JrSWRcclxuXHJcbmZ1bmN0aW9uIGlzU2VuZE9yQ2FsbE9wdGlvbnMob3B0aW9ucykge1xyXG4gIGlmICgnZnJvbScgaW4gb3B0aW9ucykgcmV0dXJuIHRydWVcclxuICBpZiAoJ2dhcycgaW4gb3B0aW9ucykgcmV0dXJuIHRydWVcclxuICBpZiAoJ2dhc1ByaWNlJyBpbiBvcHRpb25zKSByZXR1cm4gdHJ1ZVxyXG4gIGlmICgndmFsdWUnIGluIG9wdGlvbnMpIHJldHVybiB0cnVlXHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5mdW5jdGlvbiogY29udHJhY3RzU2FnYSgpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkoJ1NFTkRfQ09OVFJBQ1RfVFgnLCBjYWxsU2VuZENvbnRyYWN0VHgpXHJcbiAgeWllbGQgdGFrZUV2ZXJ5KCdDQUxMX0NPTlRSQUNUX0ZOJywgY2FsbENhbGxDb250cmFjdEZuKVxyXG4gIHlpZWxkIHRha2VFdmVyeSgnQ09OVFJBQ1RfU1lOQ0lORycsIGNhbGxTeW5jQ29udHJhY3QpXHJcbiAgeWllbGQgdGFrZUV2ZXJ5KCdMSVNURU5fRk9SX0VWRU5UJywgY2FsbExpc3RlbkZvckNvbnRyYWN0RXZlbnQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRyYWN0c1NhZ2E7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250cmFjdHMvY29udHJhY3RzU2FnYS5qcyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2VFdmVyeSwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuXHJcbnZhciBXZWIzID0gcmVxdWlyZSgnd2ViMycpXHJcblxyXG4vKlxyXG4gKiBJbml0aWFsaXphdGlvblxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogaW5pdGlhbGl6ZVdlYjMoe29wdGlvbnN9KSB7XHJcbiAgdmFyIHdlYjMgPSB7fVxyXG5cclxuICAvLyBDaGVja2luZyBpZiBXZWIzIGhhcyBiZWVuIGluamVjdGVkIGJ5IHRoZSBicm93c2VyIChNaXN0L01ldGFNYXNrKVxyXG4gIGlmICh0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyBVc2UgTWlzdC9NZXRhTWFzaydzIHByb3ZpZGVyLlxyXG4gICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcilcclxuICAgIHdlYjMuZXRoLmNhY2hlU2VuZFRyYW5zYWN0aW9uID0gKHR4T2JqZWN0KSA9PiBwdXQoe3R5cGU6ICdTRU5EX1dFQjNfVFgnLCB0eE9iamVjdCwgc3RhY2tJZCwgd2ViM30pXHJcblxyXG4gICAgY29uc29sZS5sb2coJ0luamVjdGVkIHdlYjMgZGV0ZWN0ZWQuJylcclxuXHJcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdXRUIzX0lOSVRJQUxJWkVEJ30pXHJcbiAgICBcclxuICAgIHJldHVybiB3ZWIzXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChvcHRpb25zLmZhbGxiYWNrKSB7XHJcbiAgICAgIC8vIEF0dGVtcHQgZmFsbGJhY2sgaWYgbm8gd2ViMyBpbmplY3Rpb24uXHJcbiAgICAgIGNvbnNvbGUubG9nKCdObyB3ZWIzIGluc3RhbmNlIGluamVjdGVkLCB1c2luZyBmYWxsYmFjay4nKVxyXG5cclxuICAgICAgc3dpdGNoIChvcHRpb25zLmZhbGxiYWNrLnR5cGUpIHtcclxuICAgICAgICBjYXNlICd3cyc6XHJcbiAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuV2Vic29ja2V0UHJvdmlkZXIob3B0aW9ucy5mYWxsYmFjay51cmwpXHJcbiAgICAgICAgICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpXHJcblxyXG4gICAgICAgICAgLy8gQXR0YWNoIGRyaXp6bGUgZnVuY3Rpb25zXHJcbiAgICAgICAgICB3ZWIzLmV0aFsnY2FjaGVTZW5kVHJhbnNhY3Rpb24nXSA9ICh0eE9iamVjdCkgPT4gcHV0KHt0eXBlOiAnU0VORF9XRUIzX1RYJywgdHhPYmplY3QsIHN0YWNrSWQsIHdlYjN9KVxyXG5cclxuICAgICAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ1dFQjNfSU5JVElBTElaRUQnfSlcclxuXHJcbiAgICAgICAgICByZXR1cm4gd2ViM1xyXG5cclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIEludmFsaWQgb3B0aW9uczsgdGhyb3cuXHJcbiAgICAgICAgICB0aHJvdyBcIkludmFsaWQgd2ViMyBmYWxsYmFjayBwcm92aWRlZC5cIlxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3V0IG9mIHdlYjMgb3B0aW9uczsgdGhyb3cuXHJcbiAgICB0aHJvdyBcIkNhbm5vdCBmaW5kIGluamVjdGVkIHdlYjMgb3IgdmFsaWQgZmFsbGJhY2suXCJcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjYWxsSW5pdGlhbGl6ZVdlYjMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHdlYjMgPSB5aWVsZCBjYWxsKGluaXRpYWxpemVXZWIzLCB7b3B0aW9uczogYWN0aW9uLm9wdGlvbnN9KVxyXG4gICAgcmV0dXJuIHdlYjNcclxuICB9XHJcbiAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTogJ1dFQjNfRkFJTEVEJywgZXJyb3J9KVxyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW50aWFsaXppbmcgd2ViMzonKVxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIE5ldHdvcmsgSURcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldE5ldHdvcmtJZCh7d2ViM30pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbmV0d29ya0lkID0geWllbGQgY2FsbCh3ZWIzLmV0aC5uZXQuZ2V0SWQpXHJcblxyXG4gICAgeWllbGQgcHV0KHt0eXBlOiAnTkVUV09SS19JRF9GRVRDSEVEJywgbmV0d29ya0lkfSlcclxuXHJcbiAgICByZXR1cm4gbmV0d29ya0lkXHJcbiAgfVxyXG4gIGNhdGNoKGVycm9yKXtcclxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ05FVFdPUktfSURfRkFJTEVEJywgZXJyb3J9KVxyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG5ldHdvcmsgSUQ6JylcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcblxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBTZW5kIFRyYW5zYWN0aW9uXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVHhDaGFubmVsKHt0eE9iamVjdCwgc3RhY2tJZCwgd2ViM30pIHtcclxuICB2YXIgcGVyc2lzdFR4SGFzaFxyXG5cclxuICByZXR1cm4gZXZlbnRDaGFubmVsKGVtaXQgPT4ge1xyXG4gICAgY29uc3QgdHhQcm9taUV2ZW50ID0gd2ViMy5ldGguc2VuZFRyYW5zYWN0aW9uKHR4T2JqZWN0KS5vbigndHJhbnNhY3Rpb25IYXNoJywgdHhIYXNoID0+IHtcclxuICAgICAgcGVyc2lzdFR4SGFzaCA9IHR4SGFzaFxyXG5cclxuICAgICAgZW1pdCh7dHlwZTogJ1czVFhfQlJPQURDQVNURUQnLCB0eEhhc2gsIHN0YWNrSWR9KVxyXG4gICAgfSlcclxuICAgIC5vbignY29uZmlybWF0aW9uJywgKGNvbmZpcm1hdGlvbk51bWJlciwgcmVjZWlwdCkgPT4ge1xyXG4gICAgICBlbWl0KHt0eXBlOiAnVzNUWF9DT05GSVJNQUlUT04nLCBjb25maXJtYXRpb25SZWNlaXB0OiByZWNlaXB0LCB0eEhhc2g6IHBlcnNpc3RUeEhhc2h9KVxyXG4gICAgfSlcclxuICAgIC5vbigncmVjZWlwdCcsIHJlY2VpcHQgPT4ge1xyXG4gICAgICBlbWl0KHt0eXBlOiAnVzNUWF9TVUNDRVNTRlVMJywgcmVjZWlwdDogcmVjZWlwdCwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcclxuICAgICAgZW1pdChFTkQpXHJcbiAgICB9KVxyXG4gICAgLm9uKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgZW1pdCh7dHlwZTogJ1czVFhfRVJST1InLCBlcnJvcjogZXJyb3IsIHR4SGFzaDogcGVyc2lzdFR4SGFzaH0pXHJcbiAgICAgIGVtaXQoRU5EKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcclxuICAgICAgdHhQcm9taUV2ZW50Lm9mZigpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGNhbGxTZW5kVHgoe3R4T2JqZWN0LCBzdGFja0lkLCB3ZWIzfSkge1xyXG4gIGNvbnN0IHR4Q2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlVHhDaGFubmVsLCB7dHhPYmplY3QsIHN0YWNrSWQsIHdlYjN9KVxyXG5cclxuICB0cnkge1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZSh0eENoYW5uZWwpXHJcbiAgICAgIHlpZWxkIHB1dChldmVudClcclxuICAgIH1cclxuICB9IGZpbmFsbHkge1xyXG4gICAgdHhDaGFubmVsLmNsb3NlKClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3ZWIzU2FnYSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KCdXRUIzX0lOSVRJQUxJWklORycsIGNhbGxJbml0aWFsaXplV2ViMylcclxuICB5aWVsZCB0YWtlTGF0ZXN0KCdORVRXT1JLX0lEX0ZFVENISU5HJywgZ2V0TmV0d29ya0lkKVxyXG4gIHlpZWxkIHRha2VFdmVyeSgnU0VORF9XRUIzX1RYJywgY2FsbFNlbmRUeClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2ViM1NhZ2FcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dlYjMvd2ViM1NhZ2EuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80Nl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGtUcnVlLCBub29wIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCB2YXIgQlVGRkVSX09WRVJGTE9XID0gXCJDaGFubmVsJ3MgQnVmZmVyIG92ZXJmbG93IVwiO1xuXG52YXIgT05fT1ZFUkZMT1dfVEhST1cgPSAxO1xudmFyIE9OX09WRVJGTE9XX0RST1AgPSAyO1xudmFyIE9OX09WRVJGTE9XX1NMSURFID0gMztcbnZhciBPTl9PVkVSRkxPV19FWFBBTkQgPSA0O1xuXG52YXIgemVyb0J1ZmZlciA9IHsgaXNFbXB0eToga1RydWUsIHB1dDogbm9vcCwgdGFrZTogbm9vcCB9O1xuXG5mdW5jdGlvbiByaW5nQnVmZmVyKCkge1xuICB2YXIgbGltaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDEwO1xuICB2YXIgb3ZlcmZsb3dBY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgdmFyIGFyciA9IG5ldyBBcnJheShsaW1pdCk7XG4gIHZhciBsZW5ndGggPSAwO1xuICB2YXIgcHVzaEluZGV4ID0gMDtcbiAgdmFyIHBvcEluZGV4ID0gMDtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2goaXQpIHtcbiAgICBhcnJbcHVzaEluZGV4XSA9IGl0O1xuICAgIHB1c2hJbmRleCA9IChwdXNoSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgIGxlbmd0aCsrO1xuICB9O1xuXG4gIHZhciB0YWtlID0gZnVuY3Rpb24gdGFrZSgpIHtcbiAgICBpZiAobGVuZ3RoICE9IDApIHtcbiAgICAgIHZhciBpdCA9IGFycltwb3BJbmRleF07XG4gICAgICBhcnJbcG9wSW5kZXhdID0gbnVsbDtcbiAgICAgIGxlbmd0aC0tO1xuICAgICAgcG9wSW5kZXggPSAocG9wSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgICAgcmV0dXJuIGl0O1xuICAgIH1cbiAgfTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICBpdGVtcy5wdXNoKHRha2UoKSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzRW1wdHk6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoID09IDA7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChpdCkge1xuICAgICAgaWYgKGxlbmd0aCA8IGxpbWl0KSB7XG4gICAgICAgIHB1c2goaXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGRvdWJsZWRMaW1pdCA9IHZvaWQgMDtcbiAgICAgICAgc3dpdGNoIChvdmVyZmxvd0FjdGlvbikge1xuICAgICAgICAgIGNhc2UgT05fT1ZFUkZMT1dfVEhST1c6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoQlVGRkVSX09WRVJGTE9XKTtcbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX1NMSURFOlxuICAgICAgICAgICAgYXJyW3B1c2hJbmRleF0gPSBpdDtcbiAgICAgICAgICAgIHB1c2hJbmRleCA9IChwdXNoSW5kZXggKyAxKSAlIGxpbWl0O1xuICAgICAgICAgICAgcG9wSW5kZXggPSBwdXNoSW5kZXg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX0VYUEFORDpcbiAgICAgICAgICAgIGRvdWJsZWRMaW1pdCA9IDIgKiBsaW1pdDtcblxuICAgICAgICAgICAgYXJyID0gZmx1c2goKTtcblxuICAgICAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHB1c2hJbmRleCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICBwb3BJbmRleCA9IDA7XG5cbiAgICAgICAgICAgIGFyci5sZW5ndGggPSBkb3VibGVkTGltaXQ7XG4gICAgICAgICAgICBsaW1pdCA9IGRvdWJsZWRMaW1pdDtcblxuICAgICAgICAgICAgcHVzaChpdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIERST1BcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGFrZTogdGFrZSxcbiAgICBmbHVzaDogZmx1c2hcbiAgfTtcbn1cblxuZXhwb3J0IHZhciBidWZmZXJzID0ge1xuICBub25lOiBmdW5jdGlvbiBub25lKCkge1xuICAgIHJldHVybiB6ZXJvQnVmZmVyO1xuICB9LFxuICBmaXhlZDogZnVuY3Rpb24gZml4ZWQobGltaXQpIHtcbiAgICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfVEhST1cpO1xuICB9LFxuICBkcm9wcGluZzogZnVuY3Rpb24gZHJvcHBpbmcobGltaXQpIHtcbiAgICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfRFJPUCk7XG4gIH0sXG4gIHNsaWRpbmc6IGZ1bmN0aW9uIHNsaWRpbmcobGltaXQpIHtcbiAgICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfU0xJREUpO1xuICB9LFxuICBleHBhbmRpbmc6IGZ1bmN0aW9uIGV4cGFuZGluZyhpbml0aWFsU2l6ZSkge1xuICAgIHJldHVybiByaW5nQnVmZmVyKGluaXRpYWxTaXplLCBPTl9PVkVSRkxPV19FWFBBTkQpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvYnVmZmVycy5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRU5ELCBldmVudENoYW5uZWwgfSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQgeyBjYWxsLCBwdXQsIHRha2UsIHRha2VFdmVyeSwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuXHJcbi8qXHJcbiAqIExpc3RlbiBmb3IgQmxvY2tzXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmxvY2tDaGFubmVsKHtjb250cmFjdHMsIGNvbnRyYWN0QWRkcmVzc2VzLCBjb250cmFjdE5hbWVzLCB3ZWIzfSkge1xyXG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XHJcbiAgICBjb25zdCBibG9ja0V2ZW50cyA9IHdlYjMuZXRoLnN1YnNjcmliZSgnbmV3QmxvY2tIZWFkZXJzJywgKGVycm9yLCByZXN1bHQpID0+IHtcclxuICAgICAgaWYgKGVycm9yKVxyXG4gICAgICB7XHJcbiAgICAgICAgZW1pdCh7dHlwZTogJ0JMT0NLU19GQUlMRUQnLCBlcnJvcn0pXHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGJsb2NrIGhlYWRlciBzdWJzY3JpcHRpb246JylcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG5cclxuICAgICAgICBlbWl0KEVORClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5vbignZGF0YScsIChibG9ja0hlYWRlcikgPT4ge1xyXG4gICAgICBlbWl0KHt0eXBlOiAnQkxPQ0tfUkVDRUlWRUQnLCBibG9ja0hlYWRlciwgY29udHJhY3RzLCBjb250cmFjdEFkZHJlc3NlcywgY29udHJhY3ROYW1lcywgd2ViM30pXHJcbiAgICB9KVxyXG4gICAgLm9uKCdlcnJvcicsIGVycm9yID0+IHtcclxuICAgICAgZW1pdCh7dHlwZTogJ0JMT0NLU19GQUlMRUQnLCBlcnJvcn0pXHJcbiAgICAgIGVtaXQoRU5EKVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcclxuICAgICAgYmxvY2tFdmVudHMub2ZmKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiogY2FsbENyZWF0ZUJsb2NrQ2hhbm5lbCh7Y29udHJhY3RzLCBjb250cmFjdEFkZHJlc3NlcywgY29udHJhY3ROYW1lcywgd2ViM30pIHtcclxuICBjb25zdCBibG9ja0NoYW5uZWwgPSB5aWVsZCBjYWxsKGNyZWF0ZUJsb2NrQ2hhbm5lbCwge2NvbnRyYWN0cywgY29udHJhY3RBZGRyZXNzZXMsIGNvbnRyYWN0TmFtZXMsIHdlYjN9KVxyXG5cclxuICB0cnkge1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZShibG9ja0NoYW5uZWwpXHJcbiAgICAgIHlpZWxkIHB1dChldmVudClcclxuICAgIH1cclxuICB9IGZpbmFsbHkge1xyXG4gICAgYmxvY2tDaGFubmVsLmNsb3NlKClcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIFBvbGwgZm9yIEJsb2Nrc1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrUG9sbENoYW5uZWwoe2NvbnRyYWN0cywgY29udHJhY3RBZGRyZXNzZXMsIGNvbnRyYWN0TmFtZXMsIGludGVydmFsLCB3ZWIzfSkge1xyXG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XHJcbiAgICBjb25zdCBibG9ja1BvbGxlciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgd2ViMy5ldGguZ2V0QmxvY2soJ2xhdGVzdCcpLnRoZW4oKGJsb2NrKSA9PiB7XHJcbiAgICAgICAgZW1pdCh7dHlwZTogJ0JMT0NLX1JFQ0VJVkVEJywgYmxvY2tIZWFkZXI6IGJsb2NrLCBjb250cmFjdHMsIGNvbnRyYWN0QWRkcmVzc2VzLCBjb250cmFjdE5hbWVzLCB3ZWIzfSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGVtaXQoe3R5cGU6ICdCTE9DS1NfRkFJTEVEJywgZXJyb3J9KVxyXG4gICAgICAgIGVtaXQoRU5EKVxyXG4gICAgICB9KVxyXG4gICAgfSwgaW50ZXJ2YWwpIC8vIG9wdGlvbnMucG9sbHMuYmxvY2tzXHJcbiAgICBcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGJsb2NrUG9sbGVyKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bnN1YnNjcmliZVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjYWxsQ3JlYXRlQmxvY2tQb2xsQ2hhbm5lbCh7Y29udHJhY3RzLCBjb250cmFjdEFkZHJlc3NlcywgY29udHJhY3ROYW1lcywgaW50ZXJ2YWwsIHdlYjN9KSB7XHJcbiAgY29uc3QgYmxvY2tDaGFubmVsID0geWllbGQgY2FsbChjcmVhdGVCbG9ja1BvbGxDaGFubmVsLCB7Y29udHJhY3RzLCBjb250cmFjdEFkZHJlc3NlcywgY29udHJhY3ROYW1lcywgaW50ZXJ2YWwsIHdlYjN9KVxyXG5cclxuICB0cnkge1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZShibG9ja0NoYW5uZWwpXHJcbiAgICAgIHlpZWxkIHB1dChldmVudClcclxuICAgIH1cclxuICB9IGZpbmFsbHkge1xyXG4gICAgYmxvY2tDaGFubmVsLmNsb3NlKClcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIFByb2Nlc3MgQmxvY2tzXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24qIHByb2Nlc3NCbG9jayh7YmxvY2tIZWFkZXIsIGNvbnRyYWN0cywgY29udHJhY3RBZGRyZXNzZXMsIGNvbnRyYWN0TmFtZXMsIHdlYjN9KSB7XHJcbiAgY29uc3QgYmxvY2tOdW1iZXIgPSBibG9ja0hlYWRlci5udW1iZXJcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGJsb2NrID0geWllbGQgY2FsbCh3ZWIzLmV0aC5nZXRCbG9jaywgYmxvY2tOdW1iZXIsIHRydWUpXHJcbiAgICBjb25zdCB0eHMgPSBibG9jay50cmFuc2FjdGlvbnNcclxuXHJcbiAgICBpZiAodHhzLmxlbmd0aCA+IDApXHJcbiAgICB7XHJcbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0eHMgbG9va2luZyBmb3IgY29udHJhY3QgYWRkcmVzc1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR4cy5sZW5ndGg7IGkrKylcclxuICAgICAge1xyXG4gICAgICAgIGlmIChjb250cmFjdEFkZHJlc3Nlcy5pbmRleE9mKHR4c1tpXS5mcm9tKSAhPT0gLTEgfHwgY29udHJhY3RBZGRyZXNzZXMuaW5kZXhPZih0eHNbaV0udG8pICE9PSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGNvbnRyYWN0QWRkcmVzc2VzLmluZGV4T2YodHhzW2ldLmZyb20pICE9PSAtMSA/IGNvbnRyYWN0QWRkcmVzc2VzLmluZGV4T2YodHhzW2ldLmZyb20pIDogY29udHJhY3RBZGRyZXNzZXMuaW5kZXhPZih0eHNbaV0udG8pXHJcbiAgICAgICAgICBjb25zdCBjb250cmFjdE5hbWUgPSBjb250cmFjdE5hbWVzW2luZGV4XVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0NPTlRSQUNUX1NZTkNJTkcnLCBjb250cmFjdDogY29udHJhY3RzW2NvbnRyYWN0TmFtZV19KVxyXG5cclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYmxvY2sgcHJvY2Vzc2luZzonKVxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuXHJcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS19GQUlMRUQnLCBlcnJvcn0pXHJcblxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogYmxvY2tzU2FnYSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KCdCTE9DS1NfTElTVEVOSU5HJywgY2FsbENyZWF0ZUJsb2NrQ2hhbm5lbClcclxuICB5aWVsZCB0YWtlTGF0ZXN0KCdCTE9DS1NfUE9MTElORycsIGNhbGxDcmVhdGVCbG9ja1BvbGxDaGFubmVsKVxyXG4gIHlpZWxkIHRha2VFdmVyeSgnQkxPQ0tfUkVDRUlWRUQnLCBwcm9jZXNzQmxvY2spXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJsb2Nrc1NhZ2FcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmxvY2tzL2Jsb2Nrc1NhZ2EuanMiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAoIUJVR0dZICYmICRuYXRpdmUpIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gJy4uL2RlZmF1bHRPcHRpb25zJ1xyXG5pbXBvcnQgbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJ1xyXG5cclxuLy8gSW5pdGlhbGl6YXRpb24gRnVuY3Rpb25zXHJcbmltcG9ydCB7IGluaXRpYWxpemVXZWIzLCBnZXROZXR3b3JrSWQgfSBmcm9tICcuLi93ZWIzL3dlYjNTYWdhJ1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50cyB9IGZyb20gJy4uL2FjY291bnRzL2FjY291bnRzU2FnYSdcclxuaW1wb3J0IHsgZ2V0QWNjb3VudEJhbGFuY2VzIH0gZnJvbSAnLi4vYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1NhZ2EnXHJcbmltcG9ydCB7IGluc3RhbnRpYXRlQ29udHJhY3QgfSBmcm9tICcuLi9jb250cmFjdHMvY29udHJhY3RzU2FnYSdcclxuXHJcbmZ1bmN0aW9uKiBpbml0aWFsaXplRHJpenpsZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBhY3Rpb24ub3B0aW9ucylcclxuICAgIGNvbnN0IHdlYjNPcHRpb25zID0gb3B0aW9ucy53ZWIzXHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSB3ZWIzIGFuZCBnZXQgdGhlIGN1cnJlbnQgbmV0d29yayBJRC5cclxuICAgIHZhciB3ZWIzID0geWllbGQgY2FsbChpbml0aWFsaXplV2ViMywge29wdGlvbnM6IHdlYjNPcHRpb25zfSlcclxuICAgIGFjdGlvbi5kcml6emxlLndlYjMgPSB3ZWIzXHJcblxyXG4gICAgeWllbGQgY2FsbChnZXROZXR3b3JrSWQsIHt3ZWIzfSlcclxuXHJcbiAgICAvLyBHZXQgaW5pdGlhbCBhY2NvdW50cyBsaXN0IGFuZCBiYWxhbmNlcy5cclxuICAgIHlpZWxkIGNhbGwoZ2V0QWNjb3VudHMsIHt3ZWIzfSlcclxuICAgIHlpZWxkIGNhbGwoZ2V0QWNjb3VudEJhbGFuY2VzLCB7d2ViM30pXHJcblxyXG4gICAgLy8gSW5zdGFudGlhdGUgY29udHJhY3RzIHBhc3NlZCB0aHJvdWdoIHZpYSBvcHRpb25zLlxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmNvbnRyYWN0cy5sZW5ndGg7IGkrKylcclxuICAgIHtcclxuICAgICAgdmFyIGNvbnRyYWN0QXJ0aWZhY3QgPSBvcHRpb25zLmNvbnRyYWN0c1tpXVxyXG4gICAgICB2YXIgZXZlbnRzID0gW11cclxuXHJcbiAgICAgIGlmIChjb250cmFjdEFydGlmYWN0LmNvbnRyYWN0TmFtZSBpbiBvcHRpb25zLmV2ZW50cykge1xyXG4gICAgICAgIGV2ZW50cyA9IG9wdGlvbnMuZXZlbnRzW2NvbnRyYWN0QXJ0aWZhY3QuY29udHJhY3ROYW1lXVxyXG4gICAgICB9XHJcblxyXG4gICAgICBhY3Rpb24uZHJpenpsZS5jb250cmFjdHNbY29udHJhY3RBcnRpZmFjdC5jb250cmFjdE5hbWVdID0geWllbGQgY2FsbChpbnN0YW50aWF0ZUNvbnRyYWN0LCB7Y29udHJhY3RBcnRpZmFjdCwgZXZlbnRzLCBzdG9yZTogYWN0aW9uLmRyaXp6bGUuc3RvcmUsIHdlYjN9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbGxlY3QgY29udHJhY3QgYWRkcmVzc2VzIGluIGFuIGFycmF5IGZvciBsYXRlciBjb21wYXJpc29uIGluIHR4cy5cclxuICAgIHZhciBjb250cmFjdEFkZHJlc3NlcyA9IFtdXHJcbiAgICB2YXIgY29udHJhY3ROYW1lcyA9IFtdXHJcblxyXG4gICAgZm9yICh2YXIgY29udHJhY3QgaW4gYWN0aW9uLmRyaXp6bGUuY29udHJhY3RzKVxyXG4gICAge1xyXG4gICAgICBjb250cmFjdE5hbWVzLnB1c2goYWN0aW9uLmRyaXp6bGUuY29udHJhY3RzW2NvbnRyYWN0XS5jb250cmFjdEFydGlmYWN0LmNvbnRyYWN0TmFtZSlcclxuICAgICAgY29udHJhY3RBZGRyZXNzZXMucHVzaChhY3Rpb24uZHJpenpsZS5jb250cmFjdHNbY29udHJhY3RdLm9wdGlvbnMuYWRkcmVzcylcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2ViMy5jdXJyZW50UHJvdmlkZXIuaXNNZXRhTWFzaykge1xyXG4gICAgICAvLyBVc2luZyBNZXRhTWFzaywgYXR0ZW1wdCBibG9jayBwb2xsaW5nLlxyXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IG9wdGlvbnMucG9sbHMuYmxvY2tzXHJcblxyXG4gICAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS1NfUE9MTElORycsIGNvbnRyYWN0czogYWN0aW9uLmRyaXp6bGUuY29udHJhY3RzLCBpbnRlcnZhbCwgY29udHJhY3RBZGRyZXNzZXMsIGNvbnRyYWN0TmFtZXMsIHdlYjN9KVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIE5vdCB1c2luZyBNZXRhTWFzaywgYXR0ZW1wdCBzdWJzY3JpcHRpb24gYmxvY2sgbGlzdGVuaW5nLlxyXG4gICAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS1NfTElTVEVOSU5HJywgY29udHJhY3RzOiBhY3Rpb24uZHJpenpsZS5jb250cmFjdHMsIGNvbnRyYWN0QWRkcmVzc2VzLCBjb250cmFjdE5hbWVzLCB3ZWIzfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBBY2NvdW50cyBQb2xsaW5nXHJcbiAgICBpZiAoJ2FjY291bnRzJyBpbiBvcHRpb25zLnBvbGxzKSB7XHJcbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRTX1BPTExJTkcnLCBpbnRlcnZhbDogb3B0aW9ucy5wb2xscy5hY2NvdW50cywgd2ViM30pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHt0eXBlOiAnRFJJWlpMRV9GQUlMRUQnLCBlcnJvcn0pXHJcblxyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIERyaXp6bGU6JylcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcblxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICB5aWVsZCBwdXQoe3R5cGU6ICdEUklaWkxFX0lOSVRJQUxJWkVEJ30pXHJcblxyXG4gIHJldHVyblxyXG59XHJcblxyXG5mdW5jdGlvbiogZHJpenpsZVN0YXR1c1NhZ2EoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdCgnRFJJWlpMRV9JTklUSUFMSVpJTkcnLCBpbml0aWFsaXplRHJpenpsZSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJpenpsZVN0YXR1c1NhZ2E7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1NhZ2EuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7fVxyXG5cclxuY29uc3QgYWNjb3VudHNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBQ0NPVU5UU19GRVRDSElORycpXHJcbiAge1xyXG4gICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBQ0NPVU5UU19GRVRDSEVEJylcclxuICB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIGFjdGlvbi5hY2NvdW50cylcclxuICB9XHJcblxyXG4gIHJldHVybiBzdGF0ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50c1JlZHVjZXJcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjY291bnRzL2FjY291bnRzUmVkdWNlci5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XHJcblxyXG5jb25zdCBhY2NvdW50QmFsYW5jZXNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBQ0NPVU5UX0JBTEFOQ0VfRkVUQ0hFRCcpXHJcbiAge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFthY3Rpb24uYWNjb3VudF06IGFjdGlvbi5hY2NvdW50QmFsYW5jZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFjY291bnRCYWxhbmNlc1JlZHVjZXJcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge31cclxuXHJcbmNvbnN0IGNvbnRyYWN0c1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIC8qXHJcbiAgICogQ29udHJhY3QgU3RhdHVzXHJcbiAgICovXHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0NPTlRSQUNUX0lOSVRJQUxJWkVEJylcclxuICB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW2FjdGlvbi5uYW1lXToge1xyXG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXSxcclxuICAgICAgICBpbml0aWFsaXplZDogdHJ1ZSxcclxuICAgICAgICBzeW5jZWQ6IHRydWUsXHJcbiAgICAgICAgZXZlbnRzOiBbXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDT05UUkFDVF9TWU5DSU5HJylcclxuICB7XHJcbiAgICBjb25zdCBjb250cmFjdE5hbWUgPSBhY3Rpb24uY29udHJhY3QuY29udHJhY3RBcnRpZmFjdC5jb250cmFjdE5hbWVcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW2NvbnRyYWN0TmFtZV06IHtcclxuICAgICAgICAuLi5zdGF0ZVtjb250cmFjdE5hbWVdLFxyXG4gICAgICAgIHN5bmNlZDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ09OVFJBQ1RfU1lOQ0VEJylcclxuICB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW2FjdGlvbi5jb250cmFjdE5hbWVdOiB7XHJcbiAgICAgICAgLi4uc3RhdGVbYWN0aW9uLmNvbnRyYWN0TmFtZV0sXHJcbiAgICAgICAgc3luY2VkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0NPTlRSQUNUX1NZTkNfSU5EJylcclxuICB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW2FjdGlvbi5jb250cmFjdE5hbWVdOiB7XHJcbiAgICAgICAgLi4uc3RhdGVbYWN0aW9uLmNvbnRyYWN0TmFtZV0sXHJcbiAgICAgICAgc3luY2VkOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIENvbnRyYWN0IEZ1bmN0aW9uc1xyXG4gICAqL1xyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdHT1RfQ09OVFJBQ1RfVkFSJylcclxuICB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW2FjdGlvbi5uYW1lXToge1xyXG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXSxcclxuICAgICAgICBbYWN0aW9uLnZhcmlhYmxlXToge1xyXG4gICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdW2FjdGlvbi52YXJpYWJsZV0sXHJcbiAgICAgICAgICBbYWN0aW9uLmFyZ3NIYXNoXToge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV1bYWN0aW9uLnZhcmlhYmxlXVthY3Rpb24uYXJnc0hhc2hdLFxyXG4gICAgICAgICAgICBhcmdzOiBhY3Rpb24uYXJncyxcclxuICAgICAgICAgICAgZm5JbmRleDogYWN0aW9uLmZuSW5kZXgsXHJcbiAgICAgICAgICAgIHZhbHVlOiBhY3Rpb24udmFsdWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0VSUk9SX0NPTlRSQUNUX1ZBUicpXHJcbiAge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFthY3Rpb24ubmFtZV06IHtcclxuICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0sXHJcbiAgICAgICAgW2FjdGlvbi52YXJpYWJsZV06IHtcclxuICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXVthY3Rpb24udmFyaWFibGVdLFxyXG4gICAgICAgICAgW2FjdGlvbi5hcmdzSGFzaF06IHtcclxuICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdW2FjdGlvbi52YXJpYWJsZV1bYWN0aW9uLmFyZ3NIYXNoXSxcclxuICAgICAgICAgICAgYXJnczogYWN0aW9uLmFyZ3MsXHJcbiAgICAgICAgICAgIGZuSW5kZXg6IGFjdGlvbi5mbkluZGV4LFxyXG4gICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIENvbnRyYWN0IEV2ZW50c1xyXG4gICAqL1xyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdFVkVOVF9GSVJFRCcpXHJcbiAge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFthY3Rpb24ubmFtZV06IHtcclxuICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0sXHJcbiAgICAgICAgZXZlbnRzOiBbXHJcbiAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0uZXZlbnRzLFxyXG4gICAgICAgICAgYWN0aW9uLmV2ZW50XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udHJhY3RzUmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udHJhY3RzL2NvbnRyYWN0c1JlZHVjZXIuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaW5pdGlhbGl6ZWQ6IGZhbHNlXHJcbn1cclxuXHJcbmNvbnN0IGRyaXp6bGVTdGF0dXNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAvKlxyXG4gICAqIERyaXp6bGUgU3RhdHVzXHJcbiAgICovXHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0RSSVpaTEVfSU5JVElBTElaRUQnKVxyXG4gIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBpbml0aWFsaXplZDogdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc3RhdGVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJpenpsZVN0YXR1c1JlZHVjZXJcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXIuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7fVxyXG4gIFxyXG5jb25zdCB0cmFuc2FjdGlvbnNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RYX0JST0FEQ0FTVEVEJylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgW2FjdGlvbi50eEhhc2hdOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbnM6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfQ09ORklSTUFJVE9OJylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgW2FjdGlvbi50eEhhc2hdOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1hdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXS5jb25maXJtYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jb25maXJtYXRpb25SZWNlaXB0XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfU1VDQ0VTU0ZVTCcpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIFthY3Rpb24udHhIYXNoXToge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLnR4SGFzaF0sXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHJlY2VpcHQ6IGFjdGlvbi5yZWNlaXB0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RYX0VSUk9SJylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgW2FjdGlvbi50eEhhc2hdOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhdGVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdHJhbnNhY3Rpb25zUmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uc1JlZHVjZXIuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSBbXVxyXG4gIFxyXG5jb25zdCB0cmFuc2FjdGlvblN0YWNrUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdQVVNIX1RPX1RYU1RBQ0snKVxyXG4gICAge1xyXG4gICAgICAgIHN0YXRlLnB1c2goJycpXHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIC4uLnN0YXRlXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1BPUF9GUk9NX1RYU1RBQ0snKVxyXG4gICAge1xyXG4gICAgICAgIHN0YXRlLnBvcCgpXHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIC4uLnN0YXRlXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RYX0JST0FEQ0FTVEVEJylcclxuICAgIHtcclxuICAgICAgICBzdGF0ZVthY3Rpb24uc3RhY2tJZF0gPSBhY3Rpb24udHhIYXNoXHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIC4uLnN0YXRlXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0cmFuc2FjdGlvblN0YWNrUmVkdWNlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHN0YXR1czogJydcclxufVxyXG5cclxuY29uc3Qgd2ViM1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1dFQjNfSU5JVElBTElaSU5HJylcclxuICB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgc3RhdHVzOiAnaW5pdGlhbGl6aW5nJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnV0VCM19JTklUSUFMSVpFRCcpXHJcbiAge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIHN0YXR1czogJ2luaXRpYWxpemVkJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnV0VCM19GQUlMRUQnKVxyXG4gIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBzdGF0dXM6ICdmYWlsZWQnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdORVRXT1JLX0lEX0ZFVENIRUQnKVxyXG4gIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBuZXR3b3JrSWQ6IGFjdGlvbi5uZXR3b3JrSWRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ05FVFdPUktfSURfRkFJTEVEJylcclxuICB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgbmV0d29ya0lkOiBhY3Rpb24ubmV0d29ya0lkXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2ViM1JlZHVjZXJcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dlYjMvd2ViM1JlZHVjZXIuanMiLCJpbXBvcnQgRHJpenpsZSBmcm9tICcuL0RyaXp6bGUuanMnXHJcbmltcG9ydCBnZW5lcmF0ZVN0b3JlIGZyb20gJy4vZ2VuZXJhdGVTdG9yZSdcclxuaW1wb3J0IGdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlIGZyb20gJy4vZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUnXHJcblxyXG4vLyBSZWR1Y2Vyc1xyXG5pbXBvcnQgYWNjb3VudHNSZWR1Y2VyIGZyb20gJy4vYWNjb3VudHMvYWNjb3VudHNSZWR1Y2VyJ1xyXG5pbXBvcnQgYWNjb3VudEJhbGFuY2VzUmVkdWNlciBmcm9tICcuL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyJ1xyXG5pbXBvcnQgY29udHJhY3RzUmVkdWNlciBmcm9tICcuL2NvbnRyYWN0cy9jb250cmFjdHNSZWR1Y2VyJ1xyXG5pbXBvcnQgZHJpenpsZVN0YXR1c1JlZHVjZXIgZnJvbSAnLi9kcml6emxlU3RhdHVzL2RyaXp6bGVTdGF0dXNSZWR1Y2VyJ1xyXG5pbXBvcnQgdHJhbnNhY3Rpb25zUmVkdWNlciBmcm9tICcuL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNSZWR1Y2VyJ1xyXG5pbXBvcnQgdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIgZnJvbSAnLi90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25TdGFja1JlZHVjZXInXHJcbmltcG9ydCB3ZWIzUmVkdWNlciBmcm9tICcuL3dlYjMvd2ViM1JlZHVjZXInXHJcblxyXG5jb25zdCBkcml6emxlUmVkdWNlcnMgPSB7XHJcbiAgYWNjb3VudHM6IGFjY291bnRzUmVkdWNlcixcclxuICBhY2NvdW50QmFsYW5jZXM6IGFjY291bnRCYWxhbmNlc1JlZHVjZXIsXHJcbiAgY29udHJhY3RzOiBjb250cmFjdHNSZWR1Y2VyLFxyXG4gIGRyaXp6bGVTdGF0dXM6IGRyaXp6bGVTdGF0dXNSZWR1Y2VyLFxyXG4gIHRyYW5zYWN0aW9uczogdHJhbnNhY3Rpb25zUmVkdWNlcixcclxuICB0cmFuc2FjdGlvblN0YWNrOiB0cmFuc2FjdGlvblN0YWNrUmVkdWNlcixcclxuICB3ZWIzOiB3ZWIzUmVkdWNlclxyXG59XHJcblxyXG4vLyBTYWdhc1xyXG5pbXBvcnQgYWNjb3VudHNTYWdhIGZyb20gJy4vYWNjb3VudHMvYWNjb3VudHNTYWdhJ1xyXG5pbXBvcnQgYWNjb3VudEJhbGFuY2VzU2FnYSBmcm9tICcuL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhJ1xyXG5pbXBvcnQgYmxvY2tzU2FnYSBmcm9tICcuL2Jsb2Nrcy9ibG9ja3NTYWdhJ1xyXG5pbXBvcnQgY29udHJhY3RzU2FnYSBmcm9tICcuL2NvbnRyYWN0cy9jb250cmFjdHNTYWdhJ1xyXG5pbXBvcnQgZHJpenpsZVN0YXR1c1NhZ2EgZnJvbSAnLi9kcml6emxlU3RhdHVzL2RyaXp6bGVTdGF0dXNTYWdhJ1xyXG5pbXBvcnQgd2ViM1NhZ2EgZnJvbSAnLi93ZWIzL3dlYjNTYWdhJ1xyXG5cclxuY29uc3QgZHJpenpsZVNhZ2FzID0gW1xyXG4gIGFjY291bnRzU2FnYSxcclxuICBhY2NvdW50QmFsYW5jZXNTYWdhLFxyXG4gIGJsb2Nrc1NhZ2EsXHJcbiAgY29udHJhY3RzU2FnYSxcclxuICBkcml6emxlU3RhdHVzU2FnYSxcclxuICB3ZWIzU2FnYVxyXG5dXHJcblxyXG5leHBvcnQge1xyXG4gIERyaXp6bGUsXHJcbiAgZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUsXHJcbiAgZ2VuZXJhdGVTdG9yZSxcclxuICBkcml6emxlUmVkdWNlcnMsXHJcbiAgZHJpenpsZVNhZ2FzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJjbGFzcyBEcml6emxlIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zLCBzdG9yZSkge1xyXG4gICAgLy8gVmFyaWFibGVzXHJcbiAgICB0aGlzLmNvbnRyYWN0cyA9IHt9XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXHJcbiAgICB0aGlzLnN0b3JlID0gc3RvcmVcclxuICAgIHRoaXMud2ViMyA9IHt9XHJcblxyXG4gICAgLy8gV2FpdCBmb3Igd2luZG93IGxvYWQgZXZlbnQgaW4gY2FzZSBvZiBpbmplY3RlZCB3ZWIzLlxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgIC8vIEJlZ2luIERyaXp6bGUgaW5pdGlhbGl6YXRpb24uXHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnRFJJWlpMRV9JTklUSUFMSVpJTkcnLCBkcml6emxlOiB0aGlzLCBvcHRpb25zfSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcml6emxlXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Ecml6emxlLmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vcm9vdFNhZ2EnXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU3RvcmUob3B0aW9ucykge1xyXG4gIC8vIFJlZHV4IERldlRvb2xzXHJcbiAgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcclxuXHJcbiAgLy8gUHJlbG9hZGVkIHN0YXRlXHJcbiAgdmFyIGNvbnRyYWN0c0luaXRpYWxTdGF0ZSA9IHt9XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5jb250cmFjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vIEluaXRpYWwgY29udHJhY3QgZGV0YWlsc1xyXG4gICAgdmFyIGNvbnRyYWN0TmFtZSA9IG9wdGlvbnMuY29udHJhY3RzW2ldLmNvbnRyYWN0TmFtZVxyXG5cclxuICAgIGNvbnRyYWN0c0luaXRpYWxTdGF0ZVtjb250cmFjdE5hbWVdID0ge1xyXG4gICAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgICAgIHN5bmNlZDogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb25zdGFudCBnZXR0ZXJzXHJcbiAgICBmb3IgKHZhciBpMiA9IDA7IGkyIDwgb3B0aW9ucy5jb250cmFjdHNbaV0uYWJpLmxlbmd0aDsgaTIrKykge1xyXG4gICAgICB2YXIgaXRlbSA9IG9wdGlvbnMuY29udHJhY3RzW2ldLmFiaVtpMl07XHJcblxyXG4gICAgICBpZiAoaXRlbS50eXBlID09IFwiZnVuY3Rpb25cIiAmJiBpdGVtLmNvbnN0YW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgY29udHJhY3RzSW5pdGlhbFN0YXRlW2NvbnRyYWN0TmFtZV1baXRlbS5uYW1lXSA9IHt9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBwcmVsb2FkZWRTdGF0ZSA9IHtcclxuICAgIGNvbnRyYWN0czogY29udHJhY3RzSW5pdGlhbFN0YXRlXHJcbiAgfVxyXG5cclxuICAvLyBjcmVhdGUgdGhlIHNhZ2EgbWlkZGxld2FyZVxyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxyXG5cclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gICAgcmVkdWNlcixcclxuICAgIHByZWxvYWRlZFN0YXRlLFxyXG4gICAgY29tcG9zZUVuaGFuY2VycyhcclxuICAgICAgYXBwbHlNaWRkbGV3YXJlKFxyXG4gICAgICAgIHNhZ2FNaWRkbGV3YXJlXHJcbiAgICAgIClcclxuICAgIClcclxuICApXHJcblxyXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcclxuXHJcbiAgcmV0dXJuIHN0b3JlXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVTdG9yZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW5lcmF0ZVN0b3JlLmpzIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5cclxuaW1wb3J0IGFjY291bnRzU2FnYSBmcm9tICcuL2FjY291bnRzL2FjY291bnRzU2FnYSdcclxuaW1wb3J0IGFjY291bnRCYWxhbmNlc1NhZ2EgZnJvbSAnLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYSdcclxuaW1wb3J0IGJsb2Nrc1NhZ2EgZnJvbSAnLi9ibG9ja3MvYmxvY2tzU2FnYSdcclxuaW1wb3J0IGNvbnRyYWN0c1NhZ2EgZnJvbSAnLi9jb250cmFjdHMvY29udHJhY3RzU2FnYSdcclxuaW1wb3J0IGRyaXp6bGVTdGF0dXNTYWdhIGZyb20gJy4vZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzU2FnYSdcclxuaW1wb3J0IHdlYjNTYWdhIGZyb20gJy4vd2ViMy93ZWIzU2FnYSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290KCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKGFjY291bnRzU2FnYSksXHJcbiAgICBmb3JrKGFjY291bnRCYWxhbmNlc1NhZ2EpLFxyXG4gICAgZm9yayhibG9ja3NTYWdhKSxcclxuICAgIGZvcmsoY29udHJhY3RzU2FnYSksXHJcbiAgICBmb3JrKGRyaXp6bGVTdGF0dXNTYWdhKSxcclxuICAgIGZvcmsod2ViM1NhZ2EpXHJcbiAgXSlcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm9vdFNhZ2EuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdGFrZUV2ZXJ5SGVscGVyIGZyb20gJy4vdGFrZUV2ZXJ5JztcbmltcG9ydCB0YWtlTGF0ZXN0SGVscGVyIGZyb20gJy4vdGFrZUxhdGVzdCc7XG5pbXBvcnQgdGhyb3R0bGVIZWxwZXIgZnJvbSAnLi90aHJvdHRsZSc7XG5cbmltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJy4uL3V0aWxzJztcblxudmFyIGRlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIGRlcHJlY2F0aW9uV2FybmluZyhoZWxwZXJOYW1lKSB7XG4gIHJldHVybiAnaW1wb3J0IHsgJyArIGhlbHBlck5hbWUgKyAnIH0gZnJvbSBcXCdyZWR1eC1zYWdhXFwnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgaW1wb3J0IHsgJyArIGhlbHBlck5hbWUgKyAnIH0gZnJvbSBcXCdyZWR1eC1zYWdhL2VmZmVjdHNcXCcuXFxuVGhlIGxhdHRlciB3aWxsIG5vdCB3b3JrIHdpdGggeWllbGQqLCBhcyBoZWxwZXIgZWZmZWN0cyBhcmUgd3JhcHBlZCBhdXRvbWF0aWNhbGx5IGZvciB5b3UgaW4gZm9yayBlZmZlY3QuXFxuVGhlcmVmb3JlIHlpZWxkICcgKyBoZWxwZXJOYW1lICsgJyB3aWxsIHJldHVybiB0YXNrIGRlc2NyaXB0b3IgdG8geW91ciBzYWdhIGFuZCBleGVjdXRlIG5leHQgbGluZXMgb2YgY29kZS4nO1xufTtcblxudmFyIHRha2VFdmVyeSA9IC8qI19fUFVSRV9fKi9kZXByZWNhdGUodGFrZUV2ZXJ5SGVscGVyLCAvKiNfX1BVUkVfXyovZGVwcmVjYXRpb25XYXJuaW5nKCd0YWtlRXZlcnknKSk7XG52YXIgdGFrZUxhdGVzdCA9IC8qI19fUFVSRV9fKi9kZXByZWNhdGUodGFrZUxhdGVzdEhlbHBlciwgLyojX19QVVJFX18qL2RlcHJlY2F0aW9uV2FybmluZygndGFrZUxhdGVzdCcpKTtcbnZhciB0aHJvdHRsZSA9IC8qI19fUFVSRV9fKi9kZXByZWNhdGUodGhyb3R0bGVIZWxwZXIsIC8qI19fUFVSRV9fKi9kZXByZWNhdGlvbldhcm5pbmcoJ3Rocm90dGxlJykpO1xuXG5leHBvcnQgeyB0YWtlRXZlcnksIHRha2VMYXRlc3QsIHRocm90dGxlLCB0YWtlRXZlcnlIZWxwZXIsIHRha2VMYXRlc3RIZWxwZXIsIHRocm90dGxlSGVscGVyIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9zYWdhSGVscGVycy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZzbUl0ZXJhdG9yLCB7IHFFbmQsIHNhZmVOYW1lIH0gZnJvbSAnLi9mc21JdGVyYXRvcic7XG5pbXBvcnQgeyB0YWtlLCBmb3JrIH0gZnJvbSAnLi4vaW8nO1xuaW1wb3J0IHsgRU5EIH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRha2VFdmVyeShwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogdGFrZShwYXR0ZXJuT3JDaGFubmVsKSB9O1xuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogZm9yay5hcHBseSh1bmRlZmluZWQsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSkgfTtcbiAgfTtcblxuICB2YXIgYWN0aW9uID0gdm9pZCAwLFxuICAgICAgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIFsncTInLCB5VGFrZSwgc2V0QWN0aW9uXTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiBhY3Rpb24gPT09IEVORCA/IFtxRW5kXSA6IFsncTEnLCB5Rm9yayhhY3Rpb24pXTtcbiAgICB9XG4gIH0sICdxMScsICd0YWtlRXZlcnkoJyArIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpICsgJywgJyArIHdvcmtlci5uYW1lICsgJyknKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rha2VFdmVyeS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHF1ZXVlID0gW107XG4vKipcbiAgVmFyaWFibGUgdG8gaG9sZCBhIGNvdW50aW5nIHNlbWFwaG9yZVxuICAtIEluY3JlbWVudGluZyBhZGRzIGEgbG9jayBhbmQgcHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHN1c3BlbmRlZGAgc3RhdGUgKGlmIGl0J3Mgbm90XG4gICAgYWxyZWFkeSBzdXNwZW5kZWQpXG4gIC0gRGVjcmVtZW50aW5nIHJlbGVhc2VzIGEgbG9jay4gWmVybyBsb2NrcyBwdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgcmVsZWFzZWRgIHN0YXRlLiBUaGlzXG4gICAgdHJpZ2dlcnMgZmx1c2hpbmcgdGhlIHF1ZXVlZCB0YXNrcy5cbioqL1xudmFyIHNlbWFwaG9yZSA9IDA7XG5cbi8qKlxuICBFeGVjdXRlcyBhIHRhc2sgJ2F0b21pY2FsbHknLiBUYXNrcyBzY2hlZHVsZWQgZHVyaW5nIHRoaXMgZXhlY3V0aW9uIHdpbGwgYmUgcXVldWVkXG4gIGFuZCBmbHVzaGVkIGFmdGVyIHRoaXMgdGFzayBoYXMgZmluaXNoZWQgKGFzc3VtaW5nIHRoZSBzY2hlZHVsZXIgZW5kdXAgaW4gYSByZWxlYXNlZFxuICBzdGF0ZSkuXG4qKi9cbmZ1bmN0aW9uIGV4ZWModGFzaykge1xuICB0cnkge1xuICAgIHN1c3BlbmQoKTtcbiAgICB0YXNrKCk7XG4gIH0gZmluYWxseSB7XG4gICAgcmVsZWFzZSgpO1xuICB9XG59XG5cbi8qKlxuICBFeGVjdXRlcyBvciBxdWV1ZXMgYSB0YXNrIGRlcGVuZGluZyBvbiB0aGUgc3RhdGUgb2YgdGhlIHNjaGVkdWxlciAoYHN1c3BlbmRlZGAgb3IgYHJlbGVhc2VkYClcbioqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzYXAodGFzaykge1xuICBxdWV1ZS5wdXNoKHRhc2spO1xuXG4gIGlmICghc2VtYXBob3JlKSB7XG4gICAgc3VzcGVuZCgpO1xuICAgIGZsdXNoKCk7XG4gIH1cbn1cblxuLyoqXG4gIFB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGBzdXNwZW5kZWRgIHN0YXRlLiBTY2hlZHVsZWQgdGFza3Mgd2lsbCBiZSBxdWV1ZWQgdW50aWwgdGhlXG4gIHNjaGVkdWxlciBpcyByZWxlYXNlZC5cbioqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1c3BlbmQoKSB7XG4gIHNlbWFwaG9yZSsrO1xufVxuXG4vKipcbiAgUHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHJlbGVhc2VkYCBzdGF0ZS5cbioqL1xuZnVuY3Rpb24gcmVsZWFzZSgpIHtcbiAgc2VtYXBob3JlLS07XG59XG5cbi8qKlxuICBSZWxlYXNlcyB0aGUgY3VycmVudCBsb2NrLiBFeGVjdXRlcyBhbGwgcXVldWVkIHRhc2tzIGlmIHRoZSBzY2hlZHVsZXIgaXMgaW4gdGhlIHJlbGVhc2VkIHN0YXRlLlxuKiovXG5leHBvcnQgZnVuY3Rpb24gZmx1c2goKSB7XG4gIHJlbGVhc2UoKTtcblxuICB2YXIgdGFzayA9IHZvaWQgMDtcbiAgd2hpbGUgKCFzZW1hcGhvcmUgJiYgKHRhc2sgPSBxdWV1ZS5zaGlmdCgpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZXhlYyh0YXNrKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2NoZWR1bGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZnNtSXRlcmF0b3IsIHsgcUVuZCwgc2FmZU5hbWUgfSBmcm9tICcuL2ZzbUl0ZXJhdG9yJztcbmltcG9ydCB7IGNhbmNlbCwgdGFrZSwgZm9yayB9IGZyb20gJy4uL2lvJztcbmltcG9ydCB7IEVORCB9IGZyb20gJy4uL2NoYW5uZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YWtlTGF0ZXN0KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB5VGFrZSA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpIH07XG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKSB9O1xuICB9O1xuICB2YXIgeUNhbmNlbCA9IGZ1bmN0aW9uIHlDYW5jZWwodGFzaykge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogY2FuY2VsKHRhc2spIH07XG4gIH07XG5cbiAgdmFyIHRhc2sgPSB2b2lkIDAsXG4gICAgICBhY3Rpb24gPSB2b2lkIDA7XG4gIHZhciBzZXRUYXNrID0gZnVuY3Rpb24gc2V0VGFzayh0KSB7XG4gICAgcmV0dXJuIHRhc2sgPSB0O1xuICB9O1xuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIFsncTInLCB5VGFrZSwgc2V0QWN0aW9uXTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiBhY3Rpb24gPT09IEVORCA/IFtxRW5kXSA6IHRhc2sgPyBbJ3EzJywgeUNhbmNlbCh0YXNrKV0gOiBbJ3ExJywgeUZvcmsoYWN0aW9uKSwgc2V0VGFza107XG4gICAgfSxcbiAgICBxMzogZnVuY3Rpb24gcTMoKSB7XG4gICAgICByZXR1cm4gWydxMScsIHlGb3JrKGFjdGlvbiksIHNldFRhc2tdO1xuICAgIH1cbiAgfSwgJ3ExJywgJ3Rha2VMYXRlc3QoJyArIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpICsgJywgJyArIHdvcmtlci5uYW1lICsgJyknKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rha2VMYXRlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmc21JdGVyYXRvciwgeyBxRW5kLCBzYWZlTmFtZSB9IGZyb20gJy4vZnNtSXRlcmF0b3InO1xuaW1wb3J0IHsgdGFrZSwgZm9yaywgYWN0aW9uQ2hhbm5lbCwgY2FsbCB9IGZyb20gJy4uL2lvJztcbmltcG9ydCB7IEVORCB9IGZyb20gJy4uL2NoYW5uZWwnO1xuaW1wb3J0IHsgYnVmZmVycyB9IGZyb20gJy4uL2J1ZmZlcnMnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYWN0aW9uID0gdm9pZCAwLFxuICAgICAgY2hhbm5lbCA9IHZvaWQgMDtcblxuICB2YXIgeUFjdGlvbkNoYW5uZWwgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXJzLnNsaWRpbmcoMSkpIH07XG4gIHZhciB5VGFrZSA9IGZ1bmN0aW9uIHlUYWtlKCkge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogdGFrZShjaGFubmVsKSB9O1xuICB9O1xuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogZm9yay5hcHBseSh1bmRlZmluZWQsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSkgfTtcbiAgfTtcbiAgdmFyIHlEZWxheSA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiBjYWxsKGRlbGF5LCBkZWxheUxlbmd0aCkgfTtcblxuICB2YXIgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuICB2YXIgc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uIHNldENoYW5uZWwoY2gpIHtcbiAgICByZXR1cm4gY2hhbm5lbCA9IGNoO1xuICB9O1xuXG4gIHJldHVybiBmc21JdGVyYXRvcih7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIFsncTInLCB5QWN0aW9uQ2hhbm5lbCwgc2V0Q2hhbm5lbF07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4gWydxMycsIHlUYWtlKCksIHNldEFjdGlvbl07XG4gICAgfSxcbiAgICBxMzogZnVuY3Rpb24gcTMoKSB7XG4gICAgICByZXR1cm4gYWN0aW9uID09PSBFTkQgPyBbcUVuZF0gOiBbJ3E0JywgeUZvcmsoYWN0aW9uKV07XG4gICAgfSxcbiAgICBxNDogZnVuY3Rpb24gcTQoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlEZWxheV07XG4gICAgfVxuICB9LCAncTEnLCAndGhyb3R0bGUoJyArIHNhZmVOYW1lKHBhdHRlcm4pICsgJywgJyArIHdvcmtlci5uYW1lICsgJyknKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rocm90dGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgRHJpenpsZUNvbnRyYWN0IHtcclxuICBjb25zdHJ1Y3Rvcihjb250cmFjdEFydGlmYWN0LCB3ZWIzLCBuZXR3b3JrSWQsIHN0b3JlLCBldmVudHMgPSBbXSkge1xyXG4gICAgdGhpcy5jb250cmFjdEFydGlmYWN0ID0gY29udHJhY3RBcnRpZmFjdFxyXG4gICAgdGhpcy5hYmkgPSBjb250cmFjdEFydGlmYWN0LmFiaVxyXG4gICAgdGhpcy53ZWIzID0gd2ViM1xyXG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlXHJcblxyXG4gICAgLy8gSW5zdGFudGlhdGUgdGhlIGNvbnRyYWN0LlxyXG4gICAgdmFyIHdlYjNDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgICAgdGhpcy5hYmksXHJcbiAgICAgIHRoaXMuY29udHJhY3RBcnRpZmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdLmFkZHJlc3MsXHJcbiAgICAgIHtcclxuICAgICAgICBmcm9tOiB0aGlzLnN0b3JlLmdldFN0YXRlKCkuYWNjb3VudHNbMF0sXHJcbiAgICAgICAgZGF0YTogdGhpcy5jb250cmFjdEFydGlmYWN0LmRlcGxveWVkQnl0ZWNvZGVcclxuICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIC8vIE1lcmdlIHdlYjMgY29udHJhY3QgaW5zdGFuY2UgaW50byBEcml6emxlQ29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHdlYjNDb250cmFjdClcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWJpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gdGhpcy5hYmlbaV1cclxuXHJcbiAgICAgIGlmIChpdGVtLnR5cGUgPT0gXCJmdW5jdGlvblwiICYmIGl0ZW0uY29uc3RhbnQgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLm1ldGhvZHNbaXRlbS5uYW1lXS5jYWNoZUNhbGwgPSB0aGlzLmNhY2hlQ2FsbEZ1bmN0aW9uKGl0ZW0ubmFtZSwgaSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW0udHlwZSA9PSBcImZ1bmN0aW9uXCIgJiYgaXRlbS5jb25zdGFudCA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLm1ldGhvZHNbaXRlbS5uYW1lXS5jYWNoZVNlbmQgPSB0aGlzLmNhY2hlU2VuZEZ1bmN0aW9uKGl0ZW0ubmFtZSwgaSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVycyBpZiBhbnkgZXZlbnRzLlxyXG4gICAgaWYgKGV2ZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBldmVudHNbaV1cclxuXHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdMSVNURU5fRk9SX0VWRU5UJywgY29udHJhY3Q6IHRoaXMsIGV2ZW50TmFtZX0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuYW1lID0gY29udHJhY3RBcnRpZmFjdC5jb250cmFjdE5hbWVcclxuXHJcbiAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0NPTlRSQUNUX0lOSVRJQUxJWkVEJywgbmFtZX0pXHJcbiAgfVxyXG5cclxuICBjYWNoZUNhbGxGdW5jdGlvbihmbk5hbWUsIGZuSW5kZXgsIGZuKSB7XHJcbiAgICB2YXIgY29udHJhY3QgPSB0aGlzXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBDb2xsZWN0IGFyZ3MgYW5kIGhhc2ggdG8gdXNlIGFzIGtleSwgMHgwIGlmIG5vIGFyZ3NcclxuICAgICAgdmFyIGFyZ3NIYXNoID0gJzB4MCdcclxuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHNcclxuXHJcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBhcmdzSGFzaCA9IGNvbnRyYWN0LmdlbmVyYXRlQXJnc0hhc2goYXJncylcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjb250cmFjdE5hbWUgPSBjb250cmFjdC5jb250cmFjdEFydGlmYWN0LmNvbnRyYWN0TmFtZVxyXG4gICAgICBjb25zdCBmdW5jdGlvblN0YXRlID0gY29udHJhY3Quc3RvcmUuZ2V0U3RhdGUoKS5jb250cmFjdHNbY29udHJhY3ROYW1lXVtmbk5hbWVdXHJcblxyXG4gICAgICAvLyBJZiBjYWxsIHJlc3VsdCBpcyBpbiBzdGF0ZSBhbmQgZnJlc2gsIHJldHVybiB2YWx1ZSBpbnN0ZWFkIG9mIGNhbGxpbmdcclxuICAgICAgaWYgKGFyZ3NIYXNoIGluIGZ1bmN0aW9uU3RhdGUpIHtcclxuICAgICAgICBpZiAoY29udHJhY3Quc3RvcmUuZ2V0U3RhdGUoKS5jb250cmFjdHNbY29udHJhY3ROYW1lXS5zeW5jZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgIHJldHVybiBhcmdzSGFzaFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT3RoZXJ3aXNlLCBjYWxsIGZ1bmN0aW9uIGFuZCB1cGRhdGUgc3RvcmVcclxuICAgICAgY29udHJhY3Quc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdDQUxMX0NPTlRSQUNUX0ZOJywgY29udHJhY3QsIGZuTmFtZSwgZm5JbmRleCwgYXJncywgYXJnc0hhc2h9KVxyXG5cclxuICAgICAgLy8gUmV0dXJuIG5vdGhpbmcgYmVjYXVzZSBzdGF0ZSBpcyBjdXJyZW50bHkgZW1wdHkuXHJcbiAgICAgIHJldHVybiBhcmdzSGFzaFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FjaGVTZW5kRnVuY3Rpb24oZm5OYW1lLCBmbkluZGV4LCBmbikge1xyXG4gICAgLy8gTk9URTogTWF5IG5vdCBuZWVkIGZuIGluZGV4XHJcbiAgICB2YXIgY29udHJhY3QgPSB0aGlzXHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50c1xyXG5cclxuICAgICAgLy8gR2VuZXJhdGUgdGVtcG9yYXJ5IElEXHJcbiAgICAgIHZhciBzdGFja0lkID0gY29udHJhY3Quc3RvcmUuZ2V0U3RhdGUoKS50cmFuc2FjdGlvblN0YWNrLmxlbmd0aFxyXG5cclxuICAgICAgLy8gQWRkIElEIHRvIFwidHJhbnNhY3Rpb25TdGFja1wiIHdpdGggZW1wdHkgdmFsdWVcclxuICAgICAgY29udHJhY3Quc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdQVVNIX1RPX1NUQUNLJ30pXHJcbiAgICAgIFxyXG4gICAgICAvLyBEaXNwYXRjaCB0eCB0byBzYWdhXHJcbiAgICAgIC8vIFdoZW4gdHhoYXNoIHJlY2VpdmVkLCB3aWxsIGJlIHZhbHVlIG9mIHN0YWNrIElEXHJcbiAgICAgIGNvbnRyYWN0LnN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnU0VORF9DT05UUkFDVF9UWCcsIGNvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIHN0YWNrSWR9KVxyXG4gICAgIFxyXG4gICAgICAvLyByZXR1cm4gc3RhY2sgSURcclxuICAgICAgcmV0dXJuIHN0YWNrSWRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQXJnc0hhc2goYXJncykge1xyXG4gICAgdmFyIHdlYjMgPSB0aGlzLndlYjNcclxuICAgIHZhciBoYXNoU3RyaW5nID0gJydcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspXHJcbiAgICB7XHJcbiAgICAgIGlmICh0eXBlb2YgYXJnc1tpXSAhPT0gJ2Z1bmN0aW9uJylcclxuICAgICAge1xyXG4gICAgICAgIHZhciBhcmdUb0hhc2ggPSBhcmdzW2ldXHJcblxyXG4gICAgICAgIC8vIFN0cmluZ2lmeSBvYmplY3RzIHRvIGFsbG93IGhhc2hpbmdcclxuICAgICAgICBpZiAodHlwZW9mIGFyZ1RvSGFzaCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgIGFyZ1RvSGFzaCA9IEpTT04uc3RyaW5naWZ5KGFyZ1RvSGFzaClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbnZlcnQgbnVtYmVyIHRvIHN0cm9uZyB0byBhbGxvdyBoYXNoaW5nXHJcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdUb0hhc2ggPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICBhcmdUb0hhc2ggPSBhcmdUb0hhc2gudG9TdHJpbmcoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBpbiBwbGFjZSBmb3Igd2ViMyB2MC54XHJcbiAgICAgICAgaWYgKCd1dGlscycgaW4gd2ViMykge1xyXG4gICAgICAgICAgdmFyIGhhc2hQaWVjZSA9IHdlYjMudXRpbHMuc2hhMyhhcmdUb0hhc2gpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdmFyIGhhc2hQaWVjZSA9IHdlYjMuc2hhMyhhcmdUb0hhc2gpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYXNoU3RyaW5nICs9IGhhc2hQaWVjZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdlYjMudXRpbHMuc2hhMyhoYXNoU3RyaW5nKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJpenpsZUNvbnRyYWN0XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Ecml6emxlQ29udHJhY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIHdlYjM6IHtcclxuICAgIGJsb2NrOiBmYWxzZSxcclxuICAgIGZhbGxiYWNrOiB7XHJcbiAgICAgIHR5cGU6ICd3cycsXHJcbiAgICAgIHVybDogJ3dzOi8vMTI3LjAuMC4xOjg1NDUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb250cmFjdHM6IFtdLFxyXG4gIGV2ZW50czoge30sXHJcbiAgcG9sbHM6IHtcclxuICAgIGJsb2NrczogMzAwMFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdE9wdGlvbnNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVmYXVsdE9wdGlvbnMuanMiLCJ2YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKVxuXHRcdCYmICFpc1NwZWNpYWwodmFsdWUpXG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcblx0dmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuXHRyZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG5cdFx0fHwgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IERhdGVdJ1xuXHRcdHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKVxufVxuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcblx0cmV0dXJuIChvcHRpb25zLmNsb25lICE9PSBmYWxzZSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSlcblx0XHQ/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKVxuXHRcdDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChlbGVtZW50LCBvcHRpb25zKVxuXHR9KVxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHR2YXIgZGVzdGluYXRpb24gPSB7fTtcblx0aWYgKG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuXHRcdE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh0YXJnZXRba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH1cblx0T2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdGlmICghb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0b3B0aW9ucy5hcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXHRvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0ID0gb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCB8fCBpc01lcmdlYWJsZU9iamVjdDtcblxuXHR2YXIgc291cmNlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcblx0dmFyIHRhcmdldElzQXJyYXkgPSBBcnJheS5pc0FycmF5KHRhcmdldCk7XG5cdHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuXHRpZiAoIXNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2gpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5hcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zKSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheScpXG5cdH1cblxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnMpXG5cdH0sIHt9KVxufTtcblxudmFyIGRlZXBtZXJnZV8xID0gZGVlcG1lcmdlO1xuXG5leHBvcnQgZGVmYXVsdCBkZWVwbWVyZ2VfMTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RlZXBtZXJnZS9kaXN0L2VzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEyN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2ViM1wiXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcblxyXG5pbXBvcnQgYWNjb3VudHNSZWR1Y2VyIGZyb20gJy4vYWNjb3VudHMvYWNjb3VudHNSZWR1Y2VyJ1xyXG5pbXBvcnQgYWNjb3VudEJhbGFuY2VzUmVkdWNlciBmcm9tICcuL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyJ1xyXG5pbXBvcnQgY29udHJhY3RzUmVkdWNlciBmcm9tICcuL2NvbnRyYWN0cy9jb250cmFjdHNSZWR1Y2VyJ1xyXG5pbXBvcnQgZHJpenpsZVN0YXR1c1JlZHVjZXIgZnJvbSAnLi9kcml6emxlU3RhdHVzL2RyaXp6bGVTdGF0dXNSZWR1Y2VyJ1xyXG5pbXBvcnQgdHJhbnNhY3Rpb25zUmVkdWNlciBmcm9tICcuL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNSZWR1Y2VyJ1xyXG5pbXBvcnQgdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIgZnJvbSAnLi90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25TdGFja1JlZHVjZXInXHJcbmltcG9ydCB3ZWIzUmVkdWNlciBmcm9tICcuL3dlYjMvd2ViM1JlZHVjZXInXHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBhY2NvdW50czogYWNjb3VudHNSZWR1Y2VyLFxyXG4gIGFjY291bnRCYWxhbmNlczogYWNjb3VudEJhbGFuY2VzUmVkdWNlcixcclxuICBjb250cmFjdHM6IGNvbnRyYWN0c1JlZHVjZXIsXHJcbiAgZHJpenpsZVN0YXR1czogZHJpenpsZVN0YXR1c1JlZHVjZXIsXHJcbiAgdHJhbnNhY3Rpb25zOiB0cmFuc2FjdGlvbnNSZWR1Y2VyLFxyXG4gIHRyYW5zYWN0aW9uU3RhY2s6IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyLFxyXG4gIHdlYjM6IHdlYjNSZWR1Y2VyXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2VyLmpzIiwiZnVuY3Rpb24gZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUob3B0aW9ucykge1xyXG4gIC8vIFByZWxvYWRlZCBzdGF0ZVxyXG4gIHZhciBjb250cmFjdHNJbml0aWFsU3RhdGUgPSB7fVxyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMuY29udHJhY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyBJbml0aWFsIGNvbnRyYWN0IGRldGFpbHNcclxuICAgIHZhciBjb250cmFjdE5hbWUgPSBvcHRpb25zLmNvbnRyYWN0c1tpXS5jb250cmFjdE5hbWVcclxuXHJcbiAgICBjb250cmFjdHNJbml0aWFsU3RhdGVbY29udHJhY3ROYW1lXSA9IHtcclxuICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gICAgICBzeW5jZWQ6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uc3RhbnQgZ2V0dGVyc1xyXG4gICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IG9wdGlvbnMuY29udHJhY3RzW2ldLmFiaS5sZW5ndGg7IGkyKyspIHtcclxuICAgICAgdmFyIGl0ZW0gPSBvcHRpb25zLmNvbnRyYWN0c1tpXS5hYmlbaTJdO1xyXG5cclxuICAgICAgaWYgKGl0ZW0udHlwZSA9PSBcImZ1bmN0aW9uXCIgJiYgaXRlbS5jb25zdGFudCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnRyYWN0c0luaXRpYWxTdGF0ZVtjb250cmFjdE5hbWVdW2l0ZW0ubmFtZV0gPSB7fVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udHJhY3RzSW5pdGlhbFN0YXRlXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUuanMiXSwic291cmNlUm9vdCI6IiJ9