(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Tweener = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function backInOut(t) {
  var s = 1.70158 * 1.525
  if ((t *= 2) < 1)
    return 0.5 * (t * t * ((s + 1) * t - s))
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2)
}

module.exports = backInOut
},{}],2:[function(require,module,exports){
function backIn(t) {
  var s = 1.70158
  return t * t * ((s + 1) * t - s)
}

module.exports = backIn
},{}],3:[function(require,module,exports){
function backOut(t) {
  var s = 1.70158
  return --t * t * ((s + 1) * t + s) + 1
}

module.exports = backOut
},{}],4:[function(require,module,exports){
var bounceOut = require('./bounce-out')

function bounceInOut(t) {
  return t < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5
}

module.exports = bounceInOut
},{"./bounce-out":6}],5:[function(require,module,exports){
var bounceOut = require('./bounce-out')

function bounceIn(t) {
  return 1.0 - bounceOut(1.0 - t)
}

module.exports = bounceIn
},{"./bounce-out":6}],6:[function(require,module,exports){
function bounceOut(t) {
  var a = 4.0 / 11.0
  var b = 8.0 / 11.0
  var c = 9.0 / 10.0

  var ca = 4356.0 / 361.0
  var cb = 35442.0 / 1805.0
  var cc = 16061.0 / 1805.0

  var t2 = t * t

  return t < a
    ? 7.5625 * t2
    : t < b
      ? 9.075 * t2 - 9.9 * t + 3.4
      : t < c
        ? ca * t2 - cb * t + cc
        : 10.8 * t * t - 20.52 * t + 10.72
}

module.exports = bounceOut
},{}],7:[function(require,module,exports){
function circInOut(t) {
  if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1)
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
}

module.exports = circInOut
},{}],8:[function(require,module,exports){
function circIn(t) {
  return 1.0 - Math.sqrt(1.0 - t * t)
}

module.exports = circIn
},{}],9:[function(require,module,exports){
function circOut(t) {
  return Math.sqrt(1 - ( --t * t ))
}

module.exports = circOut
},{}],10:[function(require,module,exports){
function cubicInOut(t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
}

module.exports = cubicInOut
},{}],11:[function(require,module,exports){
function cubicIn(t) {
  return t * t * t
}

module.exports = cubicIn
},{}],12:[function(require,module,exports){
function cubicOut(t) {
  var f = t - 1.0
  return f * f * f + 1.0
}

module.exports = cubicOut
},{}],13:[function(require,module,exports){
function elasticInOut(t) {
  return t < 0.5
    ? 0.5 * Math.sin(+13.0 * Math.PI/2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
    : 0.5 * Math.sin(-13.0 * Math.PI/2 * ((2.0 * t - 1.0) + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0
}

module.exports = elasticInOut
},{}],14:[function(require,module,exports){
function elasticIn(t) {
  return Math.sin(13.0 * t * Math.PI/2) * Math.pow(2.0, 10.0 * (t - 1.0))
}

module.exports = elasticIn
},{}],15:[function(require,module,exports){
function elasticOut(t) {
  return Math.sin(-13.0 * (t + 1.0) * Math.PI/2) * Math.pow(2.0, -10.0 * t) + 1.0
}

module.exports = elasticOut
},{}],16:[function(require,module,exports){
function expoInOut(t) {
  return (t === 0.0 || t === 1.0)
    ? t
    : t < 0.5
      ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0
}

module.exports = expoInOut
},{}],17:[function(require,module,exports){
function expoIn(t) {
  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0))
}

module.exports = expoIn
},{}],18:[function(require,module,exports){
function expoOut(t) {
  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t)
}

module.exports = expoOut
},{}],19:[function(require,module,exports){
module.exports = {
	'backInOut': require('./back-in-out'),
	'backIn': require('./back-in'),
	'backOut': require('./back-out'),
	'bounceInOut': require('./bounce-in-out'),
	'bounceIn': require('./bounce-in'),
	'bounceOut': require('./bounce-out'),
	'circInOut': require('./circ-in-out'),
	'circIn': require('./circ-in'),
	'circOut': require('./circ-out'),
	'cubicInOut': require('./cubic-in-out'),
	'cubicIn': require('./cubic-in'),
	'cubicOut': require('./cubic-out'),
	'elasticInOut': require('./elastic-in-out'),
	'elasticIn': require('./elastic-in'),
	'elasticOut': require('./elastic-out'),
	'expoInOut': require('./expo-in-out'),
	'expoIn': require('./expo-in'),
	'expoOut': require('./expo-out'),
	'linear': require('./linear'),
	'quadInOut': require('./quad-in-out'),
	'quadIn': require('./quad-in'),
	'quadOut': require('./quad-out'),
	'quartInOut': require('./quart-in-out'),
	'quartIn': require('./quart-in'),
	'quartOut': require('./quart-out'),
	'quintInOut': require('./quint-in-out'),
	'quintIn': require('./quint-in'),
	'quintOut': require('./quint-out'),
	'sineInOut': require('./sine-in-out'),
	'sineIn': require('./sine-in'),
	'sineOut': require('./sine-out')
}
},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(require,module,exports){
function linear(t) {
  return t
}

module.exports = linear
},{}],21:[function(require,module,exports){
function quadInOut(t) {
    t /= 0.5
    if (t < 1) return 0.5*t*t
    t--
    return -0.5 * (t*(t-2) - 1)
}

module.exports = quadInOut
},{}],22:[function(require,module,exports){
function quadIn(t) {
  return t * t
}

module.exports = quadIn
},{}],23:[function(require,module,exports){
function quadOut(t) {
  return -t * (t - 2.0)
}

module.exports = quadOut
},{}],24:[function(require,module,exports){
function quarticInOut(t) {
  return t < 0.5
    ? +8.0 * Math.pow(t, 4.0)
    : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0
}

module.exports = quarticInOut
},{}],25:[function(require,module,exports){
function quarticIn(t) {
  return Math.pow(t, 4.0)
}

module.exports = quarticIn
},{}],26:[function(require,module,exports){
function quarticOut(t) {
  return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0
}

module.exports = quarticOut
},{}],27:[function(require,module,exports){
function qinticInOut(t) {
    if ( ( t *= 2 ) < 1 ) return 0.5 * t * t * t * t * t
    return 0.5 * ( ( t -= 2 ) * t * t * t * t + 2 )
}

module.exports = qinticInOut
},{}],28:[function(require,module,exports){
function qinticIn(t) {
  return t * t * t * t * t
}

module.exports = qinticIn
},{}],29:[function(require,module,exports){
function qinticOut(t) {
  return --t * t * t * t * t + 1
}

module.exports = qinticOut
},{}],30:[function(require,module,exports){
function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI*t) - 1)
}

module.exports = sineInOut
},{}],31:[function(require,module,exports){
function sineIn (t) {
  var v = Math.cos(t * Math.PI * 0.5)
  if (Math.abs(v) < 1e-14) return 1
  else return 1 - v
}

module.exports = sineIn

},{}],32:[function(require,module,exports){
function sineOut(t) {
  return Math.sin(t * Math.PI/2)
}

module.exports = sineOut
},{}],33:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tween = function () {
  function Tween() {
    var ref = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    _classCallCheck(this, Tween);

    this._ref = ref;
    this._lastState = ref;
    this._target = ref;
    this._queue = [];
    this._length = 0;
    this._current = 0;
  }

  _createClass(Tween, [{
    key: "_getParams",
    value: function _getParams() {
      var tgt = arguments.length <= 0 || arguments[0] === undefined ? this._target : arguments[0];
      var dur = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var ez = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      var params = {
        tgt: tgt,
        dur: dur,
        pos: 0,
        ez: ez,
        fr: null,
        to: null,
        cb: null
      };
      this._queue[this._length] = params;
      this._length += 1;
      return params;
    }
  }, {
    key: "_getProps",
    value: function _getProps(src, fields) {
      var o = {};
      for (var f in fields) {
        o[f] = src[f] !== undefined ? src[f] : this._target[f];
      }
      return o;
    }
  }, {
    key: "add",
    value: function add(target) {
      this._target = target;
      this._lastState = target;
      return this;
    }
  }, {
    key: "to",
    value: function to(props, duration, ease) {
      var p = this._getParams(this._target, duration, ease);
      p.fr = this._getProps(this._lastState, props);
      p.to = props;
      this._lastState = props;
      return this;
    }
  }, {
    key: "from",
    value: function from(props, duration, ease) {
      var p = this._getParams(this._target, duration, ease);
      p.fr = props;
      p.to = this._getProps(this._lastState, props);
      return this;
    }
  }, {
    key: "wait",
    value: function wait(duration) {
      var p = this._getParams();
      p.dur = duration;
      return this;
    }
  }, {
    key: "then",
    value: function then(fn) {
      var p = this._queue[this._length - 1];
      if (p) {
        p.cb = fn;
      } else {
        fn();
      }
      return this;
    }
  }, {
    key: "update",
    value: function update(delta) {
      var p = this._queue[this._current];

      if (!p) {
        return true;
      }

      var r = 1;
      var complete = false;

      p.pos += delta;

      if (p.dur > 0 && p.pos < p.dur) {
        r = p.ez ? p.ez(p.pos / p.dur) : p.pos / p.dur;
      }

      if (p.to && p.tgt) {
        for (var f in p.to) {
          var vf = p.fr[f];
          var vt = p.to[f];
          p.tgt[f] = vf + (vt - vf) * r;
        }
      }

      if (p.pos >= p.dur) {
        if (p.cb) {
          p.cb();
        }

        this._current += 1;
        if (this._current >= this._length) {
          complete = true;
        }
      }

      return complete;
    }
  }]);

  return Tween;
}();

exports.default = Tween;

},{}],34:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tween = require('./Tween');

var _Tween2 = _interopRequireDefault(_Tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tweener = function () {
  function Tweener() {
    var autoUpdateRate = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    _classCallCheck(this, Tweener);

    this.debug = false;
    this.tweens = [];
    this._interval = null;
    this.setAutoUpdateRate(autoUpdateRate);
  }

  _createClass(Tweener, [{
    key: 'dispose',
    value: function dispose() {
      clearInterval(this._interval);
      this._interval = null;
      this.tweens = null;
    }
  }, {
    key: 'setAutoUpdateRate',
    value: function setAutoUpdateRate(value) {
      clearInterval(this._interval);
      this._interval = null;

      if (value > 0) {
        this._time = this.getTime();
        this._interval = setInterval(this._autoUpdate.bind(this), value * 1000);
      }
    }
  }, {
    key: '_autoUpdate',
    value: function _autoUpdate() {
      var t = this.getTime();
      var d = t - this._time;
      this._time = t;
      this.update(d);
    }
  }, {
    key: 'add',
    value: function add(obj) {
      var tween = new _Tween2.default(obj);
      this.tweens.push(tween);
      return tween;
    }
  }, {
    key: 'remove',
    value: function remove(obj) {
      var i = this.tweens.length;
      while (i--) {
        var t = this.tweens[i];
        if (t._ref === obj) {
          this.tweens.splice(i, 1);
        }
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      var i = this.tweens.length;
      while (i--) {
        var t = this.tweens[i];
        if (t.update(delta)) {
          this.tweens.splice(i, 1);
        }
      }
    }
  }, {
    key: 'getTime',
    value: function getTime() {
      return new Date().getTime() / 1000;
    }
  }]);

  return Tweener;
}();

exports.default = Tweener;

},{"./Tween":33}],35:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _Tweener = require('./Tweener');

var _Tweener2 = _interopRequireDefault(_Tweener);

var _eases = require('eases');

var _eases2 = _interopRequireDefault(_eases);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Tweener2.default.ease = _eases2.default;

if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object") {
  window.Tweener = _Tweener2.default;
}

module.exports = _Tweener2.default;

},{"./Tweener":34,"eases":19}]},{},[35])(35)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9iYWNrLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2UtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2JvdW5jZS1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2Utb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY2lyYy1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY3ViaWMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2VsYXN0aWMtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvZXhwby1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzZXMvbGluZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhZC1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhcnQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWludC1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvc2luZS1vdXQuanMiLCJzb3VyY2UvVHdlZW4uanMiLCJzb3VyY2UvVHdlZW5lci5qcyIsInNvdXJjZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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U0F6RFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJCLGtCQUFRLElBQVI7O0FBRUEsSUFBSSxRQUFPLHVEQUFQLEtBQW1CLFFBQW5CLEVBQTZCO0FBQy9CLFNBQU8sT0FBUCxxQkFEK0I7Q0FBakM7O0FBSUEsT0FBTyxPQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIGJhY2tJbk91dCh0KSB7XG4gIHZhciBzID0gMS43MDE1OCAqIDEuNTI1XG4gIGlmICgodCAqPSAyKSA8IDEpXG4gICAgcmV0dXJuIDAuNSAqICh0ICogdCAqICgocyArIDEpICogdCAtIHMpKVxuICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqICgocyArIDEpICogdCArIHMpICsgMilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrSW5PdXQiLCJmdW5jdGlvbiBiYWNrSW4odCkge1xuICB2YXIgcyA9IDEuNzAxNThcbiAgcmV0dXJuIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrSW4iLCJmdW5jdGlvbiBiYWNrT3V0KHQpIHtcbiAgdmFyIHMgPSAxLjcwMTU4XG4gIHJldHVybiAtLXQgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFja091dCIsInZhciBib3VuY2VPdXQgPSByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKVxuXG5mdW5jdGlvbiBib3VuY2VJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyAwLjUgKiAoMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQgKiAyLjApKVxuICAgIDogMC41ICogYm91bmNlT3V0KHQgKiAyLjAgLSAxLjApICsgMC41XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlSW5PdXQiLCJ2YXIgYm91bmNlT3V0ID0gcmVxdWlyZSgnLi9ib3VuY2Utb3V0JylcblxuZnVuY3Rpb24gYm91bmNlSW4odCkge1xuICByZXR1cm4gMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlSW4iLCJmdW5jdGlvbiBib3VuY2VPdXQodCkge1xuICB2YXIgYSA9IDQuMCAvIDExLjBcbiAgdmFyIGIgPSA4LjAgLyAxMS4wXG4gIHZhciBjID0gOS4wIC8gMTAuMFxuXG4gIHZhciBjYSA9IDQzNTYuMCAvIDM2MS4wXG4gIHZhciBjYiA9IDM1NDQyLjAgLyAxODA1LjBcbiAgdmFyIGNjID0gMTYwNjEuMCAvIDE4MDUuMFxuXG4gIHZhciB0MiA9IHQgKiB0XG5cbiAgcmV0dXJuIHQgPCBhXG4gICAgPyA3LjU2MjUgKiB0MlxuICAgIDogdCA8IGJcbiAgICAgID8gOS4wNzUgKiB0MiAtIDkuOSAqIHQgKyAzLjRcbiAgICAgIDogdCA8IGNcbiAgICAgICAgPyBjYSAqIHQyIC0gY2IgKiB0ICsgY2NcbiAgICAgICAgOiAxMC44ICogdCAqIHQgLSAyMC41MiAqIHQgKyAxMC43MlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5jZU91dCIsImZ1bmN0aW9uIGNpcmNJbk91dCh0KSB7XG4gIGlmICgodCAqPSAyKSA8IDEpIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSlcbiAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNJbk91dCIsImZ1bmN0aW9uIGNpcmNJbih0KSB7XG4gIHJldHVybiAxLjAgLSBNYXRoLnNxcnQoMS4wIC0gdCAqIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2lyY0luIiwiZnVuY3Rpb24gY2lyY091dCh0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtICggLS10ICogdCApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNPdXQiLCJmdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/IDQuMCAqIHQgKiB0ICogdFxuICAgIDogMC41ICogTWF0aC5wb3coMi4wICogdCAtIDIuMCwgMy4wKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljSW5PdXQiLCJmdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljSW4iLCJmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gIHZhciBmID0gdCAtIDEuMFxuICByZXR1cm4gZiAqIGYgKiBmICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViaWNPdXQiLCJmdW5jdGlvbiBlbGFzdGljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gMC41ICogTWF0aC5zaW4oKzEzLjAgKiBNYXRoLlBJLzIgKiAyLjAgKiB0KSAqIE1hdGgucG93KDIuMCwgMTAuMCAqICgyLjAgKiB0IC0gMS4wKSlcbiAgICA6IDAuNSAqIE1hdGguc2luKC0xMy4wICogTWF0aC5QSS8yICogKCgyLjAgKiB0IC0gMS4wKSArIDEuMCkpICogTWF0aC5wb3coMi4wLCAtMTAuMCAqICgyLjAgKiB0IC0gMS4wKSkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbGFzdGljSW5PdXQiLCJmdW5jdGlvbiBlbGFzdGljSW4odCkge1xuICByZXR1cm4gTWF0aC5zaW4oMTMuMCAqIHQgKiBNYXRoLlBJLzIpICogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsYXN0aWNJbiIsImZ1bmN0aW9uIGVsYXN0aWNPdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4oLTEzLjAgKiAodCArIDEuMCkgKiBNYXRoLlBJLzIpICogTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxhc3RpY091dCIsImZ1bmN0aW9uIGV4cG9Jbk91dCh0KSB7XG4gIHJldHVybiAodCA9PT0gMC4wIHx8IHQgPT09IDEuMClcbiAgICA/IHRcbiAgICA6IHQgPCAwLjVcbiAgICAgID8gKzAuNSAqIE1hdGgucG93KDIuMCwgKDIwLjAgKiB0KSAtIDEwLjApXG4gICAgICA6IC0wLjUgKiBNYXRoLnBvdygyLjAsIDEwLjAgLSAodCAqIDIwLjApKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9Jbk91dCIsImZ1bmN0aW9uIGV4cG9Jbih0KSB7XG4gIHJldHVybiB0ID09PSAwLjAgPyB0IDogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9JbiIsImZ1bmN0aW9uIGV4cG9PdXQodCkge1xuICByZXR1cm4gdCA9PT0gMS4wID8gdCA6IDEuMCAtIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9PdXQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0J2JhY2tJbk91dCc6IHJlcXVpcmUoJy4vYmFjay1pbi1vdXQnKSxcblx0J2JhY2tJbic6IHJlcXVpcmUoJy4vYmFjay1pbicpLFxuXHQnYmFja091dCc6IHJlcXVpcmUoJy4vYmFjay1vdXQnKSxcblx0J2JvdW5jZUluT3V0JzogcmVxdWlyZSgnLi9ib3VuY2UtaW4tb3V0JyksXG5cdCdib3VuY2VJbic6IHJlcXVpcmUoJy4vYm91bmNlLWluJyksXG5cdCdib3VuY2VPdXQnOiByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKSxcblx0J2NpcmNJbk91dCc6IHJlcXVpcmUoJy4vY2lyYy1pbi1vdXQnKSxcblx0J2NpcmNJbic6IHJlcXVpcmUoJy4vY2lyYy1pbicpLFxuXHQnY2lyY091dCc6IHJlcXVpcmUoJy4vY2lyYy1vdXQnKSxcblx0J2N1YmljSW5PdXQnOiByZXF1aXJlKCcuL2N1YmljLWluLW91dCcpLFxuXHQnY3ViaWNJbic6IHJlcXVpcmUoJy4vY3ViaWMtaW4nKSxcblx0J2N1YmljT3V0JzogcmVxdWlyZSgnLi9jdWJpYy1vdXQnKSxcblx0J2VsYXN0aWNJbk91dCc6IHJlcXVpcmUoJy4vZWxhc3RpYy1pbi1vdXQnKSxcblx0J2VsYXN0aWNJbic6IHJlcXVpcmUoJy4vZWxhc3RpYy1pbicpLFxuXHQnZWxhc3RpY091dCc6IHJlcXVpcmUoJy4vZWxhc3RpYy1vdXQnKSxcblx0J2V4cG9Jbk91dCc6IHJlcXVpcmUoJy4vZXhwby1pbi1vdXQnKSxcblx0J2V4cG9Jbic6IHJlcXVpcmUoJy4vZXhwby1pbicpLFxuXHQnZXhwb091dCc6IHJlcXVpcmUoJy4vZXhwby1vdXQnKSxcblx0J2xpbmVhcic6IHJlcXVpcmUoJy4vbGluZWFyJyksXG5cdCdxdWFkSW5PdXQnOiByZXF1aXJlKCcuL3F1YWQtaW4tb3V0JyksXG5cdCdxdWFkSW4nOiByZXF1aXJlKCcuL3F1YWQtaW4nKSxcblx0J3F1YWRPdXQnOiByZXF1aXJlKCcuL3F1YWQtb3V0JyksXG5cdCdxdWFydEluT3V0JzogcmVxdWlyZSgnLi9xdWFydC1pbi1vdXQnKSxcblx0J3F1YXJ0SW4nOiByZXF1aXJlKCcuL3F1YXJ0LWluJyksXG5cdCdxdWFydE91dCc6IHJlcXVpcmUoJy4vcXVhcnQtb3V0JyksXG5cdCdxdWludEluT3V0JzogcmVxdWlyZSgnLi9xdWludC1pbi1vdXQnKSxcblx0J3F1aW50SW4nOiByZXF1aXJlKCcuL3F1aW50LWluJyksXG5cdCdxdWludE91dCc6IHJlcXVpcmUoJy4vcXVpbnQtb3V0JyksXG5cdCdzaW5lSW5PdXQnOiByZXF1aXJlKCcuL3NpbmUtaW4tb3V0JyksXG5cdCdzaW5lSW4nOiByZXF1aXJlKCcuL3NpbmUtaW4nKSxcblx0J3NpbmVPdXQnOiByZXF1aXJlKCcuL3NpbmUtb3V0Jylcbn0iLCJmdW5jdGlvbiBsaW5lYXIodCkge1xuICByZXR1cm4gdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmVhciIsImZ1bmN0aW9uIHF1YWRJbk91dCh0KSB7XG4gICAgdCAvPSAwLjVcbiAgICBpZiAodCA8IDEpIHJldHVybiAwLjUqdCp0XG4gICAgdC0tXG4gICAgcmV0dXJuIC0wLjUgKiAodCoodC0yKSAtIDEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZEluT3V0IiwiZnVuY3Rpb24gcXVhZEluKHQpIHtcbiAgcmV0dXJuIHQgKiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZEluIiwiZnVuY3Rpb24gcXVhZE91dCh0KSB7XG4gIHJldHVybiAtdCAqICh0IC0gMi4wKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YWRPdXQiLCJmdW5jdGlvbiBxdWFydGljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gKzguMCAqIE1hdGgucG93KHQsIDQuMClcbiAgICA6IC04LjAgKiBNYXRoLnBvdyh0IC0gMS4wLCA0LjApICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhcnRpY0luT3V0IiwiZnVuY3Rpb24gcXVhcnRpY0luKHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQsIDQuMClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljSW4iLCJmdW5jdGlvbiBxdWFydGljT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQgLSAxLjAsIDMuMCkgKiAoMS4wIC0gdCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljT3V0IiwiZnVuY3Rpb24gcWludGljSW5PdXQodCkge1xuICAgIGlmICggKCB0ICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogdCAqIHQgKiB0ICogdCAqIHRcbiAgICByZXR1cm4gMC41ICogKCAoIHQgLT0gMiApICogdCAqIHQgKiB0ICogdCArIDIgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY0luT3V0IiwiZnVuY3Rpb24gcWludGljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxaW50aWNJbiIsImZ1bmN0aW9uIHFpbnRpY091dCh0KSB7XG4gIHJldHVybiAtLXQgKiB0ICogdCAqIHQgKiB0ICsgMVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY091dCIsImZ1bmN0aW9uIHNpbmVJbk91dCh0KSB7XG4gIHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkqdCkgLSAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbmVJbk91dCIsImZ1bmN0aW9uIHNpbmVJbiAodCkge1xuICB2YXIgdiA9IE1hdGguY29zKHQgKiBNYXRoLlBJICogMC41KVxuICBpZiAoTWF0aC5hYnModikgPCAxZS0xNCkgcmV0dXJuIDFcbiAgZWxzZSByZXR1cm4gMSAtIHZcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lSW5cbiIsImZ1bmN0aW9uIHNpbmVPdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4odCAqIE1hdGguUEkvMilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lT3V0IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4ge1xuICBjb25zdHJ1Y3RvcihyZWYgPSBudWxsKSB7XG4gICAgdGhpcy5fcmVmID0gcmVmO1xuICAgIHRoaXMuX2xhc3RTdGF0ZSA9IHJlZjtcbiAgICB0aGlzLl90YXJnZXQgPSByZWY7XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xuICB9XG5cbiAgX2dldFBhcmFtcyh0Z3QgPSB0aGlzLl90YXJnZXQsIGR1ciA9IDAsIGV6ID0gbnVsbCkge1xuICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICB0Z3Q6IHRndCxcbiAgICAgIGR1cjogZHVyLFxuICAgICAgcG9zOiAwLFxuICAgICAgZXo6IGV6LFxuICAgICAgZnI6IG51bGwsXG4gICAgICB0bzogbnVsbCxcbiAgICAgIGNiOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLl9xdWV1ZVt0aGlzLl9sZW5ndGhdID0gcGFyYW1zO1xuICAgIHRoaXMuX2xlbmd0aCArPSAxO1xuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICBfZ2V0UHJvcHMoc3JjLCBmaWVsZHMpIHtcbiAgICB2YXIgbyA9IHt9O1xuICAgIGZvciAodmFyIGYgaW4gZmllbGRzKSB7XG4gICAgICBvW2ZdID0gc3JjW2ZdICE9PSB1bmRlZmluZWQgPyBzcmNbZl0gOiB0aGlzLl90YXJnZXRbZl07XG4gICAgfVxuICAgIHJldHVybiBvO1xuICB9XG5cbiAgYWRkKHRhcmdldCkge1xuICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLl9sYXN0U3RhdGUgPSB0YXJnZXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0byhwcm9wcywgZHVyYXRpb24sIGVhc2UpIHtcbiAgICB2YXIgcCA9IHRoaXMuX2dldFBhcmFtcyh0aGlzLl90YXJnZXQsIGR1cmF0aW9uLCBlYXNlKTtcbiAgICBwLmZyID0gdGhpcy5fZ2V0UHJvcHModGhpcy5fbGFzdFN0YXRlLCBwcm9wcyk7XG4gICAgcC50byA9IHByb3BzO1xuICAgIHRoaXMuX2xhc3RTdGF0ZSA9IHByb3BzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZnJvbShwcm9wcywgZHVyYXRpb24sIGVhc2UpIHtcbiAgICB2YXIgcCA9IHRoaXMuX2dldFBhcmFtcyh0aGlzLl90YXJnZXQsIGR1cmF0aW9uLCBlYXNlKTtcbiAgICBwLmZyID0gcHJvcHM7XG4gICAgcC50byA9IHRoaXMuX2dldFByb3BzKHRoaXMuX2xhc3RTdGF0ZSwgcHJvcHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FpdChkdXJhdGlvbikge1xuICAgIHZhciBwID0gdGhpcy5fZ2V0UGFyYW1zKCk7XG4gICAgcC5kdXIgPSBkdXJhdGlvbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRoZW4oZm4pIHtcbiAgICB2YXIgcCA9IHRoaXMuX3F1ZXVlW3RoaXMuX2xlbmd0aCAtIDFdO1xuICAgIGlmIChwKSB7XG4gICAgICBwLmNiID0gZm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgdmFyIHAgPSB0aGlzLl9xdWV1ZVt0aGlzLl9jdXJyZW50XTtcblxuICAgIGlmICghcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHIgPSAxO1xuICAgIHZhciBjb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgcC5wb3MgKz0gZGVsdGE7XG5cbiAgICBpZiAocC5kdXIgPiAwICYmIHAucG9zIDwgcC5kdXIpIHtcbiAgICAgIHIgPSBwLmV6ID8gcC5leihwLnBvcy9wLmR1cikgOiBwLnBvcy9wLmR1cjtcbiAgICB9XG5cbiAgICBpZiAocC50byAmJiBwLnRndCkge1xuICAgICAgZm9yICh2YXIgZiBpbiBwLnRvKSB7XG4gICAgICAgIHZhciB2ZiA9IHAuZnJbZl07XG4gICAgICAgIHZhciB2dCA9IHAudG9bZl07XG4gICAgICAgIHAudGd0W2ZdID0gdmYgKyAodnQgLSB2ZikqcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocC5wb3MgPj0gcC5kdXIpIHtcbiAgICAgIGlmIChwLmNiKSB7XG4gICAgICAgIHAuY2IoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY3VycmVudCArPSAxO1xuICAgICAgaWYgKHRoaXMuX2N1cnJlbnQgPj0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICAgIGNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGxldGU7XG4gIH1cbn1cbiIsImltcG9ydCBUd2VlbiBmcm9tICcuL1R3ZWVuJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW5lciB7XG4gIGNvbnN0cnVjdG9yKGF1dG9VcGRhdGVSYXRlID0gMCkge1xuICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICB0aGlzLnR3ZWVucyA9IFtdO1xuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLnNldEF1dG9VcGRhdGVSYXRlKGF1dG9VcGRhdGVSYXRlKTtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMudHdlZW5zID0gbnVsbDtcbiAgfVxuXG4gIHNldEF1dG9VcGRhdGVSYXRlKHZhbHVlKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgdGhpcy5fdGltZSA9IHRoaXMuZ2V0VGltZSgpO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLl9hdXRvVXBkYXRlLmJpbmQodGhpcyksIHZhbHVlKjEwMDApO1xuICAgIH1cbiAgfVxuXG4gIF9hdXRvVXBkYXRlKCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRUaW1lKCk7XG4gICAgdmFyIGQgPSB0IC0gdGhpcy5fdGltZTtcbiAgICB0aGlzLl90aW1lID0gdDtcbiAgICB0aGlzLnVwZGF0ZShkKTtcbiAgfVxuXG4gIGFkZChvYmopIHtcbiAgICB2YXIgdHdlZW4gPSBuZXcgVHdlZW4ob2JqKTtcbiAgICB0aGlzLnR3ZWVucy5wdXNoKHR3ZWVuKTtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICByZW1vdmUob2JqKSB7XG4gICAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICAgIGlmICh0Ll9yZWYgPT09IG9iaikge1xuICAgICAgICB0aGlzLnR3ZWVucy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICAgIGlmICh0LnVwZGF0ZShkZWx0YSkpIHtcbiAgICAgICAgdGhpcy50d2VlbnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpLzEwMDA7XG4gIH1cbn1cbiIsImltcG9ydCBUd2VlbmVyIGZyb20gJy4vVHdlZW5lcic7XG5pbXBvcnQgZWFzZXMgZnJvbSAnZWFzZXMnO1xuVHdlZW5lci5lYXNlID0gZWFzZXM7XG5cbmlmICh0eXBlb2Yod2luZG93KSA9PT0gXCJvYmplY3RcIikge1xuICB3aW5kb3cuVHdlZW5lciA9IFR3ZWVuZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5lcjtcbiJdfQ==
