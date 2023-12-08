const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const PetMap = require('./models/PetMapInformation');
const PetFoodInformation = require('./models/PetPossibleFood');

//MongoDB 연결
const dbUrl = process.env.DB;

mongoose.connect(dbUrl)
  .then(() => {
    console.log("CoffeeDB 연결");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/pet-maps', async (req,res) => {
  const petMapInformation = await PetMap.find({})
  res.json(petMapInformation);
})

app.get('/pet-foods', async (req,res) => {
  const name = req.query.name
  const petFoodInformation = await PetFoodInformation.find({name: name});
  res.json(petFoodInformation);
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('서버 가동')
})