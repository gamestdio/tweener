import Tween from './Tween';
/**
 * Tweener creates and manages Tween instances.
 */
export default class Tweener {
  /**
   * Creates an instance of Tweener.
   * @param {Number} [autoUpdateRate=0] - Auto-update step. If 0, it should be updated manually.
   */
  constructor(autoUpdateRate = 0) {
    /**
     * Array of current Tween instances.
     * @type {Array<Tween>}
     */
    this.tweens = [];
    this._interval = null;
    this.setAutoUpdateRate(autoUpdateRate);
  }

  /**
   * Destroys the instance.
   */
  dispose() {
    clearInterval(this._interval);
    this._interval = null;
    this.tweens = null;
  }

  /**
   * Sets the auto-update rate, the default time interval between updates.
   * @param {Number} [rate=0] - Auto-update step. If 0, it should be updated manually.
   */
  setAutoUpdateRate(rate = 0) {
    clearInterval(this._interval);
    this._interval = null;

    if (rate > 0) {
      this._time = this._getTime();
      this._interval = setInterval(this._autoUpdate.bind(this), rate*1000);
    }
  }

  _autoUpdate() {
    var t = this._getTime();
    var d = t - this._time;
    this._time = t;
    this.update(d);
  }

  _getTime() {
    return new Date().getTime()/1000;
  }

  /**
   * Creates and returns a new Tween instance based on given object.
   * @param {Object} obj - The object which will be updated.
   * @returns {Tween} The Tween instance created.
   */
  add(obj) {
    var tween = new Tween(obj);
    this.tweens.push(tween);
    return tween;
  }

  /**
   * Removes all Tween instances based on given object.
   * @param {Object} obj - The object used as reference.
   */
  remove(obj) {
    var i = this.tweens.length;
    while (i--) {
      var t = this.tweens[i];
      if (t._ref === obj) {
        this.tweens.splice(i, 1);
      }
    }
  }

  /**
   * Updates all Tweens. Should be called manually if auto-update rate is 0.
   * @param {Number} [delta=0] - The desired time step for update.
   */
  update(delta = 0) {
    var i = this.tweens.length;
    while (i--) {
      var t = this.tweens[i];
      if (t.update(delta)) {
        this.tweens.splice(i, 1);
      }
    }
  }
}
