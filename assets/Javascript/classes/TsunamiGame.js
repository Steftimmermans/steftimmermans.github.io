// Dit is voor de grafity dus dat mijn bolletje niet kan vliegen
const GRAVITY = 0.4;
      
      class TsunamiGame extends Game { 
            #player = null;
            #waves = [];
            // bij deze tiles weet ik niet waarom ik dit nodig heb maar als ik het verwijder is mijn spel weg vandaar.
            #tiles = [];
        
        
            constructor() { 
                super();
        
                //dit is voor de vloer die  for... is voor de eerste vloer die je ziet hier zijn dat allemaal kleine platformen tegen elkaar
                let floors = [];
                for (let i = 0; i < 20; ++i) {
                    floors.push(new TileFloor(i * 70, 382, 70, 35));
                }

                //dit is het eerste zwevende platform die je ziet
                floors.push(new TileFloor(700, 240, 70, 35));

                //dit zijn de zwevende platformen waar de coins op zijn
                floors.push(new TileFloor(1600, 240, 70, 35));
                floors.push(new TileFloor(1900, 240, 70, 35));
                floors.push(new TileFloor(2200, 240, 70, 35));

                floors.push(new TileFloor(2800, 382, 870, 35));

                floors.push(new TileFloor(3400, 240, 70, 35))

                //Dit is eigelijk een lijn die je niet ziet zodat als je van de blokken valt en je dood bent er game over komt
                floors.push(new TileFloor(2800, 440, 2870, 35));

                

                //dit is voor dat gat te krijgen bij het eerste platform
                let walls = [];
                for (let i = 0; i < 2; ++i) {
                    walls.push(new TileWall(700, 365 - (i * 70), 70));
                }
                
                // gewoon dat de coins spawnen
                let coins = [];
                coins.push(new Coin(1600, 210, 15))
                coins.push(new Coin(1900, 210, 15))
                coins.push(new Coin(2200, 210, 15))

                // dat de finish spawnt
                let Finishes = [];
                Finishes.push(new Finish(3300, 30, 15))
                
               // player en wave gemaakt waar die spawnen enzo
                this.#player = new Player(350, 300, 20, 20);
                this.#waves.push(new Wave(0, 300, 20, this.#player));

                
            }
        

            get Player() { 
            return this.#player; 
            }

             
            // waar mijn game begint 
            Update() { 
                translate(-this.Player.position.x + 210, 0);
                super.Update();
            }
           
        }

 
