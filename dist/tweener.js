(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Tweener = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tween = (function () {
  function Tween() {
    var ref = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    _classCallCheck(this, Tween);

    this._ref = ref;
    this._lastState = ref;
    this._target = ref;
    this._queue = [];
    this._length = 0;
    this._current = 0;
  }

  _createClass(Tween, [{
    key: "_getParams",
    value: function _getParams() {
      var tgt = arguments.length <= 0 || arguments[0] === undefined ? this._target : arguments[0];
      var dur = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var ez = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      var params = {
        tgt: tgt,
        dur: dur,
        pos: 0,
        ez: ez,
        fr: null,
        to: null,
        cb: null
      };
      this._queue[this._length] = params;
      this._length += 1;
      return params;
    }
  }, {
    key: "_copy",
    value: function _copy(src, fields) {
      var o = {};
      for (var f in fields) {
        o[f] = src[f];
      }
      return o;
    }
  }, {
    key: "add",
    value: function add(target) {
      this._target = target;
      this._lastState = target;
      return this;
    }
  }, {
    key: "to",
    value: function to(props, duration, ease) {
      var p = this._getParams(this._target, duration, ease);
      p.fr = this._copy(this._lastState, props);
      p.to = props;
      this._lastState = props;
      return this;
    }
  }, {
    key: "from",
    value: function from(props, duration, ease) {
      var p = this._getParams(this._target, duration, ease);
      p.fr = props;
      p.to = this._copy(this._lastState, props);
      return this;
    }
  }, {
    key: "wait",
    value: function wait(duration) {
      var p = this._getParams();
      p.dur = duration;
      return this;
    }
  }, {
    key: "then",
    value: function then(fn) {
      var p = this._queue[this._length - 1];
      p.cb = fn;
      return this;
    }
  }, {
    key: "update",
    value: function update(delta) {
      var p = this._queue[this._current];
      var r = 1;
      var complete = false;

      p.pos += delta;

      if (p.dur > 0 && p.pos < p.dur) {
        r = p.ez ? p.ez(p.pos / p.dur) : p.pos / p.dur;
      }

      if (p.to && p.tgt) {
        for (var f in p.to) {
          var vf = p.fr[f];
          var vt = p.to[f];
          p.tgt[f] = vf + (vt - vf) * r;
        }
      }

      if (p.pos >= p.dur) {
        if (p.cb) {
          p.cb();
        }

        this._current += 1;
        if (this._current >= this._length) {
          complete = true;
        }
      }

      return complete;
    }
  }]);

  return Tween;
})();

exports["default"] = Tween;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Tween = require('./Tween');

var _Tween2 = _interopRequireDefault(_Tween);

var Tweener = (function () {
  function Tweener() {
    var autoUpdateRate = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    _classCallCheck(this, Tweener);

    this.debug = false;
    this.tweens = [];
    this._interval = null;
    this.setAutoUpdateRate(autoUpdateRate);
  }

  _createClass(Tweener, [{
    key: 'dispose',
    value: function dispose() {
      clearInterval(this._interval);
      this.autoUpdateRate = 0;
      this.tweens = null;
    }
  }, {
    key: 'setAutoUpdateRate',
    value: function setAutoUpdateRate(value) {
      clearInterval(this._interval);
      if (value <= 0) {
        this._interval = null;
      } else {
        this._time = this.getTime();
        this._interval = setInterval(this._autoUpdate.bind(this), value * 1000);
      }
    }
  }, {
    key: '_autoUpdate',
    value: function _autoUpdate() {
      var t = this.getTime();
      var d = t - this._time;
      this._time = t;
      this.update(d);
    }
  }, {
    key: 'add',
    value: function add(obj) {
      var tween = new _Tween2['default'](obj);
      this.tweens.push(tween);
      return tween;
    }
  }, {
    key: 'remove',
    value: function remove(obj) {
      var i = this.tweens.length;
      while (i--) {
        var t = this.tweens[i];
        if (t._reference === obj) {
          this.tweens.splice(i, 1);
        }
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      var i = this.tweens.length;
      while (i--) {
        var t = this.tweens[i];
        if (t.update(delta)) {
          this.tweens.splice(i, 1);
        }
      }
    }
  }, {
    key: 'getTime',
    value: function getTime() {
      return new Date().getTime() / 1000;
    }
  }]);

  return Tweener;
})();

exports['default'] = Tweener;
module.exports = exports['default'];

},{"./Tween":1}],3:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _Tweener = require('./Tweener');

var _Tweener2 = _interopRequireDefault(_Tweener);

if (typeof window === "object") {
  window.Tweener = _Tweener2["default"];
}

module.exports = _Tweener2["default"];

},{"./Tweener":2}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF1cm9kZXRhcnNvL3Byb2plY3RzL3R3ZWVuZXIvc291cmNlL1R3ZWVuLmpzIiwiL1VzZXJzL21hdXJvZGV0YXJzby9wcm9qZWN0cy90d2VlbmVyL3NvdXJjZS9Ud2VlbmVyLmpzIiwiL1VzZXJzL21hdXJvZGV0YXJzby9wcm9qZWN0cy90d2VlbmVyL3NvdXJjZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBcUIsS0FBSztBQUNiLFdBRFEsS0FBSyxHQUNBO1FBQVosR0FBRyx5REFBRyxJQUFJOzswQkFESCxLQUFLOztBQUV0QixRQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNoQixRQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztBQUN0QixRQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUNuQixRQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixRQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNqQixRQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztHQUNuQjs7ZUFSa0IsS0FBSzs7V0FVZCxzQkFBeUM7VUFBeEMsR0FBRyx5REFBRyxJQUFJLENBQUMsT0FBTztVQUFFLEdBQUcseURBQUcsQ0FBQztVQUFFLEVBQUUseURBQUcsSUFBSTs7QUFDL0MsVUFBSSxNQUFNLEdBQUc7QUFDWCxXQUFHLEVBQUUsR0FBRztBQUNSLFdBQUcsRUFBRSxHQUFHO0FBQ1IsV0FBRyxFQUFFLENBQUM7QUFDTixVQUFFLEVBQUUsRUFBRTtBQUNOLFVBQUUsRUFBRSxJQUFJO0FBQ1IsVUFBRSxFQUFFLElBQUk7QUFDUixVQUFFLEVBQUUsSUFBSTtPQUNULENBQUM7QUFDRixVQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FB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SSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDM0IsYUFBTyxDQUFDLEVBQUUsRUFBRTtBQUNWLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsWUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ25CLGNBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMxQjtPQUNGO0tBQ0Y7OztXQUVNLG1CQUFHO0FBQ1IsYUFBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFDLElBQUksQ0FBQztLQUNsQzs7O1NBM0RrQixPQUFPOzs7cUJBQVAsT0FBTzs7Ozs7Ozs7dUJDRlIsV0FBVzs7OztBQUUvQixJQUFJLE9BQU8sTUFBTSxBQUFDLEtBQUssUUFBUSxFQUFFO0FBQy9CLFFBQU0sQ0FBQyxPQUFPLHVCQUFVLENBQUM7Q0FDMUI7O0FBRUQsTUFBTSxDQUFDLE9BQU8sdUJBQVUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbiB7XG4gIGNvbnN0cnVjdG9yKHJlZiA9IG51bGwpIHtcbiAgICB0aGlzLl9yZWYgPSByZWY7XG4gICAgdGhpcy5fbGFzdFN0YXRlID0gcmVmO1xuICAgIHRoaXMuX3RhcmdldCA9IHJlZjtcbiAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgdGhpcy5fY3VycmVudCA9IDA7XG4gIH1cblxuICBfZ2V0UGFyYW1zKHRndCA9IHRoaXMuX3RhcmdldCwgZHVyID0gMCwgZXogPSBudWxsKSB7XG4gICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgIHRndDogdGd0LFxuICAgICAgZHVyOiBkdXIsXG4gICAgICBwb3M6IDAsXG4gICAgICBlejogZXosXG4gICAgICBmcjogbnVsbCxcbiAgICAgIHRvOiBudWxsLFxuICAgICAgY2I6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuX3F1ZXVlW3RoaXMuX2xlbmd0aF0gPSBwYXJhbXM7XG4gICAgdGhpcy5fbGVuZ3RoICs9IDE7XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIF9jb3B5KHNyYywgZmllbGRzKSB7XG4gICAgdmFyIG8gPSB7fTtcbiAgICBmb3IgKHZhciBmIGluIGZpZWxkcykge1xuICAgICAgb1tmXSA9IHNyY1tmXTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH1cblxuICBhZGQodGFyZ2V0KSB7XG4gICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuX2xhc3RTdGF0ZSA9IHRhcmdldDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvKHByb3BzLCBkdXJhdGlvbiwgZWFzZSkge1xuICAgIHZhciBwID0gdGhpcy5fZ2V0UGFyYW1zKHRoaXMuX3RhcmdldCwgZHVyYXRpb24sIGVhc2UpO1xuICAgIHAuZnIgPSB0aGlzLl9jb3B5KHRoaXMuX2xhc3RTdGF0ZSwgcHJvcHMpO1xuICAgIHAudG8gPSBwcm9wcztcbiAgICB0aGlzLl9sYXN0U3RhdGUgPSBwcm9wcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZyb20ocHJvcHMsIGR1cmF0aW9uLCBlYXNlKSB7XG4gICAgdmFyIHAgPSB0aGlzLl9nZXRQYXJhbXModGhpcy5fdGFyZ2V0LCBkdXJhdGlvbiwgZWFzZSk7XG4gICAgcC5mciA9IHByb3BzO1xuICAgIHAudG8gPSB0aGlzLl9jb3B5KHRoaXMuX2xhc3RTdGF0ZSwgcHJvcHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgd2FpdChkdXJhdGlvbikge1xuICAgIHZhciBwID0gdGhpcy5fZ2V0UGFyYW1zKCk7XG4gICAgcC5kdXIgPSBkdXJhdGlvbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRoZW4oZm4pIHtcbiAgICB2YXIgcCA9IHRoaXMuX3F1ZXVlW3RoaXMuX2xlbmd0aCAtIDFdO1xuICAgIHAuY2IgPSBmbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZShkZWx0YSkge1xuICAgIHZhciBwID0gdGhpcy5fcXVldWVbdGhpcy5fY3VycmVudF07XG4gICAgdmFyIHIgPSAxO1xuICAgIHZhciBjb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgcC5wb3MgKz0gZGVsdGE7XG5cbiAgICBpZiAocC5kdXIgPiAwICYmIHAucG9zIDwgcC5kdXIpIHtcbiAgICAgIHIgPSBwLmV6ID8gcC5leihwLnBvcy9wLmR1cikgOiBwLnBvcy9wLmR1cjtcbiAgICB9IFxuXG4gICAgaWYgKHAudG8gJiYgcC50Z3QpIHtcbiAgICAgIGZvciAodmFyIGYgaW4gcC50bykge1xuICAgICAgICB2YXIgdmYgPSBwLmZyW2ZdO1xuICAgICAgICB2YXIgdnQgPSBwLnRvW2ZdO1xuICAgICAgICBwLnRndFtmXSA9IHZmICsgKHZ0IC0gdmYpKnI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHAucG9zID49IHAuZHVyKSB7XG4gICAgICBpZiAocC5jYikge1xuICAgICAgICBwLmNiKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2N1cnJlbnQgKz0gMTtcbiAgICAgIGlmICh0aGlzLl9jdXJyZW50ID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICBjb21wbGV0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBsZXRlO1xuICB9XG59XG4iLCJpbXBvcnQgVHdlZW4gZnJvbSAnLi9Ud2Vlbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuZXIge1xuICBjb25zdHJ1Y3RvcihhdXRvVXBkYXRlUmF0ZSA9IDApIHtcbiAgICB0aGlzLmRlYnVnID0gZmFsc2U7XG4gICAgdGhpcy50d2VlbnMgPSBbXTtcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5zZXRBdXRvVXBkYXRlUmF0ZShhdXRvVXBkYXRlUmF0ZSk7XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgIHRoaXMuYXV0b1VwZGF0ZVJhdGUgPSAwO1xuICAgIHRoaXMudHdlZW5zID0gbnVsbDtcbiAgfVxuXG4gIHNldEF1dG9VcGRhdGVSYXRlKHZhbHVlKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgaWYgKHZhbHVlIDw9IDApIHtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGltZSA9IHRoaXMuZ2V0VGltZSgpO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLl9hdXRvVXBkYXRlLmJpbmQodGhpcyksIHZhbHVlKjEwMDApO1xuICAgIH1cbiAgfVxuXG4gIF9hdXRvVXBkYXRlKCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRUaW1lKCk7XG4gICAgdmFyIGQgPSB0IC0gdGhpcy5fdGltZTtcbiAgICB0aGlzLl90aW1lID0gdDtcbiAgICB0aGlzLnVwZGF0ZShkKTtcbiAgfVxuXG4gIGFkZChvYmopIHtcbiAgICB2YXIgdHdlZW4gPSBuZXcgVHdlZW4ob2JqKTtcbiAgICB0aGlzLnR3ZWVucy5wdXNoKHR3ZWVuKTtcbiAgICByZXR1cm4gdHdlZW47XG4gIH1cblxuICByZW1vdmUob2JqKSB7XG4gICAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICAgIGlmICh0Ll9yZWZlcmVuY2UgPT09IG9iaikge1xuICAgICAgICB0aGlzLnR3ZWVucy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGRlbHRhKSB7XG4gICAgdmFyIGkgPSB0aGlzLnR3ZWVucy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHQgPSB0aGlzLnR3ZWVuc1tpXTtcbiAgICAgIGlmICh0LnVwZGF0ZShkZWx0YSkpIHtcbiAgICAgICAgdGhpcy50d2VlbnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpLzEwMDA7XG4gIH1cbn1cbiIsImltcG9ydCBUd2VlbmVyIGZyb20gJy4vVHdlZW5lcic7XG5cbmlmICh0eXBlb2Yod2luZG93KSA9PT0gXCJvYmplY3RcIikge1xuICB3aW5kb3cuVHdlZW5lciA9IFR3ZWVuZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5lcjtcbiJdfQ==
