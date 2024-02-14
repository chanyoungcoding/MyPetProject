const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');

const jwtKey = process.env.JWT_SECRET_KEY;

const createToken = (username) => {
  return jwt.sign({username}, jwtKey, { expiresIn: "1d"});
}


const loginUser = async (req,res) => {
  const {username, password} = req.body;

  try {
    const user = await User.findOne({username});

    if(!user) return res.status(400).json({message: "아이디 또는 비밀번호가 확실하지 않습니다."});

    const isValidPassword = await bcrypt.compare(password, user.password);

    if(!isValidPassword) return res.status(400).json({message: "아이디 또는 비밀번호가 확실하지 않습니다."})
    
    const token = createToken(user.username);

    res.status(200).json({success: true, message: '로그인 성공', token});

  } catch(error) {
    console.log(error);
    res.status(500).json({message: '알 수 없는 오류가 있습니다.'});
  }
}


const registerUser =  async (req, res) => {
  const { username, email, password } = req.body;

  try {

    const user = await User.findOne({email});

    if(user) {
      return res.status(400).json("User with the given email already exist...");
    };
  
    if(!username || !email || !password) {
      return res.status(400).json("All fields are required...");
    };
  
    if(!validator.isEmail(email)) {
      return res.status(400).json("Email must be a valid email...");
    };
  
    if(!validator.isStrongPassword(password)) {
      return res.status(400).json("Password must be a Strong password...")
    }

    const newUser = new User({ email, username, password });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    await newUser.save();

    res.status(200).json({message: '회원가입에 성공하였습니다.'})

  } catch (error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      res.status(400).json({ message: '이미 등록된 이메일입니다.' });
    } else {
      res.status(500).json({ message: '회원 가입 중 오류가 발생했습니다.' });
    }
  }
}


const findUser = async (req,res) => {
  const jwtToken = JSON.parse(req.headers.authorization)
  const { username } = jwt.verify(jwtToken, jwtKey)

  try {
    const user = await User.findOne({username})

    res.status(200).json(user);

  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}

const checkUser = async (req,res) => {
  const username = req.query.name;
  const user = await User.find({username: username});

  const message = user.length > 0 ? '이름이 중복되었습니다.' : '사용할 수 있습니다.';
  return res.json(message);
}

const registerBuildingUser = async(req,res) => {
  const { content, address, phoneNumber } = req.body;
  const jwtToken = JSON.parse(req.headers.authorization)
  const { username } = jwt.verify(jwtToken, jwtKey)

  try {

    const existingUser = await User.findOne({
      username,
      'petBuilding.content': content
    });
    if(existingUser) {
      return res.status(400).json({success:false, message: '이미 좋아요를 등록하셨습니다.'})
    }

    const user = await User.findOne({ username });
    
    if (user?.petBuilding?.length >= 10) {
      return res.status(400).json({ success: false, message: '10개 이상 좋아요를 등록할 수 없습니다.' });
    }

    const updatedUser = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          petBuilding: {
            content,
            address,
            phoneNumber
          }
        }
      }
    );
    if(updatedUser) {
      return res.status(200).send({ success: true, message: '마이페이지에 등록했습니다.' });
    } else {
      return res.status(400).send({ success: false, message: '등록에 실패했습니다.' });
    }

  } catch(error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const registerFoodUser = async (req, res) => {
  const { foodName, foodPossible, foodImage } = req.body;
  const jwtToken = JSON.parse(req.headers.authorization)
  const { username } = jwt.verify(jwtToken, jwtKey)

  try {

    const existingUser = await User.findOne({
      username,
      'petFood.foodName': foodName
    });

    if (existingUser) {
      return res.status(400).json({ success: false, message: '이미 좋아요를 등록하셨습니다.' });
    }

    const user = await User.findOne({ username });

    if (user?.petBuilding?.length >= 10) {
      return res.status(400).json({ success: false, message: '10개 이상 좋아요를 등록할 수 없습니다.' });
    }

    // petFood 추가
    const updatedUser = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          petFood: {
            foodName,
            foodPossible,
            foodImage
          }
        }
      }
    );

    if (updatedUser) {
      return res.status(200).send({ success: true, message: '마이페이지에 등록했습니다.' });
    } else {
      return res.status(200).send({ success: false, message: '등록에 실패했습니다.' });
    }

  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

const registerImgUser = async (req,res) => {
  const {imageUrl, petName, selectedDate} = req.body;
  const jwtToken = JSON.parse(req.headers.authorization)
  const { username } = jwt.verify(jwtToken, jwtKey)

  try {

    const updatedUser = await User.findOneAndUpdate(
      { username: username },
      { 
        $set: {
          img: imageUrl,
          petName, 
          selectedDate,
        }
      },
      { new: true } 
    );
    if (updatedUser) {
      res.status(200).json({ success: true, message: '등록을 완료했어요.' });
    } else {
      res.status(400).json({ success: false, message: '사용자를 찾을 수 없습니다.' });
    }

  } catch(error) {
    console.log(error)
    res.status(500).json({message: '알 수 없는 오류로 취소돼었습니다.'})
  }
}

const deleteFoodUser = async (req, res) => {
  const jwtToken = JSON.parse(req.headers.authorization)
  const { username } = jwt.verify(jwtToken, jwtKey)

  try {

    const user = await User.findOneAndUpdate(
      { username },
      { $pull: { petFood: { foodName: req.params.foodName } } },
    );

    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    return res.json({ message: '삭제완료', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: '서버 오류' });
  }
}

const deleteBuildingUser = async (req, res) => {
  const jwtToken = JSON.parse(req.headers.authorization)
  const { username } = jwt.verify(jwtToken, jwtKey)

  try {
    
    const user = await User.findOneAndUpdate(
      { username },
      { $pull: { petBuilding: { content: req.params.buildingName } } },
    );

    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    return res.status(200).json({ message: '삭제완료', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: '서버 오류' });
  }
}

module.exports = {
  loginUser,
  registerUser,
  findUser,
  checkUser,
  registerBuildingUser,
  registerFoodUser,
  registerImgUser,
  deleteFoodUser,
  deleteBuildingUser 
}
  

