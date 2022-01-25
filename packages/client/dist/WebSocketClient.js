(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WebSocketClient"] = factory();
	else
		root["WebSocketClient"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/WebSocketClient.js":
/*!****************************************!*\
  !*** ./src/classes/WebSocketClient.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketClient": () => (/* binding */ WebSocketClient)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseBase */ "../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldLooseKey */ "../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! eventemitter3 */ "../../node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! websocket */ "../../node_modules/websocket/lib/browser.js");
/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(websocket__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils */ "./src/utils.js");











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var _options = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("options");

var _reconnect = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("reconnect");

var _hasForceClosed = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("hasForceClosed");

var _lastMessageID = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("lastMessageID");

var _callbacks = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("callbacks");

var _webSocket = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("webSocket");

var _token = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("token");

var _url = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("url");

var _createConnection = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("createConnection");

var _attemptReconnection = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("attemptReconnection");

var _onSocketMessage = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("onSocketMessage");

var _onSocketClose = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("onSocketClose");

var _onSocketError = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("onSocketError");

var _onSocketOpen = /*#__PURE__*/(0,_babel_runtime_helpers_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_9__["default"])("onSocketOpen");

var WebSocketClient = /*#__PURE__*/function (_EventEmitter) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WebSocketClient, _EventEmitter);

  var _super = _createSuper(WebSocketClient);

  function WebSocketClient(url, token, options) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WebSocketClient);

    _this = _super.call(this);
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _onSocketOpen, {
      value: _onSocketOpen2
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _onSocketError, {
      value: _onSocketError2
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _onSocketClose, {
      value: _onSocketClose2
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _onSocketMessage, {
      value: _onSocketMessage2
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _attemptReconnection, {
      value: _attemptReconnection2
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _createConnection, {
      value: _createConnection2
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _options, {
      writable: true,
      value: {
        __deprecatedEventStructure: false,
        maxReconnectInterval: 30000,
        maxReconnectAttempts: 0,
        reconnectInterval: 1000,
        timeoutInterval: 2000,
        reconnectDecay: 1.5,
        reconnect: false
      }
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _reconnect, {
      writable: true,
      value: {
        attemptNumber: 0,
        timeout: false
      }
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _hasForceClosed, {
      writable: true,
      value: false
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _lastMessageID, {
      writable: true,
      value: 0
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _callbacks, {
      writable: true,
      value: new Map()
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _webSocket, {
      writable: true,
      value: false
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _token, {
      writable: true,
      value: void 0
    });
    Object.defineProperty((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _url, {
      writable: true,
      value: void 0
    });
    if (options) (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _options)[_options] = _objectSpread(_objectSpread({}, (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _options)[_options]), options);
    (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _token)[_token] = token;
    (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _url)[_url] = url;

    (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), _createConnection)[_createConnection]();

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(WebSocketClient, [{
    key: "readyState",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].readyState;
    }
  }, {
    key: "bufferedAmount",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].bufferedAmount;
    }
  }, {
    key: "url",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].url;
    }
  }, {
    key: "close",
    value: function close() {
      var _classPrivateFieldLoo;

      (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _hasForceClosed)[_hasForceClosed] = true;
      console.debug('Client manually closed WebSocket connection');
      return (_classPrivateFieldLoo = (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket]).close.apply(_classPrivateFieldLoo, arguments);
    }
  }, {
    key: "send",
    value: function send(event, data, callback) {
      if (typeof data === 'function') {
        callback = data; // eslint-disable-line no-param-reassign

        data = undefined; // eslint-disable-line no-param-reassign
      }

      if (callback) {
        var messageID = ++(0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _lastMessageID)[_lastMessageID];

        (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _callbacks)[_callbacks].set(messageID, callback);

        return (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].send(messageID + JSON.stringify([event, data]));
      }

      (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].send(JSON.stringify([event, data]));
    }
  }]);

  return WebSocketClient;
}((eventemitter3__WEBPACK_IMPORTED_MODULE_10___default()));

function _createConnection2() {
  var _this2 = this;

  console.debug("Attempting new WebSocket connection to ".concat((0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _url)[_url]));

  if ((0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket]) {
    (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].onmessage = undefined;
    (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].onclose = undefined;
    (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].onerror = undefined;
    (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].onopen = undefined;
  }

  (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket] = new websocket__WEBPACK_IMPORTED_MODULE_11__.w3cwebsocket((0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _url)[_url], (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _token)[_token]);

  (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].onmessage = function () {
    var _classPrivateFieldLoo2;

    return (_classPrivateFieldLoo2 = (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(_this2, _onSocketMessage))[_onSocketMessage].apply(_classPrivateFieldLoo2, arguments);
  };

  (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].onclose = function () {
    var _classPrivateFieldLoo3;

    return (_classPrivateFieldLoo3 = (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(_this2, _onSocketClose))[_onSocketClose].apply(_classPrivateFieldLoo3, arguments);
  };

  (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].onerror = function () {
    var _classPrivateFieldLoo4;

    return (_classPrivateFieldLoo4 = (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(_this2, _onSocketError))[_onSocketError].apply(_classPrivateFieldLoo4, arguments);
  };

  (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _webSocket)[_webSocket].onopen = function () {
    var _classPrivateFieldLoo5;

    return (_classPrivateFieldLoo5 = (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(_this2, _onSocketOpen))[_onSocketOpen].apply(_classPrivateFieldLoo5, arguments);
  };
}

function _attemptReconnection2() {
  var _this3 = this;

  var attemptNumber = (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _reconnect)[_reconnect].attemptNumber;

  var _classPrivateFieldLoo6 = (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _options)[_options],
      maxReconnectInterval = _classPrivateFieldLoo6.maxReconnectInterval,
      maxReconnectAttempts = _classPrivateFieldLoo6.maxReconnectAttempts,
      reconnectInterval = _classPrivateFieldLoo6.reconnectInterval,
      timeoutInterval = _classPrivateFieldLoo6.timeoutInterval,
      reconnectDecay = _classPrivateFieldLoo6.reconnectDecay;

  attemptNumber++;

  if (attemptNumber === maxReconnectAttempts) {
    console.debug("Maximum connection attempts (".concat(maxReconnectAttempts, ") reached"));
    return (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _reconnect)[_reconnect] = {
      attemptNumber: 0,
      timeout: false
    };
  }

  var delay = Math.min(reconnectInterval * Math.pow(reconnectDecay, attemptNumber), maxReconnectInterval);
  console.debug("Attempting reconnection #".concat(attemptNumber, " to WebSocket, delaying ").concat(delay, "ms"));
  setTimeout(function () {
    (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(_this3, _createConnection)[_createConnection]();

    (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(_this3, _reconnect)[_reconnect].timeout = setTimeout(function () {
      console.debug('Failed to establish connection in time, closing connection');

      (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(_this3, _webSocket)[_webSocket].close();
    }, timeoutInterval);
  }, delay);
  (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _reconnect)[_reconnect].attemptNumber = attemptNumber;
}

function _onSocketMessage2(messageEvent) {
  var encoded = messageEvent.data;
  if (!encoded.length) return;

  var _parseSocketMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.parseSocketMessage)(encoded),
      _parseSocketMessage2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_parseSocketMessage, 3),
      messageID = _parseSocketMessage2[0],
      errorOrEvent = _parseSocketMessage2[1],
      data = _parseSocketMessage2[2];

  if (!messageID && ['open', 'close', 'error'].includes(errorOrEvent)) return; // If there's a messageID, it means the message
  // is a callback. errorOrEvent is an error.

  if (messageID) {
    if (!(0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _callbacks)[_callbacks].has(messageID)) return;

    var callback = (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _callbacks)[_callbacks].get(messageID);

    if ((0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _options)[_options].__deprecatedEventStructure) // eslint-disable-line no-underscore-dangle
      callback({
        error: errorOrEvent,
        data: data
      });else callback(errorOrEvent, data);
    return (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _callbacks)[_callbacks]["delete"](messageID);
  } // If there's no messageID, it means the message
  // is an event. errorOrEvent is an event.


  if (this.onmessage) this.onmessage(errorOrEvent, data);else this.emit(errorOrEvent, data);
}

function _onSocketClose2(closeEvent) {
  clearTimeout((0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _reconnect)[_reconnect].timeout);
  console.debug('WebSocket connection lost');

  (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _callbacks)[_callbacks].forEach(function (callback) {
    callback('Socket closed');
  });

  (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _callbacks)[_callbacks].clear();

  (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _lastMessageID)[_lastMessageID] = 0;

  if (!(0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _hasForceClosed)[_hasForceClosed] && (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _options)[_options].reconnect) {
    if ((0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _reconnect)[_reconnect].attemptNumber) return (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _attemptReconnection)[_attemptReconnection]();

    (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _attemptReconnection)[_attemptReconnection]();
  }

  (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _hasForceClosed)[_hasForceClosed] = false;
  if (this.onclose) this.onclose(closeEvent);else this.emit('close', closeEvent);
}

function _onSocketError2(errorEvent) {
  if (this.onerror) this.onerror(errorEvent);else this.emit('error', errorEvent);
}

function _onSocketOpen2(openEvent) {
  clearTimeout((0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _reconnect)[_reconnect].timeout);
  console.debug('WebSocket connection established');
  (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _hasForceClosed)[_hasForceClosed] = false;
  (0,_babel_runtime_helpers_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_8__["default"])(this, _reconnect)[_reconnect] = {
    attemptNumber: 0,
    timeout: false
  };
  if (this.onopen) this.onopen(openEvent);else this.emit('open', openEvent);
}



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseSocketMessage": () => (/* binding */ parseSocketMessage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");

var parseSocketMessage = function parseSocketMessage(encoded) {
  var indexOfJSON = encoded.indexOf('[');
  if (indexOfJSON < 0) throw new Error('Invalid message format');
  var hasCallback = indexOfJSON > 0;
  var messageID = +encoded.slice(0, indexOfJSON);
  var errorOrEvent;
  var data;

  try {
    var _JSON$parse = JSON.parse(encoded.slice(indexOfJSON)),
        _JSON$parse2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_JSON$parse, 2),
        _errorOrEvent = _JSON$parse2[0],
        _data = _JSON$parse2[1];

    errorOrEvent = _errorOrEvent;
    data = _data;
  } catch (ex) {
    throw new Error('Invalid message structure');
  }

  if (hasCallback && (Number.isNaN(messageID) || !Number.isInteger(messageID) || messageID <= 0)) throw new Error('Invalid message ID');
  if (!hasCallback && (typeof errorOrEvent !== 'string' || errorOrEvent.length < 1 || errorOrEvent.length > 64)) throw new Error('Invalid event');
  return [messageID, errorOrEvent, data];
};

/***/ }),

/***/ "../../node_modules/es5-ext/global.js":
/*!********************************************!*\
  !*** ../../node_modules/es5-ext/global.js ***!
  \********************************************/
/***/ ((module) => {

var naiveFallback = function () {
	if (typeof self === "object" && self) return self;
	if (typeof window === "object" && window) return window;
	throw new Error("Unable to resolve global `this`");
};

module.exports = (function () {
	if (this) return this;

	// Unexpected strict mode (may happen if e.g. bundled into ESM module)

	// Fallback to standard globalThis if available
	if (typeof globalThis === "object" && globalThis) return globalThis;

	// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
	// In all ES5+ engines global object inherits from Object.prototype
	// (if you approached one that doesn't please report)
	try {
		Object.defineProperty(Object.prototype, "__global__", {
			get: function () { return this; },
			configurable: true
		});
	} catch (error) {
		// Unfortunate case of updates to Object.prototype being restricted
		// via preventExtensions, seal or freeze
		return naiveFallback();
	}
	try {
		// Safari case (window.__global__ works, but __global__ does not)
		if (!__global__) return naiveFallback();
		return __global__;
	} finally {
		delete Object.prototype.__global__;
	}
})();


/***/ }),

/***/ "../../node_modules/eventemitter3/index.js":
/*!*************************************************!*\
  !*** ../../node_modules/eventemitter3/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "../../node_modules/websocket/lib/browser.js":
/*!***************************************************!*\
  !*** ../../node_modules/websocket/lib/browser.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _globalThis;
if (typeof globalThis === 'object') {
	_globalThis = globalThis;
} else {
	try {
		_globalThis = __webpack_require__(/*! es5-ext/global */ "../../node_modules/es5-ext/global.js");
	} catch (error) {
	} finally {
		if (!_globalThis && typeof window !== 'undefined') { _globalThis = window; }
		if (!_globalThis) { throw new Error('Could not determine global this'); }
	}
}

var NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket;
var websocket_version = __webpack_require__(/*! ./version */ "../../node_modules/websocket/lib/version.js");


/**
 * Expose a W3C WebSocket class with just one or two arguments.
 */
function W3CWebSocket(uri, protocols) {
	var native_instance;

	if (protocols) {
		native_instance = new NativeWebSocket(uri, protocols);
	}
	else {
		native_instance = new NativeWebSocket(uri);
	}

	/**
	 * 'native_instance' is an instance of nativeWebSocket (the browser's WebSocket
	 * class). Since it is an Object it will be returned as it is when creating an
	 * instance of W3CWebSocket via 'new W3CWebSocket()'.
	 *
	 * ECMAScript 5: http://bclary.com/2004/11/07/#a-13.2.2
	 */
	return native_instance;
}
if (NativeWebSocket) {
	['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function(prop) {
		Object.defineProperty(W3CWebSocket, prop, {
			get: function() { return NativeWebSocket[prop]; }
		});
	});
}

/**
 * Module exports.
 */
module.exports = {
    'w3cwebsocket' : NativeWebSocket ? W3CWebSocket : null,
    'version'      : websocket_version
};


/***/ }),

/***/ "../../node_modules/websocket/lib/version.js":
/*!***************************************************!*\
  !*** ../../node_modules/websocket/lib/version.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ../package.json */ "../../node_modules/websocket/package.json").version;


/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldBase)
/* harmony export */ });
function _classPrivateFieldBase(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }

  return receiver;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldKey)
/* harmony export */ });
var id = 0;
function _classPrivateFieldKey(name) {
  return "__private_" + id++ + "_" + name;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "../../node_modules/websocket/package.json":
/*!*************************************************!*\
  !*** ../../node_modules/websocket/package.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.34","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=4.0.0"},"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"test":"tape test/unit/*.js","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketClient": () => (/* reexport safe */ _classes_WebSocketClient__WEBPACK_IMPORTED_MODULE_0__.WebSocketClient)
/* harmony export */ });
/* harmony import */ var _classes_WebSocketClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/WebSocketClient */ "./src/classes/WebSocketClient.js");

if (typeof window !== 'undefined') window.WebSocketClient = _classes_WebSocketClient__WEBPACK_IMPORTED_MODULE_0__.WebSocketClient;

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});