// const path = require('path')

// const ImageService = require('../services/ImageService')
// let imageService = new ImageService(path.join(__dirname, '../images'))

// const formidable = require('formidable');

// exports.addImages = async function addImages(req, res, next) {
//     const form = formidable({ multiples: true })

//     let counter = 0

//     form.on('fileBegin', (filename, file) => {
//         file.path = path.join(__dirname, `../images/${filename}_${counter}.png`)
//         counter++
//     })

//     form.parse(req, (err, fields, files) => {
//         if (err) {
//             next(err)
//             return
//         } else {
//             req.body = JSON.parse(fields.product)
//             imageService.addImages(id, files)
//             next()
//         }
//     });  
// }

    
        
    