
class GameObject {

   
    protected div:HTMLElement;
    protected x:number;
    protected y:number;


                        
    constructor() {
        this.x = 0; 
        this.y = 0;
    }

    public createDiv(divname){

        let container:HTMLElement = document.getElementById("container"); // haalt element op
        this.div = document.createElement(divname);
        container.appendChild(this.div);
    }

}