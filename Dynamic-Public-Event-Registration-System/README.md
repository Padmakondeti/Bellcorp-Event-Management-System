**Bellcorp Event Management System**

The goal is to develop a full-stack platform where users can discover, view, and manage event registrations. The application to handle dynamic data fetching, user authentication, and state management efficiently, providing a seamless "Event Discovery Experience."

---

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Features](#features)
- [Installation & Setup](#installation-Setup)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

# 🏷️ Project Overview :

## [Bellcorp Event Registration System](https://bellcorp-event-registration-system.onrender.com/)

A full-stack web application that streamlines public event registration and management.

### Core Functionality

- **Event Planning & Organization** : Tools to manage the end-to-end lifecycle of events, including scheduling, agenda creation, and task tracking.
- **User Management** : Secure, role-based access for organizers, attendees, and administrators.
- **Registration & Ticketing** : Systems for online attendee registration, ticket sales, and check-in.
- **Venue & Vendor Management** : Modules to search for, book, and manage venues, along with tracking vendor services.

## 🔐 Admin Access (Demo Credentials)

You’re welcome to explore the admin dashboard using the demo credentials below.  
This access is provided for testing, learning, and evaluation purposes.

- **🔗 Deployment Link:** [`https://bellcorp-event-registration-system.onrender.com/`](https://bellcorp-event-registration-system.onrender.com/)
- **👤 Username:** `12345Admin`
- **🔑 Password:** `12345Admin`

> 🛡️ Please note: This is a demo admin account with limited privileges.  

## ⚙️ Accessibility & Usage Notes

- 🌓 **Dark Mode Recommended**: For optimal visual experience, please switch your system theme to **dark mode** or **light mode** based on your preference before using the application.

- 🕸️ **Content Loading Delay**: If data does not appear immediately, it may be due to **slow internet** or **delayed content loading**. Please **wait a moment** or **refresh the page**.

- 🔐 **Admin Token Expiry**: If you're an admin and remain logged in without logging out, your authentication token may expire after **1 hour**. In such cases, some dashboard content may not load properly. To resolve this:
  - **Logout once**
  - Then **login again with your credentials**

This will restore full access to the admin dashboard.

---

### 🎟️ For Users
- Browse upcoming events  
- Register with a dynamic form  
- Receive email confirmations  

### 🛡️ For Admins
- Secure login and role-based access  
- Create, edit, and delete events  
- View and export registrants  
- Manage feedback and contact submissions  

This platform brings together a seamless experience for both attendees and organizers — all in one dynamic, responsive system.

---

## 🚀 Getting Started

To set up the project locally, follow the steps in the **Installation & Setup** section.  
Make sure to review the **Prerequisites** and configure your `.env` files properly.

---

## 🛠️ Technologies Used

This project leverages a modern full-stack architecture with robust tooling for development, testing, and deployment.


### 🖥️ Frontend (React)

- **Frameworks & Styling**:  
  React, Tailwind CSS

- **Routing & State Management**:  
  React Router (`BrowserRouter`, `Routes`, `useNavigate`, `useLocation`, `useParams`),  
  React Hooks (`useState`, `useEffect`)

- **UI & Feedback**:  
  `react-icons/fi`, `react-toastify`, `react-hot-toast`, `react-confetti`, `Confetti`, `Toaster`, `ToastContainer`

- **Utilities**:  
  `axios`, `axiosInstance`, `exportToCSV`, `date-fns`, `differenceInDays`, `format`, `react-use`

- **Testing**:  
  `vitest`, `@testing-library/react`, `jest-dom`, `MemoryRouter`, `vi.mock`, `fireEvent`, `waitFor`, `screen`, `within`


### ⚙️ Backend (Express + MongoDB)

- **Frameworks & Database**:  
  `Express.js`, `MongoDB`, `Mongoose`

- **Authentication & Middleware**:  
  `JWT`, custom middleware (`authMiddleware`, `uploadMiddleware`)

- **Email Service**:  
  `Nodemailer` or similar (via `sendConfirmationEmail.js`)

- **Testing**:  
  `Vitest`, `Supertest`, custom test environment setup

- **Image Management**:  
  Integrated via `cloudinary` package for seamless image uploads, optimization, and deletion.

- **Environment Variables** (`.env`):
  ```env
  CLOUDINARY_CLOUD_NAME=your-cloud-name
  CLOUDINARY_API_KEY=your-api-key
  CLOUDINARY_API_SECRET=your-api-secret
  ```
---

### 🚀 Deployment

- **Hosting Platforms**:  
  *GitHub + Render + cloudinary*

- **Environment Configuration**:  
  `.env` and `.env.example` files for managing secrets and environment-specific settings

---

## ✨ Features

This system delivers a complete event registration workflow for both users and admins, with dynamic UI interactions, robust access control, and a responsive design.


### 👤 User Features
- 🔍 **Browse Events**  
  View all upcoming public events with details like date, location, and description.

- 📄 **Event Details Page**  
  See full information about each event, including organizer info, schedule, and registration deadline.

- 📝 **Register for Events**  
  Fill out a dynamic form to book a spot. Confirmation is sent via email.

- 🎉 **Confetti Animation on Success**  
  Delightful visual feedback after successful registration.

---

### 🔐 Admin Features
- 🔑 **Secure Admin Login**  
  Requires valid user ID and password. Only registered admins can access the dashboard.

- 🧑‍💼 **Admin Management**  
  Existing admins can add new admins. No public access to admin creation.

- 📅 **Create / Edit / Delete Events**  
  Full CRUD functionality for managing event listings.

- 📋 **View Registrants**  
  See who registered for each event. Export lists to CSV.

- 💬 **Manage Feedback & Reviews**  
  View user-submitted feedback. Verify and post selected reviews to the homepage.

- 📨 **View Messages**  
  Access contact form submissions and user inquiries.

- 🧹 **Delete Feedback / Messages**  
  Clean up outdated or irrelevant entries.


### 🎯 System Features
- 🚫 **Protected Routes**  
  Admin routes are guarded via `ProtectedRoute` and JWT-based authentication.

- 🌐 **Responsive Design**  
  Fully responsive UI built with Tailwind CSS and Framer Motion.

- 📦 **Reusable Axios Instance**  
  Centralized API logic with environment-based config (`VITE_API_BASE_URL`).

- 🧪 **Robust Testing**  
  Backend and frontend tested with Vitest, Supertest, and Testing Library.

- 📁 **Modular Folder Structure**  
  Clean separation of concerns for scalability and maintainability.

---

## ⚙️ Prerequisites

Before running the project locally, ensure the following tools and services are installed and configured:

---

### 🖥️ System Requirements

- **Node.js**: v18+ recommended  
- **npm**: Comes bundled with Node.js  
- **MongoDB**:  
  - Local instance for development  
  - MongoDB Atlas for production or remote testing

---

### 🌍 Global Tools

- **nodemon**: For hot-reloading during backend development  
  ```bash
  npm install -g nodemon
  ```

---

### 🌐 Environment Configuration

Set up your environment variables for both backend and frontend by copying `.env.example` to `.env` and filling in your credentials.

---

### 🛠️ Backend .env

```env
# MongoDB connection string (replace <username> and <password>)
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/event-db

# JWT secret key for admin authentication
JWT_SECRET=your_jwt_secret_key

# Email credentials for sending confirmation emails
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password
```

---

### 🖥️ Frontend .env

```env
# Base URL for API requests (used by axiosInstance.js)
VITE_API_BASE_URL=http://localhost:5000
```

---

# 🌄 Image Uploads with Cloudinary Integration

This App supports robust, production-grade image handling via [Cloudinary](https://cloudinary.com), enabling persistent storage, secure delivery, and seamless deletion for uploaded images.

---

## ⚙️ How It's Implemented

- **Cloudinary Setup:**  
  A Cloudinary account was created and credentials added to `.env`:
  ```env
  CLOUDINARY_CLOUD_NAME=your-cloud-name
  CLOUDINARY_API_KEY=your-api-key
  CLOUDINARY_API_SECRET=your-api-secret
  ```
 
# 🌩️ Middleware Configuration

The backend includes a `cloudinary.js` config file and a **Cloudinary middleware** for handling image uploads.

---

## 📦 Dependencies Used

```js
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: '', 
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

export const upload = multer({ storage });
```

# 🔗 Route Integration: Image Upload with Cloudinary

During **event creation**, image files are uploaded via Multer and stored as secure **Cloudinary URLs**.

---

## 📤 Upload Route Setup

```js
router.post('/create', upload.single('image'), async (req, res) => {
  const imageUrl = req.file.path;
});
```
# 🗑️ Secure Deletion: Cloudinary Image Removal

When an event is deleted, its associated image is removed from Cloudinary using the stored `public_id`.

---

## 🔧 Cloudinary Deletion Method

```js
// Handle banner removal
    if (req.body.removeBanner === 'true' && event.bannerPath) {
      const imagePath = path.join(__dirname, '..', 'uploads', event.bannerPath);
      fs.unlink(imagePath, (err) => {
        if (err) console.warn('Failed to delete banner:', err.message);
      });
      updatedData.bannerPath = '';
    }
```



# 🛡️ Benefits of Using Cloudinary for Image Management

---

## 📈 Advantages

- 🗂️ **Persistent Image Hosting**  
  Hosted images remain accessible long-term via secure URLs  
  with built-in **CDN caching** for global performance.

- ✨ **Automatic Optimization**  
  Cloudinary resizes and formats images automatically  
  based on device, viewport, and delivery context.

- 🧹 **Secure Image Deletion**  
  Removal is handled via `cloudinary.uploader.destroy(publicId)`  
  for precise and authenticated cleanup.

- 📦 **Simplified Deployment**  
  No need for manual uploads folder —  
  images are stored externally and accessed via Cloudinary URLs.

---

## 💡 Tip

> [!TIP]
> Make sure to **validate image inputs** on both the **frontend and backend**:
> - 🔍 Check **file type** (e.g., JPG, PNG)
> - 📏 Enforce **file size limits**
> - 🚫 Handle **upload errors gracefully**

---

## 🚀 Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Padmakondeti/Bellcorp-Event-Registration-System.git
cd event-registration-system
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

---

#### 🔧 Environment Variables

Create a `.env` file in the `server/` directory based on `.env.example`. Include:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

---

### 🚀 Run the Backend

```bash
npm run dev
```

The backend will start at: `http://localhost:5000`

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
```

---

#### 🔧 Environment Variables

Create a `.env` file in the `client/` directory:

```env
VITE_API_BASE_URL=http://localhost:5000
```

---

### 🚀 Run the Frontend

```bash
npm run dev
```

The frontend will start at: `http://localhost:5173`

---

## 🔐 Admin Access

Admins have elevated privileges and can:

- 📅 Create, edit, and delete events  
- 📋 View registrants and export lists (CSV)  
- 💬 Manage feedback and reviews  
- ✅ Verify feedback for homepage display  
- 📨 View messages and contact submissions  
- 🧑‍💼 Add other admins (only existing admins can do this)  

⚠️ **Admins cannot be created via public registration.**  
Only a registered admin can promote another user to admin status.

---

### 🧭 Admin Login

To log in as an admin, you must:

- ✅ Be registered as a user  
- ✅ Have been granted admin privileges by an existing admin  
- 🔐 Provide your User ID and Password on the admin login screen

---

### 🧪 Optional: Seed Admin (for Development)

To bootstrap the system with an initial admin, manually insert a user with `role: "admin"` into your MongoDB database.


```json
{
  "name": "Super Admin",
  "email": "admin@example.com",
  "password": "hashed_password",
  "role": "admin"
}
```

⚠️ Make sure the password is **hashed using bcrypt** before inserting.

---

## 👥 User Access

Regular users can:

- 🔍 View all public events  
- 📄 See event details  
- 📝 Register for events  

🚫 Users **cannot** access admin routes or dashboards.

---


📁 Folder Structure
The project is organized into two main directories inside sect-project:
- client/ for the frontend
- server/ for the backend

### 🖥️ `client/` — Frontend (Vite + React)

```txt
client/
├── public/
│   ├── images/              # Logos and static images
│   ├── videos/              # Background video for homepage header
│   └── _redirects           # SPA routing support
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Route-based views (Home, Events, Admin, etc.)
│   ├── services/            # API service logic
│   ├── styles/              # Global CSS
│   ├── utils/               # Shared utilities (e.g., axiosInstance)
│   ├── __test__/            # Frontend test suites
│   └── setupTests.js        # Vitest + Testing Library setup
├── .env
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

### ⚙️ `server/` — Backend (Express + MongoDB)

```txt
server/
├── controller/              # Route handlers (auth, events, feedback, etc.)
├── middleware/              # Custom middleware (auth, upload)
├── models/                  # Mongoose schemas
├── routes/                  # Express route definitions
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

## 🤝 Contributing

We welcome contributions of all kinds — from bug fixes and accessibility improvements to new features and documentation polish.  

---

## License

This project currently does not have a license.