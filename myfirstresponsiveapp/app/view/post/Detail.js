Ext.define("MyApp.view.post.Detail", {
    extend: "Ext.panel.Panel",
    requires: [
         "MyApp.view.post.DetailController"
    ], 

     
    controller: "post-detailcontroller",
    
    xtype: 'postdetail',

    scrollable: true,
    border: true,
    bodyPadding: 6,

    tbar: [{
        text: 'Edit',
        iconCls: 'x-fa fa-edit',
        margin: 5,
        handler: 'onEditClick'
    }]

});