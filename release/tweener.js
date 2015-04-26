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

Tween.prototype._getTween = function(obj, duration, ease) {
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
		if (ref.obj == this.obj && ref.paramsTo && ref.paramsTo[field] != undefined && ref.paramsTo[field] != null) break;
		ref = ref.prev;
	}
	var v = ref ? ref.paramsTo[field] : this.obj[field];
	console.log(field, v);
	return v;
}

/**
 * Adds new tween, with new target.
 * @method Tween#add
 * @param obj {object} The object that will be tweened.
 * @returns Tween
 */
Tween.prototype.add = function(obj) {
	var tween = this._getTween(obj, 0, Ease.linear);
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
	var tween = this._getTween(this.obj, duration, ease);
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
	var tween = this._getTween(this.obj, duration, ease);
	tween.name = 'to';
	tween.paramsTo = props;
	tween.paramsFrom = {};
	for (var f in props) {
		tween.paramsFrom[f] = this._getLastParam(f);
	}
	console.log('----');
	return this;
}

/**
 * Hold the tween for a while before next commands.
 * @method Tween#wait
 * @param duration {float} Time to wait.
 * @returns Tween
 */
Tween.prototype.wait = function(duration) {
	var tween = this._getTween(this.obj, duration, null);
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

	if (this.time >= this.start && this.time <= this.start + this.duration) {
		if (this.state != Tween.RUNNING) if (this.debug) this.log('started');
		this.state = Tween.RUNNING;
		this.updated = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF1cm9kZXRhcnNvL1NpdGVzL0xpYnMvdHdlZW5lci9zb3VyY2UvRWFzZS5qcyIsIi9Vc2Vycy9tYXVyb2RldGFyc28vU2l0ZXMvTGlicy90d2VlbmVyL3NvdXJjZS9Ud2Vlbi5qcyIsIi9Vc2Vycy9tYXVyb2RldGFyc28vU2l0ZXMvTGlicy90d2VlbmVyL3NvdXJjZS90d2VlbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIFN0YXRpYyBjdXJ2ZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgYSB0d2Vlbi5cbiAqIEBjbGFzcyBFYXNlXG4gKi9cblxudmFyIEVhc2UgPSB7fTtcblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5saW5lYXJcbiAqL1xuRWFzZS5saW5lYXIgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiB0IC8gZCArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5CYWNrXG4gKi9cbkVhc2UuaW5CYWNrID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHZhciBzID0gMS43MDE1ODtcblx0cmV0dXJuIGMgKiAoIHQgLz0gZCApICogdCAqICggKCBzICsgMSApICogdCAtIHMgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dEJhY2tcbiAqL1xuRWFzZS5vdXRCYWNrID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHZhciBzID0gMS43MDE1ODtcblx0cmV0dXJuIGMgKiAoICggdCA9IHQgLyBkIC0gMSApICogdCAqICggKCBzICsgMSApICogdCArIHMpICsgMSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRCYWNrXG4gKi9cbkVhc2UuaW5PdXRCYWNrID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHZhciBzID0gMS43MDE1ODtcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA8IDEgKVxuXHRcdHJldHVybiBjIC8gMiAqICggdCAqIHQgKiAoICggKCBzICo9ICggMS41MjUgKSApICsgMSApICogdCAtIHMgKSApICsgYjtcblx0cmV0dXJuIGMgLyAyICogKCAoIHQgLT0gMiApICogdCAqICggKCAoIHMgKj0gKCAxLjUyNSApICkgKyAxICkgKiB0ICsgcyApICsgMiApICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRCb3VuY2VcbiAqL1xuRWFzZS5vdXRCb3VuY2UgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCAoIHQgLz0gZCApIDwgKCAxIC8gMi43NSApIClcblx0XHRyZXR1cm4gYyAqICggNy41NjI1ICogdCAqIHQgKSArIGI7XG5cdGVsc2UgaWYgKCB0IDwgKCAyIC8gMi43NSApIClcblx0XHRyZXR1cm4gYyAqICggNy41NjI1ICogKCB0IC09ICggMS41IC8gMi43NSApICkgKiB0ICsgLjc1ICkgKyBiO1xuXHRlbHNlIGlmICggdCA8ICggMi41IC8gMi43NSApIClcblx0XHRyZXR1cm4gYyAqICggNy41NjI1ICogKCB0IC09ICggMi4yNSAvIDIuNzUgKSApICogdCArIC45Mzc1ICkgKyBiO1xuXHRlbHNlXG5cdFx0cmV0dXJuIGMgKiAoIDcuNTYyNSAqICggdCAtPSAoIDIuNjI1IC8gMi43NSApICkgKiB0ICsgLjk4NDM3NSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5Cb3VuY2VcbiAqL1xuRWFzZS5pbkJvdW5jZSA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAtIG91dEJvdW5jZSAoIGQgLSB0LCAwLCBjLCBkICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dEJvdW5jZVxuICovXG5FYXNlLmluT3V0Qm91bmNlID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggdCA8IGQgLyAyIClcblx0XHRyZXR1cm4gaW5Cb3VuY2UgKCB0ICogMiwgMCwgYywgZCApICogLjUgKyBiO1xuXHRlbHNlXG5cdFx0cmV0dXJuIG91dEJvdW5jZSAoIHQgKiAyIC0gZCwgMCwgYywgZCApICogLjUgKyBjICouNSArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5DaXJjXG4gKi9cbkVhc2UuaW5DaXJjID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiAtYyAqICggTWF0aC5zcXJ0KCAxIC0gKCB0IC89IGQgKSAqIHQgKSAtIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dENpcmNcbiAqL1xuRWFzZS5vdXRDaXJjID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogTWF0aC5zcXJ0KCAxIC0gKCB0ID0gdCAvIGQgLSAxICkgKiB0ICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dENpcmNcbiAqL1xuRWFzZS5pbk91dENpcmMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA8IDEgKVxuXHRcdHJldHVybiAtYyAvIDIgKiAoIE1hdGguc3FydCggMSAtIHQgKiB0ICkgLSAxICkgKyBiO1xuXHRyZXR1cm4gYyAvIDIgKiAoIE1hdGguc3FydCggMSAtICggdCAtPSAyICkgKiB0ICkgKyAxICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbkN1YmljXG4gKi9cbkVhc2UuaW5DdWJpYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqICggdCAvPSBkICkgKiB0ICogdCArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dEN1YmljXG4gKi9cbkVhc2Uub3V0Q3ViaWMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiAoICggdCA9IHQgLyBkIC0gMSApICogdCAqIHQgKyAxICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dEN1YmljXG4gKi9cbkVhc2UuaW5PdXRDdWJpYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoICggdCAvPSBkIC8gMiApIDwgMSApXG5cdFx0cmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICsgYjtcblx0cmV0dXJuIGMgLyAyICogKCAoIHQgLT0gMiApICogdCAqIHQgKyAyKSArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5FbGFzdGljXG4gKi9cbkVhc2UuaW5FbGFzdGljID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggdCA9PSAwIClcblx0XHRyZXR1cm4gYjtcblx0aWYgKCAoIHQgLz0gZCApID09IDEgKVxuXHRcdHJldHVybiBiICsgYztcblx0XHR2YXIgcCA9IGQgKiAuMztcblx0dmFyIHM7XG5cdFx0dmFyIGEgPSBjO1xuXHRcdHMgPSBwIC8gNDtcblxuXHRyZXR1cm4gLSggYSAqIE1hdGgucG93KCAyLCAxMCAqICggdCAtPSAxICkgKSAqIE1hdGguc2luKCAoIHQgKiBkIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRFbGFzdGljXG4gKi9cbkVhc2Uub3V0RWxhc3RpYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoIHQgPT0gMCApXG5cdFx0cmV0dXJuIGI7XG5cdGlmICggKCB0IC89IGQgKSA9PSAxIClcblx0XHRyZXR1cm4gYiArIGM7XG5cdFx0dmFyIHAgPSBkICogLjM7XG5cdHZhciBzO1xuXHRcdHZhciBhID0gYztcblx0XHRzID0gcCAvIDQ7XG5cblx0cmV0dXJuICggYSAqIE1hdGgucG93KCAyLCAtMTAgKiB0ICkgKiBNYXRoLnNpbiggKCB0ICogZCAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSArIGMgKyBiICk7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0RWxhc3RpY1xuICovXG5FYXNlLmluT3V0RWxhc3RpYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoIHQgPT0gMCApXG5cdFx0cmV0dXJuIGI7XG5cdGlmICggKCB0IC89IGQgLyAyICkgPT0gMiApXG5cdFx0cmV0dXJuIGIgKyBjO1xuXHR2YXIgcztcblx0XHR2YXIgcCA9IGQgKiAoIC4zICogMS41ICk7XG5cdFx0dmFyIGEgPSBjO1xuXHRcdHMgPXAgLyA0O1xuXG5cdGlmICggdCA8IDEgKVxuXHRcdHJldHVybiAtLjUgKiAoIGEgKiBNYXRoLnBvdyggMiwgMTAgKiAoIHQgLT0gMSApICkgKiBNYXRoLnNpbiggKCB0ICogZCAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSApICsgYjtcblx0cmV0dXJuIGEgKiBNYXRoLnBvdyggMiwgLTEwICogKCB0IC09IDEgKSApICogTWF0aC5zaW4oICggdCAqIGQgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKiAuNSArIGMgKyBiO1xufVxuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluRXhwb1xuICovXG5FYXNlLmluRXhwbyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gKCB0ID09IDAgKSA/IGIgOiBjICogTWF0aC5wb3coIDIsIDEwICogKCB0IC8gZCAtIDEgKSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0RXhwb1xuICovXG5FYXNlLm91dEV4cG8gPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuICggdCA9PSBkICkgPyBiICsgYyA6IGMgKiAoIC1NYXRoLnBvdyggMiwgLTEwICogdCAvIGQgKSArIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0RXhwb1xuICovXG5FYXNlLmluT3V0RXhwbyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoIHQgPT0gMCApXG5cdFx0cmV0dXJuIGI7XG5cdGlmICggdCA9PSBkIClcblx0XHRyZXR1cm4gYiArIGM7XG5cdGlmICggKCB0IC89IGQgLyAyICkgPCAxIClcblx0XHRyZXR1cm4gYyAvIDIgKiBNYXRoLnBvdyggMiwgMTAgKiAoIHQgLSAxICkgKSArIGI7XG5cdHJldHVybiBjIC8gMiAqICggLU1hdGgucG93KCAyLCAtMTAgKiAtLXQgKSArIDIgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluUXVhZFxuICovXG5FYXNlLmluUXVhZCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqICggdCAvPSBkICkgKiB0ICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0UXVhZFxuICovXG5FYXNlLm91dFF1YWQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIC1jICogKCB0IC89IGQgKSAqICggdCAtIDIgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0UXVhZFxuICovXG5FYXNlLmluT3V0UXVhZCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoICggdCAvPSBkIC8gMiApIDwgMSApXG5cdFx0cmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuXHRyZXR1cm4gLWMgLyAyICogKCAoIC0tdCApICogKCB0IC0gMiApIC0gMSApICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pblF1YXJ0XG4gKi9cbkVhc2UuaW5RdWFydCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqICggdCAvPSBkICkgKiB0ICogdCAqIHQgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRRdWFydFxuICovXG5FYXNlLm91dFF1YXJ0ID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiAtYyAqICggKCB0ID0gdCAvIGQgLSAxICkgKiB0ICogdCAqIHQgLSAxICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dFF1YXJ0XG4gKi9cbkVhc2UuaW5PdXRRdWFydCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoICggdCAvPSBkIC8gMiApIDwgMSApXG5cdFx0cmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICogdCArIGI7XG5cdHJldHVybiAtYyAvIDIgKiAoICggdCAtPSAyICkgKiB0ICogdCAqIHQgLSAyKSArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5RdWludFxuICovXG5FYXNlLmluUXVpbnQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiAoIHQgLz0gZCApICogdCAqIHQgKiB0ICogdCArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dFF1aW50XG4gKi9cbkVhc2Uub3V0UXVpbnQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiAoICggdCA9IHQgLyBkIC0gMSApICogdCAqIHQgKiB0ICogdCArIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0UXVpbnRcbiAqL1xuRWFzZS5pbk91dFF1aW50ID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggKCB0IC89IGQgLyAyICkgPCAxIClcblx0XHRyZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICogdCArIGI7XG5cdHJldHVybiBjIC8gMiAqICggKCB0IC09IDIgKSAqIHQgKiB0ICogdCAqIHQgKyAyICkgKyBiO1xufVxuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluU2luZVxuICovXG5FYXNlLmluU2luZSA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gLWMgKiBNYXRoLmNvcyAoIHQgLyBkICogKCBNYXRoLlBJIC8gMiApICkgKyBjICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0U2luZVxuICovXG5FYXNlLm91dFNpbmUgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiBNYXRoLnNpbiggdCAvIGQgKiAoIE1hdGguUEkgLyAyICkgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0U2luZVxuICovXG5FYXNlLmluT3V0U2luZSA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gLWMgLyAyICogKCBNYXRoLmNvcyggTWF0aC5QSSAqIHQgLyBkICkgLSAxICkgKyBiO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc2U7XG4iLCJ2YXIgRWFzZSA9IHJlcXVpcmUoJy4vRWFzZScpO1xuXG4vKipcbiAqIFRoZSB0d2VlbiBwbGF5ZXIuIFdpbGwgY2hhbmdlIHRhcmdldCBvYmplY3QgdmFsdWVzIHdpdGggc3BlY2lmaWVkIHBhcmFtZXRlcnMuXG4gKiBAY2xhc3MgVHdlZW5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIG9iaiB7b2JqZWN0fSBUaGUgb2JqZWN0IHRoYXQgd2lsbCBiZSB0d2VlbmVkLlxuICovXG52YXIgVHdlZW4gPSBmdW5jdGlvbihvYmopIHtcblx0dGhpcy5uYW1lID0gJyc7XG5cdHRoaXMuZGVidWcgPSB0cnVlO1xuXHR0aGlzLm9iaiA9IG9iajtcblxuXHR0aGlzLnN0YXJ0ID0gMDtcbiAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gIHRoaXMuc3RhdGUgPSAwO1xuXG4gIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcblxuXHR0aGlzLm5leHQgPSBudWxsO1xuXHR0aGlzLnByZXYgPSBudWxsO1xuXHR0aGlzLmxhc3QgPSB0aGlzO1xuXHR0aGlzLnRpbWUgPSAwO1xuXG5cdHRoaXMucGFyYW1zRnJvbSA9IG51bGw7XG5cdHRoaXMucGFyYW1zVG8gPSBudWxsO1xuXHR0aGlzLmVhc2UgPSBFYXNlLmxpbmVhcjtcblxuXHR0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xufVxuXG5Ud2Vlbi5JRExFID0gMDtcblR3ZWVuLlJVTk5JTkcgPSAxO1xuVHdlZW4uQ09NUExFVEVEID0gMjtcblxuVHdlZW4ucHJvdG90eXBlLl9nZXRUd2VlbiA9IGZ1bmN0aW9uKG9iaiwgZHVyYXRpb24sIGVhc2UpIHtcblx0dmFyIGxhc3QgPSB0aGlzLmxhc3Q7XG5cdHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmopO1xuXHR0d2Vlbi5zdGFydCA9IGxhc3Quc3RhcnQgKyBsYXN0LmR1cmF0aW9uO1xuICB0d2Vlbi5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDA7XG4gIHR3ZWVuLnN0YXRlID0gMDtcblx0dHdlZW4uZWFzZSA9IGVhc2U7XG5cdHR3ZWVuLnByZXYgPSBsYXN0O1xuXHRsYXN0Lm5leHQgPSB0d2Vlbjtcblx0dGhpcy5sYXN0ID0gdHdlZW47XG5cdHJldHVybiB0d2Vlbjtcbn1cblxuVHdlZW4ucHJvdG90eXBlLl9nZXRMYXN0UGFyYW0gPSBmdW5jdGlvbihmaWVsZCkge1xuXHR2YXIgcmVmID0gdGhpcy5sYXN0LnByZXY7XG5cdHdoaWxlIChyZWYpIHtcblx0XHRpZiAocmVmLm9iaiA9PSB0aGlzLm9iaiAmJiByZWYucGFyYW1zVG8gJiYgcmVmLnBhcmFtc1RvW2ZpZWxkXSAhPSB1bmRlZmluZWQgJiYgcmVmLnBhcmFtc1RvW2ZpZWxkXSAhPSBudWxsKSBicmVhaztcblx0XHRyZWYgPSByZWYucHJldjtcblx0fVxuXHR2YXIgdiA9IHJlZiA/IHJlZi5wYXJhbXNUb1tmaWVsZF0gOiB0aGlzLm9ialtmaWVsZF07XG5cdGNvbnNvbGUubG9nKGZpZWxkLCB2KTtcblx0cmV0dXJuIHY7XG59XG5cbi8qKlxuICogQWRkcyBuZXcgdHdlZW4sIHdpdGggbmV3IHRhcmdldC5cbiAqIEBtZXRob2QgVHdlZW4jYWRkXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHR3ZWVuZWQuXG4gKiBAcmV0dXJucyBUd2VlblxuICovXG5Ud2Vlbi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ob2JqKSB7XG5cdHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKG9iaiwgMCwgRWFzZS5saW5lYXIpO1xuXHRyZXR1cm4gdHdlZW47XG59XG5cbi8qKlxuICogQWRkIGEgdHdlZW4gdGhhdCBzdGFydHMgd2l0aCBzcGVjaWZpZWQgdmFsdWVzLlxuICogQG1ldGhvZCBUd2VlbiNmcm9tXG4gKiBAcGFyYW0gcHJvcHMge29iamVjdH0gVmFsdWVzIHRoYXQgdGhlIHR3ZWVuIHdpbGwgY29tZSBmcm9tLlxuICogQHBhcmFtIGR1cmF0aW9uIHtmbG9hdH0gVHdlZW4ncyBkdXJhdGlvbi5cbiAqIEBwYXJhbSBbZWFzZV0ge2Z1bmN0aW9ufSBUd2VlbidzIGVhc2luZyBjdXJ2ZS5cbiAqIEByZXR1cm5zIFR3ZWVuXG4gKi9cblR3ZWVuLnByb3RvdHlwZS5mcm9tID0gZnVuY3Rpb24ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG5cdHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgZWFzZSk7XG5cdHR3ZWVuLm5hbWUgPSAnZnJvbSc7XG5cdHR3ZWVuLnBhcmFtc0Zyb20gPSBwcm9wcztcblx0dHdlZW4ucGFyYW1zVG8gPSB7fTtcblx0Zm9yICh2YXIgZiBpbiBwcm9wcykge1xuXHRcdHR3ZWVuLnBhcmFtc1RvW2ZdID0gdGhpcy5fZ2V0TGFzdFBhcmFtKGYpO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIEFkZCBhIHR3ZWVuIHRoYXQgZW5kcyB3aXRoIHNwZWNpZmllZCB2YWx1ZXMuXG4gKiBAbWV0aG9kIFR3ZWVuI3RvXG4gKiBAcGFyYW0gcHJvcHMge29iamVjdH0gVmFsdWVzIHRoYXQgdGhlIHR3ZWVuIHdpbGwgZ28gdG8uXG4gKiBAcGFyYW0gZHVyYXRpb24ge2Zsb2F0fSBUd2VlbidzIGR1cmF0aW9uLlxuICogQHBhcmFtIFtlYXNlXSB7ZnVuY3Rpb259IFR3ZWVuJ3MgZWFzaW5nIGN1cnZlLlxuICogQHJldHVybnMgVHdlZW5cbiAqL1xuVHdlZW4ucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG5cdHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgZWFzZSk7XG5cdHR3ZWVuLm5hbWUgPSAndG8nO1xuXHR0d2Vlbi5wYXJhbXNUbyA9IHByb3BzO1xuXHR0d2Vlbi5wYXJhbXNGcm9tID0ge307XG5cdGZvciAodmFyIGYgaW4gcHJvcHMpIHtcblx0XHR0d2Vlbi5wYXJhbXNGcm9tW2ZdID0gdGhpcy5fZ2V0TGFzdFBhcmFtKGYpO1xuXHR9XG5cdGNvbnNvbGUubG9nKCctLS0tJyk7XG5cdHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIEhvbGQgdGhlIHR3ZWVuIGZvciBhIHdoaWxlIGJlZm9yZSBuZXh0IGNvbW1hbmRzLlxuICogQG1ldGhvZCBUd2VlbiN3YWl0XG4gKiBAcGFyYW0gZHVyYXRpb24ge2Zsb2F0fSBUaW1lIHRvIHdhaXQuXG4gKiBAcmV0dXJucyBUd2VlblxuICovXG5Ud2Vlbi5wcm90b3R5cGUud2FpdCA9IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XG5cdHZhciB0d2VlbiA9IHRoaXMuX2dldFR3ZWVuKHRoaXMub2JqLCBkdXJhdGlvbiwgbnVsbCk7XG5cdHR3ZWVuLm5hbWUgPSAnd2FpdCc7XG5cdHR3ZWVuLnBhcmFtc0Zyb20gPSB0d2Vlbi5wcmV2LnBhcmFtc0Zyb207XG5cdHR3ZWVuLnBhcmFtc1RvID0gdHdlZW4ucHJldi5wYXJhbXNUbztcblx0cmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogU2V0IGEgY2FsbGJhY2sgd2hlbiB0aGUgcHJldmlvdXMgY29tbWFuZHMgYXJlIGNvbXBsZXRlZC5cbiAqIEBtZXRob2QgVHdlZW4jdGhlblxuICogQHBhcmFtIGNhbGxiYWNrIHtmdW5jdGlvbn0gTWV0aG9kIHRoYSB3aWxsIGJlIGV4ZWN1dGVkIGFzIGNhbGxiYWNrLlxuICogQHJldHVybnMgVHdlZW5cbiAqL1xuVHdlZW4ucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuXHR0aGlzLmxhc3Qub25Db21wbGV0ZSA9IGNhbGxiYWNrO1xuXHRyZXR1cm4gdGhpcztcbn1cblxuVHdlZW4ucHJvdG90eXBlLnNldFRpbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHR0aGlzLnRpbWUgPSB2YWx1ZTtcblx0aWYgKHRoaXMubmV4dCkgdGhpcy5uZXh0LnNldFRpbWUodmFsdWUpO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy50aW1lO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVsdGEpIHtcblx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG4gIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuXG5cdGlmIChkZWx0YSkgdGhpcy50aW1lICs9IGRlbHRhO1xuXG5cdGlmICh0aGlzLnRpbWUgPj0gdGhpcy5zdGFydCAmJiB0aGlzLnRpbWUgPD0gdGhpcy5zdGFydCArIHRoaXMuZHVyYXRpb24pIHtcblx0XHRpZiAodGhpcy5zdGF0ZSAhPSBUd2Vlbi5SVU5OSU5HKSBpZiAodGhpcy5kZWJ1ZykgdGhpcy5sb2coJ3N0YXJ0ZWQnKTtcblx0XHR0aGlzLnN0YXRlID0gVHdlZW4uUlVOTklORztcblx0XHR0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuXHRcdHRoaXMudXBkYXRlUHJvcHModGhpcy50aW1lIC0gdGhpcy5zdGFydCk7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUgPT0gVHdlZW4uUlVOTklORykge1xuXHRcdFx0aWYgKHRoaXMudGltZSA8IHRoaXMuc3RhcnQpIHtcblx0XHRcdFx0dGhpcy51cGRhdGVQcm9wcygwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMudXBkYXRlUHJvcHModGhpcy5kdXJhdGlvbik7XG5cdFx0XHRcdGlmICh0aGlzLmRlYnVnKSB0aGlzLmxvZygnY29tcGxldGVkJyk7XG5cdFx0XHRcdGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnN0YXRlID0gVHdlZW4uSURMRTtcblx0fVxuXG5cdGlmICh0aGlzLm5leHQpIHRoaXMubmV4dC51cGRhdGUoZGVsdGEpO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUudXBkYXRlUHJvcHMgPSBmdW5jdGlvbih0aW1lKSB7XG5cdGlmICghdGhpcy5lYXNlKSByZXR1cm47XG5cdHZhciByYXRpbyA9IHRoaXMuZWFzZSh0aW1lLCAwLCAxLCB0aGlzLmR1cmF0aW9uKTtcblx0Zm9yICh2YXIgZiBpbiB0aGlzLnBhcmFtc1RvKSB7XG5cdFx0dmFyIHZmID0gdGhpcy5wYXJhbXNGcm9tW2ZdO1xuXHRcdHZhciB2dCA9IHRoaXMucGFyYW1zVG9bZl07XG5cdFx0dmFyIHZjID0gdmYgKyAodnQgLSB2ZikqcmF0aW87XG5cdFx0dGhpcy5vYmpbZl0gPSB2Yztcblx0fVxufVxuXG5Ud2Vlbi5wcm90b3R5cGUuZmluaXNoZWQgPSBmdW5jdGlvbigpIHtcblx0dmFyIHIgPSB0aGlzLnN0YXRlID09IFR3ZWVuLkNPTVBMRVRFRDtcblx0aWYgKHIgJiYgdGhpcy5uZXh0KSByID0gdGhpcy5uZXh0LmZpbmlzaGVkKCk7XG5cdHJldHVybiByO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5uZXh0KSB0aGlzLm5leHQuZGlzcG9zZSgpO1xuXHRpZiAodGhpcy5kZWJ1ZykgdGhpcy5sb2coJ2Rpc3Bvc2VkIScpO1xuXHR0aGlzLm5leHQgPSBudWxsO1xuXHR0aGlzLnByZXYgPSBudWxsO1xuXHR0aGlzLmxhc3QgPSBudWxsO1xuXHR0aGlzLnBhcmFtc0Zyb20gPSBudWxsO1xuXHR0aGlzLnBhcmFtc1RvID0gbnVsbDtcblx0dGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbn1cblxuVHdlZW4ucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uKG1zZykge1xuXHRjb25zb2xlLmxvZyh0aGlzLm9iai5uYW1lLCB0aGlzLm5hbWUsIG1zZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47XG4iLCJ2YXIgVHdlZW4gPSByZXF1aXJlKCcuL1R3ZWVuJyk7XG52YXIgRWFzZSA9IHJlcXVpcmUoJy4vRWFzZScpO1xuXG4vKipcbiAqIEEgdHdlZW4gbWFuYWdlci4gRGVhbHMgd2l0aCB0d2VlbiBjcmVhdGlvbiwgdXBkYXRlIGFuZCBkZXN0cnVjdGlvbi5cbiAqIEBjbGFzcyBUd2VlbmVyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSBbYXV0b1VwZGF0ZVJhdGVdIHtmbG9hdH0gSW50ZXJ2YWwgKGluIHNlY29uZHMpIHRoYXQgYWxsIHR3ZWVucyB3aWxsIGJlIHVwZGF0ZWQuIElmIDAsIHRoZSBhdXRvLXVwZGF0ZSB3aWxsIG5vdFxuICogcnVuLCBzbyB5b3UgbXVzdCBoYW5kbGUgdGhlIHVwZGF0ZSBtYW51YWxseS4gRGVmYXVsdCBpcyAwLlxuICovXG52YXIgVHdlZW5lciA9IGZ1bmN0aW9uKGF1dG9VcGRhdGVSYXRlKVxue1xuXHR0aGlzLnR3ZWVucyA9IFtdO1xuXHR0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG5cdGlmIChhdXRvVXBkYXRlUmF0ZSA+IDApIHRoaXMuZW5hYmxlQXV0b1VwZGF0ZShhdXRvVXBkYXRlUmF0ZSk7XG59XG5cbndpbmRvdy5Ud2VlbmVyID0gVHdlZW5lcjtcbndpbmRvdy5Ud2VlbiA9IFR3ZWVuO1xud2luZG93LkVhc2UgPSBFYXNlO1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgVHdlZW4gaW5zdGFuY2Ugd2l0aCByZWZlcmVuY2VkIG9iamVjdC5cbiAqIEBtZXRob2QgVHdlZW5lciNhZGRcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAqL1xuVHdlZW5lci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ob2JqLCBuYW1lKSB7XG5cdHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmosIG5hbWUpO1xuXHR0aGlzLnR3ZWVucy5wdXNoKHR3ZWVuKTtcblx0cmV0dXJuIHR3ZWVuO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdHdlZW4gaW5zdGFuY2VzIHRoYXQgaGF2ZSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdC5cbiAqIEBtZXRob2QgVHdlZW5lciNyZW1vdmVcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIHR3ZWVuZWQgb2JqZWN0LlxuICovXG5Ud2VlbmVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihvYmopXG57XG5cdHZhciBpID0gdGhpcy50d2VlbnMubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcblx0XHRpZiAodC5vYmogPT09IG9iaikgdGhpcy5fZGVzdHJveSh0LCBpKTtcblx0fVxufVxuXG4vKipcbiAqIFJ1bnMgdGhlIHVwZGF0ZSBtZXRob2QgYXV0b21hdGljYWxseS5cbiAqIEBtZXRob2QgVHdlZW5lciNlbmFibGVBdXRvVXBkYXRlXG4gKiBAcGFyYW0gcmF0ZSB7ZmxvYXR9IEludGVydmFsIChpbiBzZWNvbmRzKSB0aGF0IHRoZSB1cGRhdGUgd2lsbCBiZSBwbGF5ZWQuXG4gKiBJZiAwIG9yIGxvd2VyLCB0aGUgYXV0b21hdGljIHVwZGF0ZSB3aWxsIGJlIGRpc2FibGVkLlxuICovXG5Ud2VlbmVyLnByb3RvdHlwZS5lbmFibGVBdXRvVXBkYXRlID0gZnVuY3Rpb24ocmF0ZSkge1xuXHRpZiAoIXJhdGUpIHtcblx0XHR0aGlzLmRpc2FibGVBdXRvVXBkYXRlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIHNlbGYgPSB0aGlzO1xuXHR2YXIgdGltZSA9IHNlbGYuZ2V0VGltZSgpO1xuXHRzZWxmLl9pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0ID0gc2VsZi5nZXRUaW1lKCk7XG5cdFx0dmFyIGQgPSB0IC0gdGltZTtcblx0XHR0aW1lID0gdDtcblx0XHRzZWxmLnVwZGF0ZShkKTtcblx0fSwgcmF0ZSoxMDAwKTtcbn1cblxuLyoqXG4gKiBTdG9wcyB0aGUgYXV0b21hdGljIHVwZGF0ZS5cbiAqIEBtZXRob2QgVHdlZW5lciNkaXNhYmxlQXV0b1VwZGF0ZVxuICovXG5Ud2VlbmVyLnByb3RvdHlwZS5kaXNhYmxlQXV0b1VwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYWxsIHR3ZWVucy5cbiAqIEBtZXRob2QgVHdlZW5lciN1cGRhdGVcbiAqIEBwYXJhbSBkZWx0YSB7ZmxvYXR9IFRoZSBlbGFwc2VkIHRpbWUgKGluIHNlY29uZHMpIHNpbmNlIGxhc3QgdXBkYXRlLlxuICovXG5Ud2VlbmVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkZWx0YSkge1xuXHR2YXIgaSA9IHRoaXMudHdlZW5zLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciB0ID0gdGhpcy50d2VlbnNbaV07XG5cdFx0dC51cGRhdGUoZGVsdGEpO1xuXHRcdGlmICh0LmZpbmlzaGVkKCkpIHRoaXMuX2Rlc3Ryb3kodCwgaSk7XG5cdH1cbn1cblxuXG5Ud2VlbmVyLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uKHR3ZWVuLCBpbmRleCkge1xuXHRpZiAoaW5kZXggPT0gdW5kZWZpbmVkKSBpbmRleCA9IHRoaXMudHdlZW4uaW5kZXhPZih0d2Vlbik7XG5cdHRoaXMudHdlZW5zLnNwbGljZShpbmRleCwgMSk7XG5cdHR3ZWVuLmRpc3Bvc2UoKTtcbn1cblxuVHdlZW5lci5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkvMTAwMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbmVyO1xuIl19
