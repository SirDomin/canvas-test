export class Canvas {
    constructor(element) {
        this.canvas = document.createElement('canvas');
        this.canvas.classList.add('canvas-main');
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.canvas.style.width = `500px`;
        this.canvas.style.height = `500px`;

        this.ctx = this.canvas.getContext('2d');

        element.appendChild(this.canvas);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    fillRect(x, y, w, h, color = 'black') {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);
    }

    drawBox(box) {
        this.fillRect(box.x, box.y, box.w, box.h, box.color);
    }
}