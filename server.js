require('node-jsx').install({extension: '.jsx', harmony: true});

var express = require('express'),
  compression = require('compression'),
  disableHttpCache = require('connect-cache-control'),
  morgan = require('morgan'),
  serveStatic = require('serve-static'),
  errors = require('common-errors'),
  PORT = process.env.PORT || 8000,
  IS_PROD = 'production' === process.env.NODE_ENV,
  app = module.exports = express();

// utility middleware
app.use(disableHttpCache);
app.use(morgan(IS_PROD ? 'combined' : 'dev'));
app.use(compression());
app.use('/favicon.ico', require('./lib/resources/favicon'));
app.use('/_health', require('./lib/resources/_health'));

// app resources
app.use('/assets', serveStatic(__dirname + '/dist'));
app.use('/', require('./lib/resources/pages'));
app.use(errors.middleware.errorHandler);

if (!module.parent) {
  app.listen(PORT, function () {
    console.log('on :%s', PORT);
  });
}
