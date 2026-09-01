const express =require("express")

const app = express()

app.get("/users",(req,res)=>
{
   const user =[
    {
        id:1,
        name:"Brajesh"
    
    },
    {
        id:2,
        name:"Nigam"
    }
   ]
   res.json(user)
})

app.listen(8000,()=>{
    console.log("server running on localhost:8000")
})