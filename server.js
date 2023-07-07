require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const notFoundMiddleware = require("./src/middlewares/notFound");
const errorMiddleware = require("./src/middlewares/errorHandler");
const connectDB = require("./src/db/connectDB");
const productRoute = require("./src/api/routes/productRoute");

//TODO:------> middlewares(Not using in this projects but write to understand the syntax)
app.use(express.json());

//TODO:------> Routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/products">Products Route</a>');
});

//TODO:------> Products Routes
app.use("/api/products", productRoute);

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
