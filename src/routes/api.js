const express = require('express');
const productController = require('../controllers/productController')
const jwtToken = require('../controllers/jwtToken');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Product API")
})

router.post('/insertProduct', productController.InsertProduct);
router.get('/readProduct', productController.ReadProduct);




// create JWT Token
router.get('/generateToken', jwtToken.generateToken);

module.exports = router;