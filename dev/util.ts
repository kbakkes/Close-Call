/// <reference path="gameObject.ts"/>

class Util{
    
    constructor(){

        
    }
 



    public checkColission(obj1:GameObject, obj2:GameObject):Boolean{
        if (obj1.getX() < obj2.getX() + obj2.getWidth() &&
        obj1.getX() + obj1.getWidth() > obj2.getX() &&
        obj1.getY() < obj2.getY() + obj2.getHeight() &&
        obj1.getHeight() + obj1.getY() > obj2.getY() ) {
            
            return true; 
                }
        }

}

