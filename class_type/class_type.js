var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1.tax());
var Word = /** @class */ (function () {
    function Word() {
        var words = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            words[_i] = arguments[_i];
        }
        var strings = [];
        var numbers = [];
        words.forEach(function (word) {
            if (typeof word === 'string')
                strings.push(word);
            else
                numbers.push(word);
        });
        this.str = strings;
        this.num = numbers;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
