# MERN Course Registration App

This is a full-stack course registration system built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to add, view, update, and delete course records.

## Features

- Add a new course with code, name, and credits
- View all registered courses
- Edit or delete a course
- Backend API with MongoDB
- Frontend built in React with Axios integration

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **HTTP Client**: Axios

## Getting Started

### 1. Clone the repository


### 2. Backend Setup

cd backend
npm install

Create a `.env` file in the backend folder:

PORT=5000
MONGO_URI=mongodb://localhost:27017/reg_db

Start the server:

node server.js

### 3. Frontend Setup

cd ../frontend
npm install
npm start



## API Endpoints

- `GET /api/courses` - Get all courses
- `POST /api/courses` - Add a new course
- `PUT /api/courses/:id` - Update a course
- `DELETE /api/courses/:id` - Delete a course

## Author

Chandu Paripelly  
GitHub: [@Chanduparipelli](https://github.com/Chanduparipelli)
