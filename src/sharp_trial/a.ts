const sharp = require('sharp');

// .toColourspace('b-w')

// sharp('image.png')
//     .resize(50,50)
//     // .rotate(90)
//     .toFile('logo.png', (err, info) => {
//         console.log(`error:${JSON.stringify(err)} info:${JSON.stringify(info)}`);
//     });

sharp('plasma.png')
    .flatten( { background: '#ff6600' } )
    .composite([{ input: 'logo.png', gravity: 'southeast' }])
    .sharpen()
    .withMetadata()
    .toFile('output.png', (err, info) => {
        console.log(`error:${JSON.stringify(err)} info:${JSON.stringify(info)}`);
    });
