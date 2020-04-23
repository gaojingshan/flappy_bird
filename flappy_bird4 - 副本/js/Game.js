function Game() {
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');

  // 所有图片的库
  var allImages = [
    {alias: 'bird', path: 'images/bird.png'},
    {alias: 'bg', path: 'images/background.png'},
    {alias: 'land', path: 'images/ground.png'},
    {alias: 'pipe1', path: 'images/pipe1.png'},
    {alias: 'pipe2', path: 'images/pipe2.png'},
  ];
  // 加载好的图片放入下面的数组中
  this.R = {};

  // 备份this
  var self = this;
  this.ctx.font = '30px 微软雅黑';
  this.ctx.textAlign = 'center';
  for (var i = 0; i < allImages.length; i++) {
    (function (i) {
      var img = new Image();
      img.onload = function () {
        self.R[allImages[i].alias] = img;
        // 清屏
        self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
        self.ctx.fillText(
          `正在加载${Object.keys(self.R).length}/${allImages.length}`,
          self.canvas.width / 2,
          self.canvas.height / 2
        );

        if (Object.keys(self.R).length == allImages.length) {
          self.start();
        }
      };
      img.src = allImages[i].path;
    })(i);
  }
}

Game.prototype.start = function () {
  // 帧编号
  this.f = -1;

  // 备份this
  var self = this;
  this.ctx.font = '20px 宋体';
  this.ctx.textAlign = 'left';

  // 实例化地板
  this.land = new Land();

  // 管子数组
  this.pipesArr = [];

  // 定时器
  setInterval(function () {
    // 帧编号改变与显示
    self.f++;
    self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
    self.ctx.fillText(self.f, 10, 20);

    // 背景
    self.ctx.drawImage(
      self.R['bg'],
      0,
      0,
      self.canvas.width,
      self.canvas.height - 80
    );

    // 地板
    self.land.update();
    self.land.render();

    // 管子
    if (self.f % 300 == 0) {
      new Pipe();
    }
    for (var i = 0; i < self.pipesArr.length; i++) {
      self.pipesArr[i].update();
      self.pipesArr[i].render();
    }
  }, 20);
};
