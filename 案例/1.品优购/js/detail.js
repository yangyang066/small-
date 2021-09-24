/*  放大镜开始*/
let fdj = document.querySelector('.fdj')
let jjj = document.getElementsByClassName('jjj')[0];
let xq_goodlltop = document.querySelector('.xq_goodlltop')

let big = document.querySelector('.big')
xq_goodlltop.addEventListener('mouseover', function () {
    big.style.display = 'block';
    jjj.style.display = 'block';
})
xq_goodlltop.addEventListener('mouseout', function () {
    big.style.display = 'none';
    jjj.style.display = 'none';
})
xq_goodlltop.addEventListener('mousemove', function (event) {

    let x = event.pageX - this.offsetLeft;
    let y = event.pageY - this.offsetTop;
    /* 减去盒子高度的一半 -150 */
    /* 把 jjj的距离父亲的偏移量提取出来  */
    let jjjLeft = x - jjj.offsetWidth / 2;
    let jjjTop = y - jjj.offsetHeight / 2;

    /* jjj可偏移的最大 left 和 top */
    let MaxLeft = xq_goodlltop.offsetWidth - jjj.offsetWidth
    let MaxTop = xq_goodlltop.offsetHeight - jjj.offsetHeight
    //如果jjjLeft <0 ;就让他停在0的位置
    if (jjjLeft <= 0) {
        jjjLeft = 0;
    } else if (jjjLeft >= MaxLeft) {
        jjjLeft = MaxLeft
    }
    // 如果jjjTop<0；让他停在0的位置
    if (jjjTop <= 0) {
        jjjTop = 0;
    } else if (jjjTop >= MaxTop) {
        jjjTop = MaxTop
    }


    jjj.style.left = jjjLeft + 'px'
    jjj.style.top = jjjTop + 'px';

    let bigImg = document.querySelector('.bigImg')
    /* 图二可移动最大 注意不要减反*/
    let bigImgMax = bigImg.offsetWidth - big.offsetWidth;
    /* bigImg移动距离=如下 */
    //大图移动距离 = 遮1左偏移量 * 大图可移动最大 / 遮1可移动最大

    /* 遮1左偏移量： jjjLeft*/
    /* 大图可移动最大：bigImgMax*/
    /* 遮1可移动最大: MaxLeft*/
    let bigImgLeft = jjjLeft * bigImgMax / MaxLeft
    let bigImgTop = jjjTop * bigImgMax / MaxTop
    bigImg.style.left = - bigImgLeft + 'px'
    bigImg.style.top = - bigImgTop + 'px'
    /* 加负号是因为加了相对定位，应向负移动 */
})


/* 放大镜结束 */



/* 点击按钮图片切换到上一张下一张开始*/
let nex = document.querySelector('.nex')
let pre = document.querySelector('.pre')
let qh = document.querySelector('.xq_goodllbot')
let ul = qh.querySelector('ul')
let libaba = document.querySelector('.xq_goodllbot')
let liImg = libaba.getElementsByTagName('img')

qh.addEventListener('click', function (event) {
    if (event.target === nex) {
        fn(Imgindex + 1)

        /*  
        1.  li的默认右侧空白为6px
        2.  向左移动一张图片的距离 = 一张图片的宽度+6px间隔 = 62px
        3.  点下一个按钮，在 已知的5张图片+4个间隔 情况下 再向右滑两张图片（62*2）
                        4*li的offsetWidth+3*6   +  124
                           312                  +   124 = 436          
         */
        if (liImg[5].className == 'li_red') {
            ul.style.transform = 'translateX(-248px)'
        }

    } else if (event.target === pre) {
        fn(Imgindex - 1)
        if (liImg[3].className == 'li_red') {
            ul.style.transform = 'translateX(0)'
        }
    }


})

/* 设置一个Imgindex，表示我们想切换到的图片索引 */
let Imgindex = 0;
function fn(index) {
    liImg[Imgindex].className = ''


    /* 检查索引是否合法 */
    if (index >= liImg.length) {
        liImg[8].classList.add('li_red')
        return false

    } else if (index < 0) {
        liImg[0].classList.add('li_red')
        return false
    }
    console.log(liImg[index].src)
    fdj.src = liImg[index].src
    liImg[index].classList.add('li_red')
    Imgindex = index
}
/* 点击按钮图片切换到上一张下一张结束*/


/* 颜色选择，版本选择 ，购买方式选择*/
let d = document.querySelector('.d')
let dA = d.querySelectorAll('a')
// console.log(dA.length)
/* for (var i = 0; i < dA.length; i++) {
    dA[i].onclick = function () {
        dA[i].className = 'a_redd'
    }
} */












/* 右侧商品介绍栏切换 */
let flooerrr1 = document.getElementsByClassName('flooer_rr1')[0]
let flooertab = flooerrr1.getElementsByTagName('li')
let flooertab2 = document.getElementsByClassName('flooer_rrtab')
for (let i = 0; i < flooertab.length; i++) {
    flooertab[i].onclick = function () {
        /*1.上方tab栏切换 */
        for (let j = 0; j < flooertab.length; j++) {
            flooertab[j].classList.remove('rrnav_red')
        }
        this.classList.add('rrnav_red')
        /*2.下方介绍栏切换 */
        for (let q = 0; q < flooertab2.length; q++) {
            flooertab2[q].style.display = 'none'
        }
        flooertab2[i].style.display = 'block'
    }
}
/* 左侧tab切换 */
let flooer_lltop = document.getElementsByClassName('flooer_lltop')[0]
let flooerll_li = flooer_lltop.getElementsByTagName('li')
let flooer_llbot = document.getElementsByClassName('flooer_llbot')
for (let i = 0; i < flooerll_li.length; i++) {
    flooerll_li[i].addEventListener('click', function () {
        for (let j = 0; j < flooerll_li.length; j++) {
            flooerll_li[j].classList.remove('rrnav_red')
            //设置其他的为none
            for (let g = 0; g < flooer_llbot.length; g++) {
                flooer_llbot[g].style.display = 'none'
            }
        }
        flooerll_li[i].classList.add('rrnav_red')
        flooer_llbot[i].style.display = 'block'
    })
}
