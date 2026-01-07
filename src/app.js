const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());


const userRoutes = require('./routes/UserRoutes');
const authRoutes = require('./routes/AuthRoutes');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


module.exports = app;
