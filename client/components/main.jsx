var React = require('react');
var TierGroup = require('./TierGroup');
var NodeStore = require('../store');
var Header = require('./header')
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
    var filtered = _.filter(nodes, 'parent_key', 0);
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
    <div>
      <Header/>
      <br/>
      <div className="wrapflt wrapfltMain">
        <div className="nodes">
          {this.getTopLevelNodes()}
          {this.props.children}
        </div>
      </div>
    </div>

    );
  }
});
