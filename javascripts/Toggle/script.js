let newbtn =document.querySelector("#mood")
let currmood = "light"
let mood = "dark"
let mood1 ="pink"
let mood2="red"
let mood3="green"
newbtn.addEventListener("click",()=>{
    if(currmood==="light"){
        currmood="dark";
        document.querySelector("body").style.backgroundColor="black"
    }
    else if(currmood==="dark"){
        currmood="pink"
        document.querySelector("body").style.backgroundColor="pink"
    }
    else if (currmood==="pink"){
        currmood="red"
        document.querySelector("body").style.backgroundColor="red"
    }
    else if(currmood==="red"){
        currmood="green"
        document.querySelector("body").style.backgroundColor="green"
    }
    else{
        currmood="light"
        document.querySelector("body").style.backgroundColor="white"
    }
    console.log(currmood)
})