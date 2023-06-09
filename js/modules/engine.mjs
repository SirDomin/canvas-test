import {Box} from "./box.mjs";

export class Engine {

    constructor(canvas) {
        this.canvas = canvas;
        this.boxes = [
            new Box(10, 10, 20, 100),
            new Box(0, 400, 100, 100)
        ]
    }

    render() {
        this.canvas.clear();

        this.boxes.forEach(box => {
            this.canvas.drawBox(box);
        })
    }

    update() {
        const collision = this.boxes[1].checkCollision(this.boxes[0]);
        if (!collision) {
            this.boxes[0].moveDown();

        }
    }

    moveBoxLeft() {
        this.boxes[1].x -= this.boxes[1].speed;
    }

    moveBoxRight() {
        this.boxes[1].x += this.boxes[1].speed;
    }
}