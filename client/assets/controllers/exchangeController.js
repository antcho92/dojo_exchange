app.controller('exchangeController', ['$scope', 'exchangeFactory', function($scope, eF) {
  var self = this;
  this.create = function() {
    console.log(this.newExchange);
  }
}])
