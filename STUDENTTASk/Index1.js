const express = require("express")
const users = require('./Student.json')
const fs = require('fs')

const app = express()
const PORT = 8000

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.get("/api/student", (req, res) => {
    return res.json(users)
})
app
    .route("/api/student/:id")
    .get((req, res) => {
        const id = Number(req.params.id)
        const user = users.find((users) => users.id === id);
        return res.json(users)
    })
    .patch((req, res) => {
        const id = Number(req.params.id)
        const body = req.body
        const u = users.find((user) => user.id === id)
        if (!u) {
            return res.status(404).json({ status: "User not found" });
        }
        Object.assign(u, body);
        fs.writeFile('Student.json', JSON.stringify(users), (err, data) => {
            return res.json({ status: "success", data: u })
        })
        // return res.json({status:"success",data:u})
    })
    .delete((req, res) => {
        const id = Number(req.params.id)
        const user = users.find((user) => user.id === id)
        if (!user) {
            return res.json({ status: "not found" })
        }
        const index = users.findIndex((user) => user.id === id);
        users.splice(index, 1);
        fs.writeFile("Student.json", JSON.stringify(users), (err) => {
            return res.json({ status: "deleted success", data: users });
        }
        )
    });
app.post("/api/student", (req, res) => {
    const body = req.body;
    users.push({ id: users.length + 1, ...body })
    fs.writeFile('Student.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success" })
    })

})


app.listen(PORT, () => {
    console.log(`server started in localhost:${PORT}`)
})