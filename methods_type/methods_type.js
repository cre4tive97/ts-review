var 함수 = function (a) { return parseInt(a); }; // 함수 표현식으로 
var 회원정보 = {
    name: 'kim',
    age: 20,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function (name) {
        this.name = name;
    }
};
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
};
var 만들함수 = function (x, a, b) {
    return b(a(x));
};
console.log(만들함수('010-1111-2222', cutZero, removeDash));
