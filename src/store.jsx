var _ = require('lodash');
var AppDispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;

var parts = [
  {
    key: 1,
    name: 'A',
    parent_key: 0,
    tier: 1,
    tally: 1,
    time: [],
    list: [],
    materials: []
  },
  {
    key: 2,
    name: 'AA',
    parent_key: 1,
    tier: 11,
    tally: 1,
    time: [],
    list: [],
    materials: []
  },
  {
    key: 3,
    name: 'AB',
    parent_key: 1,
    tier: 11,
    tally: 1,
    time: [],
    list: [],
    materials: []
  },
  {
    key: 4,
    name: 'AC',
    parent_key: 1,
    tier: 11,
    tally: 1,
    time: [],
    list: [],
    materials: []
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
      case 'DEMO_CALL':
        console.log(payload.data);
        break;
    }

    return true;
  })

});

module.exports = NodeStore;
