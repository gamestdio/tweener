#Tweener 0.1 [![Build Status](https://secure.travis-ci.org/endel/tweener.png?branch=master)](https://travis-ci.org/endel/tweener)

Just a minimal tween library.

## Usage ##

```javascript
// Creating a Tweener instance with auto-update of 60 ticks per second.
// Tweener is not static. Is up to you to handle with the reference:
var tweener = new Tweener(1/60);

// Applying a simple tween to the target:
tweener.add(target).to({x:300, y:200}, 2, Tweener.ease.backOut);

// Kill all tweens by target:
tweener.remove(target);
```

### CHAINING ###
```javascript
// Dispatch a callback after tween completion:
tweener.add(target).from({x:300, y:200}, 2, Tweener.ease.elasticOut).then(onCompleteMethod);

// Delaying tween start by 1 second:
tweener.add(target).wait(1).to({x:300, y:200}, 2, Tweener.ease.expoOut);

// Delaying the callback by 1 second:
tweener.add(target).to({x:300, y:200}, 2, Tweener.ease.quintOut).wait(1).then(onCompleteMethod);

// Go, then come back:
tweener.add(target).to({x:300}, 2, Tweener.ease.sineOut).to({x:0}, 2, Tweener.ease.sineOut);

// Tweening targetB after targetA:
tweener.add(targetA).to({x:300}, 2, Tweener.ease.sineOut).swap(targetB).to({x:300}, 2, Tweener.ease.sineOut);
```

### MANUAL UPDATE ###
```javascript

// You can create diferent Tweener instances without auto-update:
var tweenerA = new Tweener();
var tweenerB = new Tweener();

// Then, you need to call the update, passing the elapsed time:
tweenerA.update(elapesdTimeInSeconds);
tweenerB.update(elapesdTimeInMilliseconds);

// Added tweens will work with elapsed time format:
tweenerA.add(targetA).to({x:300, y:200}, 0.5, Tweener.ease.backOut); //seconds
tweenerB.add(targetB).to({x:300, y:200}, 500, Tweener.ease.backOut); //milliseconds

// Separating tweeners can be useful for some things. In a game, for example:
function update(elapsedTime) {
	// Tweener for ui and hud:
	tweenerA.update(elapsedTime);

	if (!game.paused) {
		// Tweener used by game entities:
		tweenerB.update(elapsedTime);
	}
}

```
