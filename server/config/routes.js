var mongoose = require('mongoose');
var product = require('./../controllers/products.js');

  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
  // verb: get, plural of target as the URI is the RESTful index method (it returns all customers)

  app.get('/product', function(req, res) {
    product.index(req, res);
  });

  // all products route
  app.post('/product', function(req, res) {
    console.log('POST DATA', req.body);
    product.create(req, res);
  });
  // individual product route
  app.get('/product/:id', function(req, res) {
    console.log('GET DATA', req.params);
    product.getProductByID(req, res);
  });
  // update individual product route
  app.post('/product/:id', function(req, res) {
  	console.log('POST DATA', req.params);
  	product.update(req, res);
  });
  // delete individual product
  app.delete('/product/delete/:id', function (req, res){
    product.destroy(req, res);
  })

};
