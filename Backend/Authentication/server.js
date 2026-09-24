const express = require("express");
const app = express();

function authenticationAPI(req, res, next) {
const apikey= req.headers["x-api-key"];
if(apikey !== "WEBBOCKET123") {
    res.status(401).json({ message: "Invalid API key" });   
}
next();
}
app.get("/students", authenticationAPI, (req, res) => {
    res.json({
        message: "students data",
        students: [
             "biku", 
             "alice",
             "bob" 
        ]
    })
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});