# MongoDB:-
#MongoDB :-
- MongoDB is a nosql(non-relational) database designed to store, manage and retrive large amounts of data in a flexible way.
- Unlike traditional relational databases(such as MySQL or postgreSQL) that store data in rows and tables, mongoDB store data as documents in collections.

* How MongoDB works:-
- MongoDB stores data in json-like documents(specially BSON, binary JSON), making it easy for developers to work with data in modern programming language.


 common  keywords are:- 

- mongosh
- show dbs
- use <db_name>
- show collections
- db.coll.find()
- db.coll,insert()

# MVC pattern in Backend :-

- MVC stands for Model-view-controller.
- it is a software architecture pattern used to organize backend applications into separate responsibility, making the code easier to develop , maintain,test &scale.

client ->Routes -> Controller -> Model -> Database

1. Model -> the model handles the applications data & database structure.
2. Controller -> the controller Contain the business logic.
3. View -> the view is reponsible for what presented to the user like HTML or React js.
4. Routes -> Routes are not technically oe of the tree MVC components but they connect the request to the controller.


Task -> URL shortner

Design a URL shortner service that takes in a valid URL and returan a shortner URL, redirecting the user to the user to the previouslly provided URL.

Also ,keep track of total visit/ clicks on the URL.

Routes:- 

POST /URL -> generates a new URL and return the shortend URL. 

GET /:id -> Redirects the user to the original URL 

GET /URL/analytics/:id -> return the clicks for the provided short ID.


# Server side Rendering with EJS:-

- server-side rendering means the HTML page is generated on the server and the sent to the browser.
- with express js + EJS , Your server can dynamically create HTML using data from your backend.
- also we can use pug or handlebars as the server side rendering tool.

# Authentication vs Authorization in Express js:-

- these two concepts are very  important when building a backend/API with node js + express js.
1. Authentication -"Who are you ?"

- authentication Means Verifying the indentity of a user.

ex. user enters email+password -> server checks them -> user is identified as Nit

common methods of authentication :-

- email + password
- OTP
- JWT Token
- Google / github
- session based login

2. Authorization - "What are you allowed to do ....? " / permission to do something
 
 - Authorization happen after authentication.
 - it determine what an authenticated user is allowed to access or perfrom.

 ex NIT is logged in , but only an admin can delete users.

 - simple we can say that ->

 Authentication -> who are you ?
 Authorization -> What can you access ?


 

