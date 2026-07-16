// Question 2: Student Marks Report

// Use the following JSON.

// const students = [
//   {id:1,name:"Rahul",marks:78},
//   {id:2,name:"Priya",marks:45},
//   {id:3,name:"Amit",marks:91},
//   {id:4,name:"Riya",marks:33},
//   {id:5,name:"Neha",marks:67}
// ];

// Requirements -> 

// Display all students using map().
// If marks ≥ 50 show
// Pass

// otherwise

// Fail

// Count total pass and fail students.

import React from 'react'

const Student = () => {
  let passCount = 0;
  let failCount = 0;
  const students = [
    { id: 1, name: "Rahul", marks: 78 },
    { id: 2, name: "Priya", marks: 45 },
    { id: 3, name: "Amit", marks: 91 },
    { id: 4, name: "Riya", marks: 33 },
    { id: 5, name: "Neha", marks: 67 }
  ];
  return (
    <div>
      {students.map(({ id, name, marks }) => (
        <div key={id}>
          <h3>Name:{name}</h3>
          <p>Marks:{marks}</p>
          <p>Result:{marks >= 50 ? (passCount++ ,"pass" ) : (failCount++,"fail")}</p>
        </div>

      ))}
      Total pass:{passCount}
      Total fail:{failCount}
    </div>
  )
}

export default Student
