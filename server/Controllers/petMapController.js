const PetMap = require("../models/PetMapInformation.js")

const findMap = async (req,res) => {
  const petMapInformation = await PetMap.find({})
  res.json(petMapInformation);
}

module.exports = {
  findMap
}