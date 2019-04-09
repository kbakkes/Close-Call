
class GameObject {

   
    public div:HTMLElement;
    protected x:number;
    protected y:number;
    protected width:number;
    protected height:number;


                        
    constructor() {
        this.x = 0; 
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }

    public createDiv(divname){

        let container:HTMLElement = document.getElementById("container"); // haalt element op
        this.div = document.createElement(divname);
        container.appendChild(this.div);
    }

    public getX():number{ 
        return this.x; 
    }

    public getY():number{
        return this.y;
    }

    public getWidth():number{
        return this.width;
    }
    public getHeight():number{
        return this.height;
    }

    public delete(){
        
    }

    public move():void{
        this.div.style.transform ="translate("+this.x +"px,"+this.y+"px)";
    }

    public customMove(x,y):void{
        this.div.style.transform ="translate("+x+"px,"+y+"px)";
    }


    // setters
    public setX(x){
        this.x = x;
    }
    public setY(y){
        this.y = y;
    }
    public setWidth(w){
        this.width = w;
    }
    public setHeight(h){
        this.height = h;
    }
}
