/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyApp.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.main',

	requires: [
		'MyApp.model.Feed',
		'MyApp.model.Post'
	],

    data: {
		feed: '',
		post: ''
	},

	stores: {
		feeds: {
			model: 'MyApp.model.Feed',
			autoLoad: true
		},
		posts: {
			model: 'MyApp.model.Post',
			autoLoad: true,
			filters: [{
				category: '{feed}',
				id: 'cat',
				filterFn: function(rec) {
					catId = this.category.get('id');
					if (catId === 100) {
						return true; // Treat 100 for all records
					}
					var c = rec.data.categories[0].id;
					if (c === catId) {
						return true;
					}

				}
			}]
		 }		
	}
});