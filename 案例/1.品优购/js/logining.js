let logining = document.getElementsByClassName('logining')[0]
let logintimes = 5;
setTimeout(function logintime() {
    if (logintimes == 0) {
        location = 'login.html';
    } else {
        logining.innerHTML = '页面将在' + logintimes + '秒后跳转'
        logintimes--;
        setTimeout(logintime, 1000)
    }

}, 0)