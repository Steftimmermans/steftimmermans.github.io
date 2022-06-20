class Player extends GameObject { 
    
    #jumpsLeft = 1;
   #jumped = false;
   
   constructor(x, y, size) { 
       super(x, y, size, size, true);
       }

        Update() { 
           // gewoon de kleur en je circle en hoe groot de circle is
           fill(200, 0, 0)
           circle(0, 0, 30);
           
           //velocity is voor de zwaartekracht zodat je niet met peiltje omhoog gewoon kan vliegen
           if (this.#jumpsLeft < 1) {
           }
           else if (this.velocity.x < 0.1 && this.velocity.x > -0.1) {   
           }
           else if (this.velocity.x != 0) {
           }
       

           this.setSpeed(this.velocity.y + GRAVITY, 90);
           this.#jumped = false;
   
           // zodat je kan bewegen
           if (keyIsDown(LEFT_ARROW) === true) {
               this.addSpeed(5, 180);
           }
           if (keyIsDown(RIGHT_ARROW) === true) {
               this.addSpeed(5, 0);
           }
               
           if (keyWentDown(UP_ARROW) === true && this.#jumpsLeft > 0) {
               this.setSpeed(12, -90);
               this.#jumpsLeft--;
               this.#jumped = true;
           }
           
           
       }

       // zodat je niet door de vloer gaat
       Collide(other) {
           if (other instanceof TileFloor) {
               if (this.#jumped === false) {
                   this.#jumpsLeft = 1;
               }
   
               if (this.velocity.y > 0) {
                   this.velocity.y = 0;
               }
           }
       }

       // als de golf over u gaat ben je dood en er komt ook gelijk game over
       Overlap(otherObject){
           if(otherObject instanceof Wave){
               this.remove();
               alert("GAME OVER")
           }
       }
    }