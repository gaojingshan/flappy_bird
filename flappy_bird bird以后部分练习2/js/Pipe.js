// 管子类
function Pipe() {
  // 管子的x坐标
  this.x = game.canvas.width;
  // 随机一个上管子高度
  this.pipe2H = parseInt(Math.random() * 240) + 40;
  // 中间的空隙
  this.gap = 260;
  // 下管子的高度就有了，80是大地
  this.pipe1H = game.canvas.height - 80 - this.pipe2H - this.gap;
  // 加入到管子数组中
  game.pipesArr.push(this);
}
Pipe.prototype.update = function () {
  this.x -= 2;
  // 如果管子出屏幕了，就自杀
  if (this.x < -90) {
    for (var i = 0; i < game.pipesArr.length; i++) {
      if (game.pipesArr[i] == this) {
        game.pipesArr.splice(i, 1);
      }
    }
  }
};
Pipe.prototype.render = function () {
  // 绘制上管子
  game.ctx.drawImage(
    game.R['pipe2'],
    0,
    517 - this.pipe2H,
    90,
    this.pipe2H,
    this.x,
    0,
    90,
    this.pipe2H
  );
  // 绘制下管子
  game.ctx.drawImage(
    game.R['pipe1'],
    0,
    0,
    90,
    this.pipe1H,
    this.x,
    this.pipe2H + this.gap,
    90,
    this.pipe1H
  );
};
