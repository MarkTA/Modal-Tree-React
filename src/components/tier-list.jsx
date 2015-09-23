var React = require('react');
var Tier2 = require('./tier2');

module.exports = React.createClass({

  render: function() {
    var list = this.props.childData.map(function(childProps){
        if(childProps){
      return <Tier2 {...childProps} />
      }
    });

    return (
    <div>{list}<h1>changing</h1></div>);
  }
});
