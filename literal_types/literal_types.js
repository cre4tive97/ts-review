function 가위바위보(x) {
    return [x];
}
var 자료1 = {
    name: 'kim'
};
var 자료2 = {
    name: 'kim'
};
자료1.name; // 'kim'
function 내함수1(a) {
}
function 내함수2(a) {
}
내함수1('kim');
// 내함수(자료1.name) << 에러
// why?
// 자료.name 는 string type
// 내함수의 파라미터 a는 'kim' 타입임.
내함수2(자료2.name);
// as const는?
// 1. 타입을 오브젝트의 value로 바꿔준다 (litaral type)
// 2. 오브젝트 안의 모든 속성을 readonly로 바꿔준다. (수정불가능)
