class TileWall extends Tile {
    constructor(x, y, size) {
        super(x, y, size, size);
    }

    Update() {
        if (this.animation)
            this.animation.draw(0, 0);
    }
}