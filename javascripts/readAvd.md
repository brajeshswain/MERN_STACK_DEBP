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

event object :-

- it is a spacial; object that has details about the event.
- all event handler have access to the event objects properties & methods.

- syntax :-


node.event=(e) => {
    //handle here
}

- in methods you can get ->e.target,e.type etc....


practice task :-

Q.create a toggle button that chage the screen to dark mode when clicked a light mode when clicked again.