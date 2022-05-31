class Player extends GameObject { 
    #moveDirection = null;
     #jumpsLeft = 1;
    #jumped = false;
    
    constructor(x, y, size) { 
        super(x, y, size, size, true);
        this.#moveDirection = createVector(0, 0);
        this.setCollider("circle", 0, 0, this.width/8);
    
    //deze code hieronder is voor de animatie in te laden
        loadJSON(
    
            "karakters/character_maleAdventurer_sheet.json",
    
                (allFrames) => {
    
            let frames = [];
            let spritesheet = null;   
            let animation = null;
    
            frames = [
                allFrames[0]
                 ];
    
            spritesheet = loadSpriteSheet('karakters/character_maleAdventurer_sheet.png', frames);
    
            animation = loadAnimation(spritesheet);
    
            this.addAnimation("adventurer_idle", animation);
    
    
    
            frames = [
    
                allFrames[24],
    
                allFrames[25]
            ];
    
            spritesheet = loadSpriteSheet('karakters/character_maleAdventurer_sheet.png', frames);
    
            animation = loadAnimation(spritesheet);
    
            animation.frameDelay = 100;
    

            
            this.addAnimation("adventurer_walk", animation);

            frames = [
    
                allFrames[10]
    
            ];
    
            spritesheet = loadSpriteSheet('karakters/character_maleAdventurer_sheet.png', frames);
    
            animation = loadAnimation(spritesheet);
    
            animation.frameDelay = 100;
    
            this.addAnimation("adventurer_jump", animation);
            this.changeAnimation("adventurer_idle");


         });


    
    
        }
    
        get MoveDirection(){
            return this.#moveDirection;
        }
        Update() { 
    
            this.#moveDirection.x = 0;
            this.#moveDirection.y = 0;

             if (this.#jumpsLeft < 1) {
                 this.changeAnimation("adventurer_jump");
             }
            if (this.velocity.x < 0.1 && this.velocity.x > -0.1) {
                this.changeAnimation("adventurer_idle");
                
            }
            else if (this.velocity.x != 0) {
                this.changeAnimation("adventurer_walk");
            }
            if (this.animation)
                this.animation.draw(0, 0);
    
            this.setSpeed(this.velocity.y + GRAVITY, 90);
            this.#jumped = false;
    
           
            if (keyIsDown(LEFT_ARROW) === true) {
                this.#moveDirection.x = -5;
                this.addSpeed(5, 180);
            }
            if (keyIsDown(RIGHT_ARROW) === true) {
                this.#moveDirection.x = 5;
                this.addSpeed(5, 0);
                
            }
               
            if (keyIsDown(UP_ARROW) === true && this.#jumpsLeft > 0) {
                this.#moveDirection.y = -5;
                this.setSpeed(12, -90);
                this.#jumpsLeft--;
                this.#jumped = true;
                
            }
        
            this.position = p5.Vector.add(this.position, this.#moveDirection);
    
            if (this.animation)
                this.animation.draw(0, 0);
                if (this.#moveDirection.magSq()== 0){

                    this.setSpeed(0);
        
        
        
                }
                else{
                    let angle = this.#moveDirection.heading();
        
                angle = degrees(angle);
                this.setSpeed(0, angle)
                }
        }

        Overlap(otherObjects){
            if(otherObjects instanceof Wave){
                this.remove();
            }
        }
    
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
    }