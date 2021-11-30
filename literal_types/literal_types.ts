function 가위바위보(x :'가위'|'바위'|'보') :('가위'|'바위'|'보')[]{
    return [x];
}


let 자료1 = {
    name : 'kim'
}

let 자료2 = {
    name : 'kim'
} as const

자료1.name // 'kim'

function 내함수1(a :'kim') {
}

function 내함수2(a :'kim') {
}
내함수1('kim')
// 내함수(자료1.name) << 에러
// why?
// 자료.name 는 string type
// 내함수의 파라미터 a는 'kim' 타입임.

내함수2(자료2.name);

// as const는?
// 1. 타입을 오브젝트의 value로 바꿔준다 (litaral type)
// 2. 오브젝트 안의 모든 속성을 readonly로 바꿔준다. (수정불가능)

