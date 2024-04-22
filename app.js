const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routs/tourRouts');
const userRouter = require('./routs/userRouts');

const app = express();

// 1) middleware
app.use(morgan('dev'));
app.use(express.json());
// Serving Static Files
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) routs
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
