# Book Store - Next.js Full-Stack Application

A modern, full-stack bookstore application built with **Next.js**, **MongoDB**, and **Tailwind CSS**. This project demonstrates a complete e-commerce-like experience for browsing, managing, and interacting with books.

## 🚀 Key Features

- **User Authentication**: Secure login and registration using NextAuth.js.
- **Book Management**: Users can browse books, view details, and add new books to the store.
- **Dashboard**: Personal dashboard for managing user profiles and added books.
- **Responsive Design**: Beautifully crafted UI using Tailwind CSS and DaisyUI, optimized for all devices.
- **Data Visualization**: Interactive charts for data analysis using Recharts.
- **Interactive UI**: Rich notifications and alerts with SweetAlert2.

## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router), React 19, Tailwind CSS, DaisyUI
- **Backend**: Next.js API Routes, MongoDB (Native Driver)
- **Authentication**: NextAuth.js (bcryptjs for password hashing)
- **Icons & Charts**: React Icons, Recharts
- **Feedback**: SweetAlert2

## 📦 Setup & Installation

Follow these steps to get the project running locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/armanislams/book-store.git
   cd book-store
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following:

   ```env
   DB_URI=your_mongodb_connection_string
   DB_NAME=boi-poka
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

5. **Access the App**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛣️ Route Summary

| Route                 | Description                                  |
| :-------------------- | :------------------------------------------- |
| `/`                   | Landing page featuring highlighted books.    |
| `/books`              | Catalog of all available books.              |
| `/books/[id]`         | Detailed view for a specific book.           |
| `/dashboard`          | User dashboard overview.                     |
| `/dashboard/profile`  | View and edit user profile.                  |
| `/dashboard/add-book` | Interface for adding new books to the store. |
| `/blog`               | Blog section for book-related articles.      |
| `/login`              | User authentication page.                    |
| `/register`           | New account registration page.               |

## 📖 Feature Explanation

- **Dynamic Catalog**: The `/books` route dynamically fetches and displays all available titles from the MongoDB database.
- **Detailed Insights**: Each book page provides comprehensive information, including descriptions and metadata.
- **Secure Auth Flow**: NextAuth handles session management, ensuring only authenticated users can access dashboard features like adding books.
- **Enhanced UX**: Using `loading.jsx` and `error.jsx` for smooth transitions and robust error handling.
- **Modern Styling**: Leveraging DaisyUI components for a polished, premium aesthetic.
