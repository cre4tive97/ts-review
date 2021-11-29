let union :string | number = 'Kim';
union = 123;

let 회원들 :(string | number)[] = [1, '2', 3];
let 오브젝트 :{a : string | number} = { a : 123 };

let 이름1 :any;
이름1 = 123;
이름1 = "kim";

let 이름2 :unknown; 
이름2 = 123;
이름2 = {};

let 변수1 :string = 이름1; // Any 타입은 아예 타입 정의를 해제해버림.
// let 변수2 :string = 이름2; // Unknown 타입은 타입 정의를 해제하지 않음.

let 나이1 :string|number;
// 나이1 + 1;  string|number 는 새로운 타입이기때문에 안됨.

let 나이2 :unknown = 1;
// 나이2 - 1; 

let user :string = 'kim';
let age :undefined|number = undefined;
let married :boolean = false; 
let 철수 :(string|undefined|number|boolean)[] = [user, age, married];

let 학교 :{
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[];
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]