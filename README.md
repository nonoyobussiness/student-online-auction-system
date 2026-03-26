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
cd student-online-auction-system
```

---

# Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

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

| Method | Endpoint           | Description         |
|--------|------------------|---------------------|
| POST   | /api/auth/register | Register a user    |
| POST   | /api/auth/login    | Login user         |
| GET    | /api/protected     | Protected route    |

---

# Database

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

# 👥 Team Collaboration (GitHub Workflow)

This project uses a structured workflow on GitHub to avoid conflicts and keep the codebase clean.

## 🔑 Core Rule

❗ Never push directly to `main`

---

## Branch Strategy

Each developer works on their own branch:

```
feature/<name>/<task>
```

Examples:

```
feature/rahul/login-page
feature/ananya/register-api
feature/akash/navbar-ui
```

---

## 🧑‍💻 Steps for Team Members

### 1. Clone repository

```bash
git clone <repo-url>
cd student-online-auction-system
```

---

### 2. Create a branch

```bash
git checkout -b feature/<name>/<task>
```

---

### 3. Do your work

Work only on your assigned feature.

---

### 4. Commit changes

```bash
git add .
git commit -m "Add: login page UI"
```

---

### 5. Push branch

```bash
git push origin feature/<name>/<task>
```

---

## 🔁 Pull Request Process

After pushing:

1. Go to GitHub
2. Click **Compare & Pull Request**
3. Add:
   - Description of changes
   - Screenshots (for UI work)

---

## 👨‍💼 Team Lead Responsibilities

- Review code before merging
- Ensure UI matches design
- Maintain clean structure

Only the lead merges into `main`.

---

## 🔄 Sync with Latest Code

Run this daily:

```bash
git checkout main
git pull origin main
git checkout feature/<your-branch>
git merge main
```

---

## ✅ Rules to Follow

- No direct push to `main`
- One feature = one branch
- One PR = one task
- Follow project structure strictly

---

## 🧠 Commit Message Examples

```
Add: registration API
Fix: login bug
Update: navbar styling
```

---

# Future Improvements

* Auction item creation
* Bid placement system
* Real-time updates (WebSockets)
* Email notifications
* Password reset

---

# License

This project is for educational purposes.

---

# Author

Developed as part of a student project for building a secure online auction system.

- Prosmuggler

