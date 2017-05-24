/// <reference path="cat.ts"/>
/// <reference path="utils.ts"/>
/// <reference path="ring.ts"/>

class Game {
    public static instance:Game;

    private cat : Cat;
    private rings: Array<Ring> = new Array<Ring>();
    private utils:Utils;
    
    private score: number;

    constructor() {
        this.cat = new Cat(5,200);
        this.utils = new Utils();
        this.score = 0;
        
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
            this.utils.checkColission(this.cat,this.rings[i]);
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
   let g = Game.getInstance();
});