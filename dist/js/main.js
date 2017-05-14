var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject() {
        this.x = 0;
        this.y = 0;
    }
    GameObject.prototype.createDiv = function (divname) {
        var container = document.getElementById("container");
        this.div = document.createElement(divname);
        container.appendChild(this.div);
    };
    return GameObject;
}());
var Wheel = (function (_super) {
    __extends(Wheel, _super);
    function Wheel(x, y) {
        var _this = _super.call(this) || this;
        _super.prototype.createDiv.call(_this, "wheel");
        _this.y = y;
        _this.x = x;
        _this.div.style.transform = "translate(" + x + "px, " + y + "px)";
        return _this;
    }
    return Wheel;
}(GameObject));
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(x, y) {
        var _this = _super.call(this) || this;
        _super.prototype.createDiv.call(_this, "car");
        _this.speed = 4;
        _this.x = x;
        _this.y = y;
        _this.wheel1 = new Wheel(_this.x, _this.y);
        _this.wheel2 = new Wheel(20, 100);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        _this.width = 145;
        _this.move();
        return _this;
    }
    Car.prototype.move = function () {
        if (this.speed > 0) {
            this.x += this.speed;
        }
        if (this.braking == true) {
            this.speed = 0;
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Car.prototype.onKeyDown = function (e) {
        console.log("key down");
        this.braking = true;
    };
    Car.prototype.getX = function () {
        return this.x;
    };
    Car.prototype.getWidth = function () {
        return this.width;
    };
    Car.prototype.brake = function () {
        this.speed = 0;
    };
    return Car;
}(GameObject));
var Rock = (function (_super) {
    __extends(Rock, _super);
    function Rock() {
        var _this = _super.call(this) || this;
        _super.prototype.createDiv.call(_this, "rock");
        _this.speed = 10;
        _this.move();
        _this.x = 490;
        _this.y = 210;
        _this.width = 62;
        return _this;
    }
    Rock.prototype.move = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Rock.prototype.getX = function () {
        return this.x;
    };
    Rock.prototype.getWidth = function () {
        return this.width;
    };
    Rock.prototype.fall = function () {
        this.y += this.speed;
        if (this.y >= 600) {
            this.speed = 0;
        }
    };
    return Rock;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.car = new Car(0, 220);
        this.rock = new Rock();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.move();
        this.rock.move();
        this.colissionCheck();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.endGame = function () {
        document.getElementById("score").innerHTML = "Score : 0";
    };
    Game.prototype.colissionCheck = function () {
        if (this.car.getX() > this.rock.getX() - this.car.getWidth()) {
            console.log("colission");
            this.car.brake();
            this.rock.fall();
        }
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map