
module.exports = {

  extend: 'apostrophe-widgets',
  label: 'Ec Navigation',
  beforeConstruct: function(self, options) {
		options.addFields = [
		{
			name: 'hideChildren',
			label: 'Hide Children',
			type: 'boolean',
			def: false
		}
		].concat(options.addFields || [])
},
  construct: function (self, options) {
    self.pushAsset('stylesheet', 'always', { when: 'always' });
    self.pushAsset('stylesheet', 'custom', { when: 'always' });
    self.pushAsset('script', 'always', { when: 'always' });
  }
};
