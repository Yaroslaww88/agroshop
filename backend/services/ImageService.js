const fs = require('fs')

module.exports = class ImageService {
    constructor(dirname) {
        this.folder = dirname

        this.addImages = this.addImages.bind(this)
        this.getAllImages = this.getAllImages.bind(this)
        this.getAllImagesByID = this.getAllImagesByID.bind(this)
    }

    async addImages(images) {

    }

    async getAllImages() {
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