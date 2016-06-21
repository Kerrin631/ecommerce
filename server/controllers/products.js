var mongoose = require('mongoose');
var product = mongoose.model('product');

// Edit the show method as follows
module.exports = (function() {
	return {
 		index: function(req, res) {
  		product.find({}, function(err, results) {
  			if(err) {
  				console.log(err);
  			} else {
      		res.json(results);
  			}
			})
		},

 		getProductByID: function(req, res) {
  		product.findOne({_id: req.params.id}, function(err, product) {
  			if(err) {
  				console.log(err);
  			} else {
      		res.json(product);
  			}
			})
		},

		create: function(req, res) {
			var newProduct = new product({name: req.body.name, image: req.body.image, description: req.body.description, quantity: req.body.quantity, inStock: req.body.inStock, price: req.body.price, type: req.body.type, date: req.body.created_at})
			newProduct.save(function(err) {
				if(err) {
					console.log('New product has not been added');
				} else {
					console.log('You added a new product!');
					res.end();
				}
			})
		},

		update: function(req, res) {
			// console.log(req.body)
			// console.log(req.body.name.length)
			// if (req.body.name.length > 0) {
			// 	console.log('this is true');
			// } else {
			// 	console.log('false')
			// }
			product.update({_id: req.params.id}, {name: req.body.name, image: req.body.image, description: req.body.description, quantity: req.body.quantity, inStock: req.body.inStock, price: req.body.price, type: req.body.type, date: req.body.created_at}, function (err, user){
		    	if(err) {
		    		console.log('Error updating product')
		    	} else {
		    		console.log('Product successfully updated');
		    		res.end();
		    	}
		    })
		},
		


		destroy: function(req, res) {
			product.remove({_id: req.params.id}, function (err, product){
				console.log('You have taken this product off the shelves')
				// res.redirect('/');
				res.end();
			})
		}


	}
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports
