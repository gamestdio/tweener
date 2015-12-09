'use strict'

import {assert} from 'chai';
import Tween from '../source/Tween';

function update(tween, times = 5, delta = 1) {
  for (var i = 0; i < times; i++) {
    tween.update(delta);
  }
}

describe('Tween', () => {
  describe('#constructor()', () => {
    it('Should create a valid Tween', () => {
      var obj = {x:0, y:0};
      var tween = new Tween(obj);
      assert.equal(tween._ref, obj);
      assert.equal(tween._target, obj);
      assert.equal(tween._lastState, obj);
    });
  });
  describe('#add()', () => {
    it('Should set the target for further params', () => {
      var objA = {x:0, y:0};
      var objB = {x:0, y:0};
      var tween = new Tween(objA);
      assert.equal(tween._ref, objA);
      tween.add(objB);
      assert.equal(tween._ref, objA);
      assert.equal(tween._target, objB);
      assert.equal(tween._lastState, objB);
    });
  });
  describe('#to()', () => {
    it('Should enqueue the desirable action', () => {
      var obj = {x:0, y:0};
      var tween = new Tween(obj);
      tween.to({x:50}, 3);
      assert.equal(tween._length, 1);
      assert.equal(tween._queue.length, 1);
      assert.equal(tween._queue[0].fr, {x:0});
      assert.equal(tween._queue[0].to, {x:50});
    });
  });
});
