import React from 'react';

class Head extends React.Component {
  render() {
    return (
      <head>
        <title>{this.props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css"
          href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/App.css" />
      </head>
    );
  }
}

export default Head;
