const fs = require('fs')
const path = require('path')

module.exports = class File {
    /**
     * 
     * @param {String} filename 
     * @param {String} content 
     * @param {Path} location 
     */
    constructor(filename, content, location) {
        this.filename = filename
        this.content = content
        this.location = location
        
        this.saveFile = this.saveFile.bind(this)
        this.printContent = this.printContent.bind(this)
        this.getFileFromForm = this.getFileFromForm.bind(this)
    }

    /**
     * @TODO remove req from arguments
     */
    getFileFromForm(req, form) {
        return new Promise((resolve, reject) => {
            try {
                form.on('fileBegin', (filename, file) => {
                    /**
                     * @TODO fix path concatenation, because file path must be already in this.location
                     */ 
                    file.path = path.join(this.location, filename+'.png')
                })
                form.on('end', () => {
                    console.log('resolved')
                    resolve()
                })
                form.parse(req, (err, fields, files) => {
                    if (err) {
                        console.log('rejected')
                        reject(err)
                    } 
                });
            } catch (err) {
                console.log('rejected')
                reject(err)
            }
        })
        
    }

    saveFile() {
        try {
            const data = fs.writeFileSync(this.location, this.content)
        } catch (err) {
            console.error(err)
        }
    }

    printContent() {
        const data = fs.readFileSync(this.location)
        console.log('Printed: ', data)
    }
}