function 함수<MyType>(x :MyType[]) :MyType{
    return x[0]
}

let a = 함수<number>([4,2]);
console.log(a + 1);

// (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 
// array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 

type ArrType = string | string[];
interface Arr {
    length : number
}

function arr<T extends Arr> (x :T) :void {
    console.log(x.length);
}

arr<ArrType>('hello')
arr<ArrType>( ['kim', 'park'] )


interface Animal {
    name : string;
    age : number 
  }
  
  let data = '{"name" : "dog", "age" : 1 }'

  function changeObj<T>(x :string) :T{
      return JSON.parse(x);
  }

  let result = changeObj<Animal>(data)
  console.log(result)


  class Person<T>{
    name;
    constructor(a :T){
      this.name = a;
    }
  }
  let ab = new Person<string>('어쩌구');
  ab.name //any 타입이 되었넹 

