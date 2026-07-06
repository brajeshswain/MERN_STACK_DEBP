
// tcs pratice questions



// function vowels(str) {
//     let count =0;
//     for(let at=0;at<str.length;at++ ){
//         if(str[at] =="a" || str[at]=="e" || str[at] =="i" || str[at] =="o" ||str[at] =="u"){
//             count++;
//         }
//     }
//     console.log(count)
// }
// vowels("Envaroment")

//type a function

// function Myfunction(){
//     console.log("today is a good day")
//     console.log("i am a student")


// }

// Myfunction()

//type b function

// function myfunction(a, b){

//     console.log(a+b)

// }

// myfunction(3,5)
// myfunction(3000,5000)

//for each loop ->

// let arr =[1,2,3,4,5,6,7,8,9]
// arr.forEach(function printVal(val){
// console.log(val)
// })

// arr.forEach((val) =>{
//     console.log(val)
// }
// )

// let arr1=["pune","goa","hariyana","panjab"]
// arr1.forEach((val)=>{
//     console.log(val)
// })

//example of a map function ->

// let nums =[4,5,6,8,9,3,2]
// let newArr = nums.map((val)=>{
//  return val*val
// })
// console.log(nums)
// console.log(newArr)

// example of a filter method ->

// q. print only even no. is the given array

// let arr = [2,3,4,5,6,7,8,9,10,11,12]

// let newArr = arr.filter((num)=>
// {
    // if(num%2==0)
    // {
    //     console.log(num)
    // }
//     return num%2==0;
// })
// console.log(arr)
// console.log(newArr)


let marks=[89,86,34,91,32,64,92,45]

let newMarks = marks.filter((num)=>{
    return num >= 90;
})
console.log(marks)
console.log(newMarks)