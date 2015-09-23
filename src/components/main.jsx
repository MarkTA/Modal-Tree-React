var React = require('react');
var Tier1 = require('./tier1');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="wrapflt wrapfltMain">
        <Tier1
          title={this.props.title}
          number={this.props.number}
          tier={this.props.tier}
          collapse={this.props.collapse}
          childData={this.props.childData}/>
      </div>
    );
  }
});
