type 함수타입 = (a :string) => number;

let 함수:함수타입 = a => parseInt(a); // 함수 표현식으로 

// type 플러스원 = (a:number) => number;
// type 체인지 = (name:string) => void;

type 회원타입 = {
    name : string,
    age : number,
    plusOne : (a:number) => number,
    changeName : (name: string) => void
}

let 회원정보:회원타입 = {
    name : 'kim',
    age : 20,
    plusOne(a) {
        return a + 1
    },
    changeName(name) {
        this.name = name;
    }
}

type CutType = (x :string) => string

let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    return result
}

type RemoveType = (x :string) => number

let removeDash:RemoveType = x => {
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}

type 만들함수타입 = (x:string, a:CutType, b:RemoveType) => number
let 만들함수:만들함수타입 = (x, a, b) => {
    return b(a(x));
}

console.log(만들함수('010-1111-2222', cutZero, removeDash))