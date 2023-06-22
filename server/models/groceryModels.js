const mongoose = require('mongoose');

const GrocerySchema = new mongoose.Schema({
    groceryItem: {
        type: String,
        required:[true, 'Grocery item is required'],
        minLength:[2, 'The Item name must be 2 or more characters'],
        maxLength:[50, 'The Item name is too long']
    },
    quantity: {
        type: Number,
        min: [1, 'No Quantity below 1 allowed'],
        required: [true, 'Quantity is required']
    },
    user_id: {
        type:mongoose.Types.ObjectId
    }
}, {timestamps:true})

const Grocery = mongoose.model('Grocery', GrocerySchema);

module.exports = Grocery