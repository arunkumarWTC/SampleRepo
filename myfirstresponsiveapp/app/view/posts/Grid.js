Ext.define('MyApp.view.posts.Grid', {
    extend: 'Ext.grid.Panel',
    
    xtype: 'postsgrid',

    scrollable:true,
    columnLines: true,

    columns: [{
        text: 'Title',
        dataIndex: 'title',
        flex: 1
    }, {
        text: 'Author',
        dataIndex: 'authorName' ,
        flex: .5
    }, {
        text: 'Category',
        dataIndex: 'category',
        flex: .5
    }, {
        xtype: 'datecolumn',
        text: 'Published On',
        dataIndex: 'date',
        format: 'jS M,  Y',
        width: 150
    }]
});