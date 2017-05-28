/// <reference path="gameObject.ts"/>

class Cat extends GameObject {


    public behaviour:Behaviour; 
    public speed:number;    

    public x: number;
    public y: number;
    public width:number;
    public height:number;

    public upKey : number;
    public downKey : number;
    public leftKey : number;
    public rightKey : number;

    public leftSpeed : number = 0;
    public rightSpeed : number = 0;
    public downSpeed : number = 0;
    public upSpeed : number = 0;

            
    constructor(x:number,y:number) {
        super();

        super.createDiv("cat");
        this.speed = 4;
        

        // image afmetingen
        this.width = 146;
        this.height = 128;
        
      
        // Keyboard Unicodes
        this.upKey = 87;
        this.downKey = 83;
        this.leftKey = 65;
        this.rightKey = 68;
       
       this.behaviour = new Moving(this);


        // startpositie
         this.x = 100;
         this.y = 220;
       
       window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        

       
    }

    onKeyDown(event:KeyboardEvent){
           
            // Verschillende functies voor als er op WASD wordt ingedrukt. 
             switch (event.keyCode){
            case this.upKey:
            this.upSpeed = 5;
            console.log("W");
            this.y -= this.upSpeed;
            break;
            
            case this.downKey:
            this.downSpeed = 5;
            console.log("S");
            this.y += this.downSpeed;
            break;

            case this.leftKey:
            this.speed = 5;
            console.log("A");
            this.x -= this.speed;
            this.div.style.backgroundImage = "url('images/catRight.png')";   // de kat draait de juiste richting
            break;

            case this.rightKey:
            this.rightSpeed = 5;
            console.log("D");
            this.x += this.rightSpeed;
            this.div.style.backgroundImage = "url('images/cat.png')";   // de kat draait de juiste richting
            break;
        }
    }

    public move():void {

        
        
        
   
        
    
        // maakt de kat aan
        this.div.style.transform ="translate("+this.x +"px,"+this.y+"px)";
    } 



}