const fs = require('fs')
const path = require('path')
const utils = require('../utils/removeDirSync')

module.exports = class ImageService {
    /**
     * 
     * @param {Path} dirname 
     */
    constructor(dirname) {
        this.dir = dirname

        this.addImages = this.addImages.bind(this)
        this.getAllImages = this.getAllImages.bind(this)
        this.getAllImagesByID = this.getAllImagesByID.bind(this)
    }

    /**
     * 
     * @param {Integer} id 
     * @param {Array<Object>} images 
     */
    addImages(id, images) {
        if (!(Number.isInteger(id))) {
            console.log(id)
            throw new Error('id param must be an Integer in ImageService/addImages, given id of type: ', typeof id, ' with value: ', id)
        }

        try {
            let newDirPath = path.join(this.dir, id.toString())
            if (!fs.existsSync(newDirPath)) {
                fs.mkdirSync(newDirPath)
            }

            let counter = 0

            for (let key in images) {
                console.log('images get', images)
                let image = images[key]
                let oldPath = image.path
                let newPath = path.join(newDirPath, `${id}_${counter}.png`)
                fs.renameSync(oldPath, newPath)
            }
        } catch(err) {
            throw err
        }
    }

    deleteAllImagesByID(id) {
        if (!(Number.isInteger(id))) {
            console.log(id)
            throw new Error('id param must be an Integer in ImageService/deleteImagesByID, given id of type: ', typeof id, ' with value: ', id)
        }

        try {
            let dirPath = path.join(this.dir, id.toString())
            utils.removeImagesDirSync(dirPath)
        } catch(err) { 
            throw err
        }
    }

    getAllImages() {
        return new Promise((resolve, reject) => {
            fs.readdir(this.folder, (err, files) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(files)
                }
            })
        })
    }

    async getAllImagesByID(id) {
        try {
            let files = await this.getAllImages()
            files.forEach(file => {
                console.log(file)
            })
        } catch(err) {
            console.log(err)
        }
    }
}