var mongoose = require('mongoose');
var Exchange = mongoose.model('Exchange');
var User = mongoose.model('User');

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
    }
  }
})()
