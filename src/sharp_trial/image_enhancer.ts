/**
 * Przykad wrappera na bibliotekę/bibliotece `sharp`
 */
export class ImageEnhancer {
    sharp = require('sharp');

    set_width(source_file: string, output_file: string, width: number) {
        this.sharp(source_file)
            .resize(width)
            // .rotate(90)
            .toFile(output_file, (err, info) => {
                console.log(`error:${JSON.stringify(err)} info:${JSON.stringify(info)}`);
            });
    }

    rotate_clockwise(source_file: string, output_file: string) {
        this.sharp(source_file)
            .rotate(90)
            .toFile(output_file, (err, info) => {
                console.log(`error:${JSON.stringify(err)} info:${JSON.stringify(info)}`);
            });
    }

    add_logo(source_file: string, output_file: string) {
        this.sharp(source_file)
            .flatten({background: '#ff6600'})
            .composite([{input: 'logo.png', gravity: 'southeast'}])
            .sharpen()
            .withMetadata()
            .toFile(output_file, (err, info) => {
                console.log(`error:${JSON.stringify(err)} info:${JSON.stringify(info)}`);
            });
    }

}

let enhancer = new ImageEnhancer();

// enhancer.set_width('image.png', 'narrowed_image.png', 250);
// enhancer.rotate_clockwise('image.png', 'rotated_image.png');
// enhancer.add_logo('image.png', 'marked_image.png');


// Przykład batch-a który przekonwertuje wiele plików naraz
let todo = ['db.png', 'image.png', 'plasma.png']

//wykona te trzy operacje dla wszystkich ↑↑ obrazków
for (let img of todo) {
    enhancer.set_width(img, 'narrowed_' + img, 250);
    enhancer.rotate_clockwise(img, 'rotated_' + img);
    enhancer.add_logo(img, 'marked_' + img);
}

