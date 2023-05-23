const homeController = require('../controllers/homeController')





const routes = (app) => {

    app.get('/', homeController)
}


module.exports = routes