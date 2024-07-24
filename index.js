const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const movieRouter = require('./routes/route');

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);

const database = mongoose.connection;

const app = express();

app.use(express.json());

app.use('/movie', movieRouter);

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
