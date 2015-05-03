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
      this.time = value;
      if (this.next) this.next.setTime(value);
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
      if (this.time >= this.start && this.time <= this.start + this.duration) {
        if (this.state != Tween.RUNNING) if (this.debug) this.log('started');
        this.state = Tween.RUNNING;
        this.updateProps(this.time - this.start);
      } else {
        if (this.state == Tween.RUNNING) {
          if (this.time < this.start) {
            this.updateProps(0);
          } else {
            this.updateProps(this.duration);
            if (this.debug) this.log('completed');
            if (this.onComplete) this.onComplete();
          }
        }
        this.state = Tween.IDLE;
      }

      if (this.next) this.next.update(delta);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9iYWNrLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2UtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2JvdW5jZS1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2Utb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY2lyYy1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY3ViaWMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2VsYXN0aWMtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvZXhwby1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzZXMvbGluZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhZC1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhcnQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWludC1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvc2luZS1vdXQuanMiLCIvVXNlcnMvZW5kZWwvUHJvamVjdHMvdHdlZW5lci9zb3VyY2UvVHdlZW4uanMiLCIvVXNlcnMvZW5kZWwvUHJvamVjdHMvdHdlZW5lci9zb3VyY2UvVHdlZW5lci5qcyIsIi9Vc2Vycy9lbmRlbC9Qcm9qZWN0cy90d2VlbmVyL3NvdXJjZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O3NCQ0pxQixPQUFPOzs7Ozs7Ozs7SUFRUCxLQUFLO0FBTWIsV0FOUSxLQUFLLENBTVosR0FBRyxFQUFFOzBCQU5FLEtBQUs7O0FBT3RCLFFBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7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QUFNLENBQUMsTUFBTSxDQUFDO0FBQzNCLGFBQU8sQ0FBQyxFQUFFLEVBQUU7QUFDVixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLFNBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEIsWUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7T0FDdkM7S0FDRjs7Ozs7Ozs7V0FNTSxtQkFBRztBQUNSLFVBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLFVBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCOzs7V0FFTyxrQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ3JCLFVBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0QsVUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdCLFdBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNqQjs7O1dBRU0sbUJBQUc7QUFDUixhQUFPLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUMsSUFBSSxDQUFDO0tBQ2xDOzs7Ozs7O1dBaEdhLE9BQU8sQ0FBQyxPQUFPLENBQUM7Ozs7U0FGWCxPQUFPOzs7cUJBQVAsT0FBTzs7Ozs7Ozs7dUJDVFIsV0FBVzs7OztBQUUvQixJQUFJLE9BQU8sTUFBTSxBQUFDLEtBQUssUUFBUSxFQUFFO0FBQy9CLFFBQU0sQ0FBQyxPQUFPLHVCQUFVLENBQUM7Q0FDMUI7O0FBRUQsTUFBTSxDQUFDLE9BQU8sdUJBQVUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBiYWNrSW5PdXQodCkge1xuICB2YXIgcyA9IDEuNzAxNTggKiAxLjUyNVxuICBpZiAoKHQgKj0gMikgPCAxKVxuICAgIHJldHVybiAwLjUgKiAodCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSlcbiAgcmV0dXJuIDAuNSAqICgodCAtPSAyKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDIpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFja0luT3V0IiwiZnVuY3Rpb24gYmFja0luKHQpIHtcbiAgdmFyIHMgPSAxLjcwMTU4XG4gIHJldHVybiB0ICogdCAqICgocyArIDEpICogdCAtIHMpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFja0luIiwiZnVuY3Rpb24gYmFja091dCh0KSB7XG4gIHZhciBzID0gMS43MDE1OFxuICByZXR1cm4gLS10ICogdCAqICgocyArIDEpICogdCArIHMpICsgMVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhY2tPdXQiLCJ2YXIgYm91bmNlT3V0ID0gcmVxdWlyZSgnLi9ib3VuY2Utb3V0JylcblxuZnVuY3Rpb24gYm91bmNlSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gMC41ICogKDEuMCAtIGJvdW5jZU91dCgxLjAgLSB0ICogMi4wKSlcbiAgICA6IDAuNSAqIGJvdW5jZU91dCh0ICogMi4wIC0gMS4wKSArIDAuNVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5jZUluT3V0IiwidmFyIGJvdW5jZU91dCA9IHJlcXVpcmUoJy4vYm91bmNlLW91dCcpXG5cbmZ1bmN0aW9uIGJvdW5jZUluKHQpIHtcbiAgcmV0dXJuIDEuMCAtIGJvdW5jZU91dCgxLjAgLSB0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5jZUluIiwiZnVuY3Rpb24gYm91bmNlT3V0KHQpIHtcbiAgdmFyIGEgPSA0LjAgLyAxMS4wXG4gIHZhciBiID0gOC4wIC8gMTEuMFxuICB2YXIgYyA9IDkuMCAvIDEwLjBcblxuICB2YXIgY2EgPSA0MzU2LjAgLyAzNjEuMFxuICB2YXIgY2IgPSAzNTQ0Mi4wIC8gMTgwNS4wXG4gIHZhciBjYyA9IDE2MDYxLjAgLyAxODA1LjBcblxuICB2YXIgdDIgPSB0ICogdFxuXG4gIHJldHVybiB0IDwgYVxuICAgID8gNy41NjI1ICogdDJcbiAgICA6IHQgPCBiXG4gICAgICA/IDkuMDc1ICogdDIgLSA5LjkgKiB0ICsgMy40XG4gICAgICA6IHQgPCBjXG4gICAgICAgID8gY2EgKiB0MiAtIGNiICogdCArIGNjXG4gICAgICAgIDogMTAuOCAqIHQgKiB0IC0gMjAuNTIgKiB0ICsgMTAuNzJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBib3VuY2VPdXQiLCJmdW5jdGlvbiBjaXJjSW5PdXQodCkge1xuICBpZiAoKHQgKj0gMikgPCAxKSByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpXG4gIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaXJjSW5PdXQiLCJmdW5jdGlvbiBjaXJjSW4odCkge1xuICByZXR1cm4gMS4wIC0gTWF0aC5zcXJ0KDEuMCAtIHQgKiB0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNJbiIsImZ1bmN0aW9uIGNpcmNPdXQodCkge1xuICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAoIC0tdCAqIHQgKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaXJjT3V0IiwiZnVuY3Rpb24gY3ViaWNJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyA0LjAgKiB0ICogdCAqIHRcbiAgICA6IDAuNSAqIE1hdGgucG93KDIuMCAqIHQgLSAyLjAsIDMuMCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdWJpY0luT3V0IiwiZnVuY3Rpb24gY3ViaWNJbih0KSB7XG4gIHJldHVybiB0ICogdCAqIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdWJpY0luIiwiZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICB2YXIgZiA9IHQgLSAxLjBcbiAgcmV0dXJuIGYgKiBmICogZiArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljT3V0IiwiZnVuY3Rpb24gZWxhc3RpY0luT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/IDAuNSAqIE1hdGguc2luKCsxMy4wICogTWF0aC5QSS8yICogMi4wICogdCkgKiBNYXRoLnBvdygyLjAsIDEwLjAgKiAoMi4wICogdCAtIDEuMCkpXG4gICAgOiAwLjUgKiBNYXRoLnNpbigtMTMuMCAqIE1hdGguUEkvMiAqICgoMi4wICogdCAtIDEuMCkgKyAxLjApKSAqIE1hdGgucG93KDIuMCwgLTEwLjAgKiAoMi4wICogdCAtIDEuMCkpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxhc3RpY0luT3V0IiwiZnVuY3Rpb24gZWxhc3RpY0luKHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKDEzLjAgKiB0ICogTWF0aC5QSS8yKSAqIE1hdGgucG93KDIuMCwgMTAuMCAqICh0IC0gMS4wKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbGFzdGljSW4iLCJmdW5jdGlvbiBlbGFzdGljT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKC0xMy4wICogKHQgKyAxLjApICogTWF0aC5QSS8yKSAqIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsYXN0aWNPdXQiLCJmdW5jdGlvbiBleHBvSW5PdXQodCkge1xuICByZXR1cm4gKHQgPT09IDAuMCB8fCB0ID09PSAxLjApXG4gICAgPyB0XG4gICAgOiB0IDwgMC41XG4gICAgICA/ICswLjUgKiBNYXRoLnBvdygyLjAsICgyMC4wICogdCkgLSAxMC4wKVxuICAgICAgOiAtMC41ICogTWF0aC5wb3coMi4wLCAxMC4wIC0gKHQgKiAyMC4wKSkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvSW5PdXQiLCJmdW5jdGlvbiBleHBvSW4odCkge1xuICByZXR1cm4gdCA9PT0gMC4wID8gdCA6IE1hdGgucG93KDIuMCwgMTAuMCAqICh0IC0gMS4wKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvSW4iLCJmdW5jdGlvbiBleHBvT3V0KHQpIHtcbiAgcmV0dXJuIHQgPT09IDEuMCA/IHQgOiAxLjAgLSBNYXRoLnBvdygyLjAsIC0xMC4wICogdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvT3V0IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdCdiYWNrSW5PdXQnOiByZXF1aXJlKCcuL2JhY2staW4tb3V0JyksXG5cdCdiYWNrSW4nOiByZXF1aXJlKCcuL2JhY2staW4nKSxcblx0J2JhY2tPdXQnOiByZXF1aXJlKCcuL2JhY2stb3V0JyksXG5cdCdib3VuY2VJbk91dCc6IHJlcXVpcmUoJy4vYm91bmNlLWluLW91dCcpLFxuXHQnYm91bmNlSW4nOiByZXF1aXJlKCcuL2JvdW5jZS1pbicpLFxuXHQnYm91bmNlT3V0JzogcmVxdWlyZSgnLi9ib3VuY2Utb3V0JyksXG5cdCdjaXJjSW5PdXQnOiByZXF1aXJlKCcuL2NpcmMtaW4tb3V0JyksXG5cdCdjaXJjSW4nOiByZXF1aXJlKCcuL2NpcmMtaW4nKSxcblx0J2NpcmNPdXQnOiByZXF1aXJlKCcuL2NpcmMtb3V0JyksXG5cdCdjdWJpY0luT3V0JzogcmVxdWlyZSgnLi9jdWJpYy1pbi1vdXQnKSxcblx0J2N1YmljSW4nOiByZXF1aXJlKCcuL2N1YmljLWluJyksXG5cdCdjdWJpY091dCc6IHJlcXVpcmUoJy4vY3ViaWMtb3V0JyksXG5cdCdlbGFzdGljSW5PdXQnOiByZXF1aXJlKCcuL2VsYXN0aWMtaW4tb3V0JyksXG5cdCdlbGFzdGljSW4nOiByZXF1aXJlKCcuL2VsYXN0aWMtaW4nKSxcblx0J2VsYXN0aWNPdXQnOiByZXF1aXJlKCcuL2VsYXN0aWMtb3V0JyksXG5cdCdleHBvSW5PdXQnOiByZXF1aXJlKCcuL2V4cG8taW4tb3V0JyksXG5cdCdleHBvSW4nOiByZXF1aXJlKCcuL2V4cG8taW4nKSxcblx0J2V4cG9PdXQnOiByZXF1aXJlKCcuL2V4cG8tb3V0JyksXG5cdCdsaW5lYXInOiByZXF1aXJlKCcuL2xpbmVhcicpLFxuXHQncXVhZEluT3V0JzogcmVxdWlyZSgnLi9xdWFkLWluLW91dCcpLFxuXHQncXVhZEluJzogcmVxdWlyZSgnLi9xdWFkLWluJyksXG5cdCdxdWFkT3V0JzogcmVxdWlyZSgnLi9xdWFkLW91dCcpLFxuXHQncXVhcnRJbk91dCc6IHJlcXVpcmUoJy4vcXVhcnQtaW4tb3V0JyksXG5cdCdxdWFydEluJzogcmVxdWlyZSgnLi9xdWFydC1pbicpLFxuXHQncXVhcnRPdXQnOiByZXF1aXJlKCcuL3F1YXJ0LW91dCcpLFxuXHQncXVpbnRJbk91dCc6IHJlcXVpcmUoJy4vcXVpbnQtaW4tb3V0JyksXG5cdCdxdWludEluJzogcmVxdWlyZSgnLi9xdWludC1pbicpLFxuXHQncXVpbnRPdXQnOiByZXF1aXJlKCcuL3F1aW50LW91dCcpLFxuXHQnc2luZUluT3V0JzogcmVxdWlyZSgnLi9zaW5lLWluLW91dCcpLFxuXHQnc2luZUluJzogcmVxdWlyZSgnLi9zaW5lLWluJyksXG5cdCdzaW5lT3V0JzogcmVxdWlyZSgnLi9zaW5lLW91dCcpXG59IiwiZnVuY3Rpb24gbGluZWFyKHQpIHtcbiAgcmV0dXJuIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaW5lYXIiLCJmdW5jdGlvbiBxdWFkSW5PdXQodCkge1xuICAgIHQgLz0gMC41XG4gICAgaWYgKHQgPCAxKSByZXR1cm4gMC41KnQqdFxuICAgIHQtLVxuICAgIHJldHVybiAtMC41ICogKHQqKHQtMikgLSAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YWRJbk91dCIsImZ1bmN0aW9uIHF1YWRJbih0KSB7XG4gIHJldHVybiB0ICogdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YWRJbiIsImZ1bmN0aW9uIHF1YWRPdXQodCkge1xuICByZXR1cm4gLXQgKiAodCAtIDIuMClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFkT3V0IiwiZnVuY3Rpb24gcXVhcnRpY0luT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/ICs4LjAgKiBNYXRoLnBvdyh0LCA0LjApXG4gICAgOiAtOC4wICogTWF0aC5wb3codCAtIDEuMCwgNC4wKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YXJ0aWNJbk91dCIsImZ1bmN0aW9uIHF1YXJ0aWNJbih0KSB7XG4gIHJldHVybiBNYXRoLnBvdyh0LCA0LjApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhcnRpY0luIiwiZnVuY3Rpb24gcXVhcnRpY091dCh0KSB7XG4gIHJldHVybiBNYXRoLnBvdyh0IC0gMS4wLCAzLjApICogKDEuMCAtIHQpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhcnRpY091dCIsImZ1bmN0aW9uIHFpbnRpY0luT3V0KHQpIHtcbiAgICBpZiAoICggdCAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqIHQgKiB0ICogdCAqIHQgKiB0XG4gICAgcmV0dXJuIDAuNSAqICggKCB0IC09IDIgKSAqIHQgKiB0ICogdCAqIHQgKyAyIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxaW50aWNJbk91dCIsImZ1bmN0aW9uIHFpbnRpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcWludGljSW4iLCJmdW5jdGlvbiBxaW50aWNPdXQodCkge1xuICByZXR1cm4gLS10ICogdCAqIHQgKiB0ICogdCArIDFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxaW50aWNPdXQiLCJmdW5jdGlvbiBzaW5lSW5PdXQodCkge1xuICByZXR1cm4gLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJKnQpIC0gMSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lSW5PdXQiLCJmdW5jdGlvbiBzaW5lSW4odCkge1xuICByZXR1cm4gMSAtIE1hdGguY29zKCB0ICogTWF0aC5QSSAvIDIgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbmVJbiIsImZ1bmN0aW9uIHNpbmVPdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4odCAqIE1hdGguUEkvMilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lT3V0IiwiaW1wb3J0IHtsaW5lYXJ9IGZyb20gJ2Vhc2VzJztcblxuLyoqXG4gKiBUaGUgdHdlZW4gcGxheWVyLiBXaWxsIGNoYW5nZSB0YXJnZXQgb2JqZWN0IHZhbHVlcyB3aXRoIHNwZWNpZmllZCBwYXJhbWV0ZXJzLlxuICogQGNsYXNzIFR3ZWVuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4ge1xuXG4gIHN0YXRpYyBJRExFID0gMDtcbiAgc3RhdGljIFJVTk5JTkcgPSAxO1xuICBzdGF0aWMgQ09NUExFVEVEID0gMjtcblxuICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgdGhpcy5vYmogPSBvYmo7XG5cbiAgICB0aGlzLnN0YXJ0ID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICB0aGlzLnN0YXRlID0gMDtcblxuICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgICB0aGlzLmxhc3QgPSB0aGlzO1xuICAgIHRoaXMudGltZSA9IDA7XG5cbiAgICB0aGlzLnBhcmFtc0Zyb20gPSBudWxsO1xuICAgIHRoaXMucGFyYW1zVG8gPSBudWxsO1xuICAgIHRoaXMuZWFzZSA9IGxpbmVhcjtcblxuICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gIH1cblxuICBfZ2V0VHdlZW4ob2JqLCBkdXJhdGlvbiwgZWFzZSkge1xuICAgIHZhciBsYXN0ID0gdGhpcy5sYXN0O1xuICAgIHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmopO1xuICAgIHR3ZWVuLmRlYnVnID0gdGhpcy5kZWJ1ZztcbiAgICB0d2Vlbi5zdGFydCA9IGxhc3Quc3RhcnQgKyBsYXN0LmR1cmF0aW9uO1xuICAgIHR3ZWVuLmR1cmF0aW9uID0gZHVyYXRpb24gfHwgMDtcbiAgICB0d2Vlbi5zdGF0ZSA9IDA7XG4gICAgdHdlZW4uZWFzZSA9IGVhc2U7XG4gICAgdHdlZW4ucHJldiA9IGxhc3Q7XG4gICAgbGFzdC5uZXh0ID0gdHdlZW47XG4gICAgdGhpcy5sYXN0ID0gdHdlZW47XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9XG5cbiAgX2dldExhc3RQYXJhbShmaWVsZCkge1xuICAgIHZhciByZWYgPSB0aGlzLmxhc3QucHJldjtcbiAgICB3aGlsZSAocmVmKSB7XG4gICAgICBpZiAocmVmLm9iaiA9PT0gdGhpcy5vYmogJiYgcmVmLnBhcmFtc1RvICYmIHJlZi5wYXJhbXNUb1tmaWVsZF0gIT09IHVuZGVmaW5lZCAmJiByZWYucGFyYW1zVG9bZmllbGRdICE9PSBudWxsKSBicmVhaztcbiAgICAgIHJlZiA9IHJlZi5wcmV2O1xuICAgIH1cbiAgICB2YXIgdiA9IHJlZiA/IHJlZi5wYXJhbXNUb1tmaWVsZF0gOiB0aGlzLm9ialtmaWVsZF07XG4gICAgcmV0dXJuIHY7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBuZXcgdHdlZW4sIHdpdGggbmV3IHRhcmdldC5cbiAgICogQG1ldGhvZCBUd2VlbiNhZGRcbiAgICogQHBhcmFtIG9iaiB7b2JqZWN0fSBUaGUgb2JqZWN0IHRoYXQgd2lsbCBiZSB0d2VlbmVkLlxuICAgKiBAcmV0dXJucyBUd2VlblxuICAgKi9cbiAgYWRkKG9iaikge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKG9iaiwgMCwgbGluZWFyKTtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgdHdlZW4gdGhhdCBzdGFydHMgd2l0aCBzcGVjaWZpZWQgdmFsdWVzLlxuICAgKiBAbWV0aG9kIFR3ZWVuI2Zyb21cbiAgICogQHBhcmFtIHByb3BzIHtvYmplY3R9IFZhbHVlcyB0aGF0IHRoZSB0d2VlbiB3aWxsIGNvbWUgZnJvbS5cbiAgICogQHBhcmFtIGR1cmF0aW9uIHtmbG9hdH0gVHdlZW4ncyBkdXJhdGlvbi5cbiAgICogQHBhcmFtIFtlYXNlXSB7ZnVuY3Rpb259IFR3ZWVuJ3MgZWFzaW5nIGN1cnZlLlxuICAgKiBAcmV0dXJucyBUd2VlblxuICAgKi9cbiAgZnJvbShwcm9wcywgZHVyYXRpb24sIGVhc2UpIHtcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2Vlbih0aGlzLm9iaiwgZHVyYXRpb24sIGVhc2UpO1xuICAgIHR3ZWVuLm5hbWUgPSAnZnJvbSc7XG4gICAgdHdlZW4ucGFyYW1zRnJvbSA9IHByb3BzO1xuICAgIHR3ZWVuLnBhcmFtc1RvID0ge307XG4gICAgZm9yICh2YXIgZiBpbiBwcm9wcykge1xuICAgICAgdHdlZW4ucGFyYW1zVG9bZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHR3ZWVuIHRoYXQgZW5kcyB3aXRoIHNwZWNpZmllZCB2YWx1ZXMuXG4gICAqIEBtZXRob2QgVHdlZW4jdG9cbiAgICogQHBhcmFtIHByb3BzIHtvYmplY3R9IFZhbHVlcyB0aGF0IHRoZSB0d2VlbiB3aWxsIGdvIHRvLlxuICAgKiBAcGFyYW0gZHVyYXRpb24ge2Zsb2F0fSBUd2VlbidzIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0gW2Vhc2VdIHtmdW5jdGlvbn0gVHdlZW4ncyBlYXNpbmcgY3VydmUuXG4gICAqIEByZXR1cm5zIFR3ZWVuXG4gICAqL1xuICB0byhwcm9wcywgZHVyYXRpb24sIGVhc2UpIHtcbiAgICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2Vlbih0aGlzLm9iaiwgZHVyYXRpb24sIGVhc2UpO1xuICAgIHR3ZWVuLm5hbWUgPSAndG8nO1xuICAgIHR3ZWVuLnBhcmFtc1RvID0gcHJvcHM7XG4gICAgdHdlZW4ucGFyYW1zRnJvbSA9IHt9O1xuICAgIGZvciAodmFyIGYgaW4gcHJvcHMpIHtcbiAgICAgIHR3ZWVuLnBhcmFtc0Zyb21bZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEhvbGQgdGhlIHR3ZWVuIGZvciBhIHdoaWxlIGJlZm9yZSBuZXh0IGNvbW1hbmRzLlxuICAgKiBAbWV0aG9kIFR3ZWVuI3dhaXRcbiAgICogQHBhcmFtIGR1cmF0aW9uIHtmbG9hdH0gVGltZSB0byB3YWl0LlxuICAgKiBAcmV0dXJucyBUd2VlblxuICAgKi9cbiAgd2FpdChkdXJhdGlvbikge1xuICAgIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgbnVsbCk7XG4gICAgdHdlZW4ubmFtZSA9ICd3YWl0JztcbiAgICB0d2Vlbi5wYXJhbXNGcm9tID0gdHdlZW4ucHJldi5wYXJhbXNGcm9tO1xuICAgIHR3ZWVuLnBhcmFtc1RvID0gdHdlZW4ucHJldi5wYXJhbXNUbztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBjYWxsYmFjayB3aGVuIHRoZSBwcmV2aW91cyBjb21tYW5kcyBhcmUgY29tcGxldGVkLlxuICAgKiBAbWV0aG9kIFR3ZWVuI3RoZW5cbiAgICogQHBhcmFtIGNhbGxiYWNrIHtmdW5jdGlvbn0gTWV0aG9kIHRoYSB3aWxsIGJlIGV4ZWN1dGVkIGFzIGNhbGxiYWNrLlxuICAgKiBAcmV0dXJucyBUd2VlblxuICAgKi9cbiAgdGhlbihjYWxsYmFjaykge1xuICAgIHRoaXMubGFzdC5vbkNvbXBsZXRlID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRUaW1lKHZhbHVlKSB7XG4gICAgdGhpcy50aW1lID0gdmFsdWU7XG4gICAgaWYgKHRoaXMubmV4dCkgdGhpcy5uZXh0LnNldFRpbWUodmFsdWUpO1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lO1xuICB9XG5cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgaWYgKGRlbHRhKSB0aGlzLnRpbWUgKz0gZGVsdGE7XG4gICAgaWYgKHRoaXMudGltZSA+PSB0aGlzLnN0YXJ0ICYmIHRoaXMudGltZSA8PSB0aGlzLnN0YXJ0ICsgdGhpcy5kdXJhdGlvbikge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gVHdlZW4uUlVOTklORykgaWYgKHRoaXMuZGVidWcpIHRoaXMubG9nKCdzdGFydGVkJyk7XG4gICAgICB0aGlzLnN0YXRlID0gVHdlZW4uUlVOTklORztcbiAgICAgIHRoaXMudXBkYXRlUHJvcHModGhpcy50aW1lIC0gdGhpcy5zdGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09IFR3ZWVuLlJVTk5JTkcpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZSA8IHRoaXMuc3RhcnQpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVByb3BzKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlUHJvcHModGhpcy5kdXJhdGlvbik7XG4gICAgICAgICAgaWYgKHRoaXMuZGVidWcpIHRoaXMubG9nKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZSA9IFR3ZWVuLklETEU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmV4dCkgdGhpcy5uZXh0LnVwZGF0ZShkZWx0YSk7XG4gIH1cblxuICB1cGRhdGVQcm9wcyh0aW1lKSB7XG4gICAgaWYgKCF0aGlzLmVhc2UpIHJldHVybjtcbiAgICB2YXIgcmF0aW8gPSB0aGlzLmVhc2UodGltZS90aGlzLmR1cmF0aW9uKTtcbiAgICBmb3IgKHZhciBmIGluIHRoaXMucGFyYW1zVG8pIHtcbiAgICAgIHZhciB2ZiA9IHRoaXMucGFyYW1zRnJvbVtmXTtcbiAgICAgIHZhciB2dCA9IHRoaXMucGFyYW1zVG9bZl07XG4gICAgICB2YXIgdmMgPSB2ZiArICh2dCAtIHZmKSpyYXRpbztcbiAgICAgIHRoaXMub2JqW2ZdID0gdmM7XG4gICAgfVxuICB9XG5cbiAgZmluaXNoZWQoKSB7XG4gICAgdmFyIHIgPSB0aGlzLnRpbWUgPj0gdGhpcy5zdGFydCArIHRoaXMuZHVyYXRpb247XG4gICAgaWYgKHIgJiYgdGhpcy5uZXh0KSByID0gdGhpcy5uZXh0LmZpbmlzaGVkKCk7XG4gICAgcmV0dXJuIHI7XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLm5leHQpIHRoaXMubmV4dC5kaXNwb3NlKCk7XG4gICAgaWYgKHRoaXMuZGVidWcpIHRoaXMubG9nKCdkaXNwb3NlZCEnKTtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgdGhpcy5sYXN0ID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtc0Zyb20gPSBudWxsO1xuICAgIHRoaXMucGFyYW1zVG8gPSBudWxsO1xuICAgIHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gIH1cblxuICBsb2cobXNnKSB7XG4gICAgaWYgKHRoaXMub2JqLm5hbWUgJiYgdGhpcy5uYW1lKSBjb25zb2xlLmxvZygnW1R3ZWVuXScsIHRoaXMub2JqLm5hbWUsIHRoaXMubmFtZSwgbXNnKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgVHdlZW4gZnJvbSAnLi9Ud2VlbidcblxuLyoqXG4gKiBBIHR3ZWVuIG1hbmFnZXIuIERlYWxzIHdpdGggdHdlZW4gY3JlYXRpb24sIHVwZGF0ZSBhbmQgZGVzdHJ1Y3Rpb24uXG4gKiBAY2xhc3MgVHdlZW5lclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gW2F1dG9VcGRhdGVSYXRlXSB7ZmxvYXR9IEludGVydmFsIChpbiBzZWNvbmRzKSB0aGF0IGFsbCB0d2VlbnMgd2lsbCBiZSB1cGRhdGVkLiBJZiAwLCB0aGUgYXV0by11cGRhdGUgd2lsbCBub3RcbiAqIHJ1biwgc28geW91IG11c3QgaGFuZGxlIHRoZSB1cGRhdGUgbWFudWFsbHkuIERlZmF1bHQgaXMgMC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW5lciB7XG4gIHN0YXRpYyBUd2VlbiA9IFR3ZWVuO1xuICBzdGF0aWMgZWFzZSA9IHJlcXVpcmUoJ2Vhc2VzJyk7XG5cbiAgY29uc3RydWN0b3IoYXV0b1VwZGF0ZVJhdGUpIHtcbiAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgdGhpcy50d2VlbnMgPSBbXTtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgaWYgKGF1dG9VcGRhdGVSYXRlID4gMCkgdGhpcy5lbmFibGVBdXRvVXBkYXRlKGF1dG9VcGRhdGVSYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHJldHVybiBhIFR3ZWVuIGluc3RhbmNlIHdpdGggcmVmZXJlbmNlZCBvYmplY3QuXG4gICAqIEBtZXRob2QgVHdlZW5lciNhZGRcbiAgICogQHBhcmFtIG9iaiB7b2JqZWN0fSBUaGUgb2JqZWN0IHRoYXQgd2lsbCBiZSB0d2VlbmVkLlxuICAgKiBAcmV0dXJuIFR3ZWVuXG4gICAqL1xuICBhZGQob2JqKSB7XG4gICAgdmFyIHR3ZWVuID0gbmV3IFR3ZWVuKG9iaik7XG4gICAgdHdlZW4uZGVidWcgPSB0aGlzLmRlYnVnO1xuICAgIHRoaXMudHdlZW5zLnB1c2godHdlZW4pO1xuICAgIHJldHVybiB0d2VlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIHR3ZWVuIGluc3RhbmNlcyB0aGF0IGhhdmUgcmVmZXJlbmNlIHRvIHRoZSBvYmplY3QuXG4gICAqIEBtZXRob2QgVHdlZW5lciNyZW1vdmVcbiAgICogQHBhcmFtIG9iaiB7b2JqZWN0fSBUaGUgdHdlZW5lZCBvYmplY3QuXG4gICAqL1xuICByZW1vdmUob2JqKSB7XG4gICAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICAgIGlmICh0Lm9iaiA9PT0gb2JqKSB0aGlzLl9kZXN0cm95KHQsIGkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIHRoZSB1cGRhdGUgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gICAqIEBtZXRob2QgVHdlZW5lciNlbmFibGVBdXRvVXBkYXRlXG4gICAqIEBwYXJhbSByYXRlIHtmbG9hdH0gSW50ZXJ2YWwgKGluIHNlY29uZHMpIHRoYXQgdGhlIHVwZGF0ZSB3aWxsIGJlIHBsYXllZC5cbiAgICogSWYgMCBvciBsb3dlciwgdGhlIGF1dG9tYXRpYyB1cGRhdGUgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGVuYWJsZUF1dG9VcGRhdGUocmF0ZSkge1xuICAgIGlmICghcmF0ZSkge1xuICAgICAgdGhpcy5kaXNhYmxlQXV0b1VwZGF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgdGltZSA9IHNlbGYuZ2V0VGltZSgpO1xuICAgIHNlbGYuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdCA9IHNlbGYuZ2V0VGltZSgpO1xuICAgICAgdmFyIGQgPSB0IC0gdGltZTtcbiAgICAgIHRpbWUgPSB0O1xuICAgICAgc2VsZi51cGRhdGUoZCk7XG4gICAgfSwgcmF0ZSoxMDAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyB0aGUgYXV0b21hdGljIHVwZGF0ZS5cbiAgICogQG1ldGhvZCBUd2VlbmVyI2Rpc2FibGVBdXRvVXBkYXRlXG4gICAqL1xuICBkaXNhYmxlQXV0b1VwZGF0ZSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYWxsIHR3ZWVucy5cbiAgICogQG1ldGhvZCBUd2VlbmVyI3VwZGF0ZVxuICAgKiBAcGFyYW0gZGVsdGEge2Zsb2F0fSBUaGUgZWxhcHNlZCB0aW1lIChpbiBzZWNvbmRzKSBzaW5jZSBsYXN0IHVwZGF0ZS5cbiAgICovXG4gIHVwZGF0ZShkZWx0YSkge1xuICAgIHZhciBpID0gdGhpcy50d2VlbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciB0ID0gdGhpcy50d2VlbnNbaV07XG4gICAgICB0LnVwZGF0ZShkZWx0YSk7XG4gICAgICBpZiAodC5maW5pc2hlZCgpKSB0aGlzLl9kZXN0cm95KHQsIGkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IFR3ZWVuZXIgaW5zdGFuY2UuXG4gICAqIEBtZXRob2QgVHdlZW5lciNkaXNwb3NlXG4gICAqL1xuICBkaXNwb3NlKCkge1xuICAgIHRoaXMudHdlZW5zID0gbnVsbDtcbiAgICB0aGlzLmRpc2FibGVBdXRvVXBkYXRlKCk7XG4gIH1cblxuICBfZGVzdHJveSh0d2VlbiwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkgaW5kZXggPSB0aGlzLnR3ZWVuLmluZGV4T2YodHdlZW4pO1xuICAgIHRoaXMudHdlZW5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgdHdlZW4uZGlzcG9zZSgpO1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkvMTAwMDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgVHdlZW5lciBmcm9tICcuL1R3ZWVuZXInXG5cbmlmICh0eXBlb2Yod2luZG93KSA9PT0gXCJvYmplY3RcIikge1xuICB3aW5kb3cuVHdlZW5lciA9IFR3ZWVuZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5lcjtcbiJdfQ==
