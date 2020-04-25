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

  // 自己的AABB盒
  this.x1 = this.x - 57.67 / 2;
  this.x2 = this.x + 57.67 / 2;
  this.y1 = this.y - 20;
  this.y2 = this.y + 20;
}
Bird.prototype.update = function () {
  if (!this.isFly) {
    this.dy += 0.6;
  } else {
    this.dy += 0.9;
    if (this.dy > 0) {
      this.isFly = false;
    }
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
  // 每帧都要更改自己的AABB盒，小鸟的x不会改变，写不写亦可，工整期间还是写上。
  this.x1 = this.x - 57.67 / 2;
  this.x2 = this.x + 57.67 / 2;
  this.y1 = this.y - 20;
  this.y2 = this.y + 20;
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
  this.dy = -17;
  this.r = -1;
  this.isFly = true;
};
