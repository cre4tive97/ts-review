var union = 'Kim';
union = 123;
var 회원들 = [1, '2', 3];
var 오브젝트 = { a: 123 };
var 이름1;
이름1 = 123;
이름1 = "kim";
var 이름2;
이름2 = 123;
이름2 = {};
var 변수1 = 이름1; // Any 타입은 아예 타입 정의를 해제해버림.
// let 변수2 :string = 이름2; // Unknown 타입은 타입 정의를 해제하지 않음.
var 나이1;
// 나이1 + 1;  string|number 는 새로운 타입이기때문에 안됨.
var 나이2 = 1;
// 나이2 - 1; 
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
