if (typeof(window)==="object") {
  var assert = chai.assert;
} else {
  var assert = require('chai').assert;
  var Tweener = require('../dist/tweener.js');
}

describe('Tweener', function(){

  describe('#add()', function(){
    var targetA = {x: 0, y: 0};
    var targetB = {x: 0, y: 0};
    var tweener = null;

    function updateTweener(steps) {
      for (var i = 0; i < steps; i++) {
        tweener.update(1);
      }
    }

    it('should return create a Tweener instance', function(){
      tweener = new Tweener();
      assert.equal(tweener.constructor.name, 'Tweener')
    });

    it('should return a Tween instance', function(){
      var tween = tweener.add(targetA);
      assert.equal(tween.constructor.name, 'Tween');
    });


    it('should add a new tween into the update list', function(){
      tweener.add(targetB);
      assert.equal(tweener.tweens.length, 2);
    });


    it('should remove all tweens with given target', function(){
      tweener.remove(targetA);
      assert.equal(tweener.tweens.length, 1);
    });

    it('should remove all tweens with given target', function(){
      tweener.remove(targetB);
      assert.equal(tweener.tweens.length, 0);
    });

    it('should finish with expected value', function(){
      var targetValue = 100.123;

      tweener.remove(targetA);
      tweener.add(targetA)
        .to({x:10.1, y:10.2}, 1, Tweener.ease.backOut)
        .to({x:Math.random()*targetValue}, 1, Tweener.ease.quartOut)
        .to({y:Math.random()*targetValue}, 1, Tweener.ease.expoInOut)
        .to({x:targetValue, y:targetValue}, 1, Tweener.ease.elasticOut);

      updateTweener(100);

      var success = (targetA.x === targetValue && targetA.y === targetValue);
      assert.equal(success, true, 'finished with x:' + targetA.x + ' and y:' + targetA.y);
    });

    it('should remove all tweens with given target, breaking running tween', function(){
      tweener.add(targetA).to({y:200}, 5);
      tweener.add(targetA).to({x:100}, 3).then(callback);

      function callback() {
        tweener.remove(targetA);
      }

      updateTweener(100);

      assert.equal(tweener.tweens.length, 0);
    });

    it('should delete running tween', function(){
      var steps = 60;

      tweener.add(targetA).to({x:100}, steps, Tweener.ease.linear);
      updateTweener(steps/2);
      tweener.remove(targetA);
      updateTweener(steps/2);

      assert.equal(tweener.tweens.length, 0);
    });

    it('should dispacth completion callback', function(){
      var steps = 30;
      var success = false;
      tweener.add(targetA)
        .to({x:100}, steps, Tweener.ease.linear)
        .to({x:100}, steps, Tweener.ease.linear)
        .then(callback);

      function callback() {
        success = true;
      }

      updateTweener(100);

      assert.equal(success, true);
    });

    it('should dispacth completion deleting himself', function(){
      tweener.add(targetA).to({x:100}, 60, Tweener.ease.linear).then(callback);

      function callback() {
        tweener.remove(targetA);
      }

      updateTweener(100);

      assert.equal(tweener.tweens.length, 0);
    });
  })

})
