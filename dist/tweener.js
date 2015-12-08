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

      if (r >= 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL21hdXJvZGV0YXJzby9wcm9qZWN0cy90d2VlbmVyL3NvdXJjZS9Ud2Vlbi5qcyIsIi9Vc2Vycy9tYXVyb2RldGFyc28vcHJvamVjdHMvdHdlZW5lci9zb3VyY2UvVHdlZW5lci5qcyIsIi9Vc2Vycy9tYXVyb2RldGFyc28vcHJvamVjdHMvdHdlZW5lci9zb3VyY2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQXFCLEtBQUs7QUFDYixXQURRLEtBQUssR0FDQTtRQUFaLEdBQUcseURBQUcsSUFBSTs7MEJBREgsS0FBSzs7QUFFdEIsUUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDaEIsUUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDdEIsUUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDbkIsUUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsUUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakIsUUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7R0FDbkI7O2VBUmtCLEtBQUs7O1dBVWQsc0JBQXlDO1VBQXhDLEdBQUcseURBQUcsSUFBSSxDQUFDLE9BQU87VUFBRSxHQUFHLHlEQUFHLENBQUM7VUFBRSxFQUFFLHlEQUFHLElBQUk7O0FBQy9DLFVBQUksTUFBTSxHQUFHO0FBQ1gsV0FBRyxFQUFFLEdBQUc7QUFDUixXQUFHLEVBQUUsR0FBRztBQUNSLFdBQUcsRUFBRSxDQUFDO0FBQ04sVUFBRSxFQUFFLEVBQUU7QUFDTixVQUFFLEVBQUUsSUFBSTtBQUNSLFVBQUUsRUFBRSxJQUFJO0FBQ1IsVUFBRSxFQUFFLElBQUk7T0FDVCxDQUFDO0FBQ0YsVUFBSSxDQUFDLE1BQU0sQ0FBQyxJ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QUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQzNCLGFBQU8sQ0FBQyxFQUFFLEVBQUU7QUFDVixZQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNuQixjQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUI7T0FDRjtLQUNGOzs7V0FFTSxtQkFBRztBQUNSLGFBQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBQyxJQUFJLENBQUM7S0FDbEM7OztTQTNEa0IsT0FBTzs7O3FCQUFQLE9BQU87Ozs7Ozs7O3VCQ0ZSLFdBQVc7Ozs7QUFFL0IsSUFBSSxPQUFPLE1BQU0sQUFBQyxLQUFLLFFBQVEsRUFBRTtBQUMvQixRQUFNLENBQUMsT0FBTyx1QkFBVSxDQUFDO0NBQzFCOztBQUVELE1BQU0sQ0FBQyxPQUFPLHVCQUFVLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4ge1xuICBjb25zdHJ1Y3RvcihyZWYgPSBudWxsKSB7XG4gICAgdGhpcy5fcmVmID0gcmVmO1xuICAgIHRoaXMuX2xhc3RTdGF0ZSA9IHJlZjtcbiAgICB0aGlzLl90YXJnZXQgPSByZWY7XG4gICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xuICB9XG5cbiAgX2dldFBhcmFtcyh0Z3QgPSB0aGlzLl90YXJnZXQsIGR1ciA9IDAsIGV6ID0gbnVsbCkge1xuICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICB0Z3Q6IHRndCxcbiAgICAgIGR1cjogZHVyLFxuICAgICAgcG9zOiAwLFxuICAgICAgZXo6IGV6LFxuICAgICAgZnI6IG51bGwsXG4gICAgICB0bzogbnVsbCxcbiAgICAgIGNiOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLl9xdWV1ZVt0aGlzLl9sZW5ndGhdID0gcGFyYW1zO1xuICAgIHRoaXMuX2xlbmd0aCArPSAxO1xuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICBfY29weShzcmMsIGZpZWxkcykge1xuICAgIHZhciBvID0ge307XG4gICAgZm9yICh2YXIgZiBpbiBmaWVsZHMpIHtcbiAgICAgIG9bZl0gPSBzcmNbZl07XG4gICAgfVxuICAgIHJldHVybiBvO1xuICB9XG5cbiAgYWRkKHRhcmdldCkge1xuICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLl9sYXN0U3RhdGUgPSB0YXJnZXQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0byhwcm9wcywgZHVyYXRpb24sIGVhc2UpIHtcbiAgICB2YXIgcCA9IHRoaXMuX2dldFBhcmFtcyh0aGlzLl90YXJnZXQsIGR1cmF0aW9uLCBlYXNlKTtcbiAgICBwLmZyID0gdGhpcy5fY29weSh0aGlzLl9sYXN0U3RhdGUsIHByb3BzKTtcbiAgICBwLnRvID0gcHJvcHM7XG4gICAgdGhpcy5fbGFzdFN0YXRlID0gcHJvcHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmcm9tKHByb3BzLCBkdXJhdGlvbiwgZWFzZSkge1xuICAgIHZhciBwID0gdGhpcy5fZ2V0UGFyYW1zKHRoaXMuX3RhcmdldCwgZHVyYXRpb24sIGVhc2UpO1xuICAgIHAuZnIgPSBwcm9wcztcbiAgICBwLnRvID0gdGhpcy5fY29weSh0aGlzLl9sYXN0U3RhdGUsIHByb3BzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdhaXQoZHVyYXRpb24pIHtcbiAgICB2YXIgcCA9IHRoaXMuX2dldFBhcmFtcygpO1xuICAgIHAuZHVyID0gZHVyYXRpb247XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aGVuKGZuKSB7XG4gICAgdmFyIHAgPSB0aGlzLl9xdWV1ZVt0aGlzLl9sZW5ndGggLSAxXTtcbiAgICBwLmNiID0gZm47XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoZGVsdGEpIHtcbiAgICB2YXIgcCA9IHRoaXMuX3F1ZXVlW3RoaXMuX2N1cnJlbnRdO1xuICAgIHZhciByID0gMTtcbiAgICB2YXIgY29tcGxldGUgPSBmYWxzZTtcblxuICAgIHAucG9zICs9IGRlbHRhO1xuXG4gICAgaWYgKHAuZHVyID4gMCAmJiBwLnBvcyA8IHAuZHVyKSB7XG4gICAgICByID0gcC5leiA/IHAuZXoocC5wb3MvcC5kdXIpIDogcC5wb3MvcC5kdXI7XG4gICAgfVxuXG4gICAgaWYgKHAudG8gJiYgcC50Z3QpIHtcbiAgICAgIGZvciAodmFyIGYgaW4gcC50bykge1xuICAgICAgICB2YXIgdmYgPSBwLmZyW2ZdO1xuICAgICAgICB2YXIgdnQgPSBwLnRvW2ZdO1xuICAgICAgICBwLnRndFtmXSA9IHZmICsgKHZ0IC0gdmYpKnI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHIgPj0gMSkge1xuICAgICAgaWYgKHAuY2IpIHtcbiAgICAgICAgcC5jYigpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jdXJyZW50ICs9IDE7XG4gICAgICBpZiAodGhpcy5fY3VycmVudCA+PSB0aGlzLl9sZW5ndGgpIHtcbiAgICAgICAgY29tcGxldGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wbGV0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFR3ZWVuIGZyb20gJy4vVHdlZW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbmVyIHtcbiAgY29uc3RydWN0b3IoYXV0b1VwZGF0ZVJhdGUgPSAwKSB7XG4gICAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xuICAgIHRoaXMudHdlZW5zID0gW107XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMuc2V0QXV0b1VwZGF0ZVJhdGUoYXV0b1VwZGF0ZVJhdGUpO1xuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICB0aGlzLmF1dG9VcGRhdGVSYXRlID0gMDtcbiAgICB0aGlzLnR3ZWVucyA9IG51bGw7XG4gIH1cblxuICBzZXRBdXRvVXBkYXRlUmF0ZSh2YWx1ZSkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgIGlmICh2YWx1ZSA8PSAwKSB7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aGlzLmdldFRpbWUoKTtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5fYXV0b1VwZGF0ZS5iaW5kKHRoaXMpLCB2YWx1ZSoxMDAwKTtcbiAgICB9XG4gIH1cblxuICBfYXV0b1VwZGF0ZSgpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0VGltZSgpO1xuICAgIHZhciBkID0gdCAtIHRoaXMuX3RpbWU7XG4gICAgdGhpcy5fdGltZSA9IHQ7XG4gICAgdGhpcy51cGRhdGUoZCk7XG4gIH1cblxuICBhZGQob2JqKSB7XG4gICAgdmFyIHR3ZWVuID0gbmV3IFR3ZWVuKG9iaik7XG4gICAgdGhpcy50d2VlbnMucHVzaCh0d2Vlbik7XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9XG5cbiAgcmVtb3ZlKG9iaikge1xuICAgIHZhciBpID0gdGhpcy50d2VlbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciB0ID0gdGhpcy50d2VlbnNbaV07XG4gICAgICBpZiAodC5fcmVmZXJlbmNlID09PSBvYmopIHtcbiAgICAgICAgdGhpcy50d2VlbnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkZWx0YSkge1xuICAgIHZhciBpID0gdGhpcy50d2VlbnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciB0ID0gdGhpcy50d2VlbnNbaV07XG4gICAgICBpZiAodC51cGRhdGUoZGVsdGEpKSB7XG4gICAgICAgIHRoaXMudHdlZW5zLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKS8xMDAwO1xuICB9XG59XG4iLCJpbXBvcnQgVHdlZW5lciBmcm9tICcuL1R3ZWVuZXInO1xuXG5pZiAodHlwZW9mKHdpbmRvdykgPT09IFwib2JqZWN0XCIpIHtcbiAgd2luZG93LlR3ZWVuZXIgPSBUd2VlbmVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuZXI7XG4iXX0=
