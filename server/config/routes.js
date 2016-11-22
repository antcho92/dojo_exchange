var users = require('./../controllers/users.js'),
    exchanges = require('./../controllers/exchanges.js')

module.exports = function(app) {
  app.get('/users', users.index);
  app.post('/users', users.create);
  app.post('/users/login', users.login);
  app.get('/users/logout', users.logout);
  app.get('/users/checkSess', users.checkSess);
  app.post('/exchanges', exchanges.create);
  app.get('/exchanges', exchanges.index);
  app.get('/exchanges/:exchangeId', exchanges.getExchange);
}
