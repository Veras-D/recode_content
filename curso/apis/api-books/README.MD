# Book Management API  

## Description  
This is a simple API for managing books, developed with **JavaScript** and **Node.js**. The project follows the **MVC architecture** and supports CRUD (Create, Read, Update, Delete) operations. It was tested using **Postman** to ensure functionality and reliability.  

## Features  
- Add, retrieve, update, and delete books.  
- Modular and maintainable code structure.  
- Designed for easy extension and scalability.  

## Technologies Used  
- **JavaScript**  
- **Node.js**  
- **Express.js**  
- **Postman** (for testing)  

## Installation  

1. Clone the repository:  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Run the application:  
   ```bash  
   npm start  
   ```  

4. Test the API using **Postman** or any other API testing tool.  

## Endpoints  

| Method | Endpoint         | Description                |  
|--------|------------------|----------------------------|  
| GET    | `/api/books`     | Retrieve all books         |  
| GET    | `/api/books/:id` | Retrieve a book by ID      |  
| POST   | `/api/books`     | Add a new book             |  
| PUT    | `/api/books/:id` | Update a book by ID        |  
| DELETE | `/api/books/:id` | Delete a book by ID        |  

## Folder Structure  

```
api-books/  
├── src/  
│   ├── app.js             # Entry point  
│   ├── controllers/       # Controller logic  
│   ├── models/            # Data models  
│   └── routes/            # API routes  
├── package.json           # Project metadata and dependencies  
└── README.md              # Project documentation  
```

## Contributing  
Feel free to fork this project and submit pull requests for improvements.  

## License  
This project is licensed under the MIT License.  