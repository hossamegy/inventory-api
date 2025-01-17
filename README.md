
# My Node.js Product Management API

This is a simple Node.js API for managing products. It uses Express.js for routing, MongoDB for database storage, and Mongoose for object modeling.

## Features
- CRUD operations for products.
- Filtering, sorting, and pagination for product listings.
- Error handling and async middleware for cleaner code.

## Technologies Used
- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling.
- **Dotenv**: Environment variable management.

## Installation

1. Clone the repository:
   
   ```bash
      git clone https://github.com/your-username/your-repo-name.git
   ```
   
2.Navigate to the project directory:

    ```bash
       cd your-repo-name
    ```
    
3.Install dependencies:

    ```bash
       npm install
    ```
    
4.Set up environment variables:
        - Create a .env file in the root directory.
        - Add your MongoDB connection URL:
        
        ```bash
           CONNECTION_URL=mongodb://localhost:27017/store
        ```
        
5.Start the server:

    ```bash
       npm start
    ```
    Access the API:
    The server will run on http://127.0.0.1:3000.

API Endpoints
Products

   GET /api/v1/products - Get all products (with optional filtering, sorting, and field selection).
   
   GET /api/v1/products/static - Get all products with static sorting.
