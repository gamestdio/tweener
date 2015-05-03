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
  this.ease = eases.linear;

  this.onComplete = null;
};

Tween.IDLE = 0;
Tween.RUNNING = 1;
Tween.COMPLETED = 2;

Tween.prototype._getTween = function (obj, duration, ease) {
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
  if (this.obj.name) console.log(this.obj.name, this.name, msg);
};

module.exports = Tween;

},{"eases":19}],34:[function(require,module,exports){
'use strict';

var Tween = require('./Tween');

/**
 * A tween manager. Deals with tween creation, update and destruction.
 * @class Tweener
 * @constructor
 * @param [autoUpdateRate] {float} Interval (in seconds) that all tweens will be updated. If 0, the auto-update will not
 * run, so you must handle the update manually. Default is 0.
 */
var Tweener = function Tweener(autoUpdateRate) {
  this.debug = false;
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
  tween.debug = this.debug;
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

module.exports = Tweener;

},{"./Tween":33}],35:[function(require,module,exports){
'use strict';

var Tweener = require('./Tweener');
var Tween = require('./Tween');
var eases = require('eases');

Tweener.Tween = Tween;
Tweener.ease = eases;

if (typeof window === 'object') {
  window.Tweener = Tweener;
}

module.exports = Tweener;

},{"./Tween":33,"./Tweener":34,"eases":19}]},{},[35])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvYmFjay1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9iYWNrLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2UtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2JvdW5jZS1pbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9ib3VuY2Utb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2NpcmMtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY2lyYy1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvY3ViaWMtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2N1YmljLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9lbGFzdGljLWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2VsYXN0aWMtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL2V4cG8taW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvZXhwby1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzZXMvbGluZWFyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YWQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhZC1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVhcnQtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LWluLmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3F1YXJ0LW91dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNlcy9xdWludC1pbi1vdXQuanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvcXVpbnQtb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4tb3V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc2VzL3NpbmUtaW4uanMiLCJub2RlX21vZHVsZXMvZWFzZXMvc2luZS1vdXQuanMiLCIvVXNlcnMvbWF1cm9kZXRhcnNvL1NpdGVzL0dhbWVzL3R3ZWVuZXIvc291cmNlL1R3ZWVuLmpzIiwiL1VzZXJzL21hdXJvZGV0YXJzby9TaXRlcy9HYW1lcy90d2VlbmVyL3NvdXJjZS9Ud2VlbmVyLmpzIiwiL1VzZXJzL21hdXJvZGV0YXJzby9TaXRlcy9HYW1lcy90d2VlbmVyL3NvdXJjZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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LFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0dBQ3ZDO0NBQ0YsQ0FBQzs7QUFHRixPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFTLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDbEQsTUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzRCxNQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0IsT0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0NBQ2pCLENBQUM7O0FBRUYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsWUFBVztBQUNyQyxTQUFPLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUMsSUFBSSxDQUFDO0NBQ2xDLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Ozs7O0FDakd6QixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDbkMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFN0IsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDdEIsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7O0FBRXJCLElBQUksT0FBTyxNQUFNLEFBQUMsS0FBSyxRQUFRLEVBQUU7QUFDL0IsUUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDMUI7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gYmFja0luT3V0KHQpIHtcbiAgdmFyIHMgPSAxLjcwMTU4ICogMS41MjVcbiAgaWYgKCh0ICo9IDIpIDwgMSlcbiAgICByZXR1cm4gMC41ICogKHQgKiB0ICogKChzICsgMSkgKiB0IC0gcykpXG4gIHJldHVybiAwLjUgKiAoKHQgLT0gMikgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAyKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhY2tJbk91dCIsImZ1bmN0aW9uIGJhY2tJbih0KSB7XG4gIHZhciBzID0gMS43MDE1OFxuICByZXR1cm4gdCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhY2tJbiIsImZ1bmN0aW9uIGJhY2tPdXQodCkge1xuICB2YXIgcyA9IDEuNzAxNThcbiAgcmV0dXJuIC0tdCAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYWNrT3V0IiwidmFyIGJvdW5jZU91dCA9IHJlcXVpcmUoJy4vYm91bmNlLW91dCcpXG5cbmZ1bmN0aW9uIGJvdW5jZUluT3V0KHQpIHtcbiAgcmV0dXJuIHQgPCAwLjVcbiAgICA/IDAuNSAqICgxLjAgLSBib3VuY2VPdXQoMS4wIC0gdCAqIDIuMCkpXG4gICAgOiAwLjUgKiBib3VuY2VPdXQodCAqIDIuMCAtIDEuMCkgKyAwLjVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBib3VuY2VJbk91dCIsInZhciBib3VuY2VPdXQgPSByZXF1aXJlKCcuL2JvdW5jZS1vdXQnKVxuXG5mdW5jdGlvbiBib3VuY2VJbih0KSB7XG4gIHJldHVybiAxLjAgLSBib3VuY2VPdXQoMS4wIC0gdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBib3VuY2VJbiIsImZ1bmN0aW9uIGJvdW5jZU91dCh0KSB7XG4gIHZhciBhID0gNC4wIC8gMTEuMFxuICB2YXIgYiA9IDguMCAvIDExLjBcbiAgdmFyIGMgPSA5LjAgLyAxMC4wXG5cbiAgdmFyIGNhID0gNDM1Ni4wIC8gMzYxLjBcbiAgdmFyIGNiID0gMzU0NDIuMCAvIDE4MDUuMFxuICB2YXIgY2MgPSAxNjA2MS4wIC8gMTgwNS4wXG5cbiAgdmFyIHQyID0gdCAqIHRcblxuICByZXR1cm4gdCA8IGFcbiAgICA/IDcuNTYyNSAqIHQyXG4gICAgOiB0IDwgYlxuICAgICAgPyA5LjA3NSAqIHQyIC0gOS45ICogdCArIDMuNFxuICAgICAgOiB0IDwgY1xuICAgICAgICA/IGNhICogdDIgLSBjYiAqIHQgKyBjY1xuICAgICAgICA6IDEwLjggKiB0ICogdCAtIDIwLjUyICogdCArIDEwLjcyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmNlT3V0IiwiZnVuY3Rpb24gY2lyY0luT3V0KHQpIHtcbiAgaWYgKCh0ICo9IDIpIDwgMSkgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKVxuICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2lyY0luT3V0IiwiZnVuY3Rpb24gY2lyY0luKHQpIHtcbiAgcmV0dXJuIDEuMCAtIE1hdGguc3FydCgxLjAgLSB0ICogdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaXJjSW4iLCJmdW5jdGlvbiBjaXJjT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gKCAtLXQgKiB0ICkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2lyY091dCIsImZ1bmN0aW9uIGN1YmljSW5PdXQodCkge1xuICByZXR1cm4gdCA8IDAuNVxuICAgID8gNC4wICogdCAqIHQgKiB0XG4gICAgOiAwLjUgKiBNYXRoLnBvdygyLjAgKiB0IC0gMi4wLCAzLjApICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViaWNJbk91dCIsImZ1bmN0aW9uIGN1YmljSW4odCkge1xuICByZXR1cm4gdCAqIHQgKiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViaWNJbiIsImZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgdmFyIGYgPSB0IC0gMS4wXG4gIHJldHVybiBmICogZiAqIGYgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdWJpY091dCIsImZ1bmN0aW9uIGVsYXN0aWNJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyAwLjUgKiBNYXRoLnNpbigrMTMuMCAqIE1hdGguUEkvMiAqIDIuMCAqIHQpICogTWF0aC5wb3coMi4wLCAxMC4wICogKDIuMCAqIHQgLSAxLjApKVxuICAgIDogMC41ICogTWF0aC5zaW4oLTEzLjAgKiBNYXRoLlBJLzIgKiAoKDIuMCAqIHQgLSAxLjApICsgMS4wKSkgKiBNYXRoLnBvdygyLjAsIC0xMC4wICogKDIuMCAqIHQgLSAxLjApKSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVsYXN0aWNJbk91dCIsImZ1bmN0aW9uIGVsYXN0aWNJbih0KSB7XG4gIHJldHVybiBNYXRoLnNpbigxMy4wICogdCAqIE1hdGguUEkvMikgKiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWxhc3RpY0luIiwiZnVuY3Rpb24gZWxhc3RpY091dCh0KSB7XG4gIHJldHVybiBNYXRoLnNpbigtMTMuMCAqICh0ICsgMS4wKSAqIE1hdGguUEkvMikgKiBNYXRoLnBvdygyLjAsIC0xMC4wICogdCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbGFzdGljT3V0IiwiZnVuY3Rpb24gZXhwb0luT3V0KHQpIHtcbiAgcmV0dXJuICh0ID09PSAwLjAgfHwgdCA9PT0gMS4wKVxuICAgID8gdFxuICAgIDogdCA8IDAuNVxuICAgICAgPyArMC41ICogTWF0aC5wb3coMi4wLCAoMjAuMCAqIHQpIC0gMTAuMClcbiAgICAgIDogLTAuNSAqIE1hdGgucG93KDIuMCwgMTAuMCAtICh0ICogMjAuMCkpICsgMS4wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb0luT3V0IiwiZnVuY3Rpb24gZXhwb0luKHQpIHtcbiAgcmV0dXJuIHQgPT09IDAuMCA/IHQgOiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb0luIiwiZnVuY3Rpb24gZXhwb091dCh0KSB7XG4gIHJldHVybiB0ID09PSAxLjAgPyB0IDogMS4wIC0gTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb091dCIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHQnYmFja0luT3V0JzogcmVxdWlyZSgnLi9iYWNrLWluLW91dCcpLFxuXHQnYmFja0luJzogcmVxdWlyZSgnLi9iYWNrLWluJyksXG5cdCdiYWNrT3V0JzogcmVxdWlyZSgnLi9iYWNrLW91dCcpLFxuXHQnYm91bmNlSW5PdXQnOiByZXF1aXJlKCcuL2JvdW5jZS1pbi1vdXQnKSxcblx0J2JvdW5jZUluJzogcmVxdWlyZSgnLi9ib3VuY2UtaW4nKSxcblx0J2JvdW5jZU91dCc6IHJlcXVpcmUoJy4vYm91bmNlLW91dCcpLFxuXHQnY2lyY0luT3V0JzogcmVxdWlyZSgnLi9jaXJjLWluLW91dCcpLFxuXHQnY2lyY0luJzogcmVxdWlyZSgnLi9jaXJjLWluJyksXG5cdCdjaXJjT3V0JzogcmVxdWlyZSgnLi9jaXJjLW91dCcpLFxuXHQnY3ViaWNJbk91dCc6IHJlcXVpcmUoJy4vY3ViaWMtaW4tb3V0JyksXG5cdCdjdWJpY0luJzogcmVxdWlyZSgnLi9jdWJpYy1pbicpLFxuXHQnY3ViaWNPdXQnOiByZXF1aXJlKCcuL2N1YmljLW91dCcpLFxuXHQnZWxhc3RpY0luT3V0JzogcmVxdWlyZSgnLi9lbGFzdGljLWluLW91dCcpLFxuXHQnZWxhc3RpY0luJzogcmVxdWlyZSgnLi9lbGFzdGljLWluJyksXG5cdCdlbGFzdGljT3V0JzogcmVxdWlyZSgnLi9lbGFzdGljLW91dCcpLFxuXHQnZXhwb0luT3V0JzogcmVxdWlyZSgnLi9leHBvLWluLW91dCcpLFxuXHQnZXhwb0luJzogcmVxdWlyZSgnLi9leHBvLWluJyksXG5cdCdleHBvT3V0JzogcmVxdWlyZSgnLi9leHBvLW91dCcpLFxuXHQnbGluZWFyJzogcmVxdWlyZSgnLi9saW5lYXInKSxcblx0J3F1YWRJbk91dCc6IHJlcXVpcmUoJy4vcXVhZC1pbi1vdXQnKSxcblx0J3F1YWRJbic6IHJlcXVpcmUoJy4vcXVhZC1pbicpLFxuXHQncXVhZE91dCc6IHJlcXVpcmUoJy4vcXVhZC1vdXQnKSxcblx0J3F1YXJ0SW5PdXQnOiByZXF1aXJlKCcuL3F1YXJ0LWluLW91dCcpLFxuXHQncXVhcnRJbic6IHJlcXVpcmUoJy4vcXVhcnQtaW4nKSxcblx0J3F1YXJ0T3V0JzogcmVxdWlyZSgnLi9xdWFydC1vdXQnKSxcblx0J3F1aW50SW5PdXQnOiByZXF1aXJlKCcuL3F1aW50LWluLW91dCcpLFxuXHQncXVpbnRJbic6IHJlcXVpcmUoJy4vcXVpbnQtaW4nKSxcblx0J3F1aW50T3V0JzogcmVxdWlyZSgnLi9xdWludC1vdXQnKSxcblx0J3NpbmVJbk91dCc6IHJlcXVpcmUoJy4vc2luZS1pbi1vdXQnKSxcblx0J3NpbmVJbic6IHJlcXVpcmUoJy4vc2luZS1pbicpLFxuXHQnc2luZU91dCc6IHJlcXVpcmUoJy4vc2luZS1vdXQnKVxufSIsImZ1bmN0aW9uIGxpbmVhcih0KSB7XG4gIHJldHVybiB0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGluZWFyIiwiZnVuY3Rpb24gcXVhZEluT3V0KHQpIHtcbiAgICB0IC89IDAuNVxuICAgIGlmICh0IDwgMSkgcmV0dXJuIDAuNSp0KnRcbiAgICB0LS1cbiAgICByZXR1cm4gLTAuNSAqICh0Kih0LTIpIC0gMSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFkSW5PdXQiLCJmdW5jdGlvbiBxdWFkSW4odCkge1xuICByZXR1cm4gdCAqIHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFkSW4iLCJmdW5jdGlvbiBxdWFkT3V0KHQpIHtcbiAgcmV0dXJuIC10ICogKHQgLSAyLjApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVhZE91dCIsImZ1bmN0aW9uIHF1YXJ0aWNJbk91dCh0KSB7XG4gIHJldHVybiB0IDwgMC41XG4gICAgPyArOC4wICogTWF0aC5wb3codCwgNC4wKVxuICAgIDogLTguMCAqIE1hdGgucG93KHQgLSAxLjAsIDQuMCkgKyAxLjBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWFydGljSW5PdXQiLCJmdW5jdGlvbiBxdWFydGljSW4odCkge1xuICByZXR1cm4gTWF0aC5wb3codCwgNC4wKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YXJ0aWNJbiIsImZ1bmN0aW9uIHF1YXJ0aWNPdXQodCkge1xuICByZXR1cm4gTWF0aC5wb3codCAtIDEuMCwgMy4wKSAqICgxLjAgLSB0KSArIDEuMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1YXJ0aWNPdXQiLCJmdW5jdGlvbiBxaW50aWNJbk91dCh0KSB7XG4gICAgaWYgKCAoIHQgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiB0ICogdCAqIHQgKiB0ICogdFxuICAgIHJldHVybiAwLjUgKiAoICggdCAtPSAyICkgKiB0ICogdCAqIHQgKiB0ICsgMiApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcWludGljSW5PdXQiLCJmdW5jdGlvbiBxaW50aWNJbih0KSB7XG4gIHJldHVybiB0ICogdCAqIHQgKiB0ICogdFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHFpbnRpY0luIiwiZnVuY3Rpb24gcWludGljT3V0KHQpIHtcbiAgcmV0dXJuIC0tdCAqIHQgKiB0ICogdCAqIHQgKyAxXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcWludGljT3V0IiwiZnVuY3Rpb24gc2luZUluT3V0KHQpIHtcbiAgcmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSp0KSAtIDEpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2luZUluT3V0IiwiZnVuY3Rpb24gc2luZUluKHQpIHtcbiAgcmV0dXJuIDEgLSBNYXRoLmNvcyggdCAqIE1hdGguUEkgLyAyIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW5lSW4iLCJmdW5jdGlvbiBzaW5lT3V0KHQpIHtcbiAgcmV0dXJuIE1hdGguc2luKHQgKiBNYXRoLlBJLzIpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2luZU91dCIsInZhciBlYXNlcyA9IHJlcXVpcmUoJ2Vhc2VzJyk7XG5cbi8qKlxuICogVGhlIHR3ZWVuIHBsYXllci4gV2lsbCBjaGFuZ2UgdGFyZ2V0IG9iamVjdCB2YWx1ZXMgd2l0aCBzcGVjaWZpZWQgcGFyYW1ldGVycy5cbiAqIEBjbGFzcyBUd2VlblxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHR3ZWVuZWQuXG4gKi9cbnZhciBUd2VlbiA9IGZ1bmN0aW9uKG9iaikge1xuICB0aGlzLm5hbWUgPSAnJztcbiAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xuICB0aGlzLm9iaiA9IG9iajtcblxuICB0aGlzLnN0YXJ0ID0gMDtcbiAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gIHRoaXMuc3RhdGUgPSAwO1xuXG4gIHRoaXMubmV4dCA9IG51bGw7XG4gIHRoaXMucHJldiA9IG51bGw7XG4gIHRoaXMubGFzdCA9IHRoaXM7XG4gIHRoaXMudGltZSA9IDA7XG5cbiAgdGhpcy5wYXJhbXNGcm9tID0gbnVsbDtcbiAgdGhpcy5wYXJhbXNUbyA9IG51bGw7XG4gIHRoaXMuZWFzZSA9IGVhc2VzLmxpbmVhcjtcblxuICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xufTtcblxuVHdlZW4uSURMRSA9IDA7XG5Ud2Vlbi5SVU5OSU5HID0gMTtcblR3ZWVuLkNPTVBMRVRFRCA9IDI7XG5cblR3ZWVuLnByb3RvdHlwZS5fZ2V0VHdlZW4gPSBmdW5jdGlvbihvYmosIGR1cmF0aW9uLCBlYXNlKSB7XG4gIHZhciBsYXN0ID0gdGhpcy5sYXN0O1xuICB2YXIgdHdlZW4gPSBuZXcgVHdlZW4ob2JqKTtcbiAgdHdlZW4uZGVidWcgPSB0aGlzLmRlYnVnO1xuICB0d2Vlbi5zdGFydCA9IGxhc3Quc3RhcnQgKyBsYXN0LmR1cmF0aW9uO1xuICB0d2Vlbi5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDA7XG4gIHR3ZWVuLnN0YXRlID0gMDtcbiAgdHdlZW4uZWFzZSA9IGVhc2U7XG4gIHR3ZWVuLnByZXYgPSBsYXN0O1xuICBsYXN0Lm5leHQgPSB0d2VlbjtcbiAgdGhpcy5sYXN0ID0gdHdlZW47XG4gIHJldHVybiB0d2Vlbjtcbn07XG5cblR3ZWVuLnByb3RvdHlwZS5fZ2V0TGFzdFBhcmFtID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgdmFyIHJlZiA9IHRoaXMubGFzdC5wcmV2O1xuICB3aGlsZSAocmVmKSB7XG4gICAgaWYgKHJlZi5vYmogPT09IHRoaXMub2JqICYmIHJlZi5wYXJhbXNUbyAmJiByZWYucGFyYW1zVG9bZmllbGRdICE9PSB1bmRlZmluZWQgJiYgcmVmLnBhcmFtc1RvW2ZpZWxkXSAhPT0gbnVsbCkgYnJlYWs7XG4gICAgcmVmID0gcmVmLnByZXY7XG4gIH1cbiAgdmFyIHYgPSByZWYgPyByZWYucGFyYW1zVG9bZmllbGRdIDogdGhpcy5vYmpbZmllbGRdO1xuICByZXR1cm4gdjtcbn07XG5cbi8qKlxuICogQWRkcyBuZXcgdHdlZW4sIHdpdGggbmV3IHRhcmdldC5cbiAqIEBtZXRob2QgVHdlZW4jYWRkXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHR3ZWVuZWQuXG4gKiBAcmV0dXJucyBUd2VlblxuICovXG5Ud2Vlbi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ob2JqKSB7XG4gIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKG9iaiwgMCwgZWFzZXMubGluZWFyKTtcbiAgcmV0dXJuIHR3ZWVuO1xufTtcblxuLyoqXG4gKiBBZGQgYSB0d2VlbiB0aGF0IHN0YXJ0cyB3aXRoIHNwZWNpZmllZCB2YWx1ZXMuXG4gKiBAbWV0aG9kIFR3ZWVuI2Zyb21cbiAqIEBwYXJhbSBwcm9wcyB7b2JqZWN0fSBWYWx1ZXMgdGhhdCB0aGUgdHdlZW4gd2lsbCBjb21lIGZyb20uXG4gKiBAcGFyYW0gZHVyYXRpb24ge2Zsb2F0fSBUd2VlbidzIGR1cmF0aW9uLlxuICogQHBhcmFtIFtlYXNlXSB7ZnVuY3Rpb259IFR3ZWVuJ3MgZWFzaW5nIGN1cnZlLlxuICogQHJldHVybnMgVHdlZW5cbiAqL1xuVHdlZW4ucHJvdG90eXBlLmZyb20gPSBmdW5jdGlvbihwcm9wcywgZHVyYXRpb24sIGVhc2UpIHtcbiAgdmFyIHR3ZWVuID0gdGhpcy5fZ2V0VHdlZW4odGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlKTtcbiAgdHdlZW4ubmFtZSA9ICdmcm9tJztcbiAgdHdlZW4ucGFyYW1zRnJvbSA9IHByb3BzO1xuICB0d2Vlbi5wYXJhbXNUbyA9IHt9O1xuICBmb3IgKHZhciBmIGluIHByb3BzKSB7XG4gICAgdHdlZW4ucGFyYW1zVG9bZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZCBhIHR3ZWVuIHRoYXQgZW5kcyB3aXRoIHNwZWNpZmllZCB2YWx1ZXMuXG4gKiBAbWV0aG9kIFR3ZWVuI3RvXG4gKiBAcGFyYW0gcHJvcHMge29iamVjdH0gVmFsdWVzIHRoYXQgdGhlIHR3ZWVuIHdpbGwgZ28gdG8uXG4gKiBAcGFyYW0gZHVyYXRpb24ge2Zsb2F0fSBUd2VlbidzIGR1cmF0aW9uLlxuICogQHBhcmFtIFtlYXNlXSB7ZnVuY3Rpb259IFR3ZWVuJ3MgZWFzaW5nIGN1cnZlLlxuICogQHJldHVybnMgVHdlZW5cbiAqL1xuVHdlZW4ucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG4gIHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgZWFzZSk7XG4gIHR3ZWVuLm5hbWUgPSAndG8nO1xuICB0d2Vlbi5wYXJhbXNUbyA9IHByb3BzO1xuICB0d2Vlbi5wYXJhbXNGcm9tID0ge307XG4gIGZvciAodmFyIGYgaW4gcHJvcHMpIHtcbiAgICB0d2Vlbi5wYXJhbXNGcm9tW2ZdID0gdGhpcy5fZ2V0TGFzdFBhcmFtKGYpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBIb2xkIHRoZSB0d2VlbiBmb3IgYSB3aGlsZSBiZWZvcmUgbmV4dCBjb21tYW5kcy5cbiAqIEBtZXRob2QgVHdlZW4jd2FpdFxuICogQHBhcmFtIGR1cmF0aW9uIHtmbG9hdH0gVGltZSB0byB3YWl0LlxuICogQHJldHVybnMgVHdlZW5cbiAqL1xuVHdlZW4ucHJvdG90eXBlLndhaXQgPSBmdW5jdGlvbihkdXJhdGlvbikge1xuICB2YXIgdHdlZW4gPSB0aGlzLl9nZXRUd2Vlbih0aGlzLm9iaiwgZHVyYXRpb24sIG51bGwpO1xuICB0d2Vlbi5uYW1lID0gJ3dhaXQnO1xuICB0d2Vlbi5wYXJhbXNGcm9tID0gdHdlZW4ucHJldi5wYXJhbXNGcm9tO1xuICB0d2Vlbi5wYXJhbXNUbyA9IHR3ZWVuLnByZXYucGFyYW1zVG87XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgYSBjYWxsYmFjayB3aGVuIHRoZSBwcmV2aW91cyBjb21tYW5kcyBhcmUgY29tcGxldGVkLlxuICogQG1ldGhvZCBUd2VlbiN0aGVuXG4gKiBAcGFyYW0gY2FsbGJhY2sge2Z1bmN0aW9ufSBNZXRob2QgdGhhIHdpbGwgYmUgZXhlY3V0ZWQgYXMgY2FsbGJhY2suXG4gKiBAcmV0dXJucyBUd2VlblxuICovXG5Ud2Vlbi5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIHRoaXMubGFzdC5vbkNvbXBsZXRlID0gY2FsbGJhY2s7XG4gIHJldHVybiB0aGlzO1xufTtcblxuVHdlZW4ucHJvdG90eXBlLnNldFRpbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICB0aGlzLnRpbWUgPSB2YWx1ZTtcbiAgaWYgKHRoaXMubmV4dCkgdGhpcy5uZXh0LnNldFRpbWUodmFsdWUpO1xufTtcblxuVHdlZW4ucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudGltZTtcbn07XG5cblR3ZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkZWx0YSkge1xuICBpZiAoZGVsdGEpIHRoaXMudGltZSArPSBkZWx0YTtcbiAgaWYgKHRoaXMudGltZSA+PSB0aGlzLnN0YXJ0ICYmIHRoaXMudGltZSA8PSB0aGlzLnN0YXJ0ICsgdGhpcy5kdXJhdGlvbikge1xuICAgIGlmICh0aGlzLnN0YXRlICE9IFR3ZWVuLlJVTk5JTkcpIGlmICh0aGlzLmRlYnVnKSB0aGlzLmxvZygnc3RhcnRlZCcpO1xuICAgIHRoaXMuc3RhdGUgPSBUd2Vlbi5SVU5OSU5HO1xuICAgIHRoaXMudXBkYXRlUHJvcHModGhpcy50aW1lIC0gdGhpcy5zdGFydCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT0gVHdlZW4uUlVOTklORykge1xuICAgICAgaWYgKHRoaXMudGltZSA8IHRoaXMuc3RhcnQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wcygwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcHModGhpcy5kdXJhdGlvbik7XG4gICAgICAgIGlmICh0aGlzLmRlYnVnKSB0aGlzLmxvZygnY29tcGxldGVkJyk7XG4gICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gVHdlZW4uSURMRTtcbiAgfVxuXG4gIGlmICh0aGlzLm5leHQpIHRoaXMubmV4dC51cGRhdGUoZGVsdGEpO1xufTtcblxuVHdlZW4ucHJvdG90eXBlLnVwZGF0ZVByb3BzID0gZnVuY3Rpb24odGltZSkge1xuICBpZiAoIXRoaXMuZWFzZSkgcmV0dXJuO1xuICB2YXIgcmF0aW8gPSB0aGlzLmVhc2UodGltZS90aGlzLmR1cmF0aW9uKTtcbiAgZm9yICh2YXIgZiBpbiB0aGlzLnBhcmFtc1RvKSB7XG4gICAgdmFyIHZmID0gdGhpcy5wYXJhbXNGcm9tW2ZdO1xuICAgIHZhciB2dCA9IHRoaXMucGFyYW1zVG9bZl07XG4gICAgdmFyIHZjID0gdmYgKyAodnQgLSB2ZikqcmF0aW87XG4gICAgdGhpcy5vYmpbZl0gPSB2YztcbiAgfVxufTtcblxuVHdlZW4ucHJvdG90eXBlLmZpbmlzaGVkID0gZnVuY3Rpb24oKSB7XG4gIHZhciByID0gdGhpcy50aW1lID49IHRoaXMuc3RhcnQgKyB0aGlzLmR1cmF0aW9uO1xuICBpZiAociAmJiB0aGlzLm5leHQpIHIgPSB0aGlzLm5leHQuZmluaXNoZWQoKTtcbiAgcmV0dXJuIHI7XG59O1xuXG5Ud2Vlbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5uZXh0KSB0aGlzLm5leHQuZGlzcG9zZSgpO1xuICBpZiAodGhpcy5kZWJ1ZykgdGhpcy5sb2coJ2Rpc3Bvc2VkIScpO1xuICB0aGlzLm5leHQgPSBudWxsO1xuICB0aGlzLnByZXYgPSBudWxsO1xuICB0aGlzLmxhc3QgPSBudWxsO1xuICB0aGlzLnBhcmFtc0Zyb20gPSBudWxsO1xuICB0aGlzLnBhcmFtc1RvID0gbnVsbDtcbiAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbn07XG5cblR3ZWVuLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbihtc2cpIHtcbiAgaWYgKHRoaXMub2JqLm5hbWUpIGNvbnNvbGUubG9nKHRoaXMub2JqLm5hbWUsIHRoaXMubmFtZSwgbXNnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47XG4iLCJ2YXIgVHdlZW4gPSByZXF1aXJlKCcuL1R3ZWVuJyk7XG5cbi8qKlxuICogQSB0d2VlbiBtYW5hZ2VyLiBEZWFscyB3aXRoIHR3ZWVuIGNyZWF0aW9uLCB1cGRhdGUgYW5kIGRlc3RydWN0aW9uLlxuICogQGNsYXNzIFR3ZWVuZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIFthdXRvVXBkYXRlUmF0ZV0ge2Zsb2F0fSBJbnRlcnZhbCAoaW4gc2Vjb25kcykgdGhhdCBhbGwgdHdlZW5zIHdpbGwgYmUgdXBkYXRlZC4gSWYgMCwgdGhlIGF1dG8tdXBkYXRlIHdpbGwgbm90XG4gKiBydW4sIHNvIHlvdSBtdXN0IGhhbmRsZSB0aGUgdXBkYXRlIG1hbnVhbGx5LiBEZWZhdWx0IGlzIDAuXG4gKi9cbnZhciBUd2VlbmVyID0gZnVuY3Rpb24oYXV0b1VwZGF0ZVJhdGUpIHtcbiAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xuICB0aGlzLnR3ZWVucyA9IFtdO1xuICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gIGlmIChhdXRvVXBkYXRlUmF0ZSA+IDApIHRoaXMuZW5hYmxlQXV0b1VwZGF0ZShhdXRvVXBkYXRlUmF0ZSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgVHdlZW4gaW5zdGFuY2Ugd2l0aCByZWZlcmVuY2VkIG9iamVjdC5cbiAqIEBtZXRob2QgVHdlZW5lciNhZGRcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAqIEByZXR1cm4gVHdlZW5cbiAqL1xuVHdlZW5lci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ob2JqKSB7XG4gIHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmopO1xuICB0d2Vlbi5kZWJ1ZyA9IHRoaXMuZGVidWc7XG4gIHRoaXMudHdlZW5zLnB1c2godHdlZW4pO1xuICByZXR1cm4gdHdlZW47XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgdHdlZW4gaW5zdGFuY2VzIHRoYXQgaGF2ZSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdC5cbiAqIEBtZXRob2QgVHdlZW5lciNyZW1vdmVcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIHR3ZWVuZWQgb2JqZWN0LlxuICovXG5Ud2VlbmVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihvYmopIHtcbiAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgdCA9IHRoaXMudHdlZW5zW2ldO1xuICAgIGlmICh0Lm9iaiA9PT0gb2JqKSB0aGlzLl9kZXN0cm95KHQsIGkpO1xuICB9XG59O1xuXG4vKipcbiAqIFJ1bnMgdGhlIHVwZGF0ZSBtZXRob2QgYXV0b21hdGljYWxseS5cbiAqIEBtZXRob2QgVHdlZW5lciNlbmFibGVBdXRvVXBkYXRlXG4gKiBAcGFyYW0gcmF0ZSB7ZmxvYXR9IEludGVydmFsIChpbiBzZWNvbmRzKSB0aGF0IHRoZSB1cGRhdGUgd2lsbCBiZSBwbGF5ZWQuXG4gKiBJZiAwIG9yIGxvd2VyLCB0aGUgYXV0b21hdGljIHVwZGF0ZSB3aWxsIGJlIGRpc2FibGVkLlxuICovXG5Ud2VlbmVyLnByb3RvdHlwZS5lbmFibGVBdXRvVXBkYXRlID0gZnVuY3Rpb24ocmF0ZSkge1xuICBpZiAoIXJhdGUpIHtcbiAgICB0aGlzLmRpc2FibGVBdXRvVXBkYXRlKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgdGltZSA9IHNlbGYuZ2V0VGltZSgpO1xuICBzZWxmLl9pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIHZhciB0ID0gc2VsZi5nZXRUaW1lKCk7XG4gICAgdmFyIGQgPSB0IC0gdGltZTtcbiAgICB0aW1lID0gdDtcbiAgICBzZWxmLnVwZGF0ZShkKTtcbiAgfSwgcmF0ZSoxMDAwKTtcbn07XG5cbi8qKlxuICogU3RvcHMgdGhlIGF1dG9tYXRpYyB1cGRhdGUuXG4gKiBAbWV0aG9kIFR3ZWVuZXIjZGlzYWJsZUF1dG9VcGRhdGVcbiAqL1xuVHdlZW5lci5wcm90b3R5cGUuZGlzYWJsZUF1dG9VcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZSBhbGwgdHdlZW5zLlxuICogQG1ldGhvZCBUd2VlbmVyI3VwZGF0ZVxuICogQHBhcmFtIGRlbHRhIHtmbG9hdH0gVGhlIGVsYXBzZWQgdGltZSAoaW4gc2Vjb25kcykgc2luY2UgbGFzdCB1cGRhdGUuXG4gKi9cblR3ZWVuZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XG4gIHZhciBpID0gdGhpcy50d2VlbnMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICB0LnVwZGF0ZShkZWx0YSk7XG4gICAgaWYgKHQuZmluaXNoZWQoKSkgdGhpcy5fZGVzdHJveSh0LCBpKTtcbiAgfVxufTtcblxuXG5Ud2VlbmVyLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uKHR3ZWVuLCBpbmRleCkge1xuICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkgaW5kZXggPSB0aGlzLnR3ZWVuLmluZGV4T2YodHdlZW4pO1xuICB0aGlzLnR3ZWVucy5zcGxpY2UoaW5kZXgsIDEpO1xuICB0d2Vlbi5kaXNwb3NlKCk7XG59O1xuXG5Ud2VlbmVyLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKS8xMDAwO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbmVyO1xuIiwidmFyIFR3ZWVuZXIgPSByZXF1aXJlKCcuL1R3ZWVuZXInKTtcbnZhciBUd2VlbiA9IHJlcXVpcmUoJy4vVHdlZW4nKTtcbnZhciBlYXNlcyA9IHJlcXVpcmUoJ2Vhc2VzJyk7XG5cblR3ZWVuZXIuVHdlZW4gPSBUd2VlbjtcblR3ZWVuZXIuZWFzZSA9IGVhc2VzO1xuXG5pZiAodHlwZW9mKHdpbmRvdykgPT09IFwib2JqZWN0XCIpIHtcbiAgd2luZG93LlR3ZWVuZXIgPSBUd2VlbmVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuZXI7XG4iXX0=
