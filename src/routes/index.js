const { Router } = require('express');
const {product, category}  = require('../db')
const router = Router();
router.get('/products',(req,res) => {
 if(product.length > 0){
    res.send(product)
 }
})
router.get('/category',(req,res) => {
    if(category.length > 0){
       res.send(category)
    }
   })
module.exports = router;