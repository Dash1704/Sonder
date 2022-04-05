const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/users");

router.post('/', registerUser)

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


