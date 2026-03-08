# Student Online Auction System

## Introduction

The **Student Online Auction System** is a web-based platform that allows students to securely buy and sell items through auctions within their university community. The application provides user authentication, auction listing management, and bidding functionality through a modern full-stack web architecture.

Students can register using their university email, log in securely, and participate in auctions in a controlled environment.

---

# Tech Stack

This project is built using the MERN stack:

* Frontend: React + TypeScript + Tailwind CSS
* Backend: Node.js + Express
* Database: MongoDB
* Authentication: JWT (JSON Web Tokens)
* Password Security: bcrypt

---

# Features

## Authentication

* Student registration using university email
* Secure login with encrypted passwords
* JWT-based authentication
* Protected routes for authenticated users

## Auction System (Planned / In Progress)

* Create auction listings
* Browse active auctions
* Place bids on items
* Track highest bids
* Manage user auctions

## Security

* Password hashing using bcrypt
* Token-based authentication with JWT
* Protected API routes

---

# Project Structure

```
student-online-auction-system
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── authController.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── models
│   │   └── User.js
│   ├── routes
│   │   └── authRoutes.js
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── components
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Home.tsx
│   │   └── ProtectedRoute.tsx
│   ├── App.tsx
│   └── main.tsx
│
└── README.md
```

---

# Installation

## 1. Clone the repository

```bash
git clone https://github.com/nonoyobussiness/student-online-auction-system.git
```

```
cd student-online-auction-system
```

---

# Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

The backend will run on:

```
http://localhost:5000
```

---

# Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

# Authentication Flow

```
User Registration
        ↓
Password hashed using bcrypt
        ↓
User stored in MongoDB
        ↓
User Login
        ↓
JWT Token generated
        ↓
Token stored in localStorage
        ↓
Protected routes allow access
```

---

# API Endpoints

## Authentication

| Method | Endpoint           | Description             |
| ------ | ------------------ | ----------------------- |
| POST   | /api/auth/register | Register a new user     |
| POST   | /api/auth/login    | Authenticate user       |
| GET    | /api/protected     | Example protected route |

---

# Database

The application uses MongoDB to store user data.

Example User Schema:

```
User
 ├── fullName
 ├── studentId
 ├── email
 ├── password (hashed)
 └── createdAt
```

---

# Future Improvements

* Auction item creation
* Bid placement system
* Real-time bid updates
* Email notifications
* Password reset functionality

---

# License

This project is intended for educational purposes.

---

# Author

Developed as part of a student project for building a secure online auction system.
