const express = require("express");
const router = express.Router();
const SessionsController = require("../controllers/sessions");

router.post("/login", SessionsController.Create);

module.exports = router