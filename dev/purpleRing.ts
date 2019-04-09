/// <reference path="ringOptions.ts"/>


class PurpleRing extends RingOptions {
    decoratedRing: SuperRing;
        
    constructor(superRing:SuperRing){
        super();
    
        this.decoratedRing = superRing;
    }
    
        public getColor(): string {
            return 'purple'
        }    
        public effect(): string {
            return this.decoratedRing.effect();
        }
    
        public amount():number{
            return this.decoratedRing.amount();
        }
    
        
    }