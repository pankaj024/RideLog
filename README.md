# RideLog
A MongoDB-based bike trip and maintenance management web application.

## Stack
- Frontend: React + Vite + Tailwind CSS + Recharts
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Auth: JWT + bcrypt

## Requirements
- Node.js 18+
- MongoDB local installation or MongoDB Atlas connection string

## Setup

### 1. Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
Set `MONGO_URI` and `JWT_SECRET` in `backend/.env`.

### 2. Frontend
Open another terminal:
```bash
cd frontend
npm install
npm run dev
```
Open the Vite URL (normally http://localhost:5173).

## Seed demo data
After registering an account, run:
```bash
cd backend
npm run seed
```
The seed script creates sample bikes and related records for the first registered user.

## Main modules
- User registration and login
- Multiple bike management
- Trip CRUD with embedded stops and expense breakdown
- Fuel log CRUD and fuel efficiency calculations
- Maintenance CRUD with due/overdue status
- Dashboard summaries and monthly expense analytics

## Important
This is a student project starter with working core flows. Configure a private MongoDB database and change the JWT secret before deployment. All records are scoped to the authenticated user.
