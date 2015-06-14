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

var UNDEFINED = 0;
var BEFORE = 1;
var RUNNING = 2;
var AFTER = 3;

var Tween = (function () {
  function Tween(obj) {
    var debug = arguments[1] === undefined ? false : arguments[1];
    var name = arguments[2] === undefined ? '' : arguments[2];

    _classCallCheck(this, Tween);

    this.name = name;
    this.debug = debug;
    this.obj = obj;

    this.position = 0;
    this.duration = 0;
    this.state = 0;

    this.next = null;
    this.prev = null;
    this.last = this;

    this.time = 0;
    this.lastEvaluationTime = -1;

    this.pf = null;
    this.pt = null;
    this.ease = _eases.linear;

    this.onStart = null;
    this.onComplete = null;

    if (this.debug) {
      this.log('created');
    }
  }

  _createClass(Tween, [{
    key: '_getTween',
    value: function _getTween(obj, duration, ease) {
      var name = arguments[3] === undefined ? '' : arguments[3];

      var last = this.last;
      var tween = new Tween(obj, this.debug, name);
      tween.position = last.position + last.duration;
      tween.duration = duration || 0;
      tween.state = 0;
      tween.ease = ease;
      tween.prev = last;
      last.next = tween;
      this.last = tween;

      if (this.debug) {
        this.log('added: ' + name);
      }

      return tween;
    }
  }, {
    key: '_getLastParam',
    value: function _getLastParam(field) {
      var ref = this.last.prev;
      while (ref) {
        if (ref.obj === this.obj && ref.pt && ref.pt[field] !== undefined && ref.pt[field] !== null) {
          break;
        }
        ref = ref.prev;
      }
      var v = ref ? ref.pt[field] : this.obj[field];
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
      var tween = this._getTween(this.obj, duration, ease, 'from');
      tween.pf = props;
      tween.pt = {};
      for (var f in props) {
        tween.pt[f] = this._getLastParam(f);
      }
      return this;
    }
  }, {
    key: 'to',
    value: function to(props, duration, ease) {
      var tween = this._getTween(this.obj, duration, ease, 'to');
      tween.pt = props;
      tween.pf = {};
      for (var f in props) {
        tween.pf[f] = this._getLastParam(f);
      }
      return this;
    }
  }, {
    key: 'wait',
    value: function wait(duration) {
      var tween = this._getTween(this.obj, duration, null, 'wait');
      tween.pf = tween.prev.pf;
      tween.pt = tween.prev.pt;
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

      if (this.time !== this.lastEvaluationTime) {
        var time = this.time;
        var pos = this.position;
        var dur = this.duration;
        var lastState = this.state;
        var state = Tween.getState(pos, dur, time);

        if (lastState === UNDEFINED) {
          if (time > this.lastEvaluationTime) {
            switch (state) {
              case RUNNING:
                this.notifyStart();
                this.process(time - pos);
                break;
              case AFTER:
                this.notifyStart();
                this.process(dur);
                this.notifyComplete();
                break;
            }
          } else {
            switch (state) {
              case RUNNING:
                this.notifyComplete();
                this.process(time - pos);
                break;
              case BEFORE:
                this.notifyComplete();
                this.process(0);
                this.notifyStart();
                break;
            }
          }
        } else {
          switch (state) {
            case BEFORE:
              if (lastState !== BEFORE) {
                this.process(0);
                this.notifyStart();
              }
              break;
            case RUNNING:
              if (lastState === BEFORE) {
                this.notifyStart();
              } else if (lastState === AFTER) {
                this.notifyComplete();
              }
              this.process(time - pos);
              break;
            case AFTER:
              if (lastState !== AFTER) {
                this.process(dur);
                this.notifyComplete();
              }
              break;
          }
        }

        this.lastEvaluationTime = time;
        this.state = state;
      }

      if (this.next && delta > 0) {
        this.next.update(delta);
      }
    }
  }, {
    key: 'process',
    value: function process(time) {
      if (!this.ease || this.duration === 0) {
        return;
      }

      var ratio = this.ease(time / this.duration);

      for (var f in this.pt) {
        switch (ratio) {
          case 0:
            this.obj[f] = this.pf[f];
            break;
          case 1:
            this.obj[f] = this.pt[f];
            break;
          default:
            var vf = this.pf[f];
            var vt = this.pt[f];
            this.obj[f] = vf + (vt - vf) * ratio;
            break;
        }
      }
    }
  }, {
    key: 'notifyStart',
    value: function notifyStart() {
      if (this.debug) {
        this.log('start');
      }
      if (this.onStart) {
        this.onStart();
      }
    }
  }, {
    key: 'notifyComplete',
    value: function notifyComplete() {
      if (this.debug) {
        this.log('complete');
      }
      if (this.onComplete) {
        this.onComplete();
      }
    }
  }, {
    key: 'finished',
    value: function finished() {
      var r = this.state === AFTER;
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
        this.log('DISPOSED!');
      }
      this.obj = null;
      this.next = null;
      this.prev = null;
      this.last = null;
      this.pf = null;
      this.pt = null;
      this.onStart = null;
      this.onComplete = null;
    }
  }, {
    key: 'log',
    value: function log(msg) {
      if (this.debug) {
        if (this.obj.name) {
          console.log('[Tween]', this.obj.name, this.name, msg);
        } else if (this.name) {
          console.log('[Tween]', this.name, msg);
        } else {
          console.log('[Tween]', msg);
        }
      }
    }
  }], [{
    key: 'getState',
    value: function getState(pos, dur, time) {
      var end = pos + dur;
      var state = UNDEFINED;
      if (time < pos) {
        state = BEFORE;
      } else if (time >= end) {
        state = AFTER;
      } else {
        state = RUNNING;
      }
      return state;
    }
  }]);

  return Tween;
})();

exports['default'] = Tween;

Tween.UNDEFINED = UNDEFINED;
Tween.BEFORE = BEFORE;
Tween.RUNNING = RUNNING;
Tween.AFTER = AFTER;
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
    key: 'dispose',
    value: function dispose() {
      clearInterval(this._interval);
      this.autoUpdateRate = 0;
      var i = this.tweens.length;
      while (i--) {
        var t = this.tweens[i];
        if (t) {
          t.dispose();
        }
      }
      this.tweens = null;
    }
  }, {
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
      var debug = arguments[1] === undefined ? false : arguments[1];
      var name = arguments[2] === undefined ? '' : arguments[2];

      var tween = new _Tween2['default'](obj, debug, name);
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
          this.tweens.splice(i, 1);
          t.dispose();
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
          if (t.finished()) {
            this.tweens.splice(i, 1);
            t.dispose();
          } else {
            t.update(delta);
          }
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9iYWNrLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2UtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2JvdW5jZS1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2Utb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY2lyYy1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY3ViaWMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2VsYXN0aWMtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvZXhwby1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzZXMvbGluZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhZC1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhcnQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWludC1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvc2luZS1vdXQuanMiLCIvaG9tZS9tYXVyby9wcm9qZWN0cy90d2VlbmVyL3NvdXJjZS9Ud2Vlbi5qcyIsIi9ob21lL21hdXJvL3Byb2plY3RzL3R3ZWVuZXIvc291cmNlL1R3ZWVuZXIuanMiLCIvaG9tZS9tYXVyby9wcm9qZWN0cy90d2VlbmVyL3NvdXJjZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O3FCQ0pxQixPQUFPOztBQUU1QixJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDcEIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNsQixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBRUssS0FB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RCxNQUFNLENBQUMsT0FBTyx1QkFBVSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIGJhY2tJbk91dCh0KSB7XG4gIHZhciBzID0gMS43MDE1OCAqIDEuNTI1XG4gIGlmICgodCAqPSAyKSA8IDEpXG4gICAgcmV0dXJuIDAuNSAqICh0ICogdCAqICgocyArIDEpICogdCAtIHMpKVxuICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqICgocyArIDEpICogdCArIHMpICsgMilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrSW5PdXQiLCJmdW5jdGlvbiBiYWNrSW4odCkge1xuICB2YXIgcyA9IDEuNzAxNThcbiAgcmV0dXJuIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrSW4iLCJmdW5jdGlvbiBiYWNrT3V0KHQpIHtcbiAgdmFyIHMgPSAxLjcwMTU4XG4gIHJldHVybiAtLXQgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFja091dCIsInZhciBib3VuY2VPdXQgPSByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKVxuXG5mdW5jdGlvbiBib3VuY2VJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyAwLjUgKiAoMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQgKiAyLjApKVxuICAgIDogMC41ICogYm91bmNlT3V0KHQgKiAyLjAgLSAxLjApICsgMC41XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlSW5PdXQiLCJ2YXIgYm91bmNlT3V0ID0gcmVxdWlyZSgnLi9ib3VuY2Utb3V0JylcblxuZnVuY3Rpb24gYm91bmNlSW4odCkge1xuICByZXR1cm4gMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlSW4iLCJmdW5jdGlvbiBib3VuY2VPdXQodCkge1xuICB2YXIgYSA9IDQuMCAvIDExLjBcbiAgdmFyIGIgPSA4LjAgLyAxMS4wXG4gIHZhciBjID0gOS4wIC8gMTAuMFxuXG4gIHZhciBjYSA9IDQzNTYuMCAvIDM2MS4wXG4gIHZhciBjYiA9IDM1NDQyLjAgLyAxODA1LjBcbiAgdmFyIGNjID0gMTYwNjEuMCAvIDE4MDUuMFxuXG4gIHZhciB0MiA9IHQgKiB0XG5cbiAgcmV0dXJuIHQgPCBhXG4gICAgPyA3LjU2MjUgKiB0MlxuICAgIDogdCA8IGJcbiAgICAgID8gOS4wNzUgKiB0MiAtIDkuOSAqIHQgKyAzLjRcbiAgICAgIDogdCA8IGNcbiAgICAgICAgPyBjYSAqIHQyIC0gY2IgKiB0ICsgY2NcbiAgICAgICAgOiAxMC44ICogdCAqIHQgLSAyMC41MiAqIHQgKyAxMC43MlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5jZU91dCIsImZ1bmN0aW9uIGNpcmNJbk91dCh0KSB7XG4gIGlmICgodCAqPSAyKSA8IDEpIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSlcbiAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNJbk91dCIsImZ1bmN0aW9uIGNpcmNJbih0KSB7XG4gIHJldHVybiAxLjAgLSBNYXRoLnNxcnQoMS4wIC0gdCAqIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2lyY0luIiwiZnVuY3Rpb24gY2lyY091dCh0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtICggLS10ICogdCApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNPdXQiLCJmdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/IDQuMCAqIHQgKiB0ICogdFxuICAgIDogMC41ICogTWF0aC5wb3coMi4wICogdCAtIDIuMCwgMy4wKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljSW5PdXQiLCJmdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljSW4iLCJmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gIHZhciBmID0gdCAtIDEuMFxuICByZXR1cm4gZiAqIGYgKiBmICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViaWNPdXQiLCJmdW5jdGlvbiBlbGFzdGljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gMC41ICogTWF0aC5zaW4oKzEzLjAgKiBNYXRoLlBJLzIgKiAyLjAgKiB0KSAqIE1hdGgucG93KDIuMCwgMTAuMCAqICgyLjAgKiB0IC0gMS4wKSlcbiAgICA6IDAuNSAqIE1hdGguc2luKC0xMy4wICogTWF0aC5QSS8yICogKCgyLjAgKiB0IC0gMS4wKSArIDEuMCkpICogTWF0aC5wb3coMi4wLCAtMTAuMCAqICgyLjAgKiB0IC0gMS4wKSkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbGFzdGljSW5PdXQiLCJmdW5jdGlvbiBlbGFzdGljSW4odCkge1xuICByZXR1cm4gTWF0aC5zaW4oMTMuMCAqIHQgKiBNYXRoLlBJLzIpICogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsYXN0aWNJbiIsImZ1bmN0aW9uIGVsYXN0aWNPdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4oLTEzLjAgKiAodCArIDEuMCkgKiBNYXRoLlBJLzIpICogTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxhc3RpY091dCIsImZ1bmN0aW9uIGV4cG9Jbk91dCh0KSB7XG4gIHJldHVybiAodCA9PT0gMC4wIHx8IHQgPT09IDEuMClcbiAgICA/IHRcbiAgICA6IHQgPCAwLjVcbiAgICAgID8gKzAuNSAqIE1hdGgucG93KDIuMCwgKDIwLjAgKiB0KSAtIDEwLjApXG4gICAgICA6IC0wLjUgKiBNYXRoLnBvdygyLjAsIDEwLjAgLSAodCAqIDIwLjApKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9Jbk91dCIsImZ1bmN0aW9uIGV4cG9Jbih0KSB7XG4gIHJldHVybiB0ID09PSAwLjAgPyB0IDogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9JbiIsImZ1bmN0aW9uIGV4cG9PdXQodCkge1xuICByZXR1cm4gdCA9PT0gMS4wID8gdCA6IDEuMCAtIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9PdXQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0J2JhY2tJbk91dCc6IHJlcXVpcmUoJy4vYmFjay1pbi1vdXQnKSxcblx0J2JhY2tJbic6IHJlcXVpcmUoJy4vYmFjay1pbicpLFxuXHQnYmFja091dCc6IHJlcXVpcmUoJy4vYmFjay1vdXQnKSxcblx0J2JvdW5jZUluT3V0JzogcmVxdWlyZSgnLi9ib3VuY2UtaW4tb3V0JyksXG5cdCdib3VuY2VJbic6IHJlcXVpcmUoJy4vYm91bmNlLWluJyksXG5cdCdib3VuY2VPdXQnOiByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKSxcblx0J2NpcmNJbk91dCc6IHJlcXVpcmUoJy4vY2lyYy1pbi1vdXQnKSxcblx0J2NpcmNJbic6IHJlcXVpcmUoJy4vY2lyYy1pbicpLFxuXHQnY2lyY091dCc6IHJlcXVpcmUoJy4vY2lyYy1vdXQnKSxcblx0J2N1YmljSW5PdXQnOiByZXF1aXJlKCcuL2N1YmljLWluLW91dCcpLFxuXHQnY3ViaWNJbic6IHJlcXVpcmUoJy4vY3ViaWMtaW4nKSxcblx0J2N1YmljT3V0JzogcmVxdWlyZSgnLi9jdWJpYy1vdXQnKSxcblx0J2VsYXN0aWNJbk91dCc6IHJlcXVpcmUoJy4vZWxhc3RpYy1pbi1vdXQnKSxcblx0J2VsYXN0aWNJbic6IHJlcXVpcmUoJy4vZWxhc3RpYy1pbicpLFxuXHQnZWxhc3RpY091dCc6IHJlcXVpcmUoJy4vZWxhc3RpYy1vdXQnKSxcblx0J2V4cG9Jbk91dCc6IHJlcXVpcmUoJy4vZXhwby1pbi1vdXQnKSxcblx0J2V4cG9Jbic6IHJlcXVpcmUoJy4vZXhwby1pbicpLFxuXHQnZXhwb091dCc6IHJlcXVpcmUoJy4vZXhwby1vdXQnKSxcblx0J2xpbmVhcic6IHJlcXVpcmUoJy4vbGluZWFyJyksXG5cdCdxdWFkSW5PdXQnOiByZXF1aXJlKCcuL3F1YWQtaW4tb3V0JyksXG5cdCdxdWFkSW4nOiByZXF1aXJlKCcuL3F1YWQtaW4nKSxcblx0J3F1YWRPdXQnOiByZXF1aXJlKCcuL3F1YWQtb3V0JyksXG5cdCdxdWFydEluT3V0JzogcmVxdWlyZSgnLi9xdWFydC1pbi1vdXQnKSxcblx0J3F1YXJ0SW4nOiByZXF1aXJlKCcuL3F1YXJ0LWluJyksXG5cdCdxdWFydE91dCc6IHJlcXVpcmUoJy4vcXVhcnQtb3V0JyksXG5cdCdxdWludEluT3V0JzogcmVxdWlyZSgnLi9xdWludC1pbi1vdXQnKSxcblx0J3F1aW50SW4nOiByZXF1aXJlKCcuL3F1aW50LWluJyksXG5cdCdxdWludE91dCc6IHJlcXVpcmUoJy4vcXVpbnQtb3V0JyksXG5cdCdzaW5lSW5PdXQnOiByZXF1aXJlKCcuL3NpbmUtaW4tb3V0JyksXG5cdCdzaW5lSW4nOiByZXF1aXJlKCcuL3NpbmUtaW4nKSxcblx0J3NpbmVPdXQnOiByZXF1aXJlKCcuL3NpbmUtb3V0Jylcbn0iLCJmdW5jdGlvbiBsaW5lYXIodCkge1xuICByZXR1cm4gdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmVhciIsImZ1bmN0aW9uIHF1YWRJbk91dCh0KSB7XG4gICAgdCAvPSAwLjVcbiAgICBpZiAodCA8IDEpIHJldHVybiAwLjUqdCp0XG4gICAgdC0tXG4gICAgcmV0dXJuIC0wLjUgKiAodCoodC0yKSAtIDEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZEluT3V0IiwiZnVuY3Rpb24gcXVhZEluKHQpIHtcbiAgcmV0dXJuIHQgKiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZEluIiwiZnVuY3Rpb24gcXVhZE91dCh0KSB7XG4gIHJldHVybiAtdCAqICh0IC0gMi4wKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YWRPdXQiLCJmdW5jdGlvbiBxdWFydGljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gKzguMCAqIE1hdGgucG93KHQsIDQuMClcbiAgICA6IC04LjAgKiBNYXRoLnBvdyh0IC0gMS4wLCA0LjApICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhcnRpY0luT3V0IiwiZnVuY3Rpb24gcXVhcnRpY0luKHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQsIDQuMClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljSW4iLCJmdW5jdGlvbiBxdWFydGljT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQgLSAxLjAsIDMuMCkgKiAoMS4wIC0gdCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljT3V0IiwiZnVuY3Rpb24gcWludGljSW5PdXQodCkge1xuICAgIGlmICggKCB0ICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogdCAqIHQgKiB0ICogdCAqIHRcbiAgICByZXR1cm4gMC41ICogKCAoIHQgLT0gMiApICogdCAqIHQgKiB0ICogdCArIDIgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY0luT3V0IiwiZnVuY3Rpb24gcWludGljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxaW50aWNJbiIsImZ1bmN0aW9uIHFpbnRpY091dCh0KSB7XG4gIHJldHVybiAtLXQgKiB0ICogdCAqIHQgKiB0ICsgMVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY091dCIsImZ1bmN0aW9uIHNpbmVJbk91dCh0KSB7XG4gIHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkqdCkgLSAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbmVJbk91dCIsImZ1bmN0aW9uIHNpbmVJbih0KSB7XG4gIHJldHVybiAxIC0gTWF0aC5jb3MoIHQgKiBNYXRoLlBJIC8gMiApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2luZUluIiwiZnVuY3Rpb24gc2luZU91dCh0KSB7XG4gIHJldHVybiBNYXRoLnNpbih0ICogTWF0aC5QSS8yKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbmVPdXQiLCJpbXBvcnQge2xpbmVhcn0gZnJvbSAnZWFzZXMnO1xuXG5jb25zdCBVTkRFRklORUQgPSAwO1xuY29uc3QgQkVGT1JFID0gMTtcbmNvbnN0IFJVTk5JTkcgPSAyO1xuY29uc3QgQUZURVIgPSAzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbiB7XG4gIGNvbnN0cnVjdG9yKG9iaiwgZGVidWcgPSBmYWxzZSwgbmFtZSA9ICcnKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlYnVnID0gZGVidWc7XG4gICAgdGhpcy5vYmogPSBvYmo7XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICB0aGlzLnN0YXRlID0gMDtcblxuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLmxhc3QgPSB0aGlzO1xuXG4gICAgdGhpcy50aW1lID0gMDtcbiAgICB0aGlzLmxhc3RFdmFsdWF0aW9uVGltZSA9IC0xO1xuXG4gICAgdGhpcy5wZiA9IG51bGw7XG4gICAgdGhpcy5wdCA9IG51bGw7XG4gICAgdGhpcy5lYXNlID0gbGluZWFyO1xuXG4gICAgdGhpcy5vblN0YXJ0ID0gbnVsbDtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgIHRoaXMubG9nKCdjcmVhdGVkJyk7XG4gICAgfVxuICB9XG5cbiAgX2dldFR3ZWVuKG9iaiwgZHVyYXRpb24sIGVhc2UsIG5hbWUgPSAnJykge1xuICAgIHZhciBsYXN0ID0gdGhpcy5sYXN0O1xuICAgIHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmosIHRoaXMuZGVidWcsIG5hbWUpO1xuICAgIHR3ZWVuLnBvc2l0aW9uID0gbGFzdC5wb3NpdGlvbiArIGxhc3QuZHVyYXRpb247XG4gICAgdHdlZW4uZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAwO1xuICAgIHR3ZWVuLnN0YXRlID0gMDtcbiAgICB0d2Vlbi5lYXNlID0gZWFzZTtcbiAgICB0d2Vlbi5wcmV2ID0gbGFzdDtcbiAgICBsYXN0Lm5leHQgPSB0d2VlbjtcbiAgICB0aGlzLmxhc3QgPSB0d2VlbjtcblxuICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICB0aGlzLmxvZygnYWRkZWQ6ICcgKyBuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICBfZ2V0TGFzdFBhcmFtKGZpZWxkKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMubGFzdC5wcmV2O1xuICAgIHdoaWxlIChyZWYpIHtcbiAgICAgIGlmIChyZWYub2JqID09PSB0aGlzLm9iaiAmJiByZWYucHQgJiYgcmVmLnB0W2ZpZWxkXSAhPT0gdW5kZWZpbmVkICYmIHJlZi5wdFtmaWVsZF0gIT09IG51bGwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWYgPSByZWYucHJldjtcbiAgICB9XG4gICAgdmFyIHYgPSByZWYgPyByZWYucHRbZmllbGRdIDogdGhpcy5vYmpbZmllbGRdO1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgYWRkKG9iaikge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKG9iaiwgMCwgbGluZWFyKTtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICBmcm9tKHByb3BzLCBkdXJhdGlvbiwgZWFzZSkge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgZWFzZSwgJ2Zyb20nKTtcbiAgICB0d2Vlbi5wZiA9IHByb3BzO1xuICAgIHR3ZWVuLnB0ID0ge307XG4gICAgZm9yICh2YXIgZiBpbiBwcm9wcykge1xuICAgICAgdHdlZW4ucHRbZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG8ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG4gICAgdmFyIHR3ZWVuID0gdGhpcy5fZ2V0VHdlZW4odGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlLCAndG8nKTtcbiAgICB0d2Vlbi5wdCA9IHByb3BzO1xuICAgIHR3ZWVuLnBmID0ge307XG4gICAgZm9yICh2YXIgZiBpbiBwcm9wcykge1xuICAgICAgdHdlZW4ucGZbZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FpdChkdXJhdGlvbikge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgbnVsbCwgJ3dhaXQnKTtcbiAgICB0d2Vlbi5wZiA9IHR3ZWVuLnByZXYucGY7XG4gICAgdHdlZW4ucHQgPSB0d2Vlbi5wcmV2LnB0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGhlbihjYWxsYmFjaykge1xuICAgIHRoaXMubGFzdC5vbkNvbXBsZXRlID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRUaW1lKHZhbHVlKSB7XG4gICAgdmFyIGRlbHRhID0gdmFsdWUgLSB0aGlzLnRpbWU7XG4gICAgdGhpcy51cGRhdGUoZGVsdGEpO1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgaWYgKGRlbHRhKSB7XG4gICAgICB0aGlzLnRpbWUgKz0gZGVsdGE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmV4dCAmJiBkZWx0YSA8IDApIHtcbiAgICAgIHRoaXMubmV4dC51cGRhdGUoZGVsdGEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRpbWUgIT09IHRoaXMubGFzdEV2YWx1YXRpb25UaW1lKSB7XG4gICAgICB2YXIgdGltZSA9IHRoaXMudGltZTtcbiAgICAgIHZhciBwb3MgPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgdmFyIGR1ciA9IHRoaXMuZHVyYXRpb247XG4gICAgICB2YXIgbGFzdFN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciBzdGF0ZSA9IFR3ZWVuLmdldFN0YXRlKHBvcywgZHVyLCB0aW1lKTtcblxuICAgICAgaWYgKGxhc3RTdGF0ZSA9PT0gVU5ERUZJTkVEKSB7XG4gICAgICAgIGlmICh0aW1lID4gdGhpcy5sYXN0RXZhbHVhdGlvblRpbWUpIHtcbiAgICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFJVTk5JTkcgOlxuICAgICAgICAgICAgICB0aGlzLm5vdGlmeVN0YXJ0KCk7XG4gICAgICAgICAgICAgIHRoaXMucHJvY2Vzcyh0aW1lIC0gcG9zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBRlRFUiA6XG4gICAgICAgICAgICAgIHRoaXMubm90aWZ5U3RhcnQoKTtcbiAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzKGR1cik7XG4gICAgICAgICAgICAgIHRoaXMubm90aWZ5Q29tcGxldGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFJVTk5JTkcgOlxuICAgICAgICAgICAgICB0aGlzLm5vdGlmeUNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgIHRoaXMucHJvY2Vzcyh0aW1lIC0gcG9zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBCRUZPUkUgOlxuICAgICAgICAgICAgICB0aGlzLm5vdGlmeUNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgIHRoaXMucHJvY2VzcygwKTtcbiAgICAgICAgICAgICAgdGhpcy5ub3RpZnlTdGFydCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgY2FzZSBCRUZPUkUgOlxuICAgICAgICAgICAgaWYgKGxhc3RTdGF0ZSAhPT0gQkVGT1JFKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJvY2VzcygwKTtcbiAgICAgICAgICAgICAgdGhpcy5ub3RpZnlTdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgUlVOTklORyA6XG4gICAgICAgICAgICBpZiAobGFzdFN0YXRlID09PSBCRUZPUkUpIHtcbiAgICAgICAgICAgICAgdGhpcy5ub3RpZnlTdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXN0U3RhdGUgPT09IEFGVEVSKSB7XG4gICAgICAgICAgICAgIHRoaXMubm90aWZ5Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvY2Vzcyh0aW1lIC0gcG9zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEFGVEVSIDpcbiAgICAgICAgICAgIGlmIChsYXN0U3RhdGUgIT09IEFGVEVSKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJvY2VzcyhkdXIpO1xuICAgICAgICAgICAgICB0aGlzLm5vdGlmeUNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5sYXN0RXZhbHVhdGlvblRpbWUgPSB0aW1lO1xuICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuXG4gICAgaWYgKHRoaXMubmV4dCAmJiBkZWx0YSA+IDApIHtcbiAgICAgIHRoaXMubmV4dC51cGRhdGUoZGVsdGEpO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3ModGltZSkge1xuICAgIGlmICghdGhpcy5lYXNlIHx8IHRoaXMuZHVyYXRpb24gPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcmF0aW8gPSB0aGlzLmVhc2UodGltZS90aGlzLmR1cmF0aW9uKTtcblxuICAgIGZvciAodmFyIGYgaW4gdGhpcy5wdCkge1xuICAgICAgc3dpdGNoIChyYXRpbykge1xuICAgICAgICBjYXNlIDAgOlxuICAgICAgICAgIHRoaXMub2JqW2ZdID0gdGhpcy5wZltmXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgdGhpcy5vYmpbZl0gPSB0aGlzLnB0W2ZdO1xuICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgdmFyIHZmID0gdGhpcy5wZltmXTtcbiAgICAgICAgICB2YXIgdnQgPSB0aGlzLnB0W2ZdO1xuICAgICAgICAgIHRoaXMub2JqW2ZdID0gdmYgKyAodnQgLSB2ZikqcmF0aW87XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeVN0YXJ0KCkge1xuICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICB0aGlzLmxvZygnc3RhcnQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5Q29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgIHRoaXMubG9nKCdjb21wbGV0ZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBmaW5pc2hlZCgpIHtcbiAgICB2YXIgciA9IHRoaXMuc3RhdGUgPT09IEFGVEVSO1xuICAgIGlmIChyICYmIHRoaXMubmV4dCkge1xuICAgICAgciA9IHRoaXMubmV4dC5maW5pc2hlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMubmV4dCkge1xuICAgICAgdGhpcy5uZXh0LmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgIHRoaXMubG9nKCdESVNQT1NFRCEnKTtcbiAgICB9XG4gICAgdGhpcy5vYmogPSBudWxsO1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLmxhc3QgPSBudWxsO1xuICAgIHRoaXMucGYgPSBudWxsO1xuICAgIHRoaXMucHQgPSBudWxsO1xuICAgIHRoaXMub25TdGFydCA9IG51bGw7XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgfVxuXG4gIGxvZyhtc2cpIHtcbiAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgaWYgKHRoaXMub2JqLm5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tUd2Vlbl0nLCB0aGlzLm9iai5uYW1lLCB0aGlzLm5hbWUsIG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnW1R3ZWVuXScsIHRoaXMubmFtZSwgbXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbVHdlZW5dJywgbXNnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0U3RhdGUocG9zLCBkdXIsIHRpbWUpIHtcbiAgICB2YXIgZW5kID0gcG9zICsgZHVyO1xuICAgIHZhciBzdGF0ZSA9IFVOREVGSU5FRDtcbiAgICBpZiAodGltZSA8IHBvcykge1xuICAgICAgc3RhdGUgPSBCRUZPUkU7XG4gICAgfSBlbHNlIGlmICh0aW1lID49IGVuZCkge1xuICAgICAgc3RhdGUgPSBBRlRFUjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSBSVU5OSU5HO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuVHdlZW4uVU5ERUZJTkVEID0gVU5ERUZJTkVEO1xuVHdlZW4uQkVGT1JFID0gQkVGT1JFO1xuVHdlZW4uUlVOTklORyA9IFJVTk5JTkc7XG5Ud2Vlbi5BRlRFUiA9IEFGVEVSO1xuIiwiaW1wb3J0IFR3ZWVuIGZyb20gJy4vVHdlZW4nO1xuaW1wb3J0IGVhc2VzIGZyb20gJ2Vhc2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW5lciB7XG4gIGNvbnN0cnVjdG9yKGF1dG9VcGRhdGVSYXRlID0gMCkge1xuICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICB0aGlzLnR3ZWVucyA9IFtdO1xuICAgIHRoaXMuX2F1dG9VcGRhdGVSYXRlID0gMDtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5hdXRvVXBkYXRlUmF0ZSA9IGF1dG9VcGRhdGVSYXRlO1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICB0aGlzLmF1dG9VcGRhdGVSYXRlID0gMDtcbiAgICB2YXIgaSA9IHRoaXMudHdlZW5zLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgdCA9IHRoaXMudHdlZW5zW2ldO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdC5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudHdlZW5zID0gbnVsbDtcbiAgfVxuXG4gIGdldCBhdXRvVXBkYXRlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1VwZGF0ZVJhdGU7XG4gIH1cblxuICBzZXQgYXV0b1VwZGF0ZVJhdGUodmFsdWUpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICBpZiAodmFsdWUgPD0gMCkge1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgdGhpcy5fYXV0b1VwZGF0ZVJhdGUgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hdXRvVXBkYXRlUmF0ZSA9IHZhbHVlO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHRpbWUgPSBzZWxmLmdldFRpbWUoKTtcbiAgICAgIHNlbGYuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gc2VsZi5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gdCAtIHRpbWU7XG4gICAgICAgIHRpbWUgPSB0O1xuICAgICAgICBzZWxmLnVwZGF0ZShkKTtcbiAgICAgIH0sIHZhbHVlKjEwMDApO1xuICAgIH1cbiAgfVxuXG4gIGFkZChvYmosIGRlYnVnID0gZmFsc2UsIG5hbWUgPSAnJykge1xuICAgIHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmosIGRlYnVnLCBuYW1lKTtcbiAgICB0aGlzLnR3ZWVucy5wdXNoKHR3ZWVuKTtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICByZW1vdmUob2JqKSB7XG4gICAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICAgIGlmICh0Lm9iaiA9PT0gb2JqKSB7XG4gICAgICAgIHRoaXMudHdlZW5zLnNwbGljZShpLCAxKTtcbiAgICAgICAgdC5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIGlmICh0LmZpbmlzaGVkKCkpIHtcbiAgICAgICAgICB0aGlzLnR3ZWVucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgdC5kaXNwb3NlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdC51cGRhdGUoZGVsdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkvMTAwMDtcbiAgfVxufVxuXG5Ud2VlbmVyLlR3ZWVuID0gVHdlZW47XG5Ud2VlbmVyLmVhc2UgPSBlYXNlcztcbiIsImltcG9ydCBUd2VlbmVyIGZyb20gJy4vVHdlZW5lcic7XG5cbmlmICh0eXBlb2Yod2luZG93KSA9PT0gXCJvYmplY3RcIikge1xuICB3aW5kb3cuVHdlZW5lciA9IFR3ZWVuZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5lcjtcbiJdfQ==
