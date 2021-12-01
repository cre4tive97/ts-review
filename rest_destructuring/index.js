function 함수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var max = Number.MIN_VALUE;
    x.forEach(function (item) {
        if (item > max)
            max = item;
    });
    return max;
}
console.log(함수(6, 3, 7, 2));
function 함수1(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
함수1({ user: 'kim', comment: [3, 5, 4], admin: false });
function 함수2(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
함수2([40, 'wine', false]);
