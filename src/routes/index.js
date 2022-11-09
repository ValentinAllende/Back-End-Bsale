const { Router } = require("express");
const { product, category } = require("../db");
const router = Router();
router.get("/products", (req, res) => {
  if (product.length > 0) {
    res.send(product);
  }
});
router.get("/category", (req, res) => {
  if (category.length > 0) {
    res.send(category);
  }
});
//Buscador
router.get("/products/search", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const productFilter = product[0].filter((x) =>
      x.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(productFilter);
  } else {
    res.status(200).send(product);
  }
});

module.exports = router;
