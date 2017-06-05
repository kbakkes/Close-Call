/// <reference path="gameObject.ts"/>

class greenRing extends GameObject{

    public x: number;
    public y: number;
    public width:number;
    public height:number;

    constructor(x:number,y:number){  
        super();

        this.x = x;
        this.y = y;

            // image afmetingen
            this.width = 50;
            this.height = 50;

        super.createDiv("greenRing");

    }


    public move():void{
        this.div.style.transform ="translate("+this.x +"px,"+this.y+"px)";
        
    }

  
   






}