const mongoose = require('mongoose');
 
const requestSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    text: {
      type: String,
      required: true,
    },
    userCreatedBy: {
        type: Object
    }
},
    { timestamps: true }
);

const Request = mongoose.model("Requests", requestSchema);
module.exports = Request;