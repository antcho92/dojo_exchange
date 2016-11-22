app.factory('exchangeFactory', ['$http', '$location', function($http, $location) {
  function ExchangeFactory() {
    var self = this;
    this.create = function(exchange) {
      $http.post('/exchanges', exchange).then(function(res) {
        console.log(res.data);
      });
    };
    this.index = function(callback) {
      $http.get('/exchanges').then(function(res) {
        callback(res.data);
      })
    }
  }
  return new ExchangeFactory();
}])
