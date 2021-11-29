function 함수(x :number) :number {
    return x * 2;
}

function 함수2(x :number) :void { // void는 return을 막아줌
     x * 2;
}

function 함수3(x? :number) :void {
    x + 2;
}

// 타입지정된 파라미터는 필수임  함수()  < 에러
 함수3()

 // ? 는 뭘까?
 // x? :number  ===  x :number | undefined

function 인사(name? :string) :void{
    if(name) console.log(`안녕하세요 ${name}`);
    else console.log('이름이 없습니다.')
}

function 자릿수(x: string | number) :number {
    if(typeof x === 'number') return x.toString().length;
    else return x.length;
}

function 결혼가능(money :number, house: boolean, attractive: string) :string|void {
    let point :number = 0;
    if (house) point += 500;
    if (attractive === '상') point += 100;
    point += money;
    if(point >= 600) return "결혼가능"
}