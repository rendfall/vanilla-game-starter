import { GameLoop } from './engine';
import {Keyboard} from './engine/keyboard';

export class Game {
    loop = new GameLoop();
    keyboard = new Keyboard();

    constructor() {
        console.log('The game is ready.');

        this.setupKeyboard();
        this.setupLoop();
    }

    setupKeyboard() {
        this.keyboard.enable();
    }

    setupLoop() {
        this.loop.onUpdate(this.update);
        this.loop.onRedraw(this.redraw);
        this.loop.start();
    }

    update(deltaTime) {}

    redraw(deltaTime) {}
}
