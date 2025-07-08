const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString()
  },
  tournamentId: {
    type: String,
    ref: 'Tournament',
    required: true
  },
  teamAId: {
    type: String,
    ref: 'Team',
    required: true
  },
  teamBId: {
    type: String,
    ref: 'Team',
    required: true
  },
  scheduledAt: {
    type: Date,
    required: true
  },
  result: {
    type: String,
    enum: ['win', 'lose', 'draw', null],
    default: null
  },
  score: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: false
});

module.exports = mongoose.model('Match', matchSchema);