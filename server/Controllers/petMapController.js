const PetMap = require("../models/PetMapInformation.js")

const findMap = async (req,res) => {
  try {

    const petMapInformation = await PetMap.find({})
    return res.json(petMapInformation);

  } catch(error) {

    console.log(error)
    return res.status(500).json({message: "서버 오류"})
    
  }
}

module.exports = {
  findMap
}