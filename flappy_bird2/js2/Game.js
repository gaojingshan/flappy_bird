// 第二遍
/* function Game() {
  // 画布
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');

  var allImgaes = [
    {alias: 'bird', path: 'images/bird.png'},
    {alias: 'bg', path: 'images/background.png'},
    {alias: 'land', path: 'images/ground.png'},
    {alias: 'pipe1', path: 'images/pipe1.png'},
    {alias: 'pipe2', path: 'images/pipe2.png'},
  ];
  this.R = {};
  var self = this;

  this.ctx.font = '30px 微软雅黑';
  this.ctx.textAlign = 'center';
  for (var i = 0; i < allImgaes.length; i++) {
    (function (i) {
      var img = new Image();
      img.onload = function () {
        self.R[allImgaes[i].alias] = img;
        // 清屏
        self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
        self.ctx.fillText(
          `正在加载的图片${Object.keys(self.R).length}/${allImgaes.length}`,
          self.canvas.width / 2,
          self.canvas.height / 2
        );

        if (Object.keys(self.R).length == allImgaes.length) {
          // 都加载完毕，就可以开始定时器了
          self.start();
        }
      };
      img.src = allImgaes[i].path;
    })(i);
  }
}

Game.prototype.start = function () {
  var self = this;

  this.f = -1;
  this.ctx.font = '20px 宋体';
  this.ctx.textAlign = 'left';

  // 实例化大地
  this.land = new Land();

  // 管子数组
  this.pipesArr = [];

  setInterval(function () {
    self.f++;
    self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
    self.ctx.fillText(self.f, 10, 20);

    // 调用背景
    self.ctx.drawImage(
      self.R['bg'],
      0,
      0,
      self.canvas.width,
      self.canvas.height - 80
    );

    // 每帧都调用Land的render和update方法
    self.land.update();
    self.land.render();

    // 管子
    if (self.f % 200 == 0) {
      new Pipe();
    }
    for (var i = 0; i < self.pipesArr.length; i++) {
      self.pipesArr[i].update();
      self.pipesArr[i].render();
    }
  }, 20);
}; */

// 第三遍
function Game() {
  // 画布
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');

  var allImgaes = [
    {alias: 'bird', path: 'images/bird.png'},
    {alias: 'bg', path: 'images/background.png'},
    {alias: 'land', path: 'images/ground.png'},
    {alias: 'pipe1', path: 'images/pipe1.png'},
    {alias: 'pipe2', path: 'images/pipe2.png'},
  ];
  this.R = {};
  var self = this;
  this.ctx.font = '30px 微软雅黑';
  this.ctx.textAlign = 'center';
  for (var i = 0; i < allImgaes.length; i++) {
    (function (i) {
      var img = new Image();
      img.onload = function () {
        self.R[allImgaes[i].alias] = img;
        // 清屏
        self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);

        self.ctx.fillText(
          `正在加载${Object.keys(self.R).length}/${allImgaes.length}`,
          self.canvas.width / 2,
          self.canvas.height / 2
        );
        if (Object.keys(self.R).length == allImgaes.length) {
          // 都加载完毕，就可以开始定时器了
          self.start();
        }
      };
      img.src = allImgaes[i].path;
    })(i);
  }
}

Game.prototype.start = function () {
  this.f = 0;

  var self = this;
  this.ctx.font = '20px 宋体';
  this.ctx.textAlign = 'left';

  // 实例化大地类
  this.land = new Land();

  // 管子数组
  this.pipesArr = [];

  setInterval(function () {
    // 清屏
    self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
    self.f++;
    self.ctx.fillText(self.f, 10, 20);

    // 背景
    self.ctx.drawImage(
      self.R['bg'],
      0,
      0,
      self.canvas.width,
      self.canvas.height - 80
    );

    // 调用大地的update和render方法
    self.land.update();
    self.land.render();

    // 管子方法
    if (self.f % 300 == 0) {
      new Pipe();
    }

    for (var i = 0; i < self.pipesArr.length; i++) {
      self.pipesArr[i].update();
      self.pipesArr[i].render();
    }
  }, 20);
};
