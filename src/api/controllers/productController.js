const getAllProductsStatic = async (req, res) => {
  throw new Error("Testing async Errors!");
  res.status(200).json({ msg: "Products Testing Route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products Route" });
};

module.exports = { getAllProductsStatic, getAllProducts };
