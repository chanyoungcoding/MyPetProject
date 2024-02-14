const PetFood = require("../models/PetPossibleFood");

const findFood = async (req,res) => {
  const name = req.query.name

  try {

    const petFoodInformation = await PetFood.find({name: name});
    return res.status(200).json(petFoodInformation);

  } catch(error) {

    console.log(error)
    return res.status(500).json({message: "서버 오류"})
    
  }
}

module.exports = {
  findFood
}