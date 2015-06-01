/** @jsx React.DOM */
/* global window, document */

var React = require('react'),
  Router = require('react-router'),
  {Route, RouteHandler, DefaultRoute, Link} = Router,
  Section = require('../Section/Section.jsx'),
  Home = require('../Home/Home.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <html lang="en">
        <head>
          <title>{this.state.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" type="text/css"
            href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/assets/App.css" />
        </head>

        <body>
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                  Isomorphic Starter
                </Link>
              </div>
            </div>
          </nav>

          <div className="container">
            <RouteHandler {...this.props} />
          </div>

          <script src="/assets/App.js" type="text/javascript"></script>
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: 'window.renderApp(' + JSON.stringify(this.props) + ');'
          }}>
          </script>
        </body>
      </html>
    );
  }
}

App.routes = (
  <Route name="home" handler={App} path="/">
    <Route name="section" handler={Section} path="/section/:sectionId" />
    <DefaultRoute handler={Home} />
  </Route>
);

if ('object' === typeof window) {
  window.renderApp = (props) => {
    Router.run(App.routes, Router.HistoryLocation, (Handler) => {
      React.render(<Handler {...props} />, document);
    });
  };
}

module.exports = App;
