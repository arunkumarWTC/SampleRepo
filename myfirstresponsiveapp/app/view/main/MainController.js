Ext.define('MyApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	initViewModel: function(vm) {
		var me = this;
		vm.bind('{feed}', this.clearPost, this);
	},

	clearPost: function() {
		this.getViewModel().set('post', null);
	}
	
});