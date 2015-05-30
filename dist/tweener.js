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

/**
 * The tween player. Will change target object values with specified parameters.
 * @class Tween
 * @constructor
 * @param obj {object} The object that will be tweened.
 */

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

    /**
     * Adds new tween, with new target.
     * @method Tween#add
     * @param obj {object} The object that will be tweened.
     * @returns Tween
     */
    value: function add(obj) {
      var tween = this._getTween(obj, 0, _eases.linear);
      return tween;
    }
  }, {
    key: 'from',

    /**
     * Add a tween that starts with specified values.
     * @method Tween#from
     * @param props {object} Values that the tween will come from.
     * @param duration {float} Tween's duration.
     * @param [ease] {function} Tween's easing curve.
     * @returns Tween
     */
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

    /**
     * Add a tween that ends with specified values.
     * @method Tween#to
     * @param props {object} Values that the tween will go to.
     * @param duration {float} Tween's duration.
     * @param [ease] {function} Tween's easing curve.
     * @returns Tween
     */
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

    /**
     * Hold the tween for a while before next commands.
     * @method Tween#wait
     * @param duration {float} Time to wait.
     * @returns Tween
     */
    value: function wait(duration) {
      var tween = this._getTween(this.obj, duration, null);
      tween.name = 'wait';
      tween.paramsFrom = tween.prev.paramsFrom;
      tween.paramsTo = tween.prev.paramsTo;
      return this;
    }
  }, {
    key: 'then',

    /**
     * Set a callback when the previous commands are completed.
     * @method Tween#then
     * @param callback {function} Method tha will be executed as callback.
     * @returns Tween
     */
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
      var r = this.state === Tween.COMPLETE;
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

/**
 * A tween manager. Deals with tween creation, update and destruction.
 * @class Tweener
 * @constructor
 * @param [autoUpdateRate] {float} Interval (in seconds) that all tweens will be updated. If 0, the auto-update will not
 * run, so you must handle the update manually. Default is 0.
 */

var Tweener = (function () {
  function Tweener(autoUpdateRate) {
    _classCallCheck(this, Tweener);

    this.debug = false;
    this.tweens = [];
    this._interval = null;
    if (autoUpdateRate > 0) {
      this.enableAutoUpdate(autoUpdateRate);
    }
  }

  _createClass(Tweener, [{
    key: 'add',

    /**
     * Create and return a Tween instance with referenced object.
     * @method Tweener#add
     * @param obj {object} The object that will be tweened.
     * @return Tween
     */
    value: function add(obj) {
      var tween = new _Tween2['default'](obj);
      tween.debug = this.debug;
      this.tweens.push(tween);
      return tween;
    }
  }, {
    key: 'remove',

    /**
     * Remove all tween instances that have reference to the object.
     * @method Tweener#remove
     * @param obj {object} The tweened object.
     */
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
    key: 'enableAutoUpdate',

    /**
     * Runs the update method automatically.
     * @method Tweener#enableAutoUpdate
     * @param rate {float} Interval (in seconds) that the update will be played.
     * If 0 or lower, the automatic update will be disabled.
     */
    value: function enableAutoUpdate(rate) {
      if (!rate) {
        this.disableAutoUpdate();
        return;
      }

      var self = this;
      var time = self.getTime();
      self._interval = setInterval(function () {
        var t = self.getTime();
        var d = t - time;
        time = t;
        self.update(d);
      }, rate * 1000);
    }
  }, {
    key: 'disableAutoUpdate',

    /**
     * Stops the automatic update.
     * @method Tweener#disableAutoUpdate
     */
    value: function disableAutoUpdate() {
      clearInterval(this._interval);
    }
  }, {
    key: 'update',

    /**
     * Update all tweens.
     * @method Tweener#update
     * @param delta {float} The elapsed time (in seconds) since last update.
     */
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

    /**
     * Destroy Tweener instance.
     * @method Tweener#dispose
     */
    value: function dispose() {
      this.tweens = null;
      this.disableAutoUpdate();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9iYWNrLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2UtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2JvdW5jZS1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2Utb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY2lyYy1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY3ViaWMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2VsYXN0aWMtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvZXhwby1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzZXMvbGluZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhZC1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhcnQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWludC1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvc2luZS1vdXQuanMiLCIvaG9tZS9tYXVyby9wcm9qZWN0cy90d2VlbmVyL3NvdXJjZS9Ud2Vlbi5qcyIsIi9ob21lL21hdXJvL3Byb2plY3RzL3R3ZWVuZXIvc291cmNlL1R3ZWVuZXIuanMiLCIvaG9tZS9tYXVyby9wcm9qZWN0cy90d2VlbmVyL3NvdXJjZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O3FCQ0pxQixPQUFPOztBQUU1QixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDYixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDaEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7SUFRRyxLQUFLO0FBRWIsV0FGUSxLQUFLLENBRVosR0FBRyxFQUFFOzBCQUZFLEtBQUs7O0FBR3RCLFFBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsUUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O0FBRWYsUUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZixRQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNsQixRQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7QUFFZixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixRQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzs7QUFFZCxRQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixRQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixRQUFJLENBQUMsSUFBSSxVQTlCTCxNQUFNLEFBOEJRLENBQUM7O0FBRW5CLFFBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0dBQ3hCOztlQXJCa0IsS0FBSzs7V0F1QmYsbUJBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7QUFDN0IsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQixVQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQixXQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDekIsV0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDekMsV0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksQ0FBQyxDQUFDO0FBQy9CLFdBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLFdBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFdBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFVBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLFVBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLGFBQU8sS0FBSyxDQUFDO0tBQ2Q7OztXQUVZLHVCQUFDLEtBQUssRUFBRTtBQUNuQixVQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixhQUFPLEdBQUcsRUFBRTtBQUNWLFlBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDN0csZ0JBQU07U0FDUDtBQUNELFdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO09BQ2hCO0FBQ0QsVUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxhQUFPLENBQUMsQ0FBQztLQUNWOzs7Ozs7Ozs7O1dBUUUsYUFBQyxHQUFHLEVBQUU7QUFDUCxVQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBcEU3QixNQUFNLENBb0VnQyxDQUFDO0FBQzNDLGFBQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7Ozs7Ozs7OztXQVVHLGNBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7QUFDMUIsVUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyRCxXQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUNwQixXQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN6QixXQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNwQixXQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtBQUNuQixhQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDM0M7QUFDRCxhQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7Ozs7Ozs7V0FVQyxZQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0FBQ3hCLFVBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckQsV0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEIsV0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdkIsV0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsV0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDbkIsYUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQzdDO0FBQ0QsYUFBTyxJQUFJLENBQUM7S0FDYjs7Ozs7Ozs7OztXQVFHLGNBQUMsUUFBUSxFQUFFO0FBQ2IsVUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyRCxXQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUNwQixXQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ3pDLFdBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDckMsYUFBTyxJQUFJLENBQUM7S0FDYjs7Ozs7Ozs7OztXQVFHLGNBQUMsUUFBUSxFQUFFO0FBQ2IsVUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBQ2hDLGFBQU8sSUFBSSxDQUFDO0tBQ2I7OztXQUVNLGlCQUFDLEtBQUssRUFBRTtBQUNiLFVBQUksS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQzlCLFVBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7OztXQUVNLG1CQUFHO0FBQ1IsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCOzs7V0FFSyxnQkFBQyxLQUFLLEVBQUU7QUFDWixVQUFJLEtBQUssRUFBRTtBQUNULFlBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO09BQ3BCOztBQUVELFVBQUksSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQzFCLFlBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ3pCOztBQUVELFVBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNyQyxVQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUM5QyxZQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQzlDLGNBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDckI7QUFDRCxZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDM0IsWUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUMxQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2pDLFlBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQzdCLGNBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN4QixjQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO09BQ0YsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO0FBQzNCLFlBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQ2xDLGNBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztBQUM3QixjQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxjQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDZCxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztXQUN2QjtBQUNELGNBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNuQixnQkFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1dBQ25CO1NBQ0Y7T0FDRjs7QUFFRCxVQUFJLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtBQUMxQixZQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUN6QjtLQUNGOzs7V0FFVSxxQkFBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDZCxlQUFPO09BQ1I7O0FBRUQsVUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDOztBQUVkLFVBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQ2hDLGFBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDdkM7O0FBRUQsV0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzNCLGdCQUFRLElBQUksQ0FBQyxLQUFLO0FBQ2hCLGVBQUssS0FBSyxDQUFDLElBQUk7QUFDYixnQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLGtCQUFNO0FBQUEsQUFDTixlQUFLLEtBQUssQ0FBQyxTQUFTO0FBQ2xCLGdCQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakMsa0JBQU07QUFBQSxBQUNOO0FBQ0UsZ0JBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsZ0JBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsZ0JBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQSxHQUFFLEtBQUssQ0FBQztBQUNyQyxrQkFBTTtBQUFBLFNBQ1A7T0FDRjtLQUNGOzs7V0FFTyxvQkFBRztBQUNULFVBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQztBQUN0QyxVQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ2xCLFNBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO09BQzFCO0FBQ0QsYUFBTyxDQUFDLENBQUM7S0FDVjs7O1dBRU0sbUJBQUc7QUFDUixVQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDYixZQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO09BQ3JCO0FBQ0QsVUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2QsWUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztPQUN2QjtBQUNELFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0tBQ3hCOzs7V0FFRSxhQUFDLEdBQUcsRUFBRTtBQUNQLFVBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUM5QixlQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO09BQ3ZEO0tBQ0Y7OztTQWxPa0IsS0FBSzs7O3FCQUFMLEtBQUs7O0FBc08xQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsQixLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN4QixLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztxQkNwUFYsU0FBUzs7OztxQkFDVCxPQUFPOzs7Ozs7Ozs7Ozs7SUFTSixPQUFPO0FBRWYsV0FGUSxPQUFPLENBRWQsY0FBYyxFQUFFOzBCQUZULE9BQU87O0FBR3hCLFFBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFFBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLFFBQUksY0FBYyxHQUFHLENBQUMsRUFBRTtBQUN0QixVQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDdkM7R0FDRjs7ZUFUa0IsT0FBTzs7Ozs7Ozs7O1dBaUJ2QixhQUFDLEdBQUcsRUFBRTtBQUNQLFVBQUksS0FBSyxHQUFHLHVCQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLFdBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN6QixVQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4QixhQUFPLEtBQUssQ0FBQztLQUNkOzs7Ozs7Ozs7V0FPSyxnQkFBQyxHQUFHLEVBQUU7QUFDVixVQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMzQixhQUFPLENBQUMsRUFBRSxFQUFFO0FBQ1YsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixZQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO0FBQ2pCLGNBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO09BQ0Y7S0FDRjs7Ozs7Ozs7OztXQVFlLDBCQUFDLElBQUksRUFBRTtBQUNyQixVQUFJLENBQUMsSUFBSSxFQUFFO0FBQ1QsWUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDekIsZUFBTztPQUNSOztBQUVELFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixVQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDMUIsVUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsWUFBVztBQUN0QyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdkIsWUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ1QsWUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUNoQixFQUFFLElBQUksR0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7Ozs7OztXQU1nQiw2QkFBRztBQUNsQixtQkFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMvQjs7Ozs7Ozs7O1dBT0ssZ0JBQUMsS0FBSyxFQUFFO0FBQ1osVUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDM0IsYUFBTyxDQUFDLEVBQUUsRUFBRTtBQUNWLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsWUFBSSxDQUFDLEVBQUU7QUFDTCxXQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO0FBQ2hCLGdCQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztXQUNyQjtTQUNGO09BQ0Y7S0FDRjs7Ozs7Ozs7V0FNTSxtQkFBRztBQUNSLFVBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLFVBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCOzs7V0FFTyxrQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLFVBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtBQUN2QixhQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDbkM7QUFDRCxVQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0IsV0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2pCOzs7V0FFTSxtQkFBRztBQUNSLGFBQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBQyxJQUFJLENBQUM7S0FDbEM7OztTQTFHa0IsT0FBTzs7O3FCQUFQLE9BQU87O0FBOEc1QixPQUFPLENBQUMsS0FBSyxxQkFBUSxDQUFDO0FBQ3RCLE9BQU8sQ0FBQyxJQUFJLHFCQUFRLENBQUM7Ozs7Ozs7O3VCQ3pIRCxXQUFXOzs7O0FBRS9CLElBQUksT0FBTyxNQUFNLEFBQUMsS0FBSyxRQUFRLEVBQUU7QUFDL0IsUUFBTSxDQUFDLE9BQU8sdUJBQVUsQ0FBQztDQUMxQjs7QUFFRCxNQUFNLENBQUMsT0FBTyx1QkFBVSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIGJhY2tJbk91dCh0KSB7XG4gIHZhciBzID0gMS43MDE1OCAqIDEuNTI1XG4gIGlmICgodCAqPSAyKSA8IDEpXG4gICAgcmV0dXJuIDAuNSAqICh0ICogdCAqICgocyArIDEpICogdCAtIHMpKVxuICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqICgocyArIDEpICogdCArIHMpICsgMilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrSW5PdXQiLCJmdW5jdGlvbiBiYWNrSW4odCkge1xuICB2YXIgcyA9IDEuNzAxNThcbiAgcmV0dXJuIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrSW4iLCJmdW5jdGlvbiBiYWNrT3V0KHQpIHtcbiAgdmFyIHMgPSAxLjcwMTU4XG4gIHJldHVybiAtLXQgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFja091dCIsInZhciBib3VuY2VPdXQgPSByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKVxuXG5mdW5jdGlvbiBib3VuY2VJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyAwLjUgKiAoMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQgKiAyLjApKVxuICAgIDogMC41ICogYm91bmNlT3V0KHQgKiAyLjAgLSAxLjApICsgMC41XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlSW5PdXQiLCJ2YXIgYm91bmNlT3V0ID0gcmVxdWlyZSgnLi9ib3VuY2Utb3V0JylcblxuZnVuY3Rpb24gYm91bmNlSW4odCkge1xuICByZXR1cm4gMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlSW4iLCJmdW5jdGlvbiBib3VuY2VPdXQodCkge1xuICB2YXIgYSA9IDQuMCAvIDExLjBcbiAgdmFyIGIgPSA4LjAgLyAxMS4wXG4gIHZhciBjID0gOS4wIC8gMTAuMFxuXG4gIHZhciBjYSA9IDQzNTYuMCAvIDM2MS4wXG4gIHZhciBjYiA9IDM1NDQyLjAgLyAxODA1LjBcbiAgdmFyIGNjID0gMTYwNjEuMCAvIDE4MDUuMFxuXG4gIHZhciB0MiA9IHQgKiB0XG5cbiAgcmV0dXJuIHQgPCBhXG4gICAgPyA3LjU2MjUgKiB0MlxuICAgIDogdCA8IGJcbiAgICAgID8gOS4wNzUgKiB0MiAtIDkuOSAqIHQgKyAzLjRcbiAgICAgIDogdCA8IGNcbiAgICAgICAgPyBjYSAqIHQyIC0gY2IgKiB0ICsgY2NcbiAgICAgICAgOiAxMC44ICogdCAqIHQgLSAyMC41MiAqIHQgKyAxMC43MlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5jZU91dCIsImZ1bmN0aW9uIGNpcmNJbk91dCh0KSB7XG4gIGlmICgodCAqPSAyKSA8IDEpIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSlcbiAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNJbk91dCIsImZ1bmN0aW9uIGNpcmNJbih0KSB7XG4gIHJldHVybiAxLjAgLSBNYXRoLnNxcnQoMS4wIC0gdCAqIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2lyY0luIiwiZnVuY3Rpb24gY2lyY091dCh0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtICggLS10ICogdCApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNPdXQiLCJmdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/IDQuMCAqIHQgKiB0ICogdFxuICAgIDogMC41ICogTWF0aC5wb3coMi4wICogdCAtIDIuMCwgMy4wKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljSW5PdXQiLCJmdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljSW4iLCJmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gIHZhciBmID0gdCAtIDEuMFxuICByZXR1cm4gZiAqIGYgKiBmICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViaWNPdXQiLCJmdW5jdGlvbiBlbGFzdGljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gMC41ICogTWF0aC5zaW4oKzEzLjAgKiBNYXRoLlBJLzIgKiAyLjAgKiB0KSAqIE1hdGgucG93KDIuMCwgMTAuMCAqICgyLjAgKiB0IC0gMS4wKSlcbiAgICA6IDAuNSAqIE1hdGguc2luKC0xMy4wICogTWF0aC5QSS8yICogKCgyLjAgKiB0IC0gMS4wKSArIDEuMCkpICogTWF0aC5wb3coMi4wLCAtMTAuMCAqICgyLjAgKiB0IC0gMS4wKSkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbGFzdGljSW5PdXQiLCJmdW5jdGlvbiBlbGFzdGljSW4odCkge1xuICByZXR1cm4gTWF0aC5zaW4oMTMuMCAqIHQgKiBNYXRoLlBJLzIpICogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsYXN0aWNJbiIsImZ1bmN0aW9uIGVsYXN0aWNPdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4oLTEzLjAgKiAodCArIDEuMCkgKiBNYXRoLlBJLzIpICogTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxhc3RpY091dCIsImZ1bmN0aW9uIGV4cG9Jbk91dCh0KSB7XG4gIHJldHVybiAodCA9PT0gMC4wIHx8IHQgPT09IDEuMClcbiAgICA/IHRcbiAgICA6IHQgPCAwLjVcbiAgICAgID8gKzAuNSAqIE1hdGgucG93KDIuMCwgKDIwLjAgKiB0KSAtIDEwLjApXG4gICAgICA6IC0wLjUgKiBNYXRoLnBvdygyLjAsIDEwLjAgLSAodCAqIDIwLjApKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9Jbk91dCIsImZ1bmN0aW9uIGV4cG9Jbih0KSB7XG4gIHJldHVybiB0ID09PSAwLjAgPyB0IDogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9JbiIsImZ1bmN0aW9uIGV4cG9PdXQodCkge1xuICByZXR1cm4gdCA9PT0gMS4wID8gdCA6IDEuMCAtIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9PdXQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0J2JhY2tJbk91dCc6IHJlcXVpcmUoJy4vYmFjay1pbi1vdXQnKSxcblx0J2JhY2tJbic6IHJlcXVpcmUoJy4vYmFjay1pbicpLFxuXHQnYmFja091dCc6IHJlcXVpcmUoJy4vYmFjay1vdXQnKSxcblx0J2JvdW5jZUluT3V0JzogcmVxdWlyZSgnLi9ib3VuY2UtaW4tb3V0JyksXG5cdCdib3VuY2VJbic6IHJlcXVpcmUoJy4vYm91bmNlLWluJyksXG5cdCdib3VuY2VPdXQnOiByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKSxcblx0J2NpcmNJbk91dCc6IHJlcXVpcmUoJy4vY2lyYy1pbi1vdXQnKSxcblx0J2NpcmNJbic6IHJlcXVpcmUoJy4vY2lyYy1pbicpLFxuXHQnY2lyY091dCc6IHJlcXVpcmUoJy4vY2lyYy1vdXQnKSxcblx0J2N1YmljSW5PdXQnOiByZXF1aXJlKCcuL2N1YmljLWluLW91dCcpLFxuXHQnY3ViaWNJbic6IHJlcXVpcmUoJy4vY3ViaWMtaW4nKSxcblx0J2N1YmljT3V0JzogcmVxdWlyZSgnLi9jdWJpYy1vdXQnKSxcblx0J2VsYXN0aWNJbk91dCc6IHJlcXVpcmUoJy4vZWxhc3RpYy1pbi1vdXQnKSxcblx0J2VsYXN0aWNJbic6IHJlcXVpcmUoJy4vZWxhc3RpYy1pbicpLFxuXHQnZWxhc3RpY091dCc6IHJlcXVpcmUoJy4vZWxhc3RpYy1vdXQnKSxcblx0J2V4cG9Jbk91dCc6IHJlcXVpcmUoJy4vZXhwby1pbi1vdXQnKSxcblx0J2V4cG9Jbic6IHJlcXVpcmUoJy4vZXhwby1pbicpLFxuXHQnZXhwb091dCc6IHJlcXVpcmUoJy4vZXhwby1vdXQnKSxcblx0J2xpbmVhcic6IHJlcXVpcmUoJy4vbGluZWFyJyksXG5cdCdxdWFkSW5PdXQnOiByZXF1aXJlKCcuL3F1YWQtaW4tb3V0JyksXG5cdCdxdWFkSW4nOiByZXF1aXJlKCcuL3F1YWQtaW4nKSxcblx0J3F1YWRPdXQnOiByZXF1aXJlKCcuL3F1YWQtb3V0JyksXG5cdCdxdWFydEluT3V0JzogcmVxdWlyZSgnLi9xdWFydC1pbi1vdXQnKSxcblx0J3F1YXJ0SW4nOiByZXF1aXJlKCcuL3F1YXJ0LWluJyksXG5cdCdxdWFydE91dCc6IHJlcXVpcmUoJy4vcXVhcnQtb3V0JyksXG5cdCdxdWludEluT3V0JzogcmVxdWlyZSgnLi9xdWludC1pbi1vdXQnKSxcblx0J3F1aW50SW4nOiByZXF1aXJlKCcuL3F1aW50LWluJyksXG5cdCdxdWludE91dCc6IHJlcXVpcmUoJy4vcXVpbnQtb3V0JyksXG5cdCdzaW5lSW5PdXQnOiByZXF1aXJlKCcuL3NpbmUtaW4tb3V0JyksXG5cdCdzaW5lSW4nOiByZXF1aXJlKCcuL3NpbmUtaW4nKSxcblx0J3NpbmVPdXQnOiByZXF1aXJlKCcuL3NpbmUtb3V0Jylcbn0iLCJmdW5jdGlvbiBsaW5lYXIodCkge1xuICByZXR1cm4gdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmVhciIsImZ1bmN0aW9uIHF1YWRJbk91dCh0KSB7XG4gICAgdCAvPSAwLjVcbiAgICBpZiAodCA8IDEpIHJldHVybiAwLjUqdCp0XG4gICAgdC0tXG4gICAgcmV0dXJuIC0wLjUgKiAodCoodC0yKSAtIDEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZEluT3V0IiwiZnVuY3Rpb24gcXVhZEluKHQpIHtcbiAgcmV0dXJuIHQgKiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZEluIiwiZnVuY3Rpb24gcXVhZE91dCh0KSB7XG4gIHJldHVybiAtdCAqICh0IC0gMi4wKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YWRPdXQiLCJmdW5jdGlvbiBxdWFydGljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gKzguMCAqIE1hdGgucG93KHQsIDQuMClcbiAgICA6IC04LjAgKiBNYXRoLnBvdyh0IC0gMS4wLCA0LjApICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhcnRpY0luT3V0IiwiZnVuY3Rpb24gcXVhcnRpY0luKHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQsIDQuMClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljSW4iLCJmdW5jdGlvbiBxdWFydGljT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KHQgLSAxLjAsIDMuMCkgKiAoMS4wIC0gdCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljT3V0IiwiZnVuY3Rpb24gcWludGljSW5PdXQodCkge1xuICAgIGlmICggKCB0ICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogdCAqIHQgKiB0ICogdCAqIHRcbiAgICByZXR1cm4gMC41ICogKCAoIHQgLT0gMiApICogdCAqIHQgKiB0ICogdCArIDIgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY0luT3V0IiwiZnVuY3Rpb24gcWludGljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxaW50aWNJbiIsImZ1bmN0aW9uIHFpbnRpY091dCh0KSB7XG4gIHJldHVybiAtLXQgKiB0ICogdCAqIHQgKiB0ICsgMVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY091dCIsImZ1bmN0aW9uIHNpbmVJbk91dCh0KSB7XG4gIHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkqdCkgLSAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbmVJbk91dCIsImZ1bmN0aW9uIHNpbmVJbih0KSB7XG4gIHJldHVybiAxIC0gTWF0aC5jb3MoIHQgKiBNYXRoLlBJIC8gMiApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2luZUluIiwiZnVuY3Rpb24gc2luZU91dCh0KSB7XG4gIHJldHVybiBNYXRoLnNpbih0ICogTWF0aC5QSS8yKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbmVPdXQiLCJpbXBvcnQge2xpbmVhcn0gZnJvbSAnZWFzZXMnO1xuXG52YXIgSURMRSA9IDA7XG52YXIgUlVOTklORyA9IDE7XG52YXIgQ09NUExFVEVEID0gMjtcblxuLyoqXG4gKiBUaGUgdHdlZW4gcGxheWVyLiBXaWxsIGNoYW5nZSB0YXJnZXQgb2JqZWN0IHZhbHVlcyB3aXRoIHNwZWNpZmllZCBwYXJhbWV0ZXJzLlxuICogQGNsYXNzIFR3ZWVuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4ge1xuXG4gIGNvbnN0cnVjdG9yKG9iaikge1xuICAgIHRoaXMubmFtZSA9ICcnO1xuICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICB0aGlzLm9iaiA9IG9iajtcblxuICAgIHRoaXMuc3RhcnQgPSAwO1xuICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICAgIHRoaXMuc3RhdGUgPSAwO1xuXG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubGFzdCA9IHRoaXM7XG4gICAgdGhpcy50aW1lID0gMDtcblxuICAgIHRoaXMucGFyYW1zRnJvbSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXNUbyA9IG51bGw7XG4gICAgdGhpcy5lYXNlID0gbGluZWFyO1xuXG4gICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgfVxuXG4gIF9nZXRUd2VlbihvYmosIGR1cmF0aW9uLCBlYXNlKSB7XG4gICAgdmFyIGxhc3QgPSB0aGlzLmxhc3Q7XG4gICAgdmFyIHR3ZWVuID0gbmV3IFR3ZWVuKG9iaik7XG4gICAgdHdlZW4uZGVidWcgPSB0aGlzLmRlYnVnO1xuICAgIHR3ZWVuLnN0YXJ0ID0gbGFzdC5zdGFydCArIGxhc3QuZHVyYXRpb247XG4gICAgdHdlZW4uZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAwO1xuICAgIHR3ZWVuLnN0YXRlID0gMDtcbiAgICB0d2Vlbi5lYXNlID0gZWFzZTtcbiAgICB0d2Vlbi5wcmV2ID0gbGFzdDtcbiAgICBsYXN0Lm5leHQgPSB0d2VlbjtcbiAgICB0aGlzLmxhc3QgPSB0d2VlbjtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICBfZ2V0TGFzdFBhcmFtKGZpZWxkKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMubGFzdC5wcmV2O1xuICAgIHdoaWxlIChyZWYpIHtcbiAgICAgIGlmIChyZWYub2JqID09PSB0aGlzLm9iaiAmJiByZWYucGFyYW1zVG8gJiYgcmVmLnBhcmFtc1RvW2ZpZWxkXSAhPT0gdW5kZWZpbmVkICYmIHJlZi5wYXJhbXNUb1tmaWVsZF0gIT09IG51bGwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWYgPSByZWYucHJldjtcbiAgICB9XG4gICAgdmFyIHYgPSByZWYgPyByZWYucGFyYW1zVG9bZmllbGRdIDogdGhpcy5vYmpbZmllbGRdO1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbmV3IHR3ZWVuLCB3aXRoIG5ldyB0YXJnZXQuXG4gICAqIEBtZXRob2QgVHdlZW4jYWRkXG4gICAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAgICogQHJldHVybnMgVHdlZW5cbiAgICovXG4gIGFkZChvYmopIHtcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2VlbihvYmosIDAsIGxpbmVhcik7XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHR3ZWVuIHRoYXQgc3RhcnRzIHdpdGggc3BlY2lmaWVkIHZhbHVlcy5cbiAgICogQG1ldGhvZCBUd2VlbiNmcm9tXG4gICAqIEBwYXJhbSBwcm9wcyB7b2JqZWN0fSBWYWx1ZXMgdGhhdCB0aGUgdHdlZW4gd2lsbCBjb21lIGZyb20uXG4gICAqIEBwYXJhbSBkdXJhdGlvbiB7ZmxvYXR9IFR3ZWVuJ3MgZHVyYXRpb24uXG4gICAqIEBwYXJhbSBbZWFzZV0ge2Z1bmN0aW9ufSBUd2VlbidzIGVhc2luZyBjdXJ2ZS5cbiAgICogQHJldHVybnMgVHdlZW5cbiAgICovXG4gIGZyb20ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG4gICAgdmFyIHR3ZWVuID0gdGhpcy5fZ2V0VHdlZW4odGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlKTtcbiAgICB0d2Vlbi5uYW1lID0gJ2Zyb20nO1xuICAgIHR3ZWVuLnBhcmFtc0Zyb20gPSBwcm9wcztcbiAgICB0d2Vlbi5wYXJhbXNUbyA9IHt9O1xuICAgIGZvciAodmFyIGYgaW4gcHJvcHMpIHtcbiAgICAgIHR3ZWVuLnBhcmFtc1RvW2ZdID0gdGhpcy5fZ2V0TGFzdFBhcmFtKGYpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSB0d2VlbiB0aGF0IGVuZHMgd2l0aCBzcGVjaWZpZWQgdmFsdWVzLlxuICAgKiBAbWV0aG9kIFR3ZWVuI3RvXG4gICAqIEBwYXJhbSBwcm9wcyB7b2JqZWN0fSBWYWx1ZXMgdGhhdCB0aGUgdHdlZW4gd2lsbCBnbyB0by5cbiAgICogQHBhcmFtIGR1cmF0aW9uIHtmbG9hdH0gVHdlZW4ncyBkdXJhdGlvbi5cbiAgICogQHBhcmFtIFtlYXNlXSB7ZnVuY3Rpb259IFR3ZWVuJ3MgZWFzaW5nIGN1cnZlLlxuICAgKiBAcmV0dXJucyBUd2VlblxuICAgKi9cbiAgdG8ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG4gICAgdmFyIHR3ZWVuID0gdGhpcy5fZ2V0VHdlZW4odGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlKTtcbiAgICB0d2Vlbi5uYW1lID0gJ3RvJztcbiAgICB0d2Vlbi5wYXJhbXNUbyA9IHByb3BzO1xuICAgIHR3ZWVuLnBhcmFtc0Zyb20gPSB7fTtcbiAgICBmb3IgKHZhciBmIGluIHByb3BzKSB7XG4gICAgICB0d2Vlbi5wYXJhbXNGcm9tW2ZdID0gdGhpcy5fZ2V0TGFzdFBhcmFtKGYpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBIb2xkIHRoZSB0d2VlbiBmb3IgYSB3aGlsZSBiZWZvcmUgbmV4dCBjb21tYW5kcy5cbiAgICogQG1ldGhvZCBUd2VlbiN3YWl0XG4gICAqIEBwYXJhbSBkdXJhdGlvbiB7ZmxvYXR9IFRpbWUgdG8gd2FpdC5cbiAgICogQHJldHVybnMgVHdlZW5cbiAgICovXG4gIHdhaXQoZHVyYXRpb24pIHtcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2Vlbih0aGlzLm9iaiwgZHVyYXRpb24sIG51bGwpO1xuICAgIHR3ZWVuLm5hbWUgPSAnd2FpdCc7XG4gICAgdHdlZW4ucGFyYW1zRnJvbSA9IHR3ZWVuLnByZXYucGFyYW1zRnJvbTtcbiAgICB0d2Vlbi5wYXJhbXNUbyA9IHR3ZWVuLnByZXYucGFyYW1zVG87XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgY2FsbGJhY2sgd2hlbiB0aGUgcHJldmlvdXMgY29tbWFuZHMgYXJlIGNvbXBsZXRlZC5cbiAgICogQG1ldGhvZCBUd2VlbiN0aGVuXG4gICAqIEBwYXJhbSBjYWxsYmFjayB7ZnVuY3Rpb259IE1ldGhvZCB0aGEgd2lsbCBiZSBleGVjdXRlZCBhcyBjYWxsYmFjay5cbiAgICogQHJldHVybnMgVHdlZW5cbiAgICovXG4gIHRoZW4oY2FsbGJhY2spIHtcbiAgICB0aGlzLmxhc3Qub25Db21wbGV0ZSA9IGNhbGxiYWNrO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VGltZSh2YWx1ZSkge1xuICAgIHZhciBkZWx0YSA9IHZhbHVlIC0gdGhpcy50aW1lO1xuICAgIHRoaXMudXBkYXRlKGRlbHRhKTtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YSkge1xuICAgIGlmIChkZWx0YSkge1xuICAgICAgdGhpcy50aW1lICs9IGRlbHRhO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5leHQgJiYgZGVsdGEgPCAwKSB7XG4gICAgICB0aGlzLm5leHQudXBkYXRlKGRlbHRhKTtcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gdGhpcy5zdGFydCArIHRoaXMuZHVyYXRpb247XG4gICAgaWYgKHRoaXMudGltZSA+PSB0aGlzLnN0YXJ0ICYmIHRoaXMudGltZSA8IGVuZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFR3ZWVuLlJVTk5JTkcgJiYgdGhpcy5kZWJ1Zykge1xuICAgICAgICB0aGlzLmxvZygnc3RhcnRlZCcpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IFR3ZWVuLlJVTk5JTkc7XG4gICAgICB0aGlzLnVwZGF0ZVByb3BzKHRoaXMudGltZSAtIHRoaXMuc3RhcnQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50aW1lIDwgdGhpcy5zdGFydCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFR3ZWVuLklETEUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFR3ZWVuLklETEU7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcHMoMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRpbWUgPj0gZW5kKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gVHdlZW4uQ09NUExFVEVEKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBUd2Vlbi5DT01QTEVURUQ7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcHModGhpcy5kdXJhdGlvbik7XG4gICAgICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICAgICAgdGhpcy5sb2coJ2NvbXBsZXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm5leHQgJiYgZGVsdGEgPiAwKSB7XG4gICAgICB0aGlzLm5leHQudXBkYXRlKGRlbHRhKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQcm9wcyh0aW1lKSB7XG4gICAgaWYgKCF0aGlzLmVhc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcmF0aW8gPSAwO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IFR3ZWVuLlJVTk5JTkcpIHtcbiAgICAgIHJhdGlvID0gdGhpcy5lYXNlKHRpbWUvdGhpcy5kdXJhdGlvbik7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgZiBpbiB0aGlzLnBhcmFtc1RvKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY2FzZSBUd2Vlbi5JRExFIDpcbiAgICAgICAgICB0aGlzLm9ialtmXSA9IHRoaXMucGFyYW1zRnJvbVtmXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVHdlZW4uQ09NUExFVEVEIDpcbiAgICAgICAgICB0aGlzLm9ialtmXSA9IHRoaXMucGFyYW1zVG9bZl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICB2YXIgdmYgPSB0aGlzLnBhcmFtc0Zyb21bZl07XG4gICAgICAgICAgdmFyIHZ0ID0gdGhpcy5wYXJhbXNUb1tmXTtcbiAgICAgICAgICB0aGlzLm9ialtmXSA9IHZmICsgKHZ0IC0gdmYpKnJhdGlvO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaW5pc2hlZCgpIHtcbiAgICB2YXIgciA9IHRoaXMuc3RhdGUgPT09IFR3ZWVuLkNPTVBMRVRFO1xuICAgIGlmIChyICYmIHRoaXMubmV4dCkge1xuICAgICAgciA9IHRoaXMubmV4dC5maW5pc2hlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMubmV4dCkge1xuICAgICAgdGhpcy5uZXh0LmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgIHRoaXMubG9nKCdkaXNwb3NlZCEnKTtcbiAgICB9XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubGFzdCA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXNGcm9tID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtc1RvID0gbnVsbDtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xuICB9XG5cbiAgbG9nKG1zZykge1xuICAgIGlmICh0aGlzLm9iai5uYW1lICYmIHRoaXMubmFtZSkge1xuICAgICAgY29uc29sZS5sb2coJ1tUd2Vlbl0nLCB0aGlzLm9iai5uYW1lLCB0aGlzLm5hbWUsIG1zZyk7XG4gICAgfVxuICB9XG5cbn1cblxuVHdlZW4uSURMRSA9IElETEU7XG5Ud2Vlbi5SVU5OSU5HID0gUlVOTklORztcblR3ZWVuLkNPTVBMRVRFRCA9IENPTVBMRVRFRDtcbiIsImltcG9ydCBUd2VlbiBmcm9tICcuL1R3ZWVuJztcbmltcG9ydCBlYXNlcyBmcm9tICdlYXNlcyc7XG5cbi8qKlxuICogQSB0d2VlbiBtYW5hZ2VyLiBEZWFscyB3aXRoIHR3ZWVuIGNyZWF0aW9uLCB1cGRhdGUgYW5kIGRlc3RydWN0aW9uLlxuICogQGNsYXNzIFR3ZWVuZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIFthdXRvVXBkYXRlUmF0ZV0ge2Zsb2F0fSBJbnRlcnZhbCAoaW4gc2Vjb25kcykgdGhhdCBhbGwgdHdlZW5zIHdpbGwgYmUgdXBkYXRlZC4gSWYgMCwgdGhlIGF1dG8tdXBkYXRlIHdpbGwgbm90XG4gKiBydW4sIHNvIHlvdSBtdXN0IGhhbmRsZSB0aGUgdXBkYXRlIG1hbnVhbGx5LiBEZWZhdWx0IGlzIDAuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuZXIge1xuXG4gIGNvbnN0cnVjdG9yKGF1dG9VcGRhdGVSYXRlKSB7XG4gICAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xuICAgIHRoaXMudHdlZW5zID0gW107XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgIGlmIChhdXRvVXBkYXRlUmF0ZSA+IDApIHtcbiAgICAgIHRoaXMuZW5hYmxlQXV0b1VwZGF0ZShhdXRvVXBkYXRlUmF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgVHdlZW4gaW5zdGFuY2Ugd2l0aCByZWZlcmVuY2VkIG9iamVjdC5cbiAgICogQG1ldGhvZCBUd2VlbmVyI2FkZFxuICAgKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHR3ZWVuZWQuXG4gICAqIEByZXR1cm4gVHdlZW5cbiAgICovXG4gIGFkZChvYmopIHtcbiAgICB2YXIgdHdlZW4gPSBuZXcgVHdlZW4ob2JqKTtcbiAgICB0d2Vlbi5kZWJ1ZyA9IHRoaXMuZGVidWc7XG4gICAgdGhpcy50d2VlbnMucHVzaCh0d2Vlbik7XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgdHdlZW4gaW5zdGFuY2VzIHRoYXQgaGF2ZSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdC5cbiAgICogQG1ldGhvZCBUd2VlbmVyI3JlbW92ZVxuICAgKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSB0d2VlbmVkIG9iamVjdC5cbiAgICovXG4gIHJlbW92ZShvYmopIHtcbiAgICB2YXIgaSA9IHRoaXMudHdlZW5zLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgdCA9IHRoaXMudHdlZW5zW2ldO1xuICAgICAgaWYgKHQub2JqID09PSBvYmopIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveSh0LCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUnVucyB0aGUgdXBkYXRlIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgKiBAbWV0aG9kIFR3ZWVuZXIjZW5hYmxlQXV0b1VwZGF0ZVxuICAgKiBAcGFyYW0gcmF0ZSB7ZmxvYXR9IEludGVydmFsIChpbiBzZWNvbmRzKSB0aGF0IHRoZSB1cGRhdGUgd2lsbCBiZSBwbGF5ZWQuXG4gICAqIElmIDAgb3IgbG93ZXIsIHRoZSBhdXRvbWF0aWMgdXBkYXRlIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBlbmFibGVBdXRvVXBkYXRlKHJhdGUpIHtcbiAgICBpZiAoIXJhdGUpIHtcbiAgICAgIHRoaXMuZGlzYWJsZUF1dG9VcGRhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHRpbWUgPSBzZWxmLmdldFRpbWUoKTtcbiAgICBzZWxmLl9pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHQgPSBzZWxmLmdldFRpbWUoKTtcbiAgICAgIHZhciBkID0gdCAtIHRpbWU7XG4gICAgICB0aW1lID0gdDtcbiAgICAgIHNlbGYudXBkYXRlKGQpO1xuICAgIH0sIHJhdGUqMTAwMCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgdGhlIGF1dG9tYXRpYyB1cGRhdGUuXG4gICAqIEBtZXRob2QgVHdlZW5lciNkaXNhYmxlQXV0b1VwZGF0ZVxuICAgKi9cbiAgZGlzYWJsZUF1dG9VcGRhdGUoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFsbCB0d2VlbnMuXG4gICAqIEBtZXRob2QgVHdlZW5lciN1cGRhdGVcbiAgICogQHBhcmFtIGRlbHRhIHtmbG9hdH0gVGhlIGVsYXBzZWQgdGltZSAoaW4gc2Vjb25kcykgc2luY2UgbGFzdCB1cGRhdGUuXG4gICAqL1xuICB1cGRhdGUoZGVsdGEpIHtcbiAgICB2YXIgaSA9IHRoaXMudHdlZW5zLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgdCA9IHRoaXMudHdlZW5zW2ldO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdC51cGRhdGUoZGVsdGEpO1xuICAgICAgICBpZiAodC5maW5pc2hlZCgpKSB7XG4gICAgICAgICAgdGhpcy5fZGVzdHJveSh0LCBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IFR3ZWVuZXIgaW5zdGFuY2UuXG4gICAqIEBtZXRob2QgVHdlZW5lciNkaXNwb3NlXG4gICAqL1xuICBkaXNwb3NlKCkge1xuICAgIHRoaXMudHdlZW5zID0gbnVsbDtcbiAgICB0aGlzLmRpc2FibGVBdXRvVXBkYXRlKCk7XG4gIH1cblxuICBfZGVzdHJveSh0d2VlbiwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5kZXggPSB0aGlzLnR3ZWVuLmluZGV4T2YodHdlZW4pO1xuICAgIH1cbiAgICB0aGlzLnR3ZWVucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHR3ZWVuLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpLzEwMDA7XG4gIH1cblxufVxuXG5Ud2VlbmVyLlR3ZWVuID0gVHdlZW47XG5Ud2VlbmVyLmVhc2UgPSBlYXNlcztcbiIsImltcG9ydCBUd2VlbmVyIGZyb20gJy4vVHdlZW5lcic7XG5cbmlmICh0eXBlb2Yod2luZG93KSA9PT0gXCJvYmplY3RcIikge1xuICB3aW5kb3cuVHdlZW5lciA9IFR3ZWVuZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5lcjtcbiJdfQ==
