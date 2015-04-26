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
 * Remove all tween instances with have reference to the object.
 * @method Tweener#remove
 * @param obj {object} The tweened object.
 */
Tweener.prototype.remove = function(obj)
{
	var i = this.tweens.length;
	while (i--) {
		var t = this.tweens[i];
		if (t.obj === obj) this.destroy(t, i);
	}
}

Tweener.prototype.destroy = function(tween, i) {
	if (i == undefined) i = this.tween.indexOf(tween);
	this.tweens.splice(i, 1);
	tween.dispose();
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
		if (t.finished()) this.destroy(t, i);
	}
}

Tweener.prototype.getTime = function() {
	return new Date().getTime()/1000;
}

module.exports = Tweener;

},{"./Ease":"/Users/maurodetarso/Sites/Libs/tweener/source/Ease.js","./Tween":"/Users/maurodetarso/Sites/Libs/tweener/source/Tween.js"}]},{},["/Users/maurodetarso/Sites/Libs/tweener/source/tweener.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF1cm9kZXRhcnNvL1NpdGVzL0xpYnMvdHdlZW5lci9zb3VyY2UvRWFzZS5qcyIsIi9Vc2Vycy9tYXVyb2RldGFyc28vU2l0ZXMvTGlicy90d2VlbmVyL3NvdXJjZS9Ud2Vlbi5qcyIsIi9Vc2Vycy9tYXVyb2RldGFyc28vU2l0ZXMvTGlicy90d2VlbmVyL3NvdXJjZS90d2VlbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIFN0YXRpYyBjdXJ2ZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgYSB0d2Vlbi5cbiAqIEBjbGFzcyBFYXNlXG4gKi9cblxudmFyIEVhc2UgPSB7fTtcblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5saW5lYXJcbiAqL1xuRWFzZS5saW5lYXIgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiB0IC8gZCArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5CYWNrXG4gKi9cbkVhc2UuaW5CYWNrID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHZhciBzID0gMS43MDE1ODtcblx0cmV0dXJuIGMgKiAoIHQgLz0gZCApICogdCAqICggKCBzICsgMSApICogdCAtIHMgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dEJhY2tcbiAqL1xuRWFzZS5vdXRCYWNrID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHZhciBzID0gMS43MDE1ODtcblx0cmV0dXJuIGMgKiAoICggdCA9IHQgLyBkIC0gMSApICogdCAqICggKCBzICsgMSApICogdCArIHMpICsgMSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5PdXRCYWNrXG4gKi9cbkVhc2UuaW5PdXRCYWNrID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHZhciBzID0gMS43MDE1ODtcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA8IDEgKVxuXHRcdHJldHVybiBjIC8gMiAqICggdCAqIHQgKiAoICggKCBzICo9ICggMS41MjUgKSApICsgMSApICogdCAtIHMgKSApICsgYjtcblx0cmV0dXJuIGMgLyAyICogKCAoIHQgLT0gMiApICogdCAqICggKCAoIHMgKj0gKCAxLjUyNSApICkgKyAxICkgKiB0ICsgcyApICsgMiApICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRCb3VuY2VcbiAqL1xuRWFzZS5vdXRCb3VuY2UgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCAoIHQgLz0gZCApIDwgKCAxIC8gMi43NSApIClcblx0XHRyZXR1cm4gYyAqICggNy41NjI1ICogdCAqIHQgKSArIGI7XG5cdGVsc2UgaWYgKCB0IDwgKCAyIC8gMi43NSApIClcblx0XHRyZXR1cm4gYyAqICggNy41NjI1ICogKCB0IC09ICggMS41IC8gMi43NSApICkgKiB0ICsgLjc1ICkgKyBiO1xuXHRlbHNlIGlmICggdCA8ICggMi41IC8gMi43NSApIClcblx0XHRyZXR1cm4gYyAqICggNy41NjI1ICogKCB0IC09ICggMi4yNSAvIDIuNzUgKSApICogdCArIC45Mzc1ICkgKyBiO1xuXHRlbHNlXG5cdFx0cmV0dXJuIGMgKiAoIDcuNTYyNSAqICggdCAtPSAoIDIuNjI1IC8gMi43NSApICkgKiB0ICsgLjk4NDM3NSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5Cb3VuY2VcbiAqL1xuRWFzZS5pbkJvdW5jZSA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAtIG91dEJvdW5jZSAoIGQgLSB0LCAwLCBjLCBkICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dEJvdW5jZVxuICovXG5FYXNlLmluT3V0Qm91bmNlID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggdCA8IGQgLyAyIClcblx0XHRyZXR1cm4gaW5Cb3VuY2UgKCB0ICogMiwgMCwgYywgZCApICogLjUgKyBiO1xuXHRlbHNlXG5cdFx0cmV0dXJuIG91dEJvdW5jZSAoIHQgKiAyIC0gZCwgMCwgYywgZCApICogLjUgKyBjICouNSArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5DaXJjXG4gKi9cbkVhc2UuaW5DaXJjID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiAtYyAqICggTWF0aC5zcXJ0KCAxIC0gKCB0IC89IGQgKSAqIHQgKSAtIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dENpcmNcbiAqL1xuRWFzZS5vdXRDaXJjID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiBjICogTWF0aC5zcXJ0KCAxIC0gKCB0ID0gdCAvIGQgLSAxICkgKiB0ICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dENpcmNcbiAqL1xuRWFzZS5pbk91dENpcmMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0aWYgKCAoIHQgLz0gZCAvIDIgKSA8IDEgKVxuXHRcdHJldHVybiAtYyAvIDIgKiAoIE1hdGguc3FydCggMSAtIHQgKiB0ICkgLSAxICkgKyBiO1xuXHRyZXR1cm4gYyAvIDIgKiAoIE1hdGguc3FydCggMSAtICggdCAtPSAyICkgKiB0ICkgKyAxICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbkN1YmljXG4gKi9cbkVhc2UuaW5DdWJpYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqICggdCAvPSBkICkgKiB0ICogdCArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dEN1YmljXG4gKi9cbkVhc2Uub3V0Q3ViaWMgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiAoICggdCA9IHQgLyBkIC0gMSApICogdCAqIHQgKyAxICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dEN1YmljXG4gKi9cbkVhc2UuaW5PdXRDdWJpYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoICggdCAvPSBkIC8gMiApIDwgMSApXG5cdFx0cmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICsgYjtcblx0cmV0dXJuIGMgLyAyICogKCAoIHQgLT0gMiApICogdCAqIHQgKyAyKSArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5FbGFzdGljXG4gKi9cbkVhc2UuaW5FbGFzdGljID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggdCA9PSAwIClcblx0XHRyZXR1cm4gYjtcblx0aWYgKCAoIHQgLz0gZCApID09IDEgKVxuXHRcdHJldHVybiBiICsgYztcblx0XHR2YXIgcCA9IGQgKiAuMztcblx0dmFyIHM7XG5cdFx0dmFyIGEgPSBjO1xuXHRcdHMgPSBwIC8gNDtcblxuXHRyZXR1cm4gLSggYSAqIE1hdGgucG93KCAyLCAxMCAqICggdCAtPSAxICkgKSAqIE1hdGguc2luKCAoIHQgKiBkIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRFbGFzdGljXG4gKi9cbkVhc2Uub3V0RWxhc3RpYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoIHQgPT0gMCApXG5cdFx0cmV0dXJuIGI7XG5cdGlmICggKCB0IC89IGQgKSA9PSAxIClcblx0XHRyZXR1cm4gYiArIGM7XG5cdFx0dmFyIHAgPSBkICogLjM7XG5cdHZhciBzO1xuXHRcdHZhciBhID0gYztcblx0XHRzID0gcCAvIDQ7XG5cblx0cmV0dXJuICggYSAqIE1hdGgucG93KCAyLCAtMTAgKiB0ICkgKiBNYXRoLnNpbiggKCB0ICogZCAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSArIGMgKyBiICk7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0RWxhc3RpY1xuICovXG5FYXNlLmluT3V0RWxhc3RpYyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoIHQgPT0gMCApXG5cdFx0cmV0dXJuIGI7XG5cdGlmICggKCB0IC89IGQgLyAyICkgPT0gMiApXG5cdFx0cmV0dXJuIGIgKyBjO1xuXHR2YXIgcztcblx0XHR2YXIgcCA9IGQgKiAoIC4zICogMS41ICk7XG5cdFx0dmFyIGEgPSBjO1xuXHRcdHMgPXAgLyA0O1xuXG5cdGlmICggdCA8IDEgKVxuXHRcdHJldHVybiAtLjUgKiAoIGEgKiBNYXRoLnBvdyggMiwgMTAgKiAoIHQgLT0gMSApICkgKiBNYXRoLnNpbiggKCB0ICogZCAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSApICsgYjtcblx0cmV0dXJuIGEgKiBNYXRoLnBvdyggMiwgLTEwICogKCB0IC09IDEgKSApICogTWF0aC5zaW4oICggdCAqIGQgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKiAuNSArIGMgKyBiO1xufVxuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluRXhwb1xuICovXG5FYXNlLmluRXhwbyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gKCB0ID09IDAgKSA/IGIgOiBjICogTWF0aC5wb3coIDIsIDEwICogKCB0IC8gZCAtIDEgKSApICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0RXhwb1xuICovXG5FYXNlLm91dEV4cG8gPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuICggdCA9PSBkICkgPyBiICsgYyA6IGMgKiAoIC1NYXRoLnBvdyggMiwgLTEwICogdCAvIGQgKSArIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0RXhwb1xuICovXG5FYXNlLmluT3V0RXhwbyA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoIHQgPT0gMCApXG5cdFx0cmV0dXJuIGI7XG5cdGlmICggdCA9PSBkIClcblx0XHRyZXR1cm4gYiArIGM7XG5cdGlmICggKCB0IC89IGQgLyAyICkgPCAxIClcblx0XHRyZXR1cm4gYyAvIDIgKiBNYXRoLnBvdyggMiwgMTAgKiAoIHQgLSAxICkgKSArIGI7XG5cdHJldHVybiBjIC8gMiAqICggLU1hdGgucG93KCAyLCAtMTAgKiAtLXQgKSArIDIgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluUXVhZFxuICovXG5FYXNlLmluUXVhZCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqICggdCAvPSBkICkgKiB0ICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0UXVhZFxuICovXG5FYXNlLm91dFF1YWQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIC1jICogKCB0IC89IGQgKSAqICggdCAtIDIgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0UXVhZFxuICovXG5FYXNlLmluT3V0UXVhZCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoICggdCAvPSBkIC8gMiApIDwgMSApXG5cdFx0cmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuXHRyZXR1cm4gLWMgLyAyICogKCAoIC0tdCApICogKCB0IC0gMiApIC0gMSApICsgYjtcbn1cblxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pblF1YXJ0XG4gKi9cbkVhc2UuaW5RdWFydCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gYyAqICggdCAvPSBkICkgKiB0ICogdCAqIHQgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5vdXRRdWFydFxuICovXG5FYXNlLm91dFF1YXJ0ID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdHJldHVybiAtYyAqICggKCB0ID0gdCAvIGQgLSAxICkgKiB0ICogdCAqIHQgLSAxICkgKyBiO1xufVxuXG4vKipcbiAqIEBtZW1iZXIgRWFzZS5pbk91dFF1YXJ0XG4gKi9cbkVhc2UuaW5PdXRRdWFydCA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRpZiAoICggdCAvPSBkIC8gMiApIDwgMSApXG5cdFx0cmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICogdCArIGI7XG5cdHJldHVybiAtYyAvIDIgKiAoICggdCAtPSAyICkgKiB0ICogdCAqIHQgLSAyKSArIGI7XG59XG5cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2UuaW5RdWludFxuICovXG5FYXNlLmluUXVpbnQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiAoIHQgLz0gZCApICogdCAqIHQgKiB0ICogdCArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLm91dFF1aW50XG4gKi9cbkVhc2Uub3V0UXVpbnQgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiAoICggdCA9IHQgLyBkIC0gMSApICogdCAqIHQgKiB0ICogdCArIDEgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0UXVpbnRcbiAqL1xuRWFzZS5pbk91dFF1aW50ID0gZnVuY3Rpb24gKHQsIGIsIGMsIGQpXG57XG5cdGlmICggKCB0IC89IGQgLyAyICkgPCAxIClcblx0XHRyZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKiB0ICogdCArIGI7XG5cdHJldHVybiBjIC8gMiAqICggKCB0IC09IDIgKSAqIHQgKiB0ICogdCAqIHQgKyAyICkgKyBiO1xufVxuXG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluU2luZVxuICovXG5FYXNlLmluU2luZSA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gLWMgKiBNYXRoLmNvcyAoIHQgLyBkICogKCBNYXRoLlBJIC8gMiApICkgKyBjICsgYjtcbn1cblxuLyoqXG4gKiBAbWVtYmVyIEVhc2Uub3V0U2luZVxuICovXG5FYXNlLm91dFNpbmUgPSBmdW5jdGlvbiAodCwgYiwgYywgZClcbntcblx0cmV0dXJuIGMgKiBNYXRoLnNpbiggdCAvIGQgKiAoIE1hdGguUEkgLyAyICkgKSArIGI7XG59XG5cbi8qKlxuICogQG1lbWJlciBFYXNlLmluT3V0U2luZVxuICovXG5FYXNlLmluT3V0U2luZSA9IGZ1bmN0aW9uICh0LCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gLWMgLyAyICogKCBNYXRoLmNvcyggTWF0aC5QSSAqIHQgLyBkICkgLSAxICkgKyBiO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc2U7XG4iLCJ2YXIgRWFzZSA9IHJlcXVpcmUoJy4vRWFzZScpO1xuXG52YXIgVHdlZW4gPSBmdW5jdGlvbihvYmopIHtcblx0dGhpcy5uYW1lID0gJyc7XG5cdHRoaXMuZGVidWcgPSB0cnVlO1xuXHR0aGlzLm9iaiA9IG9iajtcblxuXHR0aGlzLnN0YXJ0ID0gMDtcbiAgdGhpcy5lbmQgPSAwO1xuICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgdGhpcy5zdGF0ZSA9IDA7XG4gIHRoaXMuY3VycmVudCA9IDA7XG5cbiAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gIHRoaXMudXBkYXRlZCA9IGZhbHNlO1xuICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuXG5cdHRoaXMubmV4dCA9IG51bGw7XG5cdHRoaXMucHJldiA9IG51bGw7XG5cdHRoaXMubGFzdCA9IHRoaXM7XG5cdHRoaXMudGltZSA9IDA7XG5cblx0dGhpcy5wYXJhbXNGcm9tID0gbnVsbDtcblx0dGhpcy5wYXJhbXNUbyA9IG51bGw7XG5cdHRoaXMuZWFzZSA9IEVhc2UubGluZWFyO1xuXG5cdHRoaXMuX29uQ29tcGxldGUgPSBudWxsO1xufVxuXG5Ud2Vlbi5JRExFID0gMDtcblR3ZWVuLlJVTk5JTkcgPSAxO1xuVHdlZW4uQ09NUExFVEVEID0gMjtcblxuVHdlZW4ucHJvdG90eXBlLl9hcHBlbmQgPSBmdW5jdGlvbihvYmosIGR1cmF0aW9uLCBlYXNlKSB7XG5cdHZhciBsYXN0ID0gdGhpcy5sYXN0O1xuXHR2YXIgdHdlZW4gPSBuZXcgVHdlZW4ob2JqKTtcblx0dHdlZW4uc3RhcnQgPSBsYXN0LmVuZDtcbiAgdHdlZW4uZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAwO1xuICB0d2Vlbi5lbmQgPSB0d2Vlbi5zdGFydCArIHR3ZWVuLmR1cmF0aW9uO1xuICB0d2Vlbi5zdGF0ZSA9IDA7XG5cdHR3ZWVuLmVhc2UgPSBlYXNlO1xuXHR0d2Vlbi5wcmV2ID0gbGFzdDtcblx0bGFzdC5uZXh0ID0gdHdlZW47XG5cdHRoaXMubGFzdCA9IHR3ZWVuO1xuXHRyZXR1cm4gdHdlZW47XG59XG5cblR3ZWVuLnByb3RvdHlwZS5fZ2V0TGFzdFBhcmFtID0gZnVuY3Rpb24oZmllbGQpIHtcblx0dmFyIHJlZiA9IHRoaXMubGFzdC5wcmV2O1xuXHR3aGlsZSAocmVmKSB7XG5cdFx0aWYgKHJlZi5vYmogPT0gdGhpcy5vYmogJiYgcmVmLnBhcmFtc1RvKSBicmVhaztcblx0XHRyZWYgPSByZWYucHJldjtcblx0fVxuXHR2YXIgdiA9IHJlZiA/IHJlZi5wYXJhbXNUb1tmaWVsZF0gOiB0aGlzLm9ialtmaWVsZF07XG5cdHJldHVybiB2O1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ob2JqKSB7XG5cdHZhciB0d2VlbiA9IHRoaXMuX2FwcGVuZChvYmosIDAsIEVhc2UubGluZWFyKTtcblx0cmV0dXJuIHR3ZWVuO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUuZnJvbSA9IGZ1bmN0aW9uKHByb3BzLCBkdXJhdGlvbiwgZWFzZSkge1xuXHR2YXIgdHdlZW4gPSB0aGlzLl9hcHBlbmQodGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlKTtcblx0dHdlZW4ubmFtZSA9ICdmcm9tJztcblx0dHdlZW4ucGFyYW1zRnJvbSA9IHByb3BzO1xuXHR0d2Vlbi5wYXJhbXNUbyA9IHt9O1xuXHRmb3IgKHZhciBmIGluIHByb3BzKSB7XG5cdFx0dHdlZW4ucGFyYW1zVG9bZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59XG5cblR3ZWVuLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKHByb3BzLCBkdXJhdGlvbiwgZWFzZSkge1xuXHR2YXIgdHdlZW4gPSB0aGlzLl9hcHBlbmQodGhpcy5vYmosIGR1cmF0aW9uLCBlYXNlKTtcblx0dHdlZW4ubmFtZSA9ICd0byc7XG5cdHR3ZWVuLnBhcmFtc1RvID0gcHJvcHM7XG5cdHR3ZWVuLnBhcmFtc0Zyb20gPSB7fTtcblx0Zm9yICh2YXIgZiBpbiBwcm9wcykge1xuXHRcdHR3ZWVuLnBhcmFtc0Zyb21bZl0gPSB0aGlzLl9nZXRMYXN0UGFyYW0oZik7XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59XG5cblR3ZWVuLnByb3RvdHlwZS53YWl0ID0gZnVuY3Rpb24odGltZSkge1xuXHR2YXIgdHdlZW4gPSB0aGlzLl9hcHBlbmQodGhpcy5vYmosIHRpbWUsIG51bGwpO1xuXHR0d2Vlbi5uYW1lID0gJ3dhaXQnO1xuXHR0d2Vlbi5wYXJhbXNGcm9tID0gdHdlZW4ucHJldi5wYXJhbXNGcm9tO1xuXHR0d2Vlbi5wYXJhbXNUbyA9IHR3ZWVuLnByZXYucGFyYW1zVG87XG5cdHJldHVybiB0aGlzO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdHRoaXMubGFzdC5fb25Db21wbGV0ZSA9IGNhbGxiYWNrO1xuXHRyZXR1cm4gdGhpcztcbn1cblxuVHdlZW4ucHJvdG90eXBlLnNldFRpbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHR0aGlzLnRpbWUgPSB2YWx1ZTtcblx0aWYgKHRoaXMubmV4dCkgdGhpcy5uZXh0LnNldFRpbWUodmFsdWUpO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy50aW1lO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZGVsdGEpXG57XG5cdHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcblxuXHRpZiAoZGVsdGEpIHRoaXMudGltZSArPSBkZWx0YTtcblxuXHRpZiAodGhpcy50aW1lIDwgdGhpcy5zdGFydCkge1xuICAgIHRoaXMuc3RhdGUgPSBUd2Vlbi5JRExFO1xuICAgIHRoaXMuY3VycmVudCA9IDA7XG4gIH0gZWxzZSBpZiAodGhpcy50aW1lID49IHRoaXMuZW5kKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT0gVHdlZW4uUlVOTklORykgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGUgPSBUd2Vlbi5DT01QTEVURUQ7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5kdXJhdGlvbjtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PSBUd2Vlbi5JRExFKSB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGUgPSAxO1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMudGltZSAtIHRoaXMuc3RhcnQ7XG4gICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgfVxuXG5cdGlmICh0aGlzLnN0YXJ0ZWQpIHtcblx0XHRpZiAodGhpcy5kZWJ1ZykgdGhpcy5sb2coJ3N0YXJ0ZWQnKTtcblx0XHR0aGlzLnVwZGF0ZVByb3BzKCk7XG5cdFx0aWYgKHRoaXMub25TdGFydCkgdGhpcy5vblN0YXJ0KCk7XG5cdH1cblxuXHRpZiAodGhpcy51cGRhdGVkKSB7XG5cdFx0dGhpcy51cGRhdGVQcm9wcygpO1xuXHR9XG5cblx0aWYgKHRoaXMuY29tcGxldGVkKSB7XG5cdFx0aWYgKHRoaXMuZGVidWcpIHRoaXMubG9nKCdjb21wbGV0ZWQnKTtcblx0XHR0aGlzLnVwZGF0ZVByb3BzKCk7XG5cdFx0aWYgKHRoaXMuX29uQ29tcGxldGUpIHRoaXMuX29uQ29tcGxldGUoKTtcblx0fVxuXG5cdGlmICh0aGlzLm5leHQpIHRoaXMubmV4dC51cGRhdGUoZGVsdGEpO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUudXBkYXRlUHJvcHMgPSBmdW5jdGlvbigpIHtcblx0aWYgKCF0aGlzLmVhc2UpIHJldHVybjtcblxuXHR2YXIgcmF0aW8gPSB0aGlzLmVhc2UodGhpcy5jdXJyZW50LCAwLCAxLCB0aGlzLmR1cmF0aW9uKTtcblx0Zm9yICh2YXIgZiBpbiB0aGlzLnBhcmFtc1RvKSB7XG5cdFx0dmFyIHZmID0gdGhpcy5wYXJhbXNGcm9tW2ZdO1xuXHRcdHZhciB2dCA9IHRoaXMucGFyYW1zVG9bZl07XG5cdFx0dmFyIHZjID0gdmYgKyAodnQgLSB2ZikqcmF0aW87XG5cdFx0dGhpcy5vYmpbZl0gPSB2Yztcblx0fVxufVxuXG5Ud2Vlbi5wcm90b3R5cGUuZmluaXNoZWQgPSBmdW5jdGlvbigpIHtcblx0dmFyIHIgPSB0aGlzLnN0YXRlID09IFR3ZWVuLkNPTVBMRVRFRDtcblx0aWYgKHIgJiYgdGhpcy5uZXh0KSByID0gdGhpcy5uZXh0LmZpbmlzaGVkKCk7XG5cdHJldHVybiByO1xufVxuXG5Ud2Vlbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5uZXh0KSB0aGlzLm5leHQuZGlzcG9zZSgpO1xuXHRpZiAodGhpcy5kZWJ1ZykgdGhpcy5sb2coJ2Rpc3Bvc2VkIScpO1xuXHR0aGlzLm5leHQgPSBudWxsO1xuXHR0aGlzLnByZXYgPSBudWxsO1xuXHR0aGlzLnBhcmFtc0Zyb20gPSBudWxsO1xuXHR0aGlzLnBhcmFtc1RvID0gbnVsbDtcblx0dGhpcy5fb25Db21wbGV0ZSA9IG51bGw7XG59XG5cblR3ZWVuLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbihtc2cpIHtcblx0Y29uc29sZS5sb2codGhpcy5vYmoubmFtZSwgdGhpcy5uYW1lLCBtc2cpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuO1xuIiwidmFyIFR3ZWVuID0gcmVxdWlyZSgnLi9Ud2VlbicpO1xudmFyIEVhc2UgPSByZXF1aXJlKCcuL0Vhc2UnKTtcblxuLyoqXG4gKiBBIHR3ZWVuIG1hbmFnZXIuIERlYWxzIHdpdGggdHdlZW4gY3JlYXRpb24sIHVwZGF0ZSBhbmQgZGVzdHJ1Y3Rpb24uXG4gKiBAY2xhc3MgVHdlZW5lclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gW2F1dG9VcGRhdGVSYXRlXSB7ZmxvYXR9IEludGVydmFsIChpbiBzZWNvbmRzKSB0aGF0IGFsbCB0d2VlbnMgd2lsbCBiZSB1cGRhdGVkLiBJZiAwLCB0aGUgYXV0by11cGRhdGUgd2lsbCBub3RcbiAqIHJ1biwgc28geW91IG11c3QgaGFuZGxlIHRoZSB1cGRhdGUgbWFudWFsbHkuIERlZmF1bHQgaXMgMC5cbiAqL1xudmFyIFR3ZWVuZXIgPSBmdW5jdGlvbihhdXRvVXBkYXRlUmF0ZSlcbntcblx0dGhpcy50d2VlbnMgPSBbXTtcblx0dGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuXHRpZiAoYXV0b1VwZGF0ZVJhdGUgPiAwKSB0aGlzLmVuYWJsZUF1dG9VcGRhdGUoYXV0b1VwZGF0ZVJhdGUpO1xufVxuXG53aW5kb3cuVHdlZW5lciA9IFR3ZWVuZXI7XG53aW5kb3cuVHdlZW4gPSBUd2VlbjtcbndpbmRvdy5FYXNlID0gRWFzZTtcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIFR3ZWVuIGluc3RhbmNlIHdpdGggcmVmZXJlbmNlZCBvYmplY3QuXG4gKiBAbWV0aG9kIFR3ZWVuZXIjYWRkXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHR3ZWVuZWQuXG4gKi9cblR3ZWVuZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuXHR2YXIgdHdlZW4gPSBuZXcgVHdlZW4ob2JqLCBuYW1lKTtcblx0dGhpcy50d2VlbnMucHVzaCh0d2Vlbik7XG5cdHJldHVybiB0d2Vlbjtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHR3ZWVuIGluc3RhbmNlcyB3aXRoIGhhdmUgcmVmZXJlbmNlIHRvIHRoZSBvYmplY3QuXG4gKiBAbWV0aG9kIFR3ZWVuZXIjcmVtb3ZlXG4gKiBAcGFyYW0gb2JqIHtvYmplY3R9IFRoZSB0d2VlbmVkIG9iamVjdC5cbiAqL1xuVHdlZW5lci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24ob2JqKVxue1xuXHR2YXIgaSA9IHRoaXMudHdlZW5zLmxlbmd0aDtcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciB0ID0gdGhpcy50d2VlbnNbaV07XG5cdFx0aWYgKHQub2JqID09PSBvYmopIHRoaXMuZGVzdHJveSh0LCBpKTtcblx0fVxufVxuXG5Ud2VlbmVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24odHdlZW4sIGkpIHtcblx0aWYgKGkgPT0gdW5kZWZpbmVkKSBpID0gdGhpcy50d2Vlbi5pbmRleE9mKHR3ZWVuKTtcblx0dGhpcy50d2VlbnMuc3BsaWNlKGksIDEpO1xuXHR0d2Vlbi5kaXNwb3NlKCk7XG59XG5cbi8qKlxuICogUnVucyB0aGUgdXBkYXRlIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICogQG1ldGhvZCBUd2VlbmVyI2VuYWJsZUF1dG9VcGRhdGVcbiAqIEBwYXJhbSByYXRlIHtmbG9hdH0gSW50ZXJ2YWwgKGluIHNlY29uZHMpIHRoYXQgdGhlIHVwZGF0ZSB3aWxsIGJlIHBsYXllZC5cbiAqIElmIDAgb3IgbG93ZXIsIHRoZSBhdXRvbWF0aWMgdXBkYXRlIHdpbGwgYmUgZGlzYWJsZWQuXG4gKi9cblR3ZWVuZXIucHJvdG90eXBlLmVuYWJsZUF1dG9VcGRhdGUgPSBmdW5jdGlvbihyYXRlKSB7XG5cdGlmICghcmF0ZSkge1xuXHRcdHRoaXMuZGlzYWJsZUF1dG9VcGRhdGUoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHZhciB0aW1lID0gc2VsZi5nZXRUaW1lKCk7XG5cdHNlbGYuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHQgPSBzZWxmLmdldFRpbWUoKTtcblx0XHR2YXIgZCA9IHQgLSB0aW1lO1xuXHRcdHRpbWUgPSB0O1xuXHRcdHNlbGYudXBkYXRlKGQpO1xuXHR9LCByYXRlKjEwMDApO1xufVxuXG4vKipcbiAqIFN0b3BzIHRoZSBhdXRvbWF0aWMgdXBkYXRlLlxuICogQG1ldGhvZCBUd2VlbmVyI2Rpc2FibGVBdXRvVXBkYXRlXG4gKi9cblR3ZWVuZXIucHJvdG90eXBlLmRpc2FibGVBdXRvVXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbGwgdHdlZW5zLlxuICogQG1ldGhvZCBUd2VlbmVyI3VwZGF0ZVxuICogQHBhcmFtIGRlbHRhIHtmbG9hdH0gVGhlIGVsYXBzZWQgdGltZSAoaW4gc2Vjb25kcykgc2luY2UgbGFzdCB1cGRhdGUuXG4gKi9cblR3ZWVuZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGRlbHRhKSB7XG5cdHZhciBpID0gdGhpcy50d2VlbnMubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcblx0XHR0LnVwZGF0ZShkZWx0YSk7XG5cdFx0aWYgKHQuZmluaXNoZWQoKSkgdGhpcy5kZXN0cm95KHQsIGkpO1xuXHR9XG59XG5cblR3ZWVuZXIucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpLzEwMDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5lcjtcbiJdfQ==
