var _ = require('lodash');
var AppDispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;

var parts = [
  {
    id: 1,
    name: 'A',
    parent_id: '',
    tier: 1
  },
  {
    id: 3,
    name: 'A-A',
    parent_id: 1,
    tier: 2
  },
  {
    id: 4,
    name: 'A-B',
    parent_id: 1,
    tier: 2
  },
  {
    id: 5,
    name: 'A-C',
    parent_id: 1,
    tier: 2
  }
];

var NodeStore = _.assign({}, EventEmitter.prototype, {

  getAll: function () {
    return parts;
  },

  emitChange: function () {
    this.emit('change');
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action) {
      case 'ADD_NODE':
        parts.push(payload.node);
        console.log('added node', payload.node);
        NodeStore.emitChange();
        break;
    }

    return true;
  })

});

module.exports = NodeStore;
