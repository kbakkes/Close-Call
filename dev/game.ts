/// <reference path="cat.ts"/>
/// <reference path="utils.ts"/>
/// <reference path="greenRing.ts"/>
/// <reference path="redRing.ts"/>
/// <reference path="start.ts"/>
/// <reference path="greensock.d.ts"/>
/// <reference path="ringFactory.ts"/>
/// <reference path="blackRing.ts"/>
/// <reference path="superRing.ts"/>
/// <reference path="levelsCollection.ts"/>
/// <reference path="level.ts"/>

class Game {

    ringFactory = new RingFactory()
    private cat : Cat;
    public start:Start;
    private greenRings: Array<Ring.greenRing> = new Array<Ring.greenRing>();
    private redRings: Array<Ring.redRing> = new Array<Ring.redRing>();

    public static instance:Game;
    blackrings = [];
    yellowrings = [];
    customRings = [];

            // Iterator
            public levels = new LevelsCollection();
            public iterator = this.levels.getIterator();
        

    private score: number = 0;
    private lifes: number = 3;

    constructor() {
        this.cat = new Cat(5,200);
        
        // Keyboard event listeners nu hier neergezet zodat ze maar 1 keer worden aangemaakt.
        window.addEventListener("keydown", (event:KeyboardEvent) => this.cat.behaviour.onKeyDown(event));
        window.addEventListener("keyup", (event:KeyboardEvent) => this.cat.behaviour.onKeyUp(event));
        
        Utils.makeSuperRings('black',this.blackrings,2,this.cat);  
        Utils.makeSuperRings('yellow',this.yellowrings,2,this.cat);



        // decorator 
        let myRing = new CustomRing();
        myRing = new PlusTwoLifes(myRing);
        myRing = new WhiteRing(myRing);
        myRing = new PlusThreeScore(myRing);

        let myRing2 = new CustomRing();
        myRing2 = new PurpleRing(myRing2);
        myRing2 = new PlusTwoLifes(myRing2);

        this.levels.addItem(new Level(12,4));
        this.levels.addItem(new Level(16,6));
        this.levels.addItem(new Level(20,8));
        

        //endgame
        this.levels.addItem(new Level(0,0));

        let currentLevel = this.iterator.current();


        

        console.log('dit zijn de levels: ', this.levels);

  
        // oude code vanaf hier
        Utils.makeCustomRing(myRing,this.customRings,this.cat);
        Utils.makeCustomRing(myRing2,this.customRings,this.cat);
        
       Utils.makeGreenRings(this.greenRings,currentLevel.getGreenRings(),this.cat);
       Utils.makeRedRings(this.redRings,currentLevel.getRedRings(),this.cat);


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

            console.log('aantal rode ringen: ',this.redRings.length);
            console.log('aantal groene ringen: ',this.greenRings.length);
            console.log('current leven is: ', this.iterator.current());
            
            let scoreDiv = document.getElementById("score");
            scoreDiv.innerHTML = "Score: " + this.score;
            }
        }

        if(this.redRings.length == 0){
             // level iterator next 
             console.log('Door naar het volgende level: ',this.iterator.current());
             console.log(this.iterator.valid());
             this.iterator.next();
             


            let currentLevel = this.iterator.current();

            Utils.makeRedRings(this.redRings,currentLevel.getRedRings(),this.cat);
            for(let i = 0; i<this.greenRings.length; i++){
                Utils.removeFromGame(this.greenRings[i], this.greenRings);
                this.score += 1;
            }
            Utils.makeGreenRings(this.greenRings,currentLevel.getGreenRings(),this.cat);
        }


        if(this.blackrings.length === 0){
            Utils.makeSuperRings('black',this.blackrings,2,this.cat);
        }

        if(this.yellowrings.length === 0){
            Utils.makeSuperRings('yellow',this.yellowrings,2,this.cat);
        }

        for(let i=0; i<this.blackrings.length; i++){
            if(Utils.checkColission(this.cat, this.blackrings[i])){
                Utils.removeFromGame(this.blackrings[i], this.blackrings);
                this.score -=5;
                this.lifes -=1;
                let scoreDiv = document.getElementById("score");
                scoreDiv.innerHTML = "Score: " + this.score;
            }
        }

        for(let i=0; i<this.customRings.length; i++){
            let effect = this.customRings[i].effect();
            let amount = this.customRings[i].amount();

            if(Utils.checkColission(this.cat, this.customRings[i])){
                if(effect == 'lifes'){
                 this.lifes += amount;

                let lifesDiv = document.getElementById("lifes");
                lifesDiv.innerHTML = "Lives: " + this.lifes;
                }
                else if(effect == 'score'){
                    this.score += amount

                let scoreDiv = document.getElementById("score");
                scoreDiv.innerHTML = "Score: " + this.score;
                }
                Utils.removeFromGame(this.customRings[i], this.customRings);
            }
        }
        


        for(let i=0; i<this.yellowrings.length; i++){
            if(Utils.checkColission(this.cat, this.yellowrings[i])){
                Utils.removeFromGame(this.yellowrings[i], this.yellowrings);
                this.score +=5;
            }
        }        

        // Als levens 0 zijn dan wordt het game over scherm getoont en met een TweenLite animatie naar het midden gebracht
        if(this.lifes <= 0){
            dead = true;
             let endDiv = document.getElementById("gameover");
             endDiv.innerHTML = "Game Over<br>Score: "+ this.score;
             TweenLite.to(endDiv, 2, { ease: SlowMo.ease.config(0.7, 0.7, false), y: 400});
            
        }




        // als levels aan het einde is game afsluiten.
        
        if(this.iterator.current().getRedRings() == 0 && this.iterator.current().getGreenRings() == 0  ){
            console.log(this.iterator.current());
            dead = true;
            let endDiv = document.getElementById("gameover");
             endDiv.innerHTML = "All Levels Completed! <br>Score: "+ this.score;
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


