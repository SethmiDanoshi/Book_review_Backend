# Book Review BackEnd

A RESTful web application for managing book reviews built with Node.js, Express, and MongoDB.

## Features
- Create Book Review
- Get All Book Reviews
- Get Book Review by ID
- Update Book Review
- Delete Book Review

## Project Structure
- `server.js`: Main entry point of the application
- `config`: Contains configuration files (e.g., database configuration)
- `models`: Contains the Mongoose models for MongoDB
- `routes`: Contains the route definitions for API interaction
- `.env`: Environment configuration file (to be created with appropriate variables)

## Prerequisites
- Node.js (v14+)
- MongoDB

## Setup Instructions
### Clone the Repository
```bash
git clone https://github.com/SethmiDanoshi/Book_review_Backend.git
cd book-review-app
```
### configure database
Create a .env file in the root directory with the following content:
```bash
MONGO_URI=mongodb://localhost:27017/book_reviews_db
PORT=8080
```

### Install Dependencies
```bash
npm install
```
### Build the Application
No build step is necessary for this application.

### Run the Application
```bash
npm start
```
## API Endpoints
- **Create a Book Review**: `POST /reviews`
  - Adds a new book review.
  
- **Get All Book Reviews**: `GET /reviews`
  - Retrieves all book reviews.
  
- **Get Book Review by ID**: `GET /reviews/{id}`
  - Retrieves a single book review by its unique ID.
  
- **Update Book Review**: `PUT /reviews/{id}`
  - Updates an existing book review by its unique ID.
  
- **Delete Book Review**: `DELETE /reviews/{id}`
  - Deletes a book review by its unique ID.







