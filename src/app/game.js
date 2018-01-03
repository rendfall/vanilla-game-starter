import { GameLoop } from './engine';

export class Game {
    loop = null;

    constructor() {
        console.log('The game is ready.');
        this.setupLoop();
    }

    setupLoop() {
        this.loop = new GameLoop();
        this.loop.onUpdate(this.update);
        this.loop.start();
    }

    update(deltaTime) {}
}
