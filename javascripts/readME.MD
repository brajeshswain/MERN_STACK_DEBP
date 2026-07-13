Javascript :-

- javascript is used for bulind logical of a wed page.
- java script is a high level programming language,used in both client side(frontend) as well as server side(backend).
- javascript comes from echma script so we see the latest version os javasript in terms of echama script.
- the latest version of javascript is ES16.
- Node js is the runtime enviorment of javascript.

Variable in javascript :-

- variabel is a container to store some digital data inside it.

- in javascript there are 3 types of veriable are there:-

1. var :-

- var is a type variable which is used for changing the variable value in later stage.
- var is used in older browser so now in these days we will don't use the most of the cases.

2. let :-

- let type of veriable which is also used for changing the variable values in later stage.
- let is a block scope/ function scope so we have been used let most of the cases.

3. const :- constant 

- rules for creating the variable name :-
    - variable names are case senasative 'a' &  'A' are different.
    - only letter,digit,underscrore & special character is allowed.(do not keep white space over here)
    - only letter, underscore or special character($,_) should be the 1st character only.
    - reserved words cannot be a variable name.
    ex. for,while,var,le,console

Datatype in javascript :-

- datatype is an attribute associated with a piece of data that tells a computer system how to interprit it's value.
- in datatype we used "typeof" operator to konow, what type of data it is.

- mainly in javascript there are 2 types of datatypes are there:-

    1. primitive datatypes
     - in javascript there are 7 types of primitive datatypes are there.....
      1. Number - number are the type of datatypes those it contain some numerical values.
      2. Boolean - in boolean datatypes we got boolean values like true/false.
      3. undefined - the data is not define
      4. Null - nothing
      5. bigInt - big integer values (ex.  678n= n is like a suffix of this big interger value)
      6. string - sequence of characters
      7. symbol - in symobl we got one symbol of more than one value. (let y = Symbol("hello") console.log(y) //Symbol("hello") (->symbols are unique -> it used to create hidden or private properties. -> it useful in large size application.) )

    2. reference / non-primitive datatypes

    - reference datatypes are the types of datatypes which can hold multiple elements in a single  frame.
    - there are 3 types of reference datatypes are there.

    1. Array
        - array is a collection of similar type of data stored in contigious memory location.
        - arry index starts from '0'.

        ex let arr=[56,6,647,746]
    2. Object

        - Object is reference datatype where we can store more than one element in a single frame.
        - mainly objects are working on (key:value) pair.

        ex.
        let bibhu ={
            "name" : "bibhu",
            "phone-no":678943289,
            "address":"keonjhar",
           "carrier":"very Good"
        }
        - in the above example left hand side are the "keys", right hand side are the "values " of that key & bihu is our object name.
    3. Function :-

    - function is a block code that perform spacific task.
    - function reduce our code complexity,time & space complexity.

    - Syntax :-

    Function creation->

    function My_schoole(){
        console.log("ilove my school")
        console.log("my school")
        console.log("school")
    
    }    

    My_schoole()
    My_schoole()

    
    Operator in JS :-

- operator are key features to do some task.
- ex. A + B
- In the above example A & B are the operandds & "+" sign is our operator.
- In javascript, there are 5 types of operator are there...

1. Arithmetic operator -> (+, -, *, /, %, **)
2. Assignment operator -> (=, +=, -=, *=, /=, %=, **=)
3. Comparision operator -> (==, !==, ===, <, >, <=, >=)
4. Logical operator -> Logical AND (&&), Logical OR (||), Logical NOT (!)
5. Unary operator -> Increment (++), decrement (--)

Coditional statement ->

 - to imlement some condition in the code.
 - there are 3 types of conditional statement are there...

1. if-condition :-
  - if condition is true then statement is true.
  - syntax :-
  if(condition){
    statement
  }
2. if-else condition  :-

  - if condition is true statement is true otherwisw falsw.
  - syntax :-
  if(condition){
    statement
  }else{
    statement
  }
3. if-elif condition :-
 - it's check the condition multiple times,where the condtion is true, its returns the statement.
 - syntax :-

 if(condtion){
        statement
 }
 else if(condtion){
     statement
 }else if(condtion){
     statement
 }else{
     statement
 }


practice task :-

write a code which give grades to students according to their score..

1. 90-100(A)
2. 80-89(B)
3. 70-79(c)
4. 60-69(D)
5. 50-59(E)
6. 0-49(f-fail)


loops in javascript ;-

- loops are used to execute a piece of code again & again.
- there are 5 types of loops are there....


1. for loop :-

syntax :-

for(initialization;conditon;updation){
    statement
}
ex. we want to print "js" 5 times...
for(let i=1;i<=5;i++){
    console.log("javascript")
}

2. while loop->

syntax :-
initialization;
while(condtion){
    statement;
    updation;
}

3. do-while loop->

Syntax :-
initialization;
do{
   statement; 
   Updation;
}while(condtion)


4. for-in -> it iterates on string  & array.
5. for-of loop -> it iterates on objects.


String in javascript :-

- basically string is a squence of character used to represent taxt.
- create a string -> let str = "Web bocket".
- we calculate the string length -> str.length propety.
- we calculate the string index -> str[0],str[1],str[2] etc.....

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
3. \r -> carriage return


string method :-

1. str.toUppercase()->// note string can't be changed original character so that  why we will take one another variable to do this.
2. str.toLowercase()
3. str.trim()
4. str.slice(start,(end-1))
5. str.concat(str2)
6. str.replace(oldVal,newVal)
7. str.replaceAll(oldVAl,newVAl)
8. str.CharAt(idx)

Array in javascripts :-

- array is collection of items.
- ex. let arr =["iron man","bat man","spyder man"]
- array index starts from "0".
- indexing of array -> arr[0],arr[1] etc...

looping over an array ->

- loop -> iteration
- syntax -> 
for (let i=0; i< arr.length(); i++)
{
    statement
}

methods of array :-

1. push() -> add an element to end of an array
2. pop() -> remove from the end of an array
3. toString() -> convert array to string
4. concat() -> add to or more array /join multipule array
5. unshift() ->add the element to the starting of an array
6. shift() ->remove the element to the starting of an array
7. slice() -> retiurn a piece of the array
8. Splice() -> change original array   (add,remove, replace)


pratice question ->

1. for a given array with marks of students ->[78,90,54,32,98,25,70].
find the average marks of the students.

2. for a given array with price of 5items ->[789,543,590,432,489].
all tems have an offer of 10% off of them .change the array to store final price after applying offer.


Function in javascripts:-

- it is a block of code that performs specific task,can be invoked or called whenever we need.
- ex.(in-build function)

1. console.log("hello") -> in this code .log() is a function
2. "abc" .toUppercase() -> in this code .toUpperCase() is a function
3. [1,2,3].push(4) -> in this code .push() is a function

- there are 2 types of function in javascript.
    1. Normal function:-
-> Type A Function ->

    //Function Creation ->

    function function_name(){
        //do some task
    }

    //function calling->

    Function_name()

-> Type B function ->

    //function creation ->

    function function_name(parameter_1,parameter_2)
    {
        //do some task
    }
    //function calling ->

    function_name(arg_1,arg_2)

   2. Arrow function :-

   - it is a compact way of writing a function.
   - it uses map() function to retrive the backend data, filter() function for filterise for filterise our data etc...

   //function creation ->
   
    const function_Name =(param_1,param_2) =>
    {
        //to do some task
    }
    //function calling
    function_name(arg_1,arg_2)

    normal function ->
     
     function sum(a,b){
        return a+b;
     }
     sum(2,3)

   arrow function ->
    const sum =(a,b) =>{
        return a+b;
    }  
    sum(2,3)



pratice question in (tcs ):-

1. create a function using the "function " keyword that takes a string as an arument & return the number of vowels in that string.

Map Method/Function in js :-

- create a new array with result of some operation. the value it's callback return are used to from a new array . normally we create a new array by calling the function in every array element.

- map does not change the original array.
- it does not execute the function for empty array.
- Syntax :-

arr.map (callbackfunction (value,index.array))

Filter method/function in js  :-

- create a new array of element that gives true for a condition/filterization.
- ex. all even in the given digits.

let newArr = arr. filter((val)=>{
    return val % 2 ===0;
})

for Each loop in array :-

-arr.forEach(callbackFunction)
- callbackFunction -> it is a function to execute for each element in the array.
- callbackFunction is a function that passed as an arugument of another function.