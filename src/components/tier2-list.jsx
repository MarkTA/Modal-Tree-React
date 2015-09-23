var React = require('react');
var Tier3 = require('./tier3');

module.exports = React.createClass({

  render: function() {
    if(this.props.childData){
      var list = this.props.childData.map(function(childProps){
        return <Tier3 {...childProps} />
      });
      return (
      <div>
        {list}
      </div>);
    }else{
      return <div/>
    }
  }
});
