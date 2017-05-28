class Moving implements Behaviour{
    public cat:Cat

    constructor(c:Cat){
        this.cat= c;

    }

        update(){
                this.cat.move();
        }

    // wanneer een van de WASD toetsen wordt losgelaten gaat de speed weer naar 0 

        move():void{
        this.cat.x += this.cat.leftSpeed;
        this.cat.x = this.cat.x - this.cat.leftSpeed + this.cat.rightSpeed;
        this.cat.y = this.cat.y - this.cat.upSpeed + this.cat.downSpeed;
        this.cat.div.style.transform = "translate("+this.cat.x+"px, "+this.cat.y+"px)";  
        
        }
}