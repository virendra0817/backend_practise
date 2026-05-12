const express = require("express")
const app = express()

app.get("/",(req,res) => {
    return res.send("hello depresso");
});

app.get("/about",(req,res) =>{
    return res.send("hello virendra vikram singh");
});

app.listen(8000,() => console.log("server started"));