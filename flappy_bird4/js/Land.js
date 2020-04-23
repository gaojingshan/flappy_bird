function Land() {
  this.x = 0;
}
Land.prototype.update = function () {
  this.x--;
  if (this.x < -23.125) {
    this.x = 0;
  }
};
Land.prototype.render = function () {
  for (var i = 0; i < 22; i++) {
    game.ctx.drawImage(
      game.R['land'],
      23.125 * i + this.x,
      game.canvas.height - 80,
      23.125,
      80
    );
  }
};
