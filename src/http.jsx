var Portals = require('portals');

var http = new Portals.Portal;

// http.globals.hostname = 'http://localhost:8080'
http.useDefaultInterceptors();

module.exports = http;
