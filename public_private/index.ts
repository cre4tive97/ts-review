class User {
    public name :string;
    private familyName :string = 'kim';
    constructor(a) {
        this.name = a + this.familyName;
    }
    changeFamilyName() {
        this.familyName = 'park';
    }
}

let 유저1 = new User('민수')
유저1.changeFamilyName()
console.log(유저1)

// public은.. 기존 class와 동일하게 값 읽기, 수정이 가능함
// private는 값 읽기, 수정이 불가능함
// 수정하려면, class의 prototype에서 처리해야 함.

// public을 쓰면 이런것도 가능함

class Student {
    constructor(public name:string) {}
}

let 학생1 = new Student('harry')
console.log(학생1)