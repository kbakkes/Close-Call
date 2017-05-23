class Idle implements Behaviour{
    public cat:Cat
    
    


    constructor(c:Cat){
        this.cat= c;

        window.addEventListener("keydown", (event:KeyboardEvent) => this.onKeyDown(event));
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(event));

    }

        update(){

        }

        onKeyDown(event){
            var x = event.which || event.keyCode;
           
            
            console.log(x);
            // Verschillende functies voor als er op WASD wordt ingedrukt. 
             switch (x){
            case this.cat.upKey:
            this.cat.upSpeed = 5;
            console.log("W");
            this.cat.y -= this.cat.upSpeed;
            break;
            
            case this.cat.downKey:
            this.cat.downSpeed = 5;
            console.log("S");
            this.cat.y += this.cat.downSpeed;
            break;

            case this.cat.leftKey:
            this.cat.leftSpeed = 5;
            console.log("A");
            this.cat.x -= this.cat.leftSpeed;
            this.cat.div.style.backgroundImage = "url('images/catRight.png')";  
            break;

            case this.cat.rightKey:
            this.cat.rightSpeed = 5;
            console.log("D");
            this.cat.x += 10;
            this.cat.div.style.backgroundImage = "url('images/cat.png')";  
           
           
            break;
        }

 
            
    }
    // wanneer een van de WASD toetsen wordt losgelaten gaat de speed weer naar 0 
    onKeyUp(event){
        this.cat.upSpeed = this.cat.downSpeed = this.cat.leftSpeed = this.cat.rightSpeed = 0;
    }


        move():void{
        this.cat.x = this.cat.x - this.cat.leftSpeed + this.cat.rightSpeed;
        this.cat.y = this.cat.y - this.cat.upSpeed + this.cat.downSpeed;
        this.cat.div.style.transform = "translate("+this.cat.x+"px, "+this.cat.y+"px)";
            
            
        
        }



}