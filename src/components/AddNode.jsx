var React = require('react');
var PropTypes = React.PropTypes;
var Actions = require('../actions');

var AddNode = React.createClass({

  addNode: function () {
    var node = {
      id: this.props.nodes.length + 1,
      name: React.findDOMNode(this.refs.name).value,
      parent_id: parseInt(React.findDOMNode(this.refs.parent_id).value)
    };
    Actions.addNode(node);
  },

  getSelectOptions: function () {
    return this.props.nodes.map(function (node) {
      return (
        <option value={node.id}>{node.name}</option>
      );
    });
  },

  render: function() {
    return (
      <div>
        <input type='text' ref='name' />
        <select ref='parent_id'>
          {this.getSelectOptions()}
        </select>
        <button onClick={this.addNode}>Add Node</button>
      </div>
    );
  }

});

module.exports = AddNode;
