import Tween from './Tween';
import eases from 'eases';

/**
 * A tween manager. Deals with tween creation, update and destruction.
 * @class Tweener
 * @constructor
 * @param [autoUpdateRate] {float} Interval (in seconds) that all tweens will be updated. If 0, the auto-update will not
 * run, so you must handle the update manually. Default is 0.
 */
export default class Tweener {

  constructor(autoUpdateRate) {
    this.debug = false;
    this.tweens = [];
    this._interval = null;
    if (autoUpdateRate > 0) {
      this.enableAutoUpdate(autoUpdateRate);
    }
  }

  /**
   * Create and return a Tween instance with referenced object.
   * @method Tweener#add
   * @param obj {object} The object that will be tweened.
   * @return Tween
   */
  add(obj) {
    var tween = new Tween(obj);
    tween.debug = this.debug;
    this.tweens.push(tween);
    return tween;
  }

  /**
   * Remove all tween instances that have reference to the object.
   * @method Tweener#remove
   * @param obj {object} The tweened object.
   */
  remove(obj) {
    var i = this.tweens.length;
    while (i--) {
      var t = this.tweens[i];
      if (t.obj === obj) {
        this._destroy(t, i);
      }
    }
  }

  /**
   * Runs the update method automatically.
   * @method Tweener#enableAutoUpdate
   * @param rate {float} Interval (in seconds) that the update will be played.
   * If 0 or lower, the automatic update will be disabled.
   */
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

  /**
   * Stops the automatic update.
   * @method Tweener#disableAutoUpdate
   */
  disableAutoUpdate() {
    clearInterval(this._interval);
  }

  /**
   * Update all tweens.
   * @method Tweener#update
   * @param delta {float} The elapsed time (in seconds) since last update.
   */
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

  /**
   * Destroy Tweener instance.
   * @method Tweener#dispose
   */
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
