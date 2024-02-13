const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require("dotenv").config();

const PetMap = require('./models/PetMapInformation');
const User = require('./models/user');

const userRoute = require("./Routes/userRoute");
const foodRoute = require("./Routes/petFoodsRoute");

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

const secretKey = 'your-secret-key';

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoute);
app.use('/api/petFoods', foodRoute);

app.get('/pet-maps', async (req,res) => {
  const petMapInformation = await PetMap.find({})
  res.json(petMapInformation);
})

app.post('/pet-building-register', async(req,res) => {
  try {
    const {content, address, phoneNumber} = req.body;
    const jwtToken = req.body.jwt;
    const { username } = jwt.verify(jwtToken, secretKey);
    const existingUser = await User.findOne({
      username: username,
      'petBuilding.content': content
    });
    if(existingUser) {
      return res.json({success:false, message: '이미 좋아요를 등록하셨습니다.'})
    }

    const user = await User.findOne({ username: username });
    if (user && user.petBuilding && user.petBuilding.length >= 10) {
      return res.json({ success: false, message: '10개 이상 좋아요를 등록할 수 없습니다.' });
    }
    // 해당 유저를 찾아서 foodName과 foodPossible을 추가합니다.
    const updatedUser = await User.findOneAndUpdate(
      { username: username },
      {
        $push: {
          petBuilding: {
            content: content,
            address: address,
            phoneNumber: phoneNumber
          }
        }
      }
    );
    if(updatedUser) {
      return res.send({ success: true, message: '마이페이지에 등록했습니다.' });
    } else {
      return res.send({ success: false, message: '등록에 실패했습니다.' });
    }

  } catch(e) {
    res.status(500).send('Internal Server Error');
  }
})

app.post('/pet-petFood-register', async (req, res) => {
  try {
    const { foodName, foodPossible, foodImage } = req.body;
    const jwtToken = req.body.jwt;
    const { username } = jwt.verify(jwtToken, secretKey);

    const existingUser = await User.findOne({
      username: username,
      'petFood.foodName': foodName
    });

    if (existingUser) {
      return res.json({ success: false, message: '이미 좋아요를 등록하셨습니다.' });
    }

    const user = await User.findOne({ username: username });
    if (user && user.petFood && user.petFood.length >= 10) {
      return res.json({ success: false, message: '10개 이상 좋아요를 등록할 수 없습니다.' });
    }

    // petFood 추가
    const updatedUser = await User.findOneAndUpdate(
      { username: username },
      {
        $push: {
          petFood: {
            foodName: foodName,
            foodPossible: foodPossible,
            foodImage: foodImage
          }
        }
      }
    );

    if (updatedUser) {
      return res.send({ success: true, message: '마이페이지에 등록했습니다.' });
    } else {
      return res.send({ success: false, message: '등록에 실패했습니다.' });
    }

  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


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

app.delete('/pet-petFood-delete', async (req, res) => {
  const jwtToken = req.body.jwt;
  try {
    const { username } = jwt.verify(jwtToken, secretKey);
    const user = await User.findOneAndUpdate(
      { username },
      { $pull: { petFood: { foodName: req.body.foodName } } },
    );

    if (!user) {
      return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
    }

    return res.json({ message: '삭제완료', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: '서버 오류' });
  }
});

app.delete('/pet-building-delete', async (req, res) => {
  const jwtToken = req.body.jwt;
  try {
    const { username } = jwt.verify(jwtToken, secretKey);
    const user = await User.findOneAndUpdate(
      { username },
      { $pull: { petBuilding: { content: req.body.buildingName } } },
    );

    if (!user) {
      return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
    }

    return res.json({ message: '삭제완료', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: '서버 오류' });
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('서버 가동')
})