/// <reference path="cat.ts"/>
/// <reference path="utils.ts"/>
/// <reference path="greenRing.ts"/>
/// <reference path="redRing.ts"/>

class Game {

    private cat : Cat;
    private greenRings: Array<greenRing> = new Array<greenRing>();
    private redRings: Array<redRing> = new Array<redRing>();

    public static instance:Game;

    private score: number = 0;
    private lifes: number = 3;
    

    constructor() {
        this.cat = new Cat(5,200);

        // Keyboard event listeners nu hier neergezet zodat ze maar 1 keer worden aangemaakt.
        window.addEventListener("keydown", (event:KeyboardEvent) => this.cat.behaviour.onKeyDown(event));
        window.addEventListener("keyup", (event:KeyboardEvent) => this.cat.behaviour.onKeyUp(event));
        
        
       Utils.makeGreenRings(this.greenRings,4);
       Utils.makeRedRings(this.redRings,12);

    
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
        let dead = false; 

        for(let i=0; i<this.greenRings.length; i++){
            this.greenRings[i].move();
            if(Utils.checkColission(this.cat,this.greenRings[i])){
                Utils.removeFromGame(this.greenRings[i],this.greenRings);

                this.lifes-= 1;
                let lifesDiv = document.getElementById("lifes");
                lifesDiv.innerHTML = "Lifes: " + this.lifes;
            } 
        }


        // makes redrings, if colission is detected then score adds up by 1
        for(let i=0; i<this.redRings.length; i++){
            this.redRings[i].move();
            if(Utils.checkColission(this.cat,this.redRings[i])){
            Utils.removeFromGame(this.redRings[i],this.redRings);
            
            this.score ++
            let scoreDiv = document.getElementById("score");
            scoreDiv.innerHTML = "Score: " + this.score;
            }
        }

        if(this.lifes <= 0){
            dead = true;
            Utils.gameOver();
        }



        
        if(!dead) requestAnimationFrame(() => this.gameLoop());
        
    }



    public endGame(){
        document.getElementById("score").innerHTML = "Score : 0";
    }
    

}

// load
window.addEventListener("load", function() {
   let g = new Game();
});