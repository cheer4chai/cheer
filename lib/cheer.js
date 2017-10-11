(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("cheer", [], factory);
	else if(typeof exports === 'object')
		exports["cheer"] = factory();
	else
		root["cheer"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var param = function () {
    function param() {
        _classCallCheck(this, param);
    }

    /**
    * 用于URL等参数解析
    * @method param.param
    * @param sValPairs {String} url表达式
    * @param sElemSep {String} 参数分隔符
    * @param sPairSep {String} 复制分隔符
    * @example 
    var p = param.param("a=1&b=2","&", "=");
    输出p实际上就是{a:1,b:2}，所以p['a']就是1，p['b']就是2
    */


    _createClass(param, [{
        key: "_param",
        value: function _param(sValPairs, sElemSep, sPairSep) {
            var result = {};
            if (sValPairs) {
                var aElem = sValPairs.toString().split(sElemSep);
                for (var i = 0; i < aElem.length; i++) {
                    var aPair = aElem[i].split(sPairSep);
                    var temp = aPair.length > 1 && (result[aPair[0]] = unescape(aPair[1]));
                }
            }
            return result;
        }

        /**
         * 获取一个表达式串中的参数
         * @method param.getParam
         * @param sValPairs {String} 表达式 例如"a=1&b=2"
         * @param sName {String} 要获取的参数名 "a"
         * @param sElemSep {String} 参数分割符 "&"
         * @param sPairSep {String} 赋值的分隔符 "="
         * @return {String} 参数值
         * @example 例如 var a = param.getParam("a=1&b=2", "a", "&", "=");
         */

    }, {
        key: "getParam",
        value: function getParam(sValPairs, sName, sElemSep, sPairSep) {
            var xParam = this._param(sValPairs, sElemSep, sPairSep);
            return xParam[sName] ? xParam[sName] : "";
        }

        /**
         * 设置一段参数
         * @method pram.setParam 
         * @param sValPairs {String} 原有的表达式 例如"a=1"
         * @param sName {String} 新加入的参数名 
         * @param sValue {String} 新参数的值
         * @return {String} 新的表达式"a=1&b=2"
         * @example 例如 var sParam = param.setParam("a=1", "b", "2");
         */

    }, {
        key: "setParam",
        value: function setParam(sValPairs, sName, sValue) {
            sValPairs = sValPairs.toString();
            sName = sName.toString();
            sValue = sValue.toString();
            var r = new RegExp("(^|\\W)" + sName + "=[^&]*", "g");
            return sValPairs.match(r) ? sValPairs.replace(r, "$1" + sName + "=" + sValue) : sValPairs + (sValPairs ? "&" : "") + sName + "=" + sValue;
        }

        /**
         * 返回当前url的参数
         * @method pram.locationSearch 
         * @example 例如 var p = param.locationSearch();
         */

    }, {
        key: "locationSearch",
        value: function locationSearch() {
            return this._param(location.search.substr(1), '&', '=');
        }
    }]);

    return param;
}();

exports.default = param;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = exports.validate = exports.dialog = exports.dom = exports.cookie = exports.param = undefined;

var _param = __webpack_require__(0);

var _param2 = _interopRequireDefault(_param);

var _cookie = __webpack_require__(2);

var _cookie2 = _interopRequireDefault(_cookie);

var _dom = __webpack_require__(3);

var _dom2 = _interopRequireDefault(_dom);

var _dialog = __webpack_require__(4);

var _dialog2 = _interopRequireDefault(_dialog);

var _validate = __webpack_require__(10);

var _validate2 = _interopRequireDefault(_validate);

var _string = __webpack_require__(11);

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.param = _param2.default;
exports.cookie = _cookie2.default;
exports.dom = _dom2.default;
exports.dialog = _dialog2.default;
exports.validate = _validate2.default;
exports.string = _string2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _param = __webpack_require__(0);

var _param2 = _interopRequireDefault(_param);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cookie = function () {
    function cookie() {
        _classCallCheck(this, cookie);
    }

    /* 
    @param sDomain 域名
    @param oWin 窗口对象
    @return {window}
    */


    _createClass(cookie, [{
        key: "findWindow",
        value: function findWindow(sDomain, oWin) {
            if (!oWin) {
                if (window.location.hostname.indexOf(sDomain) >= 0) {
                    return window;
                }
                return arguments.callee.apply(this, [sDomain, top]);
            }
            try {
                if (oWin.location.hostname.indexOf(sDomain) >= 0) {
                    return oWin;
                }
            } catch (e) {}
            for (var i = 0; i < oWin.frames.length; ++i) {
                var oFind = arguments.callee.apply(this, [sDomain, oWin.frames[i]]);
                if (oFind) {
                    return oFind;
                }
            }
            return null;
        }

        /* 
        @param sName cookie名
        @param sValue cookie值
        @param nExpireSec cookie时限
        @param sDomain 域名
        @param sPath cookie的路径
        @return {window}
        */

    }, {
        key: "set",
        value: function set(sName, sValue, nExpireSec, sDomain, sPath) {
            sPath = sPath || "/";
            var sCookie = sName + "=" + escape(sValue) + ";";

            if (document.cookie.length + sCookie.length >= 4096) {
                return false;
            }

            if (nExpireSec) {
                var nowDate = new Date();
                nowDate.setTime(nowDate.getTime() + parseInt(nExpireSec) * 1000);
                sCookie += "expires=" + nowDate.toUTCString() + ";";
            }
            if (sDomain) {
                sCookie += "domain=" + sDomain + ";";
            }
            if (sPath) {
                sCookie += "path=" + sPath + ";";
            }
            var oWin = this.findWindow(sDomain);
            if (!oWin) {
                return false;
            }
            try {
                oWin.document.cookie = sCookie;
            } catch (e) {
                return false;
            }
            return true;
        }

        /* 
        @param sName cookie名
        @param sDomain cookie的域名
        @return {window}
        */

    }, {
        key: "get",
        value: function get(sName, sDomain) {
            sDomain = sDomain;
            var oWin = sDomain ? this.findWindow(sDomain) || window : window;
            return _param2.default.getParam(oWin.document.cookie, sName, "; ", "=");
        }
    }]);

    return cookie;
}();

exports.default = cookie;
module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = function () {
    function dom() {
        _classCallCheck(this, dom);
    }

    _createClass(dom, [{
        key: "find",
        value: function find(dom, elem) {
            console.log(dom.children);
        }
    }]);

    return dom;
}();

exports.default = dom;
module.exports = exports["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dialog = __webpack_require__(5);

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dialog = function () {
    function dialog(option) {
        _classCallCheck(this, dialog);

        this.title = option.title || "温馨提示";
        this.button = option.button || [{
            value: '确定',
            type: 'confirm',
            callback: function callback() {
                return false;
            }
        }];
        this.content = option.content;
        this.html = '';
        this.init();
    }

    _createClass(dialog, [{
        key: 'initTemp',
        value: function initTemp() {

            var _this = this;

            var buttonTemp = '';

            if (_this.button) {
                for (var i = 0; i < _this.button.length; i++) {
                    if (_this.button[i].type == 'cancle') {
                        buttonTemp += '<input class="button cancleButton m_l_20" type="button" value=' + _this.button[i].value + '>';
                    } else {
                        buttonTemp += '<input class="button confirmButton m_l_20" type="button" value=' + _this.button[i].value + '>';
                    }
                }
            }
            var buttonDom = document.createElement('div');
            buttonDom.className = 'buttons';
            buttonDom.innerHTML = buttonTemp;
            var _tmp = document.createElement('div');
            _tmp.className = 'dialogWrapper';
            _tmp.innerHTML = '<div class="dialog"><div class="title"><span>' + this.title + '</span><i class="close">×</i></div><div class="content">' + this.content + '</div></div>';
            _tmp.querySelector('.dialog').appendChild(buttonDom);
            _this.html = _tmp;
            document.body.appendChild(_tmp);
        }
    }, {
        key: 'initEvent',
        value: function initEvent() {
            var _this = this;
            var close = _this.html.querySelector('.dialog .close');
            var button = _this.html.querySelectorAll('.dialog .button');
            close.addEventListener("click", function () {
                _this.destrory();
            });

            var _loop = function _loop(i) {
                button[i].addEventListener("click", function () {
                    var flag = _this.button[i].callback && _this.button[i].callback();
                    if (!flag) {
                        _this.destrory();
                    }
                });
            };

            for (var i = 0; i < button.length; i++) {
                _loop(i);
            }
        }
    }, {
        key: 'init',
        value: function init() {
            this.initTemp();
            this.initEvent();
        }
    }, {
        key: 'destrory',
        value: function destrory() {
            this.html.parentNode.removeChild(this.html);
        }
    }]);

    return dialog;
}();

exports.default = dialog;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/_css-loader@0.28.4@css-loader/index.js!./dialog.css", function() {
			var newContent = require("!!../node_modules/_css-loader@0.28.4@css-loader/index.js!./dialog.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, ".dialogWrapper {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);\r\n    z-index: 99999;\r\n}\r\n\r\n.dialogWrapper .dialog {\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: rgb( 232, 110, 52);\r\n    border-radius: 6px;\r\n    background-color: rgb( 255, 255, 255);\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin-left: -280px;\r\n    margin-top: -100px;\r\n    width: 560px;\r\n    min-height: 180px;\r\n}\r\n\r\n.dialog .title {\r\n    height: 48px;\r\n    line-height: 48px;\r\n    background-color: #df5350;\r\n    color: white;\r\n    padding: 0 20px;\r\n}\r\n\r\n.dialogWrapper .close {\r\n    float: right;\r\n    width: 14px;\r\n    height: 14px;\r\n    line-height: 14px;\r\n    margin: 17px 0;\r\n    cursor: pointer;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n}\r\n\r\n.dialogWrapper .content {\r\n    padding: 25px 30px;\r\n    font-size: 16px;\r\n    line-height: 30px;\r\n    background-color: white;\r\n}\r\n\r\n.dialogWrapper .buttons {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.buttons .cancleButton {\r\n    width: 121px;\r\n    height: 33px;\r\n    border-radius: 4px;\r\n    background-color: rgb( 153, 153, 153);\r\n    border: none;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.dialogWrapper .buttons .confirmButton {\r\n    width: 121px;\r\n    height: 33px;\r\n    border-radius: 4px;\r\n    background-color: #df5350;\r\n    border: none;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.m_l_20 {\r\n    margin-left: 20px;\r\n}", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var validate = function () {
    function validate() {
        _classCallCheck(this, validate);

        this.result = {
            code: 0,
            msg: 'success'
        };
        this.map = {};
    }

    _createClass(validate, [{
        key: 'setResult',
        value: function setResult(code) {
            this.result.code = code;
            this.result.msg = this.map[code];
        }
    }, {
        key: 'certificateNumber',
        value: function certificateNumber(number) {
            var result = {
                code: 0,
                msg: '',
                date: null
            };

            var vcity = {
                11: "北京",
                12: "天津",
                13: "河北",
                14: "山西",
                15: "内蒙古",
                21: "辽宁",
                22: "吉林",
                23: "黑龙江",
                31: "上海",
                32: "江苏",
                33: "浙江",
                34: "安徽",
                35: "福建",
                36: "江西",
                37: "山东",
                41: "河南",
                42: "湖北",
                43: "湖南",
                44: "广东",
                45: "广西",
                46: "海南",
                50: "重庆",
                51: "四川",
                52: "贵州",
                53: "云南",
                54: "西藏",
                61: "陕西",
                62: "甘肃",
                63: "青海",
                64: "宁夏",
                65: "新疆",
                71: "台湾",
                81: "香港",
                82: "澳门",
                91: "国外"
            };

            this.map = {
                '-1': '证件号不能为空',
                '-2': '身份证号码只能是15位或者18位，15位只能是数字，18位只能是数字或者大写字母X',
                '-3': '前两位号码省份校验出错，请输入正确的身份证号码',
                '-4': '身份证中的出生日期不正确，请重新输入',
                '-5': '身份证校验位不正确，请重新输入'
            };

            if (number == '') {
                this.setResult(-1);
                return this.result;
            }

            if (!/(^\d{15}$)|(^\d{17}(\d|X)$)/.test(number)) {
                this.setResult(-2);
                return this.result;
            }

            if (!vcity[number.toString().substring(0, 2)]) {
                this.setResult(-3);
                return this.result;
            }

            return this.result;
        }
    }, {
        key: 'birthDay',
        value: function birthDay(str) {

            this.map = {
                '-1': '出生日期不能为空',
                '-2': '请输入有效的出生日期',
                '-3': '出生日期超出范围'
            };

            if (str == '') {
                this.setResult(-1);
                return this.result;
            }

            if (/^\d{4}(-|\/)\d{2}(-|\/)\d{2}$/gi.test(str) == false) {
                this.setResult(-2);
                return this.result;
            }

            var dateArr = str.match(/^(\d{4})(-|\/)(\d{2})(-|\/)(\d{2})$/);
            var year = parseInt(dateArr[1], 10);
            var month = parseInt(dateArr[3], 10);
            var day = parseInt(dateArr[5], 10);

            if (year < 1900 || year > 3000 || month < 1 || month > 12) {
                setResult(-3);
                return this.result;
            }

            var getDate = function getDate(month) {
                if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                    return 31;
                } else if (month == 4 || month == 6 || month == 9 || month == 11) {
                    return 30;
                } else if (month == 2) {
                    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? 29 : 28;
                }
                return 0;
            };

            if (day < 1 || day > getDate(month)) {
                setResult(-3);
                return result;
            }

            return this.result;
        }
    }]);

    return validate;
}();

exports.default = validate;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var string = function () {
    function string() {
        _classCallCheck(this, string);
    }

    _createClass(string, [{
        key: 'format',
        value: function format(str, data) {
            var _format = /<%=([\d\w\.]+)%>/g;
            var args = Array.prototype.slice.call(arguments),
                v;
            if (args.length === 1 && _typeof(args[0]) === 'object') {
                args = args[0];
            }
            _format.lastIndex = 0;

            function route(obj, path) {
                obj = obj || {};
                var r = /([\d\w_]+)/g,
                    m;
                r.lastIndex = 0;
                while ((m = r.exec(path)) != null) {
                    obj = obj[m[0]];
                    if (obj === undefined || obj === null) {
                        break;
                    }
                }
                return obj;
            }

            return str.replace(_format, function (m, n) {
                v = route(data, n);
                return v === undefined ? m : v;
            });
        }
    }]);

    return string;
}();

exports.default = string;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=cheer.js.map