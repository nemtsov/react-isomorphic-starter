/** @jsx React.DOM */

var React = require('react');

class Section extends React.Component {
  render() {
    var {sectionId} = this.context.router.getCurrentParams();

    return (
      <div className="Section">
        <h1>Something Amazing in Section: {sectionId}</h1>

        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna.
            Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida.
            Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est
            malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium
            ornare est.
          </p>
        </blockquote>

        <ul>
           <li>Dolor sit amet, consectetuer adipiscing elit.</li>
           <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
      </div>
    );
  }
}

Section.contextTypes = {
  router: React.PropTypes.func
};

module.exports = Section;
