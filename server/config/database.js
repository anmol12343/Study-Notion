// Establishing the connection between the database and server with mongoose;

const mongoose = require("mongoose");


// By this line , All the information present in the enviroment variable will stored in the process object  
require("dotenv").config();


const dbconnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("connection Established")
    })
    .catch((error)=>{
        console.log("Error hai bhai")
        console.log(error.message);
        process.exit(1);
    })
}
module.exports = dbconnect;