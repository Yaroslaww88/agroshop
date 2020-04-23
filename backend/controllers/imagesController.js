const path = require('path')

const ImagesService = require('../services/ImageService')
const imageService = new ImagesService(path.join(__dirname, '../images'))

const formidable = require('formidable');

exports.addImages = function saveFile(req, res, next) {
    const form = formidable({ multiples: true })
    let id = req.params.id

    // form.on('fileBegin', (filename, file) => {
    //     /**
    //      * @TODO fix path concatenation, because file path must be already in this.location
    //      */ 
    //     file.path = path.join(this.location, filename+'.png')
    // })
    // form.on('end', () => {
    //     console.log('resolved')
    //     resolve()
    // })
    // form.parse(req, (err, fields, files) => {
    //     if (err) {
    //         console.log('rejected')
    //         reject(err)
    //     } 
    // });

    // image = new Image("", "", path.join(__dirname, '../files'))

    // file.getFileFromForm(req, form).then(
    //     function onResolved() {
    //         res.status(200).send('File from form is saved')
    //         next()
    //     },
    //     function onRejected(err) {
    //         console.log(err)
    //         throw new Error('File from form is not saved', err)
    //     }
    // ).catch(e => {
    //     console.log(e)
    //     res.status(500).send(e)
    //     next(e)
    // })
}

    
        
    