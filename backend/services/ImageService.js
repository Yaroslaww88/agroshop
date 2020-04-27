const fs = require('fs')
const path = require('path')
const utils = require('../utils/removeDirSync')
const { v4: uuidv4 } = require('uuid');

module.exports = class ImageService {
    /**
     * 
     * @param {Path} dirname 
     */
    constructor(dirname) {
        this.dir = dirname

        this.addImages = this.addImages.bind(this)
        this.deleteAllImagesByID = this.deleteAllImagesByID.bind(this)
        this.deleteCertainImagesByID = this.deleteCertainImagesByID.bind(this)
        this.updateImagesByID = this.updateImagesByID.bind(this)
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

            for (let key in images) {
                console.log('ImageService/addImages images get', images)
                let image = images[key]
                let oldPath = image.path
                let newPath = path.join(newDirPath, `${id}_${uuidv4()}.png`)
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

    /**
     * 
     * @param {Integer} id 
     * @param {String} imagesToDelete filenames of images to delete 
     */
    deleteCertainImagesByID(id, filenamesToDelete) {
        try {
            let dir = path.join(this.dir, id.toString())
           
            for (let filename of filenamesToDelete) {
                console.log('ImageService/deleteCertainImagesByID', filename)
                fs.unlinkSync(path.join(dir, filename))
            }
        } catch(err) {
            throw err
        }
    }

    /**
     * 
     * @param {Integer} id id of image to update
     * @param {File} newImages images to add
     * @param {String} filenamesToDelete filenames of images to delete 
     */
    updateImagesByID(id, newImages, filenamesToDelete) {
        try {
            console.log('ImageService/updateImagesByID', id, newImages, filenamesToDelete)
            this.addImages(id, newImages)
            this.deleteCertainImagesByID(id, filenamesToDelete)
        } catch(err) {
            throw err
        }
    }
}