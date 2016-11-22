app.factory('exchangeFactory', ['$http', '$location', function($http, $location) {
  function ExchangeFactory() {
    var self = this;
    this.create = function(exchange) {
      $http.post('/exchanges', exchange).then(function(res) {
        console.log(res);
      });
    };
    this.index = function(callback) {
      $http.get('/exchanges').then(function(res) {
        console.log(res.data, 'exchanges index');
        callback(res.data);
      })
    }
  }
  return new ExchangeFactory();
}])
