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

    // Nieuwe variabele om de cat mee te laten draaien met de movement. Zie de move() functie van de cat.
    public facingLeft : boolean = false;

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
        

        // Ik maak hier nu gebruik van de facingLeft variabele om de cat om te draaien met scaleX().
        // Dit is een manier om een plaatje om te draaien zonder dat je een gespiegeld nieuw plaatje hoeft in de laden.
        // Scheelt dus in performance en zorgt er voor dat je cat niet gaan "flikkeren" tijdens het omdraaien.
        if(this.facingLeft == true){
            this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) scaleX(-1)";
        }
        else{
            this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) scaleX(1)";
        }
    } 



}