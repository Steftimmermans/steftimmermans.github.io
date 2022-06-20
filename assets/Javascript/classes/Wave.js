class Wave extends GameObject { 
    #player = null;
    #playerPos = null;

    constructor(x, y, size, player) { 
        super(x, y, size, size);

        //dat de follower (de wave) je speler zijn positie volgt
        this.#player = player;
        this.#playerPos = this.#player.position.copy();
    }

    get Player() { 
        return this.#player;
    }

    // ook weer te maken met het volgen van de player
    set PlayerPos(value) { 
        this.#playerPos = value;
    }

    Update() { 
        fill(0, 0, 255);

        rect(0, 0, 300, 800);

        // dit is zodat de wave weet waar de player is
        this.PlayerPos = this.Player.position.copy();

        let direction = p5.Vector.sub(this.#playerPos, this.position);

        let dirAngle = direction.heading();
     
        let dirAngleDegrees = degrees(dirAngle);
     
        this.setSpeed(5, dirAngleDegrees);

    }
}