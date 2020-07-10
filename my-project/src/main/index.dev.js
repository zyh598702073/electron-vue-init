/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */
//在开发过程中，你可能会注意到 src/main/index.dev.js。
//该文件专门用于开发以及安装开发工具。
//原则上，该文件不应该被修改，但是可以被用来扩展你的开发需求。
//在构建的过程中，webpack 将介入其中并创建一个的捆绑，以 src/main/index.js 作为该捆绑的入口文件。
/* eslint-disable */

// Install `electron-debug` with `devtron`
require('electron-debug')({ showDevTools: false })

// Install `vue-devtools`
require('electron').app.on('ready', () => {
  let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.VUEJS_DEVTOOLS)
    .then(() => {})
    .catch(err => {
      console.log('Unable to install `vue-devtools`: \n', err)
    })
})

// Require `main` process to boot app
require('./index')