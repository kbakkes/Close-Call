
 /// <reference path="gameObject.ts"/>
namespace Ring{
    export class blackRing extends GameObject implements Observer{

    public x: number;
    public y: number;
    public width:number;
    public height:number;

    constructor(x:number,y:number,s:Subject){  
        super();
        s.subscribe(this);
        this.x = x;
        this.y = y;

            // image afmetingen
            this.width = 20;
            this.height = 20;

        super.createDiv("blackRing");

    }


    public move():void{
        this.div.style.transform ="translate("+this.x +"px,"+this.y+"px)";
    }

    public notify(){ 
     console.log("De kat beweegt ik moet wel opgepakt worden");
    }



}

}
