React JS:-

- React js is a fronted java scripts Library.
- react js developed by the facebook by software engineer jordan walke.
- react is also know as reaact js or Reactjs.
- basically react is a tool for building UI (user interface) components.

NPX :-

- npx stands for  node package Execute.
- purpose -> it is an npm package runner bundled automatically with npm.
- function -> it allows ypo to run & execute javascript package directlly from the npm, without needing in install them parmanentlly.
- stroge-> it download the package to a temporary cache memory,execute the cammand & clear it up right after.

NPM :-
- NPM  stands for node package manager.
- purpose ->it is the default package manager for node js.
- function -> it installs ,updates & deletes javascripts packages and dependencies for our project.
- storage -> it saves package parmanentlly either locally inside our project's "node modules" folder or globally on our system.

React js History :-

- latest version of react js is 19.2.7
- inintal release to the public was in july 2013.
- React js was 1st used in 2011 for facebook's newsfeed features.
- initially react gained lots of hate for the mix of javascripts + HTML but in later stage or now these days 45% of software developer used react js as the core library for software development.
- ".jsx" is the extention of react js.
- jsx stands for 'javascript XML' means javascript + HTML.

--------------------------------------------------------------------------------------------------------------------

- When you are installing react it will have multiple way to install and setup but there are 2 common way that we are using react js is 

1. CRA(create-react-app)
2. vite(fastest way to install rect js)


File structure of a react js folder ->

1. README.md ->
 - we will use readme.md for write some description or outline of our project.

2. package.json ->

 - it will keep scripts , versions details  & dependency of our project.

3. package-lock.json ->

- it basically store dependency of package.json file.

4. .gitignore file ->
 - files & folder ignored by git tracking.......

5. src(source folder) ->

- it is the main source folder where we can create file & write code in it.


6. Public ->
 - Public is used to take our website logo that show publically and we can store images and video in that public folder by creating separate separate folder.

7. Node Modules -> 
 - auto manages extrenal depandancies that need for execute the project and we can say it is the god father of the react js project.

props in Reacts js :-

- props stands for properties.
- props are passed to components via HTML attributes.


Practice Question From react js :-

1. Create a functional component called "Greeting" that takes a "name" Prop and display"Hello ,<name>!" 

expected output -> Hello , Rakesh !

2. create a component "userCard" that takes props: name, age & city and display them in a card format. 

expected output -> 
name : Rakesh 
Age : 23 
City : Bhubaneswar

3. create a component Button that accepts a label prop. if no label is passed, it should display "Click Me".

4. create a parent component App that passes a message prop to a child component "MessageBox". The child should display the message. 

expected output -> App -> MessageBox


rakeshmohapatra2078@gmail.com

React Hooks:-

- Hooks allow function to have  access to state & other react features without using classes.
- They provides diret API to react concept like props,state,context etc....
- basically hook is a function that let us "hook into" react state and lifecycle feature from functional component.
-  there are many types of hooks are there but most used hooks are...

1. useState()
2. useeffect()
3. useRef()
4. useMemo()
5. useContext()
6. useReducer()
7. useCallback()

1. useState() Hook in React ->

- the react useState() hook allows us to track the state of a functional component.
- state generally refers to data or properties that need to be tracking in an application.

import useState()->

import{useState} from 'react'

initialize useState ->
- we initialize our state by calling useState in our function component.
- useState accepts an initial state & return two value.

1. the current state
2. a function that updates the state

synatx -> 
const [state ,setState]=useState("initial value")
ex-> const[color,setColor]= useState("red")

useState() questions->
1. Toggle Button(on/off)
- create a toogle button that toggle between ON & OFF
- expected output:- ON-> OFF-> ON
2. create a TODO list
- user can add task
- tasks are displayed i a list
- each task has a delete button
3. Show/Hide password
- toggle button (show/hide)
- change input type dynamially



useEffect() Hook in React :-

- useEffect is  a react hoot that lets us perform side effect in functional component, such as.....

    - feacting data from API
    - updating the DOM
    - setting up timer
    - adding event listener

syntax :-

import{useEffect} from "react";

useEffect(()=>{
    //add side effect here
    return()=>{
        //cleanup code(optinal)
    }
},[dependencies]);

1. Runs on Every Render ->

- if you don't provide any dependency array ,the effect runs after every render.

Every render.
Syntax :-

useEffect(()=>{
    console.log("component rerendered")
})

2. Runs only once (on Mount)
- pass an empty dependency array[].

Syntax :-
useEfefct(()=>{
    console.log("Component Mounted")
},[]);


3. Runs when dependency changes
 - the effects runs only when the "count/dependecy" changes.

syntax :-

useEffect(()=>{
    console.log("component Mounted")
},[dependency]);


4. cleanup functionin useEffect
- useful for removing event listener ,clearing timer etc....

Syntax :-
useEffect(()=>{
    //add side effects here
    return()=>{
        //cleanup code(optinal)
    }
},[dependency]);