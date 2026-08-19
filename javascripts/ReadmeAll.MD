Javascript :- 

- javascript is used for building logics of a web page. 
- javascript is a high level programming language , used in both client side (frontend) as well as server side (backend). 
- javascript comes from echma script so we see the latest version of javascript in terms of echama script. 
- the latest version of javascript is ES16. 
- Node js is the runtime environment of javascript. 

Variable in Javascript :- 

- variable is a container to store some digital data inside it. 
- in javascript there are 3 types of variable are there... 

1. var :- 

- var is a type of variable which is used for changing the variable value in later stage. 
- var is used in older browser so now in these days we will don't use the most of the cases. 

2. let :- 

- let is a type of variable which is also used for changing the variable value in later stage. 
- let is a block scope/function scope so we have been used let most of the cases. 

3. const - constant 

rules for creating the variable name :- 

- variable names are case senasative "a" & "A" is different. 
- only letter, digits , underscore & special character($, _) is allowed. (do not keep white space over here)
- only letter, underscore or special character($, _) should be the 1st character only. 
- reserved words cannot be a variable name. 
ex. for , while, var, let , console

Datatype in javascript :- 

- datatype is an attribute associated with a piece of data that tells a computer system how to interprit it's value. 
- in datatype we used "typeof" operator to know, what type of data it is. 
- mainly in javascript there are 2 types of datatypes are there.. 

1. Primitive datatype 

- in javascript there are 7 types of primitive datatypes are there.. 

1. Number - Number are the type of datatype those it contain some numerical values. 
2. Boolean - in boolean datatype we got boolean value like true/false.
3. Undefined - the data is not define
4. Null - nothing
5. bigInt - big integer value 
6. string - sequence of characters 
7. Symbol - in symbol we got one symbol of more than one value. 

2. reference / non-primitive datatype

- reference datatype are the type of datatype which can hold multiple element in a single frame. 
- there are 3 types of reference datatypes are there... 

1. Array 

- array is a collection of similar type of data stored in contigious memory location. 
- array index starts from "0".

ex. let arr = [34, 78, 90, 65, 43, 92, 34]

2. Object -> 

- obejct is a reference datatype where we can store more than one element in a single frame. 
- mainly objects are working on (key:value) pair. 

ex. 

let hari = {
    "name" : "hari babu",
    "phone-no": 678943289,
    "address": "bhubaneswar",
    "carrier": "good"
}

- in the above example left hand side are the "keys", right hand sides are the "values" of that keys & hari is our object name. 

3. Function :- 

- function is a block code that perform specific task. 
- function reduce our code complexity , time & space complexity. 
- syntax :- 

function creation -> 

function my_schedule(){
    console.log("i wake up at 5 am")
    console.log("then take a good shower")
    console.log("eat breakfast with a cup of tea")
}

function calling -> 

my_schedule()
my_schedule()

Operator in JS :- 

- operator are key features to do some task or operate some task. 
- ex. A + B 
- in the above example A & B are the operands & "+" sign is our operator. 
- in javascript , there are 5 types of operator are there...

1. Arithmetic operator -> (+, - , *, / , %, **)
2. assignment operator -> (=, +=, -=, *=, /=, %=, **=)
3. compairision operator -> (==, !==, ===, <, > , <=, >=)
4. logical operator -> Logical AND (&&), Logical OR (||), Logical NOT (!)
5. unary operator -> Increament (++), decrement (--)

Conditional statement -> 

- to implement some condition in the code. 
- there are 3 types of conditional statement are there... 

1. if-condition :- 

- if condition is true then statement is true. 
- syntax :- 

if(condition){
    statement
}

2. if-else condition :- 

- if condition is true then statement is true otherwise false. 
- syntax :- 

if(condition){
    statement
} else {
    statement
}

3. if-elif condition :- 

- it's check the condition multiple times, where the condition is true, it returns the statement. 
- syntax :- 

if (condition){
    statement
} else if(condition){
    statement
} else if(condition){
    statement
} else {  // default condition 
    statement
}

practice task :- 

write a code which give grades to student according to their score.. 

1. 90-100 (A)
2. 80-89 (B)
3. 70-79 (C)
4. 60-69 (D)
5. 50-59 (E)
6. 0-49 (F-Fail)

Loops in javascript :- 

- loops are used to execute a piece of code again & again. 
- there are 5 types of loops are there... 

1. for loop -> 

- syntax :- 

for (initialization; condition; updation){
    statement
}

ex. we want to print "javascript" 5 times... 

for(let i = 1; i <= 5; i++){
    console.log("javascript)
}

working -> 

i = 1 -> javascript 
i = 2 -> javascript 
i = 3 -> javascript 
i = 4 -> javascript 
i = 5 -> javascript 

2. while loop
3. do-while loop 
4. for-in loop 
5. for-of loop 

2. while loop -> 

- syntax :- 

initialization; 
while(condition){
    statement;
    updation;
}

3. Do-while loop -> 

- syntax :- 

initialization;
do(
    statment;
    updation;
) while (condition)

4. For-of loop -> it iterates on string & array.
5. for-in loop -> it iterates on objects. 

String in javascript :- 

- basically string is a sequence of character used to represent text. 
- create a string -> let str = "web bocket". 
- we calculate the string length -> str.length propety. 
- we calculate the string index -> str[0], str[1], str[2] etc.... 

string literals & interpolation -> 

string literals :- 

- it's a way to have embedded expression in string. 
- it's denoted by symbol ``.

string interpolation :- 

- to create string by doing substitution of placeholder. 
- ex. -> string text ${expression} string text. 

escape symbol in string :- 

1. \n -> new line 
2. \t -> new tab 

string methods :- 

1. str.toUpperCase()
2. str.toLowercase()
3. str.trim()
4. str.slice(start, (end-1))
5. str1.conact(str2)
6. str.replace(oldVal, newVal)
7. str.replaceAll(oldVal, newval)
8. str.charAt(idx)

Array in Javascript :- 

- array is a collection of items. 
- ex. let arr = ["iron man", "bat man", "spyder man"]
- array index starts from "0".
- indexing of array -> arr[0], arr[1] etc... 

looping over an array -> 

- loop -> iteration 
- syntax -> 
for ( let i = 0; i < arr.length(); i++){
    statement
}

methods of array :- 

1. puch() -> add an element to end of an array
2. pop() -> remove from the end of an array
3. toString() -> convert array to string 
4. concat() -> add to or more array / join multiple array
5. unshift() -> add an element to the start of an array
6. shift() -> remove an element to the start of an array
7. slice() -> retiurn a piece of the array
8. splice() -> change original array (add, remove, replace)

practice question -> 

1. for a given array with marks of students -> [78,90,54,32,98,25,70].
find the average marks of the student. 

2. for a given array with price of 5 items -> [789,543,590,432,489]. all items have an offer of 10% off of them. change the array to store final price after applying offer. 

function in Javascript :- 

- it is a block of code that perform specific task, can be invoked or called whenever we need. 
- ex. (in-build function)

1. console.log("hello") -> in this code .log() is a function 
2. "abc".toUpperCase() -> in this code .toUpperCase() is a function 
3. [1,2,3].push(4) -> in this code .push() is a function

- there are 2 types of function in javascript. 
1. Normal Function -> 
-> Type A function -> 

// function creation -> 

function function_Name(){
    // do some task
}

// function calling -> 

function_Name()

-> Type B Function -> 

// function creation -> 

function function_Name(parameter_1, parameter_2){
    // do some task
}

// function calling -> 

function_Name(arg_1, arg_2) 

2. Arrow function -> 

- it is a compact way of writing a function. 
- it uses map() function to retrive the backend data, 
          filter() function for filterise our data etc... 

// function cration -> 

const function_Name = (param_1, param_2) => {
    // to do some task
}
// function calling -> 

function_Name(arg_1, arg_2)

normal function -> 

function sum(a,b){
    return a + b;
}
sum(2,3)

arrow function -> 

const sum = (a, b) => {
    return a + b;
}
sum(2,3)

Practice Question -> 

1. create a function using the "function" keyword that takes a string as an argument & return the number of vowels in that string. (TCS)


Map Method/function in JS :- 

- create a new array with result of some operation. the value it's callback return are used to form a new array. Normally we create a new array by calling the function in every array element. 

- map does not change the original array. 
- it does not execute the function for empty array. 
- syntax :- 

arr.map(callbackFunction (value, index. array))

Filter Method/function in JS :- 

- create a new array of element that gives true for a condition/filterization. 
- ex. all even array in the given digits. 

let newArr = arr.filter((val) => {
    return val % 2 === 0;
})

For Each loop in array :- 

- arr.forEach(callbackFunction)
- callbackFunction -> it is a function to execute for each element in the array. 
- calllbackFunction is a function that passed as an argument of another function. 




Advance JS :- 

1. DOM 
2. Event & Event handling 
3. Sync & Async code (promise, .then, .catch, async & await)
4. API handling 

DOM in Javascript :- 

- DOM stands for document object model. 
- when a web page is loaded, the browser create a document object model of that page. 
- The HTML dom model is constructed as a tree like structure. 

windows -> document -> HTML -> Head -> meta tags & title 
                            -> body -> h1 , h2 , img etc... 

Why we used DOM in javascript :- 

- javascript can change all the HTML element in the page. 
- Javascript can create , delete or edit any HTML page directlly through DOM. 
- Javascript can also access CSS styling diorectlly. 

window object :- 

- the window object represents an open window in a browser. 
- it is a browser object & it automatically created by browser. 
- it is also a global object with lots of properties & methods. 

DOM Manipulation :- 

1. selecting with ID -> document.getElementById("myID")

2. selecting with class -> document.getElementsByClassName("myClass")

3. selecting with Tag -> document.getElementsByTagName("p")

4. Query Selector -> 

    - document.querySelector("id/class/tag")
    - document.querySelectorAll("id/class/tag")

5. Attributes -> 

    - getAttribute(attr) -> to get the attribute value
    - setAttribute(attr, value) -> to set the attribute value

6. Insert element -> 

    - node.append(ele) -> adds at the end of the node (inside)
    - node.prepend(ele) -> add at the start of the node (inside)
    - node.after(ele) -> adds after the node (outside)
    - node.before(ele) -> adds before the node (outside)

7. Delete element -> 

    - node.remove(ele) -> remove the node

Event in Javascript :- 

- the change in the state of an object is known as event. 
- some famous events are... 

1. Mouse Events (click, dblClick, onMouseover)
2. keyboard event (keypress, keyUp, KeyDown)
3. Form event (submit)
4. print event.. 

Event Handling :- 

- syntax :- 

node.event = () => {
    // handle here
}

Event Object :- 

- it is a specia;l object that has details about the event. 
- all event handler have access to the event objcets properties & methods. 
- syntax :- 

node.event = (e) => {
    // handle here
}

- in methods you can get -> e.target, e.type etc..... 

practice task :- 

Q. create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again. 

Sync in Javascript :- 

Synchronous :- 

- Synchronous means the code runs in a particular sequence of instruction given in the program. 
- Each instruction waits for the privious instruction to complete it's execution.

ex. 

console.log("one")
console.log("two")
console.log("get Data")
console.log("three")

Output -> one two three 

Asynchronous :- 

- Due to synchronous programming, sometimes imp. instruction get blocked due to some privious instruction, which causes a delay in the UI. 
- asynchronous code execution allows to execute next instruction immediatelly and doesn't block the flow. 

ex. 

console.log("one")
console.log("two")
setTimeout(() => {
    console.log("three")
}, 4000) // 4000 ms = 4 s
console.log("Four")
console.log("five")

output -> one, two , four, five , three

callback in javascript :- 

- a callback function which passed as an argument of another function. 

callback hell :- 

- it's a nested callback stacked below one after another forming a pyramid structure. 
- this style of programming becomes difficult to understand & manage. 

promise in javascript :- 

- it is a solution of callback hell. 
- synatx :- 

let promise = new Promise((resolve, reject) => {
    // statement 
})

- a javascript promise object can be ->> 

1. pending -> the result is undefined 
2. resolved -> the result is a value (fulfilled)
3. reject -> the result is an error

- promise.then((res) => {
    // statement
})
- promise.catch((err) => {
    // statement
})

Async & Await in JS :- 

- async function always return a promise. 
- syntax :- 

async function myFunc(){
    // statement
}

note :- await pauses the execution of its surrounding async function until the promise is settled. 

API Handling/ fetch API :- 

- the fetch API provides an interface for fetching data. 
- it uses Request & Response object. 
- the Fetch() methods is used to fetch a data. 
- syntax :- 

let demo = fetch(URL)

- josn -> javascript object notation 

Status code of Node Js :- 

- 200 -> OK
- 201 -> created 
- 202 -> accepted 
- 300 -> multiple choice 
- 302 -> found 
- 400 -> bad request 
- 402 -> payment required 
- 404 -> Not Found 
- 406 -> not accept 
- 408 -> request timeout 
- 500 -> internal server error 
- 502 -> bad gateway 
- 504 -> gateway timeout

Closure in Javascript :- 

- A closure is the combination of a function and it's lexical environemnt, allowing the function to access variable from it's outer scope even the outer function has finished execution. 

practice question -> 

1. write a function createCounter() that.. 
    - initialize private variable count = 0
    - return an object with two methods.
        -> increament() - increases count by 1
        -> getCount() - return current count. 

2. write a function createMessage(msg) that returns another function, when the returned function is called, it should print the message. 

3. create a function add(a) that returns another function which takes b and returns a + b. 


Spread Operator :- 

- the spread operator (...) in javascript is used to expand element of an array, objects or iterable into indivisual elements. 

- simply we can say that spread operator allows you to unpack values from arrays or object. 

Higher Order Function :- 

- a function that takes another function as an argument or return a function. 

Practice Question :- (each 20 mark)

1. Create a counter in javascript (increment & decreament).
2. create a simple web page with a button that changes text when clicked.