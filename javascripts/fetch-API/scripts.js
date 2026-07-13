// let URL ="https://jsonplaceholder.typicode.com/users"

function getUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json())
    .then(data =>{
        let list = document.getElementById("userList")
        list.innerHTML="";

        data.forEach(user =>
        {
            let li =document.createElement("li");
                li.textContent=user.email;
                list.appendChild(li);
            
        });
    })
    .catch(err =>{
        console.log("error",err)
    })
}

//getUser();

