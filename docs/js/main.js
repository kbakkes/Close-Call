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
    GameObject.prototype.move = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    GameObject.prototype.customMove = function (x, y) {
        this.div.style.transform = "translate(" + x + "px," + y + "px)";
    };
    GameObject.prototype.setX = function (x) {
        this.x = x;
    };
    GameObject.prototype.setY = function (y) {
        this.y = y;
    };
    GameObject.prototype.setWidth = function (w) {
        this.width = w;
    };
    GameObject.prototype.setHeight = function (h) {
        this.height = h;
    };
    return GameObject;
}());
var Ring;
(function (Ring) {
    var blackRing = (function (_super) {
        __extends(blackRing, _super);
        function blackRing(x, y, s) {
            var _this = _super.call(this) || this;
            s.subscribe(_this);
            _this.x = x;
            _this.y = y;
            _this.width = 20;
            _this.height = 20;
            _super.prototype.createDiv.call(_this, "blackRing");
            return _this;
        }
        blackRing.prototype.move = function () {
            this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        };
        blackRing.prototype.customMove = function (x, y) {
            this.div.style.transform = "translate(" + x + "px," + y + "px)";
        };
        blackRing.prototype.notify = function () {
            console.log("De kat beweegt ik moet wel opgepakt worden");
        };
        return blackRing;
    }(GameObject));
    Ring.blackRing = blackRing;
})(Ring || (Ring = {}));
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(x, y) {
        var _this = _super.call(this) || this;
        _this.observers = new Array();
        _this.facingLeft = false;
        _this.leftSpeed = 0;
        _this.rightSpeed = 0;
        _this.downSpeed = 0;
        _this.upSpeed = 0;
        _super.prototype.createDiv.call(_this, "cat");
        _this.speed = 4;
        _this.width = 146;
        _this.height = 128;
        _this.upKey = Keys.UP;
        _this.downKey = Keys.DOWN;
        _this.leftKey = Keys.LEFT;
        _this.rightKey = Keys.RIGHT;
        _this.behaviour = new Idle(_this, _this.observers);
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
    Cat.prototype.subscribe = function (o) {
        this.observers.push(o);
    };
    Cat.prototype.unsubscribe = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index);
    };
    return Cat;
}(GameObject));
var cat = function () {
    var meow = 'meow';
    return {
        talk: function () { return console.log(meow); }
    };
};
var SuperRing = (function (_super) {
    __extends(SuperRing, _super);
    function SuperRing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperRing.prototype.getColor = function () {
        return this.color;
    };
    return SuperRing;
}(GameObject));
var CustomRing = (function (_super) {
    __extends(CustomRing, _super);
    function CustomRing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = '';
        return _this;
    }
    CustomRing.prototype.amount = function () {
        return this.amount();
    };
    CustomRing.prototype.effect = function () {
        return 'lifes';
    };
    return CustomRing;
}(SuperRing));
var Ring;
(function (Ring) {
    var yellowRing = (function (_super) {
        __extends(yellowRing, _super);
        function yellowRing(x, y, s) {
            var _this = _super.call(this) || this;
            s.subscribe(_this);
            _this.x = x;
            _this.y = y;
            _this.width = 20;
            _this.height = 20;
            _super.prototype.createDiv.call(_this, "yellowRing");
            return _this;
        }
        yellowRing.prototype.move = function () {
            this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        };
        yellowRing.prototype.notify = function () {
            console.log("De kat beweegt ik moet wel opgepakt worden");
        };
        return yellowRing;
    }(GameObject));
    Ring.yellowRing = yellowRing;
})(Ring || (Ring = {}));
var RingFactory = (function () {
    function RingFactory() {
        this.createCustomRing = function (ring, array, s) {
            var color = ring.getColor();
            var x = Math.floor(Math.random() * 880) + 100;
            var y = Math.floor(Math.random() * 880) + 100;
            ring.createDiv(color);
            ring.setY(y);
            ring.setX(x);
            ring.setWidth(20);
            ring.setHeight(20);
            ring.customMove(x, y);
            return ring;
        };
        this.createRings = function (array, color, amount, s) {
            for (var i = 0; i < amount; i++) {
                switch (color) {
                    case "yellow": {
                        var x = Math.floor(Math.random() * 880) + 100;
                        var y = Math.floor(Math.random() * 880) + 100;
                        var ring = new Ring.yellowRing(x, y, s);
                        ring.move();
                        return ring;
                    }
                    case "black": {
                        var x = Math.floor(Math.random() * 880) + 100;
                        var y = Math.floor(Math.random() * 880) + 100;
                        var ring = new Ring.blackRing(x, y, s);
                        ring.move();
                        return ring;
                    }
                }
            }
        };
    }
    return RingFactory;
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
    Utils.ringCatColission = function (obj1X, obj1Y, obj2X, obj2Y) {
        if (obj1X < obj2X + 146 &&
            obj1X + 45 > obj2X &&
            obj1Y < obj2Y + 128 &&
            45 + obj1Y > obj2Y) {
            console.log("colission");
            return true;
        }
    };
    Utils.makeGreenRings = function (arr, loops, s) {
        for (var i = 0; i < loops; i += 1) {
            var x = Math.floor(Math.random() * 880) + 100;
            var y = Math.floor(Math.random() * 880) + 100;
            arr.push(new Ring.greenRing(x, y, s));
        }
    };
    Utils.makeSuperRings = function (color, array, loops, s) {
        var ringFactory = new RingFactory();
        for (var i = 0; i < loops; i += 1) {
            array.push(ringFactory.createRings(array, color, loops, s));
        }
    };
    Utils.makeCustomRing = function (ring, array, s) {
        var ringFactory = new RingFactory();
        array.push(ringFactory.createCustomRing(ring, array, s));
    };
    Utils.makeRedRings = function (arr, loops, s) {
        for (var i = 0; i < loops; i += 1) {
            var x = Math.floor(Math.random() * 880) + 100;
            var y = Math.floor(Math.random() * 800) + 100;
            arr.push(new Ring.redRing(x, y, s));
        }
    };
    Utils.removeFromGame = function (go, arr) {
        go.div.remove();
        var i = arr.indexOf(go);
        if (i != -1) {
            arr.splice(i, 1);
        }
    };
    return Utils;
}());
var Ring;
(function (Ring) {
    var greenRing = (function (_super) {
        __extends(greenRing, _super);
        function greenRing(x, y, s) {
            var _this = _super.call(this) || this;
            s.subscribe(_this);
            _this.x = x;
            _this.y = y;
            _this.width = 20;
            _this.height = 20;
            _super.prototype.createDiv.call(_this, "greenRing");
            return _this;
        }
        greenRing.prototype.move = function () {
            this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        };
        greenRing.prototype.notify = function () {
            console.log("De kat beweegt ik moet niet opgepakt worden");
        };
        return greenRing;
    }(GameObject));
    Ring.greenRing = greenRing;
})(Ring || (Ring = {}));
var Ring;
(function (Ring) {
    var redRing = (function (_super) {
        __extends(redRing, _super);
        function redRing(x, y, s) {
            var _this = _super.call(this) || this;
            s.subscribe(_this);
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
        redRing.prototype.notify = function () {
            console.log("De kat beweegt ik moet wel opgepakt worden");
        };
        return redRing;
    }(GameObject));
    Ring.redRing = redRing;
})(Ring || (Ring = {}));
var Start = (function (_super) {
    __extends(Start, _super);
    function Start(x, y, s) {
        var _this = _super.call(this) || this;
        s.subscribe(_this);
        _this.x = x;
        _this.y = y;
        _this.width = 200;
        _this.height = 30;
        _this.startDiv = document.getElementById("start");
        _super.prototype.createDiv.call(_this, "start");
        return _this;
    }
    Start.prototype.move = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Start.prototype.notify = function () {
        console.log("Zodra de speler beweegt gaat de start message weg");
        this.startDiv.innerHTML = "";
    };
    return Start;
}(GameObject));
var LevelsCollection = (function () {
    function LevelsCollection() {
        this.items = [];
    }
    LevelsCollection.prototype.getItems = function () {
        return this.items;
    };
    LevelsCollection.prototype.getCount = function () {
        return this.items.length;
    };
    LevelsCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    LevelsCollection.prototype.getIterator = function () {
        return new LevelsIterator(this);
    };
    LevelsCollection.prototype.getReverseIterator = function () {
        return new LevelsIterator(this, true);
    };
    return LevelsCollection;
}());
var Level = (function () {
    function Level(redrings, greenrings) {
        this.redrings = redrings;
        this.greenrings = greenrings;
    }
    Level.prototype.getRedRings = function () {
        return this.redrings;
    };
    Level.prototype.getGreenRings = function () {
        return this.greenrings;
    };
    return Level;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.ringFactory = new RingFactory();
        this.greenRings = new Array();
        this.redRings = new Array();
        this.blackrings = [];
        this.yellowrings = [];
        this.customRings = [];
        this.levels = new LevelsCollection();
        this.iterator = this.levels.getIterator();
        this.score = 0;
        this.lifes = 3;
        this.cat = new Cat(5, 200);
        window.addEventListener("keydown", function (event) { return _this.cat.behaviour.onKeyDown(event); });
        window.addEventListener("keyup", function (event) { return _this.cat.behaviour.onKeyUp(event); });
        Utils.makeSuperRings('black', this.blackrings, 2, this.cat);
        Utils.makeSuperRings('yellow', this.yellowrings, 2, this.cat);
        var myRing = new CustomRing();
        myRing = new AddTwoLifes(myRing);
        myRing = new WhiteRing(myRing);
        var myRing2 = new CustomRing();
        myRing2 = new PurpleRing(myRing2);
        myRing2 = new AddThreeScore(myRing2);
        this.levels.addItem(new Level(12, 4));
        this.levels.addItem(new Level(16, 6));
        this.levels.addItem(new Level(20, 8));
        this.levels.addItem(new Level(0, 0));
        var currentLevel = this.iterator.current();
        console.log('dit zijn de levels: ', this.levels);
        Utils.makeCustomRing(myRing, this.customRings, this.cat);
        Utils.makeCustomRing(myRing2, this.customRings, this.cat);
        Utils.makeGreenRings(this.greenRings, currentLevel.getGreenRings(), this.cat);
        Utils.makeRedRings(this.redRings, currentLevel.getRedRings(), this.cat);
        this.start = new Start(500, 50, this.cat);
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
                lifesDiv.innerHTML = "Lives: " + this.lifes;
            }
        }
        for (var i = 0; i < this.redRings.length; i++) {
            this.redRings[i].move();
            if (Utils.checkColission(this.cat, this.redRings[i])) {
                Utils.removeFromGame(this.redRings[i], this.redRings);
                this.score++;
                console.log('aantal rode ringen: ', this.redRings.length);
                console.log('aantal groene ringen: ', this.greenRings.length);
                console.log('current leven is: ', this.iterator.current());
                var scoreDiv = document.getElementById("score");
                scoreDiv.innerHTML = "Score: " + this.score;
            }
        }
        if (this.redRings.length == 0) {
            console.log('Door naar het volgende level: ', this.iterator.current());
            console.log(this.iterator.valid());
            this.iterator.next();
            var currentLevel = this.iterator.current();
            Utils.makeRedRings(this.redRings, currentLevel.getRedRings(), this.cat);
            for (var i = 0; i < this.greenRings.length; i++) {
                Utils.removeFromGame(this.greenRings[i], this.greenRings);
                this.score += 1;
            }
            Utils.makeGreenRings(this.greenRings, currentLevel.getGreenRings(), this.cat);
        }
        if (this.blackrings.length === 0) {
            Utils.makeSuperRings('black', this.blackrings, 2, this.cat);
        }
        if (this.yellowrings.length === 0) {
            Utils.makeSuperRings('yellow', this.yellowrings, 2, this.cat);
        }
        for (var i = 0; i < this.blackrings.length; i++) {
            if (Utils.checkColission(this.cat, this.blackrings[i])) {
                Utils.removeFromGame(this.blackrings[i], this.blackrings);
                this.score -= 5;
                this.lifes -= 1;
                var scoreDiv = document.getElementById("score");
                scoreDiv.innerHTML = "Score: " + this.score;
            }
        }
        for (var i = 0; i < this.customRings.length; i++) {
            var effect = this.customRings[i].effect();
            var amount = this.customRings[i].amount();
            if (Utils.checkColission(this.cat, this.customRings[i])) {
                if (effect == 'lifes') {
                    this.lifes += amount;
                    var lifesDiv = document.getElementById("lifes");
                    lifesDiv.innerHTML = "Lives: " + this.lifes;
                }
                else if (effect == 'score') {
                    this.score += amount;
                    var scoreDiv = document.getElementById("score");
                    scoreDiv.innerHTML = "Score: " + this.score;
                }
                Utils.removeFromGame(this.customRings[i], this.customRings);
            }
        }
        for (var i = 0; i < this.yellowrings.length; i++) {
            if (Utils.checkColission(this.cat, this.yellowrings[i])) {
                Utils.removeFromGame(this.yellowrings[i], this.yellowrings);
                this.score += 5;
            }
        }
        if (this.lifes <= 0) {
            dead = true;
            var endDiv = document.getElementById("gameover");
            endDiv.innerHTML = "Game Over<br>Score: " + this.score;
            TweenLite.to(endDiv, 2, { ease: SlowMo.ease.config(0.7, 0.7, false), y: 400 });
        }
        if (this.iterator.current().getRedRings() == 0 && this.iterator.current().getGreenRings() == 0) {
            console.log(this.iterator.current());
            dead = true;
            var endDiv = document.getElementById("gameover");
            endDiv.innerHTML = "All Levels Completed! <br>Score: " + this.score;
            TweenLite.to(endDiv, 2, { ease: SlowMo.ease.config(0.7, 0.7, false), y: 400 });
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
    var g = Game.getInstance();
});
var Idle = (function () {
    function Idle(c, o) {
        this.cat = c;
    }
    Idle.prototype.update = function () {
    };
    Idle.prototype.onKeyDown = function (event) {
        this.cat.behaviour = new Moving(this.cat);
        for (var _i = 0, _a = this.cat.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.notify();
        }
        console.log("behaviour verandert naar moving");
    };
    Idle.prototype.onKeyUp = function (event) {
    };
    Idle.prototype.move = function () {
        this.cat.upSpeed = this.cat.downSpeed = this.cat.leftSpeed = this.cat.rightSpeed = 0;
    };
    return Idle;
}());
var LevelsIterator = (function () {
    function LevelsIterator(collection, reverse) {
        if (reverse === void 0) { reverse = false; }
        this.position = 0;
        this.reverse = false;
        this.collection = collection;
        this.reverse = reverse;
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
    LevelsIterator.prototype.rewind = function () {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    };
    LevelsIterator.prototype.current = function () {
        return this.collection.getItems()[this.position];
    };
    LevelsIterator.prototype.key = function () {
        return this.position;
    };
    LevelsIterator.prototype.next = function () {
        var item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    };
    LevelsIterator.prototype.valid = function () {
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.collection.getCount();
    };
    return LevelsIterator;
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
var RingOptions = (function (_super) {
    __extends(RingOptions, _super);
    function RingOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RingOptions;
}(SuperRing));
var AddTwoLifes = (function (_super) {
    __extends(AddTwoLifes, _super);
    function AddTwoLifes(superRing) {
        var _this = _super.call(this) || this;
        _this.decoratedRing = superRing;
        return _this;
    }
    AddTwoLifes.prototype.getColor = function () {
        return this.decoratedRing.getColor();
    };
    AddTwoLifes.prototype.effect = function () {
        return 'lifes';
    };
    AddTwoLifes.prototype.amount = function () {
        return 2;
    };
    return AddTwoLifes;
}(RingOptions));
var AddThreeScore = (function (_super) {
    __extends(AddThreeScore, _super);
    function AddThreeScore(superRing) {
        var _this = _super.call(this) || this;
        _this.decoratedRing = superRing;
        return _this;
    }
    AddThreeScore.prototype.getColor = function () {
        return this.decoratedRing.getColor();
    };
    AddThreeScore.prototype.effect = function () {
        return 'score';
    };
    AddThreeScore.prototype.amount = function () {
        return 3;
    };
    return AddThreeScore;
}(RingOptions));
var AddFourLifes = (function (_super) {
    __extends(AddFourLifes, _super);
    function AddFourLifes(superRing) {
        var _this = _super.call(this) || this;
        _this.decoratedRing = superRing;
        return _this;
    }
    AddFourLifes.prototype.getColor = function () {
        return this.decoratedRing.getColor();
    };
    AddFourLifes.prototype.effect = function () {
        return 'lifes';
    };
    AddFourLifes.prototype.amount = function () {
        return 10;
    };
    return AddFourLifes;
}(RingOptions));
var PurpleRing = (function (_super) {
    __extends(PurpleRing, _super);
    function PurpleRing(superRing) {
        var _this = _super.call(this) || this;
        _this.decoratedRing = superRing;
        return _this;
    }
    PurpleRing.prototype.getColor = function () {
        return 'purple';
    };
    PurpleRing.prototype.effect = function () {
        return this.decoratedRing.effect();
    };
    PurpleRing.prototype.amount = function () {
        return this.decoratedRing.amount();
    };
    return PurpleRing;
}(RingOptions));
var WhiteRing = (function (_super) {
    __extends(WhiteRing, _super);
    function WhiteRing(superRing) {
        var _this = _super.call(this) || this;
        _this.decoratedRing = superRing;
        return _this;
    }
    WhiteRing.prototype.getColor = function () {
        return 'white';
    };
    WhiteRing.prototype.effect = function () {
        return this.decoratedRing.effect();
    };
    WhiteRing.prototype.amount = function () {
        return this.decoratedRing.amount();
    };
    return WhiteRing;
}(RingOptions));
var Keys;
(function (Keys) {
    Keys[Keys["UP"] = 87] = "UP";
    Keys[Keys["DOWN"] = 83] = "DOWN";
    Keys[Keys["LEFT"] = 65] = "LEFT";
    Keys[Keys["RIGHT"] = 68] = "RIGHT";
})(Keys || (Keys = {}));
//# sourceMappingURL=main.js.map