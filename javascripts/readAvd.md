Advance Javascripts :-

1. DOM
2. Event & Event handling
3. sync & Async code(promise, .then, .catch, async & await)
4. API handling

DOM in javascripts :-

- DOM stands for document object model.
- When a web page is loaded , the browser create a document object model of that page.
- The  HTML dom model is constructed as a tree like structure.

window -> document -> HTML -> head -> meta tags & title
                           -> body -> h1 , h2 , img etc...


why we used Dom in js :-

- js can change all the html element in the page.
- js can create , delet or edit any html page directlly through DOM.
- js can also access CSS styling directlly.

window object :-

- the window object represents an open window in a browswe.
- it is a browser object & it automatically creates by browser.
- it is also a global object with lots of properties & methods.

DOM manipulation :-

1. selecting with ID -> document.getElementById("my ID")

2. selecting with class -> documnet.getElementsByclassName("myclass")

3. selecting with tag -> document.getElemensByTagName("p")

4. Query selector ->
    - document.querySelector("id/class/tag")
    - document.queryselectorAll("id/class/tag")

5. Attributes ->

    - getAttributes(attr) -> to get the attribute value
    - setAttributes(attr,values) -> to set the attribute value
    

6. Insert element ->

    - node.append(ele)->adds at the end of the node(inside)
    - node.prepend(ele)-> add at the start of the node(inside)
    - node.after(ele)-> adds after the node (outside)
    - node.before(ele)-> adds before the node (outside)

7. Delete element ->

    - node.remove(ele) -> remove the node


Event in javascript :-

- the change in the set of an an object is know as event.
- some famous events are....

1. mouse Events (click,Dblclick,onmouseover)
2. keyboard Events (keypress,keyup,keydown)
3. form event (submit)
4. print Event ....

Event Handling :-

- syntax :-

node.event =()=>{
    //handle here
}

Event object :-

- it is a spacial; object that has details about the event.
- all event handler have access to the event objects properties & methods.

- syntax :-


node.event=(e) => {
    //handle here
}

- in methods you can get ->e.target,e.type etc....


practice task :-

Q.create a toggle button that chage the screen to dark mode when clicked a light mode when clicked again.

Synchronous :-
- it means the code runs in a particular sequence of instruction give in the program.
- Each instruction waits for the privious instruction to complete it's execution.
ex.
console.log("one")
console.log("two")
console.log("three")

output -> one two three

Asynchronous :-
- Due to synchronous programming , sometimes imp. instruction get blocked due to some privious instruction, which causes a dealy in the UI.
- asychronous code execution allows to execute next instuction immediatelly and doen't block the flow.

 ex.
        console.log("one")
        console.log("two")
        setTimeout(() =>{
            console.log("three")
        }, 4000)//4000 ms = 4 s

        console.log("four")
        console.log("five")

output -> one, two ,four ,five, three

callback in javascript :-

- a callback function which passed as an argument of another function.


callback hel :-

-it's nested callback stacked below one after another forming a pyramid structure.
- this style of programming becomes difficult to understand & manage.

promise in JS :-

- it is a solution of callback hell.
- syntax :-

let promise = new promise ((resolve,reject)=>{
    //statement
})


- a javascript promise object can be ->>


1. pending -> the result is undefined
2. resolved -> the result is a value (fulfilled)
3. reject -> the result is an error

- promise.then((res)=>{
    //statement
})
- promise.catch((err)=>{
    //statement
})


Async & Await in JS :-

- async function always return a promise.
- syntax :-

async function myfunc(){
    //statement
}

note :- await pauses the execution of its surrounding async function until the promise is settled.

<!-- example :-

async (statement 1 )
await ->(statement 2 )
await ->(statement 3 )
await ->(statement 4) -->


API Handing /fetch API :-

-  the fetch API provides an interface for fetching data.
- it uses request & response object.
- the fetch() methods is used to fetch a data.

- syntax :-

let demo=fetch(URL)

//josn => javascripts object notation

status code of Node js :-

- 200 ->ok
- 201 ->create
- 202 ->accepted
- 300 ->multiple choice
- 302 -> found
- 400 -> bad request
- 402 -> payment required
- 404 -> Not found
- 406 -> not accept
- 408 -> request timeout
- 500 -> internal server error
- 502 -> bed gateway
- 504 -> gateway timeout_



pratice Question :-

1. create a counter in javascript(increment & decreament).
2. create a simple web page with a button that changes text when clicked.