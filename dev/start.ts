/// <reference path="gameObject.ts"/>

    class Start extends GameObject implements Observer{

    public x: number;
    public y: number;
    public width:number;
    public height:number;
    public startDiv ;

    constructor(x:number,y:number,s:Subject){  
        super();
        s.subscribe(this);
        this.x = x;
        this.y = y;
      

            // image afmetingen
            this.width = 200;
            this.height = 30;

             this.startDiv = document.getElementById("start");

            super.createDiv("start");

    }


    public move():void{
        this.div.style.transform ="translate("+this.x +"px,"+this.y+"px)";
    }

    public notify(){ 
     console.log("StartMessage verwijderen observer pattern test");
     this.startDiv.innerHTML = "";
    }



}


