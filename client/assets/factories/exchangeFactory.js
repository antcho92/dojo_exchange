app.factory('exchangeFactory', ['$http', '$location', function($http, $location) {
  function ExchangeFactory() {
    var self = this;
    this.create = function(exchange) {
      $http.post('/exchange', exchange).then(function(res) {
        console.log(res);
      });
    }
  }
  return new ExchangeFactory();
}])
