// 第二遍
/* function Pipe() {
  this.x = game.canvas.width;
  this.pipe2H = parseInt(Math.random() * 300) + 40;
  this.gap = 200;
  this.pipe1H = game.canvas.height - this.pipe2H - this.gap - 80;
  game.pipesArr.push(this);
}
Pipe.prototype.update = function () {
  this.x -= 2;
  if (this.x < -90) {
    for (var i = 0; i < game.pipesArr.length; i++) {
      if (game.pipesArr[i] == this) {
        game.pipesArr.splice(i, 1);
      }
    }
  }
};
Pipe.prototype.render = function () {
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
}; */

// 第三遍
function Pipe() {
  this.x = game.canvas.width;
  this.pipe2H = parseInt(Math.random() * 300) + 40;
  this.gap = 200;
  this.pipe1H = game.canvas.height - 80 - this.pipe2H - this.gap;
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
  // 上水管
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

  // 下水管
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
