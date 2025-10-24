const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// POST /product - Handles form submission to create a new product
// POST is the correct HTTP method here because we're creating a new resource
// PUT would be inappropriate because:
// - PUT is for updating/replacing an existing resource at a specific URL (e.g., PUT /product/123)
// - PUT requires knowing the resource identifier beforehand
// - POST is idiomatic for creation when the server generates the identifier
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
