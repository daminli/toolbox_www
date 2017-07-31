Ext.define('common.store.Selection', {
    extend: 'Ext.data.Store',
    requires: [
        'common.model.Selection'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'common.model.Selection',
            paramsAsHash:true,
            proxy: {
                type: 'ajax',
                url:APP_ROOT+'/common/selections',
                reader: {
                    type: 'json',
                    rootProperty: 'selections'
                }
            }
        }, cfg)]);
    }
});