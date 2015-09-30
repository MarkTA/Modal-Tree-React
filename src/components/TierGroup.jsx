var React = require('react');
var Branch = require('./branch-modal');
var _ = require('lodash');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');

var TierGroup = React.createClass({
  getInitialState: function() {
    return {
      collapse: "minus",
      hide: "",
      hideBtn: "hide",
      hideBtnGrp: "show",
      hideBtnPlus: "",
      visible: "hide",
      tally: "3"
    };
  },
  getChildNodes: function () {
    var nodes = this.props.nodes;
    var filtered = _.filter(nodes, 'parent_key', this.props.node.key);
    return _.map(filtered, function (node) {
        return (
          <TierGroup
            key={node.key}
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
        id={"block"+this.props.node.key}
        key={"block"+this.props.node.key}
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHoverOut}>
        <div onClick={this.handleBtnGroup}>
          <div className={"badge-btn-hold "+this.state.hideBtn}>
            <Link to={"/Branch/"+this.props.node.name+"-"+this.props.node.key}>
              <span className="badge badge-top ">
                <span className="glyphicon glyphicon-leaf"/>
              </span>
            </Link>
            <Link to={"/Edit/"+this.props.node.name}>
              <span className="badge badge-top ">
                <span className="glyphicon glyphicon-eye-open"/>
              </span>
            </Link>
            <span className="badge badge-top ">
              <span className="glyphicon glyphicon-zoom-in" onClick={this.fireDemo}/>
            </span>
          </div>
          <h2>
            <span
              className="spanNumber badge">
              {this.state.tally}
            </span>
            {this.props.node.name}
          </h2>

        </div>
        <br/>
        <span
          className={"badge badge-collapse "+this.state.hideBtn+' '+this.state.hideBtnPlus}
             onClick={this.handleCollapse}>
          <span
            className={"glyphicon glyphicon-"+this.state.collapse}/>
        </span>
      </div><div
        id={"wrap"+this.props.node.key}
        className={"wrap "+this.state.hide}>
        {this.getChildNodes()}
      </div>
    </div>);
  },
  handleBtnGroup: function(){
      this.setState({
        hideBtnGrp: ""
      });
  },
  fireDemo: function () {
    Actions.testCall();
  },
  handleCollapse: function(){
    if(this.state.collapse=="plus"){
      this.setState({
        collapse:"minus",
        hide:"",
        hideBtnPlus: ""
      });
    }else{
      this.setState({
        collapse:"plus",
        hide: "hide",
        hideBtnPlus: "show"
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
      hideBtn: "hide"
    });
  },
  handleGrpHoverOut: function(){
    this.setState({
      hideBtnGrp: "hide"
    });
  },
  BranchModal: function(){
    this.setState({
      visible: ""
    });
    console.log('ok');
  }

  });

module.exports = TierGroup;
