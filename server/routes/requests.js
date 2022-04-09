const express = require("express");
const router = express.Router();
const RequestController = require("../controllers/requests");

router.post("/new", RequestController.Create)
// router.get('/', RequestController.View)

module.exports = router
