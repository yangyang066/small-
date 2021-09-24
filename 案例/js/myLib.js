// 在window里面添加一个$属性
(function (w) {
    w.$ = function () {
        alert('我是myLib')
    }
}(window))

