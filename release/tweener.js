(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/maurodetarso/Sites/Libs/tweener/source/Ease.js":[function(require,module,exports){
/**
 * Static curve methods that can be used by a tween.
 * @class Ease
 */

var Ease = {};


/**
 * @member Ease.linear
 */
Ease.linear = function (t, b, c, d)
{
	return c * t / d + b;
}


/**
 * @member Ease.inBack
 */
Ease.inBack = function (t, b, c, d)
{
	var s = 1.70158;
	return c * ( t /= d ) * t * ( ( s + 1 ) * t - s ) + b;
}

/**
 * @member Ease.outBack
 */
Ease.outBack = function (t, b, c, d)
{
	var s = 1.70158;
	return c * ( ( t = t / d - 1 ) * t * ( ( s + 1 ) * t + s) + 1 ) + b;
}

/**
 * @member Ease.inOutBack
 */
Ease.inOutBack = function (t, b, c, d)
{
	var s = 1.70158;
	if ( ( t /= d / 2 ) < 1 )
		return c / 2 * ( t * t * ( ( ( s *= ( 1.525 ) ) + 1 ) * t - s ) ) + b;
	return c / 2 * ( ( t -= 2 ) * t * ( ( ( s *= ( 1.525 ) ) + 1 ) * t + s ) + 2 ) + b;
}


/**
 * @member Ease.outBounce
 */
Ease.outBounce = function (t, b, c, d)
{
	if ( ( t /= d ) < ( 1 / 2.75 ) )
		return c * ( 7.5625 * t * t ) + b;
	else if ( t < ( 2 / 2.75 ) )
		return c * ( 7.5625 * ( t -= ( 1.5 / 2.75 ) ) * t + .75 ) + b;
	else if ( t < ( 2.5 / 2.75 ) )
		return c * ( 7.5625 * ( t -= ( 2.25 / 2.75 ) ) * t + .9375 ) + b;
	else
		return c * ( 7.5625 * ( t -= ( 2.625 / 2.75 ) ) * t + .984375 ) + b;
}

/**
 * @member Ease.inBounce
 */
Ease.inBounce = function (t, b, c, d)
{
	return c - outBounce ( d - t, 0, c, d ) + b;
}

/**
 * @member Ease.inOutBounce
 */
Ease.inOutBounce = function (t, b, c, d)
{
	if ( t < d / 2 )
		return inBounce ( t * 2, 0, c, d ) * .5 + b;
	else
		return outBounce ( t * 2 - d, 0, c, d ) * .5 + c *.5 + b;
}


/**
 * @member Ease.inCirc
 */
Ease.inCirc = function (t, b, c, d)
{
	return -c * ( Math.sqrt( 1 - ( t /= d ) * t ) - 1 ) + b;
}

/**
 * @member Ease.outCirc
 */
Ease.outCirc = function (t, b, c, d)
{
	return c * Math.sqrt( 1 - ( t = t / d - 1 ) * t ) + b;
}

/**
 * @member Ease.inOutCirc
 */
Ease.inOutCirc = function (t, b, c, d)
{
	if ( ( t /= d / 2 ) < 1 )
		return -c / 2 * ( Math.sqrt( 1 - t * t ) - 1 ) + b;
	return c / 2 * ( Math.sqrt( 1 - ( t -= 2 ) * t ) + 1 ) + b;
}

/**
 * @member Ease.inCubic
 */
Ease.inCubic = function (t, b, c, d)
{
	return c * ( t /= d ) * t * t + b;
}

/**
 * @member Ease.outCubic
 */
Ease.outCubic = function (t, b, c, d)
{
	return c * ( ( t = t / d - 1 ) * t * t + 1 ) + b;
}

/**
 * @member Ease.inOutCubic
 */
Ease.inOutCubic = function (t, b, c, d)
{
	if ( ( t /= d / 2 ) < 1 )
		return c / 2 * t * t * t + b;
	return c / 2 * ( ( t -= 2 ) * t * t + 2) + b;
}


/**
 * @member Ease.inElastic
 */
Ease.inElastic = function (t, b, c, d)
{
	if ( t == 0 )
		return b;
	if ( ( t /= d ) == 1 )
		return b + c;
		var p = d * .3;
	var s;
		var a = c;
		s = p / 4;

	return -( a * Math.pow( 2, 10 * ( t -= 1 ) ) * Math.sin( ( t * d - s ) * ( 2 * Math.PI ) / p ) ) + b;
}

/**
 * @member Ease.outElastic
 */
Ease.outElastic = function (t, b, c, d)
{
	if ( t == 0 )
		return b;
	if ( ( t /= d ) == 1 )
		return b + c;
		var p = d * .3;
	var s;
		var a = c;
		s = p / 4;

	return ( a * Math.pow( 2, -10 * t ) * Math.sin( ( t * d - s ) * ( 2 * Math.PI ) / p ) + c + b );
}

/**
 * @member Ease.inOutElastic
 */
Ease.inOutElastic = function (t, b, c, d)
{
	if ( t == 0 )
		return b;
	if ( ( t /= d / 2 ) == 2 )
		return b + c;
	var s;
		var p = d * ( .3 * 1.5 );
		var a = c;
		s =p / 4;

	if ( t < 1 )
		return -.5 * ( a * Math.pow( 2, 10 * ( t -= 1 ) ) * Math.sin( ( t * d - s ) * ( 2 * Math.PI ) / p ) ) + b;
	return a * Math.pow( 2, -10 * ( t -= 1 ) ) * Math.sin( ( t * d - s ) * ( 2 * Math.PI ) / p ) * .5 + c + b;
}


/**
 * @member Ease.inExpo
 */
Ease.inExpo = function (t, b, c, d)
{
	return ( t == 0 ) ? b : c * Math.pow( 2, 10 * ( t / d - 1 ) ) + b;
}

/**
 * @member Ease.outExpo
 */
Ease.outExpo = function (t, b, c, d)
{
	return ( t == d ) ? b + c : c * ( -Math.pow( 2, -10 * t / d ) + 1 ) + b;
}

/**
 * @member Ease.inOutExpo
 */
Ease.inOutExpo = function (t, b, c, d)
{
	if ( t == 0 )
		return b;
	if ( t == d )
		return b + c;
	if ( ( t /= d / 2 ) < 1 )
		return c / 2 * Math.pow( 2, 10 * ( t - 1 ) ) + b;
	return c / 2 * ( -Math.pow( 2, -10 * --t ) + 2 ) + b;
}

/**
 * @member Ease.inQuad
 */
Ease.inQuad = function (t, b, c, d)
{
	return c * ( t /= d ) * t + b;
}

/**
 * @member Ease.outQuad
 */
Ease.outQuad = function (t, b, c, d)
{
	return -c * ( t /= d ) * ( t - 2 ) + b;
}

/**
 * @member Ease.inOutQuad
 */
Ease.inOutQuad = function (t, b, c, d)
{
	if ( ( t /= d / 2 ) < 1 )
		return c / 2 * t * t + b;
	return -c / 2 * ( ( --t ) * ( t - 2 ) - 1 ) + b;
}


/**
 * @member Ease.inQuart
 */
Ease.inQuart = function (t, b, c, d)
{
	return c * ( t /= d ) * t * t * t + b;
}

/**
 * @member Ease.outQuart
 */
Ease.outQuart = function (t, b, c, d)
{
	return -c * ( ( t = t / d - 1 ) * t * t * t - 1 ) + b;
}

/**
 * @member Ease.inOutQuart
 */
Ease.inOutQuart = function (t, b, c, d)
{
	if ( ( t /= d / 2 ) < 1 )
		return c / 2 * t * t * t * t + b;
	return -c / 2 * ( ( t -= 2 ) * t * t * t - 2) + b;
}


/**
 * @member Ease.inQuint
 */
Ease.inQuint = function (t, b, c, d)
{
	return c * ( t /= d ) * t * t * t * t + b;
}

/**
 * @member Ease.outQuint
 */
Ease.outQuint = function (t, b, c, d)
{
	return c * ( ( t = t / d - 1 ) * t * t * t * t + 1 ) + b;
}

/**
 * @member Ease.inOutQuint
 */
Ease.inOutQuint = function (t, b, c, d)
{
	if ( ( t /= d / 2 ) < 1 )
		return c / 2 * t * t * t * t * t + b;
	return c / 2 * ( ( t -= 2 ) * t * t * t * t + 2 ) + b;
}


/**
 * @member Ease.inSine
 */
Ease.inSine = function (t, b, c, d)
{
	return -c * Math.cos ( t / d * ( Math.PI / 2 ) ) + c + b;
}

/**
 * @member Ease.outSine
 */
Ease.outSine = function (t, b, c, d)
{
	return c * Math.sin( t / d * ( Math.PI / 2 ) ) + b;
}

/**
 * @member Ease.inOutSine
 */
Ease.inOutSine = function (t, b, c, d)
{
	return -c / 2 * ( Math.cos( Math.PI * t / d ) - 1 ) + b;
}

module.exports = Ease;

},{}],"/Users/maurodetarso/Sites/Libs/tweener/source/Tween.js":[function(require,module,exports){
var Ease = require('./Ease');

/**
 * The tween player. Will change target object values with specified parameters.
 * @class Tween
 * @constructor
 * @param obj {object} The object that will be tweened.
 */
var Tween = function(obj) {
	this.name = '';
	this.debug = true;
	this.obj = obj;

	this.start = 0;
  this.duration = 0;
  this.state = 0;

  this.started = false;
  this.updated = false;
  this.completed = false;

	this.next = null;
	this.prev = null;
	this.last = this;
	this.time = 0;

	this.paramsFrom = null;
	this.paramsTo = null;
	this.ease = Ease.linear;

	this.onComplete = null;
}

Tween.IDLE = 0;
Tween.RUNNING = 1;
Tween.COMPLETED = 2;

Tween.prototype._append = function(obj, duration, ease) {
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
}

Tween.prototype._getLastParam = function(field) {
	var ref = this.last.prev;
	while (ref) {
		if (ref.obj == this.obj && ref.paramsTo) break;
		ref = ref.prev;
	}
	var v = ref ? ref.paramsTo[field] : this.obj[field];
	return v;
}

/**
 * Adds new tween, with new target.
 * @method Tween#add
 * @param obj {object} The object that will be tweened.
 * @returns Tween
 */
Tween.prototype.add = function(obj) {
	var tween = this._append(obj, 0, Ease.linear);
	return tween;
}

/**
 * Add a tween that starts with specified values.
 * @method Tween#from
 * @param props {object} Values that the tween will come from.
 * @param duration {float} Tween's duration.
 * @param [ease] {function} Tween's easing curve.
 * @returns Tween
 */
Tween.prototype.from = function(props, duration, ease) {
	var tween = this._append(this.obj, duration, ease);
	tween.name = 'from';
	tween.paramsFrom = props;
	tween.paramsTo = {};
	for (var f in props) {
		tween.paramsTo[f] = this._getLastParam(f);
	}
	return this;
}

/**
 * Add a tween that ends with specified values.
 * @method Tween#to
 * @param props {object} Values that the tween will go to.
 * @param duration {float} Tween's duration.
 * @param [ease] {function} Tween's easing curve.
 * @returns Tween
 */
Tween.prototype.to = function(props, duration, ease) {
	var tween = this._append(this.obj, duration, ease);
	tween.name = 'to';
	tween.paramsTo = props;
	tween.paramsFrom = {};
	for (var f in props) {
		tween.paramsFrom[f] = this._getLastParam(f);
	}
	return this;
}

/**
 * Hold the tween for a while before next commands.
 * @method Tween#wait
 * @param duration {float} Time to wait.
 * @returns Tween
 */
Tween.prototype.wait = function(duration) {
	var tween = this._append(this.obj, duration, null);
	tween.name = 'wait';
	tween.paramsFrom = tween.prev.paramsFrom;
	tween.paramsTo = tween.prev.paramsTo;
	return this;
}

/**
 * Set a callback when the previous commands are completed.
 * @method Tween#then
 * @param callback {function} Method tha will be executed as callback.
 * @returns Tween
 */
Tween.prototype.then = function(callback) {
	this.last.onComplete = callback;
	return this;
}

Tween.prototype.setTime = function(value) {
	this.time = value;
	if (this.next) this.next.setTime(value);
}

Tween.prototype.getTime = function() {
	return this.time;
}

Tween.prototype.update = function(delta) {
	this.started = false;
  this.updated = false;
  this.completed = false;

	if (delta) this.time += delta;

	var updateTime = 0;

	if (this.time < this.start) {
    this.state = Tween.IDLE;
    updateTime = 0;
  } else if (this.time >= this.start + this.duration) {
    if (this.state == Tween.RUNNING) this.completed = true;
    this.state = Tween.COMPLETED;
    updateTime = this.duration;
  } else {
    if (this.state == Tween.IDLE) this.started = true;
    this.state = 1;
		updateTime = this.time - this.start;
    this.updated = true;
  }

	if (this.started) {
		if (this.debug) this.log('started');
		this.updateProps(updateTime);
	}

	if (this.updated) {
		this.updateProps(updateTime);
	}

	if (this.completed) {
		if (this.debug) this.log('completed');
		this.updateProps(updateTime);
		if (this.onComplete) this.onComplete();
	}

	if (this.next) this.next.update(delta);
}

Tween.prototype.updateProps = function(time) {
	if (!this.ease) return;
	var ratio = this.ease(time, 0, 1, this.duration);
	for (var f in this.paramsTo) {
		var vf = this.paramsFrom[f];
		var vt = this.paramsTo[f];
		var vc = vf + (vt - vf)*ratio;
		this.obj[f] = vc;
	}
}

Tween.prototype.finished = function() {
	var r = this.state == Tween.COMPLETED;
	if (r && this.next) r = this.next.finished();
	return r;
}

Tween.prototype.dispose = function() {
	if (this.next) this.next.dispose();
	if (this.debug) this.log('disposed!');
	this.next = null;
	this.prev = null;
	this.last = null;
	this.paramsFrom = null;
	this.paramsTo = null;
	this.onComplete = null;
}

Tween.prototype.log = function(msg) {
	console.log(this.obj.name, this.name, msg);
}

module.exports = Tween;

},{"./Ease":"/Users/maurodetarso/Sites/Libs/tweener/source/Ease.js"}],"/Users/maurodetarso/Sites/Libs/tweener/source/tweener.js":[function(require,module,exports){
var Tween = require('./Tween');
var Ease = require('./Ease');

/**
 * A tween manager. Deals with tween creation, update and destruction.
 * @class Tweener
 * @constructor
 * @param [autoUpdateRate] {float} Interval (in seconds) that all tweens will be updated. If 0, the auto-update will not
 * run, so you must handle the update manually. Default is 0.
 */
var Tweener = function(autoUpdateRate)
{
	this.tweens = [];
	this._interval = null;
	if (autoUpdateRate > 0) this.enableAutoUpdate(autoUpdateRate);
}

window.Tweener = Tweener;
window.Tween = Tween;
window.Ease = Ease;

/**
 * Create and return a Tween instance with referenced object.
 * @method Tweener#add
 * @param obj {object} The object that will be tweened.
 */
Tweener.prototype.add = function(obj, name) {
	var tween = new Tween(obj, name);
	this.tweens.push(tween);
	return tween;
}

/**
 * Remove all tween instances that have reference to the object.
 * @method Tweener#remove
 * @param obj {object} The tweened object.
 */
Tweener.prototype.remove = function(obj)
{
	var i = this.tweens.length;
	while (i--) {
		var t = this.tweens[i];
		if (t.obj === obj) this._destroy(t, i);
	}
}

/**
 * Runs the update method automatically.
 * @method Tweener#enableAutoUpdate
 * @param rate {float} Interval (in seconds) that the update will be played.
 * If 0 or lower, the automatic update will be disabled.
 */
Tweener.prototype.enableAutoUpdate = function(rate) {
	if (!rate) {
		this.disableAutoUpdate();
		return;
	}

	var self = this;
	var time = self.getTime();
	self._interval = setInterval(function() {
		var t = self.getTime();
		var d = t - time;
		time = t;
		self.update(d);
	}, rate*1000);
}

/**
 * Stops the automatic update.
 * @method Tweener#disableAutoUpdate
 */
Tweener.prototype.disableAutoUpdate = function() {
	clearInterval(this._interval);
}

/**
 * Update all tweens.
 * @method Tweener#update
 * @param delta {float} The elapsed time (in seconds) since last update.
 */
Tweener.prototype.update = function(delta) {
	var i = this.tweens.length;
	while (i--) {
		var t = this.tweens[i];
		t.update(delta);
		if (t.finished()) this._destroy(t, i);
	}
}


Tweener.prototype._destroy = function(tween, index) {
	if (index == undefined) index = this.tween.indexOf(tween);
	this.tweens.splice(index, 1);
	tween.dispose();
}

Tweener.prototype.getTime = function() {
	return new Date().getTime()/1000;
}

module.exports = Tweener;

},{"./Ease":"/Users/maurodetarso/Sites/Libs/tweener/source/Ease.js","./Tween":"/Users/maurodetarso/Sites/Libs/tweener/source/Tween.js"}]},{},["/Users/maurodetarso/Sites/Libs/tweener/source/tweener.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF1cm9kZXRhcnNvL1NpdGVzL0xpYnMvdHdlZW5lci9zb3VyY2UvRWFzZS5qcyIsIi9Vc2Vycy9tYXVyb2RldGFyc28vU2l0ZXMvTGlicy90d2VlbmVyL3NvdXJjZS9Ud2Vlbi5qcyIsIi9Vc2Vycy9tYXVyb2RldGFyc28vU2l0ZXMvTGlicy90d2VlbmVyL3NvdXJjZS90d2VlbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBTdGF0aWMgY3VydmUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IGEgdHdlZW4uXG4gKiBAY2xhc3MgRWFzZVxuICovXG5cbnZhciBFYXNlID0ge307XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UubGluZWFyXG4gKi9cbkVhc2UubGluZWFyID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogdCAvIGQgKyBiO1xufVxuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluQmFja1xuICovXG5FYXNlLmluQmFjayA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHR2YXIgcyA9IDEuNzAxNTg7XG5cdHJldHVybiBjICogKCB0IC89IGQgKSAqIHQgKiAoICggcyArIDEgKSAqIHQgLSBzICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRCYWNrXG4gKi9cbkVhc2Uub3V0QmFjayA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHR2YXIgcyA9IDEuNzAxNTg7XG5cdHJldHVybiBjICogKCAoIHQgPSB0IC8gZCAtIDEgKSAqIHQgKiAoICggcyArIDEgKSAqIHQgKyBzKSArIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0QmFja1xuICovXG5FYXNlLmluT3V0QmFjayA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHR2YXIgcyA9IDEuNzAxNTg7XG5cdGlmICggKCB0IC89IGQgLyAyICkgPCAxIClcblx0XHRyZXR1cm4gYyAvIDIgKiAoIHQgKiB0ICogKCAoICggcyAqPSAoIDEuNTI1ICkgKSArIDEgKSAqIHQgLSBzICkgKSArIGI7XG5cdHJldHVybiBjIC8gMiAqICggKCB0IC09IDIgKSAqIHQgKiAoICggKCBzICo9ICggMS41MjUgKSApICsgMSApICogdCArIHMgKSArIDIgKSArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0Qm91bmNlXG4gKi9cbkVhc2Uub3V0Qm91bmNlID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggKCB0IC89IGQgKSA8ICggMSAvIDIuNzUgKSApXG5cdFx0cmV0dXJuIGMgKiAoIDcuNTYyNSAqIHQgKiB0ICkgKyBiO1xuXHRlbHNlIGlmICggdCA8ICggMiAvIDIuNzUgKSApXG5cdFx0cmV0dXJuIGMgKiAoIDcuNTYyNSAqICggdCAtPSAoIDEuNSAvIDIuNzUgKSApICogdCArIC43NSApICsgYjtcblx0ZWxzZSBpZiAoIHQgPCAoIDIuNSAvIDIuNzUgKSApXG5cdFx0cmV0dXJuIGMgKiAoIDcuNTYyNSAqICggdCAtPSAoIDIuMjUgLyAyLjc1ICkgKSAqIHQgKyAuOTM3NSApICsgYjtcblx0ZWxzZVxuXHRcdHJldHVybiBjICogKCA3LjU2MjUgKiAoIHQgLT0gKCAyLjYyNSAvIDIuNzUgKSApICogdCArIC45ODQzNzUgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluQm91bmNlXG4gKi9cbkVhc2UuaW5Cb3VuY2UgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgLSBvdXRCb3VuY2UgKCBkIC0gdCwgMCwgYywgZCApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRCb3VuY2VcbiAqL1xuRWFzZS5pbk91dEJvdW5jZSA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoIHQgPCBkIC8gMiApXG5cdFx0cmV0dXJuIGluQm91bmNlICggdCAqIDIsIDAsIGMsIGQgKSAqIC41ICsgYjtcblx0ZWxzZVxuXHRcdHJldHVybiBvdXRCb3VuY2UgKCB0ICogMiAtIGQsIDAsIGMsIGQgKSAqIC41ICsgYyAqLjUgKyBiO1xufVxuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluQ2lyY1xuICovXG5FYXNlLmluQ2lyYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gLWMgKiAoIE1hdGguc3FydCggMSAtICggdCAvPSBkICkgKiB0ICkgLSAxICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRDaXJjXG4gKi9cbkVhc2Uub3V0Q2lyYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqIE1hdGguc3FydCggMSAtICggdCA9IHQgLyBkIC0gMSApICogdCApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRDaXJjXG4gKi9cbkVhc2UuaW5PdXRDaXJjID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggKCB0IC89IGQgLyAyICkgPCAxIClcblx0XHRyZXR1cm4gLWMgLyAyICogKCBNYXRoLnNxcnQoIDEgLSB0ICogdCApIC0gMSApICsgYjtcblx0cmV0dXJuIGMgLyAyICogKCBNYXRoLnNxcnQoIDEgLSAoIHQgLT0gMiApICogdCApICsgMSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5DdWJpY1xuICovXG5FYXNlLmluQ3ViaWMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiAoIHQgLz0gZCApICogdCAqIHQgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRDdWJpY1xuICovXG5FYXNlLm91dEN1YmljID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogKCAoIHQgPSB0IC8gZCAtIDEgKSAqIHQgKiB0ICsgMSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRDdWJpY1xuICovXG5FYXNlLmluT3V0Q3ViaWMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA8IDEgKVxuXHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCArIGI7XG5cdHJldHVybiBjIC8gMiAqICggKCB0IC09IDIgKSAqIHQgKiB0ICsgMikgKyBiO1xufVxuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluRWxhc3RpY1xuICovXG5FYXNlLmluRWxhc3RpYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoIHQgPT0gMCApXG5cdFx0cmV0dXJuIGI7XG5cdGlmICggKCB0IC89IGQgKSA9PSAxIClcblx0XHRyZXR1cm4gYiArIGM7XG5cdFx0dmFyIHAgPSBkICogLjM7XG5cdHZhciBzO1xuXHRcdHZhciBhID0gYztcblx0XHRzID0gcCAvIDQ7XG5cblx0cmV0dXJuIC0oIGEgKiBNYXRoLnBvdyggMiwgMTAgKiAoIHQgLT0gMSApICkgKiBNYXRoLnNpbiggKCB0ICogZCAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0RWxhc3RpY1xuICovXG5FYXNlLm91dEVsYXN0aWMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCB0ID09IDAgKVxuXHRcdHJldHVybiBiO1xuXHRpZiAoICggdCAvPSBkICkgPT0gMSApXG5cdFx0cmV0dXJuIGIgKyBjO1xuXHRcdHZhciBwID0gZCAqIC4zO1xuXHR2YXIgcztcblx0XHR2YXIgYSA9IGM7XG5cdFx0cyA9IHAgLyA0O1xuXG5cdHJldHVybiAoIGEgKiBNYXRoLnBvdyggMiwgLTEwICogdCApICogTWF0aC5zaW4oICggdCAqIGQgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKyBjICsgYiApO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dEVsYXN0aWNcbiAqL1xuRWFzZS5pbk91dEVsYXN0aWMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCB0ID09IDAgKVxuXHRcdHJldHVybiBiO1xuXHRpZiAoICggdCAvPSBkIC8gMiApID09IDIgKVxuXHRcdHJldHVybiBiICsgYztcblx0dmFyIHM7XG5cdFx0dmFyIHAgPSBkICogKCAuMyAqIDEuNSApO1xuXHRcdHZhciBhID0gYztcblx0XHRzID1wIC8gNDtcblxuXHRpZiAoIHQgPCAxIClcblx0XHRyZXR1cm4gLS41ICogKCBhICogTWF0aC5wb3coIDIsIDEwICogKCB0IC09IDEgKSApICogTWF0aC5zaW4oICggdCAqIGQgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKSArIGI7XG5cdHJldHVybiBhICogTWF0aC5wb3coIDIsIC0xMCAqICggdCAtPSAxICkgKSAqIE1hdGguc2luKCAoIHQgKiBkIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICogLjUgKyBjICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbkV4cG9cbiAqL1xuRWFzZS5pbkV4cG8gPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuICggdCA9PSAwICkgPyBiIDogYyAqIE1hdGgucG93KCAyLCAxMCAqICggdCAvIGQgLSAxICkgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dEV4cG9cbiAqL1xuRWFzZS5vdXRFeHBvID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiAoIHQgPT0gZCApID8gYiArIGMgOiBjICogKCAtTWF0aC5wb3coIDIsIC0xMCAqIHQgLyBkICkgKyAxICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dEV4cG9cbiAqL1xuRWFzZS5pbk91dEV4cG8gPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCB0ID09IDAgKVxuXHRcdHJldHVybiBiO1xuXHRpZiAoIHQgPT0gZCApXG5cdFx0cmV0dXJuIGIgKyBjO1xuXHRpZiAoICggdCAvPSBkIC8gMiApIDwgMSApXG5cdFx0cmV0dXJuIGMgLyAyICogTWF0aC5wb3coIDIsIDEwICogKCB0IC0gMSApICkgKyBiO1xuXHRyZXR1cm4gYyAvIDIgKiAoIC1NYXRoLnBvdyggMiwgLTEwICogLS10ICkgKyAyICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pblF1YWRcbiAqL1xuRWFzZS5pblF1YWQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiAoIHQgLz0gZCApICogdCArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dFF1YWRcbiAqL1xuRWFzZS5vdXRRdWFkID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiAtYyAqICggdCAvPSBkICkgKiAoIHQgLSAyICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dFF1YWRcbiAqL1xuRWFzZS5pbk91dFF1YWQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA8IDEgKVxuXHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcblx0cmV0dXJuIC1jIC8gMiAqICggKCAtLXQgKSAqICggdCAtIDIgKSAtIDEgKSArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5RdWFydFxuICovXG5FYXNlLmluUXVhcnQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiAoIHQgLz0gZCApICogdCAqIHQgKiB0ICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0UXVhcnRcbiAqL1xuRWFzZS5vdXRRdWFydCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gLWMgKiAoICggdCA9IHQgLyBkIC0gMSApICogdCAqIHQgKiB0IC0gMSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRRdWFydFxuICovXG5FYXNlLmluT3V0UXVhcnQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA8IDEgKVxuXHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKyBiO1xuXHRyZXR1cm4gLWMgLyAyICogKCAoIHQgLT0gMiApICogdCAqIHQgKiB0IC0gMikgKyBiO1xufVxuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluUXVpbnRcbiAqL1xuRWFzZS5pblF1aW50ID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogKCB0IC89IGQgKSAqIHQgKiB0ICogdCAqIHQgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRRdWludFxuICovXG5FYXNlLm91dFF1aW50ID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogKCAoIHQgPSB0IC8gZCAtIDEgKSAqIHQgKiB0ICogdCAqIHQgKyAxICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dFF1aW50XG4gKi9cbkVhc2UuaW5PdXRRdWludCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoICggdCAvPSBkIC8gMiApIDwgMSApXG5cdFx0cmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICogdCAqIHQgKyBiO1xuXHRyZXR1cm4gYyAvIDIgKiAoICggdCAtPSAyICkgKiB0ICogdCAqIHQgKiB0ICsgMiApICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pblNpbmVcbiAqL1xuRWFzZS5pblNpbmUgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIC1jICogTWF0aC5jb3MgKCB0IC8gZCAqICggTWF0aC5QSSAvIDIgKSApICsgYyArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dFNpbmVcbiAqL1xuRWFzZS5vdXRTaW5lID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogTWF0aC5zaW4oIHQgLyBkICogKCBNYXRoLlBJIC8gMiApICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dFNpbmVcbiAqL1xuRWFzZS5pbk91dFNpbmUgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIC1jIC8gMiAqICggTWF0aC5jb3MoIE1hdGguUEkgKiB0IC8gZCApIC0gMSApICsgYjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFYXNlO1xuIiwidmFyIEVhc2UgPSByZXF1aXJlKCcuL0Vhc2UnKTtcblxuLyoqXG4gKiBUaGUgdHdlZW4gcGxheWVyLiBXaWxsIGNoYW5nZSB0YXJnZXQgb2JqZWN0IHZhbHVlcyB3aXRoIHNwZWNpZmllZCBwYXJhbWV0ZXJzLlxuICogQGNsYXNzIFR3ZWVuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAqL1xudmFyIFR3ZWVuID0gZnVuY3Rpb24ob2JqKSB7XG5cdHRoaXMubmFtZSA9ICcnO1xuXHR0aGlzLmRlYnVnID0gdHJ1ZTtcblx0dGhpcy5vYmogPSBvYmo7XG5cblx0dGhpcy5zdGFydCA9IDA7XG4gIHRoaXMuZHVyYXRpb24gPSAwO1xuICB0aGlzLnN0YXRlID0gMDtcblxuICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG5cblx0dGhpcy5uZXh0ID0gbnVsbDtcblx0dGhpcy5wcmV2ID0gbnVsbDtcblx0dGhpcy5sYXN0ID0gdGhpcztcblx0dGhpcy50aW1lID0gMDtcblxuXHR0aGlzLnBhcmFtc0Zyb20gPSBudWxsO1xuXHR0aGlzLnBhcmFtc1RvID0gbnVsbDtcblx0dGhpcy5lYXNlID0gRWFzZS5saW5lYXI7XG5cblx0dGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbn1cblxuVHdlZW4uSURMRSA9IDA7XG5Ud2Vlbi5SVU5OSU5HID0gMTtcblR3ZWVuLkNPTVBMRVRFRCA9IDI7XG5cblR3ZWVuLnByb3RvdHlwZS5fYXBwZW5kID0gZnVuY3Rpb24ob2JqLCBkdXJhdGlvbiwgZWFzZSkge1xuXHR2YXIgbGFzdCA9IHRoaXMubGFzdDtcblx0dmFyIHR3ZWVuID0gbmV3IFR3ZWVuKG9iaik7XG5cdHR3ZWVuLnN0YXJ0ID0gbGFzdC5zdGFydCArIGxhc3QuZHVyYXRpb247XG4gIHR3ZWVuLmR1cmF0aW9uID0gZHVyYXRpb24gfHwgMDtcbiAgdHdlZW4uc3RhdGUgPSAwO1xuXHR0d2Vlbi5lYXNlID0gZWFzZTtcblx0dHdlZW4ucHJldiA9IGxhc3Q7XG5cdGxhc3QubmV4dCA9IHR3ZWVuO1xuXHR0aGlzLmxhc3QgPSB0d2Vlbjtcblx0cmV0dXJuIHR3ZWVuO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUuX2dldExhc3RQYXJhbSA9IGZ1bmN0aW9uKGZpZWxkKSB7XG5cdHZhciByZWYgPSB0aGlzLmxhc3QucHJldjtcblx0d2hpbGUgKHJlZikge1xuXHRcdGlmIChyZWYub2JqID09IHRoaXMub2JqICYmIHJlZi5wYXJhbXNUbykgYnJlYWs7XG5cdFx0cmVmID0gcmVmLnByZXY7XG5cdH1cblx0dmFyIHYgPSByZWYgPyByZWYucGFyYW1zVG9bZmllbGRdIDogdGhpcy5vYmpbZmllbGRdO1xuXHRyZXR1cm4gdjtcbn1cblxuLyoqXG4gKiBBZGRzIG5ldyB0d2Vlbiwgd2l0aCBuZXcgdGFyZ2V0LlxuICogQG1ldGhvZCBUd2VlbiNhZGRcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAqIEByZXR1cm5zIFR3ZWVuXG4gKi9cblR3ZWVuLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihvYmopIHtcblx0dmFyIHR3ZWVuID0gdGhpcy5fYXBwZW5kKG9iaiwgMCwgRWFzZS5saW5lYXIpO1xuXHRyZXR1cm4gdHdlZW47XG59XG5cbi8qKlxuICogQWRkIGEgdHdlZW4gdGhhdCBzdGFydHMgd2l0aCBzcGVjaWZpZWQgdmFsdWVzLlxuICogQG1ldGhvZCBUd2VlbiNmcm9tXG4gKiBAcGFyYW0gcHJvcHMge29iamVjdH0gVmFsdWVzIHRoYXQgdGhlIHR3ZWVuIHdpbGwgY29tZSBmcm9tLlxuICogQHBhcmFtIGR1cmF0aW9uIHtmbG9hdH0gVHdlZW4ncyBkdXJhdGlvbi5cbiAqIEBwYXJhbSBbZWFzZV0ge2Z1bmN0aW9ufSBUd2VlbidzIGVhc2luZyBjdXJ2ZS5cbiAqIEByZXR1cm5zIFR3ZWVuXG4gKi9cblR3ZWVuLnByb3RvdHlwZS5mcm9tID0gZnVuY3Rpb24ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG5cdHZhciB0d2VlbiA9IHRoaXMuX2FwcGVuZCh0aGlzLm9iaiwgZHVyYXRpb24sIGVhc2UpO1xuXHR0d2Vlbi5uYW1lID0gJ2Zyb20nO1xuXHR0d2Vlbi5wYXJhbXNGcm9tID0gcHJvcHM7XG5cdHR3ZWVuLnBhcmFtc1RvID0ge307XG5cdGZvciAodmFyIGYgaW4gcHJvcHMpIHtcblx0XHR0d2Vlbi5wYXJhbXNUb1tmXSA9IHRoaXMuX2dldExhc3RQYXJhbShmKTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBBZGQgYSB0d2VlbiB0aGF0IGVuZHMgd2l0aCBzcGVjaWZpZWQgdmFsdWVzLlxuICogQG1ldGhvZCBUd2VlbiN0b1xuICogQHBhcmFtIHByb3BzIHtvYmplY3R9IFZhbHVlcyB0aGF0IHRoZSB0d2VlbiB3aWxsIGdvIHRvLlxuICogQHBhcmFtIGR1cmF0aW9uIHtmbG9hdH0gVHdlZW4ncyBkdXJhdGlvbi5cbiAqIEBwYXJhbSBbZWFzZV0ge2Z1bmN0aW9ufSBUd2VlbidzIGVhc2luZyBjdXJ2ZS5cbiAqIEByZXR1cm5zIFR3ZWVuXG4gKi9cblR3ZWVuLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKHByb3BzLCBkdXJhdGlvbiwgZWFzZSkge1xuXHR2YXIgdHdlZW4gPSB0aGlzLl9hcHBlbmQodGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlKTtcblx0dHdlZW4ubmFtZSA9ICd0byc7XG5cdHR3ZWVuLnBhcmFtc1RvID0gcHJvcHM7XG5cdHR3ZWVuLnBhcmFtc0Zyb20gPSB7fTtcblx0Zm9yICh2YXIgZiBpbiBwcm9wcykge1xuXHRcdHR3ZWVuLnBhcmFtc0Zyb21bZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogSG9sZCB0aGUgdHdlZW4gZm9yIGEgd2hpbGUgYmVmb3JlIG5leHQgY29tbWFuZHMuXG4gKiBAbWV0aG9kIFR3ZWVuI3dhaXRcbiAqIEBwYXJhbSBkdXJhdGlvbiB7ZmxvYXR9IFRpbWUgdG8gd2FpdC5cbiAqIEByZXR1cm5zIFR3ZWVuXG4gKi9cblR3ZWVuLnByb3RvdHlwZS53YWl0ID0gZnVuY3Rpb24oZHVyYXRpb24pIHtcblx0dmFyIHR3ZWVuID0gdGhpcy5fYXBwZW5kKHRoaXMub2JqLCBkdXJhdGlvbiwgbnVsbCk7XG5cdHR3ZWVuLm5hbWUgPSAnd2FpdCc7XG5cdHR3ZWVuLnBhcmFtc0Zyb20gPSB0d2Vlbi5wcmV2LnBhcmFtc0Zyb207XG5cdHR3ZWVuLnBhcmFtc1RvID0gdHdlZW4ucHJldi5wYXJhbXNUbztcblx0cmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogU2V0IGEgY2FsbGJhY2sgd2hlbiB0aGUgcHJldmlvdXMgY29tbWFuZHMgYXJlIGNvbXBsZXRlZC5cbiAqIEBtZXRob2QgVHdlZW4jdGhlblxuICogQHBhcmFtIGNhbGxiYWNrIHtmdW5jdGlvbn0gTWV0aG9kIHRoYSB3aWxsIGJlIGV4ZWN1dGVkIGFzIGNhbGxiYWNrLlxuICogQHJldHVybnMgVHdlZW5cbiAqL1xuVHdlZW4ucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuXHR0aGlzLmxhc3Qub25Db21wbGV0ZSA9IGNhbGxiYWNrO1xuXHRyZXR1cm4gdGhpcztcbn1cblxuVHdlZW4ucHJvdG90eXBlLnNldFRpbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHR0aGlzLnRpbWUgPSB2YWx1ZTtcblx0aWYgKHRoaXMubmV4dCkgdGhpcy5uZXh0LnNldFRpbWUodmFsdWUpO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy50aW1lO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVsdGEpIHtcblx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG4gIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuXG5cdGlmIChkZWx0YSkgdGhpcy50aW1lICs9IGRlbHRhO1xuXG5cdHZhciB1cGRhdGVUaW1lID0gMDtcblxuXHRpZiAodGhpcy50aW1lIDwgdGhpcy5zdGFydCkge1xuICAgIHRoaXMuc3RhdGUgPSBUd2Vlbi5JRExFO1xuICAgIHVwZGF0ZVRpbWUgPSAwO1xuICB9IGVsc2UgaWYgKHRoaXMudGltZSA+PSB0aGlzLnN0YXJ0ICsgdGhpcy5kdXJhdGlvbikge1xuICAgIGlmICh0aGlzLnN0YXRlID09IFR3ZWVuLlJVTk5JTkcpIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlID0gVHdlZW4uQ09NUExFVEVEO1xuICAgIHVwZGF0ZVRpbWUgPSB0aGlzLmR1cmF0aW9uO1xuICB9IGVsc2Uge1xuICAgIGlmICh0aGlzLnN0YXRlID09IFR3ZWVuLklETEUpIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZSA9IDE7XG5cdFx0dXBkYXRlVGltZSA9IHRoaXMudGltZSAtIHRoaXMuc3RhcnQ7XG4gICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgfVxuXG5cdGlmICh0aGlzLnN0YXJ0ZWQpIHtcblx0XHRpZiAodGhpcy5kZWJ1ZykgdGhpcy5sb2coJ3N0YXJ0ZWQnKTtcblx0XHR0aGlzLnVwZGF0ZVByb3BzKHVwZGF0ZVRpbWUpO1xuXHR9XG5cblx0aWYgKHRoaXMudXBkYXRlZCkge1xuXHRcdHRoaXMudXBkYXRlUHJvcHModXBkYXRlVGltZSk7XG5cdH1cblxuXHRpZiAodGhpcy5jb21wbGV0ZWQpIHtcblx0XHRpZiAodGhpcy5kZWJ1ZykgdGhpcy5sb2coJ2NvbXBsZXRlZCcpO1xuXHRcdHRoaXMudXBkYXRlUHJvcHModXBkYXRlVGltZSk7XG5cdFx0aWYgKHRoaXMub25Db21wbGV0ZSkgdGhpcy5vbkNvbXBsZXRlKCk7XG5cdH1cblxuXHRpZiAodGhpcy5uZXh0KSB0aGlzLm5leHQudXBkYXRlKGRlbHRhKTtcbn1cblxuVHdlZW4ucHJvdG90eXBlLnVwZGF0ZVByb3BzID0gZnVuY3Rpb24odGltZSkge1xuXHRpZiAoIXRoaXMuZWFzZSkgcmV0dXJuO1xuXHR2YXIgcmF0aW8gPSB0aGlzLmVhc2UodGltZSwgMCwgMSwgdGhpcy5kdXJhdGlvbik7XG5cdGZvciAodmFyIGYgaW4gdGhpcy5wYXJhbXNUbykge1xuXHRcdHZhciB2ZiA9IHRoaXMucGFyYW1zRnJvbVtmXTtcblx0XHR2YXIgdnQgPSB0aGlzLnBhcmFtc1RvW2ZdO1xuXHRcdHZhciB2YyA9IHZmICsgKHZ0IC0gdmYpKnJhdGlvO1xuXHRcdHRoaXMub2JqW2ZdID0gdmM7XG5cdH1cbn1cblxuVHdlZW4ucHJvdG90eXBlLmZpbmlzaGVkID0gZnVuY3Rpb24oKSB7XG5cdHZhciByID0gdGhpcy5zdGF0ZSA9PSBUd2Vlbi5DT01QTEVURUQ7XG5cdGlmIChyICYmIHRoaXMubmV4dCkgciA9IHRoaXMubmV4dC5maW5pc2hlZCgpO1xuXHRyZXR1cm4gcjtcbn1cblxuVHdlZW4ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMubmV4dCkgdGhpcy5uZXh0LmRpc3Bvc2UoKTtcblx0aWYgKHRoaXMuZGVidWcpIHRoaXMubG9nKCdkaXNwb3NlZCEnKTtcblx0dGhpcy5uZXh0ID0gbnVsbDtcblx0dGhpcy5wcmV2ID0gbnVsbDtcblx0dGhpcy5sYXN0ID0gbnVsbDtcblx0dGhpcy5wYXJhbXNGcm9tID0gbnVsbDtcblx0dGhpcy5wYXJhbXNUbyA9IG51bGw7XG5cdHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG59XG5cblR3ZWVuLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbihtc2cpIHtcblx0Y29uc29sZS5sb2codGhpcy5vYmoubmFtZSwgdGhpcy5uYW1lLCBtc2cpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuO1xuIiwidmFyIFR3ZWVuID0gcmVxdWlyZSgnLi9Ud2VlbicpO1xudmFyIEVhc2UgPSByZXF1aXJlKCcuL0Vhc2UnKTtcblxuLyoqXG4gKiBBIHR3ZWVuIG1hbmFnZXIuIERlYWxzIHdpdGggdHdlZW4gY3JlYXRpb24sIHVwZGF0ZSBhbmQgZGVzdHJ1Y3Rpb24uXG4gKiBAY2xhc3MgVHdlZW5lclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gW2F1dG9VcGRhdGVSYXRlXSB7ZmxvYXR9IEludGVydmFsIChpbiBzZWNvbmRzKSB0aGF0IGFsbCB0d2VlbnMgd2lsbCBiZSB1cGRhdGVkLiBJZiAwLCB0aGUgYXV0by11cGRhdGUgd2lsbCBub3RcbiAqIHJ1biwgc28geW91IG11c3QgaGFuZGxlIHRoZSB1cGRhdGUgbWFudWFsbHkuIERlZmF1bHQgaXMgMC5cbiAqL1xudmFyIFR3ZWVuZXIgPSBmdW5jdGlvbihhdXRvVXBkYXRlUmF0ZSlcbntcblx0dGhpcy50d2VlbnMgPSBbXTtcblx0dGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuXHRpZiAoYXV0b1VwZGF0ZVJhdGUgPiAwKSB0aGlzLmVuYWJsZUF1dG9VcGRhdGUoYXV0b1VwZGF0ZVJhdGUpO1xufVxuXG53aW5kb3cuVHdlZW5lciA9IFR3ZWVuZXI7XG53aW5kb3cuVHdlZW4gPSBUd2VlbjtcbndpbmRvdy5FYXNlID0gRWFzZTtcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIFR3ZWVuIGluc3RhbmNlIHdpdGggcmVmZXJlbmNlZCBvYmplY3QuXG4gKiBAbWV0aG9kIFR3ZWVuZXIjYWRkXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHR3ZWVuZWQuXG4gKi9cblR3ZWVuZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuXHR2YXIgdHdlZW4gPSBuZXcgVHdlZW4ob2JqLCBuYW1lKTtcblx0dGhpcy50d2VlbnMucHVzaCh0d2Vlbik7XG5cdHJldHVybiB0d2Vlbjtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHR3ZWVuIGluc3RhbmNlcyB0aGF0IGhhdmUgcmVmZXJlbmNlIHRvIHRoZSBvYmplY3QuXG4gKiBAbWV0aG9kIFR3ZWVuZXIjcmVtb3ZlXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSB0d2VlbmVkIG9iamVjdC5cbiAqL1xuVHdlZW5lci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24ob2JqKVxue1xuXHR2YXIgaSA9IHRoaXMudHdlZW5zLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciB0ID0gdGhpcy50d2VlbnNbaV07XG5cdFx0aWYgKHQub2JqID09PSBvYmopIHRoaXMuX2Rlc3Ryb3kodCwgaSk7XG5cdH1cbn1cblxuLyoqXG4gKiBSdW5zIHRoZSB1cGRhdGUgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gKiBAbWV0aG9kIFR3ZWVuZXIjZW5hYmxlQXV0b1VwZGF0ZVxuICogQHBhcmFtIHJhdGUge2Zsb2F0fSBJbnRlcnZhbCAoaW4gc2Vjb25kcykgdGhhdCB0aGUgdXBkYXRlIHdpbGwgYmUgcGxheWVkLlxuICogSWYgMCBvciBsb3dlciwgdGhlIGF1dG9tYXRpYyB1cGRhdGUgd2lsbCBiZSBkaXNhYmxlZC5cbiAqL1xuVHdlZW5lci5wcm90b3R5cGUuZW5hYmxlQXV0b1VwZGF0ZSA9IGZ1bmN0aW9uKHJhdGUpIHtcblx0aWYgKCFyYXRlKSB7XG5cdFx0dGhpcy5kaXNhYmxlQXV0b1VwZGF0ZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBzZWxmID0gdGhpcztcblx0dmFyIHRpbWUgPSBzZWxmLmdldFRpbWUoKTtcblx0c2VsZi5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHR2YXIgdCA9IHNlbGYuZ2V0VGltZSgpO1xuXHRcdHZhciBkID0gdCAtIHRpbWU7XG5cdFx0dGltZSA9IHQ7XG5cdFx0c2VsZi51cGRhdGUoZCk7XG5cdH0sIHJhdGUqMTAwMCk7XG59XG5cbi8qKlxuICogU3RvcHMgdGhlIGF1dG9tYXRpYyB1cGRhdGUuXG4gKiBAbWV0aG9kIFR3ZWVuZXIjZGlzYWJsZUF1dG9VcGRhdGVcbiAqL1xuVHdlZW5lci5wcm90b3R5cGUuZGlzYWJsZUF1dG9VcGRhdGUgPSBmdW5jdGlvbigpIHtcblx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG59XG5cbi8qKlxuICogVXBkYXRlIGFsbCB0d2VlbnMuXG4gKiBAbWV0aG9kIFR3ZWVuZXIjdXBkYXRlXG4gKiBAcGFyYW0gZGVsdGEge2Zsb2F0fSBUaGUgZWxhcHNlZCB0aW1lIChpbiBzZWNvbmRzKSBzaW5jZSBsYXN0IHVwZGF0ZS5cbiAqL1xuVHdlZW5lci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVsdGEpIHtcblx0dmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pIHtcblx0XHR2YXIgdCA9IHRoaXMudHdlZW5zW2ldO1xuXHRcdHQudXBkYXRlKGRlbHRhKTtcblx0XHRpZiAodC5maW5pc2hlZCgpKSB0aGlzLl9kZXN0cm95KHQsIGkpO1xuXHR9XG59XG5cblxuVHdlZW5lci5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbih0d2VlbiwgaW5kZXgpIHtcblx0aWYgKGluZGV4ID09IHVuZGVmaW5lZCkgaW5kZXggPSB0aGlzLnR3ZWVuLmluZGV4T2YodHdlZW4pO1xuXHR0aGlzLnR3ZWVucy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR0d2Vlbi5kaXNwb3NlKCk7XG59XG5cblR3ZWVuZXIucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpLzEwMDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5lcjtcbiJdfQ==
