/// <reference path="car.ts"/>
/// <reference path="gameObject.ts"/>

class Wheel extends GameObject {
                        
    constructor(x:number,y:number) {
        super();
        super.createDiv("wheel");
        this.y = y;
        this.x = x;

        this.div.style.transform ="translate("+x+"px, "+y+"px)";
    }
}