/// <reference path="cat.ts"/>
/// <reference path="utils.ts"/>
/// <reference path="ring.ts"/>

class Game {

    private cat : Cat;
    private rings: Array<Ring> = new Array<Ring>();

    public static instance:Game;
    
    private score: number = 0;
x
    constructor() {
        this.cat = new Cat(5,200);

        // Keyboard event listeners nu hier neergezet zodat ze maar 1 keer worden aangemaakt.
        window.addEventListener("keydown", (event:KeyboardEvent) => this.cat.behaviour.onKeyDown(event));
        window.addEventListener("keyup", (event:KeyboardEvent) => this.cat.behaviour.onKeyUp(event));
        
        // maakt meerdere ringen aan en zet deze in de array. 
        for (let i=0; i<12; i+=1) {
        let x = Math.floor(Math.random() * 900) + 100
        let y = Math.floor(Math.random() * 900) + 100
        this.rings.push(new Ring(x,y));
    }
    
        requestAnimationFrame(() => this.gameLoop());
    }

        // als er geen game instance is word deze aangemaakt
        public static getInstance(){
        if(Game.instance == null){
            Game.instance = new Game();
        }
        return Game.instance;
    }

    private gameLoop(){
        this.cat.move();

        for(let i=0; i<12; i++){
            Utils.checkColission(this.cat,this.rings[i]);
            this.rings[i].move();
        }
        requestAnimationFrame(() => this.gameLoop());
        
    }



    public endGame(){
        document.getElementById("score").innerHTML = "Score : 0";
    }
    

}

// load
window.addEventListener("load", function() {
   let g = new Game();
});