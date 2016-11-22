var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exchangeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  end_of_sign_up_date: {
    type: Date,
    required: true
  },
  date_of_exchange: {
    type: Date,
    required: true
  },
  min_price: {
    type: Number,
  },
  max_price: {
    type: Number,
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  settings: {
    type: Object,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  exchangePrefs: [{
    type: Schema.Types.ObjectId,
    ref: 'ExchangePref'
  }]
}, {
  timestamps: true
})

mongoose.model('Exchange', exchangeSchema);
