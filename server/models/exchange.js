var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exchangeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  participants : [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
})

mongoose.model('Exchange', exchangeSchema);
