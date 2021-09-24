/* 验证手机号是否符合 */
let tel = document.getElementById('tel');
let test1 = document.querySelector('.test1')
let telre = /^1[3-9][0-9]{9}$/
tel.onblur = function () {
    if (telre.test(tel.value)) {
        test1.classList.add('success')
        test1.innerHTML = '手机号输入正确'
    } else {
        test1.classList.remove('success')
        test1.classList.add('error')
        test1.innerHTML = '手机号码格式不正确，请重新输入'
    }
}
/* 验证密码是否为6-16位 */
let test3 = document.querySelector('.test3')
let psw = document.getElementById('psw')
psw.onblur = function () {
    let pswlen = psw.value;
    if (pswlen.length < 6 || pswlen.length > 12) {
        test3.classList.remove('success')
        test3.classList.add('error')
        test3.innerHTML = '密码错误，请输入6-12位密码'
    } else {
        test3.classList.add('success')
        test3.innerHTML = '密码正确'
    }

}
/* 验证两次密码是否相等 */
let repsw = document.getElementById('repsw')
let test4 = document.querySelector('.test4')
repsw.onblur = function () {
    if (repsw.value === psw.value && repsw.value != '') {
        test4.classList.add('success')
        test4.innerHTML = '两次密码一致'
    } else {
        test4.classList.add('error')
        test4.classList.remove('success')
        test4.innerHTML = '两次密码不一致，请重新输入'
    }

}
/* 发送短信 */
let resendbtn = document.querySelector('.resendbtn')
resendbtn.addEventListener('click', function () {
    resendbtn.disabled = true;
    let resendtime = 60;

    let resendtimer = setTimeout(function resendtimes() {
        if (resendtime == 0) {
            clearTimeout(resendtimer);
            resendbtn.innerHTML = '发送验证码'
            resendbtn.disabled = false;
        } else {
            setTimeout(resendtimes, 1000)
            resendtime--;
            resendbtn.innerHTML = '还有' + resendtime + 's可重新发送'
        }
    }, 0);
})
/* 密码小眼睛显示 */
let yj = document.getElementById('yj')
let res = true;
yj.onclick = function () {
    res = !res;
    if (res === false) {
        yj.innerHTML = '';//睁眼
        psw.type = ''
    } else {
        yj.innerHTML = '';  //闭眼
        psw.type = 'password'
    }
}
/* 点击登录5秒之后跳转页面 */
let login = document.getElementsByClassName('login')[0]
login.addEventListener('click', function () {
    location = 'logining.html'
})

/* 验证并提交表单信息 */
let usname = document.querySelector('.usname')
let sub = document.getElementsByClassName('sub')[0]
let input = document.getElementsByTagName('input')
let namere = /[a-zA-Z0-9]/;
sub.addEventListener('click', function () {
    if (input[0].value == '' || namere.test(input[0].value) == 0) {
        alert('请重新检验用户名是否输入正确(字母和数字组合)')
    } else if (input[1].value == '' || telre.test(input[1].value) == 0) {
        alert('请重新检验手机号是否输入正确')
    } else if (input[2].value == '') {
        alert('请重新检验验证码是否输入正确（随便编一个。。。）')
    } else if (input[3].value == '' || input[3].length < 6 || input[3].length > 12) {
        alert('请重新检验密码是否输入正确')

    } else if (input[4].value == '' || input[4].value != input[3].value) {
        alert('请重新检验两次密码是否一致')
    } else if (input[5].checked != true) {
        alert('请勾选下方同意书')
    } else {
        sub.type = 'submit'
    }


})




