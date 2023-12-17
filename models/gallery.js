const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  thumbnailimg: {
    type: String,
    required: true,
  },
  image: String,
  video: String,
  status: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Gallery = mongoose.models.Gallery||mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
