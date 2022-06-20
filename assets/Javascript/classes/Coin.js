class Coin extends GameObject{

    constructor(x, y, size){
        super(x, y, size, size);
    }

    Update(){

        //vorm van de coin
         fill(255,215,0)
        circle(0, 0, this.width);
    }

    //als je het overlapt verdwijnt het
    Overlap(otherObject){
        if(otherObject instanceof Player){
            this.remove();  
        }
       
    }

}