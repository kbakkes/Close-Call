/// <reference path="ringOptions.ts"/>


class WhiteRing extends RingOptions {
    decoratedRing: SuperRing;
        
    constructor(superRing:SuperRing){
        super();
    
        this.decoratedRing = superRing;
    }
    
        public getColor(): string {
            return 'white'
        }    
        public effect(): string {
            return this.decoratedRing.effect();
        }
    
        public amount():number{
            return this.decoratedRing.amount();
        }
    
        
    }