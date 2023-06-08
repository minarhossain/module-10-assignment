const Product = require('../models/productModel')

// insert data in DataBase or create data using mongoose schema model 
exports.InsertProduct = (req, res) => {
    const reqBodyData = req.body;

    Product.create(reqBodyData)
        .then((data) => res.status(200).json({ status: "Success", data: data }))
        .catch(error => res.status(404).json({ status: 'Fail', data: error }))
}


// Read Data or get data

exports.ReadProduct = (req, res) => {
    const query = {};
    const projection = "name price";
    Product.find(query, projection)
        .then((data) => res.status(200).json({ status: "Success", data: data }))
        .catch(error => res.status(404).json({ status: 'Fail', data: error }))
}