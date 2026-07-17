// Question 9: Student Percentage & Grade
// const result = [
//  {name:"A",marks:450,total:500},
//  {name:"B",marks:380,total:500},
//  {name:"C",marks:250,total:500},
//  {name:"D",marks:180,total:500}
// ];

// Requirements -> 

// Calculate

// Percentage = (Marks / Total) × 100

// Grade

// ≥90 → A+
// ≥75 → A
// ≥60 → B
// ≥40 → C

// Otherwise → Fail

// Display percentage and grade.
//-------------------------------------------------------

import React from 'react'

const Percentage = () => {
    let per
    const result = [
        { name: "A", marks: 450, total: 500 },
        { name: "B", marks: 380, total: 500 },
        { name: "C", marks: 250, total: 500 },
        { name: "D", marks: 180, total: 500 }
    ];
    return (
        <div>
            {result.map((result) =>
                <div>
                    <h2>Name:{result.name}</h2>
                    <h4>percentage:{per=(result.marks/result.total)*100}%</h4>
                    <h5>Grade:{per>=90?("A+"):(per>=75?("A"):(per>=60?("B"):(per>=40?("C"):("fail"))))}</h5>
                </div>

            )}

        </div>
    )
}

export default Percentage
