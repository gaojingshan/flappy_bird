// 大地类
function Land() {
  this.x = 0;
}
Land.prototype.update = function () {
  this.x-=2;
  if (this.x < -23.125) {
    this.x = 0;
  }
};
Land.prototype.render = function () {
  for (var i = 0; i < 22; i++) {
    game.ctx.drawImage(
      game.R['land'],
      i * 23.125 + this.x,
      game.canvas.height - 80,
      23.125,
      80
    );
  }
};
