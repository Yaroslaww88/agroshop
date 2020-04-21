const FileStorage = require('../db/FileStorage')
const fileStorage = new FileStorage()
const File = require('../db/File')
const path = require('path')

const formidable = require('formidable');

exports.saveFile = function saveFile(req, res, next) {
    const form = formidable({ multiples: true })

    file = new File("", "", path.join(__dirname, '../files'))

    file.getFileFromForm(req, form).then(
        function onResolved() {
            res.status(200).send('File from form is saved')
            next()
        },
        function onRejected(err) {
            console.log(err)
            throw new Error('File from form is not saved', err)
        }
    ).catch(e => {
        console.log(e)
        res.status(500).send(e)
        next(e)
    })
}

    
        
    