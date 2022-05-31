
 const GRAVITY = 0.4;

        class TsunamiGame extends Game { 
            #player = null;
            #waves = [];
            #tiles = [];
            #backgroundImages = [];
        
        
            constructor() { 
                super();
        
                let floors = [];
                for (let i = 0; i < 20; ++i) {
                    floors.push(new Ground(i * 70, 382, 70));
                }
                floors.push(new Ground(700, 240, 70));
                
                
                let walls = [];
                for (let i = 0; i < 2; ++i) {
                    walls.push(new TileWall(700, 365 - (i * 70), 70));
                }
        
        
                this.#tiles = floors.concat(walls);
        
                loadJSON("karakters/tiles.json", allFrames => {
                    let frames = [];
                    let spritesheet = null;
                    let animation = null;
        
                    frames = [
                        allFrames[90]
                    ];
                    spritesheet = loadSpriteSheet('karakters/tiles.png', frames);
                    animation = loadAnimation(spritesheet);
        
                    floors.forEach(tile => { 
                        tile.addAnimation("floor", animation);
                        tile.changeAnimation("floor");
                    });
        
                    frames = [
                        allFrames[88]
                    ];
                    spritesheet = loadSpriteSheet('karakters/tiles.png', frames);
                    animation = loadAnimation(spritesheet);
                    
                    walls.forEach(tile => { 
                        tile.addAnimation("floor", animation);
                        tile.changeAnimation("floor");
                    });
                });
        
                this.#backgroundImages.push(loadImage("karakters/background.png"))
         
        
                this.#player = new Player(150, 300, 20, 20);
                this.#waves.push(new Wave(0, 300, 40, this.#player));
            }
        
            get Player() { 
            return this.#player;
            }
        
            
           
        }
