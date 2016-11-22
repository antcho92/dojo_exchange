app.factory('usersFactory', ['$http', '$location', function($http, $location) {
  console.log('users factory loaded');
  function UsersFactory() {
    var self = this;
    this.index = function() {
      $http.get('/users').then(function(res) {
        console.log(res);
      });
    };
    this.register = function(newUser, callback, errCallback) {
      $http.post('/users', newUser).then(function(res) {
        console.log(res.data);
        if (res.data.errmsg) {
          errCallback({
            email: {
              message: 'Email has already been registered'
            }
          })
        } else if (res.data.errors) {
          errCallback(res.data.errors);
        } else {
          callback();
          $location.url('/dashboard')
        }
      });
    };
    this.login = function(userLogin, callback, errCallback) {
      $http.post('/users/login', userLogin).then(function(res) {
        console.log(res.data);
        if (res.data.errors) {
          errCallback(res.data.errors);
        } else {
          callback();
          $location.url('/dashboard')
        }
      })
    };
    this.checkSess =function(callback) {
      $http.get('/users/checkSess').then(function(data) {
        if (!data.data) {
          $location.url('/');
        } else {
          console.log(data);
          callback(data);
          $location.url('/dashboard');
        }
      })
    }
  }
  console.log(new UsersFactory());
  return new UsersFactory();
}]);
