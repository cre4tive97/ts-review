//(숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
var User = /** @class */ (function () {
    function User() {
        this.z = 30;
    }
    User.x = 10;
    User.y = 20;
    return User;
}());
//(숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
var User1 = /** @class */ (function () {
    function User1() {
    }
    User1.addOne = function (a) {
        User1.x += a;
    };
    User1.printX = function () { console.log(User1.x); };
    User1.x = 10;
    User1.y = 20;
    return User1;
}());
User1.addOne(3); //이렇게 하면 x가 3 더해져야함
User1.addOne(4); //이렇게 하면 x가 4 더해져야함
User1.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative; \n            top:" + a * 400 + "px; \n            left:" + a * 400 + "px; \n            width:" + this.width + "px; \n            height : " + this.height + "px; \n            background:" + this.color + "\"></div>";
        document.body.insertAdjacentHTML('beforeend', square);
    };
    return Square;
}());
var 네모 = new Square(30, 30, 'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();
