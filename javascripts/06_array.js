// //array

// let arr =[20,30,40,50,60,70,80,90]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[4])

//loop over an arry

// let heros = ["iron man", "bat man","captain Americal","thar","sypder man"]
// for (let i=0;i<heros.length;i++)
// {
//     console.log(heros[i])
// }

// for(let i of heros){
//       console.log(i)
// }
  

//array methods :-

// let foodItems =["burger", "pizza","momos","pani-puri"]
// console.log(foodItems)
// foodItems.push("dahibara")
// console.log(foodItems)
// foodItems.pop()
// console.log(foodItems)
// foodItems.unshift("poha")
// console.log(foodItems)
// foodItems.shift()
// console.log(foodItems)

//to string

// let marks = [34, 56,78,90,43]
// console.log(marks)
// let mark =marks.toString()
// console.log(mark)

//concat ->

// let food = ["burger", "pizza","momos","pani-puri"]
// let drink = ["mozito","mocktail","oldmock","cofee"]
// let vegetable = ["potato","Onion","brinjal"]
// let res =food.concat(drink)
// console.log(res)
// let res1=[food] +[drink]+[vegetable]
// console.log(res1)

//slice ->
// let arr =[23,45,78,90,54,43,32,21]
// console.log(arr.slice(2,5))
// console.log(arr.slice(0,6))
// console.log(arr.slice(4,8))
// console.log(arr.slice(2))
// console.log(arr.slice(-3))
// console.log(arr.slice(4,-2))

//Splice ->

// let months = ["jan","march","april","june"]
// console.log(months)
// months.splice(1,0,"feb")
// console.log(months)

// months.splice(4,0,"may")
// console.log(months)
// months.splice(1,0,"jan")
// console.log(months)
// months.splice(1,1,"sep")
// console.log(months)
// months.splice(0,1)
// console.log(months)


// pratice

// let arr =[78,90,54,32,98,25,70]
// let sum=0
// for(let i=0;i<arr.length;i++)
// {
// sum=sum+arr[i];
// }

// let avg=sum/arr.length;
// console.log(avg)

let price=[789,543,590,432,489]
let per=0;

for(let i=0;i<price.length;i++)
{
    console.log(`value of the items ${i}=${price}`)
per=price[i]-(price[i]*10/100)
price[i]=per
}
console.log(price)

