const homeController = require('express').Router();



homeController.get('/', (req,res) => {

    res.send('Hello World')
})

module.exports = homeController
