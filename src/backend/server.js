const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const organizerRoutes = require('./routes/organizerRoutes');
const adminRoutes = require('./routes/adminRoutes');
const fileUtils = require('./utils/fileUtils');

const app = express();
const port = config.port;

// Phục vụ static cho toàn bộ frontend (bao gồm login.html và js)
app.use(express.static(path.join(__dirname, '../frontend')));

// Phục vụ file gốc index.html nếu cần
app.use(express.static(path.join(__dirname, '../../')));

app.use(bodyParser.json());

// Load data từ file JSON
const dataDir = './data/';
const { readData, writeData } = fileUtils;
let users = readData(path.join(__dirname, dataDir, 'users.json'));
let tournaments = readData(path.join(__dirname, dataDir, 'tournaments.json'));
let teams = readData(path.join(__dirname, dataDir, 'teams.json'));

// API routing
app.use('/api', userRoutes);
app.use('/api', organizerRoutes);
app.use('/api', adminRoutes);

// Khởi động server
app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
);
