import Tweener from './Tweener';
import eases from 'eases';
Tweener.ease = eases;

if (typeof(window) === "object") {
  window.Tweener = Tweener;
}

module.exports = Tweener;
