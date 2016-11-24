var mongoose = require('mongoose'),
    ExchangePref = mongoose.model('ExchangePref'),
    User = mongoose.model('User'),
    Exchange = mongoose.model('Exchange');

module.exports = (function() {
  return {
    create: function(req, res) {
      Exchange.findOne({_id: req.body.exchange}, function(err, exchange) {
        User.findOne({_id: req.session.user._id}, function(err, user) {
          var exchangePref = new ExchangePref(req.body);
          exchangePref.user = user._id;
          exchangePref.save(function(err, exchangePref) {
            if (err) {throw err}
            exchange.exchangePrefs.push(exchangePref);
            exchange.save(function(err, exchange) {
              if (err) {throw err}
              user.exchangePrefs.push(exchangePref);
              user.save(function(err, user) {
                if (err) {throw err}
                res.json(exchange);
              })
            })
          })
        })
      })
    }
  }
})()
