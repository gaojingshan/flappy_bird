function Bird() {
  // 显示图片的位置
  this.wz = 0;
  //   小鸟的位置
  this.x = 0;
  this.y = 0;
}
Bird.prototype.update = function () {
  this.x += 10;
  this.y -= 10;
};
Bird.prototype.update2 = function () {
  // 当鼠标不在点击的时候
  this.x += 0;
  this.y += 10;
};
Bird.prototype.render = function () {
  this.wz += 92;
  if (this.wz >= 276) {
    this.wz = 0;
  }
  game.ctx.drawImage(
    game.R['bird'],
    this.wz,
    0,
    92,
    64,
    this.x,
    game.canvas.height / 2 - 80 + this.y,
    46,
    32
  );
};
