var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (<div className="button-container">

      <ul>
        <li>
          <a>
            file
          </a>
        </li>
        <li>
          <a>
            templates
          </a>
        </li>
        <li>
          <a>
            new branch
          </a>
        </li>
        <li>
          <a>
            employees
          </a>
        </li>
        <li>
          <a>
            materials
          </a>
        </li>
      </ul>
    </div>
    );
  }

});
