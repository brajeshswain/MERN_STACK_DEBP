const express = require("express")
const users = require('./Student.json')

const app=express()
const PORT=8000

app.use(express.urlencoded({extended:false}))

app.use((req ,res ,next)=>{
    console.log(req.method,req.url)
    next()
})

app.get("/api/student",(req,res)=>{
    return res.json(users)
})
app.get("/api/student/:id",(req,res)=>{
    const id=Number(req.params.id)
    const user = users.find((user) => user.id === id);
    return res.json(user)
})


app.listen(PORT,()=>{
    console.log(`server started in localhost:${PORT}`)
})