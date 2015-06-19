import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ps: ''
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ps: '(it’s amazing)'
      });
    }, 1000);
  }

  render() {
    return (
      <div className="Home">
        <h1>
          Welcome to the Isomorphic
          Starter <span style={{color: 'red'}}>{this.state.ps}</span>
        </h1>

        <Link className="section" to="section" params={{sectionId: '1'}}>
          <p className="summary">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </Link>
      </div>
    );
  }
}

export default Home;
