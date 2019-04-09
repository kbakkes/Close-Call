    class Level{

    public redrings: number;
    public greenrings: number;

    constructor(redrings:number,greenrings:number){  
        this.redrings = redrings;
        this.greenrings = greenrings;
    }


    public getRedRings():number{
        return this.redrings;        
    }

    public getGreenRings():number{
        return this.greenrings;        
    }


}
