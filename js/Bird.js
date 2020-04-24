// 小鸟类
function Bird() {
  // 鸟心位置
  this.x = game.canvas.width / 2;
  this.y = 100;
  this.r = 0.1;
  // y的增量
  this.dy = 1;
  // 扑腾翅膀
  this.step = 0;

  // 状态，自己是否在向上飞
  this.isFly = false;
}
Bird.prototype.update = function () {
  if (!this.isFly) {
    this.dy += 0.4;
  } else {
    this.dy += 0.9;
  }
  this.y += this.dy;
  this.r += 0.05;
  // 扑腾翅膀
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
  // 旋转
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
Bird.prototype.fly = function () {
  this.dy = -15;
  this.r = -1;
  this.isFly = true;
};
