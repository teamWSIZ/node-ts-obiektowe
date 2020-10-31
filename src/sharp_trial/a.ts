const sharp = require('sharp');

sharp('plasma.png')
    .rotate(5)
    .resize(320, 240)
    .toColourspace('b-w')
    .toFile('output.png', (err, info) => {
        console.log(`error:${JSON.stringify(err)} info:${JSON.stringify(info)}`);
    });

