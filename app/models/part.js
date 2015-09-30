var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PartSchema   = new Schema({
    name: String,
    key: Number,
    parent_key: Number,
    tally: Number,
    tier: Number,
    time: Array,
    list: Array,
    materials: Array

});

module.exports = mongoose.model('Part', PartSchema);
