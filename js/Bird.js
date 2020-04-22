function Bird() {
  // 显示图片的位置
  this.wz = 0;
}
Bird.prototype.update = function () {
  this.wz += 92;
  if (this.wz >= 276) {
    this.wz = 0;
  }
};
Bird.prototype.render = function () {
  game.ctx.drawImage(
    game.R['bird'],
    this.wz,
    0,
    92,
    64,
    0,
    game.canvas.height / 2 - 80,
    46,
    32
  );
};


