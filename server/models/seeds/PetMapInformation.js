const mongoose = require('mongoose');
const MapList = require('./펫맵정보.json');

mongoose.connect("mongodb://127.0.0.1:27017/PetMap")
  .then(() => {
    console.log("CoffeeDB 연결");
  })
  .catch((e) => {
    console.log(e);
  });

const MapInformationSchema = new mongoose.Schema({
  name: String,
  buildingName: String,
  address: String,
  latitude: Number,
  longitude: Number,
  phoneNumber: String
});

// 모델의 이름을 변경
const MapInfoModel = mongoose.model('MapInformation', MapInformationSchema);

const MapInformationDB = async () => {
  // async 키워드 추가
  await MapInfoModel.deleteMany({});
  for (let list of MapList) {
    // 모델과 변수의 이름을 다르게 지정
    const mapInfo = new MapInfoModel({
      name: list.Name,
      buildingName: list.BuildingName,
      address: list.address,
      latitude: list.Latitude,
      longitude: list.Longitude,
      phoneNumber: list.PhoneNumber || ''
    });
    await mapInfo.save();
  }
}

MapInformationDB().then(() => {
  mongoose.connection.close();
});
