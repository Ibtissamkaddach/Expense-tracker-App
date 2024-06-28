# Expense-tracker-App

This is a full-stack expense tracker application built with the MERN stack (MongoDB, Express, React, Node.js). This App allows the user to track their expenses by creating, reading, updating and deleting expense entries. This project contains two main structures: as a backend entry and a frontend.

## Features

- Add , track, update and delete expenses
- View a list of all expenses

## Project Set-up

### Backend
server.js: Entry point of the backend server.
routes/expenseRoutes.js: Defines the API routes for managing expenses.
controllers/expenseController.js: Contains the logic for handling API requests.
1. Navigate to the `backend` folder:
   ```powershell
   cd backend
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

3. Create a `.env` file and add your MongoDB URI:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   ```

4. Run the server:
   ```powershell
   npm run dev
   ```

### Frontend
src/App.js: Main React component for the application.
public: Contains static files and the HTML template.
1. Navigate to the `frontend` folder:
   ```powershell
   cd frontend
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

3. Run the React app:
   ```powershell
   npm start
   ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## API Endpoints
Get All Expenses
URL: /api/expenses
Method: GET
Response: Array of expense objects
Get Expense by ID
URL: /api/expenses/:id
Method: GET
Response: Expense object
Create Expense
URL: /api/expenses
Method: POST
Body: JSON object containing description, amount, and date
Response: Created expense object
Update Expense
URL: /api/expenses/:id
Method: PUT
Body: JSON object containing description, amount, and date
Response: Updated expense object
Delete Expense
URL: /api/expenses/:id
Method: DELETE
Response: 204 No Content
Project Structure
server.js: Entry point of the backend server.
routes/expenseRoutes.js: Defines the API routes for managing expenses.
controllers/expenseController.js: Contains the logic for handling API requests.

## Contributions are welcome to this project
Any bugs, or issues , or any contributions are welcome, please feel free to suggest any changes or troubleshooting.
