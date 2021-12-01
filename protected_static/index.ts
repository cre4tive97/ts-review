//(숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
class User {
    private static x = 10;
    public static y = 20;
    protected z = 30;
  }

//(숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.

class User1 {
    private static x = 10;
    public static y = 20;
    static addOne(a :number) :void {
        User1.x += a
    }
    static printX() { console.log(User1.x) }
  }
  User1.addOne(3) //이렇게 하면 x가 3 더해져야함
  User1.addOne(4) //이렇게 하면 x가 4 더해져야함
  User1.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함

class Square {
    width :number;
    height :number;
    color :string;
    constructor(width :number, height :number, color :string) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        let a :number = Math.random()
        let square = `<div style="position:relative; 
            top:${a * 400}px; 
            left:${a * 400}px; 
            width:${this.width}px; 
            height : ${this.height}px; 
            background:${this.color}"></div>`;
        document.body.insertAdjacentHTML('beforeend', square)
    }
}

let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()