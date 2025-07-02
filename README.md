# 🏅 Athletic Event Management System

![Project Banner](https://github.com/Mohammad7558/Athletic-Core/blob/main/assignment-11-client-sid-64337.web.app_.png)  
*A full-stack platform for organizing and managing athletic events with real-time booking capabilities*

## 🌟 Live Demo
🔗 [https://github.com/Mohammad7558/Athletic-Core-Frontend/blob/main/localhost_5173_.png)]

---

## 🚀 Main Features

- Interactive home page with banner slider and featured events  
- User authentication via Firebase (email/password + social login)  
- JWT token based protected routes  
- Full event management: create, update, delete, and view events  
- Real-time booking with duplicate booking prevention  
- Responsive UI with smooth animations (Framer Motion)  
- Bookings overview in multiple layouts (table & card)

---

## 🛠 Main Technologies Used

- **Frontend:** React 19, Tailwind CSS, Framer Motion, Firebase Authentication  
- **Backend:** Node.js, Express.js, JWT Authentication, REST API  
- **Database:** MongoDB Atlas  
- **Hosting:** Firebase Hosting (for frontend demo)

---

## 📦 Dependencies

### Frontend Dependencies (client/package.json)
- react  
- react-dom  
- tailwindcss  
- framer-motion  
- firebase  
- react-router-dom  
- axios  

### Backend Dependencies (server/package.json)
- express  
- mongoose  
- jsonwebtoken  
- dotenv  
- cors  
- bcryptjs  

---

## 💻 Local Installation Guide

### Prerequisites
- Node.js v16 or higher (https://nodejs.org)  
- npm v8 or higher (comes with Node.js)  
- MongoDB Atlas account (https://www.mongodb.com/cloud/atlas)  
- Firebase project setup (https://console.firebase.google.com)  

## 💻 Local Installation Guide

### 🔧 Prerequisites

Before you begin, make sure you have the following installed and configured:

- ✅ Node.js v16 or higher 👉 [Download](https://nodejs.org)
- ✅ npm v8 or higher (comes with Node.js)
- ✅ MongoDB Atlas account 👉 [Create one](https://www.mongodb.com/cloud/atlas)
- ✅ Firebase project 👉 [Create one](https://console.firebase.google.com)

---

### 🧪 Steps to Run the Project Locally

#### 1️⃣ Clone the Repository
git clone https://github.com/your-username/athletic-event-management.git<br>
cd athletic-event-management

#### 2️⃣ Install Backend Dependencies
cd server
npm install

#### 3️⃣ Install Frontend Dependencies
cd ../client
npm install

### 4️⃣ Configure Environment Variables
Create a .env file inside the /server directory and add the following:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
⚠️ Replace the placeholder values with your actual credentials from MongoDB and Firebase.

### 5️⃣ Run the Backend Server
cd ../server
npm run dev

### 6️⃣ Run the Frontend Client (in a new terminal)
cd ../client
npm run dev

### 🌐 Access the App in Browser
http://localhost:5173

### 📌 Tips & Troubleshooting
✅ Make sure your MongoDB Atlas cluster allows your current IP address.

✅ In Firebase, enable Email/Password and Google login providers under Authentication → Sign-in method.

⚠️ If any port conflict occurs, change it in your .env or vite.config.js.
