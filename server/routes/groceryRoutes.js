const GroceryController = require('../controllers/groceryController');
const {authenticate} = require('../config/jwt.config')

module.exports = app => {
    app.get('/api/allGroceries', GroceryController.findAllGroceries);
    app.get('/api/myGroceries', authenticate, GroceryController.allGroceriesByLoggedInUser);
    app.post('/api/newGrocery', authenticate, GroceryController.createGrocery);
    app.get('/api/oneGrocery/:id', GroceryController.findOneGrocery);
    app.put('/api/updateGrocery/:id', GroceryController.updateGrocery);
    app.delete('/api/deleteGrocery/:id', GroceryController.deleteGrocery);
}