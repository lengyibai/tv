/*
 * @Author: 冷弋白
 * @LastEditTime: 2021-02-03 14:21:02
 */

/********** 主要 **********/
var body = document.body;
var OSA = document.querySelector('.OSA'); //开屏动画
var room = document.querySelector('.room'); //空间
var walls = room.querySelectorAll('.wall'); //每面空间墙
var cube = document.querySelector('.cube'); //小电视的大盒子
var TV = document.querySelector('.cube ul'); //大盒子内的小电视
var TVSide = document.querySelectorAll('.cube ul li'); //小电视的每个面
var TVSon = document.querySelector('.cubeSon ul'); //大盒子内的小电视
var TVSideSon = document.querySelectorAll('.cubeSon ul li'); //小电视的每个面
var fiveLiLSon = document.querySelector('.left'); //左边天线
var fiveLiRSon = document.querySelector('.right'); //右边天线
var change = document.querySelector('.change'); //左设置栏
var dance = document.querySelector('.dance'); //右设置栏
var TEXT = document.querySelector('.TEXT'); //字幕解说
var CHS = TEXT.querySelector('h2'); //中文字幕
var headPortrait = document.querySelector('.headPortrait'); //新手引导里面的头像
var help = document.querySelectorAll('.help');
var skipAnimation = document.querySelector('.skipAnimation'); //开屏跳过按钮
var skipAnimationAll = document.querySelector('.skipAnimationAll'); //开屏跳过所有按钮
var leftSlide = document.querySelector('.leftSlide'); //左设置栏收起按钮
var rightSlide = document.querySelector('.rightSlide'); //右设置栏收起按钮
var setBreath = document.querySelectorAll('.setBreath'); //设置文字闪烁呼吸
var inputText = document.querySelectorAll('input'); //获取所有input
var inputLight = document.querySelectorAll('.inputLight'); //获取所有input输入框前面的按钮
var onSwtBgColor = 'rgba(255, 255, 255, .75)';
var offSwtBgColor = 'rgba(255, 255, 255, .25)';
// 表情
var expDance = ['˙ ▽ ˙', '^▽^', '≧▽≦', '♡▽♡', '>∀<'];
var normalFace = document.querySelector('.expression img'); //表情
var expressionFace = document.querySelector('.expression span');

/********** 对话页面 **********/
var assistant = document.querySelector('.assistant'); //新手引导页面
var LYB = assistant.querySelector('h1'); //引导框顶部来自
var Tips = document.querySelector('.Tips'); //引导的文字对话
var head = document.querySelector('.headPortrait'); //引导框头像
var skip = document.querySelector('.skip'); //访问方式盒子
var noSkip = document.querySelector('.noSkip'); //第一次访问
var skipStart = document.querySelector('.skipStart'); //跳过新手引导

/********** 设置变量 **********/
var getAdTIon = document.querySelector('.adTIon input'); //旋转时间输入框
var getSetSize = document.querySelector('.size input'); //体积大小输入框
var getSetSensitive = document.querySelector('.sensitivity input'); //灵敏度输入框
var getSetHideBgColor = document.querySelector('.HideBgColor input'); //隐藏空间输
var HideBgColor = document.querySelector('.HideBgColor'); //虚空颜色盒子框
var bgTime = document.querySelector('.bgTime'); //空间自动旋转弹出的盒子
var setBgTime = bgTime.querySelector('input'); //设置空间转速输入框
var bloTime = document.querySelector('.bloTime'); //小电视自动旋转弹出的盒子
var setBloTime = bloTime.querySelector('input'); //设置小电视转速输入框
var wallImg = document.querySelectorAll('.wallImg'); //六张全景图片
var xLimit = document.querySelector('.xLimit'); //解除Y轴90°限制
var huYanCubeUl = document.querySelector('.huYanCubeUl'); //弹出的护眼强度
var getSetHuYanCubeUl = document.querySelector('.huYanCubeUl input'); //弹出的护眼强度输入框
var brightness = document.querySelector('.brightness'); //弹出的亮度滤镜
var contrast = document.querySelector('.contrast'); //弹出的对比度滤镜
var saturate = document.querySelector('.saturate'); //弹出的饱和度滤镜
var hueRotate = document.querySelector('.hueRotate'); //弹出的色调滤镜
var fail1 = document.querySelectorAll('.fail1'); //自动旋转禁止点击提示
var fail2 = document.querySelectorAll('.fail2'); //上帝视角禁止点击提示
var fail3 = document.querySelectorAll('.fail3'); //上帝视角失效提示

/********** 所有开关样式 **********/
//隐藏背景
var getSetHideBg = document.querySelector('.hideBg input');
var swtHideBg = document.querySelector('.swtHideBg');
var swtHideBgSon = swtHideBg.children[0];
//六面圆形
var getSetCircular = document.querySelector('.circular input');
var swtCircular = document.querySelector('.swtCircular');
var swtCircularSon = swtCircular.children[0];
//禁止X轴旋转
var getSetXRotate = document.querySelector('.xRotate input');
var swtXRotate = document.querySelector('.swtXRotate');
var swtXRotateSon = swtXRotate.children[0];
//禁止Y轴旋转
var getSetYRotate = document.querySelector('.yRotate input');
var swtYRotate = document.querySelector('.swtYRotate');
var swtYRotateSon = swtYRotate.children[0];
//空间是否自动旋转
var getSetBgAutoRot = document.querySelector('.bgAutoRot input');
var swtBgAutoRot = document.querySelector('.swtBgAutoRot');
var swtBgAutoRotSon = swtBgAutoRot.children[0];
//小电视是否自动旋转
var getSetBloAutoRot = document.querySelector('.bloAutoRot input');
var swtBloAutoRot = document.querySelector('.swtBloAutoRot');
var swtBloAutoRotSon = swtBloAutoRot.children[0];
//显示全景
var getSetDisImg = document.querySelector('.disImg input');
var swtDisImg = document.querySelector('.swtDisImg');
var swtDisImgSon = swtDisImg.children[0];
//禁止空间跟随鼠标
var getSetBgFlRot = document.querySelector('.bgFlRot input');
var swtBgFlRot = document.querySelector('.swtBgFlRot');
var swtBgFlRotSon = swtBgFlRot.children[0];
//禁止小电视跟随鼠标
var getSetCubeFlRot = document.querySelector('.cubeFlRot input');
var swtCubeFlRot = document.querySelector('.swtCubeFlRot');
var swtCubeFlRotSon = swtCubeFlRot.children[0];
//解除X轴限制
var getSetXLimit = document.querySelector('.xLimit input');
var swtXLimit = document.querySelector('.swtXLimit');
var swtXLimitSon = swtXLimit.children[0];
//上帝视角
var getSetGod = document.querySelector('.God input');
var swtGod = document.querySelector('.swtGod');
var swtGodSon = swtGod.children[0];
//护眼模式
var getSetHuYan = document.querySelector('.huYan input');
var swtHuYan = document.querySelector('.swtHuYan');
var swtHuYanSon = swtHuYan.children[0];
//dance模式
var getSetJump = document.querySelector('.jump input');
var swtJump = document.querySelector('.swtJump');
var swtJumpSon = swtJump.children[0];
//圆形与正方形交替
var getSetAllCir = document.querySelector('.allCir input');
var swtAllCir = document.querySelector('.swtAllCir');
var swtAllCirSon = swtAllCir.children[0];
//滤镜
var getSetFilter = document.querySelector('.filter input');
var swtFilter = document.querySelector('.swtFilter');
var swtFilterSon = swtFilter.children[0];
//小电视目光跟随鼠标
var getSetTVEyesFol = document.querySelector('.TVEyesFol input');
var swtTVEyesFol = document.querySelector('.swtTVEyesFol');
var swtTVEyesFolSon = swtTVEyesFol.children[0];

/********** 所有数组 **********/
//所有开关input
var getSetArr = [
  getSetHideBg, //隐藏背景
  getSetCircular, //圆边
  getSetXRotate, //禁止X轴旋转
  getSetYRotate, //禁止Y轴旋转
  getSetBgAutoRot, //空间自动旋转
  getSetBloAutoRot, //小电视自动旋转
  getSetDisImg, //360°全景图
  getSetXLimit, //锁定90°
  getSetBgFlRot, //禁止空间跟随鼠标旋转
  getSetCubeFlRot, //禁止小电视跟随鼠标旋转
  getSetGod, //上帝视角
  getSetHuYan, //护眼模式
  getSetFilter, //滤镜
  getSetJump, //dance模式
  getSetAllCir, //圆形与正方形交替
  getSetTVEyesFol, //小电视目光跟随鼠标
];
//所有开关
var swtArr = [
  swtHideBg, //1
  swtCircular, //2
  swtXRotate, //3
  swtYRotate, //4
  swtBgAutoRot, //5
  swtBloAutoRot, //6
  swtDisImg, //7
  swtXLimit, //8
  swtBgFlRot, //9
  swtCubeFlRot, //10
  swtGod, //11
  swtHuYan, //12
  swtFilter, //13
  swtJump, //14
  swtAllCir, //15
  swtTVEyesFol, //16
];
//所有开关的拉杆
var swtSonArr = [
  swtHideBgSon, //1
  swtCircularSon, //2
  swtXRotateSon, //3
  swtYRotateSon, //4
  swtBgAutoRotSon, //5
  swtBloAutoRotSon, //6
  swtDisImgSon, //7
  swtXLimitSon, //8
  swtBgFlRotSon, //9
  swtCubeFlRotSon, //10
  swtGodSon, //11
  swtHuYanSon, //12
  swtFilterSon, //13
  swtJumpSon, //14
  swtAllCirSon, //15
  swtTVEyesFolSon, //16
];
//开启按钮
var onDisArr = [
  '您已开启空间隐藏',
  '您已开启矩形转圆形',
  '您已禁止X轴旋转',
  '您已禁止Y轴旋转',
  '您已开启空间自动旋转，小电视将同步旋转',
  '您已开启小电视自动旋转',
  '您已开启360°全景图',
  '您已禁止空间跟随鼠标旋转',
  '您已禁止小电视跟随鼠标旋转',
  '您已锁定X轴的旋转范围',
  '您已开启上帝视角',
  '您已开启护眼模式',
  '您开启了滤镜功能，已为您关闭护眼模式',
  '您已开启dance模式',
  '您已开启圆形与正方形交替',
  '您已开启小电视目光跟随鼠标',
];
//关闭按钮
var offDisArr = [
  '您已关闭空间隐藏',
  '您已关闭圆边',
  '您已允许X轴旋转',
  '您已允许Y轴旋转',
  '您已关闭空间自动旋转，小电视同步关闭',
  '您已关闭小电视自动旋转',
  '您已关闭360°全景图',
  '您已允许空间跟随鼠标旋转',
  '您已允许小电视跟随鼠标旋转',
  '您已解除X轴的旋转范围',
  '您已关闭上帝视角',
  '您已关闭护眼模式',
  '您关闭了滤镜功能',
  '您已关闭dance模式',
  '您已关闭圆形与正方形交替',
  '您已关闭小电视目光跟随鼠标',
];

/********** 帮助按钮 **********/
var helpArr = [
  '「 旋转时间：旋转时间设为n秒，您就需要等待n秒它才会停下来，即便是只旋转一丁点，也需要等待相应的时间，推荐设为3-5秒，旋转时间不为空时，小电视将不会盯着鼠标偏移，并自动与小电视的复制体重合 」',
  '「 体积大小：设置1000以上可进入小电视内部(<a href="javascript:;" class="intoTV" onmouseup="intoTV()" style="color: rgb(0, 123, 255)">点击此处直接进入小电视</a>)，配合360°全景使用更佳。您也可以试试开启上帝视角再将它的体积调大一点，但请不要大于600 」',
  '「 灵敏度：输入的值低于1后，就开始变得很灵敏，如果太灵敏而觉得晕，您可以试试开启"禁止空间跟随鼠标"或"隐藏空间" 」',
  '「 隐藏空间：隐藏后可以设置虚空背景色，不过纯色并没有什么好看的，觉得太花可以使用此选项，一般设置为暗色，觉得太亮可以试试下面的护眼模式 」',
  '「 矩形转圆形：变圆只是六面变圆，它始终是个空心 」',
  '「 禁用X轴旋转：开启后小电视将不会向下旋转，只会旋转Y轴，也就是左右旋转 」',
  '「 禁用Y轴旋转：开启后小电视将不会左右旋转，只会旋转X轴，也就是上下旋转 」',
  '「 空间自动旋转：开启后小电视也会自动开启自动旋转，与空间同步，还可以调节两者速度，此时鼠标无法控制空间及小电视旋转。另外，关闭空间自动旋转后小电视也会关闭 」',
  '「 小电视自动旋转：一般用于开启空间自动旋转后再关闭此项，关闭后小电视可以被鼠标控制旋转 」',
  '「 360°全景图：开启后，为了更好的体验，空间和小电视上下旋转范围将锁定为90度，您可以关闭"全景Y轴锁定±90°"来即可解除锁定 」',
  '「 全景Y轴锁定±90°：开启后，X轴（纵向）只能旋转±405度，也就是旋转360度后加45度的位置，因为我设置了一个判断：当旋转超过±90度时，鼠标向左滑动，正常来讲小电视会向右旋转，而我让它始终跟随鼠标滑动的方向旋转，但这个只在90度~270度的位置有效，在超过±450度的位置就没用了，所以我限制在了±405这个完美角度，如果是想通过灵敏度让小电视疯狂纵向旋转，推荐关闭！ 」',
  '「 禁止空间跟随鼠标：在关闭的情况下，空间和小电视将同时被鼠标控制旋转，开启后，空间将固定在开启前的位置 」',
  '「 禁止小电视跟随鼠标：最初增加这个设置只是为了将空间旋转到自己喜欢的颜色的位置，再配合禁止空间跟随鼠标来固定位置，但现在感觉并没有什么用 」',
  '「 上帝视角：开启后空间可以控制旋转的，但小电视却不能，因为小电视在空间内，空间外鼠标无法触碰到小电视，所以就无法控制小电视，也无法唤醒小电视 」',
  '「 护眼模式：左右两边的设置不在护眼范围内，开启后会自动关闭滤镜 」',
  '「 dance模式：网页最大的亮点，开启后，为了更好的视觉效果，网页将会全屏，左设置栏将无法使用，右设置栏部分选项被禁用，右上角按钮被隐藏，3秒倒计时结束后显示，部分选项无法使用，帮助按钮隐藏，完全进入后会有歌曲倒计时，倒计时结束后会自动退出dance，您也可以选择右上角手动退出，在倒计时结束前请勿缩小浏览器窗口，否则小电视的天线将会偏移 」',
  '「 修复小电视消失的bug：由于小电视在切换动作时会消失一瞬间，当手动退出dance模式可能正好进入了那一瞬间，导致小电视消失，点击按钮可显示 」',
  '「 圆形与正方形交替：开启后光圈将不会有圆形与正方形交替的动画，由于圆形与正方形交替瞬间小电视也在切换动作，交替瞬间将会产生卡顿，所以关闭后小电视切换动作就比关闭后要流畅，但就少了一点好看，因此我将这个效果在0.5x的时候自动开启 」',
  "「 切换播放模式：如果您正在使用蓝牙设备，请点击按钮切换为蓝牙模式，否则会有0.25秒的延迟带来不好的体验 」<li style='color:rgb(220, 53, 69);'>注意：当在网页断开或连接蓝牙后，需刷新网页再切换，否则可能会导致扬声器与蓝牙延迟混乱</li>",
  "「 动画速度：调节小电视跳跃的速度以及小电视背后彩色光圈绽开的频率 」<br><span>0.5x音乐：</span><a href='https://y.music.163.com/m/song/1812174608/?userid=440837401&app_version=8.0.30' style='color:rgb(23, 162, 184);' target='_blank'>《执迷不悟》</a><br><span>1.0x音乐：</span><a href='https://y.music.163.com/m/song/1812174608/?userid=440837401&app_version=8.0.30' style='color:rgb(40, 167, 69);' target='_blank'>《迷失幻境》</a><br>点击可访问",
  '「 滤镜：和修图软件的滤镜一样，开启后，会自动关闭护眼，可以试试在开启dance模式后使用 」',
  '「 小电视目光跟随鼠标：关闭后，滑动起来就没那么费力，但会失去一点趣味，更多关于小电视的资料还得您亲自找出隐藏入口，小电视也会暗中提醒您！ 」',
  "「 重置小电视及空间位置：小电视重叠着一个小电视的复制体，它不会像小电视那样盯着鼠标，它是负责记录小电视被您按下鼠标后滑动的位置，每次一松手小电视又会转回来继续盯着您的鼠标，而复制体原地不动，当您再按下鼠标，小电视会旋转到与复制体重叠的角度，所以复制体只会受您鼠标按下的控制，除非您关闭了'小电视目光跟随'，复制体将会隐藏，详情请看'小电视目光跟随'的帮助按钮。按下时会有一秒感觉小电视的动作响应速度慢，属于正常现象，因为小电视正在与复制体重叠，1秒后恢复，因此这个选项准确来说是用于小电视的复制体回到初始位置，关闭了'小电视目光跟随'后，此选项也就针对小电视使用了 」",
];
var inputNameArr = [
  '旋转时间',
  '体积大小',
  '灵敏度',
  '空间旋转时间',
  '小电视旋转时间',
  '页面亮度',
];
var inputTVSay = [
  '主人想让人家被滑动后多久停下来呢？',
  '主人想把人家变成多大呢？',
  '主人想让人家有多灵敏呢？',
  '主人想让空间每圈转多久呢？',
  '主人想让人家每圈转多久呢？',
  '主人不要设置太高哦，不然会很难看见人家的',
];

//用于小电视对话
var TVSayHelpArr = [
  '人家的旋转时间',
  '人家的体积大小',
  '灵敏度',
  '隐藏空间',
  '人家矩形转圆形',
  '禁止X轴旋转',
  '禁止Y轴旋转',
  '空间自动旋转',
  '人家自动旋转',
  '360°全景图',
  '全景Y轴锁定±90°',
  '禁止空间跟随鼠标',
  '禁止人家跟随鼠标',
  '上帝视角',
  '护眼模式',
  'dance模式',
  '修复人家消失的bug',
  '圆形与正方形交替',
  '切换播放模式',
  '动画速度',
  '滤镜',
  '我的目光跟随主人的鼠标',
  '重置人家和空间位置',
];
