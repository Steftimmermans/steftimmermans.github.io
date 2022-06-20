class Tile extends GameObject {
    constructor(x, y, w, h) {
        super(x, y, w, h, true);
        // de vorm van de Tile
        this.setCollider("rectangle");
    }
}