// console.log(location.search);
// let str = '?usname=asd&tel=1912729396&resendnum=dsaasd&psw=123456&repsw=123456'
let str = location.search
let re = /usname=[a-zA-Z0-9-]+&t/
let str2 = str.match(re).toString();
console.log(str2) //?usname=asd&t
let indexa = str2.indexOf('=') + 1;
let indexb = str2.lastIndexOf('&');
let str3 = str2.slice(indexa, indexb)
console.log(str3)

/* 修改欢迎的名字 */
let welcomename = document.getElementsByClassName('welcomename')[0]
welcomename.innerHTML = str3