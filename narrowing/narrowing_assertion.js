function 내함수(x) {
    if (typeof x === 'string')
        return x + '1';
    else
        return x + 1;
}
내함수(123);
function 내함수2(x) {
    var array = [];
    if (typeof x === 'number')
        array[0] = x;
}
function 내함수3(x) {
    var array = [];
    array[0] = x;
}
// Type Assertion (as) 는 언제 쓰는가?
// type narrowing 할 때 씀
// 어떤 타입이 들어올 지 100% 확실할 때 쓰셈
// 근데 그렇게 되면 TS쓰는 의미 없어지니 디버깅용으로만 쓰셈
function clean(arr) {
    return arr.map(function (item) {
        if (typeof item === 'string')
            return parseFloat(item);
        else
            return item;
    });
}
console.log(clean([1, 2, '3', '4', 5]));
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function subject(teacher) {
    if (typeof teacher.subject === 'string')
        return teacher.subject;
    else if (Array.isArray(teacher.subject))
        return teacher.subject[teacher.subject.length - 1];
    else
        return '없쪄';
}
console.log(subject(철수쌤));
console.log(subject(영희쌤));
console.log(subject(민수쌤));
