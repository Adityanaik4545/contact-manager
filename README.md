# Contact Manager API

A simple **Contact Manager** built with **Node.js**, **Express**, and **MongoDB** using **Mongoose**. This project implements full **CRUD operations** (Create, Read, Update, Delete) for managing contacts. It is backend-only — no frontend has been developed yet.

---

## Features

- Create new contacts
- Get all contacts
- Get a single contact by ID
- Update contact details
- Delete contacts
- User Signup / Signin with authentication
- JWT-based protected routes
- Password hashing with bcrypt
- RESTful API structure

---

## What I Learned

I built this project to **learn how CRUD operations work** in a real-world backend system. Here's what I explored and implemented:

-  CRUD operations using Express and Mongoose
-  Built custom **middlewares** for error handling and authentication
-  Used **Express routes** to organize API endpoints
-  Got familiar with **MongoDB**, storing and managing contact/user data
-  Used **Mongoose schemas** to communicate with the database
-  Built user **signup/signin** functionality
-  Implemented **JWT tokens** to authenticate users during login
-  Created **protected routes** accessible only to authenticated users
-  Used **bcrypt** for secure **password hashing**
-  Separated logic into **controllers** for clean structure
-  Practiced **API testing** using Postman

This project helped me understand how backend systems handle user data securely and serve structured data through APIs.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt.js
- Postman (for API testing)

---
## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/contact-manager.git
```
2. **navigate to folder**
```bash
cd contact-manager
```
3. **install dependency**
```bash
npm i
```
4. **set environment variable**
### Create a .env file in the root directory and add
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
5. **run the server**
```bash
npm run dev
```
