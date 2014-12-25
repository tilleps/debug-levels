var debug = require('debug');

var logLevel = process.env.DEBUG_LEVEL || 'verbose';
var logLevels = [
  'log',
  'error',
  'warn',
  'debug',
  'info',
  'verbose'
];


//
//  Empty function
//
function emptyFunction() {
  return function () {};
}


//
//  Check supported levels
//
var key = logLevels.indexOf(logLevel);

if (key == -1) {
  //  not in allowed levels
  var msg = 'Log level found in allowed levels';
  throw new Error(msg);
}


//
//  Create a list of allowed levels
//
var allowedLevels = logLevels.slice(0, key + 1);


/**
 * Create Debug-level supported debug
 * 
 * @param {String} namespace
 * @return {Object}
 */
module.exports = function (namespace) {
  
  var obj = function () {
    return debug(namespace).apply(null, arguments);
  };
  for (i in logLevels) {
    
    var logLevel = logLevels[i];    
    var allowedLevel = allowedLevels.indexOf(logLevel) > -1;
    
    obj[logLevel] = allowedLevel 
      ? debug(namespace)
      : emptyFunction;

  }
  
  return obj;
}


//
//  Export available levels
//
module.exports.levels = logLevels;
