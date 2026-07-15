import React from 'react'

const Userlist = (card) => {
    let data =[
        {
            name : "Brajesh",
            email : "brajesh@gmail.com",
            rollno :18
        }, 
        {
             name : "Rajesh",
            email : "Rajesh@gmail.com",
            rollno :16

        },
        {
             name : "malaya",
            email : "malaya@gmail.com",
            rollno :17

        }, 
        {
             name : "mantu",
            email : "mantu@gmail.com",
            rollno :19

        }
         , 
        {
             name : "abhi",
            email : "abhi@gmail.com",
            rollno :20

        } , 
        {
             name : "sanju",
            email : "sanju@gmail.com",
            rollno :21

        }
    ]
  return (
    <div>
     {data.map(({name})=>{
            return(
                <div>
                    <h1>{name}</h1>
                </div>
            )

        })}
      
    </div>
  )
}

export default Userlist
