(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var eases = require('eases');

/**
 * The tween player. Will change target object values with specified parameters.
 * @class Tween
 * @constructor
 * @param obj {object} The object that will be tweened.
 */
var Tween = function Tween(obj) {
  this.name = '';
  this.debug = true;
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
  this.ease = eases.linear;

  this.onComplete = null;
};

Tween.IDLE = 0;
Tween.RUNNING = 1;
Tween.COMPLETED = 2;

Tween.prototype._getTween = function (obj, duration, ease) {
  var last = this.last;
  var tween = new Tween(obj);
  tween.start = last.start + last.duration;
  tween.duration = duration || 0;
  tween.state = 0;
  tween.ease = ease;
  tween.prev = last;
  last.next = tween;
  this.last = tween;
  return tween;
};

Tween.prototype._getLastParam = function (field) {
  var ref = this.last.prev;
  while (ref) {
    if (ref.obj === this.obj && ref.paramsTo && ref.paramsTo[field] !== undefined && ref.paramsTo[field] !== null) break;
    ref = ref.prev;
  }
  var v = ref ? ref.paramsTo[field] : this.obj[field];
  return v;
};

/**
 * Adds new tween, with new target.
 * @method Tween#add
 * @param obj {object} The object that will be tweened.
 * @returns Tween
 */
Tween.prototype.add = function (obj) {
  var tween = this._getTween(obj, 0, eases.linear);
  return tween;
};

/**
 * Add a tween that starts with specified values.
 * @method Tween#from
 * @param props {object} Values that the tween will come from.
 * @param duration {float} Tween's duration.
 * @param [ease] {function} Tween's easing curve.
 * @returns Tween
 */
Tween.prototype.from = function (props, duration, ease) {
  var tween = this._getTween(this.obj, duration, ease);
  tween.name = 'from';
  tween.paramsFrom = props;
  tween.paramsTo = {};
  for (var f in props) {
    tween.paramsTo[f] = this._getLastParam(f);
  }
  return this;
};

/**
 * Add a tween that ends with specified values.
 * @method Tween#to
 * @param props {object} Values that the tween will go to.
 * @param duration {float} Tween's duration.
 * @param [ease] {function} Tween's easing curve.
 * @returns Tween
 */
Tween.prototype.to = function (props, duration, ease) {
  var tween = this._getTween(this.obj, duration, ease);
  tween.name = 'to';
  tween.paramsTo = props;
  tween.paramsFrom = {};
  for (var f in props) {
    tween.paramsFrom[f] = this._getLastParam(f);
  }
  return this;
};

/**
 * Hold the tween for a while before next commands.
 * @method Tween#wait
 * @param duration {float} Time to wait.
 * @returns Tween
 */
Tween.prototype.wait = function (duration) {
  var tween = this._getTween(this.obj, duration, null);
  tween.name = 'wait';
  tween.paramsFrom = tween.prev.paramsFrom;
  tween.paramsTo = tween.prev.paramsTo;
  return this;
};

/**
 * Set a callback when the previous commands are completed.
 * @method Tween#then
 * @param callback {function} Method tha will be executed as callback.
 * @returns Tween
 */
Tween.prototype.then = function (callback) {
  this.last.onComplete = callback;
  return this;
};

Tween.prototype.setTime = function (value) {
  this.time = value;
  if (this.next) this.next.setTime(value);
};

Tween.prototype.getTime = function () {
  return this.time;
};

Tween.prototype.update = function (delta) {
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
};

Tween.prototype.updateProps = function (time) {
  if (!this.ease) return;
  var ratio = this.ease(time / this.duration);
  for (var f in this.paramsTo) {
    var vf = this.paramsFrom[f];
    var vt = this.paramsTo[f];
    var vc = vf + (vt - vf) * ratio;
    this.obj[f] = vc;
  }
};

Tween.prototype.finished = function () {
  var r = this.time >= this.start + this.duration;
  if (r && this.next) r = this.next.finished();
  return r;
};

Tween.prototype.dispose = function () {
  if (this.next) this.next.dispose();
  if (this.debug) this.log('disposed!');
  this.next = null;
  this.prev = null;
  this.last = null;
  this.paramsFrom = null;
  this.paramsTo = null;
  this.onComplete = null;
};

Tween.prototype.log = function (msg) {
  console.log(this.obj.name, this.name, msg);
};

module.exports = Tween;

},{"eases":19}],34:[function(require,module,exports){
'use strict';

var Tween = require('./Tween');
var eases = require('eases');

/**
 * A tween manager. Deals with tween creation, update and destruction.
 * @class Tweener
 * @constructor
 * @param [autoUpdateRate] {float} Interval (in seconds) that all tweens will be updated. If 0, the auto-update will not
 * run, so you must handle the update manually. Default is 0.
 */
var Tweener = function Tweener(autoUpdateRate) {
  this.tweens = [];
  this._interval = null;
  if (autoUpdateRate > 0) this.enableAutoUpdate(autoUpdateRate);
};

/**
 * Create and return a Tween instance with referenced object.
 * @method Tweener#add
 * @param obj {object} The object that will be tweened.
 * @return Tween
 */
Tweener.prototype.add = function (obj) {
  var tween = new Tween(obj);
  this.tweens.push(tween);
  return tween;
};

/**
 * Remove all tween instances that have reference to the object.
 * @method Tweener#remove
 * @param obj {object} The tweened object.
 */
Tweener.prototype.remove = function (obj) {
  var i = this.tweens.length;
  while (i--) {
    var t = this.tweens[i];
    if (t.obj === obj) this._destroy(t, i);
  }
};

/**
 * Runs the update method automatically.
 * @method Tweener#enableAutoUpdate
 * @param rate {float} Interval (in seconds) that the update will be played.
 * If 0 or lower, the automatic update will be disabled.
 */
Tweener.prototype.enableAutoUpdate = function (rate) {
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
};

/**
 * Stops the automatic update.
 * @method Tweener#disableAutoUpdate
 */
Tweener.prototype.disableAutoUpdate = function () {
  clearInterval(this._interval);
};

/**
 * Update all tweens.
 * @method Tweener#update
 * @param delta {float} The elapsed time (in seconds) since last update.
 */
Tweener.prototype.update = function (delta) {
  var i = this.tweens.length;
  while (i--) {
    var t = this.tweens[i];
    t.update(delta);
    if (t.finished()) this._destroy(t, i);
  }
};

Tweener.prototype._destroy = function (tween, index) {
  if (index === undefined) index = this.tween.indexOf(tween);
  this.tweens.splice(index, 1);
  tween.dispose();
};

Tweener.prototype.getTime = function () {
  return new Date().getTime() / 1000;
};

Tweener.Tween = Tween;
Tweener.ease = eases;

if (typeof window === 'object') {
  window.Tweener = Tweener;
}

},{"./Tween":33,"eases":19}]},{},[34])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9iYWNrLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2UtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2JvdW5jZS1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2Utb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY2lyYy1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY3ViaWMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2VsYXN0aWMtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvZXhwby1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzZXMvbGluZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhZC1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhcnQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWludC1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvc2luZS1vdXQuanMiLCIvVXNlcnMvbWF1cm9kZXRhcnNvL1NpdGVzL0dhbWVzL3R3ZWVuZXIvc291cmNlL1R3ZWVuLmpzIiwiL1VzZXJzL21hdXJvZGV0YXJzby9TaXRlcy9HYW1lcy90d2VlbmVyL3NvdXJjZS9Ud2VlbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FD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QUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNELE1BQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QixPQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDakIsQ0FBQzs7QUFFRixPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxZQUFXO0FBQ3JDLFNBQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBQyxJQUFJLENBQUM7Q0FDbEMsQ0FBQzs7QUFFRixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN0QixPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzs7QUFFckIsSUFBSSxPQUFPLE1BQU0sQUFBQyxLQUFLLFFBQVEsRUFBRTtBQUMvQixRQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUMxQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBiYWNrSW5PdXQodCkge1xuICB2YXIgcyA9IDEuNzAxNTggKiAxLjUyNVxuICBpZiAoKHQgKj0gMikgPCAxKVxuICAgIHJldHVybiAwLjUgKiAodCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSlcbiAgcmV0dXJuIDAuNSAqICgodCAtPSAyKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDIpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFja0luT3V0IiwiZnVuY3Rpb24gYmFja0luKHQpIHtcbiAgdmFyIHMgPSAxLjcwMTU4XG4gIHJldHVybiB0ICogdCAqICgocyArIDEpICogdCAtIHMpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFja0luIiwiZnVuY3Rpb24gYmFja091dCh0KSB7XG4gIHZhciBzID0gMS43MDE1OFxuICByZXR1cm4gLS10ICogdCAqICgocyArIDEpICogdCArIHMpICsgMVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhY2tPdXQiLCJ2YXIgYm91bmNlT3V0ID0gcmVxdWlyZSgnLi9ib3VuY2Utb3V0JylcblxuZnVuY3Rpb24gYm91bmNlSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gMC41ICogKDEuMCAtIGJvdW5jZU91dCgxLjAgLSB0ICogMi4wKSlcbiAgICA6IDAuNSAqIGJvdW5jZU91dCh0ICogMi4wIC0gMS4wKSArIDAuNVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5jZUluT3V0IiwidmFyIGJvdW5jZU91dCA9IHJlcXVpcmUoJy4vYm91bmNlLW91dCcpXG5cbmZ1bmN0aW9uIGJvdW5jZUluKHQpIHtcbiAgcmV0dXJuIDEuMCAtIGJvdW5jZU91dCgxLjAgLSB0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJvdW5jZUluIiwiZnVuY3Rpb24gYm91bmNlT3V0KHQpIHtcbiAgdmFyIGEgPSA0LjAgLyAxMS4wXG4gIHZhciBiID0gOC4wIC8gMTEuMFxuICB2YXIgYyA9IDkuMCAvIDEwLjBcblxuICB2YXIgY2EgPSA0MzU2LjAgLyAzNjEuMFxuICB2YXIgY2IgPSAzNTQ0Mi4wIC8gMTgwNS4wXG4gIHZhciBjYyA9IDE2MDYxLjAgLyAxODA1LjBcblxuICB2YXIgdDIgPSB0ICogdFxuXG4gIHJldHVybiB0IDwgYVxuICAgID8gNy41NjI1ICogdDJcbiAgICA6IHQgPCBiXG4gICAgICA/IDkuMDc1ICogdDIgLSA5LjkgKiB0ICsgMy40XG4gICAgICA6IHQgPCBjXG4gICAgICAgID8gY2EgKiB0MiAtIGNiICogdCArIGNjXG4gICAgICAgIDogMTAuOCAqIHQgKiB0IC0gMjAuNTIgKiB0ICsgMTAuNzJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBib3VuY2VPdXQiLCJmdW5jdGlvbiBjaXJjSW5PdXQodCkge1xuICBpZiAoKHQgKj0gMikgPCAxKSByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpXG4gIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaXJjSW5PdXQiLCJmdW5jdGlvbiBjaXJjSW4odCkge1xuICByZXR1cm4gMS4wIC0gTWF0aC5zcXJ0KDEuMCAtIHQgKiB0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNpcmNJbiIsImZ1bmN0aW9uIGNpcmNPdXQodCkge1xuICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAoIC0tdCAqIHQgKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaXJjT3V0IiwiZnVuY3Rpb24gY3ViaWNJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyA0LjAgKiB0ICogdCAqIHRcbiAgICA6IDAuNSAqIE1hdGgucG93KDIuMCAqIHQgLSAyLjAsIDMuMCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdWJpY0luT3V0IiwiZnVuY3Rpb24gY3ViaWNJbih0KSB7XG4gIHJldHVybiB0ICogdCAqIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdWJpY0luIiwiZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICB2YXIgZiA9IHQgLSAxLjBcbiAgcmV0dXJuIGYgKiBmICogZiArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmljT3V0IiwiZnVuY3Rpb24gZWxhc3RpY0luT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/IDAuNSAqIE1hdGguc2luKCsxMy4wICogTWF0aC5QSS8yICogMi4wICogdCkgKiBNYXRoLnBvdygyLjAsIDEwLjAgKiAoMi4wICogdCAtIDEuMCkpXG4gICAgOiAwLjUgKiBNYXRoLnNpbigtMTMuMCAqIE1hdGguUEkvMiAqICgoMi4wICogdCAtIDEuMCkgKyAxLjApKSAqIE1hdGgucG93KDIuMCwgLTEwLjAgKiAoMi4wICogdCAtIDEuMCkpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxhc3RpY0luT3V0IiwiZnVuY3Rpb24gZWxhc3RpY0luKHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKDEzLjAgKiB0ICogTWF0aC5QSS8yKSAqIE1hdGgucG93KDIuMCwgMTAuMCAqICh0IC0gMS4wKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbGFzdGljSW4iLCJmdW5jdGlvbiBlbGFzdGljT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKC0xMy4wICogKHQgKyAxLjApICogTWF0aC5QSS8yKSAqIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsYXN0aWNPdXQiLCJmdW5jdGlvbiBleHBvSW5PdXQodCkge1xuICByZXR1cm4gKHQgPT09IDAuMCB8fCB0ID09PSAxLjApXG4gICAgPyB0XG4gICAgOiB0IDwgMC41XG4gICAgICA/ICswLjUgKiBNYXRoLnBvdygyLjAsICgyMC4wICogdCkgLSAxMC4wKVxuICAgICAgOiAtMC41ICogTWF0aC5wb3coMi4wLCAxMC4wIC0gKHQgKiAyMC4wKSkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvSW5PdXQiLCJmdW5jdGlvbiBleHBvSW4odCkge1xuICByZXR1cm4gdCA9PT0gMC4wID8gdCA6IE1hdGgucG93KDIuMCwgMTAuMCAqICh0IC0gMS4wKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvSW4iLCJmdW5jdGlvbiBleHBvT3V0KHQpIHtcbiAgcmV0dXJuIHQgPT09IDEuMCA/IHQgOiAxLjAgLSBNYXRoLnBvdygyLjAsIC0xMC4wICogdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvT3V0IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdCdiYWNrSW5PdXQnOiByZXF1aXJlKCcuL2JhY2staW4tb3V0JyksXG5cdCdiYWNrSW4nOiByZXF1aXJlKCcuL2JhY2staW4nKSxcblx0J2JhY2tPdXQnOiByZXF1aXJlKCcuL2JhY2stb3V0JyksXG5cdCdib3VuY2VJbk91dCc6IHJlcXVpcmUoJy4vYm91bmNlLWluLW91dCcpLFxuXHQnYm91bmNlSW4nOiByZXF1aXJlKCcuL2JvdW5jZS1pbicpLFxuXHQnYm91bmNlT3V0JzogcmVxdWlyZSgnLi9ib3VuY2Utb3V0JyksXG5cdCdjaXJjSW5PdXQnOiByZXF1aXJlKCcuL2NpcmMtaW4tb3V0JyksXG5cdCdjaXJjSW4nOiByZXF1aXJlKCcuL2NpcmMtaW4nKSxcblx0J2NpcmNPdXQnOiByZXF1aXJlKCcuL2NpcmMtb3V0JyksXG5cdCdjdWJpY0luT3V0JzogcmVxdWlyZSgnLi9jdWJpYy1pbi1vdXQnKSxcblx0J2N1YmljSW4nOiByZXF1aXJlKCcuL2N1YmljLWluJyksXG5cdCdjdWJpY091dCc6IHJlcXVpcmUoJy4vY3ViaWMtb3V0JyksXG5cdCdlbGFzdGljSW5PdXQnOiByZXF1aXJlKCcuL2VsYXN0aWMtaW4tb3V0JyksXG5cdCdlbGFzdGljSW4nOiByZXF1aXJlKCcuL2VsYXN0aWMtaW4nKSxcblx0J2VsYXN0aWNPdXQnOiByZXF1aXJlKCcuL2VsYXN0aWMtb3V0JyksXG5cdCdleHBvSW5PdXQnOiByZXF1aXJlKCcuL2V4cG8taW4tb3V0JyksXG5cdCdleHBvSW4nOiByZXF1aXJlKCcuL2V4cG8taW4nKSxcblx0J2V4cG9PdXQnOiByZXF1aXJlKCcuL2V4cG8tb3V0JyksXG5cdCdsaW5lYXInOiByZXF1aXJlKCcuL2xpbmVhcicpLFxuXHQncXVhZEluT3V0JzogcmVxdWlyZSgnLi9xdWFkLWluLW91dCcpLFxuXHQncXVhZEluJzogcmVxdWlyZSgnLi9xdWFkLWluJyksXG5cdCdxdWFkT3V0JzogcmVxdWlyZSgnLi9xdWFkLW91dCcpLFxuXHQncXVhcnRJbk91dCc6IHJlcXVpcmUoJy4vcXVhcnQtaW4tb3V0JyksXG5cdCdxdWFydEluJzogcmVxdWlyZSgnLi9xdWFydC1pbicpLFxuXHQncXVhcnRPdXQnOiByZXF1aXJlKCcuL3F1YXJ0LW91dCcpLFxuXHQncXVpbnRJbk91dCc6IHJlcXVpcmUoJy4vcXVpbnQtaW4tb3V0JyksXG5cdCdxdWludEluJzogcmVxdWlyZSgnLi9xdWludC1pbicpLFxuXHQncXVpbnRPdXQnOiByZXF1aXJlKCcuL3F1aW50LW91dCcpLFxuXHQnc2luZUluT3V0JzogcmVxdWlyZSgnLi9zaW5lLWluLW91dCcpLFxuXHQnc2luZUluJzogcmVxdWlyZSgnLi9zaW5lLWluJyksXG5cdCdzaW5lT3V0JzogcmVxdWlyZSgnLi9zaW5lLW91dCcpXG59IiwiZnVuY3Rpb24gbGluZWFyKHQpIHtcbiAgcmV0dXJuIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaW5lYXIiLCJmdW5jdGlvbiBxdWFkSW5PdXQodCkge1xuICAgIHQgLz0gMC41XG4gICAgaWYgKHQgPCAxKSByZXR1cm4gMC41KnQqdFxuICAgIHQtLVxuICAgIHJldHVybiAtMC41ICogKHQqKHQtMikgLSAxKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YWRJbk91dCIsImZ1bmN0aW9uIHF1YWRJbih0KSB7XG4gIHJldHVybiB0ICogdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YWRJbiIsImZ1bmN0aW9uIHF1YWRPdXQodCkge1xuICByZXR1cm4gLXQgKiAodCAtIDIuMClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFkT3V0IiwiZnVuY3Rpb24gcXVhcnRpY0luT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/ICs4LjAgKiBNYXRoLnBvdyh0LCA0LjApXG4gICAgOiAtOC4wICogTWF0aC5wb3codCAtIDEuMCwgNC4wKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YXJ0aWNJbk91dCIsImZ1bmN0aW9uIHF1YXJ0aWNJbih0KSB7XG4gIHJldHVybiBNYXRoLnBvdyh0LCA0LjApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhcnRpY0luIiwiZnVuY3Rpb24gcXVhcnRpY091dCh0KSB7XG4gIHJldHVybiBNYXRoLnBvdyh0IC0gMS4wLCAzLjApICogKDEuMCAtIHQpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhcnRpY091dCIsImZ1bmN0aW9uIHFpbnRpY0luT3V0KHQpIHtcbiAgICBpZiAoICggdCAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqIHQgKiB0ICogdCAqIHQgKiB0XG4gICAgcmV0dXJuIDAuNSAqICggKCB0IC09IDIgKSAqIHQgKiB0ICogdCAqIHQgKyAyIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxaW50aWNJbk91dCIsImZ1bmN0aW9uIHFpbnRpY0luKHQpIHtcbiAgcmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcWludGljSW4iLCJmdW5jdGlvbiBxaW50aWNPdXQodCkge1xuICByZXR1cm4gLS10ICogdCAqIHQgKiB0ICogdCArIDFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxaW50aWNPdXQiLCJmdW5jdGlvbiBzaW5lSW5PdXQodCkge1xuICByZXR1cm4gLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJKnQpIC0gMSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lSW5PdXQiLCJmdW5jdGlvbiBzaW5lSW4odCkge1xuICByZXR1cm4gMSAtIE1hdGguY29zKCB0ICogTWF0aC5QSSAvIDIgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbmVJbiIsImZ1bmN0aW9uIHNpbmVPdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4odCAqIE1hdGguUEkvMilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lT3V0IiwidmFyIGVhc2VzID0gcmVxdWlyZSgnZWFzZXMnKTtcblxuLyoqXG4gKiBUaGUgdHdlZW4gcGxheWVyLiBXaWxsIGNoYW5nZSB0YXJnZXQgb2JqZWN0IHZhbHVlcyB3aXRoIHNwZWNpZmllZCBwYXJhbWV0ZXJzLlxuICogQGNsYXNzIFR3ZWVuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAqL1xudmFyIFR3ZWVuID0gZnVuY3Rpb24ob2JqKSB7XG4gIHRoaXMubmFtZSA9ICcnO1xuICB0aGlzLmRlYnVnID0gdHJ1ZTtcbiAgdGhpcy5vYmogPSBvYmo7XG5cbiAgdGhpcy5zdGFydCA9IDA7XG4gIHRoaXMuZHVyYXRpb24gPSAwO1xuICB0aGlzLnN0YXRlID0gMDtcblxuICB0aGlzLm5leHQgPSBudWxsO1xuICB0aGlzLnByZXYgPSBudWxsO1xuICB0aGlzLmxhc3QgPSB0aGlzO1xuICB0aGlzLnRpbWUgPSAwO1xuXG4gIHRoaXMucGFyYW1zRnJvbSA9IG51bGw7XG4gIHRoaXMucGFyYW1zVG8gPSBudWxsO1xuICB0aGlzLmVhc2UgPSBlYXNlcy5saW5lYXI7XG5cbiAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbn07XG5cblR3ZWVuLklETEUgPSAwO1xuVHdlZW4uUlVOTklORyA9IDE7XG5Ud2Vlbi5DT01QTEVURUQgPSAyO1xuXG5Ud2Vlbi5wcm90b3R5cGUuX2dldFR3ZWVuID0gZnVuY3Rpb24ob2JqLCBkdXJhdGlvbiwgZWFzZSkge1xuICB2YXIgbGFzdCA9IHRoaXMubGFzdDtcbiAgdmFyIHR3ZWVuID0gbmV3IFR3ZWVuKG9iaik7XG4gIHR3ZWVuLnN0YXJ0ID0gbGFzdC5zdGFydCArIGxhc3QuZHVyYXRpb247XG4gIHR3ZWVuLmR1cmF0aW9uID0gZHVyYXRpb24gfHwgMDtcbiAgdHdlZW4uc3RhdGUgPSAwO1xuICB0d2Vlbi5lYXNlID0gZWFzZTtcbiAgdHdlZW4ucHJldiA9IGxhc3Q7XG4gIGxhc3QubmV4dCA9IHR3ZWVuO1xuICB0aGlzLmxhc3QgPSB0d2VlbjtcbiAgcmV0dXJuIHR3ZWVuO1xufTtcblxuVHdlZW4ucHJvdG90eXBlLl9nZXRMYXN0UGFyYW0gPSBmdW5jdGlvbihmaWVsZCkge1xuICB2YXIgcmVmID0gdGhpcy5sYXN0LnByZXY7XG4gIHdoaWxlIChyZWYpIHtcbiAgICBpZiAocmVmLm9iaiA9PT0gdGhpcy5vYmogJiYgcmVmLnBhcmFtc1RvICYmIHJlZi5wYXJhbXNUb1tmaWVsZF0gIT09IHVuZGVmaW5lZCAmJiByZWYucGFyYW1zVG9bZmllbGRdICE9PSBudWxsKSBicmVhaztcbiAgICByZWYgPSByZWYucHJldjtcbiAgfVxuICB2YXIgdiA9IHJlZiA/IHJlZi5wYXJhbXNUb1tmaWVsZF0gOiB0aGlzLm9ialtmaWVsZF07XG4gIHJldHVybiB2O1xufTtcblxuLyoqXG4gKiBBZGRzIG5ldyB0d2Vlbiwgd2l0aCBuZXcgdGFyZ2V0LlxuICogQG1ldGhvZCBUd2VlbiNhZGRcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAqIEByZXR1cm5zIFR3ZWVuXG4gKi9cblR3ZWVuLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihvYmopIHtcbiAgdmFyIHR3ZWVuID0gdGhpcy5fZ2V0VHdlZW4ob2JqLCAwLCBlYXNlcy5saW5lYXIpO1xuICByZXR1cm4gdHdlZW47XG59O1xuXG4vKipcbiAqIEFkZCBhIHR3ZWVuIHRoYXQgc3RhcnRzIHdpdGggc3BlY2lmaWVkIHZhbHVlcy5cbiAqIEBtZXRob2QgVHdlZW4jZnJvbVxuICogQHBhcmFtIHByb3BzIHtvYmplY3R9IFZhbHVlcyB0aGF0IHRoZSB0d2VlbiB3aWxsIGNvbWUgZnJvbS5cbiAqIEBwYXJhbSBkdXJhdGlvbiB7ZmxvYXR9IFR3ZWVuJ3MgZHVyYXRpb24uXG4gKiBAcGFyYW0gW2Vhc2VdIHtmdW5jdGlvbn0gVHdlZW4ncyBlYXNpbmcgY3VydmUuXG4gKiBAcmV0dXJucyBUd2VlblxuICovXG5Ud2Vlbi5wcm90b3R5cGUuZnJvbSA9IGZ1bmN0aW9uKHByb3BzLCBkdXJhdGlvbiwgZWFzZSkge1xuICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2Vlbih0aGlzLm9iaiwgZHVyYXRpb24sIGVhc2UpO1xuICB0d2Vlbi5uYW1lID0gJ2Zyb20nO1xuICB0d2Vlbi5wYXJhbXNGcm9tID0gcHJvcHM7XG4gIHR3ZWVuLnBhcmFtc1RvID0ge307XG4gIGZvciAodmFyIGYgaW4gcHJvcHMpIHtcbiAgICB0d2Vlbi5wYXJhbXNUb1tmXSA9IHRoaXMuX2dldExhc3RQYXJhbShmKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkIGEgdHdlZW4gdGhhdCBlbmRzIHdpdGggc3BlY2lmaWVkIHZhbHVlcy5cbiAqIEBtZXRob2QgVHdlZW4jdG9cbiAqIEBwYXJhbSBwcm9wcyB7b2JqZWN0fSBWYWx1ZXMgdGhhdCB0aGUgdHdlZW4gd2lsbCBnbyB0by5cbiAqIEBwYXJhbSBkdXJhdGlvbiB7ZmxvYXR9IFR3ZWVuJ3MgZHVyYXRpb24uXG4gKiBAcGFyYW0gW2Vhc2VdIHtmdW5jdGlvbn0gVHdlZW4ncyBlYXNpbmcgY3VydmUuXG4gKiBAcmV0dXJucyBUd2VlblxuICovXG5Ud2Vlbi5wcm90b3R5cGUudG8gPSBmdW5jdGlvbihwcm9wcywgZHVyYXRpb24sIGVhc2UpIHtcbiAgdmFyIHR3ZWVuID0gdGhpcy5fZ2V0VHdlZW4odGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlKTtcbiAgdHdlZW4ubmFtZSA9ICd0byc7XG4gIHR3ZWVuLnBhcmFtc1RvID0gcHJvcHM7XG4gIHR3ZWVuLnBhcmFtc0Zyb20gPSB7fTtcbiAgZm9yICh2YXIgZiBpbiBwcm9wcykge1xuICAgIHR3ZWVuLnBhcmFtc0Zyb21bZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEhvbGQgdGhlIHR3ZWVuIGZvciBhIHdoaWxlIGJlZm9yZSBuZXh0IGNvbW1hbmRzLlxuICogQG1ldGhvZCBUd2VlbiN3YWl0XG4gKiBAcGFyYW0gZHVyYXRpb24ge2Zsb2F0fSBUaW1lIHRvIHdhaXQuXG4gKiBAcmV0dXJucyBUd2VlblxuICovXG5Ud2Vlbi5wcm90b3R5cGUud2FpdCA9IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XG4gIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgbnVsbCk7XG4gIHR3ZWVuLm5hbWUgPSAnd2FpdCc7XG4gIHR3ZWVuLnBhcmFtc0Zyb20gPSB0d2Vlbi5wcmV2LnBhcmFtc0Zyb207XG4gIHR3ZWVuLnBhcmFtc1RvID0gdHdlZW4ucHJldi5wYXJhbXNUbztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBhIGNhbGxiYWNrIHdoZW4gdGhlIHByZXZpb3VzIGNvbW1hbmRzIGFyZSBjb21wbGV0ZWQuXG4gKiBAbWV0aG9kIFR3ZWVuI3RoZW5cbiAqIEBwYXJhbSBjYWxsYmFjayB7ZnVuY3Rpb259IE1ldGhvZCB0aGEgd2lsbCBiZSBleGVjdXRlZCBhcyBjYWxsYmFjay5cbiAqIEByZXR1cm5zIFR3ZWVuXG4gKi9cblR3ZWVuLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgdGhpcy5sYXN0Lm9uQ29tcGxldGUgPSBjYWxsYmFjaztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5Ud2Vlbi5wcm90b3R5cGUuc2V0VGltZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHRoaXMudGltZSA9IHZhbHVlO1xuICBpZiAodGhpcy5uZXh0KSB0aGlzLm5leHQuc2V0VGltZSh2YWx1ZSk7XG59O1xuXG5Ud2Vlbi5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50aW1lO1xufTtcblxuVHdlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XG4gIGlmIChkZWx0YSkgdGhpcy50aW1lICs9IGRlbHRhO1xuICBpZiAodGhpcy50aW1lID49IHRoaXMuc3RhcnQgJiYgdGhpcy50aW1lIDw9IHRoaXMuc3RhcnQgKyB0aGlzLmR1cmF0aW9uKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT0gVHdlZW4uUlVOTklORykgaWYgKHRoaXMuZGVidWcpIHRoaXMubG9nKCdzdGFydGVkJyk7XG4gICAgdGhpcy5zdGF0ZSA9IFR3ZWVuLlJVTk5JTkc7XG4gICAgdGhpcy51cGRhdGVQcm9wcyh0aGlzLnRpbWUgLSB0aGlzLnN0YXJ0KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PSBUd2Vlbi5SVU5OSU5HKSB7XG4gICAgICBpZiAodGhpcy50aW1lIDwgdGhpcy5zdGFydCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BzKDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wcyh0aGlzLmR1cmF0aW9uKTtcbiAgICAgICAgaWYgKHRoaXMuZGVidWcpIHRoaXMubG9nKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgaWYgKHRoaXMub25Db21wbGV0ZSkgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSBUd2Vlbi5JRExFO1xuICB9XG5cbiAgaWYgKHRoaXMubmV4dCkgdGhpcy5uZXh0LnVwZGF0ZShkZWx0YSk7XG59O1xuXG5Ud2Vlbi5wcm90b3R5cGUudXBkYXRlUHJvcHMgPSBmdW5jdGlvbih0aW1lKSB7XG4gIGlmICghdGhpcy5lYXNlKSByZXR1cm47XG4gIHZhciByYXRpbyA9IHRoaXMuZWFzZSh0aW1lL3RoaXMuZHVyYXRpb24pO1xuICBmb3IgKHZhciBmIGluIHRoaXMucGFyYW1zVG8pIHtcbiAgICB2YXIgdmYgPSB0aGlzLnBhcmFtc0Zyb21bZl07XG4gICAgdmFyIHZ0ID0gdGhpcy5wYXJhbXNUb1tmXTtcbiAgICB2YXIgdmMgPSB2ZiArICh2dCAtIHZmKSpyYXRpbztcbiAgICB0aGlzLm9ialtmXSA9IHZjO1xuICB9XG59O1xuXG5Ud2Vlbi5wcm90b3R5cGUuZmluaXNoZWQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHIgPSB0aGlzLnRpbWUgPj0gdGhpcy5zdGFydCArIHRoaXMuZHVyYXRpb247XG4gIGlmIChyICYmIHRoaXMubmV4dCkgciA9IHRoaXMubmV4dC5maW5pc2hlZCgpO1xuICByZXR1cm4gcjtcbn07XG5cblR3ZWVuLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLm5leHQpIHRoaXMubmV4dC5kaXNwb3NlKCk7XG4gIGlmICh0aGlzLmRlYnVnKSB0aGlzLmxvZygnZGlzcG9zZWQhJyk7XG4gIHRoaXMubmV4dCA9IG51bGw7XG4gIHRoaXMucHJldiA9IG51bGw7XG4gIHRoaXMubGFzdCA9IG51bGw7XG4gIHRoaXMucGFyYW1zRnJvbSA9IG51bGw7XG4gIHRoaXMucGFyYW1zVG8gPSBudWxsO1xuICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xufTtcblxuVHdlZW4ucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uKG1zZykge1xuICBjb25zb2xlLmxvZyh0aGlzLm9iai5uYW1lLCB0aGlzLm5hbWUsIG1zZyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuO1xuIiwidmFyIFR3ZWVuID0gcmVxdWlyZSgnLi9Ud2VlbicpO1xudmFyIGVhc2VzID0gcmVxdWlyZSgnZWFzZXMnKTtcblxuLyoqXG4gKiBBIHR3ZWVuIG1hbmFnZXIuIERlYWxzIHdpdGggdHdlZW4gY3JlYXRpb24sIHVwZGF0ZSBhbmQgZGVzdHJ1Y3Rpb24uXG4gKiBAY2xhc3MgVHdlZW5lclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gW2F1dG9VcGRhdGVSYXRlXSB7ZmxvYXR9IEludGVydmFsIChpbiBzZWNvbmRzKSB0aGF0IGFsbCB0d2VlbnMgd2lsbCBiZSB1cGRhdGVkLiBJZiAwLCB0aGUgYXV0by11cGRhdGUgd2lsbCBub3RcbiAqIHJ1biwgc28geW91IG11c3QgaGFuZGxlIHRoZSB1cGRhdGUgbWFudWFsbHkuIERlZmF1bHQgaXMgMC5cbiAqL1xudmFyIFR3ZWVuZXIgPSBmdW5jdGlvbihhdXRvVXBkYXRlUmF0ZSkge1xuICB0aGlzLnR3ZWVucyA9IFtdO1xuICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gIGlmIChhdXRvVXBkYXRlUmF0ZSA+IDApIHRoaXMuZW5hYmxlQXV0b1VwZGF0ZShhdXRvVXBkYXRlUmF0ZSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgVHdlZW4gaW5zdGFuY2Ugd2l0aCByZWZlcmVuY2VkIG9iamVjdC5cbiAqIEBtZXRob2QgVHdlZW5lciNhZGRcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAqIEByZXR1cm4gVHdlZW5cbiAqL1xuVHdlZW5lci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ob2JqKSB7XG4gIHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmopO1xuICB0aGlzLnR3ZWVucy5wdXNoKHR3ZWVuKTtcbiAgcmV0dXJuIHR3ZWVuO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHR3ZWVuIGluc3RhbmNlcyB0aGF0IGhhdmUgcmVmZXJlbmNlIHRvIHRoZSBvYmplY3QuXG4gKiBAbWV0aG9kIFR3ZWVuZXIjcmVtb3ZlXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSB0d2VlbmVkIG9iamVjdC5cbiAqL1xuVHdlZW5lci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24ob2JqKSB7XG4gIHZhciBpID0gdGhpcy50d2VlbnMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICBpZiAodC5vYmogPT09IG9iaikgdGhpcy5fZGVzdHJveSh0LCBpKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSdW5zIHRoZSB1cGRhdGUgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gKiBAbWV0aG9kIFR3ZWVuZXIjZW5hYmxlQXV0b1VwZGF0ZVxuICogQHBhcmFtIHJhdGUge2Zsb2F0fSBJbnRlcnZhbCAoaW4gc2Vjb25kcykgdGhhdCB0aGUgdXBkYXRlIHdpbGwgYmUgcGxheWVkLlxuICogSWYgMCBvciBsb3dlciwgdGhlIGF1dG9tYXRpYyB1cGRhdGUgd2lsbCBiZSBkaXNhYmxlZC5cbiAqL1xuVHdlZW5lci5wcm90b3R5cGUuZW5hYmxlQXV0b1VwZGF0ZSA9IGZ1bmN0aW9uKHJhdGUpIHtcbiAgaWYgKCFyYXRlKSB7XG4gICAgdGhpcy5kaXNhYmxlQXV0b1VwZGF0ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRpbWUgPSBzZWxmLmdldFRpbWUoKTtcbiAgc2VsZi5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICB2YXIgdCA9IHNlbGYuZ2V0VGltZSgpO1xuICAgIHZhciBkID0gdCAtIHRpbWU7XG4gICAgdGltZSA9IHQ7XG4gICAgc2VsZi51cGRhdGUoZCk7XG4gIH0sIHJhdGUqMTAwMCk7XG59O1xuXG4vKipcbiAqIFN0b3BzIHRoZSBhdXRvbWF0aWMgdXBkYXRlLlxuICogQG1ldGhvZCBUd2VlbmVyI2Rpc2FibGVBdXRvVXBkYXRlXG4gKi9cblR3ZWVuZXIucHJvdG90eXBlLmRpc2FibGVBdXRvVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgYWxsIHR3ZWVucy5cbiAqIEBtZXRob2QgVHdlZW5lciN1cGRhdGVcbiAqIEBwYXJhbSBkZWx0YSB7ZmxvYXR9IFRoZSBlbGFwc2VkIHRpbWUgKGluIHNlY29uZHMpIHNpbmNlIGxhc3QgdXBkYXRlLlxuICovXG5Ud2VlbmVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkZWx0YSkge1xuICB2YXIgaSA9IHRoaXMudHdlZW5zLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciB0ID0gdGhpcy50d2VlbnNbaV07XG4gICAgdC51cGRhdGUoZGVsdGEpO1xuICAgIGlmICh0LmZpbmlzaGVkKCkpIHRoaXMuX2Rlc3Ryb3kodCwgaSk7XG4gIH1cbn07XG5cblxuVHdlZW5lci5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbih0d2VlbiwgaW5kZXgpIHtcbiAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIGluZGV4ID0gdGhpcy50d2Vlbi5pbmRleE9mKHR3ZWVuKTtcbiAgdGhpcy50d2VlbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgdHdlZW4uZGlzcG9zZSgpO1xufTtcblxuVHdlZW5lci5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkvMTAwMDtcbn07XG5cblR3ZWVuZXIuVHdlZW4gPSBUd2VlbjtcblR3ZWVuZXIuZWFzZSA9IGVhc2VzO1xuXG5pZiAodHlwZW9mKHdpbmRvdykgPT09IFwib2JqZWN0XCIpIHtcbiAgd2luZG93LlR3ZWVuZXIgPSBUd2VlbmVyO1xufVxuIl19