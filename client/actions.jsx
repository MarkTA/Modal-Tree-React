var AppDispatcher = require('./dispatcher');
var http = require('./http');

module.exports = {
  addNode: function (node) {
    AppDispatcher.dispatch({
      action: 'ADD_NODE',
      node: node
    });
  },
    postNode: function (node) {
      http.send({
        method: 'POST',
        url: '/api/parts',
        data: {node}
      })
      .then(function (res) {
      AppDispatcher.dispatch({
        action: 'POST_NODE',
        node: node
      });
    })
  },
  testCall: function () {
    http.send({
      method: 'POST',
      url: '/api/demo',
      data: {
        sum: 4 + 4
      }
    })
    .then(function (res) {
      AppDispatcher.dispatch({
        action: 'DEMO_CALL',
        data: res
      });
    })
  }
}
