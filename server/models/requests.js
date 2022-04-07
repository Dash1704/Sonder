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
        type: mongoose.Schema.Types.ObjectId, ref: 'Mother',
    }
},
    { timestamps: true }
);

const Request = mongoose.model("Requests", requestSchema);
module.exports = Request;