var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

  render: function() {
    return (<div className="button-container">

      <ul>
        <li>
          <Link to="/">
            file
          </Link>
        </li>
        <li>
          <Link to="/">
            templates
          </Link>
        </li>
        <li>
          <Link to="/Branch">
            new branch
          </Link>
        </li>
        <li>
          <Link to="/Employees">
            employees
          </Link>
        </li>
        <li>
          <Link to="/Materials">
            materials
          </Link>
        </li>
      </ul>
    </div>
    );
  }

});
