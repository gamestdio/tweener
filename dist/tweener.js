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
function sineIn(t) {
  return 1 - Math.cos( t * Math.PI / 2 )
}

module.exports = sineIn
},{}],32:[function(require,module,exports){
function sineOut(t) {
  return Math.sin(t * Math.PI/2)
}

module.exports = sineOut
},{}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _eases = require('eases');

var IDLE = 0;
var RUNNING = 1;
var COMPLETED = 2;

var Tween = (function () {
  function Tween(obj) {
    _classCallCheck(this, Tween);

    this.name = '';
    this.debug = false;
    this.obj = obj;

    this.start = 0;
    this.duration = 0;
    this.state = 0;

    this.next = null;
    this.prev = null;
    this.last = this;
    this.time = 0;

    this.paramsFrom = null;
    this.paramsTo = null;
    this.ease = _eases.linear;

    this.onComplete = null;
  }

  _createClass(Tween, [{
    key: '_getTween',
    value: function _getTween(obj, duration, ease) {
      var last = this.last;
      var tween = new Tween(obj);
      tween.debug = this.debug;
      tween.start = last.start + last.duration;
      tween.duration = duration || 0;
      tween.state = 0;
      tween.ease = ease;
      tween.prev = last;
      last.next = tween;
      this.last = tween;
      return tween;
    }
  }, {
    key: '_getLastParam',
    value: function _getLastParam(field) {
      var ref = this.last.prev;
      while (ref) {
        if (ref.obj === this.obj && ref.paramsTo && ref.paramsTo[field] !== undefined && ref.paramsTo[field] !== null) {
          break;
        }
        ref = ref.prev;
      }
      var v = ref ? ref.paramsTo[field] : this.obj[field];
      return v;
    }
  }, {
    key: 'add',
    value: function add(obj) {
      var tween = this._getTween(obj, 0, _eases.linear);
      return tween;
    }
  }, {
    key: 'from',
    value: function from(props, duration, ease) {
      var tween = this._getTween(this.obj, duration, ease);
      tween.name = 'from';
      tween.paramsFrom = props;
      tween.paramsTo = {};
      for (var f in props) {
        tween.paramsTo[f] = this._getLastParam(f);
      }
      return this;
    }
  }, {
    key: 'to',
    value: function to(props, duration, ease) {
      var tween = this._getTween(this.obj, duration, ease);
      tween.name = 'to';
      tween.paramsTo = props;
      tween.paramsFrom = {};
      for (var f in props) {
        tween.paramsFrom[f] = this._getLastParam(f);
      }
      return this;
    }
  }, {
    key: 'wait',
    value: function wait(duration) {
      var tween = this._getTween(this.obj, duration, null);
      tween.name = 'wait';
      tween.paramsFrom = tween.prev.paramsFrom;
      tween.paramsTo = tween.prev.paramsTo;
      return this;
    }
  }, {
    key: 'then',
    value: function then(callback) {
      this.last.onComplete = callback;
      return this;
    }
  }, {
    key: 'setTime',
    value: function setTime(value) {
      var delta = value - this.time;
      this.update(delta);
    }
  }, {
    key: 'getTime',
    value: function getTime() {
      return this.time;
    }
  }, {
    key: 'update',
    value: function update(delta) {
      if (delta) {
        this.time += delta;
      }

      if (this.next && delta < 0) {
        this.next.update(delta);
      }

      var end = this.start + this.duration;
      if (this.time >= this.start && this.time < end) {
        if (this.state !== Tween.RUNNING && this.debug) {
          this.log('started');
        }
        this.state = Tween.RUNNING;
        this.updateProps(this.time - this.start);
      } else if (this.time < this.start) {
        if (this.state !== Tween.IDLE) {
          this.state = Tween.IDLE;
          this.updateProps(0);
        }
      } else if (this.time >= end) {
        if (this.state !== Tween.COMPLETED) {
          this.state = Tween.COMPLETED;
          this.updateProps(this.duration);
          if (this.debug) {
            this.log('completed');
          }
          if (this.onComplete) {
            this.onComplete();
          }
        }
      }

      if (this.next && delta > 0) {
        this.next.update(delta);
      }
    }
  }, {
    key: 'updateProps',
    value: function updateProps(time) {
      if (!this.ease) {
        return;
      }

      var ratio = 0;

      if (this.state === Tween.RUNNING) {
        ratio = this.ease(time / this.duration);
      }

      for (var f in this.paramsTo) {
        switch (this.state) {
          case Tween.IDLE:
            this.obj[f] = this.paramsFrom[f];
            break;
          case Tween.COMPLETED:
            this.obj[f] = this.paramsTo[f];
            break;
          default:
            var vf = this.paramsFrom[f];
            var vt = this.paramsTo[f];
            this.obj[f] = vf + (vt - vf) * ratio;
            break;
        }
      }
    }
  }, {
    key: 'finished',
    value: function finished() {
      var r = this.state === Tween.COMPLETED;
      if (r && this.next) {
        r = this.next.finished();
      }
      return r;
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      if (this.next) {
        this.next.dispose();
      }
      if (this.debug) {
        this.log('disposed!');
      }
      this.next = null;
      this.prev = null;
      this.last = null;
      this.paramsFrom = null;
      this.paramsTo = null;
      this.onComplete = null;
    }
  }, {
    key: 'log',
    value: function log(msg) {
      if (this.obj.name && this.name) {
        console.log('[Tween]', this.obj.name, this.name, msg);
      }
    }
  }]);

  return Tween;
})();

exports['default'] = Tween;

Tween.IDLE = IDLE;
Tween.RUNNING = RUNNING;
Tween.COMPLETED = COMPLETED;
module.exports = exports['default'];

},{"eases":19}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Tween = require('./Tween');

var _Tween2 = _interopRequireDefault(_Tween);

var _eases = require('eases');

var _eases2 = _interopRequireDefault(_eases);

var Tweener = (function () {
  function Tweener() {
    var autoUpdateRate = arguments[0] === undefined ? 0 : arguments[0];

    _classCallCheck(this, Tweener);

    this.debug = false;
    this.tweens = [];
    this._autoUpdateRate = 0;
    this._interval = null;
    this.autoUpdateRate = autoUpdateRate;
  }

  _createClass(Tweener, [{
    key: 'autoUpdateRate',
    get: function () {
      return this._autoUpdateRate;
    },
    set: function (value) {
      clearInterval(this._interval);
      if (value <= 0) {
        this._interval = null;
        this._autoUpdateRate = 0;
      } else {
        this._autoUpdateRate = value;
        var self = this;
        var time = self.getTime();
        self._interval = setInterval(function () {
          var t = self.getTime();
          var d = t - time;
          time = t;
          self.update(d);
        }, value * 1000);
      }
    }
  }, {
    key: 'add',
    value: function add(obj) {
      var tween = new _Tween2['default'](obj);
      tween.debug = this.debug;
      this.tweens.push(tween);
      return tween;
    }
  }, {
    key: 'remove',
    value: function remove(obj) {
      var i = this.tweens.length;
      while (i--) {
        var t = this.tweens[i];
        if (t.obj === obj) {
          this._destroy(t, i);
        }
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      var i = this.tweens.length;
      while (i--) {
        var t = this.tweens[i];
        if (t) {
          t.update(delta);
          if (t.finished()) {
            this._destroy(t, i);
          }
        }
      }
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      this.autoUpdateRate = 0;
      this.tweens = null;
    }
  }, {
    key: '_destroy',
    value: function _destroy(tween, index) {
      if (index === undefined) {
        index = this.tween.indexOf(tween);
      }
      this.tweens.splice(index, 1);
      tween.dispose();
    }
  }, {
    key: 'getTime',
    value: function getTime() {
      return new Date().getTime() / 1000;
    }
  }]);

  return Tweener;
})();

exports['default'] = Tweener;

Tweener.Tween = _Tween2['default'];
Tweener.ease = _eases2['default'];
module.exports = exports['default'];

},{"./Tween":33,"eases":19}],35:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _Tweener = require("./Tweener");

var _Tweener2 = _interopRequireDefault(_Tweener);

if (typeof window === "object") {
  window.Tweener = _Tweener2["default"];
}

module.exports = _Tweener2["default"];

},{"./Tweener":34}]},{},[35])(35)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9iYWNrLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2UtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2JvdW5jZS1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2Utb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY2lyYy1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY3ViaWMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2VsYXN0aWMtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvZXhwby1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzZXMvbGluZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhZC1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhcnQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWludC1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvc2luZS1vdXQuanMiLCIvaG9tZS9tYXVyby9wcm9qZWN0cy90d2VlbmVyL3NvdXJjZS9Ud2Vlbi5qcyIsIi9ob21lL21hdXJvL3Byb2plY3RzL3R3ZWVuZXIvc291cmNlL1R3ZWVuZXIuanMiLCIvaG9tZS9tYXVyby9wcm9qZWN0cy90d2VlbmVyL3NvdXJjZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFD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QkFBVSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIGJhY2tJbk91dCh0KSB7XG4gIHZhciBzID0gMS43MDE1OCAqIDEuNTI1XG4gIGlmICgodCAqPSAyKSA8IDEpXG4gICAgcmV0dXJuIDAuNSAqICh0ICogdCAqICgocyArIDEpICogdCAtIHMpKVxuICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqICgocyArIDEpICogdCArIHMpICsgMilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrSW5PdXQiLCJmdW5jdGlvbiBiYWNrSW4odCkge1xuICB2YXIgcyA9IDEuNzAxNThcbiAgcmV0dXJuIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrSW4iLCJmdW5jdGlvbiBiYWNrT3V0KHQpIHtcbiAgdmFyIHMgPSAxLjcwMTU4XG4gIHJldHVybiAtLXQgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFja091dCIsInZhciBib3VuY2VPdXQgPSByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKVxuXG5mdW5jdGlvbiBib3VuY2VJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyAwLjUgKiAoMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQgKiAyLjApKVxuICAgIDogMC41ICogYm91bmNlT3V0KHQgKiAyLjAgLSAxLjApICsgMC41XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlSW5PdXQiLCJ2YXIgYm91bmNlT3V0ID0gcmVxdWlyZSgnLi9ib3VuY2Utb3V0JylcblxuZnVuY3Rpb24gYm91bmNlSW4odCkge1xuICByZXR1cm4gMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlSW4iLCJmdW5jdGlvbiBib3VuY2VPdXQodCkge1xuICB2YXIgYSA9IDQuMCAvIDExLjBcbiAgdmFyIGIgPSA4LjAgLyAxMS4wXG4gIHZhciBjID0gOS4wIC8gMTAuMFxuXG4gIHZhciBjYSA9IDQzNTYuMCAvIDM2MS4wXG4gIHZhciBjYiA9IDM1NDQyLjAgLyAxODA1LjBcbiAgdmFyIGNjID0gMTYwNjEuMCAvIDE4MDUuMFxuXG4gIHZhciB0MiA9IHQgKiB0XG5cbiAgcmV0dXJuIHQgPCBhXG4gICAgPyA3LjU2MjUgKiB0MlxuICAgIDogdCA8IGJcbiAgICAgID8gOS4wNzUgKiB0MiAtIDkuOSAqIHQgKyAzLjRcbiAgICAgIDogdCA8IGNcbiAgICAgICAgPyBjYSAqIHQyIC0gY2IgKiB0ICsgY2NcbiAgICAgICAgOiAxMC44ICogdCAqIHQgLSAyMC41MiAqIHQgKyAxMC43MlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5jZU91dCIsImZ1bmN0aW9uIGNpcmNJbk91dCh0KSB7XG4gIGlmICgodCAqPSAyKSA8IDEpIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSlcbiAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNJbk91dCIsImZ1bmN0aW9uIGNpcmNJbih0KSB7XG4gIHJldHVybiAxLjAgLSBNYXRoLnNxcnQoMS4wIC0gdCAqIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2lyY0luIiwiZnVuY3Rpb24gY2lyY091dCh0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtICggLS10ICogdCApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNPdXQiLCJmdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/IDQuMCAqIHQgKiB0ICogdFxuICAgIDogMC41ICogTWF0aC5wb3coMi4wICogdCAtIDIuMCwgMy4wKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljSW5PdXQiLCJmdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljSW4iLCJmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gIHZhciBmID0gdCAtIDEuMFxuICByZXR1cm4gZiAqIGYgKiBmICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViaWNPdXQiLCJmdW5jdGlvbiBlbGFzdGljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gMC41ICogTWF0aC5zaW4oKzEzLjAgKiBNYXRoLlBJLzIgKiAyLjAgKiB0KSAqIE1hdGgucG93KDIuMCwgMTAuMCAqICgyLjAgKiB0IC0gMS4wKSlcbiAgICA6IDAuNSAqIE1hdGguc2luKC0xMy4wICogTWF0aC5QSS8yICogKCgyLjAgKiB0IC0gMS4wKSArIDEuMCkpICogTWF0aC5wb3coMi4wLCAtMTAuMCAqICgyLjAgKiB0IC0gMS4wKSkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbGFzdGljSW5PdXQiLCJmdW5jdGlvbiBlbGFzdGljSW4odCkge1xuICByZXR1cm4gTWF0aC5zaW4oMTMuMCAqIHQgKiBNYXRoLlBJLzIpICogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsYXN0aWNJbiIsImZ1bmN0aW9uIGVsYXN0aWNPdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4oLTEzLjAgKiAodCArIDEuMCkgKiBNYXRoLlBJLzIpICogTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxhc3RpY091dCIsImZ1bmN0aW9uIGV4cG9Jbk91dCh0KSB7XG4gIHJldHVybiAodCA9PT0gMC4wIHx8IHQgPT09IDEuMClcbiAgICA/IHRcbiAgICA6IHQgPCAwLjVcbiAgICAgID8gKzAuNSAqIE1hdGgucG93KDIuMCwgKDIwLjAgKiB0KSAtIDEwLjApXG4gICAgICA6IC0wLjUgKiBNYXRoLnBvdygyLjAsIDEwLjAgLSAodCAqIDIwLjApKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9Jbk91dCIsImZ1bmN0aW9uIGV4cG9Jbih0KSB7XG4gIHJldHVybiB0ID09PSAwLjAgPyB0IDogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9JbiIsImZ1bmN0aW9uIGV4cG9PdXQodCkge1xuICByZXR1cm4gdCA9PT0gMS4wID8gdCA6IDEuMCAtIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9PdXQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0J2JhY2tJbk91dCc6IHJlcXVpcmUoJy4vYmFjay1pbi1vdXQnKSxcblx0J2JhY2tJbic6IHJlcXVpcmUoJy4vYmFjay1pbicpLFxuXHQnYmFja091dCc6IHJlcXVpcmUoJy4vYmFjay1vdXQnKSxcblx0J2JvdW5jZUluT3V0JzogcmVxdWlyZSgnLi9ib3VuY2UtaW4tb3V0JyksXG5cdCdib3VuY2VJbic6IHJlcXVpcmUoJy4vYm91bmNlLWluJyksXG5cdCdib3VuY2VPdXQnOiByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKSxcblx0J2NpcmNJbk91dCc6IHJlcXVpcmUoJy4vY2lyYy1pbi1vdXQnKSxcblx0J2NpcmNJbic6IHJlcXVpcmUoJy4vY2lyYy1pbicpLFxuXHQnY2lyY091dCc6IHJlcXVpcmUoJy4vY2lyYy1vdXQnKSxcblx0J2N1YmljSW5PdXQnOiByZXF1aXJlKCcuL2N1YmljLWluLW91dCcpLFxuXHQnY3ViaWNJbic6IHJlcXVpcmUoJy4vY3ViaWMtaW4nKSxcblx0J2N1YmljT3V0JzogcmVxdWlyZSgnLi9jdWJpYy1vdXQnKSxcblx0J2VsYXN0aWNJbk91dCc6IHJlcXVpcmUoJy4vZWxhc3RpYy1pbi1vdXQnKSxcblx0J2VsYXN0aWNJbic6IHJlcXVpcmUoJy4vZWxhc3RpYy1pbicpLFxuXHQnZWxhc3RpY091dCc6IHJlcXVpcmUoJy4vZWxhc3RpYy1vdXQnKSxcblx0J2V4cG9Jbk91dCc6IHJlcXVpcmUoJy4vZXhwby1pbi1vdXQnKSxcblx0J2V4cG9Jbic6IHJlcXVpcmUoJy4vZXhwby1pbicpLFxuXHQnZXhwb091dCc6IHJlcXVpcmUoJy4vZXhwby1vdXQnKSxcblx0J2xpbmVhcic6IHJlcXVpcmUoJy4vbGluZWFyJyksXG5cdCdxdWFkSW5PdXQnOiByZXF1aXJlKCcuL3F1YWQtaW4tb3V0JyksXG5cdCdxdWFkSW4nOiByZXF1aXJlKCcuL3F1YWQtaW4nKSxcblx0J3F1YWRPdXQnOiByZXF1aXJlKCcuL3F1YWQtb3V0JyksXG5cdCdxdWFydEluT3V0JzogcmVxdWlyZSgnLi9xdWFydC1pbi1vdXQnKSxcblx0J3F1YXJ0SW4nOiByZXF1aXJlKCcuL3F1YXJ0LWluJyksXG5cdCdxdWFydE91dCc6IHJlcXVpcmUoJy4vcXVhcnQtb3V0JyksXG5cdCdxdWludEluT3V0JzogcmVxdWlyZSgnLi9xdWludC1pbi1vdXQnKSxcblx0J3F1aW50SW4nOiByZXF1aXJlKCcuL3F1aW50LWluJyksXG5cdCdxdWludE91dCc6IHJlcXVpcmUoJy4vcXVpbnQtb3V0JyksXG5cdCdzaW5lSW5PdXQnOiByZXF1aXJlKCcuL3NpbmUtaW4tb3V0JyksXG5cdCdzaW5lSW4nOiByZXF1aXJlKCcuL3NpbmUtaW4nKSxcblx0J3NpbmVPdXQnOiByZXF1aXJlKCcuL3NpbmUtb3V0Jylcbn0iLCJmdW5jdGlvbiBsaW5lYXIodCkge1xuICByZXR1cm4gdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmVhciIsImZ1bmN0aW9uIHF1YWRJbk91dCh0KSB7XG4gICAgdCAvPSAwLjVcbiAgICBpZiAodCA8IDEpIHJldHVybiAwLjUqdCp0XG4gICAgdC0tXG4gICAgcmV0dXJuIC0wLjUgKiAodCoodC0yKSAtIDEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZEluT3V0IiwiZnVuY3Rpb24gcXVhZEluKHQpIHtcbiAgcmV0dXJuIHQgKiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZEluIiwiZnVuY3Rpb24gcXVhZE91dCh0KSB7XG4gIHJldHVybiAtdCAqICh0IC0gMi4wKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YWRPdXQiLCJmdW5jdGlvbiBxdWFydGljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gKzguMCAqIE1hdGgucG93KHQsIDQuMClcbiAgICA6IC04LjAgKiBNYXRoLnBvdyh0IC0gMS4wLCA0LjApICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhcnRpY0luT3V0IiwiZnVuY3Rpb24gcXVhcnRpY0luKHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQsIDQuMClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljSW4iLCJmdW5jdGlvbiBxdWFydGljT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQgLSAxLjAsIDMuMCkgKiAoMS4wIC0gdCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljT3V0IiwiZnVuY3Rpb24gcWludGljSW5PdXQodCkge1xuICAgIGlmICggKCB0ICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogdCAqIHQgKiB0ICogdCAqIHRcbiAgICByZXR1cm4gMC41ICogKCAoIHQgLT0gMiApICogdCAqIHQgKiB0ICogdCArIDIgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY0luT3V0IiwiZnVuY3Rpb24gcWludGljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxaW50aWNJbiIsImZ1bmN0aW9uIHFpbnRpY091dCh0KSB7XG4gIHJldHVybiAtLXQgKiB0ICogdCAqIHQgKiB0ICsgMVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY091dCIsImZ1bmN0aW9uIHNpbmVJbk91dCh0KSB7XG4gIHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkqdCkgLSAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbmVJbk91dCIsImZ1bmN0aW9uIHNpbmVJbih0KSB7XG4gIHJldHVybiAxIC0gTWF0aC5jb3MoIHQgKiBNYXRoLlBJIC8gMiApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2luZUluIiwiZnVuY3Rpb24gc2luZU91dCh0KSB7XG4gIHJldHVybiBNYXRoLnNpbih0ICogTWF0aC5QSS8yKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbmVPdXQiLCJpbXBvcnQge2xpbmVhcn0gZnJvbSAnZWFzZXMnO1xuXG52YXIgSURMRSA9IDA7XG52YXIgUlVOTklORyA9IDE7XG52YXIgQ09NUExFVEVEID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4ge1xuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgdGhpcy5vYmogPSBvYmo7XG5cbiAgICB0aGlzLnN0YXJ0ID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICB0aGlzLnN0YXRlID0gMDtcblxuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLmxhc3QgPSB0aGlzO1xuICAgIHRoaXMudGltZSA9IDA7XG5cbiAgICB0aGlzLnBhcmFtc0Zyb20gPSBudWxsO1xuICAgIHRoaXMucGFyYW1zVG8gPSBudWxsO1xuICAgIHRoaXMuZWFzZSA9IGxpbmVhcjtcblxuICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gIH1cblxuICBfZ2V0VHdlZW4ob2JqLCBkdXJhdGlvbiwgZWFzZSkge1xuICAgIHZhciBsYXN0ID0gdGhpcy5sYXN0O1xuICAgIHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmopO1xuICAgIHR3ZWVuLmRlYnVnID0gdGhpcy5kZWJ1ZztcbiAgICB0d2Vlbi5zdGFydCA9IGxhc3Quc3RhcnQgKyBsYXN0LmR1cmF0aW9uO1xuICAgIHR3ZWVuLmR1cmF0aW9uID0gZHVyYXRpb24gfHwgMDtcbiAgICB0d2Vlbi5zdGF0ZSA9IDA7XG4gICAgdHdlZW4uZWFzZSA9IGVhc2U7XG4gICAgdHdlZW4ucHJldiA9IGxhc3Q7XG4gICAgbGFzdC5uZXh0ID0gdHdlZW47XG4gICAgdGhpcy5sYXN0ID0gdHdlZW47XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9XG5cbiAgX2dldExhc3RQYXJhbShmaWVsZCkge1xuICAgIHZhciByZWYgPSB0aGlzLmxhc3QucHJldjtcbiAgICB3aGlsZSAocmVmKSB7XG4gICAgICBpZiAocmVmLm9iaiA9PT0gdGhpcy5vYmogJiYgcmVmLnBhcmFtc1RvICYmIHJlZi5wYXJhbXNUb1tmaWVsZF0gIT09IHVuZGVmaW5lZCAmJiByZWYucGFyYW1zVG9bZmllbGRdICE9PSBudWxsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVmID0gcmVmLnByZXY7XG4gICAgfVxuICAgIHZhciB2ID0gcmVmID8gcmVmLnBhcmFtc1RvW2ZpZWxkXSA6IHRoaXMub2JqW2ZpZWxkXTtcbiAgICByZXR1cm4gdjtcbiAgfVxuXG4gIGFkZChvYmopIHtcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2VlbihvYmosIDAsIGxpbmVhcik7XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9XG5cbiAgZnJvbShwcm9wcywgZHVyYXRpb24sIGVhc2UpIHtcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2Vlbih0aGlzLm9iaiwgZHVyYXRpb24sIGVhc2UpO1xuICAgIHR3ZWVuLm5hbWUgPSAnZnJvbSc7XG4gICAgdHdlZW4ucGFyYW1zRnJvbSA9IHByb3BzO1xuICAgIHR3ZWVuLnBhcmFtc1RvID0ge307XG4gICAgZm9yICh2YXIgZiBpbiBwcm9wcykge1xuICAgICAgdHdlZW4ucGFyYW1zVG9bZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG8ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG4gICAgdmFyIHR3ZWVuID0gdGhpcy5fZ2V0VHdlZW4odGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlKTtcbiAgICB0d2Vlbi5uYW1lID0gJ3RvJztcbiAgICB0d2Vlbi5wYXJhbXNUbyA9IHByb3BzO1xuICAgIHR3ZWVuLnBhcmFtc0Zyb20gPSB7fTtcbiAgICBmb3IgKHZhciBmIGluIHByb3BzKSB7XG4gICAgICB0d2Vlbi5wYXJhbXNGcm9tW2ZdID0gdGhpcy5fZ2V0TGFzdFBhcmFtKGYpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdhaXQoZHVyYXRpb24pIHtcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2Vlbih0aGlzLm9iaiwgZHVyYXRpb24sIG51bGwpO1xuICAgIHR3ZWVuLm5hbWUgPSAnd2FpdCc7XG4gICAgdHdlZW4ucGFyYW1zRnJvbSA9IHR3ZWVuLnByZXYucGFyYW1zRnJvbTtcbiAgICB0d2Vlbi5wYXJhbXNUbyA9IHR3ZWVuLnByZXYucGFyYW1zVG87XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aGVuKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5sYXN0Lm9uQ29tcGxldGUgPSBjYWxsYmFjaztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFRpbWUodmFsdWUpIHtcbiAgICB2YXIgZGVsdGEgPSB2YWx1ZSAtIHRoaXMudGltZTtcbiAgICB0aGlzLnVwZGF0ZShkZWx0YSk7XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWU7XG4gIH1cblxuICB1cGRhdGUoZGVsdGEpIHtcbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIHRoaXMudGltZSArPSBkZWx0YTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uZXh0ICYmIGRlbHRhIDwgMCkge1xuICAgICAgdGhpcy5uZXh0LnVwZGF0ZShkZWx0YSk7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IHRoaXMuc3RhcnQgKyB0aGlzLmR1cmF0aW9uO1xuICAgIGlmICh0aGlzLnRpbWUgPj0gdGhpcy5zdGFydCAmJiB0aGlzLnRpbWUgPCBlbmQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBUd2Vlbi5SVU5OSU5HICYmIHRoaXMuZGVidWcpIHtcbiAgICAgICAgdGhpcy5sb2coJ3N0YXJ0ZWQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUgPSBUd2Vlbi5SVU5OSU5HO1xuICAgICAgdGhpcy51cGRhdGVQcm9wcyh0aGlzLnRpbWUgLSB0aGlzLnN0YXJ0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGltZSA8IHRoaXMuc3RhcnQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBUd2Vlbi5JRExFKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBUd2Vlbi5JRExFO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BzKDApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50aW1lID49IGVuZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFR3ZWVuLkNPTVBMRVRFRCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gVHdlZW4uQ09NUExFVEVEO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BzKHRoaXMuZHVyYXRpb24pO1xuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgIHRoaXMubG9nKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5uZXh0ICYmIGRlbHRhID4gMCkge1xuICAgICAgdGhpcy5uZXh0LnVwZGF0ZShkZWx0YSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUHJvcHModGltZSkge1xuICAgIGlmICghdGhpcy5lYXNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJhdGlvID0gMDtcblxuICAgIGlmICh0aGlzLnN0YXRlID09PSBUd2Vlbi5SVU5OSU5HKSB7XG4gICAgICByYXRpbyA9IHRoaXMuZWFzZSh0aW1lL3RoaXMuZHVyYXRpb24pO1xuICAgIH1cblxuICAgIGZvciAodmFyIGYgaW4gdGhpcy5wYXJhbXNUbykge1xuICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgVHdlZW4uSURMRSA6XG4gICAgICAgICAgdGhpcy5vYmpbZl0gPSB0aGlzLnBhcmFtc0Zyb21bZl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFR3ZWVuLkNPTVBMRVRFRCA6XG4gICAgICAgICAgdGhpcy5vYmpbZl0gPSB0aGlzLnBhcmFtc1RvW2ZdO1xuICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgdmFyIHZmID0gdGhpcy5wYXJhbXNGcm9tW2ZdO1xuICAgICAgICAgIHZhciB2dCA9IHRoaXMucGFyYW1zVG9bZl07XG4gICAgICAgICAgdGhpcy5vYmpbZl0gPSB2ZiArICh2dCAtIHZmKSpyYXRpbztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmluaXNoZWQoKSB7XG4gICAgdmFyIHIgPSB0aGlzLnN0YXRlID09PSBUd2Vlbi5DT01QTEVURUQ7XG4gICAgaWYgKHIgJiYgdGhpcy5uZXh0KSB7XG4gICAgICByID0gdGhpcy5uZXh0LmZpbmlzaGVkKCk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5uZXh0KSB7XG4gICAgICB0aGlzLm5leHQuZGlzcG9zZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgdGhpcy5sb2coJ2Rpc3Bvc2VkIScpO1xuICAgIH1cbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgdGhpcy5sYXN0ID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtc0Zyb20gPSBudWxsO1xuICAgIHRoaXMucGFyYW1zVG8gPSBudWxsO1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gIH1cblxuICBsb2cobXNnKSB7XG4gICAgaWYgKHRoaXMub2JqLm5hbWUgJiYgdGhpcy5uYW1lKSB7XG4gICAgICBjb25zb2xlLmxvZygnW1R3ZWVuXScsIHRoaXMub2JqLm5hbWUsIHRoaXMubmFtZSwgbXNnKTtcbiAgICB9XG4gIH1cblxufVxuXG5Ud2Vlbi5JRExFID0gSURMRTtcblR3ZWVuLlJVTk5JTkcgPSBSVU5OSU5HO1xuVHdlZW4uQ09NUExFVEVEID0gQ09NUExFVEVEO1xuIiwiaW1wb3J0IFR3ZWVuIGZyb20gJy4vVHdlZW4nO1xuaW1wb3J0IGVhc2VzIGZyb20gJ2Vhc2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW5lciB7XG4gIGNvbnN0cnVjdG9yKGF1dG9VcGRhdGVSYXRlID0gMCkge1xuICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICB0aGlzLnR3ZWVucyA9IFtdO1xuICAgIHRoaXMuX2F1dG9VcGRhdGVSYXRlID0gMDtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5hdXRvVXBkYXRlUmF0ZSA9IGF1dG9VcGRhdGVSYXRlO1xuICB9XG5cbiAgZ2V0IGF1dG9VcGRhdGVSYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvVXBkYXRlUmF0ZTtcbiAgfVxuXG4gIHNldCBhdXRvVXBkYXRlUmF0ZSh2YWx1ZSkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgIGlmICh2YWx1ZSA8PSAwKSB7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9hdXRvVXBkYXRlUmF0ZSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2F1dG9VcGRhdGVSYXRlID0gdmFsdWU7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgdGltZSA9IHNlbGYuZ2V0VGltZSgpO1xuICAgICAgc2VsZi5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSBzZWxmLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSB0IC0gdGltZTtcbiAgICAgICAgdGltZSA9IHQ7XG4gICAgICAgIHNlbGYudXBkYXRlKGQpO1xuICAgICAgfSwgdmFsdWUqMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgYWRkKG9iaikge1xuICAgIHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmopO1xuICAgIHR3ZWVuLmRlYnVnID0gdGhpcy5kZWJ1ZztcbiAgICB0aGlzLnR3ZWVucy5wdXNoKHR3ZWVuKTtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICByZW1vdmUob2JqKSB7XG4gICAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICAgIGlmICh0Lm9iaiA9PT0gb2JqKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kodCwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIHQudXBkYXRlKGRlbHRhKTtcbiAgICAgICAgaWYgKHQuZmluaXNoZWQoKSkge1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3kodCwgaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuYXV0b1VwZGF0ZVJhdGUgPSAwO1xuICAgIHRoaXMudHdlZW5zID0gbnVsbDtcbiAgfVxuXG4gIF9kZXN0cm95KHR3ZWVuLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbmRleCA9IHRoaXMudHdlZW4uaW5kZXhPZih0d2Vlbik7XG4gICAgfVxuICAgIHRoaXMudHdlZW5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgdHdlZW4uZGlzcG9zZSgpO1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkvMTAwMDtcbiAgfVxufVxuXG5Ud2VlbmVyLlR3ZWVuID0gVHdlZW47XG5Ud2VlbmVyLmVhc2UgPSBlYXNlcztcbiIsImltcG9ydCBUd2VlbmVyIGZyb20gJy4vVHdlZW5lcic7XG5cbmlmICh0eXBlb2Yod2luZG93KSA9PT0gXCJvYmplY3RcIikge1xuICB3aW5kb3cuVHdlZW5lciA9IFR3ZWVuZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5lcjtcbiJdfQ==
