var mongoose = require('mongoose'),
    ExchangePref = mongoose.model('ExchangePref'),
    User = mongoose.model('User'),
    Exchange = mongoose.model('Exchange');

module.exports = (function() {
  return {
    create: function(req, res) {
      var exchangepref = new ExchangePref(req.body);
    }
  }
})()
