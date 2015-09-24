var AppDispatcher = require('./dispatcher');

module.exports = {
  addNode: function (node) {
    console.log('attempting to add node');
    AppDispatcher.dispatch({
      action: 'ADD_NODE',
      node: node
    });
  }
}
