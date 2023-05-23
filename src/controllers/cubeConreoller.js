const cubeController = require('express').Router();
const uniqId = require('uniqid')

const { getAllCubes, saveCubes } = require('../services/cubeService');





cubeController.get('/create', async (req,res) => {
   
    
    res.render('create')
})


cubeController.post('/create', async (req,res) => {
    const result =  await getAllCubes()
    const newCube = {
        id:uniqId(),
        name : req.body.name,
        description : req.body.description,
        imageUrl : req.body.imageUrl,
        difficultyLevel: Number(req.body.difficultyLevel)

    }
   
    result.push(newCube);
    
    await saveCubes(JSON.stringify(result))
    
    res.redirect('/')
})




module.exports = cubeController