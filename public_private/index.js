var User = /** @class */ (function () {
    function User(a) {
        this.familyName = 'kim';
        this.name = a + this.familyName;
    }
    User.prototype.changeFamilyName = function () {
        this.familyName = 'park';
    };
    return User;
}());
var 유저1 = new User('민수');
유저1.changeFamilyName();
console.log(유저1);
// public은.. 기존 class와 동일하게 값 읽기, 수정이 가능함
// private는 값 읽기, 수정이 불가능함
// 수정하려면, class의 prototype에서 처리해야 함.
// public을 쓰면 이런것도 가능함
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    return Student;
}());
var 학생1 = new Student('harry');
console.log(학생1);
