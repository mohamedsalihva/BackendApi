1. Title Page
2. Abstract / Overview
3. Technology Stack
4. System Architecture
5. Module Description
6. Authentication Flow
7. Database Design
8. Security Measures
9. Conclusion



1  Node.js Authentication System using ES Modules
   Technologies:Node.js, Express, MongoDB, JWT, ES Modules

2 This project implements a secure authentication system using Node.js and Express with MongoDB as the database. The system supports user signup and login using hashed passwords and JWT-based authentication stored in cookies. The backend follows a layered architecture using ES Modules for scalability and maintainability.

3 . Node.js-javascript run time environment
  . Express.js-Backend framework for routing and HTTP Handling 
  . MongoDB-NosQL database for storing user data
  . Mongoose-ODM (object document mapping) for MongoDB
  . JWT-Token based Authentication
  . bcrypt-password hashing
  . ES Modules-Modern js module system
  . cookie-parser-cookie handling
  . cors-cross origin communication (communication b/w frontend and backend which uses different origin)

4
 Client
  ↓
Routes
  ↓
Controllers
  ↓
Services
  ↓
Models
  ↓
MongoDB

system follows a layered architecture each layer  has a single responsibilities.Routes  define endpoints ,controllers handles HTTP logics,service implements business logic and model interact with the db

5
  .Routes Module
   defines api endpoints
   forward request to controllers

.controller module
  Handle request and response
  Validate input
  Call service methods

.service module
  business logic
  password hashing
  database operation
  jwt generation

.Model module :
  Defines database structure
  Used by services
  Communicate with MongoDB

.middleware module :
  protect routes
  verify jwt
  attach user to request


6 authentication Flow  :

Signup Flow:
User sends signup request
Controller validates input
Service hashes password
User stored in database
Response returned

Login Flow:
User sends login request
Password verified
JWT generated
JWT stored in cookie
User authenticated

7 Db design :
  name
  email
  password(hashed)
  role
  provider
  createdat

8 security measures :
  password hashing using  bcrypt
  jwt signed using  secret key
  jwt  stored in http only cookies
  protected routes via middleware
  env variables

9
admin is created through seeding

10
req.params	Data from URL (:id)
req.body	Data sent in request body
req.user	Logged-in user info (JWT)
middleware	Runs before controller
next()	Move to next step
