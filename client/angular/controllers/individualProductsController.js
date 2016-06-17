myAppModule.controller('individualProductsController', function ($scope, $location, productFactory, $routeParams, $timeout){
  $scope.productData = {}
  $scope.id = $routeParams.id

  productFactory.getProductByID($scope.id, function(data) {
    $scope.productData = data;
  })

});
