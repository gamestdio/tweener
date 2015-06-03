import Tween from './Tween';
import eases from 'eases';

export default class Tweener {
  constructor(autoUpdateRate) {
    this.debug = false;
    this.tweens = [];
    this._interval = null;
    if (autoUpdateRate > 0) {
      this.enableAutoUpdate(autoUpdateRate);
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

  enableAutoUpdate(rate) {
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

  disableAutoUpdate() {
    clearInterval(this._interval);
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
    this.tweens = null;
    this.disableAutoUpdate();
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
