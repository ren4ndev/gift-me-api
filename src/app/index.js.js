const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: 'Too many requests',
});
app.use(limiter);

app.use('/users', require('./routes/users'));

app.use((req, res) => res.sendStatus(404));

module.exports = app;
