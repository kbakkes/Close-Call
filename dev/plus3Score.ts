/// <reference path="ringOptions.ts"/>


class PlusThreeScore extends RingOptions {
    decoratedRing: SuperRing;
        
    constructor(superRing:SuperRing){
        super();
    
        this.decoratedRing = superRing;
    }
    
        public getColor(): string {
            return this.decoratedRing.getColor();
            }    
        public effect(): string {
            return 'score'
        }
    
        public amount():number{
            return 3
        }
    
        
    }