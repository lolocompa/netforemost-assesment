

# React and Node.js Assessment
This project is a full-stack web application developed as part of a technical assessment. The project consists of two main components:

### Backend: 
A Node.js application that uses Express and MongoDB to store and serve articles from a JSON file.
## Frontend: 
A React application that fetches the articles from the backend and displays them in a user-friendly interface.

## Installation
- Clone the Repository: git clone https://github.com/lolocompa/netforemost-assesment.git
- cd netforemost-assesment
  
### Backend Setup

- Navigate to the backend directory and install the dependencies:
- cd backend
- cd server
- npm install
  
### Frontend Setup

- Navigate to the frontend directory and install the dependencies:
- cd frontend
- cd react-articles-app
- npm install

## Running the Application
### Start the Backend

- cd backend
- cd server
- npm start
- This will start the Node.js server on http://localhost:3000.

### Start the Frontend

- cd frontend
- cd react-articles-app
- npm start
- This will start the React development server on http://localhost:3001 (or another available port).

## Environment Variables

### Backend
MONGODB_URI = connection string
replace the connection string in a .env file with the corresponding string

### Frontend
The proxy in package.json will handle API requests:
"proxy": "http://localhost:3000"

