import React from 'react';
import {RouteHandler} from 'react-router';
import Nav from './Nav';

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
