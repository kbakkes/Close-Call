/// <reference path="car.ts"/>
/// <reference path="rock.ts"/>

class Game {

    private car : Car;
    private rock : Rock;
    
    constructor() {
        this.car = new Car(0,220);
        this.rock = new Rock();
        
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.car.move();
        this.rock.move();
        this.colissionCheck();
        
        

        requestAnimationFrame(() => this.gameLoop());
        
    }

    public endGame(){
        document.getElementById("score").innerHTML = "Score : 0";
    }
    

public colissionCheck(){ 
    
  
  
    if(this.car.getX() > this.rock.getX() - this.car.getWidth() ){
        console.log("colission");
        this.car.brake();
        this.rock.fall();


    }
    
    
}


} 


// load
window.addEventListener("load", function() {
    new Game();
});