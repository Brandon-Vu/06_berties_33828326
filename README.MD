# Bertie’s Books

Bertie’s Books is a Node.js + Express web application connected to a MySQL database.  
Created by **Brandon Vu (ID: 33828326)** for the Goldsmiths Web Applications Coursework (Lab 6 & 7).

---

##  Features

Lab 6 - Books
- View all books  
- Add a new book  
- Search for books by title (partial match using LIKE)  
- View bargain books (price < £20)  
- Simple registration page (static form)

Lab 7 - Users
- Register new users
- Password hashing using bcrypt
- Login system using hashed password verification
- View list of registered users
- Audit log of all login attempts (success & failures)

---

##  Technologies Used

- Node.js
- Express.js
- MySQL
- EJS templating
- CSS
- bcrypt
- dotenv
- Forever (for deployment on the Goldsmiths VM)

---

dotenv (Environment Variables)

The app uses dotenv to load database credentials from a .env file instead of hard-coding them.

Example .env:
DB_HOST=localhost
DB_USER=berties_books_app
DB_PASS=qwertyuiop
DB_NAME=berties_books

---

##Audit Log (Lab 7)

Every login attempt—successful or failed—is recorded in the login_audit table.
Each row includes:
- username used
- success or failure
- IP address
- timestamp

This is displayed on the /users/audit page.

---
##  Installation

### Install dependencies
npm install
node index.js
Local URL:  
http://localhost:8000/

## Deployment on Goldsmiths VM
forever start index.js

## Public VM
https://www.doc.gold.ac.uk/usr/432/

