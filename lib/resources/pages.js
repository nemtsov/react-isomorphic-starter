import {Router} from 'express';
import React from 'react';
import ReactRouter from 'react-router';
import {createRedux} from 'redux';
//import {Provider} from 'redux/react';
import * as stores from '../flux/stores';
import routes from '../components/App/routes';

const router = new Router();

router.get('*', function (req, res) {
  ReactRouter.run(routes, req.originalUrl, function (Handler) {
    const redux = createRedux(stores);
    res.send('<!DOCTYPE html>' + React.renderToString(
      <Handler redux={redux} />
    ));
  });
});

export default router;
