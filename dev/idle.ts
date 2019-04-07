class Idle implements Behaviour{
    public cat:Cat;
    
    
    


    constructor(c:Cat, o:Array<any>){
        this.cat= c;
    }

        update(){

        }

        onKeyDown(event){
            // if the cat moves then the rings will be notified
            this.cat.behaviour = new Moving(this.cat);
             for (let o of this.cat.observers){
             o.notify();
    }
            
            console.log("behaviour verandert naar moving");
        }

 
    onKeyUp(event){
        
    }


        move():void{
            this.cat.upSpeed = this.cat.downSpeed = this.cat.leftSpeed = this.cat.rightSpeed = 0;
        }
}