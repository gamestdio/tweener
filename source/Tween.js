export default class Tween {
  constructor(ref = null) {
    this._ref = ref;
    this._lastState = ref;
    this._target = ref;
    this._queue = [];
    this._length = 0;
    this._current = 0;
  }

  _getParams(tgt = this._target, dur = 0, ez = null) {
    var params = {
      tgt: tgt,
      dur: dur,
      pos: 0,
      ez: ez,
      fr: null,
      to: null,
      cb: null
    };
    this._queue[this._length] = params;
    this._length += 1;
    return params;
  }

  _copy(src, fields) {
    var o = {};
    for (var f in fields) {
      o[f] = src[f];
    }
    return o;
  }

  add(target) {
    this._target = target;
    this._lastState = target;
    return this;
  }

  to(props, duration, ease) {
    var p = this._getParams(this._target, duration, ease);
    p.fr = this._copy(this._lastState, props);
    p.to = props;
    this._lastState = props;
    return this;
  }

  from(props, duration, ease) {
    var p = this._getParams(this._target, duration, ease);
    p.fr = props;
    p.to = this._copy(this._lastState, props);
    return this;
  }

  wait(duration) {
    var p = this._getParams();
    p.dur = duration;
    return this;
  }

  then(fn) {
    var p = this._queue[this._length - 1];
    p.cb = fn;
    return this;
  }

  update(delta) {
    var p = this._queue[this._current];

    if (!p) {
      return true;
    }

    var r = 1;
    var complete = false;

    p.pos += delta;

    if (p.dur > 0 && p.pos < p.dur) {
      r = p.ez ? p.ez(p.pos/p.dur) : p.pos/p.dur;
    }

    if (p.to && p.tgt) {
      for (var f in p.to) {
        var vf = p.fr[f];
        var vt = p.to[f];
        p.tgt[f] = vf + (vt - vf)*r;
      }
    }

    if (p.pos >= p.dur) {
      if (p.cb) {
        p.cb();
      }

      this._current += 1;
      if (this._current >= this._length) {
        complete = true;
      }
    }

    return complete;
  }
}
