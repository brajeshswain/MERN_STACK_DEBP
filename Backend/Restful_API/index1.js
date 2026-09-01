const express = require("express")
// const users = require('./MOCK_DATA.json')
const fs = require("fs");
const mongoose = require("mongoose");


const { start } = require("repl");
const { json } = require("stream/consumers");
const console = require("console");

const app = express()
const PORT = 8000;

// middleware - plugin 

app.use(express.urlencoded({ extended: false }))
// make collection of data in json format
mongoose
    .connect("mongodb://127.0.0.1:27017/youtube-app")
    .then(() => console.log("mongodb connected!!"))
    .catch((err) => console.log("mango err", err))
// DB schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    job_title: { type: String, required: true },
})

const User = mongoose.model("User", userSchema)

// app.use((req, res, next) => {
//     console.log("hello from middleare-1...")
//     // return res.json("hello")
//     next()

// })

app.get("/api/users", (req, res) => {
    return res.json(users)
})

app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})

app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user)

    })
    .patch((req, res) => {
        const id = Number(req.params.id)
        const name = req.body
        const user = user.FindByAndupdate((user) => {
            if (user.id === getID) {
                return res.json({ status: "pending" })
            }
            else {
                return res, json({ status: "success" })
            }
        });
    })
    .delete((req, res) => {
        return res.json({ start: "pending" })
    })

app.post("/api/users", async (req, res) => {
    const body = req.body;
    // users.push({ ...body, id: users.length + 1 })
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    //     return res.json({ status: "success" })
    // }) 
    if (
        !body ||
        !body.firstName || 
        !body.lastName || 
        !body.email || 
        !body.gender || 
        !body.job_title
    ) {
        return res.status(400).json({ status: "failed", message: "all fields are required" })
    }
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    })
    console.log("result", result)
    return res.status(201).json({ status: "success", user: result });

})

app.listen(PORT, () => {
    console.log(`server strated at localhost : ${PORT}`)
})