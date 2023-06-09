import {Canvas} from "./modules/canvas.mjs";
import {Engine} from "./modules/engine.mjs";

const container = document.createElement('div')
container.classList.add('canvas-container');
document.body.appendChild(container);

const canvas = new Canvas(container);

const engine = new Engine(canvas);

function main() {
    engine.render();
    engine.update();

    requestAnimationFrame(main);
}

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 37) {
        engine.moveBoxLeft();
    }
    if (e.keyCode === 39) {
        engine.moveBoxRight();

    }
});



main();