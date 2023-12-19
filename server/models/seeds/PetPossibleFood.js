const mongoose = require('mongoose');
const FoodList = require('./펫음식정보.json');

mongoose.connect("mongodb://127.0.0.1:27017/PetMap")
  .then(() => {
    console.log("CoffeeDB 연결");
  })
  .catch((e) => {
    console.log(e);
  });

const PetFoodSchema = new mongoose.Schema({
  name: String,
  introduce: String,
  eat: String,
  image: String
})

const PetFoodModel = mongoose.model('PetFood', PetFoodSchema);

const FetFoodDB = async () => {
  await PetFoodModel.deleteMany({});
  for(let list of FoodList) {
    const petInfo = new PetFoodModel({
      name: list.name,
      introduce: list.introduce,
      eat: list.eat,
      image:list.image
    });
    await petInfo.save();
  }
}

FetFoodDB().then(() => {
  mongoose.connection.close();
})

