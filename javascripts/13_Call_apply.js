// call(), apply() & bind() function -> 


const person = {
    name: "rahul"
}
function introduce(age, city){
    console.log(`my name is ${this.name}`);
    console.log(`i live in ${city} and i am ${age} years old`)
}

// 1. call() -> 
// - call() immediately execute the function. 
// introduce.call(person, "bhubaneswar", 25)

// 2. apply() -> 
// - apply() works almost exactly like call(), but argument are passed as an array. 
// introduce.apply(person, [26, "ctc"])

// 3. bind() -> 
// bind() does not immediatelly execute the function. 
// instead it create a new function with "this" permanentlly set to the given object. 

const newFunction = introduce.bind(person);
newFunction(25, "dhenkanal")