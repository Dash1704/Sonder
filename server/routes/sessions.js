const express = require("express");
const router = express.Router();
const SessionsController = require("../controllers/sessions");

router.post("/login", SessionsController.Create);
router.delete("/signout", SessionsController.Delete);

module.exports = router