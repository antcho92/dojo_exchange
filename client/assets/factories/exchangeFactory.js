app.factory('exchangeFactory', ['$http', '$location', function($http, $location) {
  function ExchangeFactory() {
    var self = this;
    this.create = function(exchange) {
      $http.post('/exchanges', exchange).then(function(res) {
        console.log(res.data);
        $location.url('/dashboard');
      });
    };
    this.index = function(callback) {
      $http.get('/exchanges').then(function(res) {
        callback(res.data);
      })
    }
    this.getExchange = function(exchangeId, callback) {
      $http.get(`exchanges/${exchangeId}`).then(function(res) {
        callback(res.data);
      })
    };
    this.join = function(newExchangePref) {
      console.log(newExchangePref);
    }
  }
  return new ExchangeFactory();
}])
