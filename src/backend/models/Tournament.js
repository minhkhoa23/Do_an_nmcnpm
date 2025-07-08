const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logoUrl: {
    type: String
  }
}, { _id: false });

const tournamentSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  format: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  organizerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  }],
  avatarUrl: {
    type: String,
    trim: true
  },
  sponsors: [sponsorSchema],
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed'],
    default: 'upcoming'
  }
}, {
  timestamps: true // tự động tạo createdAt và updatedAt
});

module.exports = mongoose.model('Tournament', tournamentSchema);
