//闭包
(function () {
    let lb = document.querySelector('.lb')
    let pre = document.querySelector('.lb .pre')//上
    let nex = document.querySelector('.lb .nex')//下
    let pointer = document.querySelector('.main .pointer');
    let pointerA = document.querySelectorAll('.pointer a');//3.五个a标签的轮播原点
    //4.给五个轮播小圆点添加索引index
    for (var i = 0; i < pointerA.length; i++) {
        pointerA[i].index = i;
    }
    lb.addEventListener('click', function (event) {
        // 1.点击nex按钮轮播图切换为下一张
        // alert('s')
        if (event.target === nex) {
            yh(lbindex + 1)
        }
        //2.点击pre按钮切换为上一张
        else if (event.target === pre) {
            yh(lbindex - 1);
        } else if (event.target.parentNode === pointer) {
            // alert(event.target.index)//此时点击每个小圆点都会弹出他的索引
            yh(event.target.index)
        }
    })
    let lbli = document.getElementsByClassName('lbli')//获取到5个li
    // alert(lbli.length)  //5

    let lbindex = 0;
    //需要一个参数index表示要切换到的图片，此函数做的是切换到我们想切换到哪张图片
    //lbindex表示我们当前这张，index表示我们想切换到的图片
    function yh(index) {
        //检查index是否合法（越界）

        if (index < 0) {
            index = lbli.length - 1
        } else if (index > lbli.length - 1) {
            index = 0;

        }
        //将之前显示的图片的zIndex取消
        lbli[lbindex].style.zIndex = ''
        //将之前选中的导航点取消
        pointerA[lbindex].className = ''
        //将之前图片的不透明度设置为1
        lbli[lbindex].style.opacity = 0

        // lbindex++;
        // if (lbindex === lbli.length) {
        //     lbindex = 0;
        // }

        //设置当前图片的zIndex为1
        lbli[index].style.zIndex = 1
        //设置当前的导航点显示
        pointerA[index].classList.add('active')
        //设置当前图片不透明度为1
        lbli[index].style.opacity = 1

        //将lbIndex修改为index
        lbindex = index;



    }

    // 定义一个变量，来记录播放的状态
    let autoPlay = true;

    //设置轮播图每隔3秒自动切换
    setTimeout(function auto() {
        if (autoPlay) {
            yh(lbindex + 1)
        }

        setTimeout(auto, 3000);
    }, 3000);
    //为lb绑定鼠标移入和鼠标移出事件
    lb.addEventListener('mouseenter', function () {
        autoPlay = false;
    });

    lb.addEventListener('mouseleave', function () {
        autoPlay = true;
    });
})()