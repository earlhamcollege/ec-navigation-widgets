module.exports = {
	extend: 'apostrophe-widgets',
  	label: 'EC Navigation',
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
	construct: function(self, options) {
		var superPushAssets = self.pushAssets;
		
		self.pushAssets = function() {
			superPushAssets();
	    	self.pushAsset('stylesheet','always');
	    	self.pushAsset('stylesheet','custom');
	    	self.pushAsset('script','always');
	    }
	}
};