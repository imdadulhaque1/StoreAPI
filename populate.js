require("dotenv").config();
const ProductModel = require("./src/api/models/ProductModel");
const connectDB = require("./src/db/connectDB");
const jsonProducts = require("./products.json");

const connectingDatabase = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await ProductModel.deleteMany();
    await ProductModel.create(jsonProducts);
    console.log("Success!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectingDatabase();
