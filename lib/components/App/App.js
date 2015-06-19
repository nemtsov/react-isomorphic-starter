import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import {createRedux} from 'redux';
import {Connector, Provider} from 'redux/react';
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
    const redux = this.props.redux;
    return (
      <Provider redux={redux}>
      {() => (
        <html lang="en">
          <Head />
          <body>
            <Connector>
              {(state) => <Content counter={state.counter} />}
            </Connector>

            {this.renderProps()}
            <script src="/assets/App.js"></script>
          </body>
        </html>
      )}
      </Provider>
    );
  }

  renderProps() {
    const redux = this.props.redux;
    return (
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: 'window.DEHYDRATED_STATE = ' +
          JSON.stringify(redux.getState()) + ';'
      }}></script>
    );
  }
}

if (typeof window === 'object' && window.DEHYDRATED_STATE) {
  const redux = createRedux(stores, window.DEHYDRATED_STATE);

  Router.run(App.routes, Router.HistoryLocation, Handler => {
    React.render(<Handler redux={redux} />, document);
  });
}

export default App;
