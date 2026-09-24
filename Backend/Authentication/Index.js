const express = require("express");
const app = express();

app.use(express.json());
const users = [
    {
        id: 1,
        username: "biku",
        password: "123"
    },
    {
        id: 2,
        username: "alice",
        password: "456"
    },
    {
        id: 3,
        username: "bob",
        password: "789"
    },
]

function authentication(req, res, next) {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        res.status(401).send({ message: "Invalid credentials" });
    }
    req.user = user;
    next();
}

app.post("/login", authentication, (req, res) => {
    res.json({
        message: "Login successful",
        user: req.user.username
    });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});