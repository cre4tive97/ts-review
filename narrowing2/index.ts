// 1. null & undefined check

function 함수(a :string | undefined) {
    if ( a && typeof a === 'string') {
        console.log(a)
    }
}

// ( a && typeof a === 'string') 분석
// a는 a가 string으로 존재하면 true, undefined라면 falsy를 리턴함
// 그리고 만약 a가 스트링이라면 typeof a === 'string'을 실행함
// 조건식의 && 연산자는, 왼쪽부터 참 거짓은 판별함
// 만약 좌항이 거짓이라면 우항의 참 거짓을 판별하지 않음


// property in object

type Fish = {swim :string};
type Bird = {fly :string};

function animal(animal :Fish | Bird) {
    if ( 'swim' in animal ) console.log(animal.swim);
}

// instanceof

let currentDate = new Date();
if (currentDate instanceof Date) console.log(currentDate);


type Car = {
    wheel : '4개',
    color : string
}
type Bike = {
    wheel : '2개',
    color : string
}

// 동일한 속성의 타입을 비교하려면 property in object로 불가능함.
// 이럴 땐 literal type을 하나 넣어서 그걸로 비교하는게 편함

function vehicle(x :Car | Bike) {
    if ( x.wheel === '4개') console.log('x는 Car타입 이에요.')
}


class Champion {
    q :string;
    w :string;
    constructor (q :string, w :string) {
        this.q = q;
        this.w = w;
    }
}

interface ChampType {
    q : string;
    w : string;
}

let nunu :ChampType = new Champion('consume', 'snowball');
let garen :ChampType = { q: 'strike', w: 'courage' }

function champ(champion :ChampType) {
    if(champion instanceof Champion) console.log(champion.q);
    else throw('error')
}

champ(nunu);
champ(garen);