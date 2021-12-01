// 1. null & undefined check
function 함수(a) {
    if (a && typeof a === 'string') {
        console.log(a);
    }
}
function animal(animal) {
    if ('swim' in animal)
        console.log(animal.swim);
}
// instanceof
var currentDate = new Date();
if (currentDate instanceof Date)
    console.log(currentDate);
// 동일한 속성의 타입을 비교하려면 property in object로 불가능함.
// 이럴 땐 literal type을 하나 넣어서 그걸로 비교하는게 편함
function vehicle(x) {
    if (x.wheel === '4개')
        console.log('x는 Car타입 이에요.');
}
var Champion = /** @class */ (function () {
    function Champion(q, w) {
        this.q = q;
        this.w = w;
    }
    return Champion;
}());
var nunu = new Champion('consume', 'snowball');
var garen = { q: 'strike', w: 'courage' };
function champ(champion) {
    if (champion instanceof Champion)
        console.log(champion.q);
    else
        throw ('error');
}
champ(nunu);
champ(garen);
