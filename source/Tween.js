import {linear} from 'eases';

const UNDEFINED = 0;
const BEFORE = 1;
const RUNNING = 2;
const AFTER = 3;

export default class Tween {
  constructor(obj) {
    this.name = '';
    this.debug = false;
    this.obj = obj;

    this.position = 0;
    this.duration = 0;
    this.state = 0;

    this.next = null;
    this.prev = null;
    this.last = this;

    this.time = 0;
    this.lastEvaluationTime = -1;

    this.pf = null;
    this.pt = null;
    this.ease = linear;

    this.onStart = null;
    this.onComplete = null;
  }

  _getTween(obj, duration, ease) {
    var last = this.last;
    var tween = new Tween(obj);
    tween.debug = this.debug;
    tween.position = last.position + last.duration;
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
      if (ref.obj === this.obj && ref.pt && ref.pt[field] !== undefined && ref.pt[field] !== null) {
        break;
      }
      ref = ref.prev;
    }
    var v = ref ? ref.pt[field] : this.obj[field];
    return v;
  }

  add(obj) {
    var tween = this._getTween(obj, 0, linear);
    return tween;
  }

  from(props, duration, ease) {
    var tween = this._getTween(this.obj, duration, ease);
    tween.name = 'from';
    tween.pf = props;
    tween.pt = {};
    for (var f in props) {
      tween.pt[f] = this._getLastParam(f);
    }
    return this;
  }

  to(props, duration, ease) {
    var tween = this._getTween(this.obj, duration, ease);
    tween.name = 'to';
    tween.pt = props;
    tween.pf = {};
    for (var f in props) {
      tween.pf[f] = this._getLastParam(f);
    }
    return this;
  }

  wait(duration) {
    var tween = this._getTween(this.obj, duration, null);
    tween.name = 'wait';
    tween.pf = tween.prev.pf;
    tween.pt = tween.prev.pt;
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

    if (this.time !== this.lastEvaluationTime) {
      var time = this.time;
      var pos = this.position;
      var dur = this.duration;
      var lastState = this.state;
      var state = Tween.getState(pos, dur, time);

      if (lastState === UNDEFINED) {
        if (time > this.lastEvaluationTime) {
          switch (state) {
            case RUNNING :
              this.notifyStart();
              this.process(time - pos);
            break;
            case AFTER :
              this.notifyStart();
              this.process(dur);
              this.notifyComplete();
            break;
          }
        } else {
          switch (state) {
            case RUNNING :
              this.notifyComplete();
              this.process(time - pos);
            break;
            case BEFORE :
              this.notifyComplete();
              this.process(0);
              this.notifyStart();
            break;
          }
        }
      } else {
        switch (state) {
          case BEFORE :
            if (lastState !== BEFORE) {
              this.process(0);
              this.notifyStart();
            }
          break;
          case RUNNING :
            if (lastState === BEFORE) {
              this.notifyStart();
            } else if (lastState === AFTER) {
              this.notifyComplete();
            }
            this.process(time - pos);
          break;
          case AFTER :
            if (lastState !== AFTER) {
              this.process(dur);
              this.notifyComplete();
            }
          break;
        }
      }

      this.lastEvaluationTime = time;
      this.state = state;
    }


    if (this.next && delta > 0) {
      this.next.update(delta);
    }
  }

  process(time) {
    if (!this.ease || this.duration === 0) {
      return;
    }

    var ratio = this.ease(time/this.duration);

    for (var f in this.pt) {
      switch (ratio) {
        case 0 :
          this.obj[f] = this.pf[f];
        break;
        case 1 :
          this.obj[f] = this.pt[f];
        break;
        default :
          var vf = this.pf[f];
          var vt = this.pt[f];
          this.obj[f] = vf + (vt - vf)*ratio;
        break;
      }
    }
  }

  notifyStart() {
    if (this.debug) {
      this.log('start');
    }
    if (this.onStart) {
      this.onStart();
    }
  }

  notifyComplete() {
    if (this.debug) {
      this.log('complete');
    }
    if (this.onComplete) {
      this.onComplete();
    }
  }

  finished() {
    var r = this.state === AFTER;
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
    this.obj = null
    this.next = null;
    this.prev = null;
    this.last = null;
    this.pf = null;
    this.pt = null;
    this.onStart = null;
    this.onComplete = null;
  }

  log(msg) {
    if (this.obj.name && this.name) {
      console.log('[Tween]', this.obj.name, this.name, msg);
    }
  }

  static getState(pos, dur, time) {
    var end = pos + dur;
    var state = UNDEFINED;
    if (time < pos) {
      state = BEFORE;
    } else if (time >= end) {
      state = AFTER;
    } else {
      state = RUNNING;
    }
    return state;
  }
}

Tween.UNDEFINED = UNDEFINED;
Tween.BEFORE = BEFORE;
Tween.RUNNING = RUNNING;
Tween.AFTER = AFTER;
