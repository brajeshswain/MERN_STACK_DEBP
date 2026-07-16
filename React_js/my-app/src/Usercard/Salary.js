// Question 4: 
// Employee Salary Bonus
// const employees = [
//  {id:1,name:"John",salary:25000},
//  {id:2,name:"David",salary:42000},
//  {id:3,name:"Sam",salary:38000},
//  {id:4,name:"Alex",salary:52000}
// ];

// Requirements -> 

// Display all employees.
// If salary > 40000
// Bonus = 5000

// Else

// Bonus = 2000

// Show Total Salary = Salary + Bonus.
//--------------------------------------------------------------------------------------------------
import React from 'react'

const Salary = () => {
    let newSalary
    const employees = [
            { id: 1, name: "John", salary: 25000 },
            { id: 2, name: "David", salary: 42000 },
            { id: 3, name: "Sam", salary: 38000 },
            { id: 4, name: "Alex", salary: 52000 }
        ]
    return (
    
    < div >
           
                {employees.map(({id,name,salary})=>
                 <div>
                <h2>id:{id}</h2>
                <h2>name:{name}</h2>
                <h3>salary:{salary}</h3>
                <p>salary:{salary>40000?(newSalary=(salary+5000) ,"5k bouns"):(newSalary=(salary+2000),"2k bouns")}</p>
                <h2>final salary:{newSalary}</h2>
                </div>
                )}

            
      
    </div >
  )
}

export default Salary

