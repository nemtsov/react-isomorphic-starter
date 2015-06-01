var express = require('express'),
  React = require('react'),
  app = require('../components/App/App.jsx'),
  Router = require('react-router'),
  routes = app.routes,
  router = module.exports = express.Router();

router.get('*', function (req, res, next) {
  var props = {
    user: {name: 'jane'}
  };
  Router.run(routes, req.originalUrl, function (Handler) {
    res.send('<!DOCTYPE html>' + React.renderToString(
      React.createFactory(Handler)(props)));
  });
});
