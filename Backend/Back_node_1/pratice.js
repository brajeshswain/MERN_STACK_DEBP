const http=require("http")

const server =http.createServer((req,res)=>
{
    const url=new URL(req.url,`http://$(req.headers.host)`)

    // const price=url.searchParams.get("price")
    // const quantity=url.searchParams.get("quantity")
    // const total=price*quantity
    // res.end(
    //     `price:${price}\n`+
    //     `quantity:${quantity}\n`+
    //     `total:${total}`
    // )

    const name =url.searchParams.get("name")
    const subject=url.searchParams.get("subject")
    const marks=url.searchParams.get("marks")
    const result=(marks>=30?"pass":"fail")
    res.end(
        `student Name:${name}\n`+
        `student Subject:${subject}\n`+
        `student marks:${marks}\n`+
        `student result:${result}\n`
        
    )
})
server.listen(3000,()=>{
    console.log("server listen on port:3000")
})