class Finish extends GameObject{

    constructor(x, y, size){
        super(x, y, size, size);
    }

    Update(){

        // de kleur en vorm van de finish
         fill(200, 200, 30)
        rect(0, 0, 20, 100 );
    }


    // als je dichtbij de finish komt dan heb je gewonnen
    Overlap(otherObject){
        if(otherObject instanceof Player){
            this.remove(); 
            alert("!!!!!!YOU WON!!!!!!");
        }
       
    }

}