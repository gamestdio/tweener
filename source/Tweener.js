var Tween = require('./Tween');
var Ease = require('./Ease');

/**
 * A tween manager. Deals with tween creation, update and destruction.
 * @class Tweener
 * @constructor
 * @param [autoUpdateRate] {float} Interval (in seconds) that all tweens will be updated. If 0, the auto-update will not
 * run, so you must handle the update manually. Default is 0.
 */
function Tweener(autoUpdateRate)
{
  this.tweens = [];
  this._interval = null;
  if (autoUpdateRate > 0) this.enableAutoUpdate(autoUpdateRate);
}

/**
 * Create and return a Tween instance with referenced object.
 * @method Tweener#add
 * @param obj {object} The object that will be tweened.
 * @return Tween
 */
Tweener.prototype.add = function(obj) {
  var tween = new Tween(obj);
  this.tweens.push(tween);
  return tween;
}

/**
 * Remove all tween instances that have reference to the object.
 * @method Tweener#remove
 * @param obj {object} The tweened object.
 */
Tweener.prototype.remove = function(obj) {
  var i = this.tweens.length;
  while (i--) {
    var t = this.tweens[i];
    if (t.obj === obj) this._destroy(t, i);
  }
}

/**
 * Runs the update method automatically.
 * @method Tweener#enableAutoUpdate
 * @param rate {float} Interval (in seconds) that the update will be played.
 * If 0 or lower, the automatic update will be disabled.
 */
Tweener.prototype.enableAutoUpdate = function(rate) {
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
Tweener.prototype.disableAutoUpdate = function() {
  clearInterval(this._interval);
}

/**
 * Update all tweens.
 * @method Tweener#update
 * @param delta {float} The elapsed time (in seconds) since last update.
 */
Tweener.prototype.update = function(delta) {
  var i = this.tweens.length;
  while (i--) {
    var t = this.tweens[i];
    t.update(delta);
    if (t.finished()) this._destroy(t, i);
  }
}


Tweener.prototype._destroy = function(tween, index) {
  if (index == undefined) index = this.tween.indexOf(tween);
  this.tweens.splice(index, 1);
  tween.dispose();
}

Tweener.prototype.getTime = function() {
  return new Date().getTime()/1000;
}

// export Tweener/Tween/Ease globaly on the browser
if (typeof(window)==="object") {
  window.Tween = Tween;
  window.Ease = Ease;
}

module.exports = Tweener;
