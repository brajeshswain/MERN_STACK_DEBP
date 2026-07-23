// //function outer(){
// //     let outerVar="i am in the outer."

// //     function inner(){
// //         console.log(outerVar)
// //     }
// //     return inner;
// // }
// // const closure =outer()

// // closure()
// // closure()
// // closure()
// // closure()

// step - 1 ->

// - a variable "outerVar" is created inside outer()
// - Normally, the variable is dissapier once the function is closed.

// step -2 ->

//  - inner() is defined inside outer() function.
// - it uses outer var form their parent scope.

//  step-3->

// - instead of calling inner(), we return the function itself.

// step-4->

// 

// //function counter(){
// //     let count = 0;
// //     return function(){
// //         count++;
// //         console.log(count)
// //     }
// // }
// // const incre=counter();

// // incre()
// // incre()
// // incre()
// // incre()
// // incre()


// count in side counter().
// retured function remember count.
// every time when call increment() it updated the same count().
// Closure -> inner function remeber count even after Counter() is finished / done.

// // function outer(){
// //     let name ="Brajesh"
// //     function inner(){
// //         console.log(name)
// //     }
// //     return inner;
// // }
// // const fn = outer()
// // fn()
// // fn()
// // fn()
// // fn()

// function great(name){
//     return function(){
//         console.log("hello" + name)
//     }
// }
// const gr = great("Brajesh")

// gr()
// gr()


// // function Counter(){
// //      let count = 0;
// //     function inner(){
// //         count++;
// //         console.log(count)
// //     }
// //     return inner


// // }
// // const cn=Counter();
// // cn()
// // cn()
// // cn()

// 2. write a function createMessage(msg) that returns another function,when the returned function is called, it should print the message.

// //function createMessage(msg)
// // {
// //     return function(){
// //         console.log(msg)
// //     }
// // }
// // const sayhello=createMessage("satya shree bhusan rout")
// // const sayhii=createMessage("pua")

// // sayhello()
// // sayhii()


function add(a){
    return function(b){
        return a+b;
        
    }

}
const ad=add(4)
console.log(ad(7))