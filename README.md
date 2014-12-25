debug-levels
============

Debug/verbosity level support for Visionmedia's debug module.  See https://github.com/visionmedia/debug for debug module usage information.

## Installation:
```bash
npm install debug-levels
```

## List of available levels:
```javascript
var levels = require('debug-levels').levels;

//  [ 'log', 'error', 'warn', 'debug', 'info', 'verbose' ]
```

 - log
 - error
 - warn
 - debug
 - info
 - verbose (default)


## Example Usage:

Display "error" and "log" debug level messages
```bash
$ DEBUG=* DEBUG_LEVEL=error node index.js
```

```javascript
var debug = require('debug-levels')('example');

// Retain original debug module usage
debug('doing some work');

// Display when using levels: log, error, warn, debug, info, and verbose
debug.log('debug.log()');

// Display when using levels: error, warn, debug, info, and verbose
debug.error('debug.error()');

// Display when using levels: warn, debug, info, and verbose
debug.warn('debug.warn()');

// Display when using levels: debug, info, and verbose
debug.debug('debug.debug()');

// Display when using levels: info and verbose
debug.info('debug.info()');

// Display when using levels: verbose
debug.verbose('debug.verbose()');
```


## License

(The ISC License)

Copyright (c) 2014, Eugene Song &lt;tilleps@gmail.com&gt;

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

