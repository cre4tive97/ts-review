var food = ['동서녹차', 4000, true];
var food1 = ['동서녹차', 4000, true, false, true, true, false, true];
function 함수(a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
}
함수('a', true, 6, 3, '1', 4);
function 함수1() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var str = [];
    var num = [];
    a.forEach(function (item) {
        if (typeof item === 'string')
            str.push(item);
        else
            num.push(item);
    });
    return [str, num];
}
함수1('b', 5, 6, 8, 'a');
