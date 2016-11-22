var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exchangeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  exchangePrefs: [{
    type: Schema.Types.ObjectId,
    ref: 'ExchangePref'
  }]
}, {
  timestamps: true
})

mongoose.model('Exchange', exchangeSchema);
