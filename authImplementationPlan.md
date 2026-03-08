# Authentication Implementation Plan
### React + Express + MongoDB + JWT

---

## Stack
- **Frontend:** React (TypeScript)
- **Backend:** Express.js
- **Database:** MongoDB (Mongoose)
- **Auth:** bcrypt + JSON Web Token (JWT)

---

## Implementation Order

> Follow this sequence exactly — each step depends on the previous.

1. Backend server setup
2. MongoDB connection
3. User model
4. Register API
5. Login API
6. JWT generation
7. Auth middleware
8. Connect Register page (frontend)
9. Connect Login page (frontend)
10. Protect Home route (frontend)

---

## Phase 1 — Backend Setup

### Folder Structure

```
backend/
├── server.js
├── .env
├── config/
│   └── db.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── controllers/
│   └── authController.js
└── middleware/
    └── authMiddleware.js
```

### Initialize & Install

```bash
npm init -y
npm install express mongoose cors dotenv bcrypt jsonwebtoken
npm install nodemon --save-dev
```

---

## Phase 2 — Database Connection

**File:** `config/db.js`

- Import mongoose
- Read `MONGO_URI` from `.env`
- Connect to MongoDB
- Export the function and call it in `server.js`

---

## Phase 3 — User Model

**File:** `models/User.js`

Fields:

| Field | Type | Notes |
|-------|------|-------|
| `fullName` | String | Required |
| `studentId` | String | Required |
| `email` | String | Required, unique |
| `password` | String | Hashed before saving |
| `createdAt` | Date | Auto via timestamps |

---

## Phase 4 — Register API

**File:** `controllers/authController.js`

Flow:

```
Receive fullName, studentId, email, password
        ↓
Check if user already exists
        ↓
Hash password with bcrypt
        ↓
Save user to MongoDB
        ↓
Return success response
```

**File:** `routes/authRoutes.js`

```
POST /api/auth/register  →  registerUser controller
```

---

## Phase 5 — Login API

**File:** `controllers/authController.js` (add `loginUser`)

Flow:

```
Receive email + password
        ↓
Find user in DB
        ↓
Compare password with bcrypt.compare()
        ↓
Generate JWT (contains userId + email)
        ↓
Return token to frontend
```

**Route:**

```
POST /api/auth/login  →  loginUser controller
```

---

## Phase 6 — Auth Middleware

**File:** `middleware/authMiddleware.js`

Purpose: Protect backend routes that require login.

Flow:

```
Request arrives
        ↓
Read Authorization header: Bearer <token>
        ↓
Verify JWT
        ↓
Attach user to request → allow access
```

---

## Phase 7 — Frontend: Register Page

**File:** `Register.tsx`

- Form fields: Full Name, Student ID, Email, Password
- On submit → `POST /api/auth/register`
- On success → redirect to `/login`

---

## Phase 8 — Frontend: Login Page

**File:** `Login.tsx`

- Form fields: Email, Password
- On submit → `POST /api/auth/login`
- On success:
  ```ts
  localStorage.setItem("token", token)
  navigate("/home")
  ```

---

## Phase 9 — Protected Route

**File:** `ProtectedRoute.tsx`

Logic:

```ts
const token = localStorage.getItem("token")
return token ? <Outlet /> : <Navigate to="/login" />
```

Usage in router:

```tsx
<Route element={<ProtectedRoute />}>
  <Route path="/home" element={<Home />} />
</Route>
```

---

## Phase 10 — Logout

Add a logout button in `Home.tsx`:

```ts
localStorage.removeItem("token")
navigate("/login")
```

---

## Final Files Checklist

### Frontend
- [ ] `Login.tsx` — connected to API
- [ ] `Register.tsx` — connected to API
- [ ] `Home.tsx` — protected, shows user info
- [ ] `ProtectedRoute.tsx` — guards token-required routes

### Backend
- [ ] `server.js`
- [ ] `config/db.js`
- [ ] `models/User.js`
- [ ] `controllers/authController.js`
- [ ] `routes/authRoutes.js`
- [ ] `middleware/authMiddleware.js`
- [ ] `.env` (MONGO_URI, JWT_SECRET)

---

## Complete Auth Flow

```
User registers
     ↓
Password hashed → User saved in MongoDB
     ↓
User logs in
     ↓
Credentials verified → JWT generated
     ↓
Token stored in localStorage
     ↓
User redirected to /home
     ↓
Protected routes check token on every visit
     ↓
Logout clears token → redirects to /login
```

---

## Note for Auction System

Authentication must be completed before building auction features. Future routes will require a logged-in user:

```
/api/items   — requires auth
/api/bids    — requires auth
/api/users   — requires auth
```