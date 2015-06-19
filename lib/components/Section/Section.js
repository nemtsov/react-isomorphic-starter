import React from 'react';
import * as actions from '../../flux/actions/CounterActions';

class Section extends React.Component {
  static get contextTypes() {
    return {router: React.PropTypes.func};
  }

  static initActions(params) {
    return false;
  }

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

export default Section;
