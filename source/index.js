var Tweener = require('./Tweener');
var Tween = require('./Tween');
var eases = require('eases');

Tweener.Tween = Tween;
Tweener.ease = eases;

if (typeof(window) === "object") {
  window.Tweener = Tweener;
}

module.exports = Tweener;
