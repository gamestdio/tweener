'use strict'

import {assert} from 'chai';
import Tween from '../source/Tween';

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
});
