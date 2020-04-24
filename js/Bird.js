// 小鸟类
function Bird() {
  this.x = game.canvas.width / 2;
  // 竖直往下降
  this.y = 100;
  this.dy = 1;
  // 旋转角度
  // this.r = 0;
  this.r = 0.1;

  // 挥动小翅膀
  this.step = 0;
}
Bird.prototype.update = function () {
  this.dy += 0.4;
  this.y += this.dy;
  // this.r = -45;
  this.r += 0.05;
  // 扑腾翅膀
  if (game.f % 10 == 0) {
    this.step++;
    if (this.step > 2) {
      this.step = 0;
    }
  }
};
Bird.prototype.render = function () {
  game.ctx.save();
  game.ctx.translate(this.x, this.y);
  game.ctx.rotate(this.r);
  game.ctx.drawImage(game.R.bird, 46 * this.step, 0, 46, 32, -23, -16, 46, 32);
  game.ctx.restore();
};
