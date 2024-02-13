const express = require("express");
const { 
  loginUser, 
  registerUser, 
  findUser, 
  checkUser, 
  registerBuildingUser, 
  registerFoodUser, 
  registerImgUser,
  deleteFoodUser,
  deleteBuildingUser 
} = require("../Controllers/userController");

const app = express();
const router = express.Router();

router.get('/', findUser);
router.get('/checkUser', checkUser)
router.post('/login',  loginUser)
router.post('/register', registerUser);
router.post('/registerBuilding', registerBuildingUser)
router.post('/registerFood', registerFoodUser)
router.post('/registerImg', registerImgUser)
router.delete('/deleteFood/:foodName', deleteFoodUser)
router.delete('/deleteBuilding/:buildingName', deleteBuildingUser)

module.exports = router;