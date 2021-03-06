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
  // Check to see if users have been assigned a secret person yet
  assigned: {
    type: Boolean,
    default: false,
  },
  customQuestions: {
    type: Object,
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
