const app = require('./app');


const port = 5000;
app.listen(port, () => {
    console.log(`Assignment Server is Running http://localhost:${port}`);
});