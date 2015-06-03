var assert = require('chai').assert;
var Tween = require('../dist/tweener.js').Tween;

describe('Tween', function() {
  describe('#constructor()', function() {
    it('Should create a valid Tween', function() {
      var obj = {x:0, y:0};
      var tween = new Tween(obj);
      assert.equal(tween.obj, obj);
    });
  });
});
