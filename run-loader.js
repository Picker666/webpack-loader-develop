const {runLoaders} = require('loader-runner')
const fs = require('fs')
const path = require('path')

runLoaders({
  resource: path.join(__dirname, './src/index.css'),
  loaders: [
    // {
    //   loader: path.join(__dirname, './src/raw-loader.js'),
    //   // 给loader传递参数
    //   options: {
    //     name: 'raw-loader...'
    //   }
    // },
    // {
    //   loader: path.join(__dirname, './src/async-loader.js')
    // }
    {
        loader: path.join(__dirname, './src/sprite-loader.js')
    }
  ],
  context: {
    emitFile: () => {}
  },
  readResource: fs.readFile.bind(fs)
}, (err, result) => {
  console.log('err, result: ', err, result);
  err ? console.log(err) : console.log(result)
})