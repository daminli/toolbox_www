Ext.define('free_query.view.DeckItemTest', {
	extend : 'Ext.container.Viewport',
	frame : true,
	height : 800,
	width : 600,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			bodyPadding : 10,
			items : [ Ext.create('free_query.view.FolderForm', {
				frame : true,
				title : 'Report Foldr',
				bodyPadding : 10
			}), {
				xtype : 'form',
				frame : true,
				height : 186,
				width : 353,
				layout : {
					type : 'auto'
				},
				bodyPadding : 20,
				title : 'Login',
				items : [ {
					xtype : 'textfield',
					margin : '0,0,5,0',
					fieldLabel : 'User Name',
					msgTarget : 'under',
					name : 'userName',
					allowBlank : false,
					emptyText : 'user name'
				}, {
					xtype : 'textfield',
					margin : '0,0,5,0',
					fieldLabel : 'Password',
					msgTarget : 'under',
					name : 'password',
					inputType : 'password',
					allowBlank : false,
					emptyText : 'password',
					enableKeyEvents : true,
					listeners : {
						keypress : {
							fn : me.onTextfieldKeypress,
							scope : me
						}
					}
				}, {
					xtype : 'label'
				} ],
				dockedItems : [ {
					dock : 'top',
					xtype : 'toolbar',
					items : [ {
						glyph : 61639,
						xtype : 'button',
						text : 'Save'
					}, '-', {
						glyph : 61462,
						xtype : 'button',
						text : 'Create'
					}, '-', {
						glyph : 61527,
						xtype : 'button',
						text : 'Delete'
					} ]
				} ]
			} ]
		});
		me.callParent(arguments);
	}
})