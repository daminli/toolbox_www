Ext.define('res_mgmt.view.Projects', {
	extend : 'Ext.container.Viewport',
	controllers : [],

	initComponent : function() {
		var me = this;
		// me.application.getController(me.controllers);

		Ext.applyIf(me, {
			items : [ {
				xtype : 'form',
				bodyPadding : 10,
				height : 600,
				layout : 'anchor',
				title : 'Model Creator',
				defaults : {
					anchor : '100%'
				},
				frame : true,
				dockedItems : [ {
					dock : 'top',
					xtype : 'toolbar',
					items : [ {
						text : 'Search',
						listeners : {
							click : {
								fn : me.onSearch,
								scope : me
							}
						}
					}, {
						text : 'Create',
						listeners : {
							click : {
								fn : me.onCreate,
								scope : me
							}
						}
					}, {
						text : 'Edit',
						listeners : {
							click : {
								fn : me.onEdit,
								scope : me
							}
						}
					}, {
						text : 'Remove',
						listeners : {
							click : {
								fn : me.onRemove,
								scope : me
							}
						}
					}, {
						text : 'Reload Api',
						listeners : {
							click : {
								fn : me.onReloadApi,
								scope : me
							}
						}
					} ]
				} ],
				items : [ {
					xtype : 'textarea',
					name : 'result',
					labelAlign : 'top',
					fieldLabel : 'Result',
					anchor : '60% 40%'
				} ]
			} ]

		});

		me.callParent(arguments);
	}

});
