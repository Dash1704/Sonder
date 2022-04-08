const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/items");

router.post("/", ItemController.Create)

module.exports = router
