const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    trim: true
  }
}, { _id: false });

const competitorSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  logoUrl: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  members: {
    type: [memberSchema],
    required: true,
    validate: {
      validator: function (v) {
        return Array.isArray(v) && v.length > 0;
      },
      message: 'Competitor must have at least one member'
    }
  },
  tier: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: false
});

module.exports = mongoose.model('Competitor', competitorSchema);
