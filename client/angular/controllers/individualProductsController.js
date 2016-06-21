myAppModule.controller('individualProductsController', function ($scope, $location, productFactory, $routeParams, $timeout){
  $scope.productData = {}
  $scope.id = $routeParams.id

	productFactory.getProductByID($scope.id, function(data) {
		$scope.productData = data;
	})

	$scope.updateProductByID = function(data) {
		$scope.updateProduct['_id'] = $scope.productData._id
		// console.log('update', $scope.updateProduct)
		// console.log('other info', $scope.productData)
		productFactory.updateProductByID($scope.updateProduct, function(){
			$location.path('/admin/products/')
		});
	}

	$scope.delete = function(data) {
		productFactory.delete(data, function(){
			$location.path('/admin/products/')
		});
	}

});
