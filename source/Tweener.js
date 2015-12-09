import Tween from './Tween';

export default class Tweener {
  constructor(autoUpdateRate = 0) {
    this.debug = false;
    this.tweens = [];
    this._interval = null;
    this.setAutoUpdateRate(autoUpdateRate);
  }

  dispose() {
    clearInterval(this._interval);
    this._interval = null;
    this.tweens = null;
  }

  setAutoUpdateRate(value) {
    clearInterval(this._interval);
    this._interval = null;

    if (value > 0) {
      this._time = this.getTime();
      this._interval = setInterval(this._autoUpdate.bind(this), value*1000);
    }
  }

  _autoUpdate() {
    var t = this.getTime();
    var d = t - this._time;
    this._time = t;
    this.update(d);
  }

  add(obj) {
    var tween = new Tween(obj);
    this.tweens.push(tween);
    return tween;
  }

  remove(obj) {
    var i = this.tweens.length;
    while (i--) {
      var t = this.tweens[i];
      if (t._ref === obj) {
        this.tweens.splice(i, 1);
      }
    }
  }

  update(delta) {
    var i = this.tweens.length;
    while (i--) {
      var t = this.tweens[i];
      if (t.update(delta)) {
        this.tweens.splice(i, 1);
      }
    }
  }

  getTime() {
    return new Date().getTime()/1000;
  }
}
