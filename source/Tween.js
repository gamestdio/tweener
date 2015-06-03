import {linear} from 'eases';

var IDLE = 0;
var RUNNING = 1;
var COMPLETED = 2;

export default class Tween {
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
      if (ref.obj === this.obj && ref.paramsTo && ref.paramsTo[field] !== undefined && ref.paramsTo[field] !== null) {
        break;
      }
      ref = ref.prev;
    }
    var v = ref ? ref.paramsTo[field] : this.obj[field];
    return v;
  }

  add(obj) {
    var tween = this._getTween(obj, 0, linear);
    return tween;
  }

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

  wait(duration) {
    var tween = this._getTween(this.obj, duration, null);
    tween.name = 'wait';
    tween.paramsFrom = tween.prev.paramsFrom;
    tween.paramsTo = tween.prev.paramsTo;
    return this;
  }

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
    if (delta) {
      this.time += delta;
    }

    if (this.next && delta < 0) {
      this.next.update(delta);
    }

    var end = this.start + this.duration;
    if (this.time >= this.start && this.time < end) {
      if (this.state !== Tween.RUNNING && this.debug) {
        this.log('started');
      }
      this.state = Tween.RUNNING;
      this.updateProps(this.time - this.start);
    } else if (this.time < this.start) {
      if (this.state !== Tween.IDLE) {
        this.state = Tween.IDLE;
        this.updateProps(0);
      }
    } else if (this.time >= end) {
      if (this.state !== Tween.COMPLETED) {
        this.state = Tween.COMPLETED;
        this.updateProps(this.duration);
        if (this.debug) {
          this.log('completed');
        }
        if (this.onComplete) {
          this.onComplete();
        }
      }
    }

    if (this.next && delta > 0) {
      this.next.update(delta);
    }
  }

  updateProps(time) {
    if (!this.ease) {
      return;
    }

    var ratio = 0;

    if (this.state === Tween.RUNNING) {
      ratio = this.ease(time/this.duration);
    }

    for (var f in this.paramsTo) {
      switch (this.state) {
        case Tween.IDLE :
          this.obj[f] = this.paramsFrom[f];
        break;
        case Tween.COMPLETED :
          this.obj[f] = this.paramsTo[f];
        break;
        default :
          var vf = this.paramsFrom[f];
          var vt = this.paramsTo[f];
          this.obj[f] = vf + (vt - vf)*ratio;
        break;
      }
    }
  }

  finished() {
    var r = this.state === Tween.COMPLETED;
    if (r && this.next) {
      r = this.next.finished();
    }
    return r;
  }

  dispose() {
    if (this.next) {
      this.next.dispose();
    }
    if (this.debug) {
      this.log('disposed!');
    }
    this.next = null;
    this.prev = null;
    this.last = null;
    this.paramsFrom = null;
    this.paramsTo = null;
    this.onComplete = null;
  }

  log(msg) {
    if (this.obj.name && this.name) {
      console.log('[Tween]', this.obj.name, this.name, msg);
    }
  }

}

Tween.IDLE = IDLE;
Tween.RUNNING = RUNNING;
Tween.COMPLETED = COMPLETED;
