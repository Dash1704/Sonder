const express = require("express");
const router = express.Router();
const SessionsController = require("../controllers/sessions");

router.post("/login/donor", SessionsController.CreateDonor);
router.post("/login/mother", SessionsController.CreateMother);


module.exports = router