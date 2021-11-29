type Animal = string | number | undefined

let 동물 :Animal = 123;

type Person = {
    name : string,
    age : number
}

let 사람1 :Person = {name : 'kim', age : 12}

type Girlfriend = { readonly name : string }

const 여친 :Girlfriend = {
    name : '엠버'
}

// 여친.name = '유라'; << read-only 라서 객체 수정 불가능



type Square = {
    color? : string,
    width : number,
  }
  
  let 네모2 :Square = { 
    width : 100 
  }


type PositionX = { x : number };
type PositionY = { y : number };
type Position = PositionX & PositionY;

let position :Position = { x : 3, y : 12 }


// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?

type Test1 = { test : string };
type Test2 = { test : number };
type Test = Test1 & Test2;

// let test :Test = { test : '123' }; // never type

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
// type alias로 만들어보셈 

type Box = {
    color? : string,
    size : number,
    readonly position : number[]
}

let box :Box = { size : 123, position : [1,2,3] }

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 

type Check1 = { 
        name : string,
        phone : number,
        email : string
    }

    // (숙제4). 다음을 만족하는 type alias를 만들어보십시오.
    // 1. 숙제3과 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
    // 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
    // 3. 멋있게 숙제3에서 만들어둔  type alias를 재활용해봅시다.

type Check2 = Check1 & { isMinor : boolean };

