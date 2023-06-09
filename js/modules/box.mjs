export class Box {
    x;
    y;
    w;
    h;
    speed;
    color;

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = 'red';
        this.speed = 2;
    }

    moveRight() {
        if (this.x > 490) {
            this.speed = -this.speed;
        }
        if (this.x < 10) {
            this.speed = -this.speed;
        }
        this.x += this.speed;
    }

    moveDown() {
        if (this.y + this.h + this.speed > 500) {
            return;
        }
        this.y += this.speed;
    }

    checkCollision(object) {
        return (
            this.y + this.h > object.y &&
            this.y < object.y + object.h &&
            this.x + this.w > object.x &&
            this.x < object.w + object.x
        )
    }
}