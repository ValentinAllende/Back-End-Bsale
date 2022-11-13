const { Router } = require("express");
const { product, category } = require("../db");
const router = Router();
router.get("/products", (req, res) => {
  if (product.length > 0) {
    res.json(product);
  }
});
router.get("/category", (req, res) => {
  if (category.length > 0) {
    res.send(category);
  }
});
//Buscador
router.get("/products/search", (req, res) => {
  const { name } = req.query;
  if (name) {
    let productFilter = product[0].filter((x) =>
      x.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(productFilter);
  } else {
    res.status(200).send(product);
  }
});
//Ordenado Categoria
router.get("/products/category/:category", (req, res) => {
  const { category } = req.params;
  if (category) {
    let productCat = product[0].filter((x) => x.category == category);
    productCat.length
      ? res.json(productCat)
      : res.status(404).send("no se encontro la categoria");
  } else {
    res.status(404).send("no se encontro la categoria");
  }
});

module.exports = router;
