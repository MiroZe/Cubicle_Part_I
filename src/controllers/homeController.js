const { getAllCubes } = require('../services/cubeService');

const homeController = require('express').Router();



homeController.get('/', async (req,res) => {
    const result =  await getAllCubes()
    
    
    res.render('home')
})

homeController.get('/about', (req,res) => {

    res.render('about')
})

homeController.get('/404', (req,res) => {

    res.render('404')
})


module.exports = homeController
