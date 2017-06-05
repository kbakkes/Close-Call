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
        _this.facingLeft = false;
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
        if (this.facingLeft == true) {
            this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(-1)";
        }
        else {
            this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(1)";
        }
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
    Utils.makeGreenRings = function (arr, loops) {
        for (var i = 0; i < loops; i += 1) {
            var x = Math.floor(Math.random() * 900) + 100;
            var y = Math.floor(Math.random() * 900) + 100;
            arr.push(new greenRing(x, y));
        }
    };
    Utils.makeRedRings = function (arr, loops) {
        for (var i = 0; i < loops; i += 1) {
            var x = Math.floor(Math.random() * 900) + 100;
            var y = Math.floor(Math.random() * 900) + 100;
            arr.push(new redRing(x, y));
        }
    };
    Utils.removeFromGame = function (go, arr) {
        go.div.remove();
        var i = arr.indexOf(go);
        if (i != -1) {
            arr.splice(i, 1);
        }
    };
    Utils.gameOver = function () {
        var endDiv = document.getElementById("gameover");
        endDiv.innerHTML = "Game Over<br>Score: 0";
    };
    return Utils;
}());
var greenRing = (function (_super) {
    __extends(greenRing, _super);
    function greenRing(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = 50;
        _this.height = 50;
        _super.prototype.createDiv.call(_this, "greenRing");
        return _this;
    }
    greenRing.prototype.move = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return greenRing;
}(GameObject));
var redRing = (function (_super) {
    __extends(redRing, _super);
    function redRing(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = 20;
        _this.height = 20;
        _super.prototype.createDiv.call(_this, "redRing");
        return _this;
    }
    redRing.prototype.move = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return redRing;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.greenRings = new Array();
        this.redRings = new Array();
        this.score = 0;
        this.lifes = 3;
        this.cat = new Cat(5, 200);
        window.addEventListener("keydown", function (event) { return _this.cat.behaviour.onKeyDown(event); });
        window.addEventListener("keyup", function (event) { return _this.cat.behaviour.onKeyUp(event); });
        Utils.makeGreenRings(this.greenRings, 4);
        Utils.makeRedRings(this.redRings, 12);
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
        var dead = false;
        for (var i = 0; i < this.greenRings.length; i++) {
            this.greenRings[i].move();
            if (Utils.checkColission(this.cat, this.greenRings[i])) {
                Utils.removeFromGame(this.greenRings[i], this.greenRings);
                this.lifes -= 1;
                var lifesDiv = document.getElementById("lifes");
                lifesDiv.innerHTML = "Lifes: " + this.lifes;
            }
        }
        for (var i = 0; i < this.redRings.length; i++) {
            this.redRings[i].move();
            if (Utils.checkColission(this.cat, this.redRings[i])) {
                Utils.removeFromGame(this.redRings[i], this.redRings);
                this.score++;
                var scoreDiv = document.getElementById("score");
                scoreDiv.innerHTML = "Score: " + this.score;
            }
        }
        if (this.redRings.length == 0) {
            Utils.makeRedRings(this.redRings, 12);
            for (var i = 0; i < this.greenRings.length; i++) {
                Utils.removeFromGame(this.greenRings[i], this.greenRings);
                this.score += 1;
            }
            Utils.makeGreenRings(this.greenRings, 4);
        }
        if (this.lifes <= 0) {
            dead = true;
            Utils.gameOver();
        }
        if (!dead)
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
    };
    Moving.prototype.onKeyUp = function (event) {
        this.cat.upSpeed = this.cat.downSpeed = this.cat.leftSpeed = this.cat.rightSpeed = 0;
    };
    Moving.prototype.onKeyDown = function (event) {
        var x = event.which || event.keyCode;
        switch (x) {
            case this.cat.upKey:
                this.cat.upSpeed = 5;
                this.cat.y -= this.cat.upSpeed;
                break;
            case this.cat.downKey:
                this.cat.downSpeed = 5;
                this.cat.y += this.cat.downSpeed;
                break;
            case this.cat.leftKey:
                this.cat.leftSpeed = 5;
                this.cat.x -= this.cat.leftSpeed;
                this.cat.facingLeft = true;
                break;
            case this.cat.rightKey:
                this.cat.rightSpeed = 5;
                this.cat.x += 10;
                this.cat.facingLeft = false;
                break;
        }
    };
    return Moving;
}());
//# sourceMappingURL=main.js.map