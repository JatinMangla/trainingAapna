const express = require("express");
//require("./db/com");
const path = require("path")
const app = express();
const port = process.env.PORT || 4000;

//const static_path = path.join
//app.use(express.static())

/*app.post("/User",(req,res)=>
{
    res.send("hello");
})*/

app.get("/login", (req,res)=>{
    //res.render("BankLogin.html")
    res.send("helli")
})

app.listen(port,()=> {
    console.log(`server running at ${port}`)
})