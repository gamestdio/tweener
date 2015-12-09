'use strict'

import {assert} from 'chai';
import * as chai from 'chai';
import Tween from '../source/Tween';

function update(tween, times = 5, delta = 1) {
  for (var i = 0; i < times; i++) {
    tween.update(delta);
  }
}

describe('Tween', () => {
  describe('#constructor()', () => {
    it('should create a valid Tween', () => {
      var obj = {x:0, y:0};
      var tween = new Tween(obj);
      assert.equal(tween._ref, obj);
      assert.equal(tween._target, obj);
      assert.equal(tween._lastState, obj);
    });
  });
  describe('#_getParams()', () => {
    var obj = {x:0, y:0};
    var tween = new Tween(obj);
    it('should enqueue empty params', () => {
      var params = tween._getParams();
      assert.equal(tween._length, 1);
      assert.equal(tween._queue.length, 1);
      assert.deepEqual(tween._queue[0].dur, 0);
    });
  });

  describe('#_getProps()', () => {
    var obj = {x:10, y:20};
    var tween = new Tween(obj);
    it('should return correct props', () => {
      var props = tween._getProps({x:1, y:2}, {x:0});
      assert.equal(props.x, 1);
      assert.equal(props.y, undefined);
    });
    it('should get a value from target if src does not have it', () => {
      var props = tween._getProps({y:2}, {x:0});
      assert.equal(props.x, 10);
      assert.equal(props.y, undefined);
    });
  });

  describe('#add()', () => {
    it('should set the target for further params', () => {
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
    var obj = {x:0, y:0};
    var tween = new Tween(obj);
    tween.to({x:50}, 3);

    it('should enqueue the desirable action', () => {
      assert.equal(tween._length, 1);
      assert.equal(tween._queue.length, 1);
      assert.deepEqual(tween._queue[0].dur, 3);
    });
    it('should have the right properties', () => {
      assert.deepEqual(tween._queue[0].fr, {x:0});
      assert.deepEqual(tween._queue[0].to, {x:50});
    });
    it('should enqueue a new action', () => {
      tween.to({y:50}, 4);
      assert.equal(tween._length, 2);
      assert.equal(tween._queue.length, 2);
      assert.deepEqual(tween._queue[1].dur, 4);
    });
    it('should have the right params for the new action', () => {
      assert.deepEqual(tween._queue[1].fr, {y:0});
      assert.deepEqual(tween._queue[1].to, {y:50});
    });
    it('should preserve last action', () => {
      assert.deepEqual(tween._queue[0].dur, 3);
      assert.deepEqual(tween._queue[0].fr, {x:0});
      assert.deepEqual(tween._queue[0].to, {x:50});
    });
  });
  describe('#from()', () => {
    var obj = {x:0, y:0};
    var tween = new Tween(obj);
    tween.from({x:50}, 3);

    it('should enqueue the desirable action', () => {
      assert.equal(tween._length, 1);
      assert.equal(tween._queue.length, 1);
      assert.deepEqual(tween._queue[0].dur, 3);
    });
    it('should have the right properties', () => {
      assert.deepEqual(tween._queue[0].fr, {x:50});
      assert.deepEqual(tween._queue[0].to, {x:0});
    });
    it('should enqueue a new action', () => {
      tween.from({y:50}, 4);
      assert.equal(tween._length, 2);
      assert.equal(tween._queue.length, 2);
      assert.deepEqual(tween._queue[1].dur, 4);
    });
    it('should have the right params for the new action', () => {
      assert.deepEqual(tween._queue[1].fr, {y:50});
      assert.deepEqual(tween._queue[1].to, {y:0});
    });
    it('should preserve last action', () => {
      assert.deepEqual(tween._queue[0].dur, 3);
      assert.deepEqual(tween._queue[0].fr, {x:50});
      assert.deepEqual(tween._queue[0].to, {x:0});
    });
  });

  describe('#wait()', () => {
    var obj = {x:0, y:0};
    var tween = new Tween(obj);
    tween.wait(3);

    it('should have the desired duration', () => {
      assert.equal(tween._queue[0].dur, 3);
    });
    it('should be empty (without properties)', () => {
      assert.equal(tween._queue[0].fr, null);
      assert.equal(tween._queue[0].to, null);
    });
  });

  describe('#then()', () => {
    var obj = {x:0, y:0};
    var tween = new Tween(obj);
    var foo = false;
    tween.then(function() {
      foo = true;
    });

    it('should have no impact on queue', () => {
      assert.equal(tween._queue[0], undefined);
    });
    it('should have been executed', () => {
      assert.equal(foo, true);
    });
    it('should have the desired callback', () => {
      tween.to({x:50}).then(function() {
        foo = false;
      });
      assert.notEqual(tween._queue[0].cb, null);
    });
  });
});
