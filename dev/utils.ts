/// <reference path="game.ts"/>
/// <reference path="cat.ts"/>

class Utils{

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
     * maakt een ring instance op een random plek aan en zet deze in de array
     */
        public static makeGreenRings( arr:Array<any>, loops:number,s:Subject){
              for (let i=0; i<loops; i+=1) {
            let x = Math.floor(Math.random() * 900) + 100
            let y = Math.floor(Math.random() * 900) + 100
            arr.push(new Ring.greenRing(x,y,s));
    }
        }


   /**
     * maakt een ring instance op een random plek aan en zet deze in de array
     */
        public static makeRedRings( arr:Array<any>, loops:number, s:Subject){
              for (let i=0; i<loops; i+=1) {
            let x = Math.floor(Math.random() * 900) + 100
            let y = Math.floor(Math.random() * 900) + 100
            arr.push(new Ring.redRing(x,y,s));
    }
        }



    /**
     * verwijder een item uit een array, en verwijder meteen het dom element uit de body
     */
    public static removeFromGame(go:GameObject, arr:Array<any>){
        go.div.remove();
        let i:number = arr.indexOf(go);
        if(i != -1) {
            arr.splice(i, 1);
        }
    }

public static gameOver(){
    let endDiv = document.getElementById("gameover");
    endDiv.innerHTML = "Game Over<br>Score: 0";

}



  


}

