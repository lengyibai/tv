function start() {
  // 单独天线动画
  TV.style.bottom = '.667rem';
  TV.style.animation = '';
  fiveLiLSon.style.animation = '';
  fiveLiRSon.style.animation = '';
  danceTimerOut[0] = setTimeout(() => {
    fiveLiLSon.style.animation = 'BL ' + speed46_92 + 's linear infinite';
    fiveLiRSon.style.animation = 'BR ' + speed46_92 + 's linear infinite';
  }, 1380);
}

function AA() {
  //原地Q弹动画
  cube.style.animation = '';
  cube.style.alignItems = 'center';
  cube.style.transformOrigin = '';
  TV.style.bottom = '.667rem';
  TV.style.animation = 'A1 ' + speed46_92 + 's infinite';
  fiveLiLSon.style.animation = 'AL ' + speed92_180 + 's linear infinite';
  fiveLiRSon.style.animation = 'AR ' + speed92_180 + 's linear infinite';
}

function BB() {
  //原地跳动画
  for (let i = 0; i < aerTuReTopSonP.length; i++) {
    aerTuReTopSonP[i].style.borderStyle = 'outset';
    aerTuReTopSonP[i].style.borderRadius = '50%';
  }
  aerTuReTopSon.style.borderRadius = '50%';
  cube.style.animation = '';
  cube.style.alignItems = 'center';
  cube.style.transformOrigin = '';
  TV.style.bottom = '.667rem';
  TV.style.animation = 'B1 ' + speed46_92 + 's infinite';
  fiveLiLSon.style.animation = 'BL ' + speed46_92 + 's linear infinite';
  fiveLiRSon.style.animation = 'BR ' + speed46_92 + 's linear infinite';
}

function CC() {
  //中间停顿动画
  for (let i = 0; i < aerTuReTopSonP.length; i++) {
    aerTuReTopSonP[i].style.borderStyle = 'dashed';
    aerTuReTopSonP[i].style.borderRadius = allCirNum[4];
  }
  aerTuReTopSon.style.borderRadius = allCirNum[4];
  cube.style.alignItems = 'flex-end';
  cube.style.transformOrigin = 'center 50%';
  cube.style.bottom = '2rem';
  fiveLiLSon.style.animation = 'AL ' + speed92_180 + 's linear infinite';
  fiveLiRSon.style.animation = 'AR ' + speed92_180 + 's linear infinite';
  TV.style.animation = 'D1 ' + speed92_180 + 's linear infinite';
  cube.style.animation = 'C2 ' + speed92_180 + 's linear infinite';
}

function DD() {
  // 左右横跳动画
  for (let i = 0; i < aerTuReTopSonP.length; i++) {
    aerTuReTopSonP[i].style.borderStyle = 'inset';
    aerTuReTopSonP[i].style.borderRadius = '50%';
  }
  aerTuReTopSon.style.borderRadius = '50%';
  cube.style.bottom = '';
  TV.style.bottom = '';
  cube.style.alignItems = 'flex-start';
  cube.style.transformOrigin = 'center 75%';
  fiveLiLSon.style.animation = 'DL ' + speed92_180 + 's linear infinite';
  fiveLiRSon.style.animation = 'DR ' + speed92_180 + 's linear infinite';
  TV.style.animation = 'D1 ' + speed92_180 + 's linear infinite';
  cube.style.animation = 'D2 ' + speed92_180 + 's linear infinite';
}

function EE() {
  // 旋转动画
  for (let i = 0; i < aerTuReTopSonP.length; i++) {
    aerTuReTopSonP[i].style.borderStyle = 'dotted';
    aerTuReTopSonP[i].style.borderRadius = allCirNum[4];
  }
  aerTuReTopSon.style.borderRadius = allCirNum[4];
  cube.style.bottom = '';
  TV.style.bottom = '';
  cube.style.alignItems = 'flex-start';
  cube.style.transformOrigin = 'center 75%';
  fiveLiLSon.style.animation = 'DL ' + speed92_180 + 's linear infinite';
  fiveLiRSon.style.animation = 'DR ' + speed92_180 + 's linear infinite';
  TV.style.animation = 'E1 ' + speed92_180 + 's linear infinite';
  cube.style.animation = 'E2 ' + speed92_180 + 's linear infinite';
}

var colorsOpa = [
  'rgb(220, 53, 69, .75)',
  'rgb(253, 126, 20, .75)',
  'rgb(255, 193, 7, .75)',
  'rgb(40, 167, 69, .75)',
  'rgb(23, 162, 184, .75)',
  'rgb(0, 123, 255, .75)',
  ' rgb(102, 16, 242, .75)',
  'rgb(232, 62, 140, .75)',
];
var colorsTop = [
  'rgb(255, 182, 182)',
  'rgb(255, 215, 182)',
  'rgb(255, 238, 185)',
  'rgb(192, 253, 206)',
  'rgb(186, 246, 255)',
  'rgb(182, 217, 255)',
  'rgb(209, 181, 255)',
  'rgb(255, 182, 216)',
];
var colors = [
  'rgb(220, 53, 69)',
  'rgb(253, 126, 20)',
  'rgb(255, 193, 7)',
  'rgb(40, 167, 69)',
  'rgb(23, 162, 184)',
  'rgb(0, 123, 255)',
  ' rgb(102, 16, 242)',
  'rgb(232, 62, 140)',
  'rgb(220, 53, 69)',
  'rgb(253, 126, 20)',
  'rgb(255, 193, 7)',
  'rgb(40, 167, 69)',
  'rgb(23, 162, 184)',
  'rgb(0, 123, 255)',
  ' rgb(102, 16, 242)',
  'rgb(232, 62, 140)',
];
danceInterval[4] = setInterval(() => {
  for (let i = 0; i < aerTuReTopSonP.length; i++) {
    aerTuReTopSonP[i].style.borderColor = colors[i];
    aerTuReTopSonP[i].style.borderColor = colors[i];
    aerTuReTopSonP[i].style.boxShadow =
      '0px 0px ' +
      allCirNum[2] +
      ' 0px ' +
      colors[i] +
      ',0px 0px ' +
      allCirNum[2] +
      ' 0px ' +
      colors[i] +
      ' inset,0px 0px ' +
      allCirNum[0] +
      ' 0px ' +
      colors[i] +
      ',0px 0px ' +
      allCirNum[0] +
      ' 0px ' +
      colors[i] +
      ' inset';
  }
}, 1000);

/********** 光圈、背景色、颜色、表情动画集合 */
function OnAerTuReTopSonColor() {
  var j = 0;
  danceTimerOut[1] = setTimeout(() => {
    danceTimerOut[26] = setTimeout(() => {
      aerTuReTopSonNum.style.display = 'block';
    }, 1400 * SpeedX5);
    for (let i = 0; i < aerTuReTopSonP.length; i++) {
      aerTuReTopSonP[i].style.animation =
        'apertureTopSon ' + speed368_736 + 's linear infinite ';
      aerTuReTopSonP[i].style.animationDelay = speed46_92 * i + 's';
    }
    danceTimerOut[2] = setTimeout(() => {
      let i = 0;
      danceInterval[1] = setInterval(() => {
        if (i == expDance.length) {
          i = 0;
        }
        expressionFace.innerHTML = expDance[i];
        i++;
      }, speed460_920);
      aerTuReTopSon.style.animation =
        'apertureTop ' + speed46_92 + 's ' + speed46_92 + 's linear infinite ';
      danceInterval[2] = setInterval(() => {
        if (j == 8) {
          j = 0;
        }
        aerTuReTopSon.style.borderColor = colors[j];
        aerTuReTopSon.style.background =
          'radial-gradient(circle at 50% 0%, ' +
          colorsTop[j] +
          ', ' +
          colors[j] +
          ')';
        aerTuReTopSon.style.boxShadow =
          '0px 0px ' +
          allCirNum[3] +
          ' 0px ' +
          colors[j] +
          ',0px 0px ' +
          allCirNum[3] +
          ' 0px ' +
          colors[j] +
          ' inset,0px 0px ' +
          allCirNum[1] +
          ' 0px ' +
          colors[j] +
          ',0px 0px ' +
          allCirNum[1] +
          ' 0px ' +
          colors[j] +
          ' inset';
        j++;
        for (let i = 0; i < TVSide.length; i++) {
          TVSide[i].style.borderColor = colorsOpa[j]; //小电视边框改变
        }
      }, speed460_920);
    }, speed920_1840);
  }, speed920_2760);
}
getSetJump.addEventListener('change', function () {
  if (getSetJump.checked) {
    CHS.innerHTML = ''; //清空小电视的话
    aerTuReTopSon.style.borderRadius = '50%';
    body.style.background = '#000';
    noDancing = false; //禁止盒子睡觉
    stopBGM();
    MoveHereF5();
    offTVEyesFol();
    offLeftSlideBtn();
    offRightSlideBtn();
    clearInterval(TVTextTimer); //停止打字
    for (let i = 0; i < TVSide.length; i++) {
      TVSide[i].style.animationDelay = '0s'; //清除拼接动画间隔，直接出现
    }
    setTimeout(() => {
      leftSlide.style.display = 'none';
      rightSlide.style.display = 'none';
    }, 500);
    setTimeout(() => {
      countDown.style.display = 'flex';
      countDownText.style.fontSize = '3.333rem';
      onSwtAndSon(swtJump, swtJumpSon, getSetJump); //开启后开关样式
      tip('『 准备开始，请注意您的电脑音量，避免不必要的困扰 』');
      setTimeout(() => {
        countDown.style.backgroundColor = '#000';
      }, 100);
      head.addEventListener('dblclick', fn);

      function fn() {
        countDownText.style.color = 'rgb(40, 167, 69)';
        fullScreen(); //开启全屏
        assHidden();
        setTimeout(() => {
          countDownText.innerHTML = 3;
          countDownText.style.opacity = 1;
          countDownText.style.color = 'rgb(40, 167, 69)';
          head.removeEventListener('dblclick', fn);
          setTimeout(() => {
            countDownText.style.opacity = 0;
          }, 500);
          setTimeout(() => {
            countDownText.innerHTML = 2;
            countDownText.style.opacity = 1;
            countDownText.style.color = 'rgb(0, 123, 255)';
            setTimeout(() => {
              countDownText.style.opacity = 0;
            }, 500);
            setTimeout(() => {
              countDownText.innerHTML = 1;
              countDownText.style.opacity = 1;
              countDownText.style.color = 'rgb(255, 193, 7)';
              setTimeout(() => {
                countDownText.style.opacity = 0;
              }, 500);
              setTimeout(() => {
                countDownText.innerHTML = 'START!';
                countDownText.style.opacity = 1;
                countDownText.style.fontSize = '1.667rem';
                countDownText.style.color = 'rgb(220, 53, 69)';
                setTimeout(() => {
                  countDownText.style.opacity = 0;
                  setTimeout(() => {
                    countDownText.innerHTML = '';
                    countDown.style.display = 'none';
                    rightSlide.style.display = 'block'; //显示右设置栏按钮
                    countDown.style.backgroundColor = '';
                    setTimeout(() => {
                      rightSlide.style.opacity = 1; //显示右上角收回按钮
                    }, 50);
                    onIAL();
                    danceTimerOut[7] = setTimeout(() => {
                      start();
                      OnAerTuReTopSonColor();
                      danceTimerOut[8] = setTimeout(() => {
                        AA();
                        danceTimerOut[9] = setTimeout(() => {
                          BB();
                          danceTimerOut[10] = setTimeout(() => {
                            cube.style.display = 'none';
                          }, speedArr[0] - 200);
                          danceTimerOut[11] = setTimeout(() => {
                            cube.style.display = 'flex';
                            CC();
                            if (getSetFilter.checked) {
                              return false;
                            } else {
                              TEXT.style.display = 'block';
                              CHS.innerHTML = '滤镜也可以打开来试试哦！';
                              danceTimerOut[27] = setTimeout(() => {
                                onRightSlideBtn();
                                danceTimerOut[28] = setTimeout(() => {
                                  onFilter();
                                  setTimeout(() => {
                                    offFilter();
                                    setTimeout(() => {
                                      onFilter();
                                      danceTimerOut[29] = setTimeout(() => {
                                        offRightSlideBtn();
                                        offFilter();
                                        CHS.innerHTML = '';
                                        TEXT.style.display = 'none';
                                      }, 2000);
                                    }, 250);
                                  }, 250);
                                }, 2000);
                              }, 2000);
                            }
                            danceTimerOut[12] = setTimeout(() => {
                              cube.style.display = 'none';
                            }, speedArr[1] - 300);
                            danceTimerOut[12] = setTimeout(() => {
                              cube.style.display = 'flex';
                              DD();
                              danceTimerOut[13] = setTimeout(() => {
                                cube.style.display = 'none';
                              }, speedArr[2] - 200);
                              danceTimerOut[14] = setTimeout(() => {
                                cube.style.display = 'flex';
                                EE();
                                danceTimerOut[15] = setTimeout(() => {
                                  cube.style.display = 'none';
                                }, speedArr[9]);
                              }, speedArr[2]);
                            }, speedArr[1]);
                          }, speedArr[0]);
                        }, speedArr[10]);
                      }, 2250);
                    }, speedArr[8]);
                    //开启循环动画
                    danceTimerOut[16] = setTimeout(() => {
                      danceInterval[0] = setInterval(() => {
                        danceTimerOut[17] = setTimeout(() => {
                          cube.style.display = 'flex';
                          BB();
                          danceTimerOut[18] = setTimeout(() => {
                            speedArr[3] = 7250;
                            cube.style.display = 'none';
                          }, speedArr[4] - 200);
                          danceTimerOut[19] = setTimeout(() => {
                            cube.style.display = 'flex';
                            CC();
                            danceTimerOut[20] = setTimeout(() => {
                              cube.style.display = 'none';
                            }, speedArr[5] - 200);
                            danceTimerOut[21] = setTimeout(() => {
                              cube.style.display = 'flex';
                              DD();
                              danceTimerOut[22] = setTimeout(() => {
                                cube.style.display = 'none';
                              }, speedArr[6] - 200);
                              danceTimerOut[23] = setTimeout(() => {
                                cube.style.display = 'flex';
                                EE();
                                danceTimerOut[24] = setTimeout(() => {
                                  cube.style.display = 'none';
                                }, speedArr[7]);
                              }, speedArr[6]);
                            }, speedArr[5]);
                          }, speedArr[4]);
                        }, speedArr[3]);
                      }, speedArr[3] + speedArr[4] + speedArr[5] + speedArr[6]);
                    }, speedArr[11]);
                  }, 500);
                }, 500);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }
    }, 500);
  } else {
    music.currentTime = 999; //停止音乐
    offIAL();
  }
});

function onIAL() {
  //红字
  btnTVBlock.style.opacity = 0.25;
  btnPlayMode.style.opacity = 0.25;
  swtTVEyesFol.style.opacity = 0.25;
  btnTVStartPoint.style.opacity = 0.25;
  swtAllCir.style.opacity = 0.25;
  getSetTVBlock.disabled = true;
  getSetTVStartPoint.disabled = true;
  getSetPlayMode.disabled = true;
  getSetTVEyesFol.disabled = true;
  getSetTVStartPoint.disabled = true;
  getSetAllCir.disabled = true;
  failD2.style.display = 'block';
  failD3.style.display = 'block';
  failD4.style.display = 'block';
  failD5.style.display = 'block';
  failD6.style.display = 'block';
  failD7.style.display = 'block';
  pattern.style.display = 'none';
  animationSpeed.style.display = 'none';
  aerTuReTopSonNum.style.display = 'none';
  sensitive = 1; //还原灵敏度
  TV.style.zoom = ''; //还原正方体体积
  getAdTIon.value = ''; //旋转时间留空
  getSetSize.value = ''; //体积留空
  setBgTime.value == ''; //空间旋转时间留空
  setBloTime.value == ''; //正方体旋转时间留空
  TV.style.transform = '';
  getSetSensitive.value = ''; //灵敏度留空
  countDownText.innerHTML = '';
  expressionFace.innerHTML = '';
  danceBg.style.display = 'flex';
  expressionFace.style.display = 'block';
  cube.style.display = 'none';
  aerTuReTopSonNum.style.display = 'none';
  TVSide[0].querySelector('img').style.display = 'none'; //隐藏小电视图片
  countDown.style.fontSize = '3.333rem';
  cube.style.transition = 'all .25s ease-out';
  fiveLiLSon.style.backgroundColor = '#fff'; //天线样式改变
  fiveLiRSon.style.backgroundColor = '#fff'; //天线样式改变
  fiveLiLSon.style.height = '1.333rem'; //天线样式改变
  fiveLiRSon.style.height = '1.333rem'; //天线样式改变
  backStartPoint(); //还原初始位置
  //左设置栏相关
  adDefault(); //旋转时间重置
  offHuYan(); //关闭护眼模式
  offSwtCircular();
  onHideBg(); //开启隐藏背景
  offSwtBgAutoRot(); //关闭背景自动旋转
  offSwtBloAutoRot(); //关闭正方体自动旋转
  offSwtBgFlRot(); //关闭禁止空间跟随鼠标
  offSwtCubeFlRot(); //关闭禁止正方体跟随鼠标
  offSwtDisImg(); //关闭空间全景图
  onSwtXRotate(); //禁止X轴旋转
  onSwtYRotate(); //禁止Y轴旋转
  offFilter();
  //帮助按钮关闭
  for (let i = help.length - 1; i > help.length - 9; i--) {
    help[i].style.display = 'none';
  }
  for (let i = 0; i < TVSide.length; i++) {
    TVSide[i].style.getAdTIon = '0.75';
  }
  for (let i = 0; i < TVSide.length; i++) {
    TVSide[i].style.backgroundColor = 'rgb(255,255,255,.2)'; //小电视背景改变
  }
  var num;
  if (speed == 2) {
    num = 77;
    var musicTime = 78000;
  } else if (speed == 0.5) {
    num = 134;
    var musicTime = 135000;
  } else {
    num = 75;
    var musicTime = 76000;
  }
  danceInterval[3] = setInterval(() => {
    aerTuReTopSonNum.innerHTML = num;
    num--;
  }, 1000);
  setTimeout(() => {
    music.play(); //播放音乐
    danceTimerOut[25] = setTimeout(() => {
      offIAL();
      setTimeout(() => {
        music.currentTime = 999; //停止音乐
      }, 2500);
    }, musicTime);
  }, musicDelay);
  danceTimerOut[3] = setTimeout(() => {
    danceBg.style.opacity = 1;
    danceTimerOut[4] = setTimeout(() => {
      aerTuReTopSon.style.opacity = 1;
      danceTimerOut[5] = setTimeout(() => {
        cube.style.display = 'flex';
        danceTimerOut[6] = setTimeout(() => {
          expressionFace.innerHTML = '˙ ▽ ˙';
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}

function offIAL() {
  noDancing = true;
  TVSomeTF();
  TVBlurBehavior();
  // offRightSlideBtn()
  setTimeout(() => {
    rightSlide.style.opacity = 0;
    rightSlide.style.top = '-35px';
    rightSlide.style.display = 'none';
    normalFace.style.display = 'block';
    setTimeout(() => {
      setTimeout(() => {
        rightSlide.style.display = 'block';
        setTimeout(() => {
          rightSlide.style.top = 0;
          rightSlide.style.opacity = 1;
        }, 50);
      }, 250);
    }, 50);
  }, 600);
  getSetJump.disabled = true;
  swtJump.style.opacity = 0.25;
  failD1.style.display = 'block';
  setTimeout(() => {
    btnTVBlock.style.opacity = 1;
    getSetAllCir.disabled = false;
    getSetTVBlock.disabled = false;
    getSetPlayMode.disabled = false;
    getSetTVEyesFol.disabled = false;
    getSetTVStartPoint.disabled = false;
    failD2.style.display = 'none';
    failD3.style.display = 'none';
    failD5.style.display = 'none';
    failD6.style.display = 'none';
    failD4.style.display = 'none';
    failD7.style.display = 'none';
    pattern.style.display = 'block';
    animationSpeed.style.display = 'flex';
    btnPlayMode.style.opacity = 1;
    swtTVEyesFol.style.opacity = 1;
    btnTVStartPoint.style.opacity = 1;
    swtAllCir.style.opacity = 1;
    for (let i = help.length - 1; i > help.length - 9; i--) {
      help[i].style.display = 'block';
    }
  }, 500);
  countDown.style.display = 'flex';
  countDownText.style.fontSize = '3.333rem';
  setTimeout(() => {
    countDown.style.backgroundColor = '#000';
  }, 100);
  setTimeout(() => {
    swtJump.style.opacity = 1;
    danceBg.style.opacity = 0;
    aerTuReTopSon.style.opacity = 0;
    getSetJump.disabled = false;
    cube.style.display = 'flex';
    leftSlide.style.display = 'block';
    failD1.style.display = 'none';
    expressionFace.style.display = 'none'; //隐藏表情框
    aerTuReTopSon.style.background = 'rgb(20, 20, 20)';
    body.style.background = 'rgb(40, 40, 40)'; //body背景恢复默认
    TV.style.bottom = '';
    cube.style.bottom = '';
    TV.style.animation = ''; //关闭动画
    cube.style.animation = ''; //关闭动画
    cube.style.transform = ''; //恢复默认形态
    cube.style.transformOrigin = ''; //恢复默认动画位置
    fiveLiLSon.style.animation = ''; //关闭动画
    fiveLiRSon.style.animation = ''; //关闭动画
    aerTuReTopSon.style.boxShadow = '';
    aerTuReTopSon.style.animation = '';
    cube.style.alignItems = 'center';
    fiveLiLSon.style.height = '.967rem';
    fiveLiRSon.style.height = '.967rem';
    fiveLiLSon.style.backgroundColor = '#000';
    fiveLiRSon.style.backgroundColor = '#000';
    home();
    TVFace('5');
    offHideBg(); //关闭空间隐藏
    onTVEyesFol();
    offSwtXRotate(); //允许X轴旋转
    offSwtYRotate(); //允许Y轴旋转
    backStartPoint(); //还原初始位置
    subtitle('欢迎回来！主人还可以点击[dance模式跳动速度]方形的那个倍速试试哦');
    offSwtAndSon(swtJump, swtJumpSon, getSetJump); //关闭后开关样式
    setTimeout(() => {
      onLeftSlideBtn();
      onRightSlideBtn();
    }, 750);
    setTimeout(() => {
      countDown.style.backgroundColor = '';
      setTimeout(() => {
        countDown.style.display = 'none';
      }, 500);
    }, 500);
  }, 1000);
  setTimeout(() => {
    if (cube.style.display == 'none') {
      TVFocus = false;
      subtitle(
        '人家好像消失了，主人点击右边“修复小电视消失的bug”的按钮修复一下吧！'
      );
    }
  }, 10000);
  for (let i = 0; i < aerTuReTopSonP.length; i++) {
    aerTuReTopSonP[i].style.animation = '';
  }
  for (let i = 0; i < TVSide.length; i++) {
    TVSide[i].style.borderColor = '#000';
    TVSide[i].style.backgroundColor = ' rgba(255, 255, 255, 0.25)';
    TVSide[i].style.getAdTIon = '0.5s';
  }
  for (let i = 0; i < danceTimerOut.length; i++) {
    clearTimeout(danceTimerOut[i]);
  }
  for (let i = 0; i < danceInterval.length; i++) {
    clearInterval(danceInterval[i]);
  }
}
