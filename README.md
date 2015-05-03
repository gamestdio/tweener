#Tweener 0.1 [![Build Status](https://secure.travis-ci.org/endel/tweener.png?branch=master)](https://travis-ci.org/endel/tweener)

Just a minimal tween library.

## Features ##
- Simple and familiar api;
- Chaining-based methods (from, to, wait, then, swap);
- No singleton: many instances of tweener can run indepentently;
- No dependencies.

## Usage ##

### BASIC ###

```javascript
// Creating a Tweener instance with auto-update of 60 ticks per second.
// Tweener is not static. Is up to you to handle with the reference:
var tweener = new Tweener(1/60);

// Applying a simple tween to the target:
tweener.add(target).to({x:300, y:200}, 2, Ease.outBack);

// Kill all tweens by target:
tweener.remove(target);
```

### CHAINING ###
```javascript
// Dispatch a callback after tween completion:
tweener.add(target).from({x:300, y:200}, 2, Ease.outElastic).then(onCompleteMethod);

// Delaying tween start by 1 second:
tweener.add(target).wait(1).to({x:300, y:200}, 2, Ease.inExpo);

// Delaying the callback by 1 second:
tweener.add(target).to({x:300, y:200}, 2, Ease.outQuint).wait(1).then(onCompleteMethod);

// Go, then come back:
tweener.add(target).to({x:300}, 2, Ease.outSine).to({x:0}, 2, Ease.outSine);

// Tweening targetB after targetA:
tweener.add(targetA).to({x:300}, 2, Ease.outSine).swap(targetB).to({x:300}, 2, Ease.outSine);
```

### UPDATING BY YOUR OWN ###
```javascript

// You can create diferent Tweener instances without auto-update:
var tweenerA = new Tweener();
var tweenerB = new Tweener();

// Then, you need to call the update, passing the elapsed time:
tweenerA.update(elapesdTimeInSeconds);
tweenerB.update(elapesdTimeInMilliseconds);

// Added tweens will work with elapsed time format:
tweenerA.add(targetA).to({x:300, y:200}, 0.5, Ease.outBack); //seconds
tweenerB.add(targetB).to({x:300, y:200}, 500, Ease.outBack); //milliseconds

// Separating tweeners can be useful for some things. In a game, for example:
function update(elapsedTime)
{
	// Tweener for ui and hud:
	tweenerA.update(elapsedTime);

	if (!game.paused)
	{
		// Tweener used by game entities:
		tweenerB.update(elapsedTime);
	}
}

```

## BUILD ##

Just run ```make``` on console. Needs [UglifyJS2](https://github.com/mishoo/UglifyJS2)
