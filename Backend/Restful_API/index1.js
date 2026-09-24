const express = require("express")
const userRouter = require("./Routes/user")
const {connectMongoDB}=require("./connection")

const app = express()
const PORT = 8000;

// connections ->
connectMongoDB("mongodb://127.0.0.1:27017/youtube-app").then(() => 
    console.log("mongodb connected!!")
)
// middleware - plugin 

app.use(express.urlencoded({ extended: false }))

app.use("/users", userRouter)

app.listen(PORT, () => {
    console.log(`server strated at localhost : ${PORT}`)
})