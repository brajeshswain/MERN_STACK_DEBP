// Question 7: Electricity Bill
// const consumers = [
//  {id:1,name:"Ram",units:120},
//  {id:2,name:"Shyam",units:280},
//  {id:3,name:"Rita",units:450},
//  {id:4,name:"Mohan",units:90}
// ];

// Requirements -> 

// Calculate bill.

// Units ≤100 → ₹5/unit
// Units 101–300 → ₹7/unit
// Above 300 → ₹10/unit

// Display

// Name
// Units
// Total Bill
//------------------------------------
import React from 'react'

const Electri = () => {
    let Bill
    const consumers = [
        { id: 1, name: "Ram", units: 120 },
        { id: 2, name: "Shyam", units: 280 },
        { id: 3, name: "Rita", units: 450 },
        { id: 4, name: "Mohan", units: 90 }
    ];
    return (
        <div>
            {
                consumers.map(({ id, name, units }) =>
                    <div>
                        <h1>Display All Names</h1>
                        <h2>Name:{name}</h2>
                        <h3>units={units}</h3>
                        <h4>Bill Amount={units<=100?(Bill =(units*5),"₹5/units"):(units<=300?(Bill =(units*7),"₹7/units"):(Bill =(units*10),"₹10/units"))}</h4>
                        <h2>Total Amount={Bill}</h2>


                    </div>

                )}


        </div>
    )
}

export default Electri
