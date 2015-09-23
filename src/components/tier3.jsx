var React = require('react');
var Tier3List = require('./tier3-list');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      collapse: "minus",
      hide: "",
      hideBtn: "hideThis"
    };
  },
  render: function(){
    return (<div>
    <div
      className={"block tier-"+this.props.tier}
      id={"block"+this.props.title}
      onMouseOver={this.handleHover}
      onMouseOut={this.handleHoverOut}>
      <h2>
        <span
          className="spanNumber badge">
          {this.props.number}
        </span>
        {this.props.title}
      </h2>
      <span
        className={"badge badge-collapse "+this.state.hideBtn}
           onClick={this.handleCollapse}>
        <span
          className={"glyphicon glyphicon-"+this.state.collapse}></span>
      </span>
    </div>
    <div
      id={"wrap"+this.props.title}
      className={"wrap "+this.state.hide}>
      <Tier3List
      childData={this.props.childData}/>
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
}
});
