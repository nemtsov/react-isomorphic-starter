import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import {createRedux} from 'redux';
import {Provider} from 'redux/react';
import * as stores from '../../flux/stores';
import Section from '../Section/Section';
import Home from '../Home/Home';
import Content from './Content';
import Head from './Head';

class App extends React.Component {
  static get routes() {
    return (
      <Route name="home" handler={App} path="/">
        <Route name="section" handler={Section} path="/section/:sectionId" />
        <DefaultRoute handler={Home} />
      </Route>
    );
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Content />
          {this.renderProps()}
          <script src="/assets/App.js"></script>
        </body>
      </html>
    );
  }

  renderProps() {
    return (
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: 'window.DEHYDRATED_STATE = ' +
          JSON.stringify(this.props.state) + ';'
      }}></script>
    );
  }
}

if (typeof window === 'object' && window.DEHYDRATED_STATE) {
  const state = window.DEHYDRATED_STATE;
  const redux = createRedux(stores, state);

  Router.run(App.routes, Router.HistoryLocation, Handler => {
    React.render(
      <Provider redux={redux}>
        {() => <Handler state={state} /> }
      </Provider>,
      document);
  });
}

export default App;
