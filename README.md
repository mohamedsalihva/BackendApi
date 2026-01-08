# Node.js Authentication System (ES Modules)

This project implements a secure authentication system using Node.js and Express with MongoDB as the database. It supports user signup and login with hashed passwords and JWT-based authentication stored in HTTP-only cookies. The backend follows a layered architecture using ES Modules to ensure scalability, maintainability, and clean separation of concerns.

## Technology Stack
Node.js is used as the JavaScript runtime environment. Express.js handles routing and HTTP requests. MongoDB is used as a NoSQL database to store user data, with Mongoose acting as the ODM (Object Document Mapper). JWT (JSON Web Tokens) are used for authentication, bcrypt is used for password hashing, ES Modules provide a modern module system, cookie-parser is used for handling cookies, and cors enables cross-origin communication between frontend and backend applications.

## System Architecture
The system follows a layered architecture:

Client → Routes → Controllers → Services → Models → MongoDB

Each layer has a single responsibility. Routes define API endpoints and forward requests. Controllers handle HTTP request and response logic. Services implement business logic such as password hashing, JWT generation, and database operations. Models define the database schema and interact with MongoDB.

## Module Overview
Routes modules define API endpoints and connect requests to controllers. Controller modules handle request validation, response formatting, and service calls. Service modules contain core business logic including authentication, password hashing, JWT creation, and database access. Model modules define the structure of stored data. Middleware modules protect routes, verify JWT tokens, and attach authenticated user information to the request object.

## Authentication Flow
During signup, the user sends a request with required details. The controller validates the input, the service hashes the password, user data is stored in the database, and a success response is returned. During login, the user submits credentials, the password is verified, a JWT is generated, the token is stored in an HTTP-only cookie, and the user is authenticated.

## Database Design
The User collection contains fields for name, email, hashed password, role, provider, and createdAt timestamp.

## Security Measures
Passwords are securely hashed using bcrypt. JWTs are signed using a secret key and stored in HTTP-only cookies to prevent client-side access. Protected routes are secured using authentication and authorization middleware. Sensitive configuration values are managed using environment variables.

## Admin Management
An admin user is created using database seeding. Role-based access control is implemented, allowing admins to manage users through protected admin-only routes.

## Important Request Concepts
`req.params` is used to access data from URL parameters such as IDs. `req.body` contains data sent in the request body. `req.user` holds authenticated user information extracted from the JWT. Middleware functions run before controllers, and `next()` is used to pass control to the next middleware in the request lifecycle.

## Conclusion
This project demonstrates a clean, secure, and scalable backend authentication system using modern Node.js practices, ES Modules, and a layered architecture suitable for real-world applications.
