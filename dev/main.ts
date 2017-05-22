/// <reference path="cat.ts"/>
/// <reference path="util.ts"/>
/// <reference path="ring.ts"/>

class Game {

    private cat : Cat;
    private rings: Array<Ring> = new Array<Ring>();
    private util:Util;
   
    public static instance:Game;
    
    private score: number = 0;

    constructor() {
        this.cat = new Cat(5,200);
        this.util = new Util();
        
        for (let i=0; i<12; i+=1) {
        let x = Math.floor(Math.random() * 900) + 100
        let y = Math.floor(Math.random() * 900) + 100
        this.rings.push(new Ring(x,y));
    }
    
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.cat.move();

        for(let i=0; i<12; i++){
            this.util.checkColission(this.cat,this.rings[i]);
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