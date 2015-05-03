if (typeof(window)==="object") {
  var assert = chai.assert;
} else {
  var assert = require('chai').assert;
  var Tweener = require('../dist/tweener.js');
}

describe('Tweener', function(){

  describe('#add()', function(){
    var target = {x: 0, y: 0};
    it('should return a Tween instance', function(){
      var tweener = new Tweener();
      var tween = tweener.add(target);
      assert.equal(tween.constructor.name, 'Tween')
    });

    it('should add a new item into the update list', function(){
      var tweener = new Tweener();
      tweener.add(target);
      assert.equal(tweener.tweens.length, 1);
    });
  })

})
