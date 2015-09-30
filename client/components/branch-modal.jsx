var React = require('react');
var AddNode = require('./AddNodeDropdown');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

    getInitialState: function() {
      return {
      };
    },
  render: function() {

    return (
      <div className='transparent overlay'>
        <div className="branch">
          <Link to="/">
            <span id="BranchClose"
              className="glyphicon glyphicon-remove"/>
          </Link>
          <h2>NEW BRANCH</h2>
          {console.log(this.props.params)}
          <AddNode title={this.props.params.title || "A"}/>
       	</div>
      </div>);
}


});
