var x = 0;
var y = 0;
var X = 0;
var Y = 0;
var flag = false;
document.addEventListener(
  'mousedown',
  function (e) {
    if (TVSetMove && getAdTIon.value == '') {
      TV.style.transitionDuration = '.5s';
      setTimeout(() => {
        TV.style.transitionDuration = '0.075s';
      }, 500);
    }
    var downX = e.clientX; //获取按下坐标X
    var downY = e.clientY; //获取按下坐标Y
    document.addEventListener('mousemove', fn);

    function fn(e) {
      var moveX = e.clientX; //获取实时移动坐标X
      var moveY = e.clientY; //获取实时移动坐标Y
      if (RestoreLocation) {
        //返回初始位置函数被调用触发RestoreLocation=true；立即返回初始位置
        X = 0;
        Y = 0;
      }
      x = moveX - downX + X;
      y = downY - moveY + Y;

      function a() {
        //X轴限制范围旋转(默认开启)
        var wallImgFixed = 225 * sensitive;
        if (wallImgXY) {
          //开启空间啊全景图后，X超过90度禁止继续旋转
          if (y > wallImgFixed) {
            y = wallImgFixed;
          }
        }
        if (wallImgXY) {
          //开启空间啊全景图后，X超过-90度禁止继续旋转
          if (y < -wallImgFixed) {
            y = -wallImgFixed;
          }
        }
      }
      if (flag) {
        //是否开启/关闭X轴旋转范围限制
        a();
      }
      if (disX) {
        //是否允许/禁止X轴旋转
        y = Y;
      }
      if (disY) {
        //是否允许/禁止Y轴旋转
        x = X;
      }

      function b() {
        //背景允许/禁止空间跟随旋转
        room.style.transform =
          'rotateX(' +
          y / sensitive / 2.5 +
          'deg) rotateY(' +
          x / sensitive / 2.5 +
          'deg)';
      }
      if (bgFol) {
        b();
      }

      function c() {
        //是否允许/禁止正方体跟随旋转
        TV.style.transform =
          'rotateX(' +
          y / sensitive / 2.5 +
          'deg) rotateY(' +
          x / sensitive / 2.5 +
          'deg)';
        TVSon.style.transform =
          'rotateX(' +
          y / sensitive / 2.5 +
          'deg) rotateY(' +
          x / sensitive / 2.5 +
          'deg)';
      }
      if (cubeFol && !godFol) {
        c();
      }

      function d() {
        //上帝视角专用旋转效果
        room.style.transform =
          'rotateX(' +
          y / sensitive / 2.5 +
          'deg) rotateY(' +
          x / sensitive / 2.5 +
          'deg) scale3d(.1, .1, .1)';
        TV.style.transform =
          'rotateX(' +
          y / sensitive / 2.5 +
          'deg) rotateY(' +
          x / sensitive / 2.5 +
          'deg) scale3d(.1, .1, .1)';
        TVSon.style.transform =
          'rotateX(' +
          y / sensitive / 2.5 +
          'deg) rotateY(' +
          x / sensitive / 2.5 +
          'deg) scale3d(.1, .1, .1)';
      }
      if (godFol) {
        d();
      }
    }
    document.addEventListener('mouseup', function () {
      //鼠标弹起后保留鼠标最后的位置
      X = x;
      Y = y;
      //弹起后删除鼠标移动事件
      document.removeEventListener('mousemove', fn);
      if (TVSetMove && getAdTIon.value == '') {
        TV.style.transitionDuration = '.5s';
        setTimeout(() => {
          TV.style.transitionDuration = '0.075s';
        }, 500);
      }
    });
  },
  true
);
