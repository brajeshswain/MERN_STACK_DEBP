// Question 5: 
// Shopping Cart Total
// const cart = [
//  {id:1,item:"Shoes",qty:2,price:1500},
//  {id:2,item:"Bag",qty:1,price:1200},
//  {id:3,item:"Watch",qty:3,price:2500}
// ];

// Requirements -> 

// Display item details.

// Calculate
// Total = Qty × Price
// Show Grand Total of the cart.

// 
//----------------------------------------------------------------

import React from 'react'

const Shoping = () => {
    const cart = [
        { id: 1, item: "Shoes", qty: 2, price: 1500 },
        { id: 2, item: "Bag", qty: 1, price: 1200 },
        { id: 3, item: "Watch", qty: 3, price: 2500 }
    ];
    return (
        <div>
            {cart.map(({ id, item, qty, price }) =>
                <div>
                    <h1>item details</h1>
                    <h4> id:{id}</h4>
                    <h4>item:{item}</h4>
                    <h4> Qty:{qty}</h4>
                    <h4>Price:{price}</h4>
                    <h3>Total price:{qty*price}</h3>

                </div>

            )}

        </div>
    )
}

export default Shoping
