const express = require("express");
const { loginUser, registerUser, findUser, checkUser } = require("../Controllers/userController");

const app = express();
const router = express.Router();

router.get('/', findUser);
router.get('/checkUser', checkUser)
router.post('/login',  loginUser)
router.post('/register', registerUser);

module.exports = router;