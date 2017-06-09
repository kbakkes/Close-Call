class Idle implements Behaviour{
    public cat:Cat
    
    


    constructor(c:Cat){
        this.cat= c;
    }

        update(){

        }

        onKeyDown(event){
            // In deze functie zou je iets kunnen maken om de behaviour van de cat aan te passen als er een toets ingedrukt wordt.

            this.cat.behaviour = new Moving(this.cat);
            console.log("behaviour verandert naar moving");
        }

 
    onKeyUp(event){
        
    }


        move():void{
            this.cat.upSpeed = this.cat.downSpeed = this.cat.leftSpeed = this.cat.rightSpeed = 0;
        }
}