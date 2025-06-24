# 🏅 Athletic Event Management Website

A full-stack athletic event management platform built with **React**, **Tailwind CSS**, **Firebase**, and **MongoDB**. Users can register/login, create events, book them, and manage their activities in a smooth and secure way.

> 🔗 **Live Website:** [Coming Soon](https://your-live-link.com)

---

## 🚀 Features

### ✅ Authentication System
- Email/password login & registration
- Google social login
- Password validation: uppercase, lowercase, min. 6 characters
- SweetAlert & Toast notifications for feedback
- Registration fields: Name, Email, Photo URL, Password

---

### 🏠 Home Page
- 🎞️ Banner Slider with 3+ event slides
- 🌟 Featured Events: shows 6 upcoming events sorted by date
- 🔘 "View Details" and "See All" buttons
- ✨ Additional Sections: Testimonials, Popular Sports

---

### 🔐 Protected Event Management (Private Routes)

#### ➕ Create Event (`/create-event`)
- Form fields:
  - Event Name
  - Event Type (dropdown: Swimming, Sprinting, Long Jump, etc.)
  - Event Date
  - Description
  - Image URL
- Auto-filled creator name and email
- Stores to MongoDB on submit

#### 📄 Event Details (`/events/:id`)
- Full event information display
- “Book Now” button stores the booking in database
- Prevents duplicate bookings

#### 📑 My Bookings (`/myBookings`)
- Displays all events booked by the current user
- Two views:
  - 🧾 Table View
  - 🧱 Card View
- 🗑 Cancel booking with delete button

#### 🧰 Manage Events (`/manageEvents`)
- Events created by the logged-in user
- 📝 Update button redirects to `/updateEvent/:id`
- 🗑 Delete button removes event from DB and UI

#### ✏️ Update Event (`/updateEvent/:id`)
- Reuses event creation form
- All fields editable **except user email**
- Redirects to Manage Events page after successful update

---

## 🧠 Additional Features

- 🔍 Search events by name or location on Events page
- 🔒 JWT Authentication for route protection
- 🌐 Dynamic website title per route
- 😵 Custom 404 Not Found page
- ⏳ Loading Spinner for async operations
- 🍞 Toast & SweetAlert for all actions

---

## ⚙️ Tech Stack

| Frontend | Backend | Auth & Hosting | Styling |
|----------|---------|----------------|---------|
| React 19 | Express.js | Firebase Auth + JWT | Tailwind CSS |
| React Router v7 | MongoDB Atlas | Firebase Hosting | DaisyUI |
| Axios |  |  | Framer Motion |

---