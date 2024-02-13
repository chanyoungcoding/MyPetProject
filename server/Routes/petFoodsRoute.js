const express = require("express");
const { findFood } = require("../Controllers/petFoodsController");

const router = express.Router();

router.get('/findFood', findFood)

module.exports = router;