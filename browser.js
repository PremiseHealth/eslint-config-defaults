'use strict';

var browserConfig = _.cloneDeep(require('./es5'));
browserConfig.env.browser = true;

module.exports = browserConfig;
