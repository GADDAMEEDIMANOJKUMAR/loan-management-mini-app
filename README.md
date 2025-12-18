# Loan Management Mini App

## Overview
This project is a frontend-only Loan Management Mini Application built using React.
It includes user authentication (Signup, Login with OTP) and a dashboard that displays
loan records with multiple filters.

All data is managed using browser localStorage. No backend or external APIs are used.

---

## Features

### Authentication
- Signup with Full Name, Email, Password, Phone, and City
- Login using Email and Password
- OTP verification after login
- Default OTP used for demo purpose
- Logout functionality

### Dashboard
- Display loan records in a table
- Search loans by customer name
- Filter by loan type
- Filter by loan status
- Filter by city
- Filter by application date range
- Optional filter by time
- Responsive design for mobile and desktop

### UI & UX
- Clean and simple user interface
- Mobile-first responsive layout
- Toast notifications for user feedback

---

## Tech Stack
- React
- React Router
- JavaScript
- CSS
- localStorage

---

## Project Structure

src/
- pages/ → Login, Signup, OTP, Dashboard
- data/ → Static users and loan data
- styles/ → CSS files
- utils/ → localStorage helper functions

---

## How to Run the Project

1. Install dependencies  
   npm install

2. Start the development server  
   npm run dev

3. Open in browser  
   http://localhost:5173

---

## Notes
- This project is frontend-only as per assignment requirements.
- localStorage is used to simulate backend behavior.
- OTP is fixed for demo and testing purposes.

---

## Author
Manoj Kumar
