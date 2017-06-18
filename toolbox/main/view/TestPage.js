Ext.define('main.view.TestPage', {
	extend : 'Ext.container.Viewport',
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ Ext.create('free_query.view.DeckItemTest', {}) ]
		})
	}
})