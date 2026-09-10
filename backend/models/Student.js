const mongose = require("mongoose");
const studentschema = new mongose.Schema(
    {
        name : {type: String,required: true},
        email : {type: String,required: true},
        age : {type: Number,required: true},
        city : {type: String,required: true},
        course : {type: String,required: true},
        phone : {type: Number,required: true},
    },
    
    {timestamps : true}

);

module.exports = mongose.model("Student",studentschema);
