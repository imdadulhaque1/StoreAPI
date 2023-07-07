const ProductModel = require("../models/ProductModel");

const getAllProductsStatic = async (req, res) => {
  // throw new Error("Testing async Errors!");
  const findingProducts = await ProductModel.find({ page: "2" });
  res.status(200).json({ findingProducts, nbHits: findingProducts.length });
};

const getAllProducts = async (req, res) => {
  const { featured } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  console.log(queryObject);
  const queryProducts = await ProductModel.find(queryObject);
  res.status(200).json({ queryProducts, nbHits: queryProducts.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
