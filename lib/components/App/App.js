/* global window, document */

import React from 'react';
//import Head from './Head';
//import Content from './Content';

//import routes from './routes';

class App extends React.Component {
  render() {
    return (
      <html lang="en">
        <body>
          {this.renderProps()}
          <script src="/assets/App.js" type="text/javascript"></script>
        </body>
      </html>
    );
  }

  renderProps() {
    return (
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: 'window.DEHYDRATED_PROPS = ' +
          JSON.stringify(this.props) + ';'
      }}></script>
    );
  }
}

export default App;
