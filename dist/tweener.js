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
    var debug = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var name = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

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

    this.propertiesFrom = null;
    this.propertiesTo = null;
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
      var name = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

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
        if (ref.obj === this.obj && ref.propertiesTo && ref.propertiesTo[field] !== undefined && ref.propertiesTo[field] !== null) {
          break;
        }
        ref = ref.prev;
      }
      var v = ref ? ref.propertiesTo[field] : this.obj[field];
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
      tween.propertiesFrom = props;
      tween.propertiesTo = {};
      for (var f in props) {
        tween.propertiesTo[f] = this._getLastParam(f);
      }
      return this;
    }
  }, {
    key: 'to',
    value: function to(props, duration, ease) {
      var tween = this._getTween(this.obj, duration, ease, 'to');
      tween.propertiesTo = props;
      tween.propertiesFrom = {};
      for (var f in props) {
        tween.propertiesFrom[f] = this._getLastParam(f);
      }
      return this;
    }
  }, {
    key: 'wait',
    value: function wait(duration) {
      var tween = this._getTween(this.obj, duration, null, 'wait');
      tween.propertiesFrom = tween.prev.propertiesFrom;
      tween.propertiesTo = tween.prev.propertiesTo;
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

      for (var f in this.propertiesTo) {
        switch (ratio) {
          case 0:
            this.obj[f] = this.propertiesFrom[f];
            break;
          case 1:
            this.obj[f] = this.propertiesTo[f];
            break;
          default:
            var vf = this.propertiesFrom[f];
            var vt = this.propertiesTo[f];
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
      this.propertiesFrom = null;
      this.propertiesTo = null;
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
    var autoUpdateRate = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

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
    key: 'add',
    value: function add(obj) {
      var debug = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
      var name = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

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
  }, {
    key: 'autoUpdateRate',
    get: function get() {
      return this._autoUpdateRate;
    },
    set: function set(value) {
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

var _Tweener = require('./Tweener');

var _Tweener2 = _interopRequireDefault(_Tweener);

if (typeof window === "object") {
  window.Tweener = _Tweener2["default"];
}

module.exports = _Tweener2["default"];

},{"./Tweener":34}]},{},[35])(35)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2JhY2staW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2JhY2staW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYm91bmNlLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2UtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYm91bmNlLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9jaXJjLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9jaXJjLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9jdWJpYy1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9jdWJpYy1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvZWxhc3RpYy1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvZWxhc3RpYy1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9leHBvLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9leHBvLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2xpbmVhci5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWFkLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWFkLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWFydC1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWFydC1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1aW50LWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1aW50LW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9zaW5lLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9zaW5lLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtb3V0LmpzIiwiL1VzZXJzL2VuZGVsL1Byb2plY3RzL3R3ZWVuZXIvc291cmNlL1R3ZWVuLmpzIiwiL1VzZXJzL2VuZGVsL1Byb2plY3RzL3R3ZWVuZXIvc291cmNlL1R3ZWVuZXIuanMiLCIvVXNlcnMvZW5kZWwvUHJvamVjdHMvdHdlZW5lci9zb3VyY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztxQkNKcUIsT0FBTzs7QUFFNUIsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNqQixJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7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QU8sdUJBQVUsQ0FBQztDQUMxQjs7QUFFRCxNQUFNLENBQUMsT0FBTyx1QkFBVSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIGJhY2tJbk91dCh0KSB7XG4gIHZhciBzID0gMS43MDE1OCAqIDEuNTI1XG4gIGlmICgodCAqPSAyKSA8IDEpXG4gICAgcmV0dXJuIDAuNSAqICh0ICogdCAqICgocyArIDEpICogdCAtIHMpKVxuICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqICgocyArIDEpICogdCArIHMpICsgMilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrSW5PdXQiLCJmdW5jdGlvbiBiYWNrSW4odCkge1xuICB2YXIgcyA9IDEuNzAxNThcbiAgcmV0dXJuIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrSW4iLCJmdW5jdGlvbiBiYWNrT3V0KHQpIHtcbiAgdmFyIHMgPSAxLjcwMTU4XG4gIHJldHVybiAtLXQgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFja091dCIsInZhciBib3VuY2VPdXQgPSByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKVxuXG5mdW5jdGlvbiBib3VuY2VJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyAwLjUgKiAoMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQgKiAyLjApKVxuICAgIDogMC41ICogYm91bmNlT3V0KHQgKiAyLjAgLSAxLjApICsgMC41XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlSW5PdXQiLCJ2YXIgYm91bmNlT3V0ID0gcmVxdWlyZSgnLi9ib3VuY2Utb3V0JylcblxuZnVuY3Rpb24gYm91bmNlSW4odCkge1xuICByZXR1cm4gMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlSW4iLCJmdW5jdGlvbiBib3VuY2VPdXQodCkge1xuICB2YXIgYSA9IDQuMCAvIDExLjBcbiAgdmFyIGIgPSA4LjAgLyAxMS4wXG4gIHZhciBjID0gOS4wIC8gMTAuMFxuXG4gIHZhciBjYSA9IDQzNTYuMCAvIDM2MS4wXG4gIHZhciBjYiA9IDM1NDQyLjAgLyAxODA1LjBcbiAgdmFyIGNjID0gMTYwNjEuMCAvIDE4MDUuMFxuXG4gIHZhciB0MiA9IHQgKiB0XG5cbiAgcmV0dXJuIHQgPCBhXG4gICAgPyA3LjU2MjUgKiB0MlxuICAgIDogdCA8IGJcbiAgICAgID8gOS4wNzUgKiB0MiAtIDkuOSAqIHQgKyAzLjRcbiAgICAgIDogdCA8IGNcbiAgICAgICAgPyBjYSAqIHQyIC0gY2IgKiB0ICsgY2NcbiAgICAgICAgOiAxMC44ICogdCAqIHQgLSAyMC41MiAqIHQgKyAxMC43MlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5jZU91dCIsImZ1bmN0aW9uIGNpcmNJbk91dCh0KSB7XG4gIGlmICgodCAqPSAyKSA8IDEpIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSlcbiAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNJbk91dCIsImZ1bmN0aW9uIGNpcmNJbih0KSB7XG4gIHJldHVybiAxLjAgLSBNYXRoLnNxcnQoMS4wIC0gdCAqIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2lyY0luIiwiZnVuY3Rpb24gY2lyY091dCh0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtICggLS10ICogdCApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNPdXQiLCJmdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/IDQuMCAqIHQgKiB0ICogdFxuICAgIDogMC41ICogTWF0aC5wb3coMi4wICogdCAtIDIuMCwgMy4wKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljSW5PdXQiLCJmdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljSW4iLCJmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gIHZhciBmID0gdCAtIDEuMFxuICByZXR1cm4gZiAqIGYgKiBmICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViaWNPdXQiLCJmdW5jdGlvbiBlbGFzdGljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gMC41ICogTWF0aC5zaW4oKzEzLjAgKiBNYXRoLlBJLzIgKiAyLjAgKiB0KSAqIE1hdGgucG93KDIuMCwgMTAuMCAqICgyLjAgKiB0IC0gMS4wKSlcbiAgICA6IDAuNSAqIE1hdGguc2luKC0xMy4wICogTWF0aC5QSS8yICogKCgyLjAgKiB0IC0gMS4wKSArIDEuMCkpICogTWF0aC5wb3coMi4wLCAtMTAuMCAqICgyLjAgKiB0IC0gMS4wKSkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbGFzdGljSW5PdXQiLCJmdW5jdGlvbiBlbGFzdGljSW4odCkge1xuICByZXR1cm4gTWF0aC5zaW4oMTMuMCAqIHQgKiBNYXRoLlBJLzIpICogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsYXN0aWNJbiIsImZ1bmN0aW9uIGVsYXN0aWNPdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4oLTEzLjAgKiAodCArIDEuMCkgKiBNYXRoLlBJLzIpICogTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxhc3RpY091dCIsImZ1bmN0aW9uIGV4cG9Jbk91dCh0KSB7XG4gIHJldHVybiAodCA9PT0gMC4wIHx8IHQgPT09IDEuMClcbiAgICA/IHRcbiAgICA6IHQgPCAwLjVcbiAgICAgID8gKzAuNSAqIE1hdGgucG93KDIuMCwgKDIwLjAgKiB0KSAtIDEwLjApXG4gICAgICA6IC0wLjUgKiBNYXRoLnBvdygyLjAsIDEwLjAgLSAodCAqIDIwLjApKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9Jbk91dCIsImZ1bmN0aW9uIGV4cG9Jbih0KSB7XG4gIHJldHVybiB0ID09PSAwLjAgPyB0IDogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9JbiIsImZ1bmN0aW9uIGV4cG9PdXQodCkge1xuICByZXR1cm4gdCA9PT0gMS4wID8gdCA6IDEuMCAtIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9PdXQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0J2JhY2tJbk91dCc6IHJlcXVpcmUoJy4vYmFjay1pbi1vdXQnKSxcblx0J2JhY2tJbic6IHJlcXVpcmUoJy4vYmFjay1pbicpLFxuXHQnYmFja091dCc6IHJlcXVpcmUoJy4vYmFjay1vdXQnKSxcblx0J2JvdW5jZUluT3V0JzogcmVxdWlyZSgnLi9ib3VuY2UtaW4tb3V0JyksXG5cdCdib3VuY2VJbic6IHJlcXVpcmUoJy4vYm91bmNlLWluJyksXG5cdCdib3VuY2VPdXQnOiByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKSxcblx0J2NpcmNJbk91dCc6IHJlcXVpcmUoJy4vY2lyYy1pbi1vdXQnKSxcblx0J2NpcmNJbic6IHJlcXVpcmUoJy4vY2lyYy1pbicpLFxuXHQnY2lyY091dCc6IHJlcXVpcmUoJy4vY2lyYy1vdXQnKSxcblx0J2N1YmljSW5PdXQnOiByZXF1aXJlKCcuL2N1YmljLWluLW91dCcpLFxuXHQnY3ViaWNJbic6IHJlcXVpcmUoJy4vY3ViaWMtaW4nKSxcblx0J2N1YmljT3V0JzogcmVxdWlyZSgnLi9jdWJpYy1vdXQnKSxcblx0J2VsYXN0aWNJbk91dCc6IHJlcXVpcmUoJy4vZWxhc3RpYy1pbi1vdXQnKSxcblx0J2VsYXN0aWNJbic6IHJlcXVpcmUoJy4vZWxhc3RpYy1pbicpLFxuXHQnZWxhc3RpY091dCc6IHJlcXVpcmUoJy4vZWxhc3RpYy1vdXQnKSxcblx0J2V4cG9Jbk91dCc6IHJlcXVpcmUoJy4vZXhwby1pbi1vdXQnKSxcblx0J2V4cG9Jbic6IHJlcXVpcmUoJy4vZXhwby1pbicpLFxuXHQnZXhwb091dCc6IHJlcXVpcmUoJy4vZXhwby1vdXQnKSxcblx0J2xpbmVhcic6IHJlcXVpcmUoJy4vbGluZWFyJyksXG5cdCdxdWFkSW5PdXQnOiByZXF1aXJlKCcuL3F1YWQtaW4tb3V0JyksXG5cdCdxdWFkSW4nOiByZXF1aXJlKCcuL3F1YWQtaW4nKSxcblx0J3F1YWRPdXQnOiByZXF1aXJlKCcuL3F1YWQtb3V0JyksXG5cdCdxdWFydEluT3V0JzogcmVxdWlyZSgnLi9xdWFydC1pbi1vdXQnKSxcblx0J3F1YXJ0SW4nOiByZXF1aXJlKCcuL3F1YXJ0LWluJyksXG5cdCdxdWFydE91dCc6IHJlcXVpcmUoJy4vcXVhcnQtb3V0JyksXG5cdCdxdWludEluT3V0JzogcmVxdWlyZSgnLi9xdWludC1pbi1vdXQnKSxcblx0J3F1aW50SW4nOiByZXF1aXJlKCcuL3F1aW50LWluJyksXG5cdCdxdWludE91dCc6IHJlcXVpcmUoJy4vcXVpbnQtb3V0JyksXG5cdCdzaW5lSW5PdXQnOiByZXF1aXJlKCcuL3NpbmUtaW4tb3V0JyksXG5cdCdzaW5lSW4nOiByZXF1aXJlKCcuL3NpbmUtaW4nKSxcblx0J3NpbmVPdXQnOiByZXF1aXJlKCcuL3NpbmUtb3V0Jylcbn0iLCJmdW5jdGlvbiBsaW5lYXIodCkge1xuICByZXR1cm4gdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmVhciIsImZ1bmN0aW9uIHF1YWRJbk91dCh0KSB7XG4gICAgdCAvPSAwLjVcbiAgICBpZiAodCA8IDEpIHJldHVybiAwLjUqdCp0XG4gICAgdC0tXG4gICAgcmV0dXJuIC0wLjUgKiAodCoodC0yKSAtIDEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZEluT3V0IiwiZnVuY3Rpb24gcXVhZEluKHQpIHtcbiAgcmV0dXJuIHQgKiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZEluIiwiZnVuY3Rpb24gcXVhZE91dCh0KSB7XG4gIHJldHVybiAtdCAqICh0IC0gMi4wKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YWRPdXQiLCJmdW5jdGlvbiBxdWFydGljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gKzguMCAqIE1hdGgucG93KHQsIDQuMClcbiAgICA6IC04LjAgKiBNYXRoLnBvdyh0IC0gMS4wLCA0LjApICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhcnRpY0luT3V0IiwiZnVuY3Rpb24gcXVhcnRpY0luKHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQsIDQuMClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljSW4iLCJmdW5jdGlvbiBxdWFydGljT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQgLSAxLjAsIDMuMCkgKiAoMS4wIC0gdCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljT3V0IiwiZnVuY3Rpb24gcWludGljSW5PdXQodCkge1xuICAgIGlmICggKCB0ICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogdCAqIHQgKiB0ICogdCAqIHRcbiAgICByZXR1cm4gMC41ICogKCAoIHQgLT0gMiApICogdCAqIHQgKiB0ICogdCArIDIgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY0luT3V0IiwiZnVuY3Rpb24gcWludGljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxaW50aWNJbiIsImZ1bmN0aW9uIHFpbnRpY091dCh0KSB7XG4gIHJldHVybiAtLXQgKiB0ICogdCAqIHQgKiB0ICsgMVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY091dCIsImZ1bmN0aW9uIHNpbmVJbk91dCh0KSB7XG4gIHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkqdCkgLSAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbmVJbk91dCIsImZ1bmN0aW9uIHNpbmVJbiAodCkge1xuICB2YXIgdiA9IE1hdGguY29zKHQgKiBNYXRoLlBJICogMC41KVxuICBpZiAoTWF0aC5hYnModikgPCAxZS0xNCkgcmV0dXJuIDFcbiAgZWxzZSByZXR1cm4gMSAtIHZcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lSW5cbiIsImZ1bmN0aW9uIHNpbmVPdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4odCAqIE1hdGguUEkvMilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lT3V0IiwiaW1wb3J0IHtsaW5lYXJ9IGZyb20gJ2Vhc2VzJztcblxuY29uc3QgVU5ERUZJTkVEID0gMDtcbmNvbnN0IEJFRk9SRSA9IDE7XG5jb25zdCBSVU5OSU5HID0gMjtcbmNvbnN0IEFGVEVSID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4ge1xuICBjb25zdHJ1Y3RvcihvYmosIGRlYnVnID0gZmFsc2UsIG5hbWUgPSAnJykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICAgIHRoaXMub2JqID0gb2JqO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IDA7XG5cbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgdGhpcy5sYXN0ID0gdGhpcztcblxuICAgIHRoaXMudGltZSA9IDA7XG4gICAgdGhpcy5sYXN0RXZhbHVhdGlvblRpbWUgPSAtMTtcblxuICAgIHRoaXMucHJvcGVydGllc0Zyb20gPSBudWxsO1xuICAgIHRoaXMucHJvcGVydGllc1RvID0gbnVsbDtcbiAgICB0aGlzLmVhc2UgPSBsaW5lYXI7XG5cbiAgICB0aGlzLm9uU3RhcnQgPSBudWxsO1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgdGhpcy5sb2coJ2NyZWF0ZWQnKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0VHdlZW4ob2JqLCBkdXJhdGlvbiwgZWFzZSwgbmFtZSA9ICcnKSB7XG4gICAgdmFyIGxhc3QgPSB0aGlzLmxhc3Q7XG4gICAgdmFyIHR3ZWVuID0gbmV3IFR3ZWVuKG9iaiwgdGhpcy5kZWJ1ZywgbmFtZSk7XG4gICAgdHdlZW4ucG9zaXRpb24gPSBsYXN0LnBvc2l0aW9uICsgbGFzdC5kdXJhdGlvbjtcbiAgICB0d2Vlbi5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDA7XG4gICAgdHdlZW4uc3RhdGUgPSAwO1xuICAgIHR3ZWVuLmVhc2UgPSBlYXNlO1xuICAgIHR3ZWVuLnByZXYgPSBsYXN0O1xuICAgIGxhc3QubmV4dCA9IHR3ZWVuO1xuICAgIHRoaXMubGFzdCA9IHR3ZWVuO1xuXG4gICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgIHRoaXMubG9nKCdhZGRlZDogJyArIG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0d2VlbjtcbiAgfVxuXG4gIF9nZXRMYXN0UGFyYW0oZmllbGQpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5sYXN0LnByZXY7XG4gICAgd2hpbGUgKHJlZikge1xuICAgICAgaWYgKHJlZi5vYmogPT09IHRoaXMub2JqICYmIHJlZi5wcm9wZXJ0aWVzVG8gJiYgcmVmLnByb3BlcnRpZXNUb1tmaWVsZF0gIT09IHVuZGVmaW5lZCAmJiByZWYucHJvcGVydGllc1RvW2ZpZWxkXSAhPT0gbnVsbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlZiA9IHJlZi5wcmV2O1xuICAgIH1cbiAgICB2YXIgdiA9IHJlZiA/IHJlZi5wcm9wZXJ0aWVzVG9bZmllbGRdIDogdGhpcy5vYmpbZmllbGRdO1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgYWRkKG9iaikge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKG9iaiwgMCwgbGluZWFyKTtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICBmcm9tKHByb3BzLCBkdXJhdGlvbiwgZWFzZSkge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgZWFzZSwgJ2Zyb20nKTtcbiAgICB0d2Vlbi5wcm9wZXJ0aWVzRnJvbSA9IHByb3BzO1xuICAgIHR3ZWVuLnByb3BlcnRpZXNUbyA9IHt9O1xuICAgIGZvciAodmFyIGYgaW4gcHJvcHMpIHtcbiAgICAgIHR3ZWVuLnByb3BlcnRpZXNUb1tmXSA9IHRoaXMuX2dldExhc3RQYXJhbShmKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0byhwcm9wcywgZHVyYXRpb24sIGVhc2UpIHtcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2Vlbih0aGlzLm9iaiwgZHVyYXRpb24sIGVhc2UsICd0bycpO1xuICAgIHR3ZWVuLnByb3BlcnRpZXNUbyA9IHByb3BzO1xuICAgIHR3ZWVuLnByb3BlcnRpZXNGcm9tID0ge307XG4gICAgZm9yICh2YXIgZiBpbiBwcm9wcykge1xuICAgICAgdHdlZW4ucHJvcGVydGllc0Zyb21bZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FpdChkdXJhdGlvbikge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgbnVsbCwgJ3dhaXQnKTtcbiAgICB0d2Vlbi5wcm9wZXJ0aWVzRnJvbSA9IHR3ZWVuLnByZXYucHJvcGVydGllc0Zyb207XG4gICAgdHdlZW4ucHJvcGVydGllc1RvID0gdHdlZW4ucHJldi5wcm9wZXJ0aWVzVG87XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aGVuKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5sYXN0Lm9uQ29tcGxldGUgPSBjYWxsYmFjaztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFRpbWUodmFsdWUpIHtcbiAgICB2YXIgZGVsdGEgPSB2YWx1ZSAtIHRoaXMudGltZTtcbiAgICB0aGlzLnVwZGF0ZShkZWx0YSk7XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWU7XG4gIH1cblxuICB1cGRhdGUoZGVsdGEpIHtcbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIHRoaXMudGltZSArPSBkZWx0YTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uZXh0ICYmIGRlbHRhIDwgMCkge1xuICAgICAgdGhpcy5uZXh0LnVwZGF0ZShkZWx0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGltZSAhPT0gdGhpcy5sYXN0RXZhbHVhdGlvblRpbWUpIHtcbiAgICAgIHZhciB0aW1lID0gdGhpcy50aW1lO1xuICAgICAgdmFyIHBvcyA9IHRoaXMucG9zaXRpb247XG4gICAgICB2YXIgZHVyID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgIHZhciBsYXN0U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgdmFyIHN0YXRlID0gVHdlZW4uZ2V0U3RhdGUocG9zLCBkdXIsIHRpbWUpO1xuXG4gICAgICBpZiAobGFzdFN0YXRlID09PSBVTkRFRklORUQpIHtcbiAgICAgICAgaWYgKHRpbWUgPiB0aGlzLmxhc3RFdmFsdWF0aW9uVGltZSkge1xuICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgUlVOTklORyA6XG4gICAgICAgICAgICAgIHRoaXMubm90aWZ5U3RhcnQoKTtcbiAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzKHRpbWUgLSBwb3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFGVEVSIDpcbiAgICAgICAgICAgICAgdGhpcy5ub3RpZnlTdGFydCgpO1xuICAgICAgICAgICAgICB0aGlzLnByb2Nlc3MoZHVyKTtcbiAgICAgICAgICAgICAgdGhpcy5ub3RpZnlDb21wbGV0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgUlVOTklORyA6XG4gICAgICAgICAgICAgIHRoaXMubm90aWZ5Q29tcGxldGUoKTtcbiAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzKHRpbWUgLSBwb3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEJFRk9SRSA6XG4gICAgICAgICAgICAgIHRoaXMubm90aWZ5Q29tcGxldGUoKTtcbiAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzKDApO1xuICAgICAgICAgICAgICB0aGlzLm5vdGlmeVN0YXJ0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICBjYXNlIEJFRk9SRSA6XG4gICAgICAgICAgICBpZiAobGFzdFN0YXRlICE9PSBCRUZPUkUpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzKDApO1xuICAgICAgICAgICAgICB0aGlzLm5vdGlmeVN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBSVU5OSU5HIDpcbiAgICAgICAgICAgIGlmIChsYXN0U3RhdGUgPT09IEJFRk9SRSkge1xuICAgICAgICAgICAgICB0aGlzLm5vdGlmeVN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RTdGF0ZSA9PT0gQUZURVIpIHtcbiAgICAgICAgICAgICAgdGhpcy5ub3RpZnlDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzKHRpbWUgLSBwb3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQUZURVIgOlxuICAgICAgICAgICAgaWYgKGxhc3RTdGF0ZSAhPT0gQUZURVIpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzKGR1cik7XG4gICAgICAgICAgICAgIHRoaXMubm90aWZ5Q29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmxhc3RFdmFsdWF0aW9uVGltZSA9IHRpbWU7XG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG5cbiAgICBpZiAodGhpcy5uZXh0ICYmIGRlbHRhID4gMCkge1xuICAgICAgdGhpcy5uZXh0LnVwZGF0ZShkZWx0YSk7XG4gICAgfVxuICB9XG5cbiAgcHJvY2Vzcyh0aW1lKSB7XG4gICAgaWYgKCF0aGlzLmVhc2UgfHwgdGhpcy5kdXJhdGlvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciByYXRpbyA9IHRoaXMuZWFzZSh0aW1lL3RoaXMuZHVyYXRpb24pO1xuXG4gICAgZm9yICh2YXIgZiBpbiB0aGlzLnByb3BlcnRpZXNUbykge1xuICAgICAgc3dpdGNoIChyYXRpbykge1xuICAgICAgICBjYXNlIDAgOlxuICAgICAgICAgIHRoaXMub2JqW2ZdID0gdGhpcy5wcm9wZXJ0aWVzRnJvbVtmXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgdGhpcy5vYmpbZl0gPSB0aGlzLnByb3BlcnRpZXNUb1tmXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgIHZhciB2ZiA9IHRoaXMucHJvcGVydGllc0Zyb21bZl07XG4gICAgICAgICAgdmFyIHZ0ID0gdGhpcy5wcm9wZXJ0aWVzVG9bZl07XG4gICAgICAgICAgdGhpcy5vYmpbZl0gPSB2ZiArICh2dCAtIHZmKSpyYXRpbztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5U3RhcnQoKSB7XG4gICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgIHRoaXMubG9nKCdzdGFydCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICB9XG4gIH1cblxuICBub3RpZnlDb21wbGV0ZSgpIHtcbiAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgdGhpcy5sb2coJ2NvbXBsZXRlJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmlzaGVkKCkge1xuICAgIHZhciByID0gdGhpcy5zdGF0ZSA9PT0gQUZURVI7XG4gICAgaWYgKHIgJiYgdGhpcy5uZXh0KSB7XG4gICAgICByID0gdGhpcy5uZXh0LmZpbmlzaGVkKCk7XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5uZXh0KSB7XG4gICAgICB0aGlzLm5leHQuZGlzcG9zZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgdGhpcy5sb2coJ0RJU1BPU0VEIScpO1xuICAgIH1cbiAgICB0aGlzLm9iaiA9IG51bGw7XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubGFzdCA9IG51bGw7XG4gICAgdGhpcy5wcm9wZXJ0aWVzRnJvbSA9IG51bGw7XG4gICAgdGhpcy5wcm9wZXJ0aWVzVG8gPSBudWxsO1xuICAgIHRoaXMub25TdGFydCA9IG51bGw7XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgfVxuXG4gIGxvZyhtc2cpIHtcbiAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgaWYgKHRoaXMub2JqLm5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tUd2Vlbl0nLCB0aGlzLm9iai5uYW1lLCB0aGlzLm5hbWUsIG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnW1R3ZWVuXScsIHRoaXMubmFtZSwgbXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbVHdlZW5dJywgbXNnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0U3RhdGUocG9zLCBkdXIsIHRpbWUpIHtcbiAgICB2YXIgZW5kID0gcG9zICsgZHVyO1xuICAgIHZhciBzdGF0ZSA9IFVOREVGSU5FRDtcbiAgICBpZiAodGltZSA8IHBvcykge1xuICAgICAgc3RhdGUgPSBCRUZPUkU7XG4gICAgfSBlbHNlIGlmICh0aW1lID49IGVuZCkge1xuICAgICAgc3RhdGUgPSBBRlRFUjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSBSVU5OSU5HO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuVHdlZW4uVU5ERUZJTkVEID0gVU5ERUZJTkVEO1xuVHdlZW4uQkVGT1JFID0gQkVGT1JFO1xuVHdlZW4uUlVOTklORyA9IFJVTk5JTkc7XG5Ud2Vlbi5BRlRFUiA9IEFGVEVSO1xuIiwiaW1wb3J0IFR3ZWVuIGZyb20gJy4vVHdlZW4nO1xuaW1wb3J0IGVhc2VzIGZyb20gJ2Vhc2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW5lciB7XG4gIGNvbnN0cnVjdG9yKGF1dG9VcGRhdGVSYXRlID0gMCkge1xuICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICB0aGlzLnR3ZWVucyA9IFtdO1xuICAgIHRoaXMuX2F1dG9VcGRhdGVSYXRlID0gMDtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5hdXRvVXBkYXRlUmF0ZSA9IGF1dG9VcGRhdGVSYXRlO1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICB0aGlzLmF1dG9VcGRhdGVSYXRlID0gMDtcbiAgICB2YXIgaSA9IHRoaXMudHdlZW5zLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgdCA9IHRoaXMudHdlZW5zW2ldO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdC5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudHdlZW5zID0gbnVsbDtcbiAgfVxuXG4gIGdldCBhdXRvVXBkYXRlUmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1VwZGF0ZVJhdGU7XG4gIH1cblxuICBzZXQgYXV0b1VwZGF0ZVJhdGUodmFsdWUpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICBpZiAodmFsdWUgPD0gMCkge1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgdGhpcy5fYXV0b1VwZGF0ZVJhdGUgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hdXRvVXBkYXRlUmF0ZSA9IHZhbHVlO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHRpbWUgPSBzZWxmLmdldFRpbWUoKTtcbiAgICAgIHNlbGYuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ID0gc2VsZi5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gdCAtIHRpbWU7XG4gICAgICAgIHRpbWUgPSB0O1xuICAgICAgICBzZWxmLnVwZGF0ZShkKTtcbiAgICAgIH0sIHZhbHVlKjEwMDApO1xuICAgIH1cbiAgfVxuXG4gIGFkZChvYmosIGRlYnVnID0gZmFsc2UsIG5hbWUgPSAnJykge1xuICAgIHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmosIGRlYnVnLCBuYW1lKTtcbiAgICB0aGlzLnR3ZWVucy5wdXNoKHR3ZWVuKTtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICByZW1vdmUob2JqKSB7XG4gICAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICAgIGlmICh0Lm9iaiA9PT0gb2JqKSB7XG4gICAgICAgIHRoaXMudHdlZW5zLnNwbGljZShpLCAxKTtcbiAgICAgICAgdC5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIGlmICh0LmZpbmlzaGVkKCkpIHtcbiAgICAgICAgICB0aGlzLnR3ZWVucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgdC5kaXNwb3NlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdC51cGRhdGUoZGVsdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkvMTAwMDtcbiAgfVxufVxuXG5Ud2VlbmVyLlR3ZWVuID0gVHdlZW47XG5Ud2VlbmVyLmVhc2UgPSBlYXNlcztcbiIsImltcG9ydCBUd2VlbmVyIGZyb20gJy4vVHdlZW5lcic7XG5cbmlmICh0eXBlb2Yod2luZG93KSA9PT0gXCJvYmplY3RcIikge1xuICB3aW5kb3cuVHdlZW5lciA9IFR3ZWVuZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5lcjtcbiJdfQ==
