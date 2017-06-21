Ext.define('common.view.Upload', {
	extend : 'Ext.container.Viewport',
	// controllers : ['ModelCreator'],
	padding : 5,
	initComponent : function() {
		var me = this;
		// me.application.getController(me.controllers);

		Ext.applyIf(me, {
			items : [ Ext.create('common.view.UploadForm', {template:'Test.Excel.Template'}) ]
		});

		me.callParent(arguments);
	}
});
