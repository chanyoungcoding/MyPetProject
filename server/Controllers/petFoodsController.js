const PetFood = require("../models/PetPossibleFood");


const findFood = async (req,res) => {
  const name = req.query.name
  const petFoodInformation = await PetFood.find({name: name});
  res.json(petFoodInformation);
}

module.exports = {
  findFood
}