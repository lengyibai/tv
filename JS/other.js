(function () {
  var timer;
  var arr = [];
  var num = 0;
  for (let i = 0; i < inputLight.length; i++) {
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i].type == 'text') {
        arr[num] = i;
        num++;
        if (num == 6) {
          num = num - 1;
        }
      }
    }

    inputLight[i].addEventListener('mouseup', function () {
      //输入框方块行为
      TVFocusBehavior();
      flag = true;
      TVFace(6);
      subtitle(inputTVSay[i]);
      inputText[arr[i]].focus();
      inputText[arr[i]].style.transition = '';
      inputText[arr[i]].style.width = '50px';
      inputText[arr[i]].style.opacity = 1;
      inputLight[i].style.backgroundColor = 'rgb(255, 255, 255, .85)';
      timer = setTimeout(() => {
        inputLight[i].style.transform = 'scale(0)';
      }, 400);
      inputText[arr[i]].addEventListener('blur', function () {
        TVBlurBehavior();
        clearTimeout(timer);
        inputLight[i].style.transform = 'scale(1)';
        TVWalkUpFlag = false;
        TVBlurMove = true;
        TVFocus = true;
        TVMove = false;
        inputText[arr[i]].style.transition =
          'all .75s cubic-bezier(.5,-1.5,1,1)';
        inputText[arr[i]].style.width = '0px';
        inputText[arr[i]].style.opacity = 0;
        inputLight[i].style.borderRadius = '';
        setTimeout(() => {
          inputLight[i].style.left = '15px';
          setTimeout(() => {
            inputLight[i].style.left = '0';
          }, 250);
        }, 750);
        inputLight[i].style.backgroundColor = 'rgb(255, 255, 255, .5)';
        if (inputText[arr[i]].value == '') {
          inputLight[i].style.borderRadius = '';
          TVFace(7);
          subtitle('主人输了个寂寞');
          display(inputNameArr[i] + '您选择了留空,已为您恢复默认');
          inputText[arr[i]].value = '';
          inputLight[i].innerHTML = '';
          inputText[arr[i]].style.borderRadius = '';
        } else {
          inputLight[i].style.borderRadius = '19px';
          if (isNaN(parseInt(inputText[arr[i]].value)) == false) {
            inputLight[i].innerHTML = inputText[arr[i]].value;
          }
        }
      });
    });
  }
})();

//小电视介绍
var TVIntTimer;
var introduce = document.querySelector('.introduce');
introduce.addEventListener('mouseenter', function () {
  clearTimeout(TVIntTimer);
  TVSomeTF();
  TVFace('10');
  subtitle('呀！好像被主人发现了什么！');
  TVIntTimer = setTimeout(() => {
    TVFace('5');
    subtitle('主人好像错过了刚刚的那个东西，那没事了，嘿嘿嘿');
  }, 10000);
});
introduce.addEventListener('mousedown', function () {
  clearTimeout(TVIntTimer);
  clearInterval(TVTextTimer);
  CHS.innerHTML = ''; //清空小电视的话
  TVFocusBehavior();
  RestoreDefault();
  LYB.innerHTML = '来自小电视';
  head.src = 'IMG/TV！.png';
  Tip(
    '人家说的话如果超过了15个字，将会在15/3+2秒后消失，低于15字则在/2+2秒后消失，人家与一个复制体重叠，它是记录人家被主人按下滑动后的位置，它可不会盯着主人的鼠标摇头晃脑哦！我呢，每次被主人按下并滑动就会花费一秒时间来与人家的复制体重合，主人松手后，人家又会花费一秒时间回来继续盯着主人的鼠标啦，所以主人按下鼠标滑动的时候，最好滑动一秒以上吧，不然会很奇怪的！主人感觉不适应的话可以不让人家盯着主人的鼠标看哦，对了，整个网页不会因为主人缩小浏览器窗口而导致排版凌乱，主人双击人家的头像后，人家背后的白点就会消失！'
  );
  head.addEventListener('dblclick', fn);

  function fn() {
    TVFace('5');
    subtitle('是不是还以为是什么彩蛋呢？');
    setTimeout(() => {
      setHBTFoCo();
    }, 1000);
    assHidden();
    TVBlurBehavior();
    introduce.style.display = 'none';
    head.removeEventListener('dblclick', fn);
  }
});
