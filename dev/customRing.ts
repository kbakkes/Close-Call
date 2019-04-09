/// <reference path="superRing.ts"/>


class CustomRing extends SuperRing {

    public color = '';

    amount(): number{
        return this.amount();
    }

    effect(): string{
        return 'lifes'; 
    }
}