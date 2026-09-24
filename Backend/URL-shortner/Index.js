const express=require("express")
const urlroute=require("./Routes/Url")
const {connectToMongoDB}=require("./Connect")
const URL = require('./Models/url');
const path=require("path")

const app=express()
const port=4518

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>console.log("connected to mongodb"))

app.set("view engine","ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use("/url",urlroute)

app.listen(port,()=>console.log(`server is running on port ${port}`))