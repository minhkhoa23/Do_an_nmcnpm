const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
const config = require('./config/config');
const matchRoutes = require('./routes/matchRoutes');
const tournamentRoutes = require('./routes/tournamentRoutes');
const matchSocket = require('./utils/matchSocket');
const seedDatabase = require('./utils/seedDatabase');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: config.socketCors
});

app.use(express.json());

// Middleware
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Add Socket.IO to request object
app.set('io', io);

// Routes
app.use('/api/tournaments', tournamentRoutes);
app.use('/api/matches', matchRoutes);

// MongoDB Connection and Seeding
mongoose.set('strictQuery', true);

// Chỉ kết nối nếu không phải môi trường test
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGO_URI || config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(async () => {
      console.log('Connected to MongoDB');
      if (process.env.SEED_DB === 'true') {
        await seedDatabase();
      }
    })
    .catch(err => console.error('MongoDB connection error:', err));
}

// Initialize Socket.IO
matchSocket(io);

// Start Server only if not in test environment
if (process.env.NODE_ENV !== 'test') {
  mongoose.set('strictQuery', true);
  mongoose.connect(process.env.MONGO_URI || config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(async () => {
      console.log('Connected to MongoDB');
      if (process.env.SEED_DB === 'true') {
        await seedDatabase();
      }
    })
    .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = { app, server };