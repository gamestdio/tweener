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
      if (this.time >= this.start && this.time <= end) {
        if (this.state != Tween.RUNNING) if (this.debug) this.log('started');
        this.state = Tween.RUNNING;
        this.updateProps(this.time - this.start);
      } else {
        if (this.time > end && this.state == Tween.IDLE) {
          this.updateProps(this.duration);
          this.state = Tween.COMPLETED;
        } else if (this.time < this.start && this.state == Tween.COMPLETED) {
          this.updateProps(0);
          this.state = Tween.IDLE;
        } else if (this.state == Tween.RUNNING) {
          if (this.time < this.start) {
            this.updateProps(0);
            this.state = Tween.IDLE;
          } else {
            this.updateProps(this.duration);
            this.state = Tween.COMPLETED;
            if (this.debug) this.log('completed');
            if (this.onComplete) this.onComplete();
          }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9iYWNrLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2UtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2JvdW5jZS1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2Utb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY2lyYy1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY3ViaWMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2VsYXN0aWMtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvZXhwby1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzZXMvbGluZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhZC1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhcnQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWludC1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvc2luZS1vdXQuanMiLCIvVXNlcnMvbWF1cm9kZXRhcnNvL1NpdGVzL0dhbWVzL3R3ZWVuZXIvc291cmNlL1R3ZWVuLmpzIiwiL1VzZXJzL21hdXJvZGV0YXJzby9TaXRlcy9HYW1lcy90d2VlbmVyL3NvdXJjZS9Ud2VlbmVyLmpzIiwiL1VzZXJzL21hdXJvZGV0YXJzby9TaXRlcy9HYW1lcy90d2VlbmVyL3NvdXJjZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O3NCQ0pxQixPQUFPOzs7Ozs7Ozs7SUFRUCxLQUFLO0FBTWIsV0FOUSxLQUFLLENBTVosR0FBRyxFQUFFOzBCQU5FLEtBQUs7O0FBT3RCLFFBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2Ys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V0FFTyxrQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLFVBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0QsVUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdCLFdBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNqQjs7O1dBRU0sbUJBQUc7QUFDUixhQUFPLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUMsSUFBSSxDQUFDO0tBQ2xDOzs7Ozs7O1dBaEdhLE9BQU8sQ0FBQyxPQUFPLENBQUM7Ozs7U0FGWCxPQUFPOzs7cUJBQVAsT0FBTzs7Ozs7Ozs7dUJDVFIsV0FBVzs7OztBQUUvQixJQUFJLE9BQU8sTUFBTSxBQUFDLEtBQUssUUFBUSxFQUFFO0FBQy9CLFFBQU0sQ0FBQyxPQUFPLHVCQUFVLENBQUM7Q0FDMUI7O0FBRUQsTUFBTSxDQUFDLE9BQU8sdUJBQVUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBiYWNrSW5PdXQodCkge1xuICB2YXIgcyA9IDEuNzAxNTggKiAxLjUyNVxuICBpZiAoKHQgKj0gMikgPCAxKVxuICAgIHJldHVybiAwLjUgKiAodCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSlcbiAgcmV0dXJuIDAuNSAqICgodCAtPSAyKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDIpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFja0luT3V0IiwiZnVuY3Rpb24gYmFja0luKHQpIHtcbiAgdmFyIHMgPSAxLjcwMTU4XG4gIHJldHVybiB0ICogdCAqICgocyArIDEpICogdCAtIHMpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFja0luIiwiZnVuY3Rpb24gYmFja091dCh0KSB7XG4gIHZhciBzID0gMS43MDE1OFxuICByZXR1cm4gLS10ICogdCAqICgocyArIDEpICogdCArIHMpICsgMVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhY2tPdXQiLCJ2YXIgYm91bmNlT3V0ID0gcmVxdWlyZSgnLi9ib3VuY2Utb3V0JylcblxuZnVuY3Rpb24gYm91bmNlSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gMC41ICogKDEuMCAtIGJvdW5jZU91dCgxLjAgLSB0ICogMi4wKSlcbiAgICA6IDAuNSAqIGJvdW5jZU91dCh0ICogMi4wIC0gMS4wKSArIDAuNVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5jZUluT3V0IiwidmFyIGJvdW5jZU91dCA9IHJlcXVpcmUoJy4vYm91bmNlLW91dCcpXG5cbmZ1bmN0aW9uIGJvdW5jZUluKHQpIHtcbiAgcmV0dXJuIDEuMCAtIGJvdW5jZU91dCgxLjAgLSB0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5jZUluIiwiZnVuY3Rpb24gYm91bmNlT3V0KHQpIHtcbiAgdmFyIGEgPSA0LjAgLyAxMS4wXG4gIHZhciBiID0gOC4wIC8gMTEuMFxuICB2YXIgYyA9IDkuMCAvIDEwLjBcblxuICB2YXIgY2EgPSA0MzU2LjAgLyAzNjEuMFxuICB2YXIgY2IgPSAzNTQ0Mi4wIC8gMTgwNS4wXG4gIHZhciBjYyA9IDE2MDYxLjAgLyAxODA1LjBcblxuICB2YXIgdDIgPSB0ICogdFxuXG4gIHJldHVybiB0IDwgYVxuICAgID8gNy41NjI1ICogdDJcbiAgICA6IHQgPCBiXG4gICAgICA/IDkuMDc1ICogdDIgLSA5LjkgKiB0ICsgMy40XG4gICAgICA6IHQgPCBjXG4gICAgICAgID8gY2EgKiB0MiAtIGNiICogdCArIGNjXG4gICAgICAgIDogMTAuOCAqIHQgKiB0IC0gMjAuNTIgKiB0ICsgMTAuNzJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBib3VuY2VPdXQiLCJmdW5jdGlvbiBjaXJjSW5PdXQodCkge1xuICBpZiAoKHQgKj0gMikgPCAxKSByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpXG4gIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaXJjSW5PdXQiLCJmdW5jdGlvbiBjaXJjSW4odCkge1xuICByZXR1cm4gMS4wIC0gTWF0aC5zcXJ0KDEuMCAtIHQgKiB0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNJbiIsImZ1bmN0aW9uIGNpcmNPdXQodCkge1xuICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAoIC0tdCAqIHQgKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaXJjT3V0IiwiZnVuY3Rpb24gY3ViaWNJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyA0LjAgKiB0ICogdCAqIHRcbiAgICA6IDAuNSAqIE1hdGgucG93KDIuMCAqIHQgLSAyLjAsIDMuMCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdWJpY0luT3V0IiwiZnVuY3Rpb24gY3ViaWNJbih0KSB7XG4gIHJldHVybiB0ICogdCAqIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdWJpY0luIiwiZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICB2YXIgZiA9IHQgLSAxLjBcbiAgcmV0dXJuIGYgKiBmICogZiArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljT3V0IiwiZnVuY3Rpb24gZWxhc3RpY0luT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/IDAuNSAqIE1hdGguc2luKCsxMy4wICogTWF0aC5QSS8yICogMi4wICogdCkgKiBNYXRoLnBvdygyLjAsIDEwLjAgKiAoMi4wICogdCAtIDEuMCkpXG4gICAgOiAwLjUgKiBNYXRoLnNpbigtMTMuMCAqIE1hdGguUEkvMiAqICgoMi4wICogdCAtIDEuMCkgKyAxLjApKSAqIE1hdGgucG93KDIuMCwgLTEwLjAgKiAoMi4wICogdCAtIDEuMCkpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxhc3RpY0luT3V0IiwiZnVuY3Rpb24gZWxhc3RpY0luKHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKDEzLjAgKiB0ICogTWF0aC5QSS8yKSAqIE1hdGgucG93KDIuMCwgMTAuMCAqICh0IC0gMS4wKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbGFzdGljSW4iLCJmdW5jdGlvbiBlbGFzdGljT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKC0xMy4wICogKHQgKyAxLjApICogTWF0aC5QSS8yKSAqIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsYXN0aWNPdXQiLCJmdW5jdGlvbiBleHBvSW5PdXQodCkge1xuICByZXR1cm4gKHQgPT09IDAuMCB8fCB0ID09PSAxLjApXG4gICAgPyB0XG4gICAgOiB0IDwgMC41XG4gICAgICA/ICswLjUgKiBNYXRoLnBvdygyLjAsICgyMC4wICogdCkgLSAxMC4wKVxuICAgICAgOiAtMC41ICogTWF0aC5wb3coMi4wLCAxMC4wIC0gKHQgKiAyMC4wKSkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvSW5PdXQiLCJmdW5jdGlvbiBleHBvSW4odCkge1xuICByZXR1cm4gdCA9PT0gMC4wID8gdCA6IE1hdGgucG93KDIuMCwgMTAuMCAqICh0IC0gMS4wKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvSW4iLCJmdW5jdGlvbiBleHBvT3V0KHQpIHtcbiAgcmV0dXJuIHQgPT09IDEuMCA/IHQgOiAxLjAgLSBNYXRoLnBvdygyLjAsIC0xMC4wICogdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvT3V0IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdCdiYWNrSW5PdXQnOiByZXF1aXJlKCcuL2JhY2staW4tb3V0JyksXG5cdCdiYWNrSW4nOiByZXF1aXJlKCcuL2JhY2staW4nKSxcblx0J2JhY2tPdXQnOiByZXF1aXJlKCcuL2JhY2stb3V0JyksXG5cdCdib3VuY2VJbk91dCc6IHJlcXVpcmUoJy4vYm91bmNlLWluLW91dCcpLFxuXHQnYm91bmNlSW4nOiByZXF1aXJlKCcuL2JvdW5jZS1pbicpLFxuXHQnYm91bmNlT3V0JzogcmVxdWlyZSgnLi9ib3VuY2Utb3V0JyksXG5cdCdjaXJjSW5PdXQnOiByZXF1aXJlKCcuL2NpcmMtaW4tb3V0JyksXG5cdCdjaXJjSW4nOiByZXF1aXJlKCcuL2NpcmMtaW4nKSxcblx0J2NpcmNPdXQnOiByZXF1aXJlKCcuL2NpcmMtb3V0JyksXG5cdCdjdWJpY0luT3V0JzogcmVxdWlyZSgnLi9jdWJpYy1pbi1vdXQnKSxcblx0J2N1YmljSW4nOiByZXF1aXJlKCcuL2N1YmljLWluJyksXG5cdCdjdWJpY091dCc6IHJlcXVpcmUoJy4vY3ViaWMtb3V0JyksXG5cdCdlbGFzdGljSW5PdXQnOiByZXF1aXJlKCcuL2VsYXN0aWMtaW4tb3V0JyksXG5cdCdlbGFzdGljSW4nOiByZXF1aXJlKCcuL2VsYXN0aWMtaW4nKSxcblx0J2VsYXN0aWNPdXQnOiByZXF1aXJlKCcuL2VsYXN0aWMtb3V0JyksXG5cdCdleHBvSW5PdXQnOiByZXF1aXJlKCcuL2V4cG8taW4tb3V0JyksXG5cdCdleHBvSW4nOiByZXF1aXJlKCcuL2V4cG8taW4nKSxcblx0J2V4cG9PdXQnOiByZXF1aXJlKCcuL2V4cG8tb3V0JyksXG5cdCdsaW5lYXInOiByZXF1aXJlKCcuL2xpbmVhcicpLFxuXHQncXVhZEluT3V0JzogcmVxdWlyZSgnLi9xdWFkLWluLW91dCcpLFxuXHQncXVhZEluJzogcmVxdWlyZSgnLi9xdWFkLWluJyksXG5cdCdxdWFkT3V0JzogcmVxdWlyZSgnLi9xdWFkLW91dCcpLFxuXHQncXVhcnRJbk91dCc6IHJlcXVpcmUoJy4vcXVhcnQtaW4tb3V0JyksXG5cdCdxdWFydEluJzogcmVxdWlyZSgnLi9xdWFydC1pbicpLFxuXHQncXVhcnRPdXQnOiByZXF1aXJlKCcuL3F1YXJ0LW91dCcpLFxuXHQncXVpbnRJbk91dCc6IHJlcXVpcmUoJy4vcXVpbnQtaW4tb3V0JyksXG5cdCdxdWludEluJzogcmVxdWlyZSgnLi9xdWludC1pbicpLFxuXHQncXVpbnRPdXQnOiByZXF1aXJlKCcuL3F1aW50LW91dCcpLFxuXHQnc2luZUluT3V0JzogcmVxdWlyZSgnLi9zaW5lLWluLW91dCcpLFxuXHQnc2luZUluJzogcmVxdWlyZSgnLi9zaW5lLWluJyksXG5cdCdzaW5lT3V0JzogcmVxdWlyZSgnLi9zaW5lLW91dCcpXG59IiwiZnVuY3Rpb24gbGluZWFyKHQpIHtcbiAgcmV0dXJuIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaW5lYXIiLCJmdW5jdGlvbiBxdWFkSW5PdXQodCkge1xuICAgIHQgLz0gMC41XG4gICAgaWYgKHQgPCAxKSByZXR1cm4gMC41KnQqdFxuICAgIHQtLVxuICAgIHJldHVybiAtMC41ICogKHQqKHQtMikgLSAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YWRJbk91dCIsImZ1bmN0aW9uIHF1YWRJbih0KSB7XG4gIHJldHVybiB0ICogdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YWRJbiIsImZ1bmN0aW9uIHF1YWRPdXQodCkge1xuICByZXR1cm4gLXQgKiAodCAtIDIuMClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFkT3V0IiwiZnVuY3Rpb24gcXVhcnRpY0luT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/ICs4LjAgKiBNYXRoLnBvdyh0LCA0LjApXG4gICAgOiAtOC4wICogTWF0aC5wb3codCAtIDEuMCwgNC4wKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YXJ0aWNJbk91dCIsImZ1bmN0aW9uIHF1YXJ0aWNJbih0KSB7XG4gIHJldHVybiBNYXRoLnBvdyh0LCA0LjApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhcnRpY0luIiwiZnVuY3Rpb24gcXVhcnRpY091dCh0KSB7XG4gIHJldHVybiBNYXRoLnBvdyh0IC0gMS4wLCAzLjApICogKDEuMCAtIHQpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhcnRpY091dCIsImZ1bmN0aW9uIHFpbnRpY0luT3V0KHQpIHtcbiAgICBpZiAoICggdCAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqIHQgKiB0ICogdCAqIHQgKiB0XG4gICAgcmV0dXJuIDAuNSAqICggKCB0IC09IDIgKSAqIHQgKiB0ICogdCAqIHQgKyAyIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxaW50aWNJbk91dCIsImZ1bmN0aW9uIHFpbnRpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcWludGljSW4iLCJmdW5jdGlvbiBxaW50aWNPdXQodCkge1xuICByZXR1cm4gLS10ICogdCAqIHQgKiB0ICogdCArIDFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxaW50aWNPdXQiLCJmdW5jdGlvbiBzaW5lSW5PdXQodCkge1xuICByZXR1cm4gLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJKnQpIC0gMSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lSW5PdXQiLCJmdW5jdGlvbiBzaW5lSW4odCkge1xuICByZXR1cm4gMSAtIE1hdGguY29zKCB0ICogTWF0aC5QSSAvIDIgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbmVJbiIsImZ1bmN0aW9uIHNpbmVPdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4odCAqIE1hdGguUEkvMilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lT3V0IiwiaW1wb3J0IHtsaW5lYXJ9IGZyb20gJ2Vhc2VzJztcblxuLyoqXG4gKiBUaGUgdHdlZW4gcGxheWVyLiBXaWxsIGNoYW5nZSB0YXJnZXQgb2JqZWN0IHZhbHVlcyB3aXRoIHNwZWNpZmllZCBwYXJhbWV0ZXJzLlxuICogQGNsYXNzIFR3ZWVuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4ge1xuXG4gIHN0YXRpYyBJRExFID0gMDtcbiAgc3RhdGljIFJVTk5JTkcgPSAxO1xuICBzdGF0aWMgQ09NUExFVEVEID0gMjtcblxuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgdGhpcy5vYmogPSBvYmo7XG5cbiAgICB0aGlzLnN0YXJ0ID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICB0aGlzLnN0YXRlID0gMDtcblxuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLmxhc3QgPSB0aGlzO1xuICAgIHRoaXMudGltZSA9IDA7XG5cbiAgICB0aGlzLnBhcmFtc0Zyb20gPSBudWxsO1xuICAgIHRoaXMucGFyYW1zVG8gPSBudWxsO1xuICAgIHRoaXMuZWFzZSA9IGxpbmVhcjtcblxuICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gIH1cblxuICBfZ2V0VHdlZW4ob2JqLCBkdXJhdGlvbiwgZWFzZSkge1xuICAgIHZhciBsYXN0ID0gdGhpcy5sYXN0O1xuICAgIHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmopO1xuICAgIHR3ZWVuLmRlYnVnID0gdGhpcy5kZWJ1ZztcbiAgICB0d2Vlbi5zdGFydCA9IGxhc3Quc3RhcnQgKyBsYXN0LmR1cmF0aW9uO1xuICAgIHR3ZWVuLmR1cmF0aW9uID0gZHVyYXRpb24gfHwgMDtcbiAgICB0d2Vlbi5zdGF0ZSA9IDA7XG4gICAgdHdlZW4uZWFzZSA9IGVhc2U7XG4gICAgdHdlZW4ucHJldiA9IGxhc3Q7XG4gICAgbGFzdC5uZXh0ID0gdHdlZW47XG4gICAgdGhpcy5sYXN0ID0gdHdlZW47XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9XG5cbiAgX2dldExhc3RQYXJhbShmaWVsZCkge1xuICAgIHZhciByZWYgPSB0aGlzLmxhc3QucHJldjtcbiAgICB3aGlsZSAocmVmKSB7XG4gICAgICBpZiAocmVmLm9iaiA9PT0gdGhpcy5vYmogJiYgcmVmLnBhcmFtc1RvICYmIHJlZi5wYXJhbXNUb1tmaWVsZF0gIT09IHVuZGVmaW5lZCAmJiByZWYucGFyYW1zVG9bZmllbGRdICE9PSBudWxsKSBicmVhaztcbiAgICAgIHJlZiA9IHJlZi5wcmV2O1xuICAgIH1cbiAgICB2YXIgdiA9IHJlZiA/IHJlZi5wYXJhbXNUb1tmaWVsZF0gOiB0aGlzLm9ialtmaWVsZF07XG4gICAgcmV0dXJuIHY7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBuZXcgdHdlZW4sIHdpdGggbmV3IHRhcmdldC5cbiAgICogQG1ldGhvZCBUd2VlbiNhZGRcbiAgICogQHBhcmFtIG9iaiB7b2JqZWN0fSBUaGUgb2JqZWN0IHRoYXQgd2lsbCBiZSB0d2VlbmVkLlxuICAgKiBAcmV0dXJucyBUd2VlblxuICAgKi9cbiAgYWRkKG9iaikge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKG9iaiwgMCwgbGluZWFyKTtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgdHdlZW4gdGhhdCBzdGFydHMgd2l0aCBzcGVjaWZpZWQgdmFsdWVzLlxuICAgKiBAbWV0aG9kIFR3ZWVuI2Zyb21cbiAgICogQHBhcmFtIHByb3BzIHtvYmplY3R9IFZhbHVlcyB0aGF0IHRoZSB0d2VlbiB3aWxsIGNvbWUgZnJvbS5cbiAgICogQHBhcmFtIGR1cmF0aW9uIHtmbG9hdH0gVHdlZW4ncyBkdXJhdGlvbi5cbiAgICogQHBhcmFtIFtlYXNlXSB7ZnVuY3Rpb259IFR3ZWVuJ3MgZWFzaW5nIGN1cnZlLlxuICAgKiBAcmV0dXJucyBUd2VlblxuICAgKi9cbiAgZnJvbShwcm9wcywgZHVyYXRpb24sIGVhc2UpIHtcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2Vlbih0aGlzLm9iaiwgZHVyYXRpb24sIGVhc2UpO1xuICAgIHR3ZWVuLm5hbWUgPSAnZnJvbSc7XG4gICAgdHdlZW4ucGFyYW1zRnJvbSA9IHByb3BzO1xuICAgIHR3ZWVuLnBhcmFtc1RvID0ge307XG4gICAgZm9yICh2YXIgZiBpbiBwcm9wcykge1xuICAgICAgdHdlZW4ucGFyYW1zVG9bZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHR3ZWVuIHRoYXQgZW5kcyB3aXRoIHNwZWNpZmllZCB2YWx1ZXMuXG4gICAqIEBtZXRob2QgVHdlZW4jdG9cbiAgICogQHBhcmFtIHByb3BzIHtvYmplY3R9IFZhbHVlcyB0aGF0IHRoZSB0d2VlbiB3aWxsIGdvIHRvLlxuICAgKiBAcGFyYW0gZHVyYXRpb24ge2Zsb2F0fSBUd2VlbidzIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0gW2Vhc2VdIHtmdW5jdGlvbn0gVHdlZW4ncyBlYXNpbmcgY3VydmUuXG4gICAqIEByZXR1cm5zIFR3ZWVuXG4gICAqL1xuICB0byhwcm9wcywgZHVyYXRpb24sIGVhc2UpIHtcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2Vlbih0aGlzLm9iaiwgZHVyYXRpb24sIGVhc2UpO1xuICAgIHR3ZWVuLm5hbWUgPSAndG8nO1xuICAgIHR3ZWVuLnBhcmFtc1RvID0gcHJvcHM7XG4gICAgdHdlZW4ucGFyYW1zRnJvbSA9IHt9O1xuICAgIGZvciAodmFyIGYgaW4gcHJvcHMpIHtcbiAgICAgIHR3ZWVuLnBhcmFtc0Zyb21bZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEhvbGQgdGhlIHR3ZWVuIGZvciBhIHdoaWxlIGJlZm9yZSBuZXh0IGNvbW1hbmRzLlxuICAgKiBAbWV0aG9kIFR3ZWVuI3dhaXRcbiAgICogQHBhcmFtIGR1cmF0aW9uIHtmbG9hdH0gVGltZSB0byB3YWl0LlxuICAgKiBAcmV0dXJucyBUd2VlblxuICAgKi9cbiAgd2FpdChkdXJhdGlvbikge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgbnVsbCk7XG4gICAgdHdlZW4ubmFtZSA9ICd3YWl0JztcbiAgICB0d2Vlbi5wYXJhbXNGcm9tID0gdHdlZW4ucHJldi5wYXJhbXNGcm9tO1xuICAgIHR3ZWVuLnBhcmFtc1RvID0gdHdlZW4ucHJldi5wYXJhbXNUbztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBjYWxsYmFjayB3aGVuIHRoZSBwcmV2aW91cyBjb21tYW5kcyBhcmUgY29tcGxldGVkLlxuICAgKiBAbWV0aG9kIFR3ZWVuI3RoZW5cbiAgICogQHBhcmFtIGNhbGxiYWNrIHtmdW5jdGlvbn0gTWV0aG9kIHRoYSB3aWxsIGJlIGV4ZWN1dGVkIGFzIGNhbGxiYWNrLlxuICAgKiBAcmV0dXJucyBUd2VlblxuICAgKi9cbiAgdGhlbihjYWxsYmFjaykge1xuICAgIHRoaXMubGFzdC5vbkNvbXBsZXRlID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRUaW1lKHZhbHVlKSB7XG4gICAgdmFyIGRlbHRhID0gdmFsdWUgLSB0aGlzLnRpbWU7XG4gICAgdGhpcy51cGRhdGUoZGVsdGEpO1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgaWYgKGRlbHRhKSB0aGlzLnRpbWUgKz0gZGVsdGE7XG5cbiAgICBpZiAodGhpcy5uZXh0ICYmIGRlbHRhIDwgMCkgdGhpcy5uZXh0LnVwZGF0ZShkZWx0YSk7XG5cbiAgICB2YXIgZW5kID0gdGhpcy5zdGFydCArIHRoaXMuZHVyYXRpb247XG4gICAgaWYgKHRoaXMudGltZSA+PSB0aGlzLnN0YXJ0ICYmIHRoaXMudGltZSA8PSBlbmQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9IFR3ZWVuLlJVTk5JTkcpIGlmICh0aGlzLmRlYnVnKSB0aGlzLmxvZygnc3RhcnRlZCcpO1xuICAgICAgdGhpcy5zdGF0ZSA9IFR3ZWVuLlJVTk5JTkc7XG4gICAgICB0aGlzLnVwZGF0ZVByb3BzKHRoaXMudGltZSAtIHRoaXMuc3RhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy50aW1lID4gZW5kICYmIHRoaXMuc3RhdGUgPT0gVHdlZW4uSURMRSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BzKHRoaXMuZHVyYXRpb24pO1xuICAgICAgICB0aGlzLnN0YXRlID0gVHdlZW4uQ09NUExFVEVEO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbWUgPCB0aGlzLnN0YXJ0ICYmIHRoaXMuc3RhdGUgPT0gVHdlZW4uQ09NUExFVEVEKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcHMoMCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBUd2Vlbi5JRExFO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IFR3ZWVuLlJVTk5JTkcpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZSA8IHRoaXMuc3RhcnQpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVByb3BzKDApO1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBUd2Vlbi5JRExFO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlUHJvcHModGhpcy5kdXJhdGlvbik7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IFR3ZWVuLkNPTVBMRVRFRDtcbiAgICAgICAgICBpZiAodGhpcy5kZWJ1ZykgdGhpcy5sb2coJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmV4dCAmJiBkZWx0YSA+IDApIHRoaXMubmV4dC51cGRhdGUoZGVsdGEpO1xuICB9XG5cbiAgdXBkYXRlUHJvcHModGltZSkge1xuICAgIGlmICghdGhpcy5lYXNlKSByZXR1cm47XG4gICAgdmFyIHJhdGlvID0gdGhpcy5lYXNlKHRpbWUvdGhpcy5kdXJhdGlvbik7XG4gICAgZm9yICh2YXIgZiBpbiB0aGlzLnBhcmFtc1RvKSB7XG4gICAgICB2YXIgdmYgPSB0aGlzLnBhcmFtc0Zyb21bZl07XG4gICAgICB2YXIgdnQgPSB0aGlzLnBhcmFtc1RvW2ZdO1xuICAgICAgdmFyIHZjID0gdmYgKyAodnQgLSB2ZikqcmF0aW87XG4gICAgICB0aGlzLm9ialtmXSA9IHZjO1xuICAgIH1cbiAgfVxuXG4gIGZpbmlzaGVkKCkge1xuICAgIHZhciByID0gdGhpcy50aW1lID49IHRoaXMuc3RhcnQgKyB0aGlzLmR1cmF0aW9uO1xuICAgIGlmIChyICYmIHRoaXMubmV4dCkgciA9IHRoaXMubmV4dC5maW5pc2hlZCgpO1xuICAgIHJldHVybiByO1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5uZXh0KSB0aGlzLm5leHQuZGlzcG9zZSgpO1xuICAgIGlmICh0aGlzLmRlYnVnKSB0aGlzLmxvZygnZGlzcG9zZWQhJyk7XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB0aGlzLnByZXYgPSBudWxsO1xuICAgIHRoaXMubGFzdCA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXNGcm9tID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtc1RvID0gbnVsbDtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xuICB9XG5cbiAgbG9nKG1zZykge1xuICAgIGlmICh0aGlzLm9iai5uYW1lICYmIHRoaXMubmFtZSkgY29uc29sZS5sb2coJ1tUd2Vlbl0nLCB0aGlzLm9iai5uYW1lLCB0aGlzLm5hbWUsIG1zZyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IFR3ZWVuIGZyb20gJy4vVHdlZW4nXG5cbi8qKlxuICogQSB0d2VlbiBtYW5hZ2VyLiBEZWFscyB3aXRoIHR3ZWVuIGNyZWF0aW9uLCB1cGRhdGUgYW5kIGRlc3RydWN0aW9uLlxuICogQGNsYXNzIFR3ZWVuZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIFthdXRvVXBkYXRlUmF0ZV0ge2Zsb2F0fSBJbnRlcnZhbCAoaW4gc2Vjb25kcykgdGhhdCBhbGwgdHdlZW5zIHdpbGwgYmUgdXBkYXRlZC4gSWYgMCwgdGhlIGF1dG8tdXBkYXRlIHdpbGwgbm90XG4gKiBydW4sIHNvIHlvdSBtdXN0IGhhbmRsZSB0aGUgdXBkYXRlIG1hbnVhbGx5LiBEZWZhdWx0IGlzIDAuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuZXIge1xuICBzdGF0aWMgVHdlZW4gPSBUd2VlbjtcbiAgc3RhdGljIGVhc2UgPSByZXF1aXJlKCdlYXNlcycpO1xuXG4gIGNvbnN0cnVjdG9yKGF1dG9VcGRhdGVSYXRlKSB7XG4gICAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xuICAgIHRoaXMudHdlZW5zID0gW107XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgIGlmIChhdXRvVXBkYXRlUmF0ZSA+IDApIHRoaXMuZW5hYmxlQXV0b1VwZGF0ZShhdXRvVXBkYXRlUmF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuZCByZXR1cm4gYSBUd2VlbiBpbnN0YW5jZSB3aXRoIHJlZmVyZW5jZWQgb2JqZWN0LlxuICAgKiBAbWV0aG9kIFR3ZWVuZXIjYWRkXG4gICAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAgICogQHJldHVybiBUd2VlblxuICAgKi9cbiAgYWRkKG9iaikge1xuICAgIHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmopO1xuICAgIHR3ZWVuLmRlYnVnID0gdGhpcy5kZWJ1ZztcbiAgICB0aGlzLnR3ZWVucy5wdXNoKHR3ZWVuKTtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCB0d2VlbiBpbnN0YW5jZXMgdGhhdCBoYXZlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0LlxuICAgKiBAbWV0aG9kIFR3ZWVuZXIjcmVtb3ZlXG4gICAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIHR3ZWVuZWQgb2JqZWN0LlxuICAgKi9cbiAgcmVtb3ZlKG9iaikge1xuICAgIHZhciBpID0gdGhpcy50d2VlbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciB0ID0gdGhpcy50d2VlbnNbaV07XG4gICAgICBpZiAodC5vYmogPT09IG9iaikgdGhpcy5fZGVzdHJveSh0LCBpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUnVucyB0aGUgdXBkYXRlIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgKiBAbWV0aG9kIFR3ZWVuZXIjZW5hYmxlQXV0b1VwZGF0ZVxuICAgKiBAcGFyYW0gcmF0ZSB7ZmxvYXR9IEludGVydmFsIChpbiBzZWNvbmRzKSB0aGF0IHRoZSB1cGRhdGUgd2lsbCBiZSBwbGF5ZWQuXG4gICAqIElmIDAgb3IgbG93ZXIsIHRoZSBhdXRvbWF0aWMgdXBkYXRlIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBlbmFibGVBdXRvVXBkYXRlKHJhdGUpIHtcbiAgICBpZiAoIXJhdGUpIHtcbiAgICAgIHRoaXMuZGlzYWJsZUF1dG9VcGRhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHRpbWUgPSBzZWxmLmdldFRpbWUoKTtcbiAgICBzZWxmLl9pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHQgPSBzZWxmLmdldFRpbWUoKTtcbiAgICAgIHZhciBkID0gdCAtIHRpbWU7XG4gICAgICB0aW1lID0gdDtcbiAgICAgIHNlbGYudXBkYXRlKGQpO1xuICAgIH0sIHJhdGUqMTAwMCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgdGhlIGF1dG9tYXRpYyB1cGRhdGUuXG4gICAqIEBtZXRob2QgVHdlZW5lciNkaXNhYmxlQXV0b1VwZGF0ZVxuICAgKi9cbiAgZGlzYWJsZUF1dG9VcGRhdGUoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFsbCB0d2VlbnMuXG4gICAqIEBtZXRob2QgVHdlZW5lciN1cGRhdGVcbiAgICogQHBhcmFtIGRlbHRhIHtmbG9hdH0gVGhlIGVsYXBzZWQgdGltZSAoaW4gc2Vjb25kcykgc2luY2UgbGFzdCB1cGRhdGUuXG4gICAqL1xuICB1cGRhdGUoZGVsdGEpIHtcbiAgICB2YXIgaSA9IHRoaXMudHdlZW5zLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgdCA9IHRoaXMudHdlZW5zW2ldO1xuICAgICAgdC51cGRhdGUoZGVsdGEpO1xuICAgICAgaWYgKHQuZmluaXNoZWQoKSkgdGhpcy5fZGVzdHJveSh0LCBpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSBUd2VlbmVyIGluc3RhbmNlLlxuICAgKiBAbWV0aG9kIFR3ZWVuZXIjZGlzcG9zZVxuICAgKi9cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLnR3ZWVucyA9IG51bGw7XG4gICAgdGhpcy5kaXNhYmxlQXV0b1VwZGF0ZSgpO1xuICB9XG5cbiAgX2Rlc3Ryb3kodHdlZW4sIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIGluZGV4ID0gdGhpcy50d2Vlbi5pbmRleE9mKHR3ZWVuKTtcbiAgICB0aGlzLnR3ZWVucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHR3ZWVuLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpLzEwMDA7XG4gIH1cblxufVxuIiwiaW1wb3J0IFR3ZWVuZXIgZnJvbSAnLi9Ud2VlbmVyJ1xuXG5pZiAodHlwZW9mKHdpbmRvdykgPT09IFwib2JqZWN0XCIpIHtcbiAgd2luZG93LlR3ZWVuZXIgPSBUd2VlbmVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuZXI7XG4iXX0=
