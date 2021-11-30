interface Square {
    color : string;
    width : number;
}

let square :Square = { color : 'red', width : 100 };

// Object는 type alias, interface 둘 다 사용 가능.
// 뭐가 다를까?

interface Student {
    name : string;
}

interface Teacher extends Student {
    age : number;
}
// class 처럼 extends 가능함
let 학생 :Student = { name : 'kim' }
let 선생 :Teacher = { name : 'kim', age : 20 }

// type alias도 intersection type 을 이용하면 가능함 ( & )
type Animal = { name : string };
type Cat = { age : number } & Animal;
let cat:Cat = {name : 'happy', age : 20}

// 그래서 뭐가 다름?
// interface는 중복 선언이 가능함
// type은 중복 선언 불가능

// intersection type은 속성 중복이 가능함
type Car = { name : string };
type Sonata = { name : number } & Car;
// let sonata:Sonata = { name : 'Hyundai' };  << 에러 뜸
// 에러 뜨는 이유
// Sonata 타입의 name 속성은 string이며 number를 동시에 만족해야 함
// 그런 타입은 없기 때문에 never 타입이 됨
// 타입 생성할 때 에러를 띄워주지 않아서 문제가 생길 위험이 있음

// interface는 속성 중복을 방지해줌

interface Color {
    name : string;
}
// interface Red extends Color {
//     name : number;
// }  에러 뜸

// 왜냐하면 이 코드는
// interface Red extends Color {
//     name : string;
//     name : number;
// } 
// 이거랑 똑같기 때문에 당연히 에러가 뜨는거임.

interface Product1 {
    brand : string;
    serialNumber : number;
    model : string[];
}

let 상품:Product1 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }


interface Product {
    product : string;
    price : number;
}

let 장바구니: Product[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

interface NewProduct extends Product {
    card : boolean;
}

interface MathObj {
    plus : (a :number, b :number) => number;
    minus : (a :number, b :number) => number;
}

let 연산 :MathObj = {
    plus : (a, b) => a + b,
    minus : (a, b) => a - b
}