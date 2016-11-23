var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exchangePrefSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  exchange: {
    type: Schema.Types.ObjectId,
    ref: 'Exchange'
  },
  gift_is_for: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  gift_received: {
    type: Boolean,
    default: false
  },
  customQuestions: {
    type: Object
  }
})
mongoose.model('ExchangePref', exchangePrefSchema);
