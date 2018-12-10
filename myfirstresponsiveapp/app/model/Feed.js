 Ext.define('MyApp.model.Feed', {
	    extend: 'Ext.data.Model',
	    proxy: {
	        type: 'ajax',
	        url: 'resources/data/Feeds.json',
	        reader: {
	            type: 'json',
	            rootProperty: 'categories'
	        }
	    }
     });