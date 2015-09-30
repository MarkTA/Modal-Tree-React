var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Branch = require('./components/branch-modal');
var Edit = require('./components/block-form');
var Employees = require('./components/employee-modal');
var Materials = require('./components/materials-modal');

module.exports = (
    <Router history={new HashHistory}>
      <Route path="/" component={Main}>
        <Route path="Branch" component={Branch}/>
        <Route path="Branch/:title" component={Branch}/>
        <Route path="Edit/:title" component={Edit}/>
        <Route path="Employees" component={Employees}/>
        <Route path="Materials" component={Materials}/>
      </Route>
    </Router>
)
