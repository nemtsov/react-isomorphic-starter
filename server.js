require('babel/register');

var app = require('./lib/app'),
  PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log('on http://localhost:%s', PORT);
});
