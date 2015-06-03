import Tween from './Tween';
import eases from 'eases';

export default class Tweener {
  constructor(autoUpdateRate = 0) {
    this.debug = false;
    this.tweens = [];
    this._autoUpdateRate = 0;
    this._interval = null;
    this.autoUpdateRate = autoUpdateRate;
  }

  get autoUpdateRate() {
    return this._autoUpdateRate;
  }

  set autoUpdateRate(value) {
    clearInterval(this._interval);
    if (value <= 0) {
      this._interval = null;
      this._autoUpdateRate = 0;
    } else {
      this._autoUpdateRate = value;
      var self = this;
      var time = self.getTime();
      self._interval = setInterval(function() {
        var t = self.getTime();
        var d = t - time;
        time = t;
        self.update(d);
      }, value*1000);
    }
  }

  add(obj) {
    var tween = new Tween(obj);
    tween.debug = this.debug;
    this.tweens.push(tween);
    return tween;
  }

  remove(obj) {
    var i = this.tweens.length;
    while (i--) {
      var t = this.tweens[i];
      if (t.obj === obj) {
        this._destroy(t, i);
      }
    }
  }

  update(delta) {
    var i = this.tweens.length;
    while (i--) {
      var t = this.tweens[i];
      if (t) {
        t.update(delta);
        if (t.finished()) {
          this._destroy(t, i);
        }
      }
    }
  }

  dispose() {
    this.autoUpdateRate = 0;
    this.tweens = null;
  }

  _destroy(tween, index) {
    if (index === undefined) {
      index = this.tween.indexOf(tween);
    }
    this.tweens.splice(index, 1);
    tween.dispose();
  }

  getTime() {
    return new Date().getTime()/1000;
  }
}

Tweener.Tween = Tween;
Tweener.ease = eases;
