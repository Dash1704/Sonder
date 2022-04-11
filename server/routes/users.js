const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");

router.post('/mother', UsersController.CreateMother)
router.post('/donor', UsersController.CreateDonor)
router.get('/mother/:email', UsersController.FindMother)
router.post('/mother/:email', UsersController.UpdateMotherBio)
router.get('/mother/:_id', UsersController.ShowMotherProfile)

module.exports = router







// router.get("/", (req, res) => {
//   res.json({message: "allo mate"})
// })

// router.post("/signup", (req, res) => {
//   res.json({message: "allo geez"})
// })





//const express = require("express");
// const router = express.Router();
// const {registerUser} = require("../controllers/users");

// router.get("/new", registerUser);
// router.post("/", registerUser);

// module.exports = router;


