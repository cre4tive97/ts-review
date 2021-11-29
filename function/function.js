function 함수(x) {
    return x * 2;
}
function 함수2(x) {
    x * 2;
}
function 함수3(x) {
    x + 2;
}
// 타입지정된 파라미터는 필수임  함수()  < 에러
함수3();
// ? 는 뭘까?
// x? :number  ===  x :number | undefined
function 인사(name) {
    if (name)
        console.log("\uC548\uB155\uD558\uC138\uC694 " + name);
    else
        console.log('이름이 없습니다.');
}
function 자릿수(x) {
    if (typeof x === 'number')
        return x.toString().length;
    else
        return x.length;
}
function 결혼가능(money, house, attractive) {
    var point = 0;
    if (house)
        point += 500;
    if (attractive === '상')
        point += 100;
    point += money;
    if (point >= 600)
        return "결혼가능";
}
