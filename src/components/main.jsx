var React = require('react');
var TierGroup = require('./TierGroup');
var AddNode = require('./AddNode');
var NodeStore = require('../store');
var _ = require('lodash');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      nodes: NodeStore.getAll()
    }
  },
  updateState: function () {
    console.log('state updated');
    this.setState({
      nodes: NodeStore.getAll()
    });
  },
  componentWillMount: function () {
    NodeStore.addChangeListener(this.updateState);
  },
  componentWillUnmount: function () {
    NodeStore.removeChangeListener(this.updateState);
  },
  getTopLevelNodes: function () {
    var nodes = this.state.nodes;
    var filtered = _.filter(nodes, 'parent_id', '');
    return _.map(filtered, function (node) {
        return (
          <TierGroup
            key={node.id}
            node={node}
            nodes={nodes} />
        );
      });
  },
  render: function() {
    return (
      <div className="wrapflt wrapfltMain">
        <div className="nodes">
          {this.getTopLevelNodes()}
        </div>
        <AddNode nodes={this.state.nodes} />
      </div>

    );
  }
});
        // <Tier1
        //   title={this.props.title}
        //   number={this.props.number}
        //   tier={this.props.tier}
        //   collapse={this.props.collapse}
        //   childData={this.props.childData}/>
