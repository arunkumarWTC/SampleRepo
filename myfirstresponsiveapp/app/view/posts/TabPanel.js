Ext.define('MyApp.view.posts.TabPanel', {
    extend: "Ext.tab.Panel",

    requires: [
        'MyApp.view.posts.Grid',
        'MyApp.view.posts.View'
    ],

mixins: ['Ext.mixin.Responsive'],

    xtype: 'poststabpanel',

    responsiveConfig: {
        wide: {
              tabPosition: 'top',
              tabRotation: 0
        },
        tall: {
              tabPosition: 'left',
              tabRotation: 2
        }
    },
    items: [{
        xtype: 'postsview',
        title: 'View',
        bind: {
                store: '{posts}',
                selection: '{post}'
        }
    }, {
        xtype: 'postsgrid',
        title: 'Grid',
        bind: {
                store: '{posts}',
                selection: '{post}'
        }
   }]
});