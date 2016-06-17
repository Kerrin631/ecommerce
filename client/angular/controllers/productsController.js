//  build the controllers
    // Create a controller (attached to this module), and inject the productFactory in it.
    // Create a module
      // var myAppModule = angular.module('FBApp', ['ngRoute']);
      // Create a controller (attached to this module), and inject the productFactory in it.
      myAppModule.controller('productsController', function ($scope, $location, productFactory, $routeParams){
	//  initialize an empty array so $scope.orders maintains a consistent data type
          $scope.products = [];
          $scope.indProducts = [];
          $scope.route = $routeParams
          // run the getcustomers method and set $scope data in the callback


        productFactory.getProducts(function (data){
        	// console.log(data, 'hello');
                $scope.products = data;
                // console.log(data)
        })

            $scope.getProductByID = function(info) {
                var id = info._id
                console.log(id)
                // console.log($scope.product)
                // $location.path('/admin/products/' + info._id)
        // if ($routeParams.id.length > 10) {
            // console.log(info)
            // console.log(info._id)
                productFactory.getProductByID(id, function(data) {
                    console.log(id)
            })
                $location.path('/admin/products/' + info._id)
        } 


            $scope.createProduct = function (data){
              // add to the array
              // $scope.orders.push($scope.newOrder);
            	console.log($scope.newProduct)
            	productFactory.addProduct($scope.newProduct, function(){
                productFactory.getProducts(function (data){
            // console.log(data)
	              $scope.products = data;
	        	})
            })
              // clear the form values
              $scope.newProduct = {};
            };

            $scope.getProductByID = function(info) {
                var id = info._id
                console.log(id)
                // console.log($scope.product)
                // $location.path('/admin/products/' + info._id)
        // if ($routeParams.id.length > 10) {
            // console.log(info)
            // console.log(info._id)
                productFactory.getProductByID(id, function(data) {
                    console.log(id)
            })
                $location.path('/admin/products/' + info._id)
        } 




});
