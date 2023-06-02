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
    var msg = 'Log level not found in allowed levels';
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
        var myDebug = debug(namespace)
        var logLevel = logLevels[i];
        var index = allowedLevels.indexOf(logLevel)
        var allowedLevel = index > -1;
        myDebug.color = index + 1
        
        if (allowedLevel) {
            obj[logLevel] = myDebug
        } else {
            obj[logLevel] = emptyFunction
        }

    }

    return obj;
}


//
//  Export available levels
//
module.exports.levels = logLevels;
