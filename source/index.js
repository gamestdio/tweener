import Tweener from './Tweener';
import Tween from './Tween';
import eases from 'eases';

Tweener.Tween = Tween;
Tweener.ease = eases;

if (typeof(window) === "object") {
  window.Tweener = Tweener;
}

module.exports = Tweener;
