# Problem Statement: Classroom Management Web Application

## Overview
You have been tasked with developing a simple **Classroom Management Web Application** using **Node.js**, **Express**, and **MongoDB** (with **Mongoose**). The goal is to create a set of RESTful APIs that allow for the management of classes, students, and their enrollments.

This application will be foundational for classroom operations and should support the essential functionalities listed below.

---

## Requirements & Specifications

### HTTP & Express
1. **Express Server Setup**:
   - Create an Express server that listens on a configurable port (e.g., 3000).
   - Use best practices for structuring routes and organizing the application.

2. **RESTful API Routes**:
   - Define routes to manage core resources:
     - Classes: `/api/classes`
     - Students: `/api/students`
     - Enrollments: `/api/classes/:classId/enroll` or a dedicated `/api/enrollments`

3. **Logical Route Structure**:
   - Separate routes based on resources and functionality.
   - Use meaningful HTTP methods (GET, POST, PUT, DELETE) for operations.

---

### Express Middlewares
1. **Logging Middleware**:
   - Implement a middleware to log the method, URL, and timestamp of each request.

2. **Error-Handling Middleware**:
   - Create a global error handler to capture and format error responses consistently.

3. **Validation Middleware (Optional)**:
   - Validate incoming request data (e.g., ensure required fields are provided when creating a class or student).

---

### MongoDB & Mongoose
1. **Database Setup**:
   - Connect the application to a MongoDB database using **Mongoose**.

2. **Mongoose Models**:
   - Define schemas for core entities:
     - **Class**: Fields like `name`, `subject`, `teacherName`, `startDate`, and `endDate`.
     - **Student**: Fields like `firstName`, `lastName`, and `email`.
     - **Enrollment** (or use references in Class/Student models).

3. **CRUD Operations**:
   - Implement basic Create, Read, Update, and Delete operations using Mongoose.

---

## Core Features
1. **Create a Class**:
   - Endpoint: `POST /api/classes`
   - Store class details in MongoDB via Mongoose.

2. **List Classes**:
   - Endpoint: `GET /api/classes`
   - Support optional filtering or pagination.

3. **Create a Student**:
   - Endpoint: `POST /api/students`
   - Validate required fields and handle errors appropriately.

4. **Enroll a Student in a Class**:
   - Endpoint: `POST /api/classes/:classId/enroll`
   - Implement references/relations in Mongoose.

5. **List Students in a Class**:
   - Endpoint: `GET /api/classes/:classId/students`
   - Retrieve all students enrolled in a specific class.

---

## Error Handling & Edge Cases
1. Handle cases where requested resources (e.g., class or student) do not exist.
2. Return appropriate HTTP status codes:
   - `404` for Not Found
   - `400` for Bad Request
3. Use the global error-handling middleware for consistent error responses.

---

## Enhancements (Optional)
1. **Authentication & Authorization**:
   - Restrict specific routes (e.g., only a teacher can create a class).

2. **Search & Pagination**:
   - Allow searching by class name or teacher name.
   - Add pagination for large datasets.

3. **Attendance Tracking**:
   - Extend the schema to include attendance records or assignment submissions for students.

---

## Deliverables
1. **Source Code**:
   - A Node.js project with a structured folder layout, including controllers, routes, models, and middlewares.
   - Proper usage of Express routers and middlewares.
   - Environment variables (e.g., MongoDB connection string, server port) managed via `.env` file or configuration system.

2. **README File**:
   - Include clear instructions for installation, dependency management, and starting the server.
   - Document available API endpoints with sample requests and responses.

---

## Example Endpoints
1. **Create a Class**
   - Endpoint: `POST /api/classes`
   - Request Body:
     ```json
     {
       "name": "Math 101",
       "subject": "Mathematics",
       "teacherName": "Mr. John Doe",
       "startDate": "2024-01-10",
       "endDate": "2024-06-20"
     }
     ```

2. **Get All Classes**
   - Endpoint: `GET /api/classes`

3. **Enroll a Student in a Class**
   - Endpoint: `POST /api/classes/:classId/enroll`
   - Request Body:
     ```json
     {
       "studentId": "64f7e8c89e86f9a1b1a12345"
     }
     ```

