const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session'); 
const passport = require('passport');
const LocalStrategy = require('passport-local');
const jwt = require('jsonwebtoken');

require("dotenv").config();

const PetMap = require('./models/PetMapInformation');
const PetFoodInformation = require('./models/PetPossibleFood');
const User = require('./models/user');

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

const sessionConfig = {
  secret: 'this-is-your-secret-code', 
  resave: false,
  saveUninitialized: false,
}

const secretKey = 'your-secret-key';

app.use(session(sessionConfig));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/pet-maps', async (req,res) => {
  const petMapInformation = await PetMap.find({})
  res.json(petMapInformation);
})

app.get('/pet-foods', async (req,res) => {
  const name = req.query.name
  const petFoodInformation = await PetFoodInformation.find({name: name});
  res.json(petFoodInformation);
})

app.post('/pet-img-register', async (req,res) => {
  const jwtToken = req.body.jwt;
  const imageUrl = req.body.imageUrl;
  const {username} = jwt.verify(jwtToken, secretKey);
  const user = await User.find({username : username});
  res.send('good')
})

app.post('/login', passport.authenticate('local'), (req,res) => {
  const username = req.body.username;
  const user = { username: username };
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); // 1시간 동안 유효
  res.json({ success: true, message: '로그인 성공', token });
})

app.post('/register', async(req,res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({email, username});
    const registeredUser = await User.register(user, password);
    res.json(registeredUser);
  } catch(e) {
    res.json(e)
  }
})

app.get('/test', async(req,res) => {
  const jwtToken = req.query.jwt;
  const data = jwt.verify(jwtToken, secretKey)
  console.log(data.username);
  res.send('good');
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('서버 가동')
})