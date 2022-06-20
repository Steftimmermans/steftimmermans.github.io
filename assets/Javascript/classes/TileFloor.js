class TileFloor extends Tile {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }
//gewoon dat je grond hebt
    Update() {
        // weer de vorm
        rect(0, 0, this.width, this.height);  
    }
}