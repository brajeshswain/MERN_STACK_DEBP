Node js; -

- Node js is the runtime enviorment of js.
- the famous scientest RYAB DAHL developed node js by combination of v8 engine & c++.
- Node js is an event driven js runtime enviorment build on chrome's v8 engine that enabkes , high performance server side application and API development using js.


Working of Node js:-

- Node js is event driven asynchronous , enabling efficien handling of multiple request.

js engines ->

- chrome -> v8 engine
- firefox - > spider monkey
- safari -> mac OS

- you can run js outside of the browser.
- you can create webserver in js language etc...

Modules in Node js:-

- a module in node js is a reuseable block of code thar contains function , objects variables etc...
- modules help us organize code into separate file, making application easir to mantain and reuse.

FS(file sysytem) Module:-

- the fs module is a build in node js module used to create ,read ,update,delete & manage files and folders.
- you don't need to instal it just require the packaf=ge and use it.
- there are two common ways to works with FS:-

1. Synchronous ->blocks the execution untill the operation finished
2. Asynchornous -> doesn't block the rest of the program.


1. create/write a file

- we can use write fileSync() to create new file or overwrite an existing file.

2.  Read a file->


- we can use rea.sFILEsync() to read the content of file


3. Add Data to an exixting File ->

- we can use appendFileSync() to add new content without deleting the existing content
4. Delete file ->

we can use unlinkSync() to delete a file.

import Fs methods ->

- writeFile() -. create/write a file
- readFile() -> Read a file
- appendFile() -> ann content to file 
- unlnk() -> Delete a file
- mkdir() ->remove a folder
- rename() -> rename a file
- existsSync() -> check whether a file or folder exists.


Architechture of node js :-

- Node js uses a single threaded , event-driven architecture.
- when a request is processed through an event queue,and the event queue pass the request thorough event loop in blocking & non-blocking operation.
- If the asynchronous code is passed through an event loop then it handled by non-blocking operation and it give the response quickly
- If the synchronous code is passed through an event loop then it handled by blocking operaation and a thread i asign to a single operation to process the request in an thread pool then it gives the required response.

Building HTTP Server:_

- Node js provide a build  in HTTp method allows  us to create a web server without installing express or any other package.


URL's :-
Ex.http://www.webbocket.com/

- in the above example 
    https ->protocal layer(hyper text transfer proocal secure)
    www-> web address
   webbocket -> domain name
   / -> path / home route
   /about -> about us page
   /contact -> contact us page
   /product/mobile -> nested path
   /product/laptops -> nested path

   Query Parameter->

HTTP Methods:-

- HTTP methods tell the server what the client wants to do with a resource.

ex. 
Methods                             Meaning                          Example
GET                               get/read data                     get all users
POST                              create new data                   create a new user
PUT                              replace/update data                update complete user
PATCH                            partially update data              update only user's name
DELETE                           Delete data                        Delete a user


GET METHODS :-

- the GET method is used to retrive data from the server.

POST METHODS :-

- POST is Used to create new data or send data to the server.

PUT methods :-
 - PUT is generally used to replace/ update an existing resource

PATCH Methods :-

 - PATCH is used when you want to update only a part of the resource.

DELETE Method :-

 - DELETE is used to remove any resource.



Express JS :-

 - Express js is a lightweight and popular web framework for node.js.
 - it makes it much easier to build web servers , REST API's , ROUTES & BACKEND Application .
 - without express, we have to use NODE js build-in http module and write a lot of Routing logics.


Versioning of Node JS :-
 - node js itself has version like 18,20,22,24,26 etc....
 - Package such as express have version like 4.21.2 , 5.1.0 etc...

Node JS version -> v22.14.0 in that version
      - 22 -> Major - a major version can contain breaking changes
      - 14 -> Minor - usually adds new featureas while maintaing  compability
      - 0  -> patch - usually contin bug fixes  &  security fixes



MIDDLEWARE :-

- express is a routing & middleware web framework that has minimal functionality of its own.
- middleware function are function that have access to the request object, the responce object & the next.

Middleware function can perform the following tasks:-

1. execute any code .
2. make changes to the request and the responce object.
3. End the request responce cycle.
4. call the next middleware function in the stack.


- create the following API :- 

GET -> /api/students  -> get all students 
GET -> /api/students/:id -> get one student by id 
POST -> /api/students -> add new students 
PATCH -> /api/students/:id -> update students 
DELETE -> /api/students/:id -> Delete students

- add a middleware to store the logs in every request.
  (req.method,req.url)

