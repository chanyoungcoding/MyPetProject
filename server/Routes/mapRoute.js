const express = require("express");
const { findMap } = require("../Controllers/petMapController");

const router = express.Router();

router.get('/', findMap)

module.exports = router;