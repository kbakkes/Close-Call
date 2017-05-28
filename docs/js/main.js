var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        var _this = this;
        _super.call(this);
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        _super.prototype.createDiv.call(this, "cat");
        this.speed = 4;
        this.width = 146;
        this.height = 128;
        this.upKey = 87;
        this.downKey = 83;
        this.leftKey = 65;
        this.rightKey = 68;
        this.behaviour = new Moving(this);
        this.x = 100;
        this.y = 220;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    Cat.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upKey:
                this.upSpeed = 5;
                console.log("W");
                this.y -= this.upSpeed;
                break;
            case this.downKey:
                this.downSpeed = 5;
                console.log("S");
                this.y += this.downSpeed;
                break;
            case this.leftKey:
                this.speed = 5;
                console.log("A");
                this.x -= this.speed;
                this.div.style.backgroundImage = "url('images/catRight.png')";
                break;
            case this.rightKey:
                this.rightSpeed = 5;
                console.log("D");
                this.x += this.rightSpeed;
                this.div.style.backgroundImage = "url('images/cat.png')";
                break;
        }
    };
    Cat.prototype.move = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Cat;
}(GameObject));
var Destroyed = (function () {
    function Destroyed() {
    }
    Destroyed.prototype.update = function () {
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
    Utils.prototype.checkColission = function (obj1, obj2) {
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
        _super.call(this);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        _super.prototype.createDiv.call(this, "ring");
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
        this.lives = 3;
        this.score = 0;
        this.cat = new Cat(5, 200);
        this.utils = new Utils();
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
            if (this.utils.checkColission(this.cat, this.rings[i])) {
                this.lives -= 1;
                console.log("leven -1, Aantal levens: " + this.lives);
            }
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
    var g = Game.getInstance();
});
var Idle = (function () {
    function Idle(c) {
    }
    Idle.prototype.update = function () {
    };
    Idle.prototype.move = function () {
    };
    return Idle;
}());
var Moving = (function () {
    function Moving(c) {
        this.cat = c;
    }
    Moving.prototype.update = function () {
        this.cat.move();
    };
    Moving.prototype.move = function () {
        this.cat.x += this.cat.leftSpeed;
        this.cat.x = this.cat.x - this.cat.leftSpeed + this.cat.rightSpeed;
        this.cat.y = this.cat.y - this.cat.upSpeed + this.cat.downSpeed;
        this.cat.div.style.transform = "translate(" + this.cat.x + "px, " + this.cat.y + "px)";
    };
    return Moving;
}());
//# sourceMappingURL=main.js.map