var title = document.getElementById('title');
// title.innerHTML = '안뇽';  << 에러 뜸
// title의 타입은 Element 또는 null 이므로 에러가 뜸
// 언제 null ?
// 없는 id, class로 element를 찾으면 null이 되고, null.innerHTML은 없으니까 에러 발생함
// 기존처럼 type narrowing을 해줘야함
// Type narrowing 방법
// 1. 그냥 null이 아닌지 체크
if (title !== null)
    title.innerHTML = '안뇽';
// 2. instanceof 연산자
if (title instanceof HTMLElement)
    title.innerHTML = '하이';
// 3. type assertion
// typescript를 쓰는 의미가 없어지니 사용을 지양해야 함
var title2 = document.getElementById('title');
title2.innerHTML = '바이';
// 4. optional chaining 
// optional chaining이란?
// title DOM 오브젝트 안에 innerHTML이 존재하면 그거 써주고, 없으면 undefined 남겨주셈 이라는 뜻
if ((title === null || title === void 0 ? void 0 : title.innerHTML) !== undefined)
    title.innerHTML = 'ㅎㅇ';
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement)
    링크.href = 'kakao.com';
var 버튼 = document.querySelector('#button');
// 이벤트 리스너는 optional chaining 문법으로...
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () { return console.log('하이'); });
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement)
    이미지.src = 'new.jpg';
var naver = document.querySelectorAll('.naver');
naver.forEach(function (item) {
    if (item instanceof HTMLAnchorElement)
        item.href = 'kakao.com';
});
