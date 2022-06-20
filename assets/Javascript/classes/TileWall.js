class TileWall extends Tile {
    constructor(x, y, size) {
        super(x, y, size, size);
    }

    Update() {
        // de animation is gewoon zwart zodat het lijkt dat er een gat is
        if (this.animation)
            this.animation.draw(0, 0);
    }
}