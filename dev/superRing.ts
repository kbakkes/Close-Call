abstract class SuperRing extends GameObject {
    public color: string;

    public getColor(): string{
        return this.color;
    }

    public abstract effect(): string;

    public abstract amount():number;
    
}