/// <reference path="gameObject.ts"/>

class Rock extends GameObject {

    private speed:number;
    protected width:number;
    
                        
    constructor() {
        super();
        
        super.createDiv("rock");
      

        this.speed = 10;
        this.move();
        
        this.x = 490;
        this.y = 210;

        this.width = 62; 
    }

    public move():void {
        
        // speed optellen zo lang we niet de bodem raken
        // speed wordt hoger dan 0 zodra de auto de rots raakt
        
        //teken de div op de juiste positie
        this.div.style.transform ="translate("+this.x +"px,"+this.y+"px)";     
    }


    public getX():number{ 
        return this.x; 
    }
    public getWidth():number{
        return this.width;
    }

    public fall(){
       
            this.y += this.speed;
        if(this.y >= 600){
            this.speed = 0;
        }
    }


}