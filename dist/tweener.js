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

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _linear = require('eases');

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
    this.ease = _linear.linear;

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
        if (ref.obj === this.obj && ref.paramsTo && ref.paramsTo[field] !== undefined && ref.paramsTo[field] !== null) break;
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
      var tween = this._getTween(obj, 0, _linear.linear);
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
      if (delta) this.time += delta;

      if (this.next && delta < 0) this.next.update(delta);

      var end = this.start + this.duration;
      if (this.time >= this.start && this.time < end) {
        if (this.state != Tween.RUNNING) if (this.debug) this.log('started');
        this.state = Tween.RUNNING;
        this.updateProps(this.time - this.start);
      } else if (this.time < this.start) {
        if (this.state !== Tween.IDLE) {
          this.updateProps(0);
          this.state = Tween.IDLE;
        }
      } else if (this.time >= end) {
        if (this.state !== Tween.COMPLETED) {
          this.updateProps(this.duration);
          this.state = Tween.COMPLETED;
          if (this.debug) this.log('completed');
          if (this.onComplete) this.onComplete();
        }
      }

      if (this.next && delta > 0) this.next.update(delta);
    }
  }, {
    key: 'updateProps',
    value: function updateProps(time) {
      if (!this.ease) {
        return;
      }var ratio = this.ease(time / this.duration);
      for (var f in this.paramsTo) {
        var vf = this.paramsFrom[f];
        var vt = this.paramsTo[f];
        var vc = vf + (vt - vf) * ratio;
        this.obj[f] = vc;
      }
    }
  }, {
    key: 'finished',
    value: function finished() {
      var r = this.time >= this.start + this.duration;
      if (r && this.next) r = this.next.finished();
      return r;
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      if (this.next) this.next.dispose();
      if (this.debug) this.log('disposed!');
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
      if (this.obj.name && this.name) console.log('[Tween]', this.obj.name, this.name, msg);
    }
  }], [{
    key: 'IDLE',
    value: 0,
    enumerable: true
  }, {
    key: 'RUNNING',
    value: 1,
    enumerable: true
  }, {
    key: 'COMPLETED',
    value: 2,
    enumerable: true
  }]);

  return Tween;
})();

exports['default'] = Tween;
module.exports = exports['default'];

},{"eases":19}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _Tween = require('./Tween');

var _Tween2 = _interopRequireDefault(_Tween);

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
    if (autoUpdateRate > 0) this.enableAutoUpdate(autoUpdateRate);
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
        if (t.obj === obj) this._destroy(t, i);
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
        t.update(delta);
        if (t.finished()) this._destroy(t, i);
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
      if (index === undefined) index = this.tween.indexOf(tween);
      this.tweens.splice(index, 1);
      tween.dispose();
    }
  }, {
    key: 'getTime',
    value: function getTime() {
      return new Date().getTime() / 1000;
    }
  }], [{
    key: 'Tween',
    value: _Tween2['default'],
    enumerable: true
  }, {
    key: 'ease',
    value: require('eases'),
    enumerable: true
  }]);

  return Tweener;
})();

exports['default'] = Tweener;
module.exports = exports['default'];

},{"./Tween":33,"eases":19}],35:[function(require,module,exports){
"use strict";

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _Tweener = require("./Tweener");

var _Tweener2 = _interopRequireDefault(_Tweener);

if (typeof window === "object") {
  window.Tweener = _Tweener2["default"];
}

module.exports = _Tweener2["default"];

},{"./Tweener":34}]},{},[35])(35)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9iYWNrLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2UtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2JvdW5jZS1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2Utb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY2lyYy1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY3ViaWMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2VsYXN0aWMtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvZXhwby1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzZXMvbGluZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhZC1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhcnQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWludC1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvc2luZS1vdXQuanMiLCIvVXNlcnMvbWF1cm9kZXRhcnNvL1NpdGVzL0dhbWVzL3R3ZWVuZXIvc291cmNlL1R3ZWVuLmpzIiwiL1VzZXJzL21hdXJvZGV0YXJzby9TaXRlcy9HYW1lcy90d2VlbmVyL3NvdXJjZS9Ud2VlbmVyLmpzIiwiL1VzZXJzL21hdXJvZGV0YXJzby9TaXRlcy9HYW1lcy90d2VlbmVyL3NvdXJjZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O3NCQ0pxQixPQUFPOzs7Ozs7Ozs7SUFRUCxLQUFLO0FBTWIsV0FOUSxLQUFLLENBTVosR0FBRyxFQUFFOzBCQU5FLEtBQUs7O0FBT3RCLFFBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsUUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7O0FBRWYsUUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZixRQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNsQixRQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7QUFFZixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixRQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzs7QUFFZCxRQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixRQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixRQUFJLENBQUMsSUFBSSxXQTlCTCxNQUFNLEFBOEJRLENBQUM7O0FBRW5CLFFBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0dBQ3hCOztlQXpCa0IsS0FBSzs7V0EyQmYsbUJBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7QUFDN0IsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQixVQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQixXQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDekIsV0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDekMsV0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksQ0FBQyxDQUFDO0FBQy9CLFdBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLFdBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFdBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFVBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLFVBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLGFBQU8sS0FBSyxDQUFDO0tBQ2Q7OztXQUVZLHVCQUFDLEtBQUssRUFBRTtBQUNuQixVQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixhQUFPLEdBQUcsRUFBRTtBQUNWLFlBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsTUFBTTtBQUNySCxXQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztPQUNoQjtBQUNELFVBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsYUFBTyxDQUFDLENBQUM7S0FDVjs7Ozs7Ozs7OztXQVFFLGFBQUMsR0FBRyxFQUFFO0FBQ1AsVUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQWxFN0IsTUFBTSxDQWtFZ0MsQ0FBQztBQUMzQyxhQUFPLEtBQUssQ0FBQztLQUNkOzs7Ozs7Ozs7Ozs7V0FVRyxjQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0FBQzFCLFVBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckQsV0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDcEIsV0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDekIsV0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDcEIsV0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDbkIsYUFBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQzNDO0FBQ0QsYUFBTyxJQUFJLENBQUM7S0FDYjs7Ozs7Ozs7Ozs7O1dBVUMsWUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtBQUN4QixVQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JELFdBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFdBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLFdBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLFdBQUssSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFO0FBQ25CLGFBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUM3QztBQUNELGFBQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7Ozs7Ozs7V0FRRyxjQUFDLFFBQVEsRUFBRTtBQUNiLFVBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckQsV0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDcEIsV0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUN6QyxXQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3JDLGFBQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7Ozs7Ozs7V0FRRyxjQUFDLFFBQVEsRUFBRTtBQUNiLFVBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUNoQyxhQUFPLElBQUksQ0FBQztLQUNiOzs7V0FFTSxpQkFBQyxLQUFLLEVBQUU7QUFDYixVQUFJLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUM5QixVQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCOzs7V0FFTSxtQkFBRztBQUNSLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjs7O1dBRUssZ0JBQUMsS0FBSyxFQUFFO0FBQ1osVUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7O0FBRTlCLFVBQUksSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVwRCxVQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDckMsVUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUU7QUFDOUMsWUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckUsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQzNCLFlBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDMUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNqQyxZQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRTtBQUM3QixjQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLGNBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztTQUN6QjtPQUNGLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtBQUMzQixZQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUNsQyxjQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxjQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7QUFDN0IsY0FBSSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEMsY0FBSSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUN4QztPQUNGOztBQUVELFVBQUksSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JEOzs7V0FFVSxxQkFBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO0FBQUUsZUFBTztPQUFBLEFBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQyxXQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDM0IsWUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QixZQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFCLFlBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUEsR0FBRSxLQUFLLENBQUM7QUFDOUIsWUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7T0FDbEI7S0FDRjs7O1dBRU8sb0JBQUc7QUFDVCxVQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNoRCxVQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdDLGFBQU8sQ0FBQyxDQUFDO0tBQ1Y7OztXQUVNLG1CQUFHO0FBQ1IsVUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDbkMsVUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEMsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDdkIsVUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDeEI7OztXQUVFLGFBQUMsR0FBRyxFQUFFO0FBQ1AsVUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDdkY7OztXQTdMYSxDQUFDOzs7O1dBQ0UsQ0FBQzs7OztXQUNDLENBQUM7Ozs7U0FKRCxLQUFLOzs7cUJBQUwsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztxQkNSUixTQUFTOzs7Ozs7Ozs7Ozs7SUFTTixPQUFPO0FBSWYsV0FKUSxPQUFPLENBSWQsY0FBYyxFQUFFOzBCQUpULE9BQU87O0FBS3hCLFFBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFFBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLFFBQUksY0FBYyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7R0FDL0Q7O2VBVGtCLE9BQU87Ozs7Ozs7OztXQWlCdkIsYUFBQyxHQUFHLEVBQUU7QUFDUCxVQUFJLEtBQUssR0FBRyx1QkFBVSxHQUFHLENBQUMsQ0FBQztBQUMzQixXQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDekIsVUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEIsYUFBTyxLQUFLLENBQUM7S0FDZDs7Ozs7Ozs7O1dBT0ssZ0JBQUMsR0FBRyxFQUFFO0FBQ1YsVUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDM0IsYUFBTyxDQUFDLEVBQUUsRUFBRTtBQUNWLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsWUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztPQUN4QztLQUNGOzs7Ozs7Ozs7O1dBUWUsMEJBQUMsSUFBSSxFQUFFO0FBQ3JCLFVBQUksQ0FBQyxJQUFJLEVBQUU7QUFDVCxZQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUN6QixlQUFPO09BQ1I7O0FBRUQsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMxQixVQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxZQUFXO0FBQ3RDLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN2QixZQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksR0FBRyxDQUFDLENBQUM7QUFDVCxZQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hCLEVBQUUsSUFBSSxHQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7Ozs7O1dBTWdCLDZCQUFHO0FBQ2xCLG1CQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQy9COzs7Ozs7Ozs7V0FPSyxnQkFBQyxLQUFLLEVBQUU7QUFDWixVQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMzQixhQUFPLENBQUMsRUFBRSxFQUFFO0FBQ1YsWUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixTQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hCLFlBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO09BQ3ZDO0tBQ0Y7Ozs7Ozs7O1dBTU0sbUJBQUc7QUFDUixVQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQixVQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUMxQjs7O1dBRU8sa0JBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUNyQixVQUFJLEtBQUssS0FBSyxTQUFTLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNELFVBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QixXQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDakI7OztXQUVNLG1CQUFHO0FBQ1IsYUFBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFDLElBQUksQ0FBQztLQUNsQzs7Ozs7OztXQWhHYSxPQUFPLENBQUMsT0FBTyxDQUFDOzs7O1NBRlgsT0FBTzs7O3FCQUFQLE9BQU87Ozs7Ozs7O3VCQ1RSLFdBQVc7Ozs7QUFFL0IsSUFBSSxPQUFPLE1BQU0sQUFBQyxLQUFLLFFBQVEsRUFBRTtBQUMvQixRQUFNLENBQUMsT0FBTyx1QkFBVSxDQUFDO0NBQzFCOztBQUVELE1BQU0sQ0FBQyxPQUFPLHVCQUFVLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gYmFja0luT3V0KHQpIHtcbiAgdmFyIHMgPSAxLjcwMTU4ICogMS41MjVcbiAgaWYgKCh0ICo9IDIpIDwgMSlcbiAgICByZXR1cm4gMC41ICogKHQgKiB0ICogKChzICsgMSkgKiB0IC0gcykpXG4gIHJldHVybiAwLjUgKiAoKHQgLT0gMikgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAyKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhY2tJbk91dCIsImZ1bmN0aW9uIGJhY2tJbih0KSB7XG4gIHZhciBzID0gMS43MDE1OFxuICByZXR1cm4gdCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhY2tJbiIsImZ1bmN0aW9uIGJhY2tPdXQodCkge1xuICB2YXIgcyA9IDEuNzAxNThcbiAgcmV0dXJuIC0tdCAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrT3V0IiwidmFyIGJvdW5jZU91dCA9IHJlcXVpcmUoJy4vYm91bmNlLW91dCcpXG5cbmZ1bmN0aW9uIGJvdW5jZUluT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/IDAuNSAqICgxLjAgLSBib3VuY2VPdXQoMS4wIC0gdCAqIDIuMCkpXG4gICAgOiAwLjUgKiBib3VuY2VPdXQodCAqIDIuMCAtIDEuMCkgKyAwLjVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBib3VuY2VJbk91dCIsInZhciBib3VuY2VPdXQgPSByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKVxuXG5mdW5jdGlvbiBib3VuY2VJbih0KSB7XG4gIHJldHVybiAxLjAgLSBib3VuY2VPdXQoMS4wIC0gdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBib3VuY2VJbiIsImZ1bmN0aW9uIGJvdW5jZU91dCh0KSB7XG4gIHZhciBhID0gNC4wIC8gMTEuMFxuICB2YXIgYiA9IDguMCAvIDExLjBcbiAgdmFyIGMgPSA5LjAgLyAxMC4wXG5cbiAgdmFyIGNhID0gNDM1Ni4wIC8gMzYxLjBcbiAgdmFyIGNiID0gMzU0NDIuMCAvIDE4MDUuMFxuICB2YXIgY2MgPSAxNjA2MS4wIC8gMTgwNS4wXG5cbiAgdmFyIHQyID0gdCAqIHRcblxuICByZXR1cm4gdCA8IGFcbiAgICA/IDcuNTYyNSAqIHQyXG4gICAgOiB0IDwgYlxuICAgICAgPyA5LjA3NSAqIHQyIC0gOS45ICogdCArIDMuNFxuICAgICAgOiB0IDwgY1xuICAgICAgICA/IGNhICogdDIgLSBjYiAqIHQgKyBjY1xuICAgICAgICA6IDEwLjggKiB0ICogdCAtIDIwLjUyICogdCArIDEwLjcyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlT3V0IiwiZnVuY3Rpb24gY2lyY0luT3V0KHQpIHtcbiAgaWYgKCh0ICo9IDIpIDwgMSkgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKVxuICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2lyY0luT3V0IiwiZnVuY3Rpb24gY2lyY0luKHQpIHtcbiAgcmV0dXJuIDEuMCAtIE1hdGguc3FydCgxLjAgLSB0ICogdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaXJjSW4iLCJmdW5jdGlvbiBjaXJjT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gKCAtLXQgKiB0ICkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2lyY091dCIsImZ1bmN0aW9uIGN1YmljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gNC4wICogdCAqIHQgKiB0XG4gICAgOiAwLjUgKiBNYXRoLnBvdygyLjAgKiB0IC0gMi4wLCAzLjApICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViaWNJbk91dCIsImZ1bmN0aW9uIGN1YmljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViaWNJbiIsImZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgdmFyIGYgPSB0IC0gMS4wXG4gIHJldHVybiBmICogZiAqIGYgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdWJpY091dCIsImZ1bmN0aW9uIGVsYXN0aWNJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyAwLjUgKiBNYXRoLnNpbigrMTMuMCAqIE1hdGguUEkvMiAqIDIuMCAqIHQpICogTWF0aC5wb3coMi4wLCAxMC4wICogKDIuMCAqIHQgLSAxLjApKVxuICAgIDogMC41ICogTWF0aC5zaW4oLTEzLjAgKiBNYXRoLlBJLzIgKiAoKDIuMCAqIHQgLSAxLjApICsgMS4wKSkgKiBNYXRoLnBvdygyLjAsIC0xMC4wICogKDIuMCAqIHQgLSAxLjApKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsYXN0aWNJbk91dCIsImZ1bmN0aW9uIGVsYXN0aWNJbih0KSB7XG4gIHJldHVybiBNYXRoLnNpbigxMy4wICogdCAqIE1hdGguUEkvMikgKiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxhc3RpY0luIiwiZnVuY3Rpb24gZWxhc3RpY091dCh0KSB7XG4gIHJldHVybiBNYXRoLnNpbigtMTMuMCAqICh0ICsgMS4wKSAqIE1hdGguUEkvMikgKiBNYXRoLnBvdygyLjAsIC0xMC4wICogdCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbGFzdGljT3V0IiwiZnVuY3Rpb24gZXhwb0luT3V0KHQpIHtcbiAgcmV0dXJuICh0ID09PSAwLjAgfHwgdCA9PT0gMS4wKVxuICAgID8gdFxuICAgIDogdCA8IDAuNVxuICAgICAgPyArMC41ICogTWF0aC5wb3coMi4wLCAoMjAuMCAqIHQpIC0gMTAuMClcbiAgICAgIDogLTAuNSAqIE1hdGgucG93KDIuMCwgMTAuMCAtICh0ICogMjAuMCkpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb0luT3V0IiwiZnVuY3Rpb24gZXhwb0luKHQpIHtcbiAgcmV0dXJuIHQgPT09IDAuMCA/IHQgOiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb0luIiwiZnVuY3Rpb24gZXhwb091dCh0KSB7XG4gIHJldHVybiB0ID09PSAxLjAgPyB0IDogMS4wIC0gTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb091dCIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHQnYmFja0luT3V0JzogcmVxdWlyZSgnLi9iYWNrLWluLW91dCcpLFxuXHQnYmFja0luJzogcmVxdWlyZSgnLi9iYWNrLWluJyksXG5cdCdiYWNrT3V0JzogcmVxdWlyZSgnLi9iYWNrLW91dCcpLFxuXHQnYm91bmNlSW5PdXQnOiByZXF1aXJlKCcuL2JvdW5jZS1pbi1vdXQnKSxcblx0J2JvdW5jZUluJzogcmVxdWlyZSgnLi9ib3VuY2UtaW4nKSxcblx0J2JvdW5jZU91dCc6IHJlcXVpcmUoJy4vYm91bmNlLW91dCcpLFxuXHQnY2lyY0luT3V0JzogcmVxdWlyZSgnLi9jaXJjLWluLW91dCcpLFxuXHQnY2lyY0luJzogcmVxdWlyZSgnLi9jaXJjLWluJyksXG5cdCdjaXJjT3V0JzogcmVxdWlyZSgnLi9jaXJjLW91dCcpLFxuXHQnY3ViaWNJbk91dCc6IHJlcXVpcmUoJy4vY3ViaWMtaW4tb3V0JyksXG5cdCdjdWJpY0luJzogcmVxdWlyZSgnLi9jdWJpYy1pbicpLFxuXHQnY3ViaWNPdXQnOiByZXF1aXJlKCcuL2N1YmljLW91dCcpLFxuXHQnZWxhc3RpY0luT3V0JzogcmVxdWlyZSgnLi9lbGFzdGljLWluLW91dCcpLFxuXHQnZWxhc3RpY0luJzogcmVxdWlyZSgnLi9lbGFzdGljLWluJyksXG5cdCdlbGFzdGljT3V0JzogcmVxdWlyZSgnLi9lbGFzdGljLW91dCcpLFxuXHQnZXhwb0luT3V0JzogcmVxdWlyZSgnLi9leHBvLWluLW91dCcpLFxuXHQnZXhwb0luJzogcmVxdWlyZSgnLi9leHBvLWluJyksXG5cdCdleHBvT3V0JzogcmVxdWlyZSgnLi9leHBvLW91dCcpLFxuXHQnbGluZWFyJzogcmVxdWlyZSgnLi9saW5lYXInKSxcblx0J3F1YWRJbk91dCc6IHJlcXVpcmUoJy4vcXVhZC1pbi1vdXQnKSxcblx0J3F1YWRJbic6IHJlcXVpcmUoJy4vcXVhZC1pbicpLFxuXHQncXVhZE91dCc6IHJlcXVpcmUoJy4vcXVhZC1vdXQnKSxcblx0J3F1YXJ0SW5PdXQnOiByZXF1aXJlKCcuL3F1YXJ0LWluLW91dCcpLFxuXHQncXVhcnRJbic6IHJlcXVpcmUoJy4vcXVhcnQtaW4nKSxcblx0J3F1YXJ0T3V0JzogcmVxdWlyZSgnLi9xdWFydC1vdXQnKSxcblx0J3F1aW50SW5PdXQnOiByZXF1aXJlKCcuL3F1aW50LWluLW91dCcpLFxuXHQncXVpbnRJbic6IHJlcXVpcmUoJy4vcXVpbnQtaW4nKSxcblx0J3F1aW50T3V0JzogcmVxdWlyZSgnLi9xdWludC1vdXQnKSxcblx0J3NpbmVJbk91dCc6IHJlcXVpcmUoJy4vc2luZS1pbi1vdXQnKSxcblx0J3NpbmVJbic6IHJlcXVpcmUoJy4vc2luZS1pbicpLFxuXHQnc2luZU91dCc6IHJlcXVpcmUoJy4vc2luZS1vdXQnKVxufSIsImZ1bmN0aW9uIGxpbmVhcih0KSB7XG4gIHJldHVybiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGluZWFyIiwiZnVuY3Rpb24gcXVhZEluT3V0KHQpIHtcbiAgICB0IC89IDAuNVxuICAgIGlmICh0IDwgMSkgcmV0dXJuIDAuNSp0KnRcbiAgICB0LS1cbiAgICByZXR1cm4gLTAuNSAqICh0Kih0LTIpIC0gMSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFkSW5PdXQiLCJmdW5jdGlvbiBxdWFkSW4odCkge1xuICByZXR1cm4gdCAqIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFkSW4iLCJmdW5jdGlvbiBxdWFkT3V0KHQpIHtcbiAgcmV0dXJuIC10ICogKHQgLSAyLjApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZE91dCIsImZ1bmN0aW9uIHF1YXJ0aWNJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyArOC4wICogTWF0aC5wb3codCwgNC4wKVxuICAgIDogLTguMCAqIE1hdGgucG93KHQgLSAxLjAsIDQuMCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljSW5PdXQiLCJmdW5jdGlvbiBxdWFydGljSW4odCkge1xuICByZXR1cm4gTWF0aC5wb3codCwgNC4wKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YXJ0aWNJbiIsImZ1bmN0aW9uIHF1YXJ0aWNPdXQodCkge1xuICByZXR1cm4gTWF0aC5wb3codCAtIDEuMCwgMy4wKSAqICgxLjAgLSB0KSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YXJ0aWNPdXQiLCJmdW5jdGlvbiBxaW50aWNJbk91dCh0KSB7XG4gICAgaWYgKCAoIHQgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiB0ICogdCAqIHQgKiB0ICogdFxuICAgIHJldHVybiAwLjUgKiAoICggdCAtPSAyICkgKiB0ICogdCAqIHQgKiB0ICsgMiApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcWludGljSW5PdXQiLCJmdW5jdGlvbiBxaW50aWNJbih0KSB7XG4gIHJldHVybiB0ICogdCAqIHQgKiB0ICogdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY0luIiwiZnVuY3Rpb24gcWludGljT3V0KHQpIHtcbiAgcmV0dXJuIC0tdCAqIHQgKiB0ICogdCAqIHQgKyAxXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcWludGljT3V0IiwiZnVuY3Rpb24gc2luZUluT3V0KHQpIHtcbiAgcmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSp0KSAtIDEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2luZUluT3V0IiwiZnVuY3Rpb24gc2luZUluKHQpIHtcbiAgcmV0dXJuIDEgLSBNYXRoLmNvcyggdCAqIE1hdGguUEkgLyAyIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lSW4iLCJmdW5jdGlvbiBzaW5lT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKHQgKiBNYXRoLlBJLzIpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2luZU91dCIsImltcG9ydCB7bGluZWFyfSBmcm9tICdlYXNlcyc7XG5cbi8qKlxuICogVGhlIHR3ZWVuIHBsYXllci4gV2lsbCBjaGFuZ2UgdGFyZ2V0IG9iamVjdCB2YWx1ZXMgd2l0aCBzcGVjaWZpZWQgcGFyYW1ldGVycy5cbiAqIEBjbGFzcyBUd2VlblxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHR3ZWVuZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuIHtcblxuICBzdGF0aWMgSURMRSA9IDA7XG4gIHN0YXRpYyBSVU5OSU5HID0gMTtcbiAgc3RhdGljIENPTVBMRVRFRCA9IDI7XG5cbiAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xuICAgIHRoaXMub2JqID0gb2JqO1xuXG4gICAgdGhpcy5zdGFydCA9IDA7XG4gICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IDA7XG5cbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgdGhpcy5sYXN0ID0gdGhpcztcbiAgICB0aGlzLnRpbWUgPSAwO1xuXG4gICAgdGhpcy5wYXJhbXNGcm9tID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtc1RvID0gbnVsbDtcbiAgICB0aGlzLmVhc2UgPSBsaW5lYXI7XG5cbiAgICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xuICB9XG5cbiAgX2dldFR3ZWVuKG9iaiwgZHVyYXRpb24sIGVhc2UpIHtcbiAgICB2YXIgbGFzdCA9IHRoaXMubGFzdDtcbiAgICB2YXIgdHdlZW4gPSBuZXcgVHdlZW4ob2JqKTtcbiAgICB0d2Vlbi5kZWJ1ZyA9IHRoaXMuZGVidWc7XG4gICAgdHdlZW4uc3RhcnQgPSBsYXN0LnN0YXJ0ICsgbGFzdC5kdXJhdGlvbjtcbiAgICB0d2Vlbi5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDA7XG4gICAgdHdlZW4uc3RhdGUgPSAwO1xuICAgIHR3ZWVuLmVhc2UgPSBlYXNlO1xuICAgIHR3ZWVuLnByZXYgPSBsYXN0O1xuICAgIGxhc3QubmV4dCA9IHR3ZWVuO1xuICAgIHRoaXMubGFzdCA9IHR3ZWVuO1xuICAgIHJldHVybiB0d2VlbjtcbiAgfVxuXG4gIF9nZXRMYXN0UGFyYW0oZmllbGQpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5sYXN0LnByZXY7XG4gICAgd2hpbGUgKHJlZikge1xuICAgICAgaWYgKHJlZi5vYmogPT09IHRoaXMub2JqICYmIHJlZi5wYXJhbXNUbyAmJiByZWYucGFyYW1zVG9bZmllbGRdICE9PSB1bmRlZmluZWQgJiYgcmVmLnBhcmFtc1RvW2ZpZWxkXSAhPT0gbnVsbCkgYnJlYWs7XG4gICAgICByZWYgPSByZWYucHJldjtcbiAgICB9XG4gICAgdmFyIHYgPSByZWYgPyByZWYucGFyYW1zVG9bZmllbGRdIDogdGhpcy5vYmpbZmllbGRdO1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbmV3IHR3ZWVuLCB3aXRoIG5ldyB0YXJnZXQuXG4gICAqIEBtZXRob2QgVHdlZW4jYWRkXG4gICAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAgICogQHJldHVybnMgVHdlZW5cbiAgICovXG4gIGFkZChvYmopIHtcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2VlbihvYmosIDAsIGxpbmVhcik7XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHR3ZWVuIHRoYXQgc3RhcnRzIHdpdGggc3BlY2lmaWVkIHZhbHVlcy5cbiAgICogQG1ldGhvZCBUd2VlbiNmcm9tXG4gICAqIEBwYXJhbSBwcm9wcyB7b2JqZWN0fSBWYWx1ZXMgdGhhdCB0aGUgdHdlZW4gd2lsbCBjb21lIGZyb20uXG4gICAqIEBwYXJhbSBkdXJhdGlvbiB7ZmxvYXR9IFR3ZWVuJ3MgZHVyYXRpb24uXG4gICAqIEBwYXJhbSBbZWFzZV0ge2Z1bmN0aW9ufSBUd2VlbidzIGVhc2luZyBjdXJ2ZS5cbiAgICogQHJldHVybnMgVHdlZW5cbiAgICovXG4gIGZyb20ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG4gICAgdmFyIHR3ZWVuID0gdGhpcy5fZ2V0VHdlZW4odGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlKTtcbiAgICB0d2Vlbi5uYW1lID0gJ2Zyb20nO1xuICAgIHR3ZWVuLnBhcmFtc0Zyb20gPSBwcm9wcztcbiAgICB0d2Vlbi5wYXJhbXNUbyA9IHt9O1xuICAgIGZvciAodmFyIGYgaW4gcHJvcHMpIHtcbiAgICAgIHR3ZWVuLnBhcmFtc1RvW2ZdID0gdGhpcy5fZ2V0TGFzdFBhcmFtKGYpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSB0d2VlbiB0aGF0IGVuZHMgd2l0aCBzcGVjaWZpZWQgdmFsdWVzLlxuICAgKiBAbWV0aG9kIFR3ZWVuI3RvXG4gICAqIEBwYXJhbSBwcm9wcyB7b2JqZWN0fSBWYWx1ZXMgdGhhdCB0aGUgdHdlZW4gd2lsbCBnbyB0by5cbiAgICogQHBhcmFtIGR1cmF0aW9uIHtmbG9hdH0gVHdlZW4ncyBkdXJhdGlvbi5cbiAgICogQHBhcmFtIFtlYXNlXSB7ZnVuY3Rpb259IFR3ZWVuJ3MgZWFzaW5nIGN1cnZlLlxuICAgKiBAcmV0dXJucyBUd2VlblxuICAgKi9cbiAgdG8ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG4gICAgdmFyIHR3ZWVuID0gdGhpcy5fZ2V0VHdlZW4odGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlKTtcbiAgICB0d2Vlbi5uYW1lID0gJ3RvJztcbiAgICB0d2Vlbi5wYXJhbXNUbyA9IHByb3BzO1xuICAgIHR3ZWVuLnBhcmFtc0Zyb20gPSB7fTtcbiAgICBmb3IgKHZhciBmIGluIHByb3BzKSB7XG4gICAgICB0d2Vlbi5wYXJhbXNGcm9tW2ZdID0gdGhpcy5fZ2V0TGFzdFBhcmFtKGYpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBIb2xkIHRoZSB0d2VlbiBmb3IgYSB3aGlsZSBiZWZvcmUgbmV4dCBjb21tYW5kcy5cbiAgICogQG1ldGhvZCBUd2VlbiN3YWl0XG4gICAqIEBwYXJhbSBkdXJhdGlvbiB7ZmxvYXR9IFRpbWUgdG8gd2FpdC5cbiAgICogQHJldHVybnMgVHdlZW5cbiAgICovXG4gIHdhaXQoZHVyYXRpb24pIHtcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2Vlbih0aGlzLm9iaiwgZHVyYXRpb24sIG51bGwpO1xuICAgIHR3ZWVuLm5hbWUgPSAnd2FpdCc7XG4gICAgdHdlZW4ucGFyYW1zRnJvbSA9IHR3ZWVuLnByZXYucGFyYW1zRnJvbTtcbiAgICB0d2Vlbi5wYXJhbXNUbyA9IHR3ZWVuLnByZXYucGFyYW1zVG87XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgY2FsbGJhY2sgd2hlbiB0aGUgcHJldmlvdXMgY29tbWFuZHMgYXJlIGNvbXBsZXRlZC5cbiAgICogQG1ldGhvZCBUd2VlbiN0aGVuXG4gICAqIEBwYXJhbSBjYWxsYmFjayB7ZnVuY3Rpb259IE1ldGhvZCB0aGEgd2lsbCBiZSBleGVjdXRlZCBhcyBjYWxsYmFjay5cbiAgICogQHJldHVybnMgVHdlZW5cbiAgICovXG4gIHRoZW4oY2FsbGJhY2spIHtcbiAgICB0aGlzLmxhc3Qub25Db21wbGV0ZSA9IGNhbGxiYWNrO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VGltZSh2YWx1ZSkge1xuICAgIHZhciBkZWx0YSA9IHZhbHVlIC0gdGhpcy50aW1lO1xuICAgIHRoaXMudXBkYXRlKGRlbHRhKTtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZTtcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YSkge1xuICAgIGlmIChkZWx0YSkgdGhpcy50aW1lICs9IGRlbHRhO1xuXG4gICAgaWYgKHRoaXMubmV4dCAmJiBkZWx0YSA8IDApIHRoaXMubmV4dC51cGRhdGUoZGVsdGEpO1xuXG4gICAgdmFyIGVuZCA9IHRoaXMuc3RhcnQgKyB0aGlzLmR1cmF0aW9uO1xuICAgIGlmICh0aGlzLnRpbWUgPj0gdGhpcy5zdGFydCAmJiB0aGlzLnRpbWUgPCBlbmQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9IFR3ZWVuLlJVTk5JTkcpIGlmICh0aGlzLmRlYnVnKSB0aGlzLmxvZygnc3RhcnRlZCcpO1xuICAgICAgdGhpcy5zdGF0ZSA9IFR3ZWVuLlJVTk5JTkc7XG4gICAgICB0aGlzLnVwZGF0ZVByb3BzKHRoaXMudGltZSAtIHRoaXMuc3RhcnQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50aW1lIDwgdGhpcy5zdGFydCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFR3ZWVuLklETEUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wcygwKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFR3ZWVuLklETEU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRpbWUgPj0gZW5kKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gVHdlZW4uQ09NUExFVEVEKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcHModGhpcy5kdXJhdGlvbik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBUd2Vlbi5DT01QTEVURUQ7XG4gICAgICAgIGlmICh0aGlzLmRlYnVnKSB0aGlzLmxvZygnY29tcGxldGVkJyk7XG4gICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm5leHQgJiYgZGVsdGEgPiAwKSB0aGlzLm5leHQudXBkYXRlKGRlbHRhKTtcbiAgfVxuXG4gIHVwZGF0ZVByb3BzKHRpbWUpIHtcbiAgICBpZiAoIXRoaXMuZWFzZSkgcmV0dXJuO1xuICAgIHZhciByYXRpbyA9IHRoaXMuZWFzZSh0aW1lL3RoaXMuZHVyYXRpb24pO1xuICAgIGZvciAodmFyIGYgaW4gdGhpcy5wYXJhbXNUbykge1xuICAgICAgdmFyIHZmID0gdGhpcy5wYXJhbXNGcm9tW2ZdO1xuICAgICAgdmFyIHZ0ID0gdGhpcy5wYXJhbXNUb1tmXTtcbiAgICAgIHZhciB2YyA9IHZmICsgKHZ0IC0gdmYpKnJhdGlvO1xuICAgICAgdGhpcy5vYmpbZl0gPSB2YztcbiAgICB9XG4gIH1cblxuICBmaW5pc2hlZCgpIHtcbiAgICB2YXIgciA9IHRoaXMudGltZSA+PSB0aGlzLnN0YXJ0ICsgdGhpcy5kdXJhdGlvbjtcbiAgICBpZiAociAmJiB0aGlzLm5leHQpIHIgPSB0aGlzLm5leHQuZmluaXNoZWQoKTtcbiAgICByZXR1cm4gcjtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMubmV4dCkgdGhpcy5uZXh0LmRpc3Bvc2UoKTtcbiAgICBpZiAodGhpcy5kZWJ1ZykgdGhpcy5sb2coJ2Rpc3Bvc2VkIScpO1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLmxhc3QgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zRnJvbSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXNUbyA9IG51bGw7XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgfVxuXG4gIGxvZyhtc2cpIHtcbiAgICBpZiAodGhpcy5vYmoubmFtZSAmJiB0aGlzLm5hbWUpIGNvbnNvbGUubG9nKCdbVHdlZW5dJywgdGhpcy5vYmoubmFtZSwgdGhpcy5uYW1lLCBtc2cpO1xuICB9XG5cbn1cbiIsImltcG9ydCBUd2VlbiBmcm9tICcuL1R3ZWVuJ1xuXG4vKipcbiAqIEEgdHdlZW4gbWFuYWdlci4gRGVhbHMgd2l0aCB0d2VlbiBjcmVhdGlvbiwgdXBkYXRlIGFuZCBkZXN0cnVjdGlvbi5cbiAqIEBjbGFzcyBUd2VlbmVyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSBbYXV0b1VwZGF0ZVJhdGVdIHtmbG9hdH0gSW50ZXJ2YWwgKGluIHNlY29uZHMpIHRoYXQgYWxsIHR3ZWVucyB3aWxsIGJlIHVwZGF0ZWQuIElmIDAsIHRoZSBhdXRvLXVwZGF0ZSB3aWxsIG5vdFxuICogcnVuLCBzbyB5b3UgbXVzdCBoYW5kbGUgdGhlIHVwZGF0ZSBtYW51YWxseS4gRGVmYXVsdCBpcyAwLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbmVyIHtcbiAgc3RhdGljIFR3ZWVuID0gVHdlZW47XG4gIHN0YXRpYyBlYXNlID0gcmVxdWlyZSgnZWFzZXMnKTtcblxuICBjb25zdHJ1Y3RvcihhdXRvVXBkYXRlUmF0ZSkge1xuICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICB0aGlzLnR3ZWVucyA9IFtdO1xuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICBpZiAoYXV0b1VwZGF0ZVJhdGUgPiAwKSB0aGlzLmVuYWJsZUF1dG9VcGRhdGUoYXV0b1VwZGF0ZVJhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgVHdlZW4gaW5zdGFuY2Ugd2l0aCByZWZlcmVuY2VkIG9iamVjdC5cbiAgICogQG1ldGhvZCBUd2VlbmVyI2FkZFxuICAgKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHR3ZWVuZWQuXG4gICAqIEByZXR1cm4gVHdlZW5cbiAgICovXG4gIGFkZChvYmopIHtcbiAgICB2YXIgdHdlZW4gPSBuZXcgVHdlZW4ob2JqKTtcbiAgICB0d2Vlbi5kZWJ1ZyA9IHRoaXMuZGVidWc7XG4gICAgdGhpcy50d2VlbnMucHVzaCh0d2Vlbik7XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgdHdlZW4gaW5zdGFuY2VzIHRoYXQgaGF2ZSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdC5cbiAgICogQG1ldGhvZCBUd2VlbmVyI3JlbW92ZVxuICAgKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSB0d2VlbmVkIG9iamVjdC5cbiAgICovXG4gIHJlbW92ZShvYmopIHtcbiAgICB2YXIgaSA9IHRoaXMudHdlZW5zLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgdCA9IHRoaXMudHdlZW5zW2ldO1xuICAgICAgaWYgKHQub2JqID09PSBvYmopIHRoaXMuX2Rlc3Ryb3kodCwgaSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgdGhlIHVwZGF0ZSBtZXRob2QgYXV0b21hdGljYWxseS5cbiAgICogQG1ldGhvZCBUd2VlbmVyI2VuYWJsZUF1dG9VcGRhdGVcbiAgICogQHBhcmFtIHJhdGUge2Zsb2F0fSBJbnRlcnZhbCAoaW4gc2Vjb25kcykgdGhhdCB0aGUgdXBkYXRlIHdpbGwgYmUgcGxheWVkLlxuICAgKiBJZiAwIG9yIGxvd2VyLCB0aGUgYXV0b21hdGljIHVwZGF0ZSB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZW5hYmxlQXV0b1VwZGF0ZShyYXRlKSB7XG4gICAgaWYgKCFyYXRlKSB7XG4gICAgICB0aGlzLmRpc2FibGVBdXRvVXBkYXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciB0aW1lID0gc2VsZi5nZXRUaW1lKCk7XG4gICAgc2VsZi5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0ID0gc2VsZi5nZXRUaW1lKCk7XG4gICAgICB2YXIgZCA9IHQgLSB0aW1lO1xuICAgICAgdGltZSA9IHQ7XG4gICAgICBzZWxmLnVwZGF0ZShkKTtcbiAgICB9LCByYXRlKjEwMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHRoZSBhdXRvbWF0aWMgdXBkYXRlLlxuICAgKiBAbWV0aG9kIFR3ZWVuZXIjZGlzYWJsZUF1dG9VcGRhdGVcbiAgICovXG4gIGRpc2FibGVBdXRvVXBkYXRlKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhbGwgdHdlZW5zLlxuICAgKiBAbWV0aG9kIFR3ZWVuZXIjdXBkYXRlXG4gICAqIEBwYXJhbSBkZWx0YSB7ZmxvYXR9IFRoZSBlbGFwc2VkIHRpbWUgKGluIHNlY29uZHMpIHNpbmNlIGxhc3QgdXBkYXRlLlxuICAgKi9cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICAgIHQudXBkYXRlKGRlbHRhKTtcbiAgICAgIGlmICh0LmZpbmlzaGVkKCkpIHRoaXMuX2Rlc3Ryb3kodCwgaSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgVHdlZW5lciBpbnN0YW5jZS5cbiAgICogQG1ldGhvZCBUd2VlbmVyI2Rpc3Bvc2VcbiAgICovXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy50d2VlbnMgPSBudWxsO1xuICAgIHRoaXMuZGlzYWJsZUF1dG9VcGRhdGUoKTtcbiAgfVxuXG4gIF9kZXN0cm95KHR3ZWVuLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSBpbmRleCA9IHRoaXMudHdlZW4uaW5kZXhPZih0d2Vlbik7XG4gICAgdGhpcy50d2VlbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0d2Vlbi5kaXNwb3NlKCk7XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKS8xMDAwO1xuICB9XG5cbn1cbiIsImltcG9ydCBUd2VlbmVyIGZyb20gJy4vVHdlZW5lcidcblxuaWYgKHR5cGVvZih3aW5kb3cpID09PSBcIm9iamVjdFwiKSB7XG4gIHdpbmRvdy5Ud2VlbmVyID0gVHdlZW5lcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbmVyO1xuIl19
