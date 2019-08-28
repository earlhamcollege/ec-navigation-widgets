module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Ec Navigation',
  construct: function (self, options) {
    self.pushAsset('stylesheet', 'always', { when: 'always' });
    self.pushAsset('stylesheet', 'custom', { when: 'always' });
    self.pushAsset('script', 'always', { when: 'always' });
  },
};
