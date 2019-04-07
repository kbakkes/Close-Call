/// <reference path="cat.ts"/>
/// <reference path="utils.ts"/>
/// <reference path="greenRing.ts"/>
/// <reference path="redRing.ts"/>
/// <reference path="start.ts"/>
/// <reference path="greensock.d.ts"/>
/// <reference path="ringFactory.ts"/>
/// <reference path="blackRing.ts"/>


class Game {

    ringFactory = new RingFactory()
    private cat : Cat;
    public start:Start;
    private greenRings: Array<Ring.greenRing> = new Array<Ring.greenRing>();
    private redRings: Array<Ring.redRing> = new Array<Ring.redRing>();

    public static instance:Game;
    blackrings = [];
    yellowrings = [];

    private score: number = 0;
    private lifes: number = 3;

    constructor() {
        this.cat = new Cat(5,200);
        
        // Keyboard event listeners nu hier neergezet zodat ze maar 1 keer worden aangemaakt.
        window.addEventListener("keydown", (event:KeyboardEvent) => this.cat.behaviour.onKeyDown(event));
        window.addEventListener("keyup", (event:KeyboardEvent) => this.cat.behaviour.onKeyUp(event));
        
        Utils.makeSuperRings('black',this.blackrings,3,this.cat);
        console.log(this.blackrings);
       Utils.makeGreenRings(this.greenRings,4,this.cat);
       Utils.makeRedRings(this.redRings,12,this.cat);
       this.start = new Start(500,50,this.cat); 

    
        requestAnimationFrame(() => this.gameLoop());
    }

        // if there is no game instance a new one is made
        public static getInstance(){
        if(Game.instance == null){
            Game.instance = new Game();
        }
        return Game.instance;
    }



    // this loops while the game is active
    private gameLoop(){
        this.cat.move();
        let dead = false; 

        console.log(this.blackrings);
            for(let i=0; i<this.greenRings.length; i++){
            this.greenRings[i].move();
            if(Utils.checkColission(this.cat,this.greenRings[i])){
                Utils.removeFromGame(this.greenRings[i],this.greenRings);
                
                // show lives 
                this.lifes-= 1;
                let lifesDiv = document.getElementById("lifes");
                lifesDiv.innerHTML = "Lives: " + this.lifes;
            } 
        }


        // makes redrings, if colission is detected then score adds up by 1
        for(let i=0; i<this.redRings.length; i++){
            this.redRings[i].move();
            if(Utils.checkColission(this.cat,this.redRings[i])){
            Utils.removeFromGame(this.redRings[i],this.redRings);
            
            // add score
            this.score ++
            let scoreDiv = document.getElementById("score");
            scoreDiv.innerHTML = "Score: " + this.score;
            }
        }

        if(this.redRings.length == 0){
            Utils.makeRedRings(this.redRings,12,this.cat);
            for(let i = 0; i<this.greenRings.length; i++){
                Utils.removeFromGame(this.greenRings[i], this.greenRings);
                this.score += 1;
            }
            Utils.makeGreenRings(this.greenRings,4,this.cat);
        }


        if(this.blackrings.length === 0){
            Utils.makeSuperRings('black',this.blackrings,3,this.cat);
        }

        for(let i=0; i<this.blackrings.length; i++){
            if(Utils.checkColission(this.cat, this.blackrings[i])){
                Utils.removeFromGame(this.blackrings[i], this.blackrings);
                this.score -=5;
                this.lifes -=1;
            }
        }

  
        


        // colission met blackrings checken;
        

        // Als levens 0 zijn dan wordt het game over scherm getoont en met een TweenLite animatie naar het midden gebracht
        if(this.lifes <= 0){
            dead = true;
             let endDiv = document.getElementById("gameover");
             endDiv.innerHTML = "Game Over<br>Score: "+ this.score;
             TweenLite.to(endDiv, 2, { ease: SlowMo.ease.config(0.7, 0.7, false), y: 400});
             
        }
        
        if(!dead) requestAnimationFrame(() => this.gameLoop());
        
    }


   

    public endGame(){
        document.getElementById("score").innerHTML = "Score : 0";
    }
    

}

// load
window.addEventListener("load", function() {
   let g = Game.getInstance();
})


