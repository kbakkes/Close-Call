/// <reference path="wheel.ts"/>
/// <reference path="gameObject.ts"/>

class Car extends GameObject {

    protected speed:number;
    private braking:boolean;
    protected width:number;
    private game:Game;
    private wheel1: Wheel;
    private wheel2:Wheel;

            
    constructor(x:number,y:number) {
        super();

        super.createDiv("car");
        this.speed = 4;

    this.x = x;
         this.y = y;


        this.wheel1 = new Wheel(this.x,this.y);
        this.wheel2 = new Wheel(20,100);

        
   
         window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));

         

         this.width =  145;
       

   
            
        this.move();
    }

    public move():void {
   
        
        // laat de auto rijden.
        if(this.speed > 0){ 
            this.x += this.speed;
        }

        // als er op de knop gedrukt wordt dan word braking true, en gaat deze if statement in werking.
        if(this.braking == true) { 
            this.speed = 0; 
        }



       
        // tekenen
        this.div.style.transform ="translate("+this.x +"px,"+this.y+"px)";
    } 

 public onKeyDown(e:KeyboardEvent){
     console.log("key down");
     this.braking = true;
 }

 public getX():number{ 
     return this.x; 
 }

public getWidth():number{ 
    return this.width
}
 public brake(){
     this.speed = 0; 
 }

}