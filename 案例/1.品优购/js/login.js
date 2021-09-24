let yj = document.getElementById('yj')
let psw = document.getElementById('psw')
/* yj.onclick = function () {
    yj.innerHTML = '';
} */
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
