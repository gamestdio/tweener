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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF1cm9kZXRhcnNvL1NpdGVzL0xpYnMvdHdlZW5lci9zb3VyY2UvRWFzZS5qcyIsIi9Vc2Vycy9tYXVyb2RldGFyc28vU2l0ZXMvTGlicy90d2VlbmVyL3NvdXJjZS9Ud2Vlbi5qcyIsIi9Vc2Vycy9tYXVyb2RldGFyc28vU2l0ZXMvTGlicy90d2VlbmVyL3NvdXJjZS90d2VlbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogU3RhdGljIGN1cnZlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBhIHR3ZWVuLlxuICogQGNsYXNzIEVhc2VcbiAqL1xuXG52YXIgRWFzZSA9IHt9O1xuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmxpbmVhclxuICovXG5FYXNlLmxpbmVhciA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqIHQgLyBkICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbkJhY2tcbiAqL1xuRWFzZS5pbkJhY2sgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0dmFyIHMgPSAxLjcwMTU4O1xuXHRyZXR1cm4gYyAqICggdCAvPSBkICkgKiB0ICogKCAoIHMgKyAxICkgKiB0IC0gcyApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0QmFja1xuICovXG5FYXNlLm91dEJhY2sgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0dmFyIHMgPSAxLjcwMTU4O1xuXHRyZXR1cm4gYyAqICggKCB0ID0gdCAvIGQgLSAxICkgKiB0ICogKCAoIHMgKyAxICkgKiB0ICsgcykgKyAxICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dEJhY2tcbiAqL1xuRWFzZS5pbk91dEJhY2sgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0dmFyIHMgPSAxLjcwMTU4O1xuXHRpZiAoICggdCAvPSBkIC8gMiApIDwgMSApXG5cdFx0cmV0dXJuIGMgLyAyICogKCB0ICogdCAqICggKCAoIHMgKj0gKCAxLjUyNSApICkgKyAxICkgKiB0IC0gcyApICkgKyBiO1xuXHRyZXR1cm4gYyAvIDIgKiAoICggdCAtPSAyICkgKiB0ICogKCAoICggcyAqPSAoIDEuNTI1ICkgKSArIDEgKSAqIHQgKyBzICkgKyAyICkgKyBiO1xufVxuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dEJvdW5jZVxuICovXG5FYXNlLm91dEJvdW5jZSA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoICggdCAvPSBkICkgPCAoIDEgLyAyLjc1ICkgKVxuXHRcdHJldHVybiBjICogKCA3LjU2MjUgKiB0ICogdCApICsgYjtcblx0ZWxzZSBpZiAoIHQgPCAoIDIgLyAyLjc1ICkgKVxuXHRcdHJldHVybiBjICogKCA3LjU2MjUgKiAoIHQgLT0gKCAxLjUgLyAyLjc1ICkgKSAqIHQgKyAuNzUgKSArIGI7XG5cdGVsc2UgaWYgKCB0IDwgKCAyLjUgLyAyLjc1ICkgKVxuXHRcdHJldHVybiBjICogKCA3LjU2MjUgKiAoIHQgLT0gKCAyLjI1IC8gMi43NSApICkgKiB0ICsgLjkzNzUgKSArIGI7XG5cdGVsc2Vcblx0XHRyZXR1cm4gYyAqICggNy41NjI1ICogKCB0IC09ICggMi42MjUgLyAyLjc1ICkgKSAqIHQgKyAuOTg0Mzc1ICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbkJvdW5jZVxuICovXG5FYXNlLmluQm91bmNlID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjIC0gb3V0Qm91bmNlICggZCAtIHQsIDAsIGMsIGQgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0Qm91bmNlXG4gKi9cbkVhc2UuaW5PdXRCb3VuY2UgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCB0IDwgZCAvIDIgKVxuXHRcdHJldHVybiBpbkJvdW5jZSAoIHQgKiAyLCAwLCBjLCBkICkgKiAuNSArIGI7XG5cdGVsc2Vcblx0XHRyZXR1cm4gb3V0Qm91bmNlICggdCAqIDIgLSBkLCAwLCBjLCBkICkgKiAuNSArIGMgKi41ICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbkNpcmNcbiAqL1xuRWFzZS5pbkNpcmMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIC1jICogKCBNYXRoLnNxcnQoIDEgLSAoIHQgLz0gZCApICogdCApIC0gMSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0Q2lyY1xuICovXG5FYXNlLm91dENpcmMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiBNYXRoLnNxcnQoIDEgLSAoIHQgPSB0IC8gZCAtIDEgKSAqIHQgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0Q2lyY1xuICovXG5FYXNlLmluT3V0Q2lyYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoICggdCAvPSBkIC8gMiApIDwgMSApXG5cdFx0cmV0dXJuIC1jIC8gMiAqICggTWF0aC5zcXJ0KCAxIC0gdCAqIHQgKSAtIDEgKSArIGI7XG5cdHJldHVybiBjIC8gMiAqICggTWF0aC5zcXJ0KCAxIC0gKCB0IC09IDIgKSAqIHQgKSArIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluQ3ViaWNcbiAqL1xuRWFzZS5pbkN1YmljID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogKCB0IC89IGQgKSAqIHQgKiB0ICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0Q3ViaWNcbiAqL1xuRWFzZS5vdXRDdWJpYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqICggKCB0ID0gdCAvIGQgLSAxICkgKiB0ICogdCArIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0Q3ViaWNcbiAqL1xuRWFzZS5pbk91dEN1YmljID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggKCB0IC89IGQgLyAyICkgPCAxIClcblx0XHRyZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKyBiO1xuXHRyZXR1cm4gYyAvIDIgKiAoICggdCAtPSAyICkgKiB0ICogdCArIDIpICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbkVsYXN0aWNcbiAqL1xuRWFzZS5pbkVsYXN0aWMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCB0ID09IDAgKVxuXHRcdHJldHVybiBiO1xuXHRpZiAoICggdCAvPSBkICkgPT0gMSApXG5cdFx0cmV0dXJuIGIgKyBjO1xuXHRcdHZhciBwID0gZCAqIC4zO1xuXHR2YXIgcztcblx0XHR2YXIgYSA9IGM7XG5cdFx0cyA9IHAgLyA0O1xuXG5cdHJldHVybiAtKCBhICogTWF0aC5wb3coIDIsIDEwICogKCB0IC09IDEgKSApICogTWF0aC5zaW4oICggdCAqIGQgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dEVsYXN0aWNcbiAqL1xuRWFzZS5vdXRFbGFzdGljID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggdCA9PSAwIClcblx0XHRyZXR1cm4gYjtcblx0aWYgKCAoIHQgLz0gZCApID09IDEgKVxuXHRcdHJldHVybiBiICsgYztcblx0XHR2YXIgcCA9IGQgKiAuMztcblx0dmFyIHM7XG5cdFx0dmFyIGEgPSBjO1xuXHRcdHMgPSBwIC8gNDtcblxuXHRyZXR1cm4gKCBhICogTWF0aC5wb3coIDIsIC0xMCAqIHQgKSAqIE1hdGguc2luKCAoIHQgKiBkIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICsgYyArIGIgKTtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRFbGFzdGljXG4gKi9cbkVhc2UuaW5PdXRFbGFzdGljID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggdCA9PSAwIClcblx0XHRyZXR1cm4gYjtcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA9PSAyIClcblx0XHRyZXR1cm4gYiArIGM7XG5cdHZhciBzO1xuXHRcdHZhciBwID0gZCAqICggLjMgKiAxLjUgKTtcblx0XHR2YXIgYSA9IGM7XG5cdFx0cyA9cCAvIDQ7XG5cblx0aWYgKCB0IDwgMSApXG5cdFx0cmV0dXJuIC0uNSAqICggYSAqIE1hdGgucG93KCAyLCAxMCAqICggdCAtPSAxICkgKSAqIE1hdGguc2luKCAoIHQgKiBkIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICkgKyBiO1xuXHRyZXR1cm4gYSAqIE1hdGgucG93KCAyLCAtMTAgKiAoIHQgLT0gMSApICkgKiBNYXRoLnNpbiggKCB0ICogZCAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSAqIC41ICsgYyArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5FeHBvXG4gKi9cbkVhc2UuaW5FeHBvID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiAoIHQgPT0gMCApID8gYiA6IGMgKiBNYXRoLnBvdyggMiwgMTAgKiAoIHQgLyBkIC0gMSApICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRFeHBvXG4gKi9cbkVhc2Uub3V0RXhwbyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gKCB0ID09IGQgKSA/IGIgKyBjIDogYyAqICggLU1hdGgucG93KCAyLCAtMTAgKiB0IC8gZCApICsgMSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRFeHBvXG4gKi9cbkVhc2UuaW5PdXRFeHBvID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggdCA9PSAwIClcblx0XHRyZXR1cm4gYjtcblx0aWYgKCB0ID09IGQgKVxuXHRcdHJldHVybiBiICsgYztcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA8IDEgKVxuXHRcdHJldHVybiBjIC8gMiAqIE1hdGgucG93KCAyLCAxMCAqICggdCAtIDEgKSApICsgYjtcblx0cmV0dXJuIGMgLyAyICogKCAtTWF0aC5wb3coIDIsIC0xMCAqIC0tdCApICsgMiApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5RdWFkXG4gKi9cbkVhc2UuaW5RdWFkID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogKCB0IC89IGQgKSAqIHQgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRRdWFkXG4gKi9cbkVhc2Uub3V0UXVhZCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gLWMgKiAoIHQgLz0gZCApICogKCB0IC0gMiApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRRdWFkXG4gKi9cbkVhc2UuaW5PdXRRdWFkID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggKCB0IC89IGQgLyAyICkgPCAxIClcblx0XHRyZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG5cdHJldHVybiAtYyAvIDIgKiAoICggLS10ICkgKiAoIHQgLSAyICkgLSAxICkgKyBiO1xufVxuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluUXVhcnRcbiAqL1xuRWFzZS5pblF1YXJ0ID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogKCB0IC89IGQgKSAqIHQgKiB0ICogdCArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dFF1YXJ0XG4gKi9cbkVhc2Uub3V0UXVhcnQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIC1jICogKCAoIHQgPSB0IC8gZCAtIDEgKSAqIHQgKiB0ICogdCAtIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0UXVhcnRcbiAqL1xuRWFzZS5pbk91dFF1YXJ0ID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggKCB0IC89IGQgLyAyICkgPCAxIClcblx0XHRyZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICsgYjtcblx0cmV0dXJuIC1jIC8gMiAqICggKCB0IC09IDIgKSAqIHQgKiB0ICogdCAtIDIpICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pblF1aW50XG4gKi9cbkVhc2UuaW5RdWludCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqICggdCAvPSBkICkgKiB0ICogdCAqIHQgKiB0ICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0UXVpbnRcbiAqL1xuRWFzZS5vdXRRdWludCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqICggKCB0ID0gdCAvIGQgLSAxICkgKiB0ICogdCAqIHQgKiB0ICsgMSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRRdWludFxuICovXG5FYXNlLmluT3V0UXVpbnQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA8IDEgKVxuXHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKiB0ICsgYjtcblx0cmV0dXJuIGMgLyAyICogKCAoIHQgLT0gMiApICogdCAqIHQgKiB0ICogdCArIDIgKSArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5TaW5lXG4gKi9cbkVhc2UuaW5TaW5lID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiAtYyAqIE1hdGguY29zICggdCAvIGQgKiAoIE1hdGguUEkgLyAyICkgKSArIGMgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRTaW5lXG4gKi9cbkVhc2Uub3V0U2luZSA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqIE1hdGguc2luKCB0IC8gZCAqICggTWF0aC5QSSAvIDIgKSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRTaW5lXG4gKi9cbkVhc2UuaW5PdXRTaW5lID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiAtYyAvIDIgKiAoIE1hdGguY29zKCBNYXRoLlBJICogdCAvIGQgKSAtIDEgKSArIGI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWFzZTtcbiIsInZhciBFYXNlID0gcmVxdWlyZSgnLi9FYXNlJyk7XG5cbi8qKlxuICogVGhlIHR3ZWVuIHBsYXllci4gV2lsbCBjaGFuZ2UgdGFyZ2V0IG9iamVjdCB2YWx1ZXMgd2l0aCBzcGVjaWZpZWQgcGFyYW1ldGVycy5cbiAqIEBjbGFzcyBUd2VlblxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHR3ZWVuZWQuXG4gKi9cbnZhciBUd2VlbiA9IGZ1bmN0aW9uKG9iaikge1xuXHR0aGlzLm5hbWUgPSAnJztcblx0dGhpcy5kZWJ1ZyA9IHRydWU7XG5cdHRoaXMub2JqID0gb2JqO1xuXG5cdHRoaXMuc3RhcnQgPSAwO1xuICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgdGhpcy5zdGF0ZSA9IDA7XG5cbiAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuXG5cdHRoaXMubmV4dCA9IG51bGw7XG5cdHRoaXMucHJldiA9IG51bGw7XG5cdHRoaXMubGFzdCA9IHRoaXM7XG5cdHRoaXMudGltZSA9IDA7XG5cblx0dGhpcy5wYXJhbXNGcm9tID0gbnVsbDtcblx0dGhpcy5wYXJhbXNUbyA9IG51bGw7XG5cdHRoaXMuZWFzZSA9IEVhc2UubGluZWFyO1xuXG5cdHRoaXMub25Db21wbGV0ZSA9IG51bGw7XG59XG5cblR3ZWVuLklETEUgPSAwO1xuVHdlZW4uUlVOTklORyA9IDE7XG5Ud2Vlbi5DT01QTEVURUQgPSAyO1xuXG5Ud2Vlbi5wcm90b3R5cGUuX2FwcGVuZCA9IGZ1bmN0aW9uKG9iaiwgZHVyYXRpb24sIGVhc2UpIHtcblx0dmFyIGxhc3QgPSB0aGlzLmxhc3Q7XG5cdHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmopO1xuXHR0d2Vlbi5zdGFydCA9IGxhc3Quc3RhcnQgKyBsYXN0LmR1cmF0aW9uO1xuICB0d2Vlbi5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDA7XG4gIHR3ZWVuLnN0YXRlID0gMDtcblx0dHdlZW4uZWFzZSA9IGVhc2U7XG5cdHR3ZWVuLnByZXYgPSBsYXN0O1xuXHRsYXN0Lm5leHQgPSB0d2Vlbjtcblx0dGhpcy5sYXN0ID0gdHdlZW47XG5cdHJldHVybiB0d2Vlbjtcbn1cblxuVHdlZW4ucHJvdG90eXBlLl9nZXRMYXN0UGFyYW0gPSBmdW5jdGlvbihmaWVsZCkge1xuXHR2YXIgcmVmID0gdGhpcy5sYXN0LnByZXY7XG5cdHdoaWxlIChyZWYpIHtcblx0XHRpZiAocmVmLm9iaiA9PSB0aGlzLm9iaiAmJiByZWYucGFyYW1zVG8gJiYgcmVmLnBhcmFtc1RvW2ZpZWxkXSAhPSB1bmRlZmluZWQgJiYgcmVmLnBhcmFtc1RvW2ZpZWxkXSAhPSBudWxsKSBicmVhaztcblx0XHRyZWYgPSByZWYucHJldjtcblx0fVxuXHR2YXIgdiA9IHJlZiA/IHJlZi5wYXJhbXNUb1tmaWVsZF0gOiB0aGlzLm9ialtmaWVsZF07XG5cdGNvbnNvbGUubG9nKGZpZWxkLCB2KTtcblx0cmV0dXJuIHY7XG59XG5cbi8qKlxuICogQWRkcyBuZXcgdHdlZW4sIHdpdGggbmV3IHRhcmdldC5cbiAqIEBtZXRob2QgVHdlZW4jYWRkXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHR3ZWVuZWQuXG4gKiBAcmV0dXJucyBUd2VlblxuICovXG5Ud2Vlbi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ob2JqKSB7XG5cdHZhciB0d2VlbiA9IHRoaXMuX2FwcGVuZChvYmosIDAsIEVhc2UubGluZWFyKTtcblx0cmV0dXJuIHR3ZWVuO1xufVxuXG4vKipcbiAqIEFkZCBhIHR3ZWVuIHRoYXQgc3RhcnRzIHdpdGggc3BlY2lmaWVkIHZhbHVlcy5cbiAqIEBtZXRob2QgVHdlZW4jZnJvbVxuICogQHBhcmFtIHByb3BzIHtvYmplY3R9IFZhbHVlcyB0aGF0IHRoZSB0d2VlbiB3aWxsIGNvbWUgZnJvbS5cbiAqIEBwYXJhbSBkdXJhdGlvbiB7ZmxvYXR9IFR3ZWVuJ3MgZHVyYXRpb24uXG4gKiBAcGFyYW0gW2Vhc2VdIHtmdW5jdGlvbn0gVHdlZW4ncyBlYXNpbmcgY3VydmUuXG4gKiBAcmV0dXJucyBUd2VlblxuICovXG5Ud2Vlbi5wcm90b3R5cGUuZnJvbSA9IGZ1bmN0aW9uKHByb3BzLCBkdXJhdGlvbiwgZWFzZSkge1xuXHR2YXIgdHdlZW4gPSB0aGlzLl9hcHBlbmQodGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlKTtcblx0dHdlZW4ubmFtZSA9ICdmcm9tJztcblx0dHdlZW4ucGFyYW1zRnJvbSA9IHByb3BzO1xuXHR0d2Vlbi5wYXJhbXNUbyA9IHt9O1xuXHRmb3IgKHZhciBmIGluIHByb3BzKSB7XG5cdFx0dHdlZW4ucGFyYW1zVG9bZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQWRkIGEgdHdlZW4gdGhhdCBlbmRzIHdpdGggc3BlY2lmaWVkIHZhbHVlcy5cbiAqIEBtZXRob2QgVHdlZW4jdG9cbiAqIEBwYXJhbSBwcm9wcyB7b2JqZWN0fSBWYWx1ZXMgdGhhdCB0aGUgdHdlZW4gd2lsbCBnbyB0by5cbiAqIEBwYXJhbSBkdXJhdGlvbiB7ZmxvYXR9IFR3ZWVuJ3MgZHVyYXRpb24uXG4gKiBAcGFyYW0gW2Vhc2VdIHtmdW5jdGlvbn0gVHdlZW4ncyBlYXNpbmcgY3VydmUuXG4gKiBAcmV0dXJucyBUd2VlblxuICovXG5Ud2Vlbi5wcm90b3R5cGUudG8gPSBmdW5jdGlvbihwcm9wcywgZHVyYXRpb24sIGVhc2UpIHtcblx0dmFyIHR3ZWVuID0gdGhpcy5fYXBwZW5kKHRoaXMub2JqLCBkdXJhdGlvbiwgZWFzZSk7XG5cdHR3ZWVuLm5hbWUgPSAndG8nO1xuXHR0d2Vlbi5wYXJhbXNUbyA9IHByb3BzO1xuXHR0d2Vlbi5wYXJhbXNGcm9tID0ge307XG5cdGZvciAodmFyIGYgaW4gcHJvcHMpIHtcblx0XHR0d2Vlbi5wYXJhbXNGcm9tW2ZdID0gdGhpcy5fZ2V0TGFzdFBhcmFtKGYpO1xuXHR9XG5cdGNvbnNvbGUubG9nKCctLS0tJyk7XG5cdHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIEhvbGQgdGhlIHR3ZWVuIGZvciBhIHdoaWxlIGJlZm9yZSBuZXh0IGNvbW1hbmRzLlxuICogQG1ldGhvZCBUd2VlbiN3YWl0XG4gKiBAcGFyYW0gZHVyYXRpb24ge2Zsb2F0fSBUaW1lIHRvIHdhaXQuXG4gKiBAcmV0dXJucyBUd2VlblxuICovXG5Ud2Vlbi5wcm90b3R5cGUud2FpdCA9IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XG5cdHZhciB0d2VlbiA9IHRoaXMuX2FwcGVuZCh0aGlzLm9iaiwgZHVyYXRpb24sIG51bGwpO1xuXHR0d2Vlbi5uYW1lID0gJ3dhaXQnO1xuXHR0d2Vlbi5wYXJhbXNGcm9tID0gdHdlZW4ucHJldi5wYXJhbXNGcm9tO1xuXHR0d2Vlbi5wYXJhbXNUbyA9IHR3ZWVuLnByZXYucGFyYW1zVG87XG5cdHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFNldCBhIGNhbGxiYWNrIHdoZW4gdGhlIHByZXZpb3VzIGNvbW1hbmRzIGFyZSBjb21wbGV0ZWQuXG4gKiBAbWV0aG9kIFR3ZWVuI3RoZW5cbiAqIEBwYXJhbSBjYWxsYmFjayB7ZnVuY3Rpb259IE1ldGhvZCB0aGEgd2lsbCBiZSBleGVjdXRlZCBhcyBjYWxsYmFjay5cbiAqIEByZXR1cm5zIFR3ZWVuXG4gKi9cblR3ZWVuLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0dGhpcy5sYXN0Lm9uQ29tcGxldGUgPSBjYWxsYmFjaztcblx0cmV0dXJuIHRoaXM7XG59XG5cblR3ZWVuLnByb3RvdHlwZS5zZXRUaW1lID0gZnVuY3Rpb24odmFsdWUpIHtcblx0dGhpcy50aW1lID0gdmFsdWU7XG5cdGlmICh0aGlzLm5leHQpIHRoaXMubmV4dC5zZXRUaW1lKHZhbHVlKTtcbn1cblxuVHdlZW4ucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMudGltZTtcbn1cblxuVHdlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XG5cdHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcblxuXHRpZiAoZGVsdGEpIHRoaXMudGltZSArPSBkZWx0YTtcblxuXHR2YXIgdXBkYXRlVGltZSA9IDA7XG5cblx0aWYgKHRoaXMudGltZSA8IHRoaXMuc3RhcnQpIHtcbiAgICB0aGlzLnN0YXRlID0gVHdlZW4uSURMRTtcbiAgICB1cGRhdGVUaW1lID0gMDtcbiAgfSBlbHNlIGlmICh0aGlzLnRpbWUgPj0gdGhpcy5zdGFydCArIHRoaXMuZHVyYXRpb24pIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PSBUd2Vlbi5SVU5OSU5HKSB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZSA9IFR3ZWVuLkNPTVBMRVRFRDtcbiAgICB1cGRhdGVUaW1lID0gdGhpcy5kdXJhdGlvbjtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PSBUd2Vlbi5JRExFKSB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGUgPSAxO1xuXHRcdHVwZGF0ZVRpbWUgPSB0aGlzLnRpbWUgLSB0aGlzLnN0YXJ0O1xuICAgIHRoaXMudXBkYXRlZCA9IHRydWU7XG4gIH1cblxuXHRpZiAodGhpcy5zdGFydGVkKSB7XG5cdFx0aWYgKHRoaXMuZGVidWcpIHRoaXMubG9nKCdzdGFydGVkJyk7XG5cdFx0dGhpcy51cGRhdGVQcm9wcyh1cGRhdGVUaW1lKTtcblx0fVxuXG5cdGlmICh0aGlzLnVwZGF0ZWQpIHtcblx0XHR0aGlzLnVwZGF0ZVByb3BzKHVwZGF0ZVRpbWUpO1xuXHR9XG5cblx0aWYgKHRoaXMuY29tcGxldGVkKSB7XG5cdFx0aWYgKHRoaXMuZGVidWcpIHRoaXMubG9nKCdjb21wbGV0ZWQnKTtcblx0XHR0aGlzLnVwZGF0ZVByb3BzKHVwZGF0ZVRpbWUpO1xuXHRcdGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuXHR9XG5cblx0aWYgKHRoaXMubmV4dCkgdGhpcy5uZXh0LnVwZGF0ZShkZWx0YSk7XG59XG5cblR3ZWVuLnByb3RvdHlwZS51cGRhdGVQcm9wcyA9IGZ1bmN0aW9uKHRpbWUpIHtcblx0aWYgKCF0aGlzLmVhc2UpIHJldHVybjtcblx0dmFyIHJhdGlvID0gdGhpcy5lYXNlKHRpbWUsIDAsIDEsIHRoaXMuZHVyYXRpb24pO1xuXHRmb3IgKHZhciBmIGluIHRoaXMucGFyYW1zVG8pIHtcblx0XHR2YXIgdmYgPSB0aGlzLnBhcmFtc0Zyb21bZl07XG5cdFx0dmFyIHZ0ID0gdGhpcy5wYXJhbXNUb1tmXTtcblx0XHR2YXIgdmMgPSB2ZiArICh2dCAtIHZmKSpyYXRpbztcblx0XHR0aGlzLm9ialtmXSA9IHZjO1xuXHR9XG59XG5cblR3ZWVuLnByb3RvdHlwZS5maW5pc2hlZCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgciA9IHRoaXMuc3RhdGUgPT0gVHdlZW4uQ09NUExFVEVEO1xuXHRpZiAociAmJiB0aGlzLm5leHQpIHIgPSB0aGlzLm5leHQuZmluaXNoZWQoKTtcblx0cmV0dXJuIHI7XG59XG5cblR3ZWVuLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLm5leHQpIHRoaXMubmV4dC5kaXNwb3NlKCk7XG5cdGlmICh0aGlzLmRlYnVnKSB0aGlzLmxvZygnZGlzcG9zZWQhJyk7XG5cdHRoaXMubmV4dCA9IG51bGw7XG5cdHRoaXMucHJldiA9IG51bGw7XG5cdHRoaXMubGFzdCA9IG51bGw7XG5cdHRoaXMucGFyYW1zRnJvbSA9IG51bGw7XG5cdHRoaXMucGFyYW1zVG8gPSBudWxsO1xuXHR0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24obXNnKSB7XG5cdGNvbnNvbGUubG9nKHRoaXMub2JqLm5hbWUsIHRoaXMubmFtZSwgbXNnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbjtcbiIsInZhciBUd2VlbiA9IHJlcXVpcmUoJy4vVHdlZW4nKTtcbnZhciBFYXNlID0gcmVxdWlyZSgnLi9FYXNlJyk7XG5cbi8qKlxuICogQSB0d2VlbiBtYW5hZ2VyLiBEZWFscyB3aXRoIHR3ZWVuIGNyZWF0aW9uLCB1cGRhdGUgYW5kIGRlc3RydWN0aW9uLlxuICogQGNsYXNzIFR3ZWVuZXJcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIFthdXRvVXBkYXRlUmF0ZV0ge2Zsb2F0fSBJbnRlcnZhbCAoaW4gc2Vjb25kcykgdGhhdCBhbGwgdHdlZW5zIHdpbGwgYmUgdXBkYXRlZC4gSWYgMCwgdGhlIGF1dG8tdXBkYXRlIHdpbGwgbm90XG4gKiBydW4sIHNvIHlvdSBtdXN0IGhhbmRsZSB0aGUgdXBkYXRlIG1hbnVhbGx5LiBEZWZhdWx0IGlzIDAuXG4gKi9cbnZhciBUd2VlbmVyID0gZnVuY3Rpb24oYXV0b1VwZGF0ZVJhdGUpXG57XG5cdHRoaXMudHdlZW5zID0gW107XG5cdHRoaXMuX2ludGVydmFsID0gbnVsbDtcblx0aWYgKGF1dG9VcGRhdGVSYXRlID4gMCkgdGhpcy5lbmFibGVBdXRvVXBkYXRlKGF1dG9VcGRhdGVSYXRlKTtcbn1cblxud2luZG93LlR3ZWVuZXIgPSBUd2VlbmVyO1xud2luZG93LlR3ZWVuID0gVHdlZW47XG53aW5kb3cuRWFzZSA9IEVhc2U7XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBUd2VlbiBpbnN0YW5jZSB3aXRoIHJlZmVyZW5jZWQgb2JqZWN0LlxuICogQG1ldGhvZCBUd2VlbmVyI2FkZFxuICogQHBhcmFtIG9iaiB7b2JqZWN0fSBUaGUgb2JqZWN0IHRoYXQgd2lsbCBiZSB0d2VlbmVkLlxuICovXG5Ud2VlbmVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihvYmosIG5hbWUpIHtcblx0dmFyIHR3ZWVuID0gbmV3IFR3ZWVuKG9iaiwgbmFtZSk7XG5cdHRoaXMudHdlZW5zLnB1c2godHdlZW4pO1xuXHRyZXR1cm4gdHdlZW47XG59XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0d2VlbiBpbnN0YW5jZXMgdGhhdCBoYXZlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0LlxuICogQG1ldGhvZCBUd2VlbmVyI3JlbW92ZVxuICogQHBhcmFtIG9iaiB7b2JqZWN0fSBUaGUgdHdlZW5lZCBvYmplY3QuXG4gKi9cblR3ZWVuZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKG9iailcbntcblx0dmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pIHtcblx0XHR2YXIgdCA9IHRoaXMudHdlZW5zW2ldO1xuXHRcdGlmICh0Lm9iaiA9PT0gb2JqKSB0aGlzLl9kZXN0cm95KHQsIGkpO1xuXHR9XG59XG5cbi8qKlxuICogUnVucyB0aGUgdXBkYXRlIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICogQG1ldGhvZCBUd2VlbmVyI2VuYWJsZUF1dG9VcGRhdGVcbiAqIEBwYXJhbSByYXRlIHtmbG9hdH0gSW50ZXJ2YWwgKGluIHNlY29uZHMpIHRoYXQgdGhlIHVwZGF0ZSB3aWxsIGJlIHBsYXllZC5cbiAqIElmIDAgb3IgbG93ZXIsIHRoZSBhdXRvbWF0aWMgdXBkYXRlIHdpbGwgYmUgZGlzYWJsZWQuXG4gKi9cblR3ZWVuZXIucHJvdG90eXBlLmVuYWJsZUF1dG9VcGRhdGUgPSBmdW5jdGlvbihyYXRlKSB7XG5cdGlmICghcmF0ZSkge1xuXHRcdHRoaXMuZGlzYWJsZUF1dG9VcGRhdGUoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHZhciB0aW1lID0gc2VsZi5nZXRUaW1lKCk7XG5cdHNlbGYuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHQgPSBzZWxmLmdldFRpbWUoKTtcblx0XHR2YXIgZCA9IHQgLSB0aW1lO1xuXHRcdHRpbWUgPSB0O1xuXHRcdHNlbGYudXBkYXRlKGQpO1xuXHR9LCByYXRlKjEwMDApO1xufVxuXG4vKipcbiAqIFN0b3BzIHRoZSBhdXRvbWF0aWMgdXBkYXRlLlxuICogQG1ldGhvZCBUd2VlbmVyI2Rpc2FibGVBdXRvVXBkYXRlXG4gKi9cblR3ZWVuZXIucHJvdG90eXBlLmRpc2FibGVBdXRvVXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbGwgdHdlZW5zLlxuICogQG1ldGhvZCBUd2VlbmVyI3VwZGF0ZVxuICogQHBhcmFtIGRlbHRhIHtmbG9hdH0gVGhlIGVsYXBzZWQgdGltZSAoaW4gc2Vjb25kcykgc2luY2UgbGFzdCB1cGRhdGUuXG4gKi9cblR3ZWVuZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XG5cdHZhciBpID0gdGhpcy50d2VlbnMubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcblx0XHR0LnVwZGF0ZShkZWx0YSk7XG5cdFx0aWYgKHQuZmluaXNoZWQoKSkgdGhpcy5fZGVzdHJveSh0LCBpKTtcblx0fVxufVxuXG5cblR3ZWVuZXIucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24odHdlZW4sIGluZGV4KSB7XG5cdGlmIChpbmRleCA9PSB1bmRlZmluZWQpIGluZGV4ID0gdGhpcy50d2Vlbi5pbmRleE9mKHR3ZWVuKTtcblx0dGhpcy50d2VlbnMuc3BsaWNlKGluZGV4LCAxKTtcblx0dHdlZW4uZGlzcG9zZSgpO1xufVxuXG5Ud2VlbmVyLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKS8xMDAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuZXI7XG4iXX0=
