const express = require("express");
const router = express.Router();
const RequestController = require("../controllers/requests");

router.post("/new", RequestController.Create)
router.get('/', RequestController.View)
router.get('/filter/:city', RequestController.Filter)
router.post('/:_id', RequestController.Fulfilled)
router.get('/active', RequestController.ActiveFilter)

module.exports = router
