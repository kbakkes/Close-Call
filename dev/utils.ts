/// <reference path="game.ts"/>
/// <reference path="cat.ts"/>
/// <reference path="ringFactory.ts"/>






class Utils{


     /**
     * checks if there is colission between 2 gameobjects
     */
    public static checkColission(obj1:GameObject, obj2:GameObject) {
        if (obj1.getX() < obj2.getX() + obj2.getWidth() &&
        obj1.getX() + obj1.getWidth() > obj2.getX() &&
        obj1.getY() < obj2.getY() + obj2.getHeight() &&
        obj1.getHeight() + obj1.getY() > obj2.getY() ) {
            console.log("colission");

            return true; 
                }
        }

        /**
        * checks if there is colission between a cat and rings
        * Notice: First object Needs to be the ring
        */
        public static ringCatColission(obj1X,obj1Y,obj2X,obj2Y) {
            if (obj1X < obj2X + 146 &&
            obj1X + 45 > obj2X &&
            obj1Y < obj2Y + 128 &&
            45 + obj1Y > obj2Y ) {
                console.log("colission");
    
                return true; 
                    }
            }

        //this.width = 146;
        // this.height = 128;

    /**
     * make a green ring instance and pushes it into the array
     */
        public static makeGreenRings( arr:Array<any>, loops:number,s:Subject){
              for (let i=0; i<loops; i+=1) {
            let x = Math.floor(Math.random() * 880) + 100
            let y = Math.floor(Math.random() * 880) + 100
            arr.push(new Ring.greenRing(x,y,s));
            }
        }


        public static makeSuperRings(color:string,array:Array<any>,loops:number,s:Subject){
            let ringFactory = new RingFactory();

            for (let i=0; i<loops; i+=1) {
                let x = Math.floor(Math.random() * 880) + 100
                let y = Math.floor(Math.random() * 880) + 100
                array.push(ringFactory.createRings(array,color,loops,s))
                }
        }


   /**
     * make a red ring instance and pushes it into the array
     */
        public static makeRedRings( arr:Array<any>, loops:number, s:Subject){
            for (let i=0; i<loops; i+=1) {
            let x = Math.floor(Math.random() * 880) + 100
            let y = Math.floor(Math.random() * 800) + 100
            arr.push(new Ring.redRing(x,y,s));
    }
        }

    /**
     * deletes an item from the array, then removes the div 
     */
    public static removeFromGame(go:GameObject, arr:Array<any>){
        go.div.remove();
        let i:number = arr.indexOf(go);
        if(i != -1) {
            arr.splice(i, 1);
        }
    }

}

