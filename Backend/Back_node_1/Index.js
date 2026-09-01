const http = require("http")
// http.writeFileSync("./file","Hello nit")
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.write("home page")
    }
    else if (req.url==="/about"){
        res.write("about page")
    }
    else if (req.url==="/contact"){
        res.write("cantact")
    }
    res.end();
})

server.listen(8000,()=>{
    console.log("server running on localhost:8000")
})
