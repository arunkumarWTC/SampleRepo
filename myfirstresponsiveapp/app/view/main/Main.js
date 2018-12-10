Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.Banner',
        'MyApp.view.posts.TabPanel',
        "MyApp.view.post.Detail",
        'MyApp.view.PostFilter'
    ],
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: 'border',
    dockedItems: [{
        xtype: 'banner',
        dock: 'top'
    }, {
        xtype: 'postfilter',
        dock: 'top'
    }],
    items: [{
        region: 'center',
        xtype: 'poststabpanel'
    }, {
        region: 'east',
        xtype: 'postdetail',
        width: 380,
        title: 'Details'
    }]
});