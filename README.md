# Student Online Auction System

## Introduction

The **Student Online Auction System** is a web-based platform for a university student marketplace. It currently provides user authentication and a demo homepage with auction listings.

Auction creation and bidding APIs are not implemented yet; the UI uses mock data for the auction sections.

---

# Tech Stack

This project is a MERN-style app (React + Node/Express + MongoDB):

* Frontend: React + TypeScript + Tailwind CSS (Vite)
* Backend: Node.js + Express
* Database: MongoDB (via Mongoose)
* Authentication: JWT (JSON Web Tokens)
* Password Security: bcrypt

---

# Features

## Authentication (Implemented)

* Student registration and login endpoints:
  * `POST /api/auth/register`
  * `POST /api/auth/login`
* Password hashing with `bcrypt`
* JWT issued on login and stored by the frontend in `localStorage` under `token`
* Protected API route:
  * `GET /api/protected` (requires `Authorization: Bearer <token>`)
* Note: the frontend UI restricts email inputs to the `@mahindrauniversity.edu.in` domain.
* Client-side route protection for `/home` exists via `src/components/ProtectedRoute.tsx`, but is not currently enabled in `src/App.tsx`.

## Auction UI (Mock / Demo)

* `LiveBids` renders auction cards using mock data (no real auctions/bidding API yet)
* Auction creation, bidding, and real-time updates are not implemented on the backend yet

## Security

* JWT verification in `backend/middleware/authMiddleware.js`

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
│   └── .env.example
│
├── src
│   ├── components/
│   ├── pages/
│   ├── main.tsx / App.tsx
│   └── MANUAL/README_DEV.md
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

Create a backend `.env` file from the example:

```bash
cp .env.example .env
```

Then edit `backend/.env`:

Do not commit `backend/.env` to git.

* `PORT` (defaults to `5000`)
* `MONGO_URI`
* `JWT_SECRET`

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
cd ..
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
Protected API routes accept the token via `Authorization: Bearer <token>`
```

---

# API Endpoints

## Authentication

| Method | Endpoint           | Description         |
|--------|------------------|---------------------|
| POST   | /api/auth/register | Register a user    |
| POST   | /api/auth/login    | Login user         |
| GET    | /api/protected     | Requires Bearer token |

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

# Team Collaboration (GitHub Workflow)

This project uses a structured workflow on GitHub to avoid conflicts and keep the codebase clean.

## Core Rule

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

##  Steps for Team Members

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

## Pull Request Process

After pushing:

1. Go to GitHub
2. Click **Compare & Pull Request**
3. Add:
   - Description of changes
   - Screenshots (for UI work)

---

## Team Lead Responsibilities

- Review code before merging
- Ensure UI matches design
- Maintain clean structure

Only the lead merges into `main`.

---

## Sync with Latest Code

Run this daily:

```bash
git checkout main
git pull origin main
git checkout feature/<your-branch>
git merge main
```

---

## Rules to Follow

- No direct push to `main`
- One feature = one branch
- One PR = one task
- Follow project structure strictly

---

## Commit Message Examples

```
Add: registration API
Fix: login bug
Update: navbar styling
```

---

# Future Improvements

* Connect `LiveBids` to real auction listing APIs (replace mock data)
* Backend auction item creation + bid placement (and UI wiring)
* Real-time updates (WebSockets)
* Email notifications
* Password reset

---

# License

This project is for educational purposes.

---

# Author

Developed as part of a student project for building a secure online auction system.

