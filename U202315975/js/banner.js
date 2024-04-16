var wrap_l = document.querySelector(".wrap_l");
var next = document.querySelector(".arrow_l_right");
var prev = document.querySelector(".arrow_l_left");
var img = wrap_l.getElementsByTagName("img")
// 上面的是获取标签   获取轮播的每个块

// 设置初始值  从第几个图片开始
var index = 0;


var kuan = 1200; //  轮播的宽度 
var gao = 500; //  轮播的 高度


// 查找一共几张图片
var mun = img.length - 1;
// 设置外边左边的距离 
wrap_l.style.left = -kuan + 'px'
// 设置外边快的宽 
wrap_l.style.width = kuan*(mun+1) + 'px'
// 设置外边快的宽 给图片赋值
for (let i = 0; i < img.length; i++) {
    img[i].style.width = kuan + 'px'
}
// 点击右键的时候运行下面的函数
next.onclick = function () {
    next_pic();
}
// 点击左键的时候运行下面的函数
prev.onclick = function () {
    prev_pic();
}
// 右键函数
function next_pic() {
    // 设置初始值 加一
    index++;
    // 判断 是否已经到最后一张
    if (index > mun - 1) {
        // 到了的话就变成0
        index = 0;
    }
    // 运行函数
    showCurrentDot();
    var newLeft;
    // 设置 左边为多少px
    if (wrap_l.style.left == -mun * kuan + "px") {
        // 让左边变成宽度
        newLeft = -kuan;
    } else {
        // 否则减去宽度
        newLeft = parseInt(wrap_l.style.left) - kuan;
    }
    // 赋值
    wrap_l.style.left = newLeft + "px";
}
function prev_pic() {
    index--;
    if (index < 0) {
        index = mun - 1;
    }
    showCurrentDot();
    var newLeft;
    if (wrap_l.style.left === "0px") {
        newLeft = - (mun - 1) * kuan;
    } else {
        newLeft = parseInt(wrap_l.style.left) + kuan;
    }
    wrap_l.style.left = newLeft + "px";
}
var timer = null;
function autoPlay() {
    timer = setInterval(function () {
        next_pic();
    }, 2000);
}
autoPlay();

var container_l = document.querySelector(".container_l");
container_l.style.width = kuan + 'px'
container_l.onmouseenter = function () {
    clearInterval(timer);
}
container_l.onmouseleave = function () {
    autoPlay();
}

var dots = container_l.getElementsByTagName("span");
function showCurrentDot() {
    for (var i = 0, len = dots.length; i < len; i++) {
        dots[i].className = "";
    }
    dots[index].className = "on";
}

for (var i = 0, len = dots.length; i < len; i++) {
    (function (i) {
        dots[i].onclick = function () {
            var dis = index - i;
            if (index == mun - 1 && parseInt(wrap_l.style.left) !== -mun * kuan) {
                dis = dis - mun;
            }
            //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
            if (index == 0 && parseInt(wrap_l.style.left) !== -kuan) {
                dis = mun + dis;
            }
            wrap_l.style.left = (parseInt(wrap_l.style.left) + dis * kuan) + "px";
            index = i;
            showCurrentDot();
        }
    })(i);
}