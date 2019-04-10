/// <reference path="yellowRing.ts"/>
/// <reference path="blackRing.ts"/>
/// <reference path="superRing.ts"/>




class RingFactory {

// Custom Ring Functie
createCustomRing = (ring:SuperRing,array:Array<any>, s:Subject) => {
    let color = ring.getColor();
            let x = Math.floor(Math.random() * 880) + 100;
            let y = Math.floor(Math.random() * 880) + 100;

            ring.createDiv(color);
            ring.setY(y);
            ring.setX(x);
            ring.setWidth(20);
            ring.setHeight(20);
            ring.customMove(x,y);
        return ring;
}


// Afhankelijk van welke kleur wordt er een yellow of black ring gemaakt. 
createRings = (array:Array<GameObject>,color:string, amount:number,s:Subject) : GameObject => {
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
    }
}
}

