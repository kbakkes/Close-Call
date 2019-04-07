/// <reference path="yellowRing.ts"/>
/// <reference path="blackRing.ts"/>



class RingFactory {

createRings = (array:Array<any>,color:string, amount:number,s:Subject) => {

    for(let i=0; i < amount; i++){
        switch(color){
            case "yellow":{
                let x = Math.floor(Math.random() * 880) + 100;
                let y = Math.floor(Math.random() * 880) + 100;
                let ring = new Ring.yellowRing(x,y,s);
                ring.move();
                return ring;
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


