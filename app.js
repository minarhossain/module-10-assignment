const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/routes/api');
require('dotenv').config()


const app = express();
app.use(express.json());

// database connection
let url = "mongodb+srv://backend:kRMrP5IQ8bWttdlo@cluster0.rxisjfd.mongodb.net/Product";
mongoose.connect(url).then(() => console.log("Connected")).catch(err => console.log(err));


// router 
app.use('/api/v1', router);

app.use('*', (req, res) => {
    res.status(404).json({
        status: "Fail",
        msg: "Route Not Found"
    })
})

module.exports = app;