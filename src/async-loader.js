const fs = require('fs')
const path = require('path')

module.exports = function (source) {
    const callback = this.async()
    fs.readFile(path.join(__dirname, './async.txt'), 'utf-8', (err, data) => {
        if (err) {
            callback(err, '')
        }
        const mergeData = `${source} \n ${data}`
        callback(null, mergeData)
    })
}