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

    public upKeyPressed : boolean = false;
    public downKeyPressed : boolean = false;
    public leftKeyPressed : boolean = false;
    public rightKeyPressed : boolean = false;

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
       
       // Deze behaviour staat nu op moving, maar als je de switch tussen idle en moving hebt gemaakt dan zal deze behaviour op idle moeten beginnen.
       this.behaviour = new Moving(this);


        // startpositie
         this.x = 100;
         this.y = 220;
       
        
   
  
        
   

       
    }

    public move():void {

        this.behaviour.move();
        
        
   
        
    
        // maakt de kat aan
        this.div.style.transform ="translate("+this.x +"px,"+this.y+"px)";
    } 



}