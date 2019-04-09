/// <reference path="ringOptions.ts"/>


class AddTwoLifes extends RingOptions {
decoratedRing: SuperRing;
    
constructor(superRing:SuperRing){
    super();

    this.decoratedRing = superRing;
}

    public getColor(): string {
        return this.decoratedRing.getColor();
        }    
    public effect(): string {
        return 'lifes'
    }

    public amount():number{
        return 2
    }

    
}