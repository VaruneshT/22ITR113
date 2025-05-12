# Average Calculator Microservice

This project is a simple HTTP microservice that calculates the average of a set of numbers. It exposes a REST API that allows users to add numbers and retrieve the average of the numbers added.

## Project Structure

```
average-calculator-microservice
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers
│   │   └── numbersController.js # Handles requests related to numbers
│   ├── routes
│   │   └── numbersRoutes.js   # Defines routes for the numbers API
│   ├── services
│   │   └── averageService.js   # Contains logic for calculating averages
│   └── utils
│       └── validation.js       # Utility functions for input validation
├── package.json                # NPM configuration file
├── .env                        # Environment variables
└── README.md                   # Project documentation
```

## API Endpoints

### Add a Number

- **Endpoint:** `POST /numbers`
- **Description:** Adds a new number to the list.
- **Request Body:**
  - `number`: The number to be added (must be a valid number).
  
### Get Average

- **Endpoint:** `GET /numbers/{numberid}`
- **Description:** Retrieves the average of the numbers added.
- **Path Parameters:**
  - `numberid`: The ID of the number for which the average is requested.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd average-calculator-microservice
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add any necessary environment variables.

5. Start the application:
   ```
   npm start
   ```

## Usage

You can use tools like Postman or curl to interact with the API. Make sure to send requests to the correct endpoints as specified above.

## License

This project is licensed under the MIT License.