function 함수(...x :number[]) :number{ 
    let max:number = Number.MIN_VALUE;
    x.forEach(item => {
        if(item > max) max = item;
    })
    return max;
}

console.log(함수(6,3,7,2))

interface UserType {
    user : string;
    comment : number[];
    admin : boolean;
}
function 함수1({user, comment, admin} :UserType) :void{
    console.log(user, comment, admin)
}

함수1({ user : 'kim', comment : [3,5,4], admin : false })

type Arr = (number | string | boolean)[];

function 함수2([a, b, c] :Arr) :void {
    console.log(a, b, c);
}
함수2( [40, 'wine', false] )