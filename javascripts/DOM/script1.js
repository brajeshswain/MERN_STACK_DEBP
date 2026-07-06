// let division = document.querySelector("div")
// console.log(division)

// let demo = division.getAttribute("id")
// console.log(demo)

// let para = document.querySelector("p")
// console.log(para.setAttribute("newclass","pigon"))

// let div =document.querySelector("div")
// div.style.backgroundColor="green"

// div.style.fontSize= "20px"
// div.style.color="yellow"
// div.style.fontFamily="monospace"
// div.innerHTML="NIT college"
// div.style.visibility="hidden"

let newbtn = document.createElement("button")
newbtn.innerText="click me"
console.log(newbtn)

let div = document.querySelector("div")
// div.append(newbtn)
// div.prepend(newbtn)
// div.after(newbtn)
// div.before(newbtn)
div.remove()

// div.remove(newbtn)
let para = document.querySelector("para")
para.remove()
