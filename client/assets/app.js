console.log('app.js loaded')
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'usersController',
      controllerAs: 'uC'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller:'usersController',
      controllerAs: 'uC'
    })
    .when('/exchange/new', {
      templateUrl: 'partials/newExchange.html',
      controller: 'exchangeController',
      controllerAs: 'eC'
    })
    .otherwise('/');
})
