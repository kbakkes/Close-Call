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
        this.width = 0;
        this.height = 0;
    }
    GameObject.prototype.createDiv = function (divname) {
        var container = document.getElementById("container");
        this.div = document.createElement(divname);
        container.appendChild(this.div);
    };
    GameObject.prototype.getX = function () {
        return this.x;
    };
    GameObject.prototype.getY = function () {
        return this.y;
    };
    GameObject.prototype.getWidth = function () {
        return this.width;
    };
    GameObject.prototype.getHeight = function () {
        return this.height;
    };
    return GameObject;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(x, y) {
        var _this = _super.call(this) || this;
        _this.leftSpeed = 0;
        _this.rightSpeed = 0;
        _this.downSpeed = 0;
        _this.upSpeed = 0;
        _super.prototype.createDiv.call(_this, "cat");
        _this.speed = 4;
        _this.upKey = 87;
        _this.downKey = 83;
        _this.leftKey = 65;
        _this.rightKey = 68;
        _this.behaviour = new Idle(_this);
        _this.x = 100;
        _this.y = 220;
        return _this;
    }
    Cat.prototype.move = function () {
        this.behaviour.move();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Cat;
}(GameObject));
var FaceRight = (function () {
    function FaceRight(c) {
    }
    FaceRight.prototype.update = function () {
    };
    FaceRight.prototype.onKeyDown = function () {
    };
    FaceRight.prototype.onKeyUp = function () {
    };
    FaceRight.prototype.move = function () {
    };
    return FaceRight;
}());
var Idle = (function () {
    function Idle(c) {
        var _this = this;
        this.cat = c;
        window.addEventListener("keydown", function (event) { return _this.onKeyDown(event); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(event); });
    }
    Idle.prototype.update = function () {
    };
    Idle.prototype.onKeyDown = function (event) {
        var x = event.which || event.keyCode;
        console.log(x);
        switch (x) {
            case this.cat.upKey:
                this.cat.upSpeed = 5;
                console.log("W");
                this.cat.y -= this.cat.upSpeed;
                break;
            case this.cat.downKey:
                this.cat.downSpeed = 5;
                console.log("S");
                this.cat.y += this.cat.downSpeed;
                break;
            case this.cat.leftKey:
                this.cat.leftSpeed = 5;
                console.log("A");
                this.cat.x -= this.cat.leftSpeed;
                this.cat.div.style.backgroundImage = "url('images/catRight.png')";
                break;
            case this.cat.rightKey:
                this.cat.rightSpeed = 5;
                console.log("D");
                this.cat.x += 10;
                this.cat.div.style.backgroundImage = "url('images/cat.png')";
                break;
        }
    };
    Idle.prototype.onKeyUp = function (event) {
        this.cat.upSpeed = this.cat.downSpeed = this.cat.leftSpeed = this.cat.rightSpeed = 0;
    };
    Idle.prototype.move = function () {
        this.cat.x = this.cat.x - this.cat.leftSpeed + this.cat.rightSpeed;
        this.cat.y = this.cat.y - this.cat.upSpeed + this.cat.downSpeed;
        this.cat.div.style.transform = "translate(" + this.cat.x + "px, " + this.cat.y + "px)";
    };
    return Idle;
}());
var Util = (function () {
    function Util() {
    }
    Util.prototype.checkColission = function (obj1, obj2) {
        if (obj1.getX() < obj2.getX() + obj2.getWidth() &&
            obj1.getX() + obj1.getWidth() > obj2.getX() &&
            obj1.getY() < obj2.getY() + obj2.getHeight() &&
            obj1.getHeight() + obj1.getY() > obj2.getY()) {
            return true;
        }
    };
    return Util;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.score = 0;
        this.cat = new Cat(5, 200);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.cat.move();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.endGame = function () {
        document.getElementById("score").innerHTML = "Score : 0";
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Moving = (function () {
    function Moving(c) {
    }
    Moving.prototype.update = function () {
    };
    Moving.prototype.onKeyDown = function () {
    };
    Moving.prototype.onKeyUp = function () {
    };
    Moving.prototype.move = function () {
    };
    return Moving;
}());
var MovingRight = (function () {
    function MovingRight(c) {
    }
    MovingRight.prototype.update = function () {
    };
    MovingRight.prototype.onKeyDown = function () {
    };
    MovingRight.prototype.onKeyUp = function () {
    };
    MovingRight.prototype.move = function () {
    };
    return MovingRight;
}());
//# sourceMappingURL=main.js.map