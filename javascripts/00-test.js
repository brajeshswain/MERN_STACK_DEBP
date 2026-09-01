// console.log("hell world")


// // var a= 10
// // {
// //     var a=12
// // }
// // console.log(a)

// // let a=10
// // {
// //     let a=12
// //     console.log(a)
// // }
// // console.log(a)

// // const a= "Brajesh"
// // {
// //     const a="brajesh"

// // }

// // console.log(a)


// const accountID = 542210510001817
// const AccountID = 542210510001816
// let accountEmail = "bikubrajesh@gmail.com" 
// let AccountEmail = "biku@gmail.com" 

// var accountpassword ="1234"
// var Accountpassword ="123"


// accountcity = "bbsr"
// let accountstate= "odisha";
// let Accountstate= "odi";


// console.log(accountID)
// console.log(AccountID)

// console.log(accountEmail)
// console.log(accountpassword)
// console.log(accountcity)
// console.log(accountstate)

// let a =5
// console.log(a)


// let a ="katak"
// let result=""

//  for(let i =a.length-1;i>=0;i--)
//  {
//     result=result+a[i]
//  }
//  if(result==a){
//     console.log("is a palendrom\t"+ result)
//  }else{
//      console.log("is a not palendrom\t"+ result)
//  }
//  console.log(result)

// let array =[1,2,3,4,5]
// array.forEach((sam)=>{
// console.log(sam)
// }
// )

// // console.log(arr)

const a=[20,30,40,50,60,5,3,2,]
let largest=0
let larg=0

for(let i=0;i<=a.length;i++){
if(a[i]>largest)
{
    larg=largest
    largest=a[i]

}
 else if (a[i] > larg && a[i] !== largest) {
       larg = a[i]

}
}
console.log(largest)
console.log(larg)

