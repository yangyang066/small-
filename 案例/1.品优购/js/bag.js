let th_a1 = document.getElementsByClassName('th_a1')[0]
console.log(th_a1.innerHTML)
let son = document.getElementsByClassName('son')
console.log(son.length)
let All = th_a1.getElementsByTagName('input')
console.log(All)
// son.onclick = function () {
//     alert('s')

// }
All.onclick = function () {
    console.log('s')

}