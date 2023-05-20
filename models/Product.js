const mongoose = require("mongoose")


const ProuctSchema = mongoose.Schema({
Name: {
    type: String,
    required:[true, "Enter Your Name"]
},
Subject: {
    type: String,
    required: [true, "Enter your EmaSubjectil"],

},
Notes:{
    type: String,
    required: [true, "Add Notes"]
}
})

module.exports = mongoose.model("Notes", ProuctSchema)