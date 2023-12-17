const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  status: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Category = mongoose.models.Category||mongoose.model('Category', categorySchema);

module.exports = Category;
