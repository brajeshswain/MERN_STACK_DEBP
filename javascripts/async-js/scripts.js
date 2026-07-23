// console.log("one")
// console.log("two")
// setTimeout(() =>{
//     console.log("hello")
// }, 4000)

// console.log("four")
// console.log("five")


// CAll back function

// function sum(a,b){ //normal function
//     console.log(a+b)
// }

// function cals(a,b,d){ //main callback function
//     d(a,b)
// }
// cals(2,3,sum) // function passed an argument -{sum}

// ANTOTHER FUNCTION ------>

// function niba(name){
//     console.log("hello",+name)
// }
// function galua(name,chora)
// {
//     chora(name)

// }
// galua("Nigam",niba)
//         console.log("iii")
//         resolve("success")
//         // reject("some network issue occured")
//     }, 8000)
// })

// -----------------------------

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId)
//         if (getNextData) {
//             getNextData()
//         }
//     }, 4000)
// }
// console.log("getting ->data1....")
// getData(1, () => {
//     console.log("getting data2....")
//     getData(2, () => {
//         console.log("getting data3....")
//         getData(3, () => {
//             console.log("getting data4.....")
//             getData(4, () => {
//                 console.log("getting data5....")
//                 getData(5,()=>{
//                     console.log("getting data6....")
//                 })

//             })
//         })
//     })
// })

// promise example -

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("success")
//             // reject("error")
//         }, 5000)
//     })
// }
// getData(1)
//     .then(() => {
//         return getData(2)
//             .then(() => {
//                 return getData(3)
//                     .then(() => {
//                         return getData(4)
//                             .then(() => {
//                                 return getData(5)
//                             })
//                     })
//             })
//     })


// .then .catch ex.....

// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>
//     {
//         console.log("i love You")
//         // resolve("success")
//         reject("error")

//     })
// }
// let promise = getPromise();

// promise.then ((res)=>{
//     console.log("promise fulfilled",res)
// })
// promise.catch((err)=>{
//     console.log("promise rejected",err)

// })

//async & wait ->>>>......


// function API(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Hiw Brajesh")
//             resolve("success")
//             // reject("error")
//         },5000)
//     })
// }
// async function getWheatherData(){
//     await API
// }
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {



            console.log("data", dataId)
            resolve("success")
        }, 5000)
    })
}
async function getAllData() {
    await getData(1)
    await getData(2)
    await getData(3)


}