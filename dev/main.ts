/// <reference path="cat.ts"/>
/// <reference path="util.ts"/>


class Game {

    private cat : Cat;
   
    public static instance:Game;
    
    private score: number = 0;

    constructor() {
        this.cat = new Cat(5,200);
        
        
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.cat.move();
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