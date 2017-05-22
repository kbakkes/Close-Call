/// <reference path="gameObject.ts"/>

class Ring extends GameObject{

    constructor(x:number,y:number){  
        super();

        this.x = x;
        this.y = y;

        super.createDiv("ring");

    }


    public move():void{
        this.div.style.transform ="translate("+this.x +"px,"+this.y+"px)";
    }







}