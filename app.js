var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var pool = require('./db.js');
var initialLoginRouter = require('./routes/initialLogin');
var rsvp = require('./routes/rsvp');
var home = require('./routes/home');
var cors = require("cors")
const port = 8080;
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/login', initialLoginRouter);
app.use('/rsvp', rsvp);
app.use('/', home);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



app.listen(process.env.PORT || this.port, () => console.log(`example app listening at ${port}`))


module.exports = app;
