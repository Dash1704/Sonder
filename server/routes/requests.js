const express = require("express");
const router = express.Router();
const RequestController = require("../controllers/requests");

router.post("/new", RequestController.Create)
router.get('/list', RequestController.View)
router.get('/filter/:city', RequestController.CityFilter)
router.post('/:_id', RequestController.ChangeToPending)
router.get('/active', RequestController.StatusFilter)
router.get('/:_id', RequestController.ViewMyRequests)
router.post('/accept/:_id', RequestController.AcceptHelp)

module.exports = router
