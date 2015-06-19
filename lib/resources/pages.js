import {Router} from 'express';
import React from 'react';
import ReactRouter from 'react-router';
import {createRedux} from 'redux';
import {Provider} from 'redux/react';
import * as stores from '../flux/stores';
import {routes} from '../components/App/App';

const router = new Router();

router.get('*', function (req, res) {
  ReactRouter.run(routes, req.originalUrl, Handler => {
    const redux = createRedux(stores);

    res.send('<!DOCTYPE html>' + React.renderToString(
      <Provider redux={redux}>
        {() => <Handler state={redux.getState()} /> }
      </Provider>
    ));
  });
});

export default router;
