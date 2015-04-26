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

var Tween = function(obj) {
	this.name = '';
	this.debug = true;
	this.obj = obj;

	this.start = 0;
  this.end = 0;
  this.duration = 0;
  this.state = 0;
  this.current = 0;

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

	this._onComplete = null;
}

Tween.IDLE = 0;
Tween.RUNNING = 1;
Tween.COMPLETED = 2;

Tween.prototype._append = function(obj, duration, ease) {
	var last = this.last;
	var tween = new Tween(obj);
	tween.start = last.end;
  tween.duration = duration || 0;
  tween.end = tween.start + tween.duration;
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

Tween.prototype.add = function(obj) {
	var tween = this._append(obj, 0, Ease.linear);
	return tween;
}

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

Tween.prototype.wait = function(time) {
	var tween = this._append(this.obj, time, null);
	tween.name = 'wait';
	tween.paramsFrom = tween.prev.paramsFrom;
	tween.paramsTo = tween.prev.paramsTo;
	return this;
}

Tween.prototype.then = function(callback) {
	this.last._onComplete = callback;
	return this;
}

Tween.prototype.setTime = function(value) {
	this.time = value;
	if (this.next) this.next.setTime(value);
}

Tween.prototype.getTime = function() {
	return this.time;
}

Tween.prototype.update = function(delta)
{
	this.started = false;
  this.updated = false;
  this.completed = false;

	if (delta) this.time += delta;

	if (this.time < this.start) {
    this.state = Tween.IDLE;
    this.current = 0;
  } else if (this.time >= this.end) {
    if (this.state == Tween.RUNNING) this.completed = true;
    this.state = Tween.COMPLETED;
    this.current = this.duration;
  } else {
    if (this.state == Tween.IDLE) this.started = true;
    this.state = 1;
    this.current = this.time - this.start;
    this.updated = true;
  }

	if (this.started) {
		if (this.debug) this.log('started');
		this.updateProps();
		if (this.onStart) this.onStart();
	}

	if (this.updated) {
		this.updateProps();
	}

	if (this.completed) {
		if (this.debug) this.log('completed');
		this.updateProps();
		if (this._onComplete) this._onComplete();
	}

	if (this.next) this.next.update(delta);
}

Tween.prototype.updateProps = function() {
	if (!this.ease) return;

	var ratio = this.ease(this.current, 0, 1, this.duration);
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
	this.paramsFrom = null;
	this.paramsTo = null;
	this._onComplete = null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF1cm9kZXRhcnNvL1NpdGVzL0xpYnMvdHdlZW5lci9zb3VyY2UvRWFzZS5qcyIsIi9Vc2Vycy9tYXVyb2RldGFyc28vU2l0ZXMvTGlicy90d2VlbmVyL3NvdXJjZS9Ud2Vlbi5qcyIsIi9Vc2Vycy9tYXVyb2RldGFyc28vU2l0ZXMvTGlicy90d2VlbmVyL3NvdXJjZS90d2VlbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogU3RhdGljIGN1cnZlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBhIHR3ZWVuLlxuICogQGNsYXNzIEVhc2VcbiAqL1xuXG52YXIgRWFzZSA9IHt9O1xuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmxpbmVhclxuICovXG5FYXNlLmxpbmVhciA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqIHQgLyBkICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbkJhY2tcbiAqL1xuRWFzZS5pbkJhY2sgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0dmFyIHMgPSAxLjcwMTU4O1xuXHRyZXR1cm4gYyAqICggdCAvPSBkICkgKiB0ICogKCAoIHMgKyAxICkgKiB0IC0gcyApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0QmFja1xuICovXG5FYXNlLm91dEJhY2sgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0dmFyIHMgPSAxLjcwMTU4O1xuXHRyZXR1cm4gYyAqICggKCB0ID0gdCAvIGQgLSAxICkgKiB0ICogKCAoIHMgKyAxICkgKiB0ICsgcykgKyAxICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dEJhY2tcbiAqL1xuRWFzZS5pbk91dEJhY2sgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0dmFyIHMgPSAxLjcwMTU4O1xuXHRpZiAoICggdCAvPSBkIC8gMiApIDwgMSApXG5cdFx0cmV0dXJuIGMgLyAyICogKCB0ICogdCAqICggKCAoIHMgKj0gKCAxLjUyNSApICkgKyAxICkgKiB0IC0gcyApICkgKyBiO1xuXHRyZXR1cm4gYyAvIDIgKiAoICggdCAtPSAyICkgKiB0ICogKCAoICggcyAqPSAoIDEuNTI1ICkgKSArIDEgKSAqIHQgKyBzICkgKyAyICkgKyBiO1xufVxuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dEJvdW5jZVxuICovXG5FYXNlLm91dEJvdW5jZSA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoICggdCAvPSBkICkgPCAoIDEgLyAyLjc1ICkgKVxuXHRcdHJldHVybiBjICogKCA3LjU2MjUgKiB0ICogdCApICsgYjtcblx0ZWxzZSBpZiAoIHQgPCAoIDIgLyAyLjc1ICkgKVxuXHRcdHJldHVybiBjICogKCA3LjU2MjUgKiAoIHQgLT0gKCAxLjUgLyAyLjc1ICkgKSAqIHQgKyAuNzUgKSArIGI7XG5cdGVsc2UgaWYgKCB0IDwgKCAyLjUgLyAyLjc1ICkgKVxuXHRcdHJldHVybiBjICogKCA3LjU2MjUgKiAoIHQgLT0gKCAyLjI1IC8gMi43NSApICkgKiB0ICsgLjkzNzUgKSArIGI7XG5cdGVsc2Vcblx0XHRyZXR1cm4gYyAqICggNy41NjI1ICogKCB0IC09ICggMi42MjUgLyAyLjc1ICkgKSAqIHQgKyAuOTg0Mzc1ICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbkJvdW5jZVxuICovXG5FYXNlLmluQm91bmNlID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjIC0gb3V0Qm91bmNlICggZCAtIHQsIDAsIGMsIGQgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0Qm91bmNlXG4gKi9cbkVhc2UuaW5PdXRCb3VuY2UgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCB0IDwgZCAvIDIgKVxuXHRcdHJldHVybiBpbkJvdW5jZSAoIHQgKiAyLCAwLCBjLCBkICkgKiAuNSArIGI7XG5cdGVsc2Vcblx0XHRyZXR1cm4gb3V0Qm91bmNlICggdCAqIDIgLSBkLCAwLCBjLCBkICkgKiAuNSArIGMgKi41ICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbkNpcmNcbiAqL1xuRWFzZS5pbkNpcmMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIC1jICogKCBNYXRoLnNxcnQoIDEgLSAoIHQgLz0gZCApICogdCApIC0gMSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0Q2lyY1xuICovXG5FYXNlLm91dENpcmMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiBNYXRoLnNxcnQoIDEgLSAoIHQgPSB0IC8gZCAtIDEgKSAqIHQgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0Q2lyY1xuICovXG5FYXNlLmluT3V0Q2lyYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoICggdCAvPSBkIC8gMiApIDwgMSApXG5cdFx0cmV0dXJuIC1jIC8gMiAqICggTWF0aC5zcXJ0KCAxIC0gdCAqIHQgKSAtIDEgKSArIGI7XG5cdHJldHVybiBjIC8gMiAqICggTWF0aC5zcXJ0KCAxIC0gKCB0IC09IDIgKSAqIHQgKSArIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluQ3ViaWNcbiAqL1xuRWFzZS5pbkN1YmljID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogKCB0IC89IGQgKSAqIHQgKiB0ICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0Q3ViaWNcbiAqL1xuRWFzZS5vdXRDdWJpYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqICggKCB0ID0gdCAvIGQgLSAxICkgKiB0ICogdCArIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0Q3ViaWNcbiAqL1xuRWFzZS5pbk91dEN1YmljID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggKCB0IC89IGQgLyAyICkgPCAxIClcblx0XHRyZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKyBiO1xuXHRyZXR1cm4gYyAvIDIgKiAoICggdCAtPSAyICkgKiB0ICogdCArIDIpICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbkVsYXN0aWNcbiAqL1xuRWFzZS5pbkVsYXN0aWMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCB0ID09IDAgKVxuXHRcdHJldHVybiBiO1xuXHRpZiAoICggdCAvPSBkICkgPT0gMSApXG5cdFx0cmV0dXJuIGIgKyBjO1xuXHRcdHZhciBwID0gZCAqIC4zO1xuXHR2YXIgcztcblx0XHR2YXIgYSA9IGM7XG5cdFx0cyA9IHAgLyA0O1xuXG5cdHJldHVybiAtKCBhICogTWF0aC5wb3coIDIsIDEwICogKCB0IC09IDEgKSApICogTWF0aC5zaW4oICggdCAqIGQgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dEVsYXN0aWNcbiAqL1xuRWFzZS5vdXRFbGFzdGljID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggdCA9PSAwIClcblx0XHRyZXR1cm4gYjtcblx0aWYgKCAoIHQgLz0gZCApID09IDEgKVxuXHRcdHJldHVybiBiICsgYztcblx0XHR2YXIgcCA9IGQgKiAuMztcblx0dmFyIHM7XG5cdFx0dmFyIGEgPSBjO1xuXHRcdHMgPSBwIC8gNDtcblxuXHRyZXR1cm4gKCBhICogTWF0aC5wb3coIDIsIC0xMCAqIHQgKSAqIE1hdGguc2luKCAoIHQgKiBkIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICsgYyArIGIgKTtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRFbGFzdGljXG4gKi9cbkVhc2UuaW5PdXRFbGFzdGljID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggdCA9PSAwIClcblx0XHRyZXR1cm4gYjtcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA9PSAyIClcblx0XHRyZXR1cm4gYiArIGM7XG5cdHZhciBzO1xuXHRcdHZhciBwID0gZCAqICggLjMgKiAxLjUgKTtcblx0XHR2YXIgYSA9IGM7XG5cdFx0cyA9cCAvIDQ7XG5cblx0aWYgKCB0IDwgMSApXG5cdFx0cmV0dXJuIC0uNSAqICggYSAqIE1hdGgucG93KCAyLCAxMCAqICggdCAtPSAxICkgKSAqIE1hdGguc2luKCAoIHQgKiBkIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICkgKyBiO1xuXHRyZXR1cm4gYSAqIE1hdGgucG93KCAyLCAtMTAgKiAoIHQgLT0gMSApICkgKiBNYXRoLnNpbiggKCB0ICogZCAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSAqIC41ICsgYyArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5FeHBvXG4gKi9cbkVhc2UuaW5FeHBvID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiAoIHQgPT0gMCApID8gYiA6IGMgKiBNYXRoLnBvdyggMiwgMTAgKiAoIHQgLyBkIC0gMSApICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRFeHBvXG4gKi9cbkVhc2Uub3V0RXhwbyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gKCB0ID09IGQgKSA/IGIgKyBjIDogYyAqICggLU1hdGgucG93KCAyLCAtMTAgKiB0IC8gZCApICsgMSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRFeHBvXG4gKi9cbkVhc2UuaW5PdXRFeHBvID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggdCA9PSAwIClcblx0XHRyZXR1cm4gYjtcblx0aWYgKCB0ID09IGQgKVxuXHRcdHJldHVybiBiICsgYztcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA8IDEgKVxuXHRcdHJldHVybiBjIC8gMiAqIE1hdGgucG93KCAyLCAxMCAqICggdCAtIDEgKSApICsgYjtcblx0cmV0dXJuIGMgLyAyICogKCAtTWF0aC5wb3coIDIsIC0xMCAqIC0tdCApICsgMiApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5RdWFkXG4gKi9cbkVhc2UuaW5RdWFkID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogKCB0IC89IGQgKSAqIHQgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRRdWFkXG4gKi9cbkVhc2Uub3V0UXVhZCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gLWMgKiAoIHQgLz0gZCApICogKCB0IC0gMiApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRRdWFkXG4gKi9cbkVhc2UuaW5PdXRRdWFkID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggKCB0IC89IGQgLyAyICkgPCAxIClcblx0XHRyZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG5cdHJldHVybiAtYyAvIDIgKiAoICggLS10ICkgKiAoIHQgLSAyICkgLSAxICkgKyBiO1xufVxuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluUXVhcnRcbiAqL1xuRWFzZS5pblF1YXJ0ID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogKCB0IC89IGQgKSAqIHQgKiB0ICogdCArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dFF1YXJ0XG4gKi9cbkVhc2Uub3V0UXVhcnQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIC1jICogKCAoIHQgPSB0IC8gZCAtIDEgKSAqIHQgKiB0ICogdCAtIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0UXVhcnRcbiAqL1xuRWFzZS5pbk91dFF1YXJ0ID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggKCB0IC89IGQgLyAyICkgPCAxIClcblx0XHRyZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICsgYjtcblx0cmV0dXJuIC1jIC8gMiAqICggKCB0IC09IDIgKSAqIHQgKiB0ICogdCAtIDIpICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pblF1aW50XG4gKi9cbkVhc2UuaW5RdWludCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqICggdCAvPSBkICkgKiB0ICogdCAqIHQgKiB0ICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0UXVpbnRcbiAqL1xuRWFzZS5vdXRRdWludCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqICggKCB0ID0gdCAvIGQgLSAxICkgKiB0ICogdCAqIHQgKiB0ICsgMSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRRdWludFxuICovXG5FYXNlLmluT3V0UXVpbnQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA8IDEgKVxuXHRcdHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKiB0ICsgYjtcblx0cmV0dXJuIGMgLyAyICogKCAoIHQgLT0gMiApICogdCAqIHQgKiB0ICogdCArIDIgKSArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5TaW5lXG4gKi9cbkVhc2UuaW5TaW5lID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiAtYyAqIE1hdGguY29zICggdCAvIGQgKiAoIE1hdGguUEkgLyAyICkgKSArIGMgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRTaW5lXG4gKi9cbkVhc2Uub3V0U2luZSA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqIE1hdGguc2luKCB0IC8gZCAqICggTWF0aC5QSSAvIDIgKSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRTaW5lXG4gKi9cbkVhc2UuaW5PdXRTaW5lID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiAtYyAvIDIgKiAoIE1hdGguY29zKCBNYXRoLlBJICogdCAvIGQgKSAtIDEgKSArIGI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWFzZTtcbiIsInZhciBFYXNlID0gcmVxdWlyZSgnLi9FYXNlJyk7XG5cbnZhciBUd2VlbiA9IGZ1bmN0aW9uKG9iaikge1xuXHR0aGlzLm5hbWUgPSAnJztcblx0dGhpcy5kZWJ1ZyA9IHRydWU7XG5cdHRoaXMub2JqID0gb2JqO1xuXG5cdHRoaXMuc3RhcnQgPSAwO1xuICB0aGlzLmVuZCA9IDA7XG4gIHRoaXMuZHVyYXRpb24gPSAwO1xuICB0aGlzLnN0YXRlID0gMDtcbiAgdGhpcy5jdXJyZW50ID0gMDtcblxuICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG5cblx0dGhpcy5uZXh0ID0gbnVsbDtcblx0dGhpcy5wcmV2ID0gbnVsbDtcblx0dGhpcy5sYXN0ID0gdGhpcztcblx0dGhpcy50aW1lID0gMDtcblxuXHR0aGlzLnBhcmFtc0Zyb20gPSBudWxsO1xuXHR0aGlzLnBhcmFtc1RvID0gbnVsbDtcblx0dGhpcy5lYXNlID0gRWFzZS5saW5lYXI7XG5cblx0dGhpcy5fb25Db21wbGV0ZSA9IG51bGw7XG59XG5cblR3ZWVuLklETEUgPSAwO1xuVHdlZW4uUlVOTklORyA9IDE7XG5Ud2Vlbi5DT01QTEVURUQgPSAyO1xuXG5Ud2Vlbi5wcm90b3R5cGUuX2FwcGVuZCA9IGZ1bmN0aW9uKG9iaiwgZHVyYXRpb24sIGVhc2UpIHtcblx0dmFyIGxhc3QgPSB0aGlzLmxhc3Q7XG5cdHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmopO1xuXHR0d2Vlbi5zdGFydCA9IGxhc3QuZW5kO1xuICB0d2Vlbi5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDA7XG4gIHR3ZWVuLmVuZCA9IHR3ZWVuLnN0YXJ0ICsgdHdlZW4uZHVyYXRpb247XG4gIHR3ZWVuLnN0YXRlID0gMDtcblx0dHdlZW4uZWFzZSA9IGVhc2U7XG5cdHR3ZWVuLnByZXYgPSBsYXN0O1xuXHRsYXN0Lm5leHQgPSB0d2Vlbjtcblx0dGhpcy5sYXN0ID0gdHdlZW47XG5cdHJldHVybiB0d2Vlbjtcbn1cblxuVHdlZW4ucHJvdG90eXBlLl9nZXRMYXN0UGFyYW0gPSBmdW5jdGlvbihmaWVsZCkge1xuXHR2YXIgcmVmID0gdGhpcy5sYXN0LnByZXY7XG5cdHdoaWxlIChyZWYpIHtcblx0XHRpZiAocmVmLm9iaiA9PSB0aGlzLm9iaiAmJiByZWYucGFyYW1zVG8pIGJyZWFrO1xuXHRcdHJlZiA9IHJlZi5wcmV2O1xuXHR9XG5cdHZhciB2ID0gcmVmID8gcmVmLnBhcmFtc1RvW2ZpZWxkXSA6IHRoaXMub2JqW2ZpZWxkXTtcblx0cmV0dXJuIHY7XG59XG5cblR3ZWVuLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihvYmopIHtcblx0dmFyIHR3ZWVuID0gdGhpcy5fYXBwZW5kKG9iaiwgMCwgRWFzZS5saW5lYXIpO1xuXHRyZXR1cm4gdHdlZW47XG59XG5cblR3ZWVuLnByb3RvdHlwZS5mcm9tID0gZnVuY3Rpb24ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG5cdHZhciB0d2VlbiA9IHRoaXMuX2FwcGVuZCh0aGlzLm9iaiwgZHVyYXRpb24sIGVhc2UpO1xuXHR0d2Vlbi5uYW1lID0gJ2Zyb20nO1xuXHR0d2Vlbi5wYXJhbXNGcm9tID0gcHJvcHM7XG5cdHR3ZWVuLnBhcmFtc1RvID0ge307XG5cdGZvciAodmFyIGYgaW4gcHJvcHMpIHtcblx0XHR0d2Vlbi5wYXJhbXNUb1tmXSA9IHRoaXMuX2dldExhc3RQYXJhbShmKTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn1cblxuVHdlZW4ucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG5cdHZhciB0d2VlbiA9IHRoaXMuX2FwcGVuZCh0aGlzLm9iaiwgZHVyYXRpb24sIGVhc2UpO1xuXHR0d2Vlbi5uYW1lID0gJ3RvJztcblx0dHdlZW4ucGFyYW1zVG8gPSBwcm9wcztcblx0dHdlZW4ucGFyYW1zRnJvbSA9IHt9O1xuXHRmb3IgKHZhciBmIGluIHByb3BzKSB7XG5cdFx0dHdlZW4ucGFyYW1zRnJvbVtmXSA9IHRoaXMuX2dldExhc3RQYXJhbShmKTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn1cblxuVHdlZW4ucHJvdG90eXBlLndhaXQgPSBmdW5jdGlvbih0aW1lKSB7XG5cdHZhciB0d2VlbiA9IHRoaXMuX2FwcGVuZCh0aGlzLm9iaiwgdGltZSwgbnVsbCk7XG5cdHR3ZWVuLm5hbWUgPSAnd2FpdCc7XG5cdHR3ZWVuLnBhcmFtc0Zyb20gPSB0d2Vlbi5wcmV2LnBhcmFtc0Zyb207XG5cdHR3ZWVuLnBhcmFtc1RvID0gdHdlZW4ucHJldi5wYXJhbXNUbztcblx0cmV0dXJuIHRoaXM7XG59XG5cblR3ZWVuLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0dGhpcy5sYXN0Ll9vbkNvbXBsZXRlID0gY2FsbGJhY2s7XG5cdHJldHVybiB0aGlzO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUuc2V0VGltZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHRoaXMudGltZSA9IHZhbHVlO1xuXHRpZiAodGhpcy5uZXh0KSB0aGlzLm5leHQuc2V0VGltZSh2YWx1ZSk7XG59XG5cblR3ZWVuLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnRpbWU7XG59XG5cblR3ZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkZWx0YSlcbntcblx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG4gIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuXG5cdGlmIChkZWx0YSkgdGhpcy50aW1lICs9IGRlbHRhO1xuXG5cdGlmICh0aGlzLnRpbWUgPCB0aGlzLnN0YXJ0KSB7XG4gICAgdGhpcy5zdGF0ZSA9IFR3ZWVuLklETEU7XG4gICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgfSBlbHNlIGlmICh0aGlzLnRpbWUgPj0gdGhpcy5lbmQpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PSBUd2Vlbi5SVU5OSU5HKSB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZSA9IFR3ZWVuLkNPTVBMRVRFRDtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmR1cmF0aW9uO1xuICB9IGVsc2Uge1xuICAgIGlmICh0aGlzLnN0YXRlID09IFR3ZWVuLklETEUpIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZSA9IDE7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy50aW1lIC0gdGhpcy5zdGFydDtcbiAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICB9XG5cblx0aWYgKHRoaXMuc3RhcnRlZCkge1xuXHRcdGlmICh0aGlzLmRlYnVnKSB0aGlzLmxvZygnc3RhcnRlZCcpO1xuXHRcdHRoaXMudXBkYXRlUHJvcHMoKTtcblx0XHRpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcblx0fVxuXG5cdGlmICh0aGlzLnVwZGF0ZWQpIHtcblx0XHR0aGlzLnVwZGF0ZVByb3BzKCk7XG5cdH1cblxuXHRpZiAodGhpcy5jb21wbGV0ZWQpIHtcblx0XHRpZiAodGhpcy5kZWJ1ZykgdGhpcy5sb2coJ2NvbXBsZXRlZCcpO1xuXHRcdHRoaXMudXBkYXRlUHJvcHMoKTtcblx0XHRpZiAodGhpcy5fb25Db21wbGV0ZSkgdGhpcy5fb25Db21wbGV0ZSgpO1xuXHR9XG5cblx0aWYgKHRoaXMubmV4dCkgdGhpcy5uZXh0LnVwZGF0ZShkZWx0YSk7XG59XG5cblR3ZWVuLnByb3RvdHlwZS51cGRhdGVQcm9wcyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIXRoaXMuZWFzZSkgcmV0dXJuO1xuXG5cdHZhciByYXRpbyA9IHRoaXMuZWFzZSh0aGlzLmN1cnJlbnQsIDAsIDEsIHRoaXMuZHVyYXRpb24pO1xuXHRmb3IgKHZhciBmIGluIHRoaXMucGFyYW1zVG8pIHtcblx0XHR2YXIgdmYgPSB0aGlzLnBhcmFtc0Zyb21bZl07XG5cdFx0dmFyIHZ0ID0gdGhpcy5wYXJhbXNUb1tmXTtcblx0XHR2YXIgdmMgPSB2ZiArICh2dCAtIHZmKSpyYXRpbztcblx0XHR0aGlzLm9ialtmXSA9IHZjO1xuXHR9XG59XG5cblR3ZWVuLnByb3RvdHlwZS5maW5pc2hlZCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgciA9IHRoaXMuc3RhdGUgPT0gVHdlZW4uQ09NUExFVEVEO1xuXHRpZiAociAmJiB0aGlzLm5leHQpIHIgPSB0aGlzLm5leHQuZmluaXNoZWQoKTtcblx0cmV0dXJuIHI7XG59XG5cblR3ZWVuLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLm5leHQpIHRoaXMubmV4dC5kaXNwb3NlKCk7XG5cdGlmICh0aGlzLmRlYnVnKSB0aGlzLmxvZygnZGlzcG9zZWQhJyk7XG5cdHRoaXMubmV4dCA9IG51bGw7XG5cdHRoaXMucHJldiA9IG51bGw7XG5cdHRoaXMucGFyYW1zRnJvbSA9IG51bGw7XG5cdHRoaXMucGFyYW1zVG8gPSBudWxsO1xuXHR0aGlzLl9vbkNvbXBsZXRlID0gbnVsbDtcbn1cblxuVHdlZW4ucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uKG1zZykge1xuXHRjb25zb2xlLmxvZyh0aGlzLm9iai5uYW1lLCB0aGlzLm5hbWUsIG1zZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47XG4iLCJ2YXIgVHdlZW4gPSByZXF1aXJlKCcuL1R3ZWVuJyk7XG52YXIgRWFzZSA9IHJlcXVpcmUoJy4vRWFzZScpO1xuXG4vKipcbiAqIEEgdHdlZW4gbWFuYWdlci4gRGVhbHMgd2l0aCB0d2VlbiBjcmVhdGlvbiwgdXBkYXRlIGFuZCBkZXN0cnVjdGlvbi5cbiAqIEBjbGFzcyBUd2VlbmVyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSBbYXV0b1VwZGF0ZVJhdGVdIHtmbG9hdH0gSW50ZXJ2YWwgKGluIHNlY29uZHMpIHRoYXQgYWxsIHR3ZWVucyB3aWxsIGJlIHVwZGF0ZWQuIElmIDAsIHRoZSBhdXRvLXVwZGF0ZSB3aWxsIG5vdFxuICogcnVuLCBzbyB5b3UgbXVzdCBoYW5kbGUgdGhlIHVwZGF0ZSBtYW51YWxseS4gRGVmYXVsdCBpcyAwLlxuICovXG52YXIgVHdlZW5lciA9IGZ1bmN0aW9uKGF1dG9VcGRhdGVSYXRlKVxue1xuXHR0aGlzLnR3ZWVucyA9IFtdO1xuXHR0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG5cdGlmIChhdXRvVXBkYXRlUmF0ZSA+IDApIHRoaXMuZW5hYmxlQXV0b1VwZGF0ZShhdXRvVXBkYXRlUmF0ZSk7XG59XG5cbndpbmRvdy5Ud2VlbmVyID0gVHdlZW5lcjtcbndpbmRvdy5Ud2VlbiA9IFR3ZWVuO1xud2luZG93LkVhc2UgPSBFYXNlO1xuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgVHdlZW4gaW5zdGFuY2Ugd2l0aCByZWZlcmVuY2VkIG9iamVjdC5cbiAqIEBtZXRob2QgVHdlZW5lciNhZGRcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdHdlZW5lZC5cbiAqL1xuVHdlZW5lci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ob2JqLCBuYW1lKSB7XG5cdHZhciB0d2VlbiA9IG5ldyBUd2VlbihvYmosIG5hbWUpO1xuXHR0aGlzLnR3ZWVucy5wdXNoKHR3ZWVuKTtcblx0cmV0dXJuIHR3ZWVuO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbGwgdHdlZW4gaW5zdGFuY2VzIHRoYXQgaGF2ZSByZWZlcmVuY2UgdG8gdGhlIG9iamVjdC5cbiAqIEBtZXRob2QgVHdlZW5lciNyZW1vdmVcbiAqIEBwYXJhbSBvYmoge29iamVjdH0gVGhlIHR3ZWVuZWQgb2JqZWN0LlxuICovXG5Ud2VlbmVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihvYmopXG57XG5cdHZhciBpID0gdGhpcy50d2VlbnMubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcblx0XHRpZiAodC5vYmogPT09IG9iaikgdGhpcy5fZGVzdHJveSh0LCBpKTtcblx0fVxufVxuXG4vKipcbiAqIFJ1bnMgdGhlIHVwZGF0ZSBtZXRob2QgYXV0b21hdGljYWxseS5cbiAqIEBtZXRob2QgVHdlZW5lciNlbmFibGVBdXRvVXBkYXRlXG4gKiBAcGFyYW0gcmF0ZSB7ZmxvYXR9IEludGVydmFsIChpbiBzZWNvbmRzKSB0aGF0IHRoZSB1cGRhdGUgd2lsbCBiZSBwbGF5ZWQuXG4gKiBJZiAwIG9yIGxvd2VyLCB0aGUgYXV0b21hdGljIHVwZGF0ZSB3aWxsIGJlIGRpc2FibGVkLlxuICovXG5Ud2VlbmVyLnByb3RvdHlwZS5lbmFibGVBdXRvVXBkYXRlID0gZnVuY3Rpb24ocmF0ZSkge1xuXHRpZiAoIXJhdGUpIHtcblx0XHR0aGlzLmRpc2FibGVBdXRvVXBkYXRlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIHNlbGYgPSB0aGlzO1xuXHR2YXIgdGltZSA9IHNlbGYuZ2V0VGltZSgpO1xuXHRzZWxmLl9pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0ID0gc2VsZi5nZXRUaW1lKCk7XG5cdFx0dmFyIGQgPSB0IC0gdGltZTtcblx0XHR0aW1lID0gdDtcblx0XHRzZWxmLnVwZGF0ZShkKTtcblx0fSwgcmF0ZSoxMDAwKTtcbn1cblxuLyoqXG4gKiBTdG9wcyB0aGUgYXV0b21hdGljIHVwZGF0ZS5cbiAqIEBtZXRob2QgVHdlZW5lciNkaXNhYmxlQXV0b1VwZGF0ZVxuICovXG5Ud2VlbmVyLnByb3RvdHlwZS5kaXNhYmxlQXV0b1VwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYWxsIHR3ZWVucy5cbiAqIEBtZXRob2QgVHdlZW5lciN1cGRhdGVcbiAqIEBwYXJhbSBkZWx0YSB7ZmxvYXR9IFRoZSBlbGFwc2VkIHRpbWUgKGluIHNlY29uZHMpIHNpbmNlIGxhc3QgdXBkYXRlLlxuICovXG5Ud2VlbmVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkZWx0YSkge1xuXHR2YXIgaSA9IHRoaXMudHdlZW5zLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciB0ID0gdGhpcy50d2VlbnNbaV07XG5cdFx0dC51cGRhdGUoZGVsdGEpO1xuXHRcdGlmICh0LmZpbmlzaGVkKCkpIHRoaXMuX2Rlc3Ryb3kodCwgaSk7XG5cdH1cbn1cblxuXG5Ud2VlbmVyLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uKHR3ZWVuLCBpbmRleCkge1xuXHRpZiAoaW5kZXggPT0gdW5kZWZpbmVkKSBpbmRleCA9IHRoaXMudHdlZW4uaW5kZXhPZih0d2Vlbik7XG5cdHRoaXMudHdlZW5zLnNwbGljZShpbmRleCwgMSk7XG5cdHR3ZWVuLmRpc3Bvc2UoKTtcbn1cblxuVHdlZW5lci5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkvMTAwMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbmVyO1xuIl19
