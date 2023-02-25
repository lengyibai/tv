/********** 清除默认事件 **********/

headPortrait.addEventListener('mousedown', function (e) {
  e.preventDefault(); //新手引导里面的头像禁止拖拽
});

/********** 出场动画调整 **********/
var timerArr = [];
room.style.animation = 'openRotate 7.5s linear'; //出场空间旋转时长
TV.style.animation = 'openRotate  7.5s linear'; //出场小电视旋转时长
//左右两边跳过按钮
setTimeout(() => {
  skipAnimation.style.top = 0;
  skipAnimationAll.style.top = 0;
  skipAnimation.style.opacity = 1;
  skipAnimationAll.style.opacity = 1;
}, 500);
timerArr[1] = setTimeout(() => {
  onceJumpXY(); //跳回初始位置
  timerArr[2] = setTimeout(() => {
    adDefault(); //旋转时间恢复默认
    onSwtDisImg(); //显示全景图
    setTimeout(() => {
      onSwtBgAutoRot(); //空间自动旋转
      onSwtBloAutoRot(); //方块自动旋转
      noviceGuide(); //显示新手引导
    }, 500);
  }, 1500);
}, 11750);
timerArr[3] = setTimeout(() => {
  skipAnimation.style.top = '-55px'; //跳过动画按钮隐藏
  skipAnimationAll.style.top = '-55px'; //跳过动画按钮隐藏
  skipAnimation.style.opacity = 0; //跳过动画按钮隐藏
  skipAnimationAll.style.opacity = 0; //跳过动画按钮隐藏
  setTimeout(() => {
    skipAnimation.style.display = 'none'; //跳过动画按钮彻底隐藏
    skipAnimationAll.style.display = 'none'; //跳过动画按钮彻底隐藏
  }, 500);
  setTimeout(() => {
    cube.style.zIndex = 2; //恢复小电视层级
    for (let i = 0; i < walls.length; i++) {
      walls[i].style.opacity = 1; //恢复空间透明度
    }
  }, 250);
}, 4750);
timerArr[4] = setTimeout(() => {
  //空间和小电视播放Q弹效果动画
  TV.style.animation = 'cube0 2s';
  room.style.animation = 'cube0 2s';
  setTimeout(() => {
    //由于动画设置停留在最后一帧（forwards），会导致鼠标无法旋转和空间，所以动画播放后会回到原位，所以在回到原位的一瞬间通过定时器来阻止
    RUStyle();
  }, 2000);
}, 9500);

/********** 设置跳过动画 **********/
skipAnimation.addEventListener('mouseup', function () {
  RUStyle();
  OSA.style.display = 'none';
  skipAnimation.style.opacity = 0; // 隐藏跳过动画按钮
  skipAnimationAll.style.opacity = 0;
  skipAnimation.style.top = '-55px'; //跳过动画按钮隐藏
  skipAnimationAll.style.top = '-55px'; //跳过动画按钮隐藏
  cube.style.zIndex = 2; //恢复层级
  for (let i = 0; i < TVSide.length; i++) {
    TVSide[i].style.animationDelay = '0s'; //清除拼接动画间隔，直接出现
  }
  for (let i = 0; i < walls.length; i++) {
    walls[i].style.opacity = 1; //空间墙还原透明度
  }
  for (let i = 0; i < timerArr.length; i++) {
    clearTimeout(timerArr[i]); //清除跳过前的动画定时器
  }
  setTimeout(() => {
    onceJumpXY(); //跳回初始位置
    setTimeout(() => {
      adDefault();
      onSwtDisImg();
      setTimeout(() => {
        onSwtBgAutoRot();
        onSwtBloAutoRot();
        noviceGuide(); //新手引导
        setTimeout(() => {
          skipAnimation.style.display = 'none'; //延时彻底隐藏跳过动画按钮
          skipAnimationAll.style.display = 'none'; //延时彻底隐藏跳过动画按钮
        }, 500);
      }, 500);
    }, 1500);
  }, 750);
});
//设置跳过入场动画及新手引导
skipAnimationAll.addEventListener('mouseup', function () {
  NGNum = 99;
  skip.style.opacity = '0'; //隐藏访问方式盒子
  assistant.style.opacity = '0'; //隐藏新手引导页面
  TVSon.style.display = 'flex'; //显示小电视复制体
  skipAnimation.style.top = '-55px'; //跳过动画按钮隐藏
  skipAnimationAll.style.top = '-55px'; //跳过动画按钮隐藏
  assistant.style.backdropFilter = 'blur(20px)';
  home();
  setTimeout(() => {
    skip.style.display = 'none';
    assistant.style.display = 'none';
    TVSon.style.transition = 'all .25s ease-out';
    setTimeout(() => {
      setHBTFoCo();
      leftSlide.style.display = 'block'; //左上角显示收回按钮
      rightSlide.style.display = 'block'; //右上角显示收回按钮
      setTimeout(() => {
        leftSlide.style.opacity = 1; //显示左上角收回按钮
        rightSlide.style.opacity = 1; //显示右上角收回按钮
        onTVEyesFol();
        onLeftSlideBtn();
        onRightSlideBtn();
      }, 250);
    }, 250);
  }, 250);
  skipAnimation.style.opacity = 0;
  setTimeout(() => {
    skipAnimation.style.display = 'none';
  }, 500);
  OSA.style.display = 'none';
  cube.style.zIndex = 2; //恢复层级
  skipAnimationAll.style.opacity = 0; // 隐藏跳过动画按钮
  RUStyle();

  for (let i = 0; i < TVSide.length; i++) {
    TVSide[i].style.animationDelay = '0s'; //清除拼接动画间隔，直接出现
  }
  for (let i = 0; i < walls.length; i++) {
    walls[i].style.opacity = 1; //空间墙还原透明度
  }
  for (let i = 0; i < timerArr.length; i++) {
    //清除跳过前的动画定时器
    clearTimeout(timerArr[i]);
  }
  backStartPoint();
  setTimeout(() => {
    skipAnimationAll.style.display = 'none'; //延时彻底隐藏跳过动画按钮
  }, 250);
});

/********** BGM **********/
var BGM = new Audio('MUSIC/bgm.mp3'); //这里的路径写上mp3文件在项目中的绝对路径
var duration = BGM.duration; //长度单位是秒
var BGMTimer;

function home() {
  BGMTimer = setInterval(() => {
    BGM.play();
  }, duration * 1000);
}

function stopBGM() {
  clearInterval(BGMTimer);
  BGM.currentTime = 999; //停止音乐
}

/********** 看板 **********/
function TVBoardAllFlag() {
  TVWalkUpFlag = true; //下次不提示这句话，换上面那句
  TVNextSay = false; //执行过一次需要等下一次
  TVTalkEnd = false; //执行过一次需要等下一次
  TVOnceBlurSay = false;
}

function TVBoard(e) {
  clearTimeout(TVSleepTimer1);
  clearTimeout(TVSleepTimer2);
  if (TVWantSleep) {
    TVWillSleep();
  }
  if (TVFocus && noDancing) {
    //处于输入禁止执行
    if (TVTalkEnd && TVNextSay) {
      //判断是否为刚说完
      TVOnceSleep = true;
      if (TVWalkUpFlag) {
        normalFace.src = 'IMG/表情/exp8.png';
        TVNextSay = false; //执行过一次需要等下一次
        TVTalkEnd = false; //执行过一次需要等下一次
        TVOnceBlurSay = false;
        antennaWalk();
        subtitle('主人又活跃了起来');
      } else {
        if (
          getAdTIon.value == '' &&
          getSetSensitive.value == '' &&
          getSetSize.value < 1000 &&
          TVGod == false &&
          TVMove &&
          TVRoomAutoRot &&
          TVSetMove
        ) {
          normalFace.src = 'IMG/表情/exp8.png';
          antennaWalk();
          TVBoardAllFlag();
          subtitle('话说完了，该盯着主人的鼠标啦');
        } else if (TVRoomAutoRot == false) {
          TVRoomAutoRot = false;
          normalFace.src = 'IMG/表情/exp4.png';
          antennaWalk();
          TVBoardAllFlag();
          subtitle('想盯着主人的鼠标看，但人家处于旋转当中');
        } else if (TVSetMove == false) {
          normalFace.src = 'IMG/表情/exp4.png';
          antennaWalk();
          TVBoardAllFlag();
          subtitle('想盯着主人的鼠标看，但主人不让');
        } else {
          normalFace.src = 'IMG/表情/exp4.png';
          antennaWalk();
          TVBoardAllFlag();
          subtitle('想盯着主人的鼠标看，但我的制造者命令人家当前状态下不允许');
        }
      }
    }
    if (
      getAdTIon.value == '' &&
      getSetSensitive.value == '' &&
      getSetSize.value < 1000 &&
      godFol == false &&
      TVMove &&
      TVSetMove
    ) {
      var bodyWidth = body.offsetWidth;
      var bodyHeight = body.offsetHeight;
      x = e.clientX / bodyWidth;
      y = e.clientY / bodyHeight;
      TV.style.transform =
        'rotateX(' + (-90 * y + 45) + 'deg) rotateY(' + (-45 + 90 * x) + 'deg)';
    }
  }
}

/********** 左设置栏收起 **********/
var lsFlag = true;
leftSlide.addEventListener('mouseup', function () {
  leftSlideBtn();
});

function leftSlideBtn() {
  if (lsFlag) {
    onLeftSlideBtn();
  } else {
    offLeftSlideBtn();
  }
}

function onLeftSlideBtn() {
  lsFlag = false;
  change.style.transform = 'translateX(10%) scale(.75)';
  setTimeout(() => {
    change.style.transform = 'translateX(0%) scale(1)';
  }, 350);
  leftSlide.style.transform = 'translateX(2.333rem)';
  setTimeout(() => {
    leftSlide.style.transform = 'translateX(2.333rem) rotateZ(-180deg)';
    setTimeout(() => {
      leftSlide.style.transform = 'rotateZ(180deg)';
    }, 500);
  }, 500);
}

function offLeftSlideBtn() {
  lsFlag = true;
  leftSlide.style.transform = 'translateX(-125%) rotateZ(-180deg)';
  change.style.transform = 'translateX(10%) scale(.75)';
  setTimeout(() => {
    leftSlide.style.transform = 'translateX(-125%)';
    change.style.transform = 'translateX(-100%) scale(.75)';
    setTimeout(() => {
      leftSlide.style.transform = '';
    }, 750);
  }, 350);
}

/********** 右设置栏收起 **********/
var rsFlag = true;
rightSlide.addEventListener('mouseup', function () {
  if (rsFlag) {
    onRightSlideBtn();
  } else {
    offRightSlideBtn();
  }
});

function onRightSlideBtn() {
  rsFlag = false;
  dance.style.transform = 'translateX(-10%) scale(.75)';
  setTimeout(() => {
    dance.style.transform = 'translateX(0%) scale(1)';
  }, 350);
  rightSlide.style.transform = 'translateX(-2.333rem)';
  setTimeout(() => {
    rightSlide.style.transform = 'translateX(-2.333rem) rotateZ(180deg)';
    setTimeout(() => {
      rightSlide.style.transform = 'rotateZ(-180deg)';
    }, 500);
  }, 500);
}

function offRightSlideBtn() {
  rsFlag = true;
  rightSlide.style.transform = 'translateX(125%) rotateZ(180deg)';
  dance.style.transform = 'translateX(-10%) scale(.75)';
  setTimeout(() => {
    rightSlide.style.transform = 'translateX(125%)';
    dance.style.transform = 'translateX(100%) scale(.75)';
    setTimeout(() => {
      rightSlide.style.transform = '';
    }, 750);
  }, 350);
}

/**********设置旋转时间 **********/
getAdTIon.addEventListener('blur', function () {
  if (parseFloat(getAdTIon.value) >= 0) {
    TVFace(5);
    if (parseFloat(getAdTIon.value) < 6) {
      subtitle(getAdTIon.value + '秒处于理想范围内');
    }
    if (parseFloat(getAdTIon.value) >= 6) {
      subtitle(getAdTIon.value + '秒是不是太长了点呀');
    }
    if (parseFloat(getAdTIon.value) >= 10) {
      subtitle(getAdTIon.value + '秒也太长了吧');
    }
    if (parseFloat(getAdTIon.value) >= 20) {
      subtitle(getAdTIon.value + '秒也太离谱了吧');
    }
    display('旋转时间您已设置为' + getAdTIon.value + '秒');
    room.style.transitionDuration = getAdTIon.value + 's';
    TV.style.transitionDuration = getAdTIon.value + 's';
    TVSon.style.transitionDuration = getAdTIon.value + 's';
  } else if (getAdTIon.value == '') {
    adDefault();
  } else {
    subtitle(
      getAdTIon.value +
        '是串什么字符？人家可不认识哦，人家只认识数字，而且不能是负数哦'
    );
    TVFace(3);
    display('旋转时间输入有误，请重新输入');
  }
});
getAdTIon.addEventListener('blur', function () {
  if (this.value == '') {
    TVSon.style.transitionDuration = '1s';
  }
});

/********** 小电视体积 *********/
getSetSize.addEventListener('focus', function () {
  var timer = setInterval(() => {
    //实时获取并设置体积大小
    if (cubeFol && !godFol) {
      if (getSetSize.value > 0 && getSetSize.value <= 1500) {
        TV.style.zoom = getSetSize.value + '%';
        TVSon.style.zoom = getSetSize.value + '%';
      }
      if (getSetSize.value > 1500) {
        TV.style.zoom = '1500%';
        TVSon.style.zoom = '1500%';
      }
    } else {
      if (getSetSize.value > 0 && getSetSize.value <= 600) {
        TV.style.zoom = getSetSize.value + '%';
        TVSon.style.zoom = getSetSize.value + '%';
      }
      if (getSetSize.value > 600) {
        TV.style.zoom = '600%';
        TVSon.style.zoom = '600%';
      }
    }
  }, 500);
  getSetSize.addEventListener('blur', function () {
    clearInterval(timer);
    if (cubeFol && !godFol) {
      if (getSetSize.value > 100 && getSetSize.value <= 999) {
        TV.style.zoom = getSetSize.value + '%';
        TVSon.style.zoom = getSetSize.value + '%';
        TVFace(5);
        display('小电视体积您已设置为' + getSetSize.value);
        subtitle(getSetSize.value + '还不能完全进不了人家的肚子哦');
      } else if (getSetSize.value > 999) {
        TVFace(8);
        subtitle('进入了人家的肚肚，感觉怎么样吖？');
      } else if (getSetSize.value > 1500) {
        TV.style.zoom = '1500%';
        TVSon.style.zoom = '1500%';
        TVFace(1);
        display('体积大小输入限制在1500以下，已自动设为1500');
        subtitle(
          getSetSize.value + '太大的话，网页会变卡顿哦，已为主人改成1500'
        );
      } else if (getSetSize.value == '') {
        TV.style.zoom = 1;
        TVSon.style.zoom = 1;
      } else if (getSetSize.value == 0) {
        subtitle('0的话人家就消失了呀');
      } else if (getSetSize.value < 10) {
        subtitle('太小了啦，不能再小了');
        getSetSize.value = 10;
      } else if (getSetSize.value < 100 && getSetSize.value > 10) {
        subtitle('变小了，主人还会让人家变小吗？');
      } else if (getSetSize.value == 100) {
        subtitle('100就是人家的正常大小啊');
      } else {
        subtitle(
          getSetSize.value +
            '是串什么字符？人家可不认识哦，人家只认识数字，而且不能是负数哦'
        );
        TVFace(3);
        display('体积大小输入有误，请重新输入');
      }
    } else {
      if (getSetSize.value > 0 && getSetSize.value <= 600) {
        TV.style.zoom = getSetSize.value + '%';
        TVSon.style.zoom = getSetSize.value + '%';
        TVFace(5);
        subtitle('嗯...在我承受范围内');
        display('小电视体积您已设置为' + getSetSize.value);
      } else if (getSetSize.value > 600) {
        subtitle(
          getSetSize.value + '太大了，人家可不想穿模，给主人设置成600了'
        );
        TV.style.zoom = '600%';
        TVSon.style.zoom = '600%';
        TVFace(1);
        display('在上帝视角，体积大小输入限制在600以下,已自动设为600');
      } else if (getSetSize.value == '') {
        TV.style.zoom = '';
        TVSon.style.zoom = '';
      } else if (getSetSize.value == 0) {
        subtitle('0的话人家就消失了呀');
      } else if (getSetSize.value < 10) {
        subtitle('太小了啦，不能再小了');
        getSetSize.value = 10;
      } else if (getSetSize.value < 100 && getSetSize.value >= 10) {
        subtitle('变小了，主人还会让人家变小吗？');
      } else if (getSetSize.value == 100) {
        subtitle('100就是人家的正常大小啊');
      } else {
        TVFace(3);
        display('体积可不能乱填哦');
        subtitle(
          getSetSize.value +
            '是串什么字符？人家可不认识哦，人家只认识数字，而且不能是负数哦'
        );
      }
    }
  });
});

/**********灵敏度调节 **********/
var sensitive = 1; //灵敏度调节
getSetSensitive.addEventListener('blur', function () {
  if (parseFloat(getSetSensitive.value) > 0) {
    sensitive = getSetSensitive.value;
    TVFace(5);
    display('灵敏度您已设置为' + getSetSensitive.value);
    subtitle('灵敏度设为' + getSetSensitive.value + '秒挺好的！');
  } else if (getSetSensitive.value == '') {
    sensitive = 1;
  } else if (getSetSize.value == 0) {
    subtitle('主人有见过灵敏度为0吗？');
  } else {
    subtitle(
      getSetSensitive.value +
        '是串什么字符？人家可不认识哦，人家只认识数字，而且不能是负数哦'
    );
    TVFace(3);
    display('灵敏度输入有误，请重新输入');
  }
});

/********** 隐藏空间 **********/
getSetHideBg.addEventListener('change', function () {
  if (getSetHideBg.checked) {
    onHideBg();
    subtitle('空间消失了，一片虚空');
  } else {
    offHideBg();
    subtitle('空间又回来啦！');
  }
});

function onHideBg() {
  room.style.display = 'none';
  onDpDnSet(HideBgColor);
  getSetHideBgColor.addEventListener('focus', function () {
    subtitle('虚空的颜色人家就不多说了');
    var timer = setInterval(() => {
      //实时获取并设置虚空色
      body.style.backgroundColor = getSetHideBgColor.value;
    }, 250);
    getSetHideBgColor.addEventListener('blur', function () {
      TVFace(5);
      clearInterval(timer);
    });
  });
}

function offHideBg() {
  body.style.backgroundColor = '#111';
  offDpDnSet(HideBgColor);
  offSwtAndSon(swtHideBg, swtHideBgSon, getSetHideBg);
  room.style.display = 'flex';
  getSetHideBgColor.value = '#000'; //颜色选择器恢复默认
}

/********** 六面圆形 *********/
getSetCircular.addEventListener('change', function () {
  if (getSetCircular.checked) {
    onSwtCircular();
    subtitle('人家觉得变圆了有点丑');
  } else {
    offSwtCircular();
    subtitle('又方起来了');
  }
});

function onSwtCircular() {
  TVSide[0].querySelector('img').style.borderRadius = '50%';
  for (let i = 0; i < TVSide.length; i++) {
    TVSide[i].style.borderRadius = '50%';
    TVSideSon[i].style.borderRadius = '50%';
  }
}

function offSwtCircular() {
  TVSide[0].querySelector('img').style.borderRadius = '';
  for (let i = 0; i < TVSide.length; i++) {
    TVSide[i].style.borderRadius = '';
    TVSideSon[i].style.borderRadius = '';
  }
}

/********** 禁止X轴旋转 **********/
var disX = false; //设置触发条件
getSetXRotate.addEventListener('change', function () {
  if (getSetXRotate.checked) {
    subtitle('人家不能上下旋转了');
    onSwtXRotate();
  } else {
    subtitle(
      '现在可以上下旋转了，主人不能让人家上下旋转，是不是感觉人家太好动了？'
    );
    offSwtXRotate();
  }
});

function onSwtXRotate() {
  disX = true;
}

function offSwtXRotate() {
  disX = false;
}

/********** 禁止Y轴旋转 **********/
var disY = false; //设置触发条件
getSetYRotate.addEventListener('change', function () {
  if (getSetYRotate.checked) {
    onSwtYRotate();
    subtitle('人家不能左右旋转了');
  } else {
    offSwtYRotate();
    subtitle(
      '现在可以左右旋转了，主人不能让人家左右旋转，是不是感觉人家太好动了？'
    );
  }
});

function onSwtYRotate() {
  disY = true;
}

function offSwtYRotate() {
  disY = false;
}

/********** 空间是否自动旋转 **********/
function TVRoomLock() {
  fail1[0].style.display = 'block';
  fail1[1].style.display = 'block';
  fail3[0].style.display = 'block';
  fail3[1].style.display = 'block';
  getSetBgFlRot.disabled = true;
  getSetCubeFlRot.disabled = true;
  getSetCircular.disabled = true;
  getSetXRotate.disabled = true;
  swtBgFlRot.style.opacity = 0.25;
  swtCubeFlRot.style.opacity = 0.25;
  swtXRotate.style.opacity = 0.25;
  swtYRotate.style.opacity = 0.25;
}

function TVRoomUnlock() {
  fail1[0].style.display = 'none';
  fail1[1].style.display = 'none';
  fail3[0].style.display = 'none';
  fail3[1].style.display = 'none';
  getSetBgFlRot.disabled = false;
  getSetCubeFlRot.disabled = false;
  getSetCircular.disabled = false;
  getSetXRotate.disabled = false;
  swtBgFlRot.style.opacity = 1;
  swtCubeFlRot.style.opacity = 1;
  swtXRotate.style.opacity = 1;
  swtYRotate.style.opacity = 1;
}

var withBgBlo = true;
getSetBgAutoRot.addEventListener('change', function () {
  if (getSetBgAutoRot.checked) {
    if (withBgBlo) {
      subtitle('主人是以空间和我为参考系呢？还是主人以自己为参考系呢？');
    } else {
      subtitle(
        '怎么感觉空间和我不是同步旋转的呢？主人没有让空间和人家同时开始旋转哦，把空间自动旋转关了重开吧！'
      );
    }
    onSwtBgAutoRot();
    onSwtBloAutoRot();
  } else {
    withBgBlo = true;
    offSwtBloAutoRot();
    offSwtBgAutoRot();
    subtitle('空间不转了，人家也得停下来');
  }
});

function onSwtBgAutoRot() {
  TVRoomAutoRot = false;
  TVRoomLock();
  onDpDnSet(bgTime);
  if (cubeFol && !godFol) {
    //判断是否为上帝视角
    room.style.animation = 'rotate 20s linear infinite';
  } else {
    //上帝视角专属旋转样式
    room.style.animation = 'godRotate 20s linear infinite';
  }
}

function offSwtBgAutoRot() {
  TVRoomAutoRot = true;
  setBgTime.value = '';
  room.style.animation = '';
  TVRoomUnlock();
  backStartPoint();
  offDpDnSet(bgTime);
  offSwtAndSon(swtBgAutoRot, swtBgAutoRotSon, getSetBgAutoRot);
}

// 设置旋转速度
setBgTime.addEventListener('focus', function () {
  var timer = setInterval(() => {
    if (parseFloat(setBgTime.value) > 0) {
      if (cubeFol && !godFol) {
        //判断是否为上帝视角
        room.style.animation =
          'rotate ' + setBgTime.value + 's linear infinite';
      } else {
        //上帝视角专属旋转样式
        room.style.animation =
          'godRotate ' + setBgTime.value + 's linear infinite';
      }
    }
  }, 500);
  setBgTime.addEventListener('blur', function () {
    clearInterval(timer);
    if (parseFloat(setBgTime.value) > 0) {
      if (parseFloat(setBgTime.value) < 1) {
        subtitle('有点快了哦');
      } else if (parseFloat(setBgTime.value) < 0.5) {
        subtitle('太快了吧！');
      } else if (parseFloat(setBgTime.value) > 15) {
        subtitle('有点慢了');
      } else if (parseFloat(setBgTime.value) > 20) {
        subtitle('太慢了吧...');
      } else {
        subtitle('这个速度刚刚好！');
      }
      TVFace(5);
      display('空间旋转时间您已设置为' + setBgTime.value + '秒');
      if (cubeFol && !godFol) {
        //判断是否为上帝视角
        room.style.animation =
          'rotate ' + setBgTime.value + 's linear infinite';
      } else {
        //上帝视角专属旋转样式
        room.style.animation =
          'godRotate ' + setBgTime.value + 's linear infinite';
      }
    } else if (setBgTime.value == '') {
      if (cubeFol && !godFol) {
        //判断是否为上帝视角
        room.style.animation = 'rotate 20s linear infinite';
      } else {
        //上帝视角专属旋转样式
        room.style.animation = 'godRotate 20s linear infinite';
      }
    } else if (setBgTime.value == 0) {
      subtitle('旋转速度为0，相当于关闭了自动旋转，主人可以选择手动关闭哦！');
    } else {
      subtitle(
        setBgTime.value +
          '是串什么字符？人家可不认识哦，人家只认识数字，而且不能是负数哦'
      );
      TVFace(3);
      display('旋转时间可不能乱填哦！');
    }
  });
});

/********** 小电视是否自动旋转 **********/
getSetBloAutoRot.addEventListener('change', function () {
  if (getSetBloAutoRot.checked) {
    if (withBgBlo) {
      withBgBlo = false;
      subtitle(
        '主人只想让人家一个人转呢！不过人家还是觉得和空间一起转比较好哦~'
      );
    } else {
      withBgBlo = true;
      subtitle(
        '怎么感觉空间和我不是同步旋转的呢？主人没有让空间和人家同时开始旋转哦，把空间自动旋转关了重开吧！'
      );
    }
    onSwtBloAutoRot();
  } else {
    if (withBgBlo == false) {
      withBgBlo = true;
      subtitle('主人是想让人家和空间同时开始旋转才不让人家转的吗？');
    } else {
      withBgBlo = false;
      subtitle('主人把人家单独关闭了...');
    }
    offSwtBloAutoRot();
  }
});

function onSwtBloAutoRot() {
  TVRoomAutoRot = false;
  TVRoomLock();
  onDpDnSet(bloTime);
  onSwtAndSon(swtBloAutoRot, swtBloAutoRotSon, getSetBloAutoRot);
  if (cubeFol && !godFol) {
    //判断是否为上帝视角
    TV.style.animation = 'rotate 20s linear infinite';
    TVSon.style.animation = 'rotate 20s linear infinite';
  } else {
    //上帝视角专属旋转样式
    TV.style.animation = 'godRotate 20s linear infinite';
    TVSon.style.animation = 'godRotate 20s linear infinite';
  }
}

function offSwtBloAutoRot() {
  TVRoomAutoRot = true;
  setBloTime.value = '';
  TV.style.animation = '';
  TVSon.style.animation = '';
  TVRoomUnlock();
  backStartPoint();
  offSwtAndSon(swtBloAutoRot, swtBloAutoRotSon, getSetBloAutoRot);
  offDpDnSet(bloTime);
}
// 设置旋转速度
setBloTime.addEventListener('focus', function () {
  var timer = setInterval(() => {
    if (parseFloat(setBloTime.value) > 0) {
      if (cubeFol && !godFol) {
        //判断是否为上帝视角
        TV.style.animation = 'rotate ' + setBloTime.value + 's linear infinite';
      } else {
        //上帝视角专属旋转样式
        TV.style.animation =
          'godRotate ' + setBloTime.value + 's linear infinite';
      }
    }
  }, 500);
  setBloTime.addEventListener('blur', function () {
    clearInterval(timer);
    if (parseFloat(setBloTime.value) > 0) {
      if (parseFloat(setBloTime.value) < 1) {
        subtitle('有点快了哦');
      } else if (parseFloat(setBloTime.value) < 0.5) {
        subtitle('太快了吧！');
      } else if (parseFloat(setBloTime.value) > 15) {
        subtitle('有点慢了');
      } else if (parseFloat(setBloTime.value) > 20) {
        subtitle('太慢了吧...');
      } else {
        subtitle('这个速度刚刚好！');
      }
      TVFace(5);
      display('小电视旋转时间您已设置为' + setBloTime.value + '秒');
      if (cubeFol && !godFol) {
        //判断是否为上帝视角
        TV.style.animation = 'rotate ' + setBloTime.value + 's linear infinite';
      } else {
        //上帝视角专属旋转样式
        TV.style.animation =
          'godRotate ' + setBloTime.value + 's linear infinite';
      }
    } else if (setBloTime.value == '') {
      if (cubeFol && !godFol) {
        //判断是否为上帝视角
        TV.style.animation = 'rotate 20s linear infinite';
      } else {
        //上帝视角专属旋转样式
        TV.style.animation = 'godRotate 20s linear infinite';
      }
    } else if (setBloTime.value == 0) {
      subtitle('旋转速度为0，相当于关闭了自动旋转，主人可以选择手动关闭哦！');
    } else {
      subtitle(
        setBloTime.value +
          '是串什么字符？人家可不认识哦，人家只认识数字，而且不能是负数哦'
      );
      TVFace(3);
      display('旋转时间输入有误，请重新输入');
    }
  });
});

/********** 显示全景 *********/
var wallImgXY = false;
getSetDisImg.addEventListener('change', function () {
  if (getSetDisImg.checked) {
    wallImgXY = true;
    offHideBg();
    onSwtDisImg();
    subtitle(
      '为了不让主人感到晕，人家只能上下旋转90°，不过关闭下面的那个选项人家就可以倒立了！'
    );
  } else {
    wallImgXY = false;
    offSwtDisImg();
    subtitle('全景图欣赏完了，主人又想做些什么呢？');
  }
});

function onSwtDisImg() {
  onXLimit();
  offHideBg();
  onDpDnSet(xLimit);
  for (let i = 0; i < walls.length; i++) {
    wallImg[i].style.opacity = 1;
  }
}

function offSwtDisImg() {
  swtDisImg.style.boxShadow = '0px 0px 2px rgba(0, 0, 0, 0.75) inset';
  offDpDnSet(xLimit);
  for (let i = 0; i < walls.length; i++) {
    wallImg[i].style.opacity = 0;
  }
}

/********** 禁止空间跟随鼠标 **********/
var bgFol = true;
getSetBgFlRot.addEventListener('change', function () {
  if (getSetBgFlRot.checked) {
    onSwtBgFlRot();
    subtitle('空间现在不能被主人控制旋转了');
  } else {
    offSwtBgFlRot();
    subtitle('空间现在又能被主人控制了');
  }
});

function onSwtBgFlRot() {
  bgFol = false;
}

function offSwtBgFlRot() {
  bgFol = true;
}

/********** 禁止小电视跟随鼠标 **********/
var cubeFol = true;
getSetCubeFlRot.addEventListener('change', function () {
  if (getSetCubeFlRot.checked) {
    onSwtCubeFlRot();
    subtitle(
      '主人现在只能控制空间旋转了，人家是不会转的哦，除非主人开启了上一个选项，让空间也不能转了'
    );
  } else {
    offSwtCubeFlRot();
    subtitle('人家又能被主人控制旋转了');
  }
});

function onSwtCubeFlRot() {
  cubeFol = false;
}

function offSwtCubeFlRot() {
  cubeFol = true;
}

/********** 解除Y轴90°限制 **********/
var flag = false;
getSetXLimit.addEventListener('change', function () {
  if (getSetXLimit.checked) {
    onXLimit();
    subtitle('看来主人貌似觉得有些不适，不让人家翻跟斗');
  } else {
    offXLimit();
    subtitle('人家现在可以翻跟斗了');
  }
});

function onXLimit() {
  flag = true;
  onSwtAndSon(swtXLimit, swtXLimitSon, getSetXLimit);
}

function offXLimit() {
  flag = false;
}

/********** 上帝视角 **********/
var godFol = false;

//进入上帝视角瞬间需要锁定的input
var arrInput = [
  getSetBgFlRot,
  getSetCubeFlRot,
  getSetHideBg,
  getSetBgAutoRot,
  getSetBloAutoRot,
  getSetGod,
  getSetJump,
];

//已进入上帝模式需要解锁的input
var arrInputInto = [getSetHideBg, getSetBgAutoRot, getSetBloAutoRot, getSetGod];

//进入上帝视角瞬间需要变灰的input
var arrSwt = [
  swtHideBg,
  swtBgAutoRot,
  swtBloAutoRot,
  swtGod,
  swtBgFlRot,
  swtCubeFlRot,
  swtJump,
];

//已进入上帝模式需要还原透明度的开关
var arrSwtInto = [swtHideBg, swtBgAutoRot, swtBloAutoRot, swtGod];
getSetGod.addEventListener('change', function () {
  room.style.transitionDuration = '1s';
  TV.style.transitionDuration = '1s';
  if (getSetGod.checked) {
    onSwtGod();
    subtitle('主人开始离我越来越远了，逐渐离开了空间');
  } else {
    offSwtGod();
    subtitle('主人又回来啦！');
  }
});

function RestoreDefault() {
  getAdTIon.value = ''; //旋转时间留空
  getSetSensitive.value = ''; //灵敏度留空
  getSetSize.value = ''; //体积留空
  setBgTime.value == ''; //空间旋转时间留空
  setBloTime.value == ''; //小电视旋转时间留空
  sensitive = 1; //还原灵敏度
  TV.style.zoom = ''; //还原小电视体积
  TVSon.style.zoom = ''; //还原小电视体积
  offHideBg();
  offSwtBgAutoRot();
  offSwtBloAutoRot();
  offSwtBgFlRot();
  offSwtCubeFlRot();
}

function onSwtGod() {
  TVGod = true;
  RestoreDefault(); //所有恢复默认
  setTimeout(() => {
    room.style.animation = 'onGod 5s forwards'; //进入上帝视角动画
    TV.style.animation = 'onGod 5s forwards'; //进入上帝视角动画
    TVSon.style.animation = 'onGod 5s forwards'; //进入上帝视角动画
  }, 1500);
  //以上为更改单独样式

  //以下进入循环区
  for (let i = 0; i < fail2.length; i++) {
    fail2[i].style.color = 'red';
    fail2[i].innerHTML = '☹';
    fail2[i].style.textShadow = '0 0px 5px red';
  }
  for (let i = 0; i < fail3.length; i++) {
    fail3[i].style.display = 'block'; //显示失效文字
    fail3[i].style.display = 'block'; //显示失效文字
    fail3[i].style.textShadow = '0 0px 5px red';
  }
  for (let i = 0; i < arrInput.length; i++) {
    // 锁定所有需要锁定的输入框
    arrInput[i].disabled = true;
  }
  for (let i = 0; i < fail2.length; i++) {
    //显示所有的红字提示
    fail2[i].style.display = 'block';
  }
  for (let i = 0; i < arrSwt.length; i++) {
    //指定开关样式变灰（包含暂时变灰的开关）
    arrSwt[i].style.opacity = 0.25;
  }
  setTimeout(() => {
    //离开空间边缘改变空间透明度和小电视层级
    for (let i = 0; i < walls.length; i++) {
      walls[i].style.opacity = 0.25;
    }
    cube.style.zIndex = '-1';

    // 已进入上帝视角
    setTimeout(() => {
      godFol = true; //此时为上帝视角，空间和小电视更换自动旋转样式
      room.style.animation = '';
      TV.style.animation = '';
      TVSon.style.animation = '';
      room.style.transform =
        'rotateX(-31deg) rotateY(-45deg) scale3d(.1, .1, .1)';
      TV.style.transform =
        'rotateX(-31deg) rotateY(-45deg) scale3d(.1, .1, .1)';
      TVSon.style.transform =
        'rotateX(-31deg) rotateY(-45deg) scale3d(.1, .1, .1)';
      adDefault();
      for (let i = 0; i < arrInputInto.length; i++) {
        //解锁暂时被锁定的开关
        arrInputInto[i].disabled = false;
      }
      for (let i = 0; i < fail2.length; i++) {
        //开关解锁后红字改变
        fail2[i].style.color = 'green';
        fail2[i].innerHTML = '☺';
        fail2[i].style.textShadow = '0 0px 5px green';
      }
      for (let i = 0; i < arrSwtInto.length; i++) {
        //解锁开关后，暂时变灰的开关透明度还原
        arrSwtInto[i].style.opacity = 1;
      }
    }, 3500);
  }, 2750);
}

function offSwtGod() {
  TVGod = false;
  RestoreDefault(); //所有恢复默认
  setTimeout(() => {
    backStartPoint();
  }, 50);
  setTimeout(() => {
    room.style.transform =
      'rotateX(-31deg) rotateY(-45deg) scale3d(.1, .1, .1)';
    TV.style.transform = 'rotateX(-31deg) rotateY(-45deg) scale3d(.1, .1, .1)';
    TVSon.style.transform =
      'rotateX(-31deg) rotateY(-45deg) scale3d(.1, .1, .1)';
  }, 50);
  setTimeout(() => {
    room.style.animation = 'offGod 3s forwards'; //退出上帝视角动画
    TV.style.animation = 'offGod 3s forwards'; //退出上帝视角动画
    TVSon.style.animation = 'offGod 3s forwards'; //退出上帝视角动画
  }, 1500);
  //以上为更改单独样式

  //以下进入循环区
  for (let i = 0; i < fail2.length; i++) {
    fail2[i].innerHTML = '☹';
    fail2[i].style.color = 'red';
    fail2[i].style.textShadow = '0 0px 5px red';
  }
  for (let i = 0; i < arrInput.length; i++) {
    // 锁定所有需要锁定的输入框
    arrInput[i].disabled = true;
  }
  for (let i = 0; i < arrSwt.length; i++) {
    //指定开关样式变灰（包含暂时变灰的开关）
    arrSwt[i].style.opacity = 0.25;
  }
  setTimeout(() => {
    //离开空间边缘改变空间透明度和小电视层级
    cube.style.zIndex = 2;
    for (let i = 0; i < walls.length; i++) {
      walls[i].style.opacity = 1;
    }

    // 已退出上帝视角
    setTimeout(() => {
      godFol = false; //此时已退出上帝视角，空间和小电视更换自动旋转样式
      room.style.animation = '';
      TV.style.animation = '';
      TVSon.style.animation = '';
      room.style.transform = '';
      TV.style.transform = '';
      TVSon.style.transform = '';
      adDefault();
      for (let i = 0; i < arrInput.length; i++) {
        //解锁所有被锁定的开关
        arrInput[i].disabled = false;
      }
      for (let i = 0; i < fail2.length; i++) {
        //隐藏所有红字
        fail2[i].style.display = 'none';
      }
      for (let i = 0; i < fail3.length; i++) {
        //隐藏失效红字
        fail3[i].style.display = 'none';
      }
      for (let i = 0; i < arrSwt.length; i++) {
        //解锁开关后，变灰的开关透明度还原
        arrSwt[i].style.opacity = 1;
      }
    }, 2250);
  }, 2500);
}

/********** 护眼模式 **********/
getSetHuYan.addEventListener('change', function () {
  if (getSetHuYan.checked) {
    offFilter();
    offSwtAndSon(swtFilter, swtFilterSon, getSetFilter);
    onHuYan();
    subtitle('主人还是觉得开启护眼模式舒服！嘻嘻嘻');
  } else {
    offHuYan();
    subtitle('看来主人想尝试一下关闭护眼模式是什么样子');
  }
});

function onHuYan() {
  body.style.filter = 'brightness(70%)';
  onDpDnSet(huYanCubeUl);
  onSwtAndSon(swtHuYan, swtHuYanSon, getSetHuYan);
}

function offHuYan() {
  body.style.filter = '';
  getSetHuYanCubeUl.value = '';
  cube.style.backgroundColor = '';
  offDpDnSet(huYanCubeUl);
  offSwtAndSon(swtHuYan, swtHuYanSon, getSetHuYan);
}

// 设置亮度
getSetHuYanCubeUl.addEventListener('focus', function () {
  var timer = setInterval(() => {
    if (
      getSetHuYanCubeUl.value > 0 &&
      getSetHuYanCubeUl.value <= 10 &&
      getSetHuYanCubeUl.value != ''
    ) {
      body.style.filter = 'brightness(' + getSetHuYanCubeUl.value * 10 + '%)';
    }
    if (getSetHuYanCubeUl.value == '') {
      body.style.filter = 'brightness(70%)';
    }
  }, 500);
  getSetHuYanCubeUl.addEventListener('blur', function () {
    clearInterval(timer);
    if (
      getSetHuYanCubeUl.value > 0 &&
      getSetHuYanCubeUl.value < 10 &&
      getSetHuYanCubeUl.value != ''
    ) {
      TVFace(5);
      display('页面亮度您已设为' + getSetHuYanCubeUl.value * 10 + '%');
    } else if (getSetHuYanCubeUl.value == 0) {
      TVFace(9);
      display('最低为1');
      subtitle('主人，页面亮度为0的话，就看不见人家咯，换一个数试试吧');
    } else if (getSetHuYanCubeUl.value <= 10) {
      TVFace(4);
      display('最高为10');
      subtitle('大于或等于10的话，建议主人关闭护眼哦');
    } else if (getSetHuYanCubeUl.value == '') {
      body.style.filter = 'brightness(50%)';
    } else {
      TVFace(3);
      display('页面亮度输入有误，请重新输入');
      subtitle(
        getSetHuYanCubeUl.value +
          '是串什么字符？人家可不认识哦，人家只认识数字，而且不能是负数哦'
      );
    }
  });
});

/********** 跳跃模式失效 **********/
var failD1 = document.querySelector('.failD1');
var failD2 = document.querySelector('.failD2');
var failD3 = document.querySelector('.failD3');
var failD4 = document.querySelector('.failD4');
var failD5 = document.querySelector('.failD5');
var failD6 = document.querySelector('.failD6');
var failD7 = document.querySelector('.failD7');

/********** 获取dance模式有关样式 */
var danceTimerOut = [];
var danceInterval = [];
var danceBg = document.querySelector('.danceBg'); //渐变背景
var countDown = document.querySelector('.countDown'); //倒计时
var countDownText = document.querySelector('.countDown h1'); //倒计时数字
var expressionDanceFace = document.querySelector('.expression span'); //表情
var aerTuReTopSon = document.querySelector('.apertureTop li'); //中心光圈
var aerTuReTopSonNum = document.querySelector('.apertureTop li p'); //中心光圈数字
var apertureFat = document.querySelector('.apertureFat'); //中间三角形
var aerTuReTopSonP = document.querySelectorAll('.apertureTop>p'); //背后光圈

/********** 圆形方形交替 **********/
var allCir = document.querySelector('.allCir');
var allCirNum = ['10px', '25px', '50px', '100px', '50%']; //支持关闭光晕
getSetAllCir.addEventListener('change', function () {
  if (getSetAllCir.checked) {
    allCirNum = ['10px', '25px', '50px', '100px', '0%'];
    subtitle(
      '人家也不清楚dance模式里面的情况，得主人开启后才知道哦！主人应该没忘记点击右边的问号吧？'
    );
  } else {
    allCirNum = ['10px', '25px', '50px', '100px', '50%'];
    subtitle(
      '这个人家倒是清楚，现在不会出现圆形光圈与方形光圈的交替动画了，嘻嘻嘻'
    );
  }
});

/********** 修复小电视消失问题 **********/
var btnTVBlock = document.querySelector('.btnTVBlock');
var getSetTVBlock = document.querySelector('.TVBlock input');
getSetTVBlock.addEventListener('change', function () {
  if (getSetTVBlock.checked || true) {
    cube.style.display = 'flex';
    TVFocus = true;
    display('小电视修复成功');
    subtitle('刚刚看不见人家的话，现在主人能看见了吧？');
  }
});

/********** 切换播放模式 **********/
var musicDelay = 500;
var modeFlag = false;
var pattern = document.querySelector('.pattern');
var btnPlayMode = document.querySelector('.btnPlayMode');
var getSetPlayMode = document.querySelector('.playMode input');
getSetPlayMode.addEventListener('change', function () {
  if (modeFlag) {
    musicDelay = 500;
    modeFlag = false;
    pattern.style.color = 'rgb(255, 193, 7)';
    pattern.innerHTML =
      '扬声器<span style="color:#fff"> | <span style="color:rgb(40, 167, 69)">0ms</span>';
    display(
      '已为您切换为<span style="color: rgb(255, 193, 7);">扬声器</span>模式'
    );
    subtitle('现在主人要使用电脑扬声器哦！不要使用蓝牙设备');
  } else {
    pattern.style.color = 'rgb(0, 123, 255)';
    modeFlag = true;
    musicDelay = 250;
    pattern.innerHTML =
      '蓝牙<span style="color:#fff"> | <span style="color:rgb(220, 53, 69")>250ms</span>';
    display(
      '已为您切换为<span style="color: rgb(0, 123, 255);">蓝牙</span>模式'
    );
    subtitle('现在主人要连接蓝牙设备哦！不要使用电脑扬声器');
  }
});

/********** 动画速度 **********/
speed = 2;
SpeedX5 = 2.15;
speed460_920 = 460 * speed;
speed46_92 = 0.46 * speed;
speed920_1840 = 920 * speed;
speed92_180 = 0.92 * speed;
speed368_736 = 3.68 * speed;
speed920_2760 = 1840 * 0.5;
var SpeedX5 = 2.15;
music = new Audio('MUSIC/slow.mp3 ');
music.volume = 0.35
allCirNum = ['10px', '25px', '50px', '100px', '0%']; //支持关闭光晕
onSwtAndSon(swtAllCir, swtAllCirSon, getSetAllCir);
var animationSpeed = document.querySelector('.speed');
var radSpeedX5 = document.querySelector('.radSpeedX5');
var radSpeed1X = document.querySelector('.radSpeed1X');
var speedArr = [
  6000 * 2 + 3000,
  7000 * 2 + 1000,
  7500 * 2,
  4850 * 2,
  7500 * 2,
  7400 * 2,
  7500 * 2,
  4900 * 2,
  450 * 2.5,
  7500 * 2,
  250 * 2,
  0,
];

function reStyle() {
  //还原背景色
  radSpeedX5.style.backgroundColor = '';
  radSpeed1X.style.backgroundColor = 'rgb(192, 253, 206, .75)';
  // 还原形状
  radSpeedX5.style.borderRadius = '0';
  radSpeed1X.style.borderRadius = '0';
  //关闭阴影
  radSpeedX5.style.boxShadow = '';
  radSpeed1X.style.boxShadow = '0 0 3px 0 rgba(0, 0, 0, .75) inset';
}
radSpeedX5.addEventListener('mouseup', function () {
  allCirNum = ['10px', '25px', '50px', '100px', '0%']; //支持关闭光晕
  onSwtAndSon(swtAllCir, swtAllCirSon, getSetAllCir);
  radSpeed1X.style.transform = 'translateX(44px) scale(.75)';
  setTimeout(() => {
    radSpeed1X.style.transform = 'translateX(0px) scale(.75)';
    setTimeout(() => {
      radSpeed1X.style.transform = 'translateX(0px) scale(1)';
    }, 500);
  }, 500);
  radSpeedX5.style.transform = 'translateX(-44px) scale(1.25)';
  setTimeout(() => {
    radSpeedX5.style.transform = 'translateX(0px) scale(1.25)';
    setTimeout(() => {
      radSpeedX5.style.transform = 'translateX(0px) scale(1)';
    }, 500);
  }, 500);
  subtitle(
    '慢慢地跳，主人就能看清人家的每一个动作啦！动作比较慢，已为主人开启圆形与正方形交替'
  );
  speedArr = [
    6000 * 2 + 3000,
    7000 * 2 + 1000,
    7500 * 2,
    4850 * 2,
    7500 * 2,
    7400 * 2,
    7500 * 2,
    4900 * 2,
    450 * 2.5,
    7500 * 2,
    250 * 2,
    0,
  ];
  speed = 2;
  SpeedX5 = 2.15;
  speed460_920 = 460 * speed;
  speed46_92 = 0.46 * speed;
  speed920_1840 = 920 * speed;
  speed92_180 = 0.92 * speed;
  speed368_736 = 3.68 * speed;
  speed920_2760 = 1840 * 0.5;
  music = new Audio('MUSIC/slow.mp3 ');
  music.volume = 0.35
  reStyle();
  this.style.backgroundColor = 'rgb(186, 246, 255)';
  this.style.boxShadow = '0 0 10px 0 rgb(186, 246, 255)';
  this.style.borderRadius = '20px';
  display(
    '小电视及背景光圈的速度<span style="color:rgb(23, 162, 184);">慢了一半</span>'
  );
});
radSpeed1X.addEventListener('mouseup', function () {
  allCirNum = ['10px', '25px', '50px', '100px', '50%']; //支持关闭光晕
  offSwtAndSon(swtAllCir, swtAllCirSon, getSetAllCir);
  radSpeed1X.style.transform = 'translateX(0px) scale(.75)';
  setTimeout(() => {
    radSpeed1X.style.transform = 'translateX(44px) scale(.75)';
    setTimeout(() => {
      radSpeed1X.style.transform = 'translateX(44px) scale(1)';
    }, 500);
  }, 500);
  radSpeedX5.style.transform = 'translateX(0px) scale(1.25)';
  setTimeout(() => {
    radSpeedX5.style.transform = 'translateX(-44px) scale(1.25)';
    setTimeout(() => {
      radSpeedX5.style.transform = 'translateX(-44px) scale(1)';
    }, 500);
  }, 500);
  speedArr = [
    5500, 7750, 7250, 4750, 7250, 7750, 7250, 7000, 1000, 7750, 500, 750,
  ];
  speed = 1;
  SpeedX5 = 1.15;
  speed460_920 = 460 * speed;
  speed46_92 = 0.46 * speed;
  speed920_1840 = 920 * speed;
  speed92_180 = 0.92 * speed;
  speed368_736 = 3.68 * speed;
  speed920_2760 = 1840 / speed;
  music = new Audio('MUSIC/standard.mp3 ');
  music.volume = 0.35
  reStyle();
  this.style.borderRadius = '20px';
  this.style.backgroundColor = 'rgb(192, 253, 206)';
  this.style.boxShadow = '0px 0px 10px 0px rgba(192, 253, 206)';
  subtitle('节奏稍微快，已为主人关闭了圆形与正方形交替');
  display(
    '小电视及背景光圈的速度<span style="color:rgb(40, 167, 69);">已恢复默认</span>'
  );
});

/********** 滤镜 **********/
var filterValueArr = [100, 100, 100, 0];
var sliderValue1 = document.querySelector('.range1 span');
var sliderValue2 = document.querySelector('.range2 span');
var sliderValue3 = document.querySelector('.range3 span');
var sliderValue4 = document.querySelector('.range4 span');
var rangeInput1 = document.querySelector('.range1 input');
var rangeInput2 = document.querySelector('.range2 input');
var rangeInput3 = document.querySelector('.range3 input');
var rangeInput4 = document.querySelector('.range4 input');
var sliderValueArr = [sliderValue1, sliderValue2, sliderValue3, sliderValue4];
var rangeInputArr = [rangeInput1, rangeInput2, rangeInput3, rangeInput4];
for (let i = 0; i < rangeInputArr.length; i++) {
  rangeInputArr[i].style.width = rangeInputArr[i].addEventListener(
    'input',
    function () {
      var rangeValue1 = rangeInputArr[i].value;
      var rangeValue2 = rangeInputArr[i].value;
      var rangeValue3 = rangeInputArr[i].value;
      var rangeValue4 = rangeInputArr[i].value;
      var rangeValueArr = [rangeValue1, rangeValue2, rangeValue3, rangeValue4];
      //默认指示框属性
      sliderValueArr[i].innerHTML = rangeValueArr[i];
      sliderValueArr[i].style.left = rangeValueArr[i] + '%';
      //判断调节属性
      if (i == 0) {
        filterValueArr[0] = rangeValueArr[i];
        sliderValueArr[i].style.left = rangeValueArr[i] / 2 + '%';
      }
      if (i == 1) {
        filterValueArr[1] = rangeValueArr[i];
        sliderValueArr[i].style.left = rangeValueArr[i] / 2 + '%';
      }
      if (i == 2) {
        filterValueArr[2] = rangeValueArr[i];
        sliderValueArr[i].style.left = rangeValueArr[i] / 2 + '%';
      }
      if (i == 3) {
        filterValueArr[3] = rangeValueArr[i] * 3.6;
        sliderValueArr[i].style.left = 'calc(' + rangeValueArr[i] + '% + 50px';
      }
      body.style.filter =
        'brightness(' +
        filterValueArr[0] +
        '%) contrast(' +
        filterValueArr[1] +
        '%) saturate(' +
        filterValueArr[2] +
        '%) hue-rotate(' +
        filterValueArr[3] +
        'deg)';
    }
  );
}
getSetFilter.addEventListener('change', function () {
  if (getSetFilter.checked) {
    offHuYan();
    if (noDancing) {
      subtitle(
        '主人开启可滤镜，由于护眼模式使用了亮度，已为主人关闭了护眼模式'
      );
    }
    onFilter();
  } else {
    if (noDancing) {
      subtitle('主人关闭了滤镜，是原来的色彩比较好看嘛？');
    }
    offFilter();
  }
});

function onFilter() {
  onSwtAndSon(swtFilter, swtFilterSon, getSetFilter);
  onDpDnSet(brightness);
  setTimeout(() => {
    onDpDnSet(contrast);
    setTimeout(() => {
      onDpDnSet(saturate);
      setTimeout(() => {
        onDpDnSet(hueRotate);
      }, 100);
    }, 100);
  }, 100);
}

function offFilter() {
  offSwtAndSon(swtFilter, swtFilterSon, getSetFilter);
  filterValueArr = [100, 100, 100, 0];
  body.style.filter =
    'brightness(' +
    filterValueArr[0] +
    '%) contrast(' +
    filterValueArr[1] +
    '%) saturate(' +
    filterValueArr[2] +
    '%) hue-rotate(' +
    filterValueArr[3] +
    'deg)';
  offDpDnSet(brightness);
  setTimeout(() => {
    offDpDnSet(contrast);
    setTimeout(() => {
      offDpDnSet(saturate);
      setTimeout(() => {
        offDpDnSet(hueRotate);
      }, 100);
    }, 100);
  }, 100);
  for (let i = 0; i < rangeInputArr.length; i++) {
    rangeInputArr[i].value = 100;
    sliderValueArr[i].innerHTML = '100';
    sliderValueArr[i].style.left = '50%';
  }
  rangeInputArr[3].value = 0;
  sliderValueArr[3].innerHTML = '0';
}

/********** 小电视目光跟随鼠标**********/
var TVSetMove = true;
getSetTVEyesFol.addEventListener('change', function () {
  onceJumpXY();
  if (getSetTVEyesFol.checked) {
    onTVEyesFol();
    TVSetMove = true;
    subtitle('终于可以盯着主人的鼠标摇头晃脑了');
  } else {
    offTVEyesFol();
    TVFace('2');
    subtitle('看来人家盯着鼠标会给主人带来一些麻烦');
    TVSetMove = false;
  }
});

function onTVEyesFol() {
  onSwtAndSon(swtTVEyesFol, swtTVEyesFolSon, getSetTVEyesFol);
  TVSon.style.display = 'flex'; //显示复制体
}

function offTVEyesFol() {
  TVSon.style.display = 'none'; //显示复制体
}
//位置重置
var btnTVStartPoint = document.querySelector('.btnTVStartPoint');
var getSetTVStartPoint = document.querySelector('.TVStartPoint input');
getSetTVStartPoint.addEventListener('change', function () {
  if (getSetTVStartPoint.checked || true) {
    subtitle('空间和人家的复制体已经回到初始位置了');
    onceJumpXY();
    display('位置已重置');
  }
});
