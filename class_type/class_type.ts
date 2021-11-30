class Car {
  model :string;
  price :number;
  constructor (model :string, price :number) {
    this.model = model;
    this.price = price
  }
  tax() :number{
    return this.price * 0.1;
  }
}

let car1 = new Car('소나타', 3000)
console.log(car1.tax())


class Word {
  str :string[];
  num :number[];
  constructor(...words  :(string | number)[]) {
    let strings :string[] = [];
    let numbers :number[] = [];
    words.forEach(word => {
      if(typeof word === 'string') strings.push(word);
      else numbers.push(word);
    })
    this.str = strings;
    this.num = numbers;
  }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']