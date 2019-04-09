/// <reference path="superRing.ts"/>


abstract class RingOptions extends SuperRing {
    decoratedRing: SuperRing;
    public abstract getColor():string;
    public abstract effect():string; 
    public abstract amount():number; 

}