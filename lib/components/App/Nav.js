import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              Isomorphic Starter
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
