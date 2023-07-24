var react = require('react');
var fbemitter = require('fbemitter');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fbemitter__default = /*#__PURE__*/_interopDefaultLegacy(fbemitter);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

var EventEmitter = fbemitter__default["default"].EventEmitter;
var FormEventEmitter = /*#__PURE__*/function (_EventEmitter) {
  _inheritsLoose(FormEventEmitter, _EventEmitter);
  function FormEventEmitter(options) {
    var _this;
    _this = _EventEmitter.call(this) || this;
    var _Object$assign = Object.assign({}, options),
      debug = _Object$assign.debug,
      _Object$assign$name = _Object$assign.name,
      name = _Object$assign$name === void 0 ? 'event' : _Object$assign$name;
    _this.debug = debug;
    _this.name = name;
    return _this;
  }
  var _proto = FormEventEmitter.prototype;
  _proto.emit = function emit() {
    var _EventEmitter$prototy;
    var args = [].slice.call(arguments);
    if (this.debug) {
      var _console;
      (_console = console).log.apply(_console, ["[" + this.name + "][debug]:"].concat(args));
    }
    (_EventEmitter$prototy = _EventEmitter.prototype.emit).call.apply(_EventEmitter$prototy, [this].concat(args));
  };
  return FormEventEmitter;
}(EventEmitter);
var useEvent = function useEvent(options) {
  var debugRef = react.useRef(options);
  return react.useMemo(function () {
    var emitter = new FormEventEmitter(debugRef.current);
    return {
      addListener: function addListener() {
        return emitter.addListener.apply(emitter, [].slice.call(arguments));
      },
      emit: function emit() {
        return emitter.emit.apply(emitter, [].slice.call(arguments));
      },
      removeAllListeners: function removeAllListeners() {
        return emitter.removeAllListeners.apply(emitter, [].slice.call(arguments));
      },
      listeners: function listeners() {
        return emitter.listeners.apply(emitter, [].slice.call(arguments));
      },
      once: function once() {
        return emitter.once.apply(emitter, [].slice.call(arguments));
      }
    };
  }, []);
};

module.exports = useEvent;
//# sourceMappingURL=index.cjs.map
