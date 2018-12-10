Ext.define('MyApp.view.PostFilter', {
	extend: 'Ext.toolbar.Toolbar',
	xtype: 'postfilter',

	items: [{
		xtype: 'combobox',
		width: 210,
		padding: 5,
 		bind: {
				store: '{feeds}',
				selection: '{feed}'
		},
	    queryMode: 'local',
	    value: 'All Posts',
		displayField: 'title'
	}]
});