
let food :[string, number, boolean] = [ '동서녹차', 4000, true ];


let food1 :[string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true];


function 함수(a :string, b :boolean, ...c :(string | number)[]){
    
}
함수('a', true, 6, 3, '1', 4)


function 함수1(...a :(string | number)[]) :[string[], number[]]{
    let str :string[] = [];
    let num :number[] = [];
    a.forEach(item => {
        if(typeof item === 'string') str.push(item);
        else num.push(item);
    })
    return [str, num];
}

함수1('b', 5, 6, 8, 'a')