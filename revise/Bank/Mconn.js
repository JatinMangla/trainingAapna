const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Users",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> {
    console.log("conection succesful")
}).catch((error)=>{
    console.log("no connection")}
    )
