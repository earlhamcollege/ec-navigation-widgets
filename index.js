const request = require('request-promise');

module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Ec Navigation',
  construct: function (self, options) {
    self.pushAsset('stylesheet', 'always', { when: 'always' });
    self.pushAsset('script', 'always', { when: 'always' });
  },
};
