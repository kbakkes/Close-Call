class Moving implements Behaviour{
    cat:Cat
    


    constructor(c:Cat){
        this.cat= c;
        
    }


        update(){
        }

        move():void{ 
                this.cat.x = this.cat.x - this.cat.leftSpeed + this.cat.rightSpeed;
                this.cat.y = this.cat.y - this.cat.upSpeed + this.cat.downSpeed;
        }

        onKeyUp(event){
                // Alle speeds worden hier nog gereset naar 0 omdat je nog geen gebruik maakt van de idle behaviour.
                // Als je de idle behaviour gefixt hebt dan kan je daar deze speed reset in plaatsen.
                this.cat.upSpeed = this.cat.downSpeed = this.cat.leftSpeed = this.cat.rightSpeed = 0;


                // In deze functie zou je iets kunnen maken om de behaviour weer terug te veranderen naar idle als ALLE toetsen zijn losgelaten.

                // this.cat.behaviour = new Idle(this.cat);
                // console.log("behaviour verandert naar idle");
        }


        onKeyDown(event){
                var x = event.which || event.keyCode;
           
            
            // console.log(x);
            // Verschillende functies voor als er op WASD wordt ingedrukt. 
             switch (x){
            case this.cat.upKey:
            this.cat.upSpeed = 5;
            this.cat.y -= this.cat.upSpeed;
            break;
            
            case this.cat.downKey:
            this.cat.downSpeed = 5;
            // console.log("S");
            this.cat.y += this.cat.downSpeed;
            break;

            case this.cat.leftKey:
            this.cat.leftSpeed = 5;
            // console.log("A");
            this.cat.x -= this.cat.leftSpeed;
            // facingLeft laten veranderen zodat de cat weet dat hij moet omdraaien.
            this.cat.facingLeft = true;
            break;

            case this.cat.rightKey:
            this.cat.rightSpeed = 5;
            // console.log("D");
            this.cat.x += 10;
            // facingLeft laten veranderen zodat de cat weet dat hij moet omdraaien.
            this.cat.facingLeft = false;
            break;
        }
        }
}