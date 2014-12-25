/**
 *
 *
 * DEBUG=* node example/index.js 
 * DEBUG=* DEBUG_LEVEL=error node example/index.js
 */
var levels = require('..').levels;
var debug = require('..')('debug:example');


debug('first');

debug.log('log!');
debug.error('error!');
debug.warn('warn!');
debug.debug('debug!');
debug.info('info!');
debug.verbose('verbose!');


//
//  Display list of available levels
//
console.log('debug levels:', levels);