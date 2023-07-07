require("dotenv").config();
const express = require("express");
const app = express();

//TODO:------> async Errors
const notFoundMiddleware = require("./src/middlewares/notFound");
const errorMiddleware = require("./src/middlewares/errorHandler");
const connectDB = require("./src/db/connectDB");

//TODO:------> middlewares(Not using in this projects but write to understand the syntax)
app.use(express.json());

//TODO:------> Routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/products">Products Route</a>');
});

//TODO:------> Products Routes

//TODO:------> Middleware Call
app.use(notFoundMiddleware);
app.use(errorMiddleware);

//TODO:------> Create Server
const port = process.env.PORT || 3000;
const startServer = async () => {
  try {
    // ConnectDB
    connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening PORT @${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
