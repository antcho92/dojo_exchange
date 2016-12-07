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
      $http.get(`/exchanges/${exchangeId}`).then(function(res) {
        console.log(res.data);
        callback(res.data);
      })
    };
    this.join = function(exchangePref) {
      console.log(exchangePref);
      $http.post('/exchangeprefs', exchangePref).then(function(res) {
        console.log(res.data);
      });
    };
    this.checkSess = function(callback) {
      $http.get('/users/checkSess').then(function(res) {
        if (!res.data) {
          if ($location.url() !== '/') {
            $location.url('/');
          }
        } else {
          callback(res.data);
        }
      });
    };
  }
  return new ExchangeFactory();
}])
