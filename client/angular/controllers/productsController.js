//  build the controllers
    // Create a controller (attached to this module), and inject the productFactory in it.
    // Create a module
      // var myAppModule = angular.module('FBApp', ['ngRoute']);
      // Create a controller (attached to this module), and inject the productFactory in it.
myAppModule.controller('productsController', function ($scope, $location, productFactory, $routeParams){
  $scope.products = [];
  $scope.productData = [];
  $scope.route = $routeParams

  	// orderFactory.getOrders(function (data){
   //    	console.log(data);
   //    	$scope.orders = data;
  	// })
  productFactory.getProducts(function (data){
  	// console.log(data, 'hello');
          $scope.products = data;
          // console.log(data)
  })

  $scope.createProduct = function (data){
    console.log($scope.newProduct)
    productFactory.addProduct($scope.newProduct, function(){
      productFactory.getProducts(function (data){
      $scope.products = data;
      });
    });
    $scope.newProduct = {};
  };

  $scope.getProductByID = function(info) {
     // $location.path('/admin/products/' + info._id)
    var id = info._id
    productFactory.getProductByID(id, function(data) {
      $scope.productData = data;
      console.log($scope.productData);
    })
    $location.path('/admin/products/' + info._id)
  }

});
