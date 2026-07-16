// Question 3: 
// Product Discount Calculator
// const products = [
//  {id:1,name:"Laptop",price:60000},
//  {id:2,name:"Phone",price:25000},
//  {id:3,name:"Tablet",price:18000},
//  {id:4,name:"TV",price:55000}
// ];

// Requirements -> 

// Display product name.
// If price > 30000
// Apply 10% discount.

// Otherwise

// No Discount.

// Show final price after discount.

import React from 'react'
let newPrice
const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Phone", price: 25000 },
    { id: 3, name: "Tablet", price: 18000 },
    { id: 4, name: "TV", price: 55000 }
];

const Product = () => {
    return (
        <div>
            {products.map(({ id, name, price }) =>
                <div>
                    <h3>Id:{id}</h3>
                    <h2>name:{name}</h2>
                    <h2>price:{price}</h2>
                    <p>discount:{price > 30000 ? (newPrice = (price * 0.9), "10% discount") : (newPrice = (price), "No discount")}</p>
                    <p>Final Price: {newPrice}</p>

                </div>

            )}

        </div>
    )
}

export default Product
