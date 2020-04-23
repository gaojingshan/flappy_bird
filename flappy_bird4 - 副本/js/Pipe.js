function Pipe() {
  this.x = game.canvas.width;
  // 上管子
  this.pipe2H = parseInt(Math.random() * 300) + 40;
  // 空隙
  this.gap = 200;
  // 下管子
  this.pipe1H = game.canvas.height - this.pipe2H - this.gap - 80;
  game.pipesArr.push(this);
}
Pipe.prototype.update = function () {
  this.x--;
  if (this.x < -90) {
    for (var i = 0; i < game.pipesArr.length; i++) {
      if (game.pipesArr[i] == this) {
        game.pipesArr.splice(i, 1);
      }
    }
  }
};
Pipe.prototype.render = function () {
  // 渲染上管子
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

  // 渲染下管子
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
