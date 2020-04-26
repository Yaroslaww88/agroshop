const fs = require('fs')
const p = require('path')
const imagesFolder = require('../config').imagesFolder

exports.removeImagesDirSync = function removeImagesDirSync(path) {
    const pathToImages = p.join('', imagesFolder).split(p.sep)
    const currentPath = path.split(p.sep)
    for (let i = 0; i < pathToImages.length; i++) {
        if (pathToImages[i] !== currentPath[i]) {
            throw new Error('Trying to remove dir which is not in images folder')
        }
    }

    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file,index) {
            let curPath = p.join(path, file);
            if(fs.lstatSync(curPath).isDirectory()) {
                removeImagesDirSync(curPath);
            } else { 
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};