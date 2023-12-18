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

app.get('/pet-users', async (req,res) => {
  const jwtToken = req.query.name
  const {username} = jwt.verify(jwtToken, secretKey);
  const user = await User.find({username: username});
  res.json(user);
})

app.get('/pet-usercheck', async (req,res) => {
  const username = req.query.name;
  const user = await User.find({username: username});
  if(user.length > 0) {
    return res.json('이름이 중복되었습니다.')
  } else {
    return res.json('사용할 수 있습니다.')
  }
})

app.post('/pet-img-register', async (req,res) => {
  const {imageUrl, petName, selectedDate} = req.body;
  const jwtToken = req.body.jwt;
  const {username} = jwt.verify(jwtToken, secretKey);
  const updatedUser = await User.findOneAndUpdate(
    { username: username },
    { 
      $set: {
        img: imageUrl,
        petName: petName, 
        selectedDate: selectedDate,
      }
    },
    { new: true } 
  );
  if (updatedUser) {
    res.json({ success: true, message: '등록을 완료했어요.' });
  } else {
    res.json({ success: false, message: '사용자를 찾을 수 없습니다.' });
  }
})

app.post('/login', passport.authenticate('local'), (req,res) => {
  const username = req.body.username;
  const user = { username: username };
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); // 1시간 동안 유효
  res.json({ success: true, message: '로그인 성공', token });
})

app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    res.json(registeredUser);
  } catch (error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      // MongoDB에서의 중복 에러 처리
      res.status(400).json({ message: '이미 등록된 이메일입니다.' });
    } else {
      // 기타 에러 처리
      res.status(500).json({ message: '회원 가입 중 오류가 발생했습니다.' });
    }
  }
});

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