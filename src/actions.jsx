var AppDispatcher = require('./dispatcher');
var http = require('./http');

module.exports = {
  addNode: function (node) {
    AppDispatcher.dispatch({
      action: 'ADD_NODE',
      node: node
    });
  },
  testCall: function () {
    http.send({
      method: 'POST',
      url: '/demo',
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
