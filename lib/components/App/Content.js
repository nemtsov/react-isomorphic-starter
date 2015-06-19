import React from 'react';
import {RouteHandler} from 'react-router';

class Content extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    );
  }
}

export default Content;
