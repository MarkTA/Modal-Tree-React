var React = require('react');
var PropTypes = React.PropTypes;
var _ = require('lodash');

var TierGroup = React.createClass({
  getInitialState: function() {
    return {
      collapse: "minus",
      hide: "",
      hideBtn: "hideThis"
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
      lines();
  },

  render: function() {

    return (
    <div>
      <div
        className={"block tier-"+this.props.node.tier}
        id={"block"+this.props.node.id}
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHoverOut}>
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
        hide:""
      });
    }else{
      this.setState({
        collapse:"plus",
        hide: "hideThis"
      });
    }
  },
  handleHover: function(){
    this.setState({
      hideBtn: ""
    });
  },
  handleHoverOut: function(){
    this.setState({
      hideBtn: "hideThis"
    });
  },

  lines: function(){
    console.log('called');
  	var blocks=document.getElementsByClassName('block');
  	var canvas = document.getElementById("canvas");
    var w = window.innerWidth;
    var f = document.getElementById("full");
    var h =  f.height+50;
  	canvas.width = 120;
  	canvas.height = 60;
  	canvas.width = 1200;
  	canvas.height = 600;
    console.log(blocks.length);
  	for (i=1;i<blocks.length;i++){
  		var blockDiv = blocks[i];
  		var offset = blockDiv.getBoundingClientRect();
      console.log(offset);
  		var xa = offset.left+((offset.right-offset.left)/2)+window.pageXOffset;
  		var ya = offset.top+((offset.bottom-offset.top)/2)+window.pageYOffset;
  		var blockFrom = blockDiv.parentNode.parentNode.previousSibling;
  		var offsets = blockFrom.getBoundingClientRect();
      console.log(offsets);
  		var xb = offsets.left+((offsets.right-offsets.left)/2)+window.pageXOffset;
  		var yb = offsets.top+((offsets.bottom-offsets.top)/2)+window.pageYOffset;
  		var ctx = canvas.getContext("2d");
  		ctx.lineWidth = 2;
  		ctx.moveTo(xa,ya);
      console.log(xa+', '+ya);
  		ctx.lineTo(xb,yb);
      console.log(xb+', '+yb);
  		ctx.stroke();
      console.log('please draw!');
    }
  }
  });

module.exports = TierGroup;
