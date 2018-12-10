Ext.define('MyApp.view.posts.View', {
	extend: 'Ext.view.View',
	xtype: 'postsview',
	scrollable:true,
	
	itemTpl: [
		'<tpl for=".">',
		'<div class="category font12">{category}</div>',
		'<hr>',
		'<div class="title">{title}</div>',
		'</br>',
		'<img class="wp-thumbnail" src="http://www.gravatar.com/avatar/{email}"  alt="author"  width="50px" height="50px";>',
		'<p class="pubslihed-footer font10">published on <span class="font14">{[this.formatDate(values)]}</span></p>',
		'</tpl>',
		{
		  formatDate: function(values) {
		  	    var date = Ext.util.Format.date(values.date, 'jS M,  Y');
                return date;
            }
        }    
	],

	itemCls: 'thumb-nail',
	overItemCls: 'over-item-class',
	selectedItemCls: 'selected-item-class'

});