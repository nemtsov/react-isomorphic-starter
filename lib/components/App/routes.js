import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import Section from '../Section/Section';
import Home from '../Home/Home';
import Content from './Content';
//import {createRedux} from 'redux';
//import {Provider} from 'redux/react';

const routes = (
  <Route name="home" handler={Content} path="/">
    <Route name="section" handler={Section} path="/section/:sectionId" />
    <DefaultRoute handler={Home} />
  </Route>
);

/*if (typeof window === 'object' && window.DEHYDRATED_STATE) {*/
  //const redux = createRedux(window.DEHYDRATED_STATE);
  //Router.run(routes, Router.HistoryLocation, Handler => {
    //React.render(
      //<Provider redux={redux}>
        //{() => <Handler /> }
      //</Provider>,
      //document);
  //});
/*}*/

export default routes;
