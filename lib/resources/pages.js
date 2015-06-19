import {Router} from 'express';
import React from 'react';
import ReactRouter from 'react-router';
import {createRedux} from 'redux';
import * as stores from '../flux/stores';
import {routes} from '../components/App/App';

const router = new Router();

router.get('*', function (req, res) {
  ReactRouter.run(routes, req.originalUrl, (Handler, state) => {
    const redux = createRedux(stores);
    runActions(redux, state).then(() => {
      res.send('<!DOCTYPE html>' + React.renderToString(
        <Handler redux={redux} />
      ));
    });
  });
});

function runActions(redux, state) {
  return Promise.all(state.routes
    .filter(route => route.handler.initActions)
    .map((route) => {
      var promise = redux.dispatch(route.handler.initActions(state.params));
      return promise || true;
    })
  );
}

export default router;
