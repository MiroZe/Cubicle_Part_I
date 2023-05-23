const { error } = require('console')
const fs = require('fs/promises')

const path = require('path')
const filePath = path.resolve(__dirname,'..' ,'data','db.json')



async function getAllCubes() {

    try {
      const result =  await fs.readFile(filePath,'utf-8')
      return JSON.parse(result)
        
    } catch (error) {
        console.log(error)
    }
}

async function saveCubes(cubes) {
    try {
        await fs.writeFile(filePath,cubes)
        
          
      } catch (error) {
          console.log(error)
      }
}




module.exports = {
    getAllCubes,
    saveCubes
}