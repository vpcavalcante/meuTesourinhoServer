var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/login');
var dashboardRouter = require('./routes/dashboard');
var faqRouter = require('./routes/faq');
var headRouter = require('./routes/head')
var headerRouter = require('./routes/header')
var footerRouter = require('./routes/footer')
var loginRouter = require('./routes/login')
var quemSomosRouter = require('./routes/quemSomos')
var errorRouter = require('./routes/error')
var cadastroRouter = require('./routes/cadastro')
var beneficiosRouter = require('./routes/beneficios')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/head', headRouter);
app.use('/header', headerRouter);
app.use('/footer', footerRouter);
app.use('/users', usersRouter);
app.use('/dashboard', dashboardRouter);
app.use('/faq', faqRouter);
app.use('/index', indexRouter);
app.use('/cadastro', cadastroRouter);
app.use('/error', errorRouter);
app.use('/login', loginRouter);
app.use('/quemSomos', quemSomosRouter);
app.use('/beneficios', beneficiosRouter);


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
