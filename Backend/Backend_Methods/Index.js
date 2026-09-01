const http =require("http")
const server =http.createServer((req,res)=>
{
    // if(req.method === "GET" && req.url==="/user"){
    //     res.end("here are all user")
    // }
    // else{
    //     res.end("Router is not found")
    // }

    if(req.method === "POST" && req.url === "/user"){
        res.end("New are all user") 
    } else {
         res.end("Router is not found")
    }
})
server.listen(8000,()=>{
    console.log("server Running on port :8000")
})