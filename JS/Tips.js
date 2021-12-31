/*
 * @Author: 冷弋白
 * @LastEditTime: 2021-03-12 22:54:46
 */
var NGNum = 0; //新手引导递增判断
//显示对话框函数，只适用于如新手引导连续调用
function Tip(str) {
    headPortrait.style.animation = '';
    assistant.style.opacity = '0';
    setTimeout(() => {
        setTimeout(() => {
            Tips.innerHTML = str;
            assistant.style.display = 'flex';
            setTimeout(() => {
                headPortrait.style.animation =
                    'headImgUp .75s ease-out forwards';
                assistant.style.opacity = '1';
            }, 50);
        }, 50);
    }, 250);
}
//用于删除对话框的函数，但需要手动添加清除双击事件在旁边
//head.removeEventListener('dblclick', fn);
function assHidden() {
    assistant.style.opacity = '0';
    setTimeout(() => {
        assistant.style.display = 'none';
    }, 500);
}
// 只提示一句话且提示一次可调用，集成前两项的基础上，增加了双击后删除双击事件
function tipsNum(i, str) {
    if (tipsArr[i] == 10) {
        Tip(str);
    }
    head.addEventListener('dblclick', fn);

    function fn() {
        if (tipsArr[i] == 10) {
            assHidden();
        }
        tipsArr[i]++;
    }
}
//双击头像即可删除自己的函数（通用），在Tip的基础上支持双击头像删除
function tip(str) {
    Tip(str);
    head.addEventListener('dblclick', fn);

    function fn() {
        head.removeEventListener('dblclick', fn);
        assHidden();
    }
}

function noviceGuide() {
    var timer1;
    //开始问候
    var NGNum = 5;
    if (NGNum == 5) {
        function getChromeVersion() {
            var arr = navigator.userAgent.split(' ');
            var chromeVersion = '';
            for (var i = 0; i < arr.length; i++) {
                if (/chrome/i.test(arr[i])) chromeVersion = arr[i];
            }
            if (chromeVersion) {
                return Number(chromeVersion.split('/')[1].split('.')[0]);
            } else {
                return false;
            }
        }
        if (getChromeVersion()) {
            var version = getChromeVersion();
            if (version < 80) {
                //别改
                Tip(
                    '您的浏览器内核版本为' +
                        version +
                        '，未达到最低使用版本80，请您下载<a href="https://www.google.cn/intl/zh-CN/chrome/" style="color:rgb(0, 123, 255);" target="_blank"><img src="IMG/chrome.png" style="width: .233rem;height: .233rem;vertical-align: middle;">谷歌浏览器Chrome</a>或系统自带的新版<a href="https://www.microsoft.com/zh-cn/edge" style="color:rgb(0, 123, 255);" target="_blank"><img src="IMG/Edge.png" style="width: .233rem;height: .233rem;vertical-align: middle;">Microsoft Edge</a>'
                );
                skip.style.display = 'none';
                assistant.style.display = 'none';
            } else {
                Tip(
                    '您的浏览器内核版本为' +
                        version +
                        '，达到了最低使用版本80！'
                );
            }
        }
        //不跳过
        noSkip.addEventListener('mouseup', function () {
            MoveHere();
            Tip('「 初次见面，试试双击上面发光的圆圈吧! 」');
            setTimeout(() => {
                skip.style.opacity = '0';
                skip.style.display = 'none';
                assistant.style.display = 'none';
            }, 250);
        });
        //删除片头问候事件
        skipStart.addEventListener('mouseup', function () {
            home();
            offSwtDisImg();
            offSwtBgAutoRot();
            offSwtBloAutoRot();
            adDefault();
            NGNum = 99;
            TVSon.style.display = 'flex';
            assistant.style.opacity = '0';
            skip.style.opacity = '0';
            setTimeout(() => {
                skip.style.display = 'none';
                assistant.style.display = 'none';
                setTimeout(() => {
                    assistant.style.backdropFilter = 'blur(20px)';
                    setHBTFoCo();
                    leftSlide.style.display = 'block';
                    rightSlide.style.display = 'block';
                    setTimeout(() => {
                        leftSlide.style.opacity = 1;
                        rightSlide.style.opacity = 1;
                        onTVEyesFol();
                        onLeftSlideBtn();
                        onRightSlideBtn();
                    }, 500);
                }, 250);
            }, 250);
        });
    }
    head.addEventListener('dblclick', fn);

    function fn() {
        //双击后隐藏跳过选项
        setTimeout(() => {
            skip.style.display = 'none';
        }, 350);
        //开始判断
        if (NGNum == 5) {
            Tip('「 双击发光的圆圈可关闭当前对话或进入下一段 」');
        }
        if (NGNum == 6) {
            Tip('「 很好，看来您已经完全掌握了，那我就先做个自我介绍吧! 」');
        }
        if (NGNum == 7) {
            tip('「 您好，我叫冷弋白，是这个网页的作者 」');
            setTimeout(() => {
                setHBTFoCo();
            }, 400);
        }
        if (NGNum == 8) {
            for (let i = 0; i < help.length; i++) {
                help[i].style.opacity = 0;
            }
            change.style.backgroundColor = 'rgba(0,0,0,.75)';
            dance.style.backgroundColor = 'rgba(0,0,0,.75)';
            setTimeout(() => {
                onLeftSlideBtn();
                onRightSlideBtn();
                setTimeout(() => {
                    for (let i = 0; i < help.length; i++) {
                        help[i].style.transition = 'all 1s ' + i / 10 + 's';
                        help[i].style.opacity = 1;
                        setTimeout(() => {
                            help[i].style.transition = 'all 0s';
                            help[i].style.backgroundColor =
                                'rgba(255, 255, 255, .75)';
                            help[i].style.textShadow =
                                '0 0.5px 1px rgba(0, 0, 0, 0.5)';
                            help[i].style.borderRadius = '50%';
                            help[i].style.boxShadow = '0 0 10px 2px #fff';
                            setTimeout(() => {
                                help[i].style.transition = '';
                                help[i].style.backgroundColor = '';
                                help[i].style.textShadow = '';
                                help[i].style.borderRadius = '';
                                help[i].style.boxShadow = '';
                                setTimeout(() => {
                                    change.style.backgroundColor = '';
                                    dance.style.backgroundColor = '';
                                    tip(
                                        '「 为了更好地体验，我在所有设置后面添加了问号提示，使用之前可以点击 」'
                                    );
                                }, 1000);
                            }, 1000);
                        }, 2500);
                    }
                }, 1000);
            }, 2000);
        }
        if (NGNum == 9) {
            change.style.backgroundColor = 'rgba(0,0,0,.75)';
            offRightSlideBtn();
            timer1 = setInterval(() => {
                for (let i = 0; i < inputLight.length; i++) {
                    inputLight[i].style.backgroundColor = 'red';
                    setTimeout(() => {
                        inputLight[i].style.backgroundColor = '';
                    }, 250);
                }
            }, 500);
            setTimeout(() => {
                clearInterval(timer1);
                change.style.backgroundColor = '';
                Tip('「 点击设置栏中的方形白块，输入框会自动弹出供您输入 」');
            }, 3000);
        }
        if (NGNum == 10) {
            Tip(
                '「 另外，之所以设置成双击，是因为设置成单击，可能会不小心双击，导致错过一次对话 」'
            );
            assistant.style.backgroundColor = 'rgba(0, 0, 0, .5)';
            offLeftSlideBtn();
            for (let i = 0; i < help.length; i++) {
                help[i].style.opacity = 1;
            }
        }
        if (NGNum == 11) {
            Tip('「 现在您可以愉快地访问这个网页了，一会儿见咯! 」');
        }
        if (NGNum == 12) {
            TVSon.style.display = 'flex';
            assistant.style.backdropFilter = 'blur(20px)';
            offSwtBgAutoRot();
            offSwtBloAutoRot();
            offSwtDisImg();
            assHidden();
            home();
            setTimeout(() => {
                leftSlide.style.display = 'block';
                rightSlide.style.display = 'block';
                setTimeout(() => {
                    leftSlide.style.opacity = 1;
                    rightSlide.style.opacity = 1;
                    onLeftSlideBtn();
                    onRightSlideBtn();
                    onTVEyesFol();
                    onHuYan();
                    display('已为您自动开启护眼模式');
                }, 250);
            }, 500);
        }
        NGNum++; //每次双击+1
    }
}
