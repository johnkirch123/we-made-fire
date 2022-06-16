const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  visits: {
    type: Number,
    required: true,
    default: 1
  }
});

module.exports = User = mongoose.model('user', userSchema);
