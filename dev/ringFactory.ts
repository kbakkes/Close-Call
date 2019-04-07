/// <reference path="star.ts"/>
/// <reference path="blackRing.ts"/>



class RingFactory {
    createRing = (color,s) => {
        let x = Math.floor(Math.random() * 880) + 100;
        let y = Math.floor(Math.random() * 880) + 100;

        switch(color){
            case "yellow":{
             let ring = new Ring.yellowRing(x,y,s);
             ring.move();
             return ring;
            }
            case "black":{
                let ring = new Ring.blackRing(x,y,s);
                return ring; 
               }
        }
    }

createRings = (array:Array<any>,color:string, amount:number,s:Subject) => {

    for(let i=0; i < amount; i++){
        switch(color){
            case "yellow":{
                let x = Math.floor(Math.random() * 880) + 100;
                let y = Math.floor(Math.random() * 880) + 100;
                let ring = new Ring.yellowRing(x,y,s);
                break;
            }
            case "black":{
                let x = Math.floor(Math.random() * 880) + 100;
                let y = Math.floor(Math.random() * 880) + 100;
                let ring = new Ring.blackRing(x,y,s);
                ring.move();
                return ring;
            }
        }
        return array; 
    }
}






}


