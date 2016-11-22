app.controller('usersController', ['$scope', 'usersFactory', '$location', function($scope, uF, $location) {
  console.log('users function loaded');
  var self = this;
  this.register = function() {
    uF.register(this.newUser, function() {
      self.newUser = '';
    }, function(errors) {
      self.errors = errors;
    });
  };
  this.login = function() {
    uF.login(this.userLogin, function() {
      self.userLogin = '';
    }, function(errors) {
      self.errors = errors;
    })
  };
  uF.checkSess(function(user) {
    self.currUser = user;
  });
}]);
