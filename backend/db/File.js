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
        if (location === path.basename(location))
            this.location = location
        else
            this.location = path.join(__dirname, location)

        this.saveFile = this.saveFile.bind(this)
        this.printContent = this.printContent.bind(this)
        this.getFileFromForm = this.getFileFromForm.bind(this)
    }

    //TODO: remove req from arguments
    getFileFromForm(req, form) {
        try {
            form.on('fileBegin', function(filename, file) {
                //TODO: fix path concatenation, because file path must be already in this.location
                console.log('AAA', this.location)
                file.path = path.join(this.location, filename)
            })
            form.on('end', function() {
                return Promise.resolve()
            })
            form.parse(req, function (err, fields, files) {
                if (err) {
                    return Promise.reject(err)
                } 
            });
        } catch (err) {
            return Promise.reject(err)
        }
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