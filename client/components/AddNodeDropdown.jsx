var React = require('react');
var PropTypes = React.PropTypes;
var Actions = require('../actions');
var _ = require('lodash');
var NodeStore = require('../store');

var AddNode = React.createClass({
  getInitialState: function () {
    return {
      nodes: NodeStore.getAll(),
      parentKey:  this.props.title.split("-")[1],
      show: '',
      title: this.props.title.split("-")[0]
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

  addNode: function () {
    console.log(this.state.parentKey);
    if(React.findDOMNode(this.refs.name).value==''){
      alert("Enter a title.");
    }else if(!this.state.parentKey){
      alert("Enter a node to branch from.");
    }else{
      var node = {
        key: this.state.nodes.length + 1,
        name: React.findDOMNode(this.refs.name).value,
        parent_key: parseInt(this.state.parentKey),
        tier: this.findTier(),
        tally:1,
        time: [],
        list: [],
        materials: []
      };
      Actions.addNode(node);
      Actions.postNode(node);
      React.findDOMNode(this.refs.name).value=''
    }
  },

  getSelectOptions: function () {
    return this.state.nodes.map(function (node) {
      return (
        <li
          title={node.name}
          onClick={this.handleTitle}
          className={this.state.title === node.name ? 'active' : ''}>
          <a id={node.key}>
            {node.name}
          </a>
        </li>
      );
    }.bind(this));
  },

  findTier: function(){
    var ParentKey =  parseInt(this.state.parentKey);
    var tierArray= this.state.nodes.map(function (node) {
      if(ParentKey==node.key){
        return node.tier+'1'
      }else{return null}
    });
    var Tier = tierArray.filter(function(tier) { return tier != null });
    if(Tier[0].length>5){
      return "111111"
    }else{
      return Tier
    }
  },

  render: function() {
    return (
      <div>
        Title: <input type='text' ref='name' />
        <br/>
          <div className="dropdown">
            <span>From: </span>
            <button className="btn btn-default dropdown-toggle dropBranch"
              onClick={this.toggleList}>
              {this.state.title}
              <span className="caret right"/>
            </button>
            <ul className={"dropdown-menu bumpRight "+this.state.show} ref='parent_id'>
              {this.getSelectOptions()}
            </ul>
          </div>
          <br/>
        <button onClick={this.addNode}>Add Node</button>
      </div>
    );
  },
  handleTitle: function(){
      this.setState({
        title: event.target.text,
        parentKey: event.target.id,
        show: ''
      });
  },
  toggleList: function(){
    if(this.state.show==''){
      this.setState({
        show: 'show'
      });
    }else{
      this.setState({
        show: ''
      });
    }
  }

});

module.exports = AddNode;
