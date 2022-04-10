const mongoose = require('mongoose');
 
const requestSchema = new mongoose.Schema( {
    text: {
      type: String,
      required: true,
    },
    userCreatedBy: {
        type: Object
    },
    active: {
        type: Boolean, default: true,
    }
},
    { timestamps: true }
);

const Request = mongoose.model("Requests", requestSchema);
module.exports = Request;