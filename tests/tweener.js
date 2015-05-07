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

    it('should dispacth completion callback', function(){
      var tweener = new Tweener();
      var steps = 60;
      var obj = {x:0};
      var success = false;
      tweener.add(obj).to({x:100}, steps, Tweener.ease.linear).then(callback);

      function callback() {
        success = true;
      }

      for (var i = 0; i < steps; i++) {
        tweener.update(1);
      }

      assert.equal(success, true, 'Failure!');


    });
  })

})
