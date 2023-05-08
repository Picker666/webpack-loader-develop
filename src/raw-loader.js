const loaderUtils = require('loader-utils')
const fs = require('fs')
const path = require('path')

module.exports = function (source) {
    const {name} = this.loaders[this.loaderIndex].options
    console.log(name)
    // 同步 loader
    const json = JSON
        .stringify(source)
        .replace('foo', '')
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029');

    // return `export default ${json}` throw new Error('Error'); this.callback(new
    // Error('Error'), json)
    console.log(json, '=====');
    this.callback(null, json, 2, 3, 4)

}