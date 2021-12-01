function 함수(x) {
    return x[0];
}
var a = 함수([4, 2]);
console.log(a + 1);
function arr(x) {
    console.log(x.length);
}
arr('hello');
arr(['kim', 'park']);
var data = '{"name" : "dog", "age" : 1 }';
function changeObj(x) {
    return JSON.parse(x);
}
var result = changeObj(data);
console.log(result);
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    return Person;
}());
var ab = new Person('어쩌구');
ab.name; //any 타입이 되었넹 
