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
    GameObject.prototype.delete = function () {
    };
    return GameObject;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(x, y) {
        var _this = _super.call(this) || this;
        _this.upKeyPressed = false;
        _this.downKeyPressed = false;
        _this.leftKeyPressed = false;
        _this.rightKeyPressed = false;
        _this.leftSpeed = 0;
        _this.rightSpeed = 0;
        _this.downSpeed = 0;
        _this.upSpeed = 0;
        _super.prototype.createDiv.call(_this, "cat");
        _this.speed = 4;
        _this.width = 146;
        _this.height = 128;
        _this.upKey = 87;
        _this.downKey = 83;
        _this.leftKey = 65;
        _this.rightKey = 68;
        _this.behaviour = new Moving(_this);
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
var Destroyed = (function () {
    function Destroyed() {
    }
    Destroyed.prototype.update = function () {
    };
    Destroyed.prototype.onKeyDown = function () {
    };
    Destroyed.prototype.onKeyUp = function () {
    };
    Destroyed.prototype.move = function () {
    };
    return Destroyed;
}());
var Float = (function () {
    function Float(c) {
    }
    Float.prototype.update = function () {
    };
    Float.prototype.onKeyDown = function () {
    };
    Float.prototype.onKeyUp = function () {
    };
    Float.prototype.move = function () {
    };
    return Float;
}());
var Utils = (function () {
    function Utils() {
    }
    Utils.checkColission = function (obj1, obj2) {
        if (obj1.getX() < obj2.getX() + obj2.getWidth() &&
            obj1.getX() + obj1.getWidth() > obj2.getX() &&
            obj1.getY() < obj2.getY() + obj2.getHeight() &&
            obj1.getHeight() + obj1.getY() > obj2.getY()) {
            console.log("colission");
            return true;
        }
    };
    return Utils;
}());
var Ring = (function (_super) {
    __extends(Ring, _super);
    function Ring(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = 50;
        _this.height = 50;
        _super.prototype.createDiv.call(_this, "ring");
        return _this;
    }
    Ring.prototype.move = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Ring;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.rings = new Array();
        this.score = 0;
        this.cat = new Cat(5, 200);
        window.addEventListener("keydown", function (event) { return _this.cat.behaviour.onKeyDown(event); });
        window.addEventListener("keyup", function (event) { return _this.cat.behaviour.onKeyUp(event); });
        for (var i = 0; i < 12; i += 1) {
            var x = Math.floor(Math.random() * 900) + 100;
            var y = Math.floor(Math.random() * 900) + 100;
            this.rings.push(new Ring(x, y));
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.getInstance = function () {
        if (Game.instance == null) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.cat.move();
        for (var i = 0; i < 12; i++) {
            Utils.checkColission(this.cat, this.rings[i]);
            this.rings[i].move();
        }
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
var Idle = (function () {
    function Idle(c) {
        this.cat = c;
    }
    Idle.prototype.update = function () {
    };
    Idle.prototype.onKeyDown = function (event) {
    };
    Idle.prototype.onKeyUp = function (event) {
    };
    Idle.prototype.move = function () {
        this.cat.upSpeed = this.cat.downSpeed = this.cat.leftSpeed = this.cat.rightSpeed = 0;
    };
    return Idle;
}());
var Moving = (function () {
    function Moving(c) {
        this.cat = c;
    }
    Moving.prototype.update = function () {
    };
    Moving.prototype.move = function () {
        this.cat.x = this.cat.x - this.cat.leftSpeed + this.cat.rightSpeed;
        this.cat.y = this.cat.y - this.cat.upSpeed + this.cat.downSpeed;
        this.cat.div.style.transform = "translate(" + this.cat.x + "px, " + this.cat.y + "px)";
    };
    Moving.prototype.onKeyUp = function (event) {
        this.cat.upSpeed = this.cat.downSpeed = this.cat.leftSpeed = this.cat.rightSpeed = 0;
    };
    Moving.prototype.onKeyDown = function (event) {
        var x = event.which || event.keyCode;
        console.log(x);
        switch (x) {
            case this.cat.upKey:
                this.cat.upSpeed = 5;
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
    return Moving;
}());
//# sourceMappingURL=main.js.map