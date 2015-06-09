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
    _classCallCheck(this, Tween);

    this.name = '';
    this.debug = false;
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
  }

  _createClass(Tween, [{
    key: '_getTween',
    value: function _getTween(obj, duration, ease) {
      var last = this.last;
      var tween = new Tween(obj);
      tween.debug = this.debug;
      tween.position = last.position + last.duration;
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
      var tween = this._getTween(this.obj, duration, ease);
      tween.name = 'from';
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
      var tween = this._getTween(this.obj, duration, ease);
      tween.name = 'to';
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
      var tween = this._getTween(this.obj, duration, null);
      tween.name = 'wait';
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
        this.log('disposed!');
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
      if (this.obj.name && this.name) {
        console.log('[Tween]', this.obj.name, this.name, msg);
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
          this.disposeTween(t, i);
        }
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      var i = this.tweens.length;
      while (i--) {
        var t = this.tweens[i];
        t.update(delta);
        if (t.finished()) {
          this.disposeTween(t, i);
        }
      }
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      clearInterval(this._interval);
      var i = this.tweens.length;
      while (i--) {
        var t = this.tweens[i];
        this.disposeTween(t, i);
      }
      this.autoUpdateRate = 0;
      this.tweens = null;
    }
  }, {
    key: 'disposeTween',
    value: function disposeTween(tween, index) {
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9iYWNrLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2UtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2JvdW5jZS1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2Utb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY2lyYy1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY3ViaWMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2VsYXN0aWMtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvZXhwby1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzZXMvbGluZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhZC1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhcnQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWludC1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvc2luZS1vdXQuanMiLCIvaG9tZS9tYXVyby9wcm9qZWN0cy90d2VlbmVyL3NvdXJjZS9Ud2Vlbi5qcyIsIi9ob21lL21hdXJvL3Byb2plY3RzL3R3ZWVuZXIvc291cmNlL1R3ZWVuZXIuanMiLCIvaG9tZS9tYXVyby9wcm9qZWN0cy90d2VlbmVyL3NvdXJjZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O3FCQ0pxQixPQUFPOztBQUU1QixJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDcEIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNsQixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7O0lBRUssS0FB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TUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO09BQ3pCO0FBQ0QsVUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDeEIsVUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7S0FDcEI7OztXQUVXLHNCQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDekIsVUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQ3ZCLGFBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUNuQztBQUNELFVBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QixXQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDakI7OztXQUVNLG1CQUFHO0FBQ1IsYUFBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFDLElBQUksQ0FBQztLQUNsQzs7O1NBaEZrQixPQUFPOzs7cUJBQVAsT0FBTzs7QUFtRjVCLE9BQU8sQ0FBQyxLQUFLLHFCQUFRLENBQUM7QUFDdEIsT0FBTyxDQUFDLElBQUkscUJBQVEsQ0FBQzs7Ozs7Ozs7dUJDdkZELFdBQVc7Ozs7QUFFL0IsSUFBSSxPQUFPLE1BQU0sQUFBQyxLQUFLLFFBQVEsRUFBRTtBQUMvQixRQUFNLENBQUMsT0FBTyx1QkFBVSxDQUFDO0NBQzFCOztBQUVELE1BQU0sQ0FBQyxPQUFPLHVCQUFVLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gYmFja0luT3V0KHQpIHtcbiAgdmFyIHMgPSAxLjcwMTU4ICogMS41MjVcbiAgaWYgKCh0ICo9IDIpIDwgMSlcbiAgICByZXR1cm4gMC41ICogKHQgKiB0ICogKChzICsgMSkgKiB0IC0gcykpXG4gIHJldHVybiAwLjUgKiAoKHQgLT0gMikgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAyKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhY2tJbk91dCIsImZ1bmN0aW9uIGJhY2tJbih0KSB7XG4gIHZhciBzID0gMS43MDE1OFxuICByZXR1cm4gdCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhY2tJbiIsImZ1bmN0aW9uIGJhY2tPdXQodCkge1xuICB2YXIgcyA9IDEuNzAxNThcbiAgcmV0dXJuIC0tdCAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrT3V0IiwidmFyIGJvdW5jZU91dCA9IHJlcXVpcmUoJy4vYm91bmNlLW91dCcpXG5cbmZ1bmN0aW9uIGJvdW5jZUluT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/IDAuNSAqICgxLjAgLSBib3VuY2VPdXQoMS4wIC0gdCAqIDIuMCkpXG4gICAgOiAwLjUgKiBib3VuY2VPdXQodCAqIDIuMCAtIDEuMCkgKyAwLjVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBib3VuY2VJbk91dCIsInZhciBib3VuY2VPdXQgPSByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKVxuXG5mdW5jdGlvbiBib3VuY2VJbih0KSB7XG4gIHJldHVybiAxLjAgLSBib3VuY2VPdXQoMS4wIC0gdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBib3VuY2VJbiIsImZ1bmN0aW9uIGJvdW5jZU91dCh0KSB7XG4gIHZhciBhID0gNC4wIC8gMTEuMFxuICB2YXIgYiA9IDguMCAvIDExLjBcbiAgdmFyIGMgPSA5LjAgLyAxMC4wXG5cbiAgdmFyIGNhID0gNDM1Ni4wIC8gMzYxLjBcbiAgdmFyIGNiID0gMzU0NDIuMCAvIDE4MDUuMFxuICB2YXIgY2MgPSAxNjA2MS4wIC8gMTgwNS4wXG5cbiAgdmFyIHQyID0gdCAqIHRcblxuICByZXR1cm4gdCA8IGFcbiAgICA/IDcuNTYyNSAqIHQyXG4gICAgOiB0IDwgYlxuICAgICAgPyA5LjA3NSAqIHQyIC0gOS45ICogdCArIDMuNFxuICAgICAgOiB0IDwgY1xuICAgICAgICA/IGNhICogdDIgLSBjYiAqIHQgKyBjY1xuICAgICAgICA6IDEwLjggKiB0ICogdCAtIDIwLjUyICogdCArIDEwLjcyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlT3V0IiwiZnVuY3Rpb24gY2lyY0luT3V0KHQpIHtcbiAgaWYgKCh0ICo9IDIpIDwgMSkgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKVxuICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2lyY0luT3V0IiwiZnVuY3Rpb24gY2lyY0luKHQpIHtcbiAgcmV0dXJuIDEuMCAtIE1hdGguc3FydCgxLjAgLSB0ICogdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaXJjSW4iLCJmdW5jdGlvbiBjaXJjT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gKCAtLXQgKiB0ICkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2lyY091dCIsImZ1bmN0aW9uIGN1YmljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gNC4wICogdCAqIHQgKiB0XG4gICAgOiAwLjUgKiBNYXRoLnBvdygyLjAgKiB0IC0gMi4wLCAzLjApICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViaWNJbk91dCIsImZ1bmN0aW9uIGN1YmljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViaWNJbiIsImZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgdmFyIGYgPSB0IC0gMS4wXG4gIHJldHVybiBmICogZiAqIGYgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdWJpY091dCIsImZ1bmN0aW9uIGVsYXN0aWNJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyAwLjUgKiBNYXRoLnNpbigrMTMuMCAqIE1hdGguUEkvMiAqIDIuMCAqIHQpICogTWF0aC5wb3coMi4wLCAxMC4wICogKDIuMCAqIHQgLSAxLjApKVxuICAgIDogMC41ICogTWF0aC5zaW4oLTEzLjAgKiBNYXRoLlBJLzIgKiAoKDIuMCAqIHQgLSAxLjApICsgMS4wKSkgKiBNYXRoLnBvdygyLjAsIC0xMC4wICogKDIuMCAqIHQgLSAxLjApKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsYXN0aWNJbk91dCIsImZ1bmN0aW9uIGVsYXN0aWNJbih0KSB7XG4gIHJldHVybiBNYXRoLnNpbigxMy4wICogdCAqIE1hdGguUEkvMikgKiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxhc3RpY0luIiwiZnVuY3Rpb24gZWxhc3RpY091dCh0KSB7XG4gIHJldHVybiBNYXRoLnNpbigtMTMuMCAqICh0ICsgMS4wKSAqIE1hdGguUEkvMikgKiBNYXRoLnBvdygyLjAsIC0xMC4wICogdCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbGFzdGljT3V0IiwiZnVuY3Rpb24gZXhwb0luT3V0KHQpIHtcbiAgcmV0dXJuICh0ID09PSAwLjAgfHwgdCA9PT0gMS4wKVxuICAgID8gdFxuICAgIDogdCA8IDAuNVxuICAgICAgPyArMC41ICogTWF0aC5wb3coMi4wLCAoMjAuMCAqIHQpIC0gMTAuMClcbiAgICAgIDogLTAuNSAqIE1hdGgucG93KDIuMCwgMTAuMCAtICh0ICogMjAuMCkpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb0luT3V0IiwiZnVuY3Rpb24gZXhwb0luKHQpIHtcbiAgcmV0dXJuIHQgPT09IDAuMCA/IHQgOiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb0luIiwiZnVuY3Rpb24gZXhwb091dCh0KSB7XG4gIHJldHVybiB0ID09PSAxLjAgPyB0IDogMS4wIC0gTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb091dCIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHQnYmFja0luT3V0JzogcmVxdWlyZSgnLi9iYWNrLWluLW91dCcpLFxuXHQnYmFja0luJzogcmVxdWlyZSgnLi9iYWNrLWluJyksXG5cdCdiYWNrT3V0JzogcmVxdWlyZSgnLi9iYWNrLW91dCcpLFxuXHQnYm91bmNlSW5PdXQnOiByZXF1aXJlKCcuL2JvdW5jZS1pbi1vdXQnKSxcblx0J2JvdW5jZUluJzogcmVxdWlyZSgnLi9ib3VuY2UtaW4nKSxcblx0J2JvdW5jZU91dCc6IHJlcXVpcmUoJy4vYm91bmNlLW91dCcpLFxuXHQnY2lyY0luT3V0JzogcmVxdWlyZSgnLi9jaXJjLWluLW91dCcpLFxuXHQnY2lyY0luJzogcmVxdWlyZSgnLi9jaXJjLWluJyksXG5cdCdjaXJjT3V0JzogcmVxdWlyZSgnLi9jaXJjLW91dCcpLFxuXHQnY3ViaWNJbk91dCc6IHJlcXVpcmUoJy4vY3ViaWMtaW4tb3V0JyksXG5cdCdjdWJpY0luJzogcmVxdWlyZSgnLi9jdWJpYy1pbicpLFxuXHQnY3ViaWNPdXQnOiByZXF1aXJlKCcuL2N1YmljLW91dCcpLFxuXHQnZWxhc3RpY0luT3V0JzogcmVxdWlyZSgnLi9lbGFzdGljLWluLW91dCcpLFxuXHQnZWxhc3RpY0luJzogcmVxdWlyZSgnLi9lbGFzdGljLWluJyksXG5cdCdlbGFzdGljT3V0JzogcmVxdWlyZSgnLi9lbGFzdGljLW91dCcpLFxuXHQnZXhwb0luT3V0JzogcmVxdWlyZSgnLi9leHBvLWluLW91dCcpLFxuXHQnZXhwb0luJzogcmVxdWlyZSgnLi9leHBvLWluJyksXG5cdCdleHBvT3V0JzogcmVxdWlyZSgnLi9leHBvLW91dCcpLFxuXHQnbGluZWFyJzogcmVxdWlyZSgnLi9saW5lYXInKSxcblx0J3F1YWRJbk91dCc6IHJlcXVpcmUoJy4vcXVhZC1pbi1vdXQnKSxcblx0J3F1YWRJbic6IHJlcXVpcmUoJy4vcXVhZC1pbicpLFxuXHQncXVhZE91dCc6IHJlcXVpcmUoJy4vcXVhZC1vdXQnKSxcblx0J3F1YXJ0SW5PdXQnOiByZXF1aXJlKCcuL3F1YXJ0LWluLW91dCcpLFxuXHQncXVhcnRJbic6IHJlcXVpcmUoJy4vcXVhcnQtaW4nKSxcblx0J3F1YXJ0T3V0JzogcmVxdWlyZSgnLi9xdWFydC1vdXQnKSxcblx0J3F1aW50SW5PdXQnOiByZXF1aXJlKCcuL3F1aW50LWluLW91dCcpLFxuXHQncXVpbnRJbic6IHJlcXVpcmUoJy4vcXVpbnQtaW4nKSxcblx0J3F1aW50T3V0JzogcmVxdWlyZSgnLi9xdWludC1vdXQnKSxcblx0J3NpbmVJbk91dCc6IHJlcXVpcmUoJy4vc2luZS1pbi1vdXQnKSxcblx0J3NpbmVJbic6IHJlcXVpcmUoJy4vc2luZS1pbicpLFxuXHQnc2luZU91dCc6IHJlcXVpcmUoJy4vc2luZS1vdXQnKVxufSIsImZ1bmN0aW9uIGxpbmVhcih0KSB7XG4gIHJldHVybiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGluZWFyIiwiZnVuY3Rpb24gcXVhZEluT3V0KHQpIHtcbiAgICB0IC89IDAuNVxuICAgIGlmICh0IDwgMSkgcmV0dXJuIDAuNSp0KnRcbiAgICB0LS1cbiAgICByZXR1cm4gLTAuNSAqICh0Kih0LTIpIC0gMSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFkSW5PdXQiLCJmdW5jdGlvbiBxdWFkSW4odCkge1xuICByZXR1cm4gdCAqIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFkSW4iLCJmdW5jdGlvbiBxdWFkT3V0KHQpIHtcbiAgcmV0dXJuIC10ICogKHQgLSAyLjApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZE91dCIsImZ1bmN0aW9uIHF1YXJ0aWNJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyArOC4wICogTWF0aC5wb3codCwgNC4wKVxuICAgIDogLTguMCAqIE1hdGgucG93KHQgLSAxLjAsIDQuMCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljSW5PdXQiLCJmdW5jdGlvbiBxdWFydGljSW4odCkge1xuICByZXR1cm4gTWF0aC5wb3codCwgNC4wKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YXJ0aWNJbiIsImZ1bmN0aW9uIHF1YXJ0aWNPdXQodCkge1xuICByZXR1cm4gTWF0aC5wb3codCAtIDEuMCwgMy4wKSAqICgxLjAgLSB0KSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YXJ0aWNPdXQiLCJmdW5jdGlvbiBxaW50aWNJbk91dCh0KSB7XG4gICAgaWYgKCAoIHQgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiB0ICogdCAqIHQgKiB0ICogdFxuICAgIHJldHVybiAwLjUgKiAoICggdCAtPSAyICkgKiB0ICogdCAqIHQgKiB0ICsgMiApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcWludGljSW5PdXQiLCJmdW5jdGlvbiBxaW50aWNJbih0KSB7XG4gIHJldHVybiB0ICogdCAqIHQgKiB0ICogdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY0luIiwiZnVuY3Rpb24gcWludGljT3V0KHQpIHtcbiAgcmV0dXJuIC0tdCAqIHQgKiB0ICogdCAqIHQgKyAxXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcWludGljT3V0IiwiZnVuY3Rpb24gc2luZUluT3V0KHQpIHtcbiAgcmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSp0KSAtIDEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2luZUluT3V0IiwiZnVuY3Rpb24gc2luZUluKHQpIHtcbiAgcmV0dXJuIDEgLSBNYXRoLmNvcyggdCAqIE1hdGguUEkgLyAyIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lSW4iLCJmdW5jdGlvbiBzaW5lT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKHQgKiBNYXRoLlBJLzIpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2luZU91dCIsImltcG9ydCB7bGluZWFyfSBmcm9tICdlYXNlcyc7XG5cbmNvbnN0IFVOREVGSU5FRCA9IDA7XG5jb25zdCBCRUZPUkUgPSAxO1xuY29uc3QgUlVOTklORyA9IDI7XG5jb25zdCBBRlRFUiA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuIHtcbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xuICAgIHRoaXMub2JqID0gb2JqO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IDA7XG5cbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgdGhpcy5sYXN0ID0gdGhpcztcblxuICAgIHRoaXMudGltZSA9IDA7XG4gICAgdGhpcy5sYXN0RXZhbHVhdGlvblRpbWUgPSAtMTtcblxuICAgIHRoaXMucGYgPSBudWxsO1xuICAgIHRoaXMucHQgPSBudWxsO1xuICAgIHRoaXMuZWFzZSA9IGxpbmVhcjtcblxuICAgIHRoaXMub25TdGFydCA9IG51bGw7XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgfVxuXG4gIF9nZXRUd2VlbihvYmosIGR1cmF0aW9uLCBlYXNlKSB7XG4gICAgdmFyIGxhc3QgPSB0aGlzLmxhc3Q7XG4gICAgdmFyIHR3ZWVuID0gbmV3IFR3ZWVuKG9iaik7XG4gICAgdHdlZW4uZGVidWcgPSB0aGlzLmRlYnVnO1xuICAgIHR3ZWVuLnBvc2l0aW9uID0gbGFzdC5wb3NpdGlvbiArIGxhc3QuZHVyYXRpb247XG4gICAgdHdlZW4uZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAwO1xuICAgIHR3ZWVuLnN0YXRlID0gMDtcbiAgICB0d2Vlbi5lYXNlID0gZWFzZTtcbiAgICB0d2Vlbi5wcmV2ID0gbGFzdDtcbiAgICBsYXN0Lm5leHQgPSB0d2VlbjtcbiAgICB0aGlzLmxhc3QgPSB0d2VlbjtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICBfZ2V0TGFzdFBhcmFtKGZpZWxkKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMubGFzdC5wcmV2O1xuICAgIHdoaWxlIChyZWYpIHtcbiAgICAgIGlmIChyZWYub2JqID09PSB0aGlzLm9iaiAmJiByZWYucHQgJiYgcmVmLnB0W2ZpZWxkXSAhPT0gdW5kZWZpbmVkICYmIHJlZi5wdFtmaWVsZF0gIT09IG51bGwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWYgPSByZWYucHJldjtcbiAgICB9XG4gICAgdmFyIHYgPSByZWYgPyByZWYucHRbZmllbGRdIDogdGhpcy5vYmpbZmllbGRdO1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgYWRkKG9iaikge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKG9iaiwgMCwgbGluZWFyKTtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICBmcm9tKHByb3BzLCBkdXJhdGlvbiwgZWFzZSkge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgZWFzZSk7XG4gICAgdHdlZW4ubmFtZSA9ICdmcm9tJztcbiAgICB0d2Vlbi5wZiA9IHByb3BzO1xuICAgIHR3ZWVuLnB0ID0ge307XG4gICAgZm9yICh2YXIgZiBpbiBwcm9wcykge1xuICAgICAgdHdlZW4ucHRbZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG8ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG4gICAgdmFyIHR3ZWVuID0gdGhpcy5fZ2V0VHdlZW4odGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlKTtcbiAgICB0d2Vlbi5uYW1lID0gJ3RvJztcbiAgICB0d2Vlbi5wdCA9IHByb3BzO1xuICAgIHR3ZWVuLnBmID0ge307XG4gICAgZm9yICh2YXIgZiBpbiBwcm9wcykge1xuICAgICAgdHdlZW4ucGZbZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FpdChkdXJhdGlvbikge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgbnVsbCk7XG4gICAgdHdlZW4ubmFtZSA9ICd3YWl0JztcbiAgICB0d2Vlbi5wZiA9IHR3ZWVuLnByZXYucGY7XG4gICAgdHdlZW4ucHQgPSB0d2Vlbi5wcmV2LnB0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGhlbihjYWxsYmFjaykge1xuICAgIHRoaXMubGFzdC5vbkNvbXBsZXRlID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRUaW1lKHZhbHVlKSB7XG4gICAgdmFyIGRlbHRhID0gdmFsdWUgLSB0aGlzLnRpbWU7XG4gICAgdGhpcy51cGRhdGUoZGVsdGEpO1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgaWYgKGRlbHRhKSB7XG4gICAgICB0aGlzLnRpbWUgKz0gZGVsdGE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmV4dCAmJiBkZWx0YSA8IDApIHtcbiAgICAgIHRoaXMubmV4dC51cGRhdGUoZGVsdGEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRpbWUgIT09IHRoaXMubGFzdEV2YWx1YXRpb25UaW1lKSB7XG4gICAgICB2YXIgdGltZSA9IHRoaXMudGltZTtcbiAgICAgIHZhciBwb3MgPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgdmFyIGR1ciA9IHRoaXMuZHVyYXRpb247XG4gICAgICB2YXIgbGFzdFN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciBzdGF0ZSA9IFR3ZWVuLmdldFN0YXRlKHBvcywgZHVyLCB0aW1lKTtcblxuICAgICAgaWYgKGxhc3RTdGF0ZSA9PT0gVU5ERUZJTkVEKSB7XG4gICAgICAgIGlmICh0aW1lID4gdGhpcy5sYXN0RXZhbHVhdGlvblRpbWUpIHtcbiAgICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFJVTk5JTkcgOlxuICAgICAgICAgICAgICB0aGlzLm5vdGlmeVN0YXJ0KCk7XG4gICAgICAgICAgICAgIHRoaXMucHJvY2Vzcyh0aW1lIC0gcG9zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBRlRFUiA6XG4gICAgICAgICAgICAgIHRoaXMubm90aWZ5U3RhcnQoKTtcbiAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzKGR1cik7XG4gICAgICAgICAgICAgIHRoaXMubm90aWZ5Q29tcGxldGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFJVTk5JTkcgOlxuICAgICAgICAgICAgICB0aGlzLm5vdGlmeUNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgIHRoaXMucHJvY2Vzcyh0aW1lIC0gcG9zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBCRUZPUkUgOlxuICAgICAgICAgICAgICB0aGlzLm5vdGlmeUNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgIHRoaXMucHJvY2VzcygwKTtcbiAgICAgICAgICAgICAgdGhpcy5ub3RpZnlTdGFydCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgY2FzZSBCRUZPUkUgOlxuICAgICAgICAgICAgaWYgKGxhc3RTdGF0ZSAhPT0gQkVGT1JFKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJvY2VzcygwKTtcbiAgICAgICAgICAgICAgdGhpcy5ub3RpZnlTdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgUlVOTklORyA6XG4gICAgICAgICAgICBpZiAobGFzdFN0YXRlID09PSBCRUZPUkUpIHtcbiAgICAgICAgICAgICAgdGhpcy5ub3RpZnlTdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXN0U3RhdGUgPT09IEFGVEVSKSB7XG4gICAgICAgICAgICAgIHRoaXMubm90aWZ5Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvY2Vzcyh0aW1lIC0gcG9zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEFGVEVSIDpcbiAgICAgICAgICAgIGlmIChsYXN0U3RhdGUgIT09IEFGVEVSKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJvY2VzcyhkdXIpO1xuICAgICAgICAgICAgICB0aGlzLm5vdGlmeUNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5sYXN0RXZhbHVhdGlvblRpbWUgPSB0aW1lO1xuICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuXG4gICAgaWYgKHRoaXMubmV4dCAmJiBkZWx0YSA+IDApIHtcbiAgICAgIHRoaXMubmV4dC51cGRhdGUoZGVsdGEpO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3ModGltZSkge1xuICAgIGlmICghdGhpcy5lYXNlIHx8IHRoaXMuZHVyYXRpb24gPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcmF0aW8gPSB0aGlzLmVhc2UodGltZS90aGlzLmR1cmF0aW9uKTtcblxuICAgIGZvciAodmFyIGYgaW4gdGhpcy5wdCkge1xuICAgICAgc3dpdGNoIChyYXRpbykge1xuICAgICAgICBjYXNlIDAgOlxuICAgICAgICAgIHRoaXMub2JqW2ZdID0gdGhpcy5wZltmXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgdGhpcy5vYmpbZl0gPSB0aGlzLnB0W2ZdO1xuICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgdmFyIHZmID0gdGhpcy5wZltmXTtcbiAgICAgICAgICB2YXIgdnQgPSB0aGlzLnB0W2ZdO1xuICAgICAgICAgIHRoaXMub2JqW2ZdID0gdmYgKyAodnQgLSB2ZikqcmF0aW87XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeVN0YXJ0KCkge1xuICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICB0aGlzLmxvZygnc3RhcnQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5Q29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgIHRoaXMubG9nKCdjb21wbGV0ZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBmaW5pc2hlZCgpIHtcbiAgICB2YXIgciA9IHRoaXMuc3RhdGUgPT09IEFGVEVSO1xuICAgIGlmIChyICYmIHRoaXMubmV4dCkge1xuICAgICAgciA9IHRoaXMubmV4dC5maW5pc2hlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMubmV4dCkge1xuICAgICAgdGhpcy5uZXh0LmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgIHRoaXMubG9nKCdkaXNwb3NlZCEnKTtcbiAgICB9XG4gICAgdGhpcy5vYmogPSBudWxsXG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubGFzdCA9IG51bGw7XG4gICAgdGhpcy5wZiA9IG51bGw7XG4gICAgdGhpcy5wdCA9IG51bGw7XG4gICAgdGhpcy5vblN0YXJ0ID0gbnVsbDtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xuICB9XG5cbiAgbG9nKG1zZykge1xuICAgIGlmICh0aGlzLm9iai5uYW1lICYmIHRoaXMubmFtZSkge1xuICAgICAgY29uc29sZS5sb2coJ1tUd2Vlbl0nLCB0aGlzLm9iai5uYW1lLCB0aGlzLm5hbWUsIG1zZyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldFN0YXRlKHBvcywgZHVyLCB0aW1lKSB7XG4gICAgdmFyIGVuZCA9IHBvcyArIGR1cjtcbiAgICB2YXIgc3RhdGUgPSBVTkRFRklORUQ7XG4gICAgaWYgKHRpbWUgPCBwb3MpIHtcbiAgICAgIHN0YXRlID0gQkVGT1JFO1xuICAgIH0gZWxzZSBpZiAodGltZSA+PSBlbmQpIHtcbiAgICAgIHN0YXRlID0gQUZURVI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlID0gUlVOTklORztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblR3ZWVuLlVOREVGSU5FRCA9IFVOREVGSU5FRDtcblR3ZWVuLkJFRk9SRSA9IEJFRk9SRTtcblR3ZWVuLlJVTk5JTkcgPSBSVU5OSU5HO1xuVHdlZW4uQUZURVIgPSBBRlRFUjtcbiIsImltcG9ydCBUd2VlbiBmcm9tICcuL1R3ZWVuJztcbmltcG9ydCBlYXNlcyBmcm9tICdlYXNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuZXIge1xuICBjb25zdHJ1Y3RvcihhdXRvVXBkYXRlUmF0ZSA9IDApIHtcbiAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgdGhpcy50d2VlbnMgPSBbXTtcbiAgICB0aGlzLl9hdXRvVXBkYXRlUmF0ZSA9IDA7XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMuYXV0b1VwZGF0ZVJhdGUgPSBhdXRvVXBkYXRlUmF0ZTtcbiAgfVxuXG4gIGdldCBhdXRvVXBkYXRlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1VwZGF0ZVJhdGU7XG4gIH1cblxuICBzZXQgYXV0b1VwZGF0ZVJhdGUodmFsdWUpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICBpZiAodmFsdWUgPD0gMCkge1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgdGhpcy5fYXV0b1VwZGF0ZVJhdGUgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hdXRvVXBkYXRlUmF0ZSA9IHZhbHVlO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHRpbWUgPSBzZWxmLmdldFRpbWUoKTtcbiAgICAgIHNlbGYuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gc2VsZi5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gdCAtIHRpbWU7XG4gICAgICAgIHRpbWUgPSB0O1xuICAgICAgICBzZWxmLnVwZGF0ZShkKTtcbiAgICAgIH0sIHZhbHVlKjEwMDApO1xuICAgIH1cbiAgfVxuXG4gIGFkZChvYmopIHtcbiAgICB2YXIgdHdlZW4gPSBuZXcgVHdlZW4ob2JqKTtcbiAgICB0d2Vlbi5kZWJ1ZyA9IHRoaXMuZGVidWc7XG4gICAgdGhpcy50d2VlbnMucHVzaCh0d2Vlbik7XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9XG5cbiAgcmVtb3ZlKG9iaikge1xuICAgIHZhciBpID0gdGhpcy50d2VlbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciB0ID0gdGhpcy50d2VlbnNbaV07XG4gICAgICBpZiAodC5vYmogPT09IG9iaikge1xuICAgICAgICB0aGlzLmRpc3Bvc2VUd2Vlbih0LCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUoZGVsdGEpIHtcbiAgICB2YXIgaSA9IHRoaXMudHdlZW5zLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgdCA9IHRoaXMudHdlZW5zW2ldO1xuICAgICAgdC51cGRhdGUoZGVsdGEpO1xuICAgICAgaWYgKHQuZmluaXNoZWQoKSkge1xuICAgICAgICB0aGlzLmRpc3Bvc2VUd2Vlbih0LCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgIHZhciBpID0gdGhpcy50d2VlbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciB0ID0gdGhpcy50d2VlbnNbaV07XG4gICAgICB0aGlzLmRpc3Bvc2VUd2Vlbih0LCBpKTtcbiAgICB9XG4gICAgdGhpcy5hdXRvVXBkYXRlUmF0ZSA9IDA7XG4gICAgdGhpcy50d2VlbnMgPSBudWxsO1xuICB9XG5cbiAgZGlzcG9zZVR3ZWVuKHR3ZWVuLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbmRleCA9IHRoaXMudHdlZW4uaW5kZXhPZih0d2Vlbik7XG4gICAgfVxuICAgIHRoaXMudHdlZW5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgdHdlZW4uZGlzcG9zZSgpO1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkvMTAwMDtcbiAgfVxufVxuXG5Ud2VlbmVyLlR3ZWVuID0gVHdlZW47XG5Ud2VlbmVyLmVhc2UgPSBlYXNlcztcbiIsImltcG9ydCBUd2VlbmVyIGZyb20gJy4vVHdlZW5lcic7XG5cbmlmICh0eXBlb2Yod2luZG93KSA9PT0gXCJvYmplY3RcIikge1xuICB3aW5kb3cuVHdlZW5lciA9IFR3ZWVuZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5lcjtcbiJdfQ==
