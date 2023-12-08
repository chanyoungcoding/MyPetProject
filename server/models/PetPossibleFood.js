const mongoose = require('mongoose');

const PetFoodSchema = new mongoose.Schema({
  name: String,
  introduce: String,
  eat: String
})

const PetFoodModel = mongoose.model('PetFood', PetFoodSchema);

module.exports = PetFoodModel;