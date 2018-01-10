import { loadImage } from './loaders';

export class SpriteSheet {
    image = null;
    width = null;
    height = null;

    constructor(name, src, width, height) {
        this.setupImage(src);

        this.width = width;
        this.height = height;
    }

    setupImage(src) {
        loadImage(src).then((image) => {
            this.image = image;
        });
    }
}
