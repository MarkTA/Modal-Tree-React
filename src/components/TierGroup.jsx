var React = require('react');
var PropTypes = React.PropTypes;
var _ = require('lodash');

var TierGroup = React.createClass({
  getInitialState: function() {
    return {
      collapse: "minus",
      hide: "",
      hideBtn: "hide"
    };
  },
  getChildNodes: function () {
    var nodes = this.props.nodes;
    var filtered = _.filter(nodes, 'parent_id', this.props.node.id);
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
      <br/>
      <div
        className={"block tier-"+this.props.node.tier}
        id={"block"+this.props.node.id}
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHoverOut}>
        <div className="badge-btn-hold hide">
          <span className="badge badge-top ">
            <span className="glyphicon glyphicon-leaf"></span>
          </span>
          <span className="badge badge-top ">
            <span className="glyphicon glyphicon-eye-open"></span>
          </span>
          <span className="badge badge-top ">
            <span className="glyphicon glyphicon-zoom-in"></span>
          </span>
        </div>
        <h2>
          <span
            className="spanNumber badge">
            {this.props.node.id}
          </span>
          {this.props.node.name}
        </h2>
        <span
          className={"badge badge-collapse "+this.state.hideBtn}
             onClick={this.handleCollapse}>
          <span
            className={"glyphicon glyphicon-"+this.state.collapse}></span>
        </span>
      </div><div
        id={"wrap"+this.props.node.id}
        className={"wrap "+this.state.hide}>
        {this.getChildNodes()}
      </div>
    </div>);
  },
  handleCollapse: function(){
    if(this.state.collapse=="plus"){
      this.setState({
        collapse:"minus",
        hide:"",
        hideBtn: "hide"
      });
    }else{
      this.setState({
        collapse:"plus",
        hide: "hide",
        hideBtn: ""
      });
    }
  },
  handleHover: function(){
    this.setState({
      hideBtn: ""
    });
  },
  handleHoverOut: function(){
    if(this.state.collapse=="plus"){
      this.setState({
        hideBtn: ""
      });
    }else{
      this.setState({
        hideBtn: "hide"
      });
    }
  },

  });

module.exports = TierGroup;
