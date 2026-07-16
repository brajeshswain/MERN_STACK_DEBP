// Question 1: 
// Display Even Numbers Using Props

// Create a parent component that passes an array of numbers to a child component using props.

// const numbers = [12, 15, 20, 33, 44, 51, 60];

// Requirements -> 
// Display only even numbers.
// Count how many even numbers are present.
// Show the total sum of even numbers.

// Expected Output

// Even Numbers:
// 12
// 20
// 44
// 60

// Total Even Numbers: 4
// Sum: 136

import React from 'react'

const Even = () => {
    const numbers = [12, 15, 20, 33, 44, 51, 60]

    let sum = 0;
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
            sum = sum + numbers[i];
        }
    }
    return (
        <div>
            total Even numbers:{count}
            sum:{sum}

        </div>
    )
}

export default Even
