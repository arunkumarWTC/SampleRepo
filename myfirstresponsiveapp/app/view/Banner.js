Ext.define('MyApp.view.Banner', {
	extend: 'Ext.toolbar.Toolbar',
	xtype: 'banner',
	height: 65,
	items: [{
		xtype: 'image',
		src: "resources/images/book.png",
		width: 60,
		height: 60
	}, {
		xtype: 'label',
		html: '<span  style="font-size:28px; font-family:Brush Script MT;"> Article Reader </span>'
	}]
});