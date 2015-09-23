var React = require('react');
var Tier4 = require('./tier4');

module.exports = React.createClass({

  render: function() {
    if(this.props.childData){
      var list = this.props.childData.map(function(childProps){
        return <Tier4 {...childProps} />
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
