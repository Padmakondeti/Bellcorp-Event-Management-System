# 🛠️ Server (Backend) Module — Bellcorp Event Registration System

This folder contains the **Node.js + Express** backend powering authentication, event CRUD operations, registration workflows, and email notifications.

---

## 📁 Folder Structure

### ⚙️ `server/` — Backend (Express + MongoDB)

```txt
server/
├── controller/              # Route handlers (auth, events, feedback, etc.)
├── middleware/              # Custom middleware (auth, upload)
├── models/                  # Mongoose schemas
├── routes/                  # Express route definitions
├── upload/                  # Uploaded event banner images
├── utils/                   # Helper functions (e.g., sendConfirmationEmail)
├── __tests__/               # Backend test suites
│   └── setupTestEnv.js      # In-memory MongoDB setup
├── .env
├── .env.example
├── index.js                 # Main server entry
├── app.js                   # Test entry point
└── package.json
```

---

## 🚀 Technologies Used

A breakdown of the key libraries and tools that power the backend:

| 🧰 Technology   | 📝 Purpose                                           |
|----------------|------------------------------------------------------|
| **Express.js** | Fast and minimalist backend framework                |
| **MongoDB**    | Flexible NoSQL database                              |
| **Mongoose**   | ODM for structuring and querying MongoDB             |
| **JWT**        | Token-based authentication for admins                |
| **Nodemailer** | Email confirmation upon registration                 |
| **dotenv**     | Secure management of environment variables           |

---

## 🔐 Core Features

Your backend delivers these critical capabilities:

- 🔑 **Secure Admin Login** using JWT tokens  
- 🛡️ **Protected Routes** via `middleware/auth.js`  
- 📅 **Event CRUD APIs** in `routes/events.js`  
- 📧 **Registration Logic + Email confirmation** in `routes/register.js`  
- 🧩 **Modular Design** ensuring maintainability and scalability  

---

## 🧪 Testing Setup

The backend is test-driven using:

- 🧪 **Vitest** — For fast and consistent unit testing  
- 🌐 **Supertest** — To validate RESTful APIs through integration testing

## 🧪 Testing Notes

> 🧪 All backend tests are located under `/server/test/`  
> ⚙️ Tests use mocked `.env` variables with **dotenv** for secure isolation

Run tests via:

```bash
npm run test
```
---

> 🎓 _Built as part of the **Assignment Program** with [Bellcorp], to handle dynamic data fetching, user authentication, and state management efficiently, providing a seamless "Event Discovery Experience."_
