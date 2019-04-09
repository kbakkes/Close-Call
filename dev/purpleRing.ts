/// <reference path="ringOptions.ts"/>


class PurpleRing extends RingOptions {
    decoratedRing: SuperRing;
        
    constructor(superRing:SuperRing){
        super();
    
        // Ring object
        this.decoratedRing = superRing;
    }
    
        public getColor(): string {
            return 'purple'
        }    

        // past geen effect aan dus return de value van de ring 
        public effect(): string {
            return this.decoratedRing.effect();
        }

         // past geen amount aan dus return de value van de ring 
        public amount():number{
            return this.decoratedRing.amount();
        }
    
        
    }