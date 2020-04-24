// 小鸟类
function Bird() {
  // 鸟心
  this.x = game.canvas.width / 2;
  this.y = 100;
  // 旋转角度
  this.r = 0.1;
  // 扇动翅膀
  this.step = 0;
  // 下落加速度
  this.dy = 1;
}
Bird.prototype.update = function () {
  this.dy += 0.2;
  this.y += this.dy;
  // 旋转角度
  this.r += 0.03;
  if (game.f % 3 == 0) {
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
  game.ctx.drawImage(
    game.R['bird'],
    57.67 * this.step,
    0,
    57.67,
    40,
    -57.67 / 2,
    -40 / 2,
    57.67,
    40
  );
  game.ctx.restore();
};
