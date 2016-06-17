var myAppModule = angular.module('FBApp', ['ngRoute']);

//  use the config method to set up routing:
    myAppModule.config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/home.html'
        })
        .when('/boxers', {
            templateUrl: 'partials/boxers.html'
        })
        .when('/pajamas', {
            templateUrl: 'partials/pajamas.html'
        })
        .when('/admin', {
            templateUrl: 'partials/admin.html'
        })
        .when('/admin/home', {
            templateUrl: 'partials/admin.html'
        })
        .when('/admin/customers', {
            templateUrl: 'partials/adminCustomers.html'
        })
        .when('/admin/orders', {
            templateUrl: 'partials/adminOrders.html'
        })
        .when('/admin/privileges', {
            templateUrl: 'partials/adminPrivileges.html'
        })
        .when('/admin/products', {
            templateUrl: 'partials/adminProducts.html'
        })
        .when('/admin/products/:id', {
            templateUrl: 'partials/adminProductsDescription.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    });