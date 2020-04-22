// 游戏类
function Game() {
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');

  var allImages = [
    {alias: 'bird', path: 'images/bird.png'},
    {alias: 'bg', path: 'images/background.png'},
    {alias: 'pipe1', path: 'images/pipe1.png'},
    {alias: 'pipe2', path: 'images/pipe2.png'},
    {alias: 'land', path: 'images/ground.png'},
  ];
  this.R = {};
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
          `正在加载图片${Object.keys(self.R).length}/${allImages.length}`,
          self.canvas.width / 2,
          self.canvas.height / 2
        );

        if (Object.keys(self.R).length == allImages.length) {
          // 都加载完毕，就可以开始定时器了
          self.start();
        }
      };
      img.src = allImages[i].path;
    })(i);
  }
}
Game.prototype.start = function () {
  var self = this;
  //   帧编号
  this.f = -1;
  this.ctx.textAlign = 'left';
  this.ctx.font = '20px 宋体';

  // 实例化大地
  this.land = new Land();
  this.pipesArr = [];
  // 实例化小鸟
  this.bird = new Bird();

  setInterval(function () {
    self.f++;
    self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
    self.ctx.fillText(self.f, 10, 20);

    self.ctx.drawImage(
      self.R['bg'],
      0,
      0,
      self.canvas.width,
      self.canvas.height - 80
    );

    // 每帧都要调用大地的更新和渲染方法
    self.land.update();
    self.land.render();

    if (self.f % 200 == 0) {
      new Pipe();
    }
    for (var i = 0; i < self.pipesArr.length; i++) {
      self.pipesArr[i].update();
      self.pipesArr[i].render();
    }

    // 小鸟
    self.bird.update();
    self.bird.render();

    // 鼠标点击事件
    self.canvas.onmousedown = function () {
      alert(1);
    };
  }, 20);
};
