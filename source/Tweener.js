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

  dispose() {
    clearInterval(this._interval);
    this.autoUpdateRate = 0;
    var i = this.tweens.length;
    while (i--) {
      var t = this.tweens[i];
      if (t) {
        t.dispose();
      }
    }
    this.tweens = null;
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

  add(obj, debug = false, name = '') {
    var tween = new Tween(obj, debug, name);
    this.tweens.push(tween);
    return tween;
  }

  remove(obj) {
    var i = this.tweens.length;
    while (i--) {
      var t = this.tweens[i];
      if (t.obj === obj) {
        this.tweens.splice(i, 1);
        t.dispose();
      }
    }
  }

  update(delta) {
    var i = this.tweens.length;
    while (i--) {
      var t = this.tweens[i];
      if (t) {
        if (t.finished()) {
          this.tweens.splice(i, 1);
          t.dispose();
        } else {
          t.update(delta);
        }
      }
    }
  }

  getTime() {
    return new Date().getTime()/1000;
  }
}

Tweener.Tween = Tween;
Tweener.ease = eases;
