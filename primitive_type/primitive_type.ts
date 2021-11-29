
let 이름:string = 'Kim';
let 나이:number = 20;
let 출생지역:string = "Seoul";

let 노래:{ 제목 : string, 가수 : string } = { 제목 : '돌핀', 가수 : '오마이걸' };
let 노래2:{ [key :string] : string } = { 제목 : '돌핀', 가수 : '오마이걸' };

let project: {
    member : string[],
    days : number,
    started : boolean,
  } = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }