'use strict'

import {assert} from 'chai';
import Tweener from '../source/Tweener';

function updateTweener(tweener, times, delta) {
  delta = delta === undefined ? 1 : delta;
  for (var i = 0; i < times; i++) {
    tweener.update(delta);
  }
}

describe('Tweener', function(){
  describe('#constructor()', function(){
    it('should create a Tweener instance', function(){
      var tweener = new Tweener();
      assert.equal(tweener.constructor.name, 'Tweener');
    });
    it('should create a Tweener instance with auto-update', function(){
      var tweener = new Tweener(1);
      assert.equal(tweener.constructor.name, 'Tweener');
      assert.notEqual(tweener._interval, null);
      tweener.setAutoUpdateRate(0);
      assert.equal(tweener._interval, null);
    });
  });

  describe('#dispose()', function(){
    it('should clear a Tweener instance', function(){
      var tweener = new Tweener();
      tweener.dispose();
      assert.equal(tweener.tweens, null);
      assert.equal(tweener._interval, null);
    });
    it('should clear a Tweener instance with auto-update', function(){
      var tweener = new Tweener(1/60);
      tweener.dispose();
      assert.equal(tweener._interval, null);
      assert.equal(tweener.tweens, null);
    });
  });

  describe('#setAutoUpdateRate()', function(){
    var tweener = new Tweener();
    it('should enable auto-update', function(){
      tweener.setAutoUpdateRate(60);
      assert.notEqual(tweener._interval, null);
    });

    it('should cancel auto-update', function(){
      tweener.setAutoUpdateRate(0);
      assert.equal(tweener._interval, null);
    });
  });

  describe('#add()', function(){
    var objA = {x: 0, y: 0};
    var objB = {x: 0, y: 0};
    var tweener = new Tweener();

    it('should add a Tween instance with given target', function(){
      var tweenA = tweener.add(objA);
      assert.equal(tweenA.constructor.name, 'Tween');
      assert.equal(tweener.tweens[0], tweenA);
      assert.equal(tweener.tweens[0]._target, objA);
      assert.equal(tweener.tweens.length, 1);
    });

    it('should add another Tween instance with given target', function(){
      var tweenB = tweener.add(objB);
      assert.equal(tweenB.constructor.name, 'Tween');
      assert.equal(tweener.tweens[1], tweenB);
      assert.equal(tweener.tweens[1]._target, objB);
      assert.equal(tweener.tweens.length, 2);
    });
  });

  describe('#remove()', function(){
    var objA = {x: 0, y: 0};
    var objB = {x: 0, y: 0};
    var tweener = new Tweener();

    it('should remove a Tween instance', function(){
      tweener.add(objA);
      tweener.remove(objA);
      assert.equal(tweener.tweens[0], undefined);
      assert.equal(tweener.tweens.length, 0);
    });

    it('should remove the right Tween instance', function(){
      tweener.add(objA);
      var tweenB = tweener.add(objB);
      tweener.remove(objA);
      assert.equal(tweener.tweens[0], tweenB);
      assert.equal(tweener.tweens.length, 1);
      tweener.remove(objB);
      assert.equal(tweener.tweens[0], undefined);
      assert.equal(tweener.tweens.length, 0);
    });

    it('should remove anything', function(){
      var tweenB = tweener.add(objB);
      tweener.remove(objA);
      assert.equal(tweener.tweens[0], tweenB);
      assert.equal(tweener.tweens.length, 1);
    });
  });

  describe('#update()', function(){
    var objA = {x: 0, y: 0};
    var tweener = new Tweener();

    it('should update correctly', function(){
      tweener.update(1);
      assert.equal(tweener.tweens[0], undefined);
      assert.equal(tweener.tweens.length, 0);
    });

    it('should update added tweens', function(){
      tweener.add(objA);
      tweener.update(1);
      assert.equal(tweener.tweens.length, 0);
      assert.equal(tweener.tweens[0], undefined);
    });

    it('should update and remove finished tweens', function(){
      tweener.add(objA);
      tweener.update(1);
      tweener.update(1);
      assert.equal(tweener.tweens[0], null);
      assert.equal(tweener.tweens.length, 0);
    });
  });
});
