class Ground extends Tile {
    constructor(x, y, size) {
        super(x, y, size, size / 2);
    }
//gewoon dat je grond hebt
    Update() {
        rect(0, 0, this.width, this.height);

        if (this.animation)
            this.animation.draw(0, this.height / 2);
    }
}