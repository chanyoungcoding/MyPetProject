const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require("dotenv").config();

const userRoute = require("./Routes/userRoute");
const foodRoute = require("./Routes/petFoodsRoute");
const mapRoute = require("./Routes/mapRoute");

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

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoute);
app.use('/api/petFoods', foodRoute);
app.use('/api/map', mapRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('서버 가동')
})