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

    it('should return a Tween instance', function(){
      var tweener = new Tweener();
      var tween = tweener.add(targetA);
      assert.equal(tween.constructor.name, 'Tween')
    });


    it('should add a new item into the update list', function(){
      var tweener = new Tweener();
      tweener.add(targetA);
      assert.equal(tweener.tweens.length, 1);
    });


    it('should remove all tweens with given target', function(){
      var tweener = new Tweener();
      tweener.add(targetA);
      tweener.add(targetB);
      tweener.remove(targetA);
      assert.equal(tweener.tweens.length, 1);
    });


    it('should finish with expected value', function(){
      var tweener = new Tweener();
      var targetValue = 100.123;

      tweener.add(targetA)
        .to({x:10.1, y:10.2}, 1, Tweener.ease.backOut)
        .to({x:Math.random()*targetValue}, 1, Tweener.ease.quartOut)
        .to({y:Math.random()*targetValue}, 1, Tweener.ease.expoInOut)
        .to({x:targetValue, y:targetValue}, 1, Tweener.ease.elasticOut);

      var steps = 100;
      for (var i = 0; i < steps; i++) {
        tweener.update(0.01 + Math.random());
      }

      var success = (targetA.x === targetValue && targetA.y === targetValue);
      assert.equal(success, true, 'finished with x:' + targetA.x + ' and y:' + targetA.y);
    });


    it('should delete running tween', function(){
      var tweener = new Tweener();
      var steps = 60;

      tweener.add(targetA).to({x:100}, steps, Tweener.ease.linear);
      for (var i = 0; i < steps; i++) {
        tweener.update(1);
        if (i == 30) tweener.remove(targetA);
      }

      assert.equal(tweener.tweens.length, 0);
    });

    it('should dispacth completion callback', function(){
      var tweener = new Tweener();
      var steps = 30;
      var success = false;
      tweener.add(targetA)
        .to({x:100}, steps, Tweener.ease.linear)
        .to({x:100}, steps, Tweener.ease.linear)
        .then(callback);

      function callback() {
        success = true;
      }

      for (var i = 0; i < steps*2; i++) {
        tweener.update(1);
      }

      assert.equal(success, true);
    });

    it('should dispacth completion deleting himself', function(){
      var tweener = new Tweener();
      var steps = 60;
      tweener.add(targetA).to({x:100}, steps, Tweener.ease.linear).then(callback);

      function callback() {
        tweener.remove(targetA);
      }

      for (var i = 0; i < steps; i++) {
        tweener.update(1);
      }

      assert.equal(tweener.tweens.length, 0);
    });
  })

})
