# 💎 StyleDecor - Smart Home & Ceremony Decoration Booking System

- 🔗 **Live Site:** https://style-decor-client-sepia.vercel.app/ 
- 💻 **Client Repo:** https://github.com/mdratul4505/style-decor-client.git
- 🛠 **Server Repo:** https://github.com/mdratul4505/style-decor-server.git  

---

## 📖 Project Overview

**StyleDecor** is a modern full-stack MERN application designed to simplify booking and managing decoration services for homes and events.

It allows users to explore decoration packages, book consultations or on-site services, make secure payments, and track project progress in real-time.

This system solves real-life problems of local decoration businesses such as:
- Long waiting times
- No online booking system
- Difficulty managing decorators
- No real-time service tracking

---

## 🎯 Purpose

- Digitize decoration service booking
- Improve customer experience
- Manage decorators & services efficiently
- Provide real-time updates & analytics

---

## ✨ Key Features

### 👤 User Features
- 🔍 Search & Filter Services (by category, budget, name)
- 📅 Smart Booking System (date, time, location)
- 💳 Secure Payment Integration (Stripe)
- 📊 Booking History & Payment Records
- ❌ Cancel or Update Booking

### 🛡️ Admin Features
- 👥 Manage Users & Decorators
- 🛠 CRUD Services & Packages
- 📦 Assign Decorators to Projects
- 💰 Revenue Monitoring
- 📊 Analytics Dashboard (Charts)

### 🎨 Decorator Features
- 📋 View Assigned Projects
- 🕒 Daily Schedule
- 🔄 Update Project Status:
  - Assigned
  - Planning
  - Materials Prepared
  - On the Way
  - Setup in Progress
  - Completed
- 💵 Earnings Summary

---

## 🌐 Pages & Layout

- 🏠 Home Page (Hero, Services, Top Decorators, Map)
- 🛍 Services Page (Search + Filter)
- 📄 Service Details Page
- 📅 Booking Page
- 💳 Payment Page
- 🗺 Service Coverage Map (React Leaflet)
- 🔐 Login / Register Page
- ❌ Error Page

---

## 🎨 UI/UX Features

- Modern UI with **Tailwind CSS & DaisyUI**
- Smooth animations using **Framer Motion**
- Clean and responsive design
- Loading spinners & skeletons
- Toast notifications

---

## 🔐 Authentication & Security

- Firebase Authentication (Email/Password + Social Login)
- JWT Token Authorization
- Role-Based Access Control (Admin / User / Decorator)
- Protected Routes
- Secure environment variables

---

## 💳 Payment System

- Stripe Payment Integration
- Secure Checkout System
- Payment History Tracking
- Transaction stored in database

---

## 🧱 Tech Stack

### 🚀 Frontend
- React
- React Router
- Tailwind CSS
- DaisyUI
- Framer Motion
- React Hook Form
- TanStack React Query
- React Leaflet

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### 🔐 Auth & Security
- Firebase Admin SDK
- JWT

### 💳 Payment
- Stripe API

---

## 📦 NPM Packages Used

- react
- react-router-dom
- axios
- firebase
- react-hook-form
- @tanstack/react-query
- framer-motion
- react-leaflet
- stripe
- express
- cors
- dotenv
- jsonwebtoken
- mongoose

---


## 👨‍💼 Admin Account
- Email: admin@gmail.com
- Password: 123456@aA

--- 

## ✨ Highlights
- Role-based dashboards
- Stripe payment integration
- Analytics & charts
- Clean architecture
- Modern UI with animations
- Production-ready MERN setup
---
## 👨‍💻 Author
- Md: Ratul Hasan

- GitHub:https://github.com/mdratul4505
- Email: dev.ratul.coder@gmail.com
---
## 🌱 Environment Variables

Create `.env` file:

```env
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_auth_domain
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_storage_bucket
VITE_MESSAGINGSENDERID=your_sender_id
VITE_APPID=your_app_id
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=your_stripe_key

### Made with 💛 using MERN Stack