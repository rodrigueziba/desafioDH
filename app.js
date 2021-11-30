var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

  //rutas api
//const albumesApiRouter = require('./routes/albumesRouter');
const cancionesApiRouter = require('./routes/cancionesRouter');
//const generosApiRouter = require('./routes/generosRouter');
//const artistasApiRouter = require('./routes/artistasRouter');
app.use('/canciones',cancionesApiRouter);
//app.use('/generos',generosApiRouter);

//app.use(artistasApiRouter);
//app.use(albumesApiRouter);
//var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

module.exports = app;
