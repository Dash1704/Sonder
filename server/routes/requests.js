const express = require("express");
const router = express.Router();
const RequestController = require("../controllers/requests");

router.post("/new", RequestController.Create)
router.get('/list', RequestController.View)
router.get('/filter/:city', RequestController.CityFilter)
router.post('/:_id', RequestController.ChangeToPending)
router.delete('/:_id', RequestController.DeleteRequest)
router.get('/active', RequestController.StatusFilter)
router.get('/:_id', RequestController.ViewMyRequests)

module.exports = router
