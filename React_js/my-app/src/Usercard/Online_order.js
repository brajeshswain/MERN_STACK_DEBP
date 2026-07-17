// 
// Question 10:
//  Online Order Summary
// const orders = [
//  {id:101,customer:"Rahul",amount:2500},
//  {id:102,customer:"Priya",amount:700},
//  {id:103,customer:"Rohan",amount:3500},
//  {id:104,customer:"Neha",amount:1200}
// ];

// Requirements -> 

// Display all orders.
// If amount >2000
// Shipping = Free

// Else

// Shipping = ₹100
// Calculate Final Amount.
// Display total revenue.
//-------------------------------------------------------

import React from 'react'

const Online_order = () => {
    const orders = [
        { id: 101, customer: "Rahul", amount: 2500 },
        { id: 102, customer: "Priya", amount: 700 },
        { id: 103, customer: "Rohan", amount: 3500 },
        { id: 104, customer: "Neha", amount: 1200 }
    ];
    return (

        <div>
            {orders.map(({id, customer,amount }) =>
                <div>
                    
                </div>
            )}

        </div>
    )
}

export default Online_order
