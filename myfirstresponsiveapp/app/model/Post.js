 Ext.define('MyApp.model.Post', {
	    extend: 'Ext.data.Model',
	    fields: [{
	        name: 'catId',
	        type: 'int',
	        mapping: 'categories[0].id'
	    },  {
	        name: 'category',
	        type: 'string',
	        mapping: 'categories[0].title',
	        validators: [{
	             type: 'presence'
	        }]
	    },{
	        name: 'excerpt',
	        type: 'string',
	        validators: [{
	             type: 'presence'
	        }]
	    },{
	        name: 'firstName',
	        type: 'string',
	        mapping: 'author.first_name'
	    },{
	        name: 'lastName',
	        type: 'string',
	        mapping: 'author.last_name'
	    },{
	        name: 'authorName',
	        type: 'string',
	        calculate: function( data){
	            return data.firstName + " " +data.lastName;
	        }
	    }, {
	        name: 'date',
	        type: 'date'
	    },{
	        name: 'email',
	        type: 'string',
	        mapping: 'author.email'
	    }],
	    proxy: {
	        type: 'ajax',
	        url: 'resources/data/Posts.json',
	        reader: {
	            type: 'json',
	            rootProperty: 'posts'
	        }
	    }
	});