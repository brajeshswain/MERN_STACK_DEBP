// let students=[
//     {name:"Brajesh", marks:60},
//     {name:"swain", marks:70},
//     {name:"Biku", marks:90}
// ]
//  const student=students.find((students)=>students.marks<90)
//  console.log(student)



//  const number =[10,20,30,40]

//  const total = number.reduce((sum,num)=>{
//     return sum+num
//  },0)
//  console.log( total)

const product=[
    {name:"Laptop", price:50000},
    {name:"mouse",price:10000},
    {name:"keyboard",price:20000}
]
let total = product.reduce((first,second)=>
{
    return first + second.price
},0)
console.log(total)