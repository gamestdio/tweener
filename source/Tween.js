import {linear} from 'eases';

/**
 * The tween player. Will change target object values with specified parameters.
 * @class Tween
 * @constructor
 * @param obj {object} The object that will be tweened.
 */
export default class Tween {

  static IDLE = 0;
  static RUNNING = 1;
  static COMPLETED = 2;

  constructor(obj) {
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
    this.ease = linear;

    this.onComplete = null;
  }

  _getTween(obj, duration, ease) {
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

  _getLastParam(field) {
    var ref = this.last.prev;
    while (ref) {
      if (ref.obj === this.obj && ref.paramsTo && ref.paramsTo[field] !== undefined && ref.paramsTo[field] !== null) break;
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
  add(obj) {
    var tween = this._getTween(obj, 0, linear);
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
  from(props, duration, ease) {
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
  to(props, duration, ease) {
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
  wait(duration) {
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
  then(callback) {
    this.last.onComplete = callback;
    return this;
  }

  setTime(value) {
    var delta = value - this.time;
    this.update(delta);
  }

  getTime() {
    return this.time;
  }

  update(delta) {
    if (delta) this.time += delta;

    if (this.next && delta < 0) this.next.update(delta);

    var end = this.start + this.duration;
    if (this.time >= this.start && this.time < end) {
      if (this.state != Tween.RUNNING) if (this.debug) this.log('started');
      this.state = Tween.RUNNING;
      this.updateProps(this.time - this.start);
    } else {
      if (this.time >= end && this.state == Tween.IDLE) {
        this.updateProps(this.duration);
        this.state = Tween.COMPLETED;
        if (this.debug) this.log('completed');
        if (this.onComplete) this.onComplete();
      } else if (this.time < this.start && this.state == Tween.COMPLETED) {
        this.updateProps(0);
        this.state = Tween.IDLE;
      } else if (this.state == Tween.RUNNING) {
        if (this.time < this.start) {
          this.updateProps(0);
          this.state = Tween.IDLE;
        } else {
          this.updateProps(this.duration);
          this.state = Tween.COMPLETED;
          if (this.debug) this.log('completed');
          if (this.onComplete) this.onComplete();
        }
      }
    }

    if (this.next && delta > 0) this.next.update(delta);
  }

  updateProps(time) {
    if (!this.ease) return;
    var ratio = this.ease(time/this.duration);
    for (var f in this.paramsTo) {
      var vf = this.paramsFrom[f];
      var vt = this.paramsTo[f];
      var vc = vf + (vt - vf)*ratio;
      this.obj[f] = vc;
    }
  }

  finished() {
    var r = this.time >= this.start + this.duration;
    if (r && this.next) r = this.next.finished();
    return r;
  }

  dispose() {
    if (this.next) this.next.dispose();
    if (this.debug) this.log('disposed!');
    this.next = null;
    this.prev = null;
    this.last = null;
    this.paramsFrom = null;
    this.paramsTo = null;
    this.onComplete = null;
  }

  log(msg) {
    if (this.obj.name && this.name) console.log('[Tween]', this.obj.name, this.name, msg);
  }

}
