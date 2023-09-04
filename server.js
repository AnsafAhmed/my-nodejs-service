const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoute=require('./routes/book.route')

const app = express();

var corsOptions = {
	origin: "http://localhost:8080/"
		};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use (bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use (bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('Hello from Ansaf!');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

// Define the port number that the express application should use.

// const port = 3000;

// Import the database connection file.

const db = require("./config/database");

// Import the Book model.
const BookModel = require("./models/book.model");

// Create an anonymous function to establish the database connection.
// After the connection is established, start the server.

const initApp = async () => {
  console.log("Testing the database connection..");
  
  // Test the connection.
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
    
    // Syncronize the Book model.
    BookModel.sync({ alter: true });
    
    app.use("/book", bookRoute);
    
    /**
     * Start the web server on the specified port.
    */
  //  app.listen(port, () => {
  //    console.log(`Server is running at: http://localhost:${port}`);
  //   });
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

/**
 * Initialize the application.
*/
initApp();