const mongoose = require('mongoose');

const beforeAfterSchema = new mongoose.Schema({
  beforeImage: {
    type: String,
    required: true,
  },
  AfterImage: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  
});

const beforeAfter = mongoose.models.BeforeAfterGallery||mongoose.model('BeforeAfterGallery', beforeAfterSchema);

module.exports = beforeAfter;
