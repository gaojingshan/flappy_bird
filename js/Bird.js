function Bird() {
  // 显示图片的位置
  this.wz = 0;
  //   小鸟的位置
  this.x = 0;
  this.y = 0;
  this.arrDy = [4, -4];

  this.zhen = 0;
}
// 还没开始游戏的时候
Bird.prototype.update3 = function () {
  this.zhen++;
  if (this.zhen > 2) {
    this.zhen = 0;
  }
  if (this.zhen == 1) {
    this.y += this.arrDy[0];
  } else if (this.zhen == 2) {
    this.y += this.arrDy[1];
  }
  this.wz += 92;
  if (this.wz >= 276) {
    this.wz = 0;
  }
};
// 鼠标点击的时候
Bird.prototype.update = function () {
  // this.x += 10;
  this.y -= 100;
  // game.R['bird'].rotate((Math.PI * 2) / 30);
};
Bird.prototype.update2 = function () {
  // 当鼠标不在点击的时候
  this.y += 40;
};

Bird.prototype.render = function () {
  this.x = game.canvas.width / 2 - 23;
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
  if (
    game.canvas.height / 2 - 80 + this.y < 0 ||
    game.canvas.height / 2 - 80 + this.y == game.canvas.height - 80
  ) {
    alert('游戏结束');
  }
};
