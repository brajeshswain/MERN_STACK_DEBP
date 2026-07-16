// Question 8: Voting Eligibility
// const citizens = [
//  {id:1,name:"Rahul",age:18},
//  {id:2,name:"Priya",age:15},
//  {id:3,name:"Rohan",age:23},
//  {id:4,name:"Anita",age:17},
//  {id:5,name:"Neha",age:31}
// ];

// Requirements -> 

// Display all citizens.
// If age ≥18
// Eligible

// Else

// Not Eligible

// Count eligible citizens.
import React from 'react'

const Voting = () => {
    let countE = 0;
    let countNE = 0;
    const citizens = [
        { id: 1, name: "Rahul", age: 18 },
        { id: 2, name: "Priya", age: 15 },
        { id: 3, name: "Rohan", age: 23 },
        { id: 4, name: "Anita", age: 17 },
        { id: 5, name: "Neha", age: 31 }
    ];
    return (
        <div>
            {citizens.map(({ name, age, id }) =>
                <div>
                    <h5>id:{id}</h5>
                    <h5>name:{name}</h5>
                    <h5>age:{age}</h5>
                    <h2>Eligible for vote:{age >= 18 ? (countE++, "Eligible") : (countNE++, "NOT Eligible")}</h2>


                </div>

            )}
            <h3>Total:{countE}</h3>
            <h3>Total:{countNE}</h3>

        </div>
    )
}



export default Voting
