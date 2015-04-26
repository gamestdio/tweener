var Ease = require('./Ease');

var Tween = function(obj, name) {
	this.name = name || 'tween';
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
	this.time = 0;

	this.paramsFrom = null;
	this.paramsTo = null;
	this.ease = Ease.linear;

	this._onComplete = null;
}

Tween.IDLE = 0;
Tween.RUNNING = 1;
Tween.COMPLETED = 2;

Tween.prototype._append = function(obj, name, duration, ease) {
	var tween = new Tween(obj, name);
	tween.start = this.end;
  tween.duration = duration || 0;
  tween.end = tween.start + tween.duration;
  tween.state = 0;
	tween.ease = ease;
	tween.prev = this;
	this.next = tween;
	return tween;
}

Tween.prototype._getParam = function(field) {
	var ref = this.prev;
	while (ref) {
		if (ref.obj == this.obj && ref.paramsTo) break;
		ref = ref.prev;
	}
	var v = ref ? ref.paramsTo[field] : this.obj[field];
	return v;
}

Tween.prototype.add = function(obj, name) {
	var tween = this._append(obj, name, 0, Ease.linear);
	return tween;
}

Tween.prototype.to = function(props, duration, ease) {
	var tween = this._append(this.obj, this.name + '_to', duration, ease);
	tween.paramsTo = props;
	tween.paramsFrom = {};
	for (var f in props) {
		tween.paramsFrom[f] = this._getParam(f);
	}
	return tween;
}

Tween.prototype.wait = function(time) {
	var tween = this._append(this.obj, this.name + '_wait', time, null);
	tween.paramsFrom = tween.prev.paramsFrom;
	tween.paramsTo = tween.prev.paramsTo;
	return tween;
}

Tween.prototype.then = function(callback) {
	this._onComplete = callback;
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
	console.log(this.name, msg, this.time);
}

module.exports = Tween;
