app.controller('dashboardController', ['$scope', 'exchangeFactory', 'usersFactory', function($scope, eF, uF) {
  var self = this;
  function getExchanges(exchanges) {
    self.exchanges = exchanges;
  }
  uF.checkSess(function(user) {
    self.user = user;
  });
  eF.index(getExchanges);
}])
