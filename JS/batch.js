/*
 * @Author: 冷弋白
 * @LastEditTime: 2021-02-03 02:02:07
 * /

/********** 获取所有输入框并设置行为 **********/
function TVSomeTF() {
    TVOnceBlurSay = true;
    TVWalkUpFlag = false;
    TVBlurMove = true;
    TVFocus = true;
    TVMove = false;
}
var inputRadio = document.querySelectorAll(".radios");
for (let i = 0; i < inputText.length; i++) {
    if (inputText[i].type == "checkbox") {
        inputText[i].addEventListener("change", function () {
            TVSomeTF();
            TVFace(5);
        });
    }
}
for (let i = 0; i < inputRadio.length; i++) {
    inputRadio[i].addEventListener("mouseup", function () {
        TVSomeTF();
        TVFace(5);
    });
}

//循环设置弹窗及开关样式
for (let i = 0; i < getSetArr.length; i++) {
    getSetArr[i].addEventListener("change", function () {
        TVSomeTF();
        if (this.checked) {
            TVFace(5);
            display(onDisArr[i]);
            onSwtAndSon(swtArr[i], swtSonArr[i], getSetArr[i]); //开关样式
        } else {
            TVFace(2);
            display(offDisArr[i]);
            offSwtAndSon(swtArr[i], swtSonArr[i], getSetArr[i]); //开关样式
        }
    });
}

//帮助按钮
for (let i = 0; i < help.length; i++) {
    help[i].addEventListener("mouseup", function () {
        TVSomeTF();
        TVFace(9, 9);
        tip(helpArr[i]);
        head.addEventListener("dblclick", fn);

        function fn() {
            subtitle("主人了解了" + TVSayHelpArr[i] + "，也别忘了其他的问号提示哦！");
            head.removeEventListener("dblclick", fn);
            assHidden();
        }
    });
}

//进入小电视
function intoTV() {
    getSetSize.value = "1000";
    TV.style.zoom = "1000%";
    TV.style.transform = "rotateY(180deg)";
}