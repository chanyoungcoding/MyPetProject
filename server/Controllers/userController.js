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

    if(!user) return res.status(400).json("Invalid email or password");

    const isValidPassword = await bcrypt.compare(password, user.password);

    if(!isValidPassword) return res.status(400).json("Invalid email or password...")
    
    const token = createToken(user.username);

    res.status(200).json({success: true, message: '로그인 성공', token});

  } catch(e) {
    console.log(e);
    res.status(500).json(e);
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

    res.status(200).json({message: '회원가입에 성공하엿습니다.'})

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
  const {username} = jwt.verify(jwtToken, jwtKey)

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
  if(user.length > 0) {
    return res.json('이름이 중복되었습니다.')
  } else {
    return res.json('사용할 수 있습니다.')
  }
}

module.exports = {
  loginUser,
  registerUser,
  findUser,
  checkUser
}
  

