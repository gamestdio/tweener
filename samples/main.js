
var Canvas = function(id) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext("2d");
  var rects = [];
  setInterval(update, 1000/60);

  function createRect(name, color) {
    var hex = Math.floor(Math.random()*0xFFFFFF);
    var color = color || '#' + hex.toString(16);
    var rect = {
      x:0,
      y:0,
      w:50,
      h:50,
      name:name,
      color:color
    };
    rects.push(rect);
    return rect;
  }

  function update() {
  	ctx.clearRect(0, 0, canvas.width, canvas.height);
  	for (var i = 0, len = rects.length; i < len; i++) {
      drawRect(rects[i]);
    }
  }

  function drawRect(rect) {
  	ctx.fillStyle = rect.color;
  	ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
  }

  this.createRect = createRect;
  this.width = canvas.width;
  this.height = canvas.height;
};

var Slider = function(id, onUpdate) {
  var slider = document.getElementById(id);
  setInterval(update, 1000/60);
  function update() {
    if (onUpdate) onUpdate(parseFloat(slider.value));
  }
};
