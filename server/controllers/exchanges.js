var mongoose = require('mongoose');
var Exchange = mongoose.model('Exchange'),
    User = mongoose.model('User'),
    ExchangePref = mongoose.model('ExchangePref');

module.exports = (function() {
  return {
    create: function(req, res) {
      User.findOne({_id: req.session.user._id}, function(err, user) {
        var exchange = new Exchange(req.body);
        exchange.creator = user._id;
        console.log(exchange);
        user.exchangesCreated.push(exchange);
        exchange.save(function(err) {
          if (err) {console.log(err)}
          user.save(function(err) {
            if (err) {
              console.log(err);
            } else {
              res.json(exchange)
            }
          })
        })
      })
    },
    index: function(req, res) {
      Exchange.find({}, function(err, exchanges) {
        if (err) {
          console.log(err)
        } else {
          res.json(exchanges);
        }
      })
    },
    getExchange: function(req, res) {
      Exchange.findOne({_id: req.params.exchangeId}, function(err, exchange) {
        if (err) {console.log(err)}
        res.json(exchange);
      })
    },
    joinExchange: function(req, res) {
      Exchange.findOne({_id: req.params.exchangeId}, function(err, exchange) {
        
      })
    }
  }
})()
