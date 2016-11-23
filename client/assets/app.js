console.log('app.js loaded')
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'static/partials/login.html',
      controller: 'usersController',
      controllerAs: 'uC'
    })
    .when('/dashboard', {
      templateUrl: 'static/partials/dashboard.html',
      controller:'dashboardController',
      controllerAs: 'dC'
    })
    .when('/exchange/new', {
      templateUrl: 'static/partials/newExchange.html',
      controller: 'exchangeController',
      controllerAs: 'eC'
    })
    .when('/exchange/:exchangeId', {
      templateUrl: 'static/partials/exchange.html',
      controller: 'exchangeController',
      controllerAs: 'eC'
    })
    .otherwise('/');
})
