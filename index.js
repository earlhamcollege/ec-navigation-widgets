const request = require('request-promise');

module.exports = {
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
	extend: 'apostrophe-widgets',
	label: 'Ec Navigation',
	construct: function (self, options) {
		self.pushAsset('stylesheet', 'always', { when: 'always' });
		self.pushAsset('script', 'always', { when: 'always' });
	},
};
