#Tweener 0.1 [![Build Status](https://secure.travis-ci.org/maurodetarso/tweener.png?branch=master)](https://travis-ci.org/maurodetarso/tweener)

Just a minimal tween library.
Work in progress.

## Usage ##

```javascript
// Tweener is not singleton. You need to create the instance.
// Creating a Tweener instance with auto-update of 60 ticks per second:
var tweener = new Tweener(1/60);

// Tweening an object:
tweener.add(target).to({x:300, y:200}, 2, Tweener.ease.backOut);

// Killing tweens:
tweener.remove(target);
```

#### CHAINING ####
```javascript
// Dispatching a callback after completion:
tweener.add(target).from({x:300, y:200}, 2, Tweener.ease.elasticOut).then(method);

// Delaying tween start by 1 second:
tweener.add(target).wait(1).to({x:300, y:200}, 2, Tweener.ease.expoOut);

// Delaying the callback by 1 second:
tweener.add(target).to({x:300, y:200}, 2, Tweener.ease.quintOut).wait(1).then(method);

// Go, then come back:
tweener.add(target).to({x:300}, 2, Tweener.ease.sineOut).to({x:0}, 2, Tweener.ease.sineOut);

// Tweening targetB after targetA:
tweener.add(targetA).to({x:300}, 2, Tweener.ease.sineOut).add(targetB).to({x:300}, 2, Tweener.ease.sineOut);
```

#### MANUAL UPDATE ####
```javascript

// You can create Tweener instances without auto-update:
var tweenerA = new Tweener();
var tweenerB = new Tweener();

// Then, you need to call the update, passing the elapsed time:
tweenerA.update(elapesdTimeInSeconds);
tweenerB.update(elapesdTimeInMilliseconds);

// Added tweens will work with elapsed time format:
tweenerA.add(targetA).to({x:300, y:200}, 0.5, Tweener.ease.backOut); //seconds
tweenerB.add(targetB).to({x:300, y:200}, 500, Tweener.ease.backOut); //milliseconds
```
