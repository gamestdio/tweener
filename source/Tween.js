var eases = require('eases');

/**
 * The tween player. Will change target object values with specified parameters.
 * @class Tween
 * @constructor
 * @param obj {object} The object that will be tweened.
 */
function Tween(obj) {
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
  return v;
}

/**
 * Adds new tween, with new target.
 * @method Tween#add
 * @param obj {object} The object that will be tweened.
 * @returns Tween
 */
Tween.prototype.add = function(obj) {
  var tween = this._getTween(obj, 0, eases.linear);
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

Tween.prototype.updateProps = function(time) {
  if (!this.ease) return;
  var ratio = this.ease(time/this.duration);
  for (var f in this.paramsTo) {
    var vf = this.paramsFrom[f];
    var vt = this.paramsTo[f];
    var vc = vf + (vt - vf)*ratio;
    this.obj[f] = vc;
  }
}

Tween.prototype.finished = function() {
  var r = this.time >= this.start + this.duration;
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
