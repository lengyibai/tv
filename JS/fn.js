/*
 * @Author: 冷弋白
 * @LastEditTime: 2021-02-03 13:26:39
 */

/********* 弹窗函数 ********/
var alertCustom = document.querySelector('.alert');
var timer, twinkleTimer1, twinkleTimer2; //设置全局，用于其他函数清除定时器
var disTimeOut = [];
var disInterval = [];
var fnTimeOut = [];

function clearTI() {
  for (let i = 0; i < disTimeOut.length; i++) {
    clearTimeout(disTimeOut[i]);
  }
  for (let i = 0; i < disInterval.length; i++) {
    clearTimeout(disInterval[i]);
  }
}

function twinkle() {
  clearInterval(twinkleTimer1);
  clearTimeout(twinkleTimer2);
  twinkleTimer2 = setTimeout(() => {
    clearInterval(twinkleTimer1);
  }, 2000);
  twinkleTimer1 = setInterval(() => {
    alertCustom.style.backgroundColor = '#fff';
    alertCustom.style.boxShadow = '0 0 50px 10px #fff';
    alertCustom.style.color = '#000';
    setTimeout(() => {
      alertCustom.style.backgroundColor = '';
      alertCustom.style.boxShadow = '';
      alertCustom.style.color = '';
    }, 250);
  }, 500);
}

function display(str) {
  clearTI();
  twinkle();
  alertCustom.style.opacity = '0';
  alertCustom.style.height = '0'; //每次触发收回
  alertCustom.style.padding = '0'; //每次触发收回
  disTimeOut[4] = setTimeout(() => {
    alertCustom.style.padding = '.167rem'; //每次触发收回
    alertCustom.style.height = ''; //每次触发收回
    alertCustom.style.opacity = '1';
    alertCustom.innerHTML =
      str + '<br><li style="color: rgba(255,255,255,.5)">(?秒后收起)</li>';
    disTimeOut[0] = setTimeout(function () {
      alertCustom.style.height = '0'; //每次触发收回
      alertCustom.style.padding = '0 .167rem'; //每次触发收回
      setTimeout(() => {
        alertCustom.style.opacity = '0';
      }, 25);
    }, 10000);
  }, 250);
  var alertTime = 9;
  disInterval[0] = setInterval(() => {
    alertCustom.innerHTML =
      str +
      "<br><li style='color:rgba(255,255,255,.5)'>(" +
      alertTime +
      '秒后收起)</li>';
    alertTime--;
  }, 1000);

  disTimeOut[1] = setTimeout(() => {
    clearInterval(disInterval[0]);
  }, 10750);
  alertCustom.addEventListener('mouseenter', function () {
    alertCustom.style.backgroundColor = 'rgba(255,255,255,1)';
    alertCustom.style.color = '#000';
    alertCustom.style.boxShadow = '0px 0px 50px 10px rgba(255, 255, 255,1)';

    clearTI();
    alertCustom.innerHTML =
      str + '<br><li style="color: rgba(0,0,0,.5)">(暂停收起)</li>';
  });
  alertCustom.addEventListener('mouseleave', function () {
    clearTI();
    alertCustom.innerHTML =
      str + '<br><li style="color: rgba(255,255,255,.5)">(?秒后收起)</li>';
    alertCustom.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    alertCustom.style.color = '#fff';
    alertCustom.style.boxShadow = '0px 0px 10px 5px rgba(0, 0, 0, .5)';
    alertTime = 2;
    disInterval[1] = setInterval(() => {
      alertCustom.innerHTML =
        str +
        "<br><li style='color:rgba(255,255,255,.5)'>(" +
        alertTime +
        '秒后收起)</li>';
      if (alertTime <= 0) {
        clearInterval(disInterval[1]);
        disTimeOut[2] = setTimeout(() => {
          alertCustom.style.height = '0'; //每次触发收回
          alertCustom.style.padding = '0 .167rem'; //每次触发收回
          setTimeout(() => {
            alertCustom.style.opacity = '0';
          }, 25);
        }, 1000);
      }
      alertTime--;
    }, 1000);
  });
  alertCustom.addEventListener('mousedown', function () {
    alertCustom.style.height = '0'; //每次触发收回
    alertCustom.style.padding = '0 .167rem'; //每次触发收回
    setTimeout(() => {
      alertCustom.style.opacity = '0';
    }, 25);
  });
}
/********** 小电视表情 **********/
var TVTalkTimer, TVSleepTimer1, TVSleepTimer2, TVTextTimer;
var noDancing = true; //判断是否为dance模式
var TVWalkUpFlag = false; //判断小电视是否准备睡眠
var TVTalkEnd = false; //判断小电视是否刚失去焦点
var TVFocus = true; //判断小电视是否获取焦点
var TVMove = true; //开启字幕后鼠标不能移动
var TVOnceSleep = true; //小电视睡了之后不允许再准备睡觉，触发字幕导致死循环
var TVWantSleep = false; //用于判断小电视是否可以即将进入睡眠提醒
var TVBlurMove = false; //小电视获取焦点时禁止移动，直到失去焦点
var TVNextSay = true; //避免重复执行
var TVOnceBlurSay = false; //避免重复显示小电视失去焦点后的话
var TVRoomAutoRot = true; //用于判断空间和小电视是否自动旋转，从而字幕消失后作出判断
var TVGod = false;

function TVFace(num1) {
  clearTimeout(TVSleepTimer1);
  clearTimeout(TVSleepTimer2);
  normalFace.src = 'IMG/表情/exp' + num1 + '.png ';
  TVOnceSleep = true;
}

/********** 字幕函数 **********/
function subtitle(chs) {
  clearInterval(TVTextTimer);
  TVWantSleep = false;
  TVWantSleep = false;
  cube.style.animation = '0';
  var TVSayTime = 0;
  clearTimeout(TVTalkTimer);
  clearTimeout(TVSleepTimer1);
  clearTimeout(TVSleepTimer2);
  var chsText = '';
  var num = 0;
  TVTextTimer = setInterval(() => {
    TEXT.style.display = 'block';
    chsText += chs.charAt(num);
    CHS.innerHTML = '小电视:“' + chsText + '”';
    num++;
    if (num == chs.length) {
      clearInterval(TVTextTimer);
    }
  }, 100);
  if (chs.length > 15) {
    //根据字幕长度来计算显示的时长
    TVSayTime = chs.length / 3;
  } else {
    TVSayTime = chs.length / 2;
  }
  TVTalkTimer = setTimeout(() => {
    if (TVBlurMove && TVOnceBlurSay) {
      TVTalkEnd = true;
      TVNextSay = true;
      TVBlurMove = false;
      TVOnceBlurSay = false;
    }
    TVMove = true;
    TVWantSleep = true;
    if (TVFocus) {
      TEXT.style.display = 'none';
      console.log('清除');
      CHS.innerHTML = '';
    }
    document.addEventListener('mousemove', TVBoard);
    if (TVOnceSleep) {
      TVWillSleep();
    }
  }, 1000 * TVSayTime + 2000);
}
/********** 小电视准备休息表情 **********/
function TVWillSleep() {
  if (TVFocus && noDancing) {
    clearTimeout(TVSleepTimer1);
    clearTimeout(TVSleepTimer2);
    TVSleepTimer1 = setTimeout(() => {
      TVNextSay = true;
      TVTalkEnd = true;
      TVWalkUpFlag = true;
      TVWantSleep = true;
      TVOnceSleep = false;
      TVOnceBlurSay = true;
      TVMove = true;
      antennaWalk();
      subtitle('主人一直不理人家，人家可就睡了哦');
      normalFace.src = 'IMG/表情/exp1.png';
      TVSleepTimer2 = setTimeout(() => {
        subtitle('睡啦睡啦~');
        setTimeout(() => {
          cube.style.animation = 'TVSleep 4s infinite';
        }, 250);
        normalFace.src = 'IMG/表情/exp0.png';
      }, 5000);
    }, 5000);
  }
}
//弹窗第一次悬浮提示
function MoveHere() {
  setTimeout(() => {
    display('初次访问，请将鼠标移动到此处');
    alertCustom.addEventListener('mouseenter', function () {
      alertCustom.innerHTML =
        '弹窗默认7秒后收起，鼠标触碰到弹窗，弹窗将始终显示，鼠标离开弹窗3秒后收起，离开的3秒内依然可以触碰弹窗始终显示，字多的时候可以移动到此处慢慢查看，点击弹窗可直接收起';
    });
  }, 1000);
}
//dance模式第一次刷新提示
function MoveHereF5() {
  display('您已开启dance模式');
  setTimeout(() => {
    normalFace.style.display = 'none'; //隐藏小电视表情
  }, 1000);
}

/********** 天线晃动函数 **********/
function antenna() {
  //大幅度晃动
  fiveLiLSon.style.animation = 'fiveLiLSon .5s .5s linear';
  fiveLiRSon.style.animation = 'fiveLiRSon .5s .5s linear';
  setTimeout(() => {
    fiveLiLSon.style.animation = '';
    fiveLiRSon.style.animation = '';
  }, 1000);
}

function antennaWalk() {
  //小电视苏醒小幅度晃动
  fiveLiLSon.style.animation = 'none';
  fiveLiRSon.style.animation = 'none';
  cube.style.animation = 'none';
  setTimeout(() => {
    fiveLiLSon.style.animation = 'liLSon .5s linear';
    fiveLiRSon.style.animation = 'liRSon .5s linear';
    cube.style.animation = 'TVWalk .5s linear';
  }, 50);
  setTimeout(() => {
    fiveLiLSon.style.animation = 'none';
    fiveLiRSon.style.animation = 'none';
    cube.style.animation = 'none';
  }, 1000);
}

/********** 还原初始位置函数 **********/
var RestoreLocation = false; //用于触发还原初始位置的条件，参考default.js
function backStartPoint() {
  TV.style.transitionDuration = '.075s';
  RestoreLocation = true; //返回初始位置

  if (cubeFol && !godFol) {
    //判断是否为上帝视角
    room.style.transform = 'rotateX(0deg) rotateY(0deg)';
    TV.style.transform = 'rotateX(0deg) rotateY(0deg)';
    TVSon.style.transform = 'rotateX(0deg) rotateY(0deg)';
  } else {
    //上帝视角专属旋转样式
    room.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(.1, .1, .1)';
    TV.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(.1, .1, .1)';
    TVSon.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(.1, .1, .1)';
  }
  document.addEventListener('mousedown', fn);

  function fn() {
    setTimeout(() => {
      RestoreLocation = false;
    }, 1000);

    document.addEventListener('mouseup', function () {
      //这个事件只执行一次，则鼠标弹起后清除事件
      document.removeEventListener('mousedown', fn);
    });
  }
}

function rotateXY() {
  //获取小电视旋转角度
  var cubeUlX = parseFloat(TV.style.transform.substr(8, 7));
  var cubeUlY = parseFloat(
    TV.style.transform.substr(
      22 + parseFloat(TV.style.transform.substr(8, 7)).toString().length - 1,
      7
    )
  );
  return 'rotateX(' + cubeUlX + 'deg) rotateY(' + cubeUlY + 'deg)';
}

function onceJumpXY() {
  //小电视跳跃一次,还原初始位置
  var XY = rotateXY();
  TV.style.transition = 'transform';
  TV.style.transformOrigin = 'bottom';
  TV.style.transitionDuration = '.25s';
  TV.style.transform = XY + ' scaleY(.5)';
  antenna();
  setTimeout(() => {
    TV.style.transitionDuration = '.25s';
    TV.style.transform = 'translateY(-500px) ' + XY + ' scaleY(1)';
    setTimeout(() => {
      room.style.transform = 'rotateX(0deg) rotateY(0deg)';
      TV.style.transform = 'rotateX(0deg) rotateY(0deg)';
      TV.style.transitionDuration = '.1s';
      setTimeout(() => {
        TV.style.transitionDuration = '.1s';
        TV.style.transform = 'scaleY(.5)';
        setTimeout(() => {
          TV.style.transitionDuration = '.1s';
          TV.style.transform = 'scaleY(1.25)';
          setTimeout(() => {
            TV.style.transitionDuration = '.2s';
            TV.style.transform = 'scaleY(1)';
            setTimeout(() => {
              TV.style.transformOrigin = 'center';
              TV.style.transitionDuration = '.25s';
              backStartPoint();
            }, 200);
          }, 100);
        }, 100);
      }, 100);
    }, 250);
  }, 250);
}

function RUStyle() {
  //关闭空间及小电视的动画，并还原位置
  room.style.animation = '';
  TV.style.animation = '';
  TVSon.style.animation = '';
  cube.style.animation = 'TVBreath 1s';
  room.style.transform = 'rotateX(-31deg) rotateY(-45deg)';
  TV.style.transform = 'rotateX(-31deg) rotateY(-45deg)';
  TVSon.style.transform = 'rotateX(-31deg) rotateY(-45deg)';
}

function setHBTFoCo() {
  //设置对话页面样式
  LYB.innerHTML = '来自冷弋白';
  head.src = 'IMG/冷弋白！.png';
}

function onSwtAndSon(swt, swtSon, getSet) {
  //开关开启样式函数
  swt.style.backgroundColor = onSwtBgColor;
  swt.style.boxShadow = '0px 0px 15px 0px rgba(255, 255, 255, 0.75)';
  swtSon.style.left = '18px';
  swtSon.style.backgroundColor = '#fff';
  getSet.checked = true;
}

function TVFocusBehavior() {
  //小电视获取焦点时，控制行为
  TVOnceBlurSay = true;
  TVBlurMove = false;
  TVFocus = false;
  TVMove = false;
}

function TVBlurBehavior() {
  //小电视失去焦点时，控制行为
  TVWalkUpFlag = false;
  TVBlurMove = true;
  TVFocus = true;
  TVMove = false;
}

function offSwtAndSon(swt, swtSon, getSet) {
  //开关关闭样式函数
  swt.style.backgroundColor = offSwtBgColor;
  swt.style.boxShadow = '0px 0px 2px 0px rgba(0, 0, 0, 0.75) inset';
  swtSon.style.left = '3px';
  swtSon.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
  getSet.checked = false;
}

function onDpDnSet(a) {
  //弹出的额外设置
  clearTimeout(fnTimeOut[0]);
  a.style.display = 'flex';
  setTimeout(() => {
    a.style.height = '30px';
    a.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0, 1.5)';
    a.style.transform = 'scale(1)';
    a.style.opacity = '1';
  }, 10);
}

function offDpDnSet(a) {
  //弹出的额外设置
  clearTimeout(fnTimeOut[0]);
  a.style.height = '';
  a.style.transform = '';
  a.style.transitionTimingFunction = '';
  fnTimeOut[0] = setTimeout(() => {
    a.style.display = '';
  }, 500);
}

function adDefault() {
  //旋转时间恢复默认函数
  room.style.transitionDuration = '0.075s';
  TV.style.transitionDuration = '0.075s';
}

function RUStyle() {
  //关闭空间及小电视的动画，并还原位置
  room.style.animation = '';
  TV.style.animation = '';
  room.style.transform = 'rotateX(-31deg) rotateY(-45deg)';
  TV.style.transform = 'rotateX(-31deg) rotateY(-45deg)';
}

function fullScreen() {
  //开启全屏
  var docElm = document.documentElement;
  //W3C
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  }
  //FireFox
  else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  }
  //Chrome等
  else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  }
  //IE11
  else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  }
}

function exitFullScreen() {
  //退出全屏
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
