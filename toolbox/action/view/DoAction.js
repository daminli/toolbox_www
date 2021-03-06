/*
 * File: app/view/main_page.js
 * 
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 * 
 * This file requires use of the Ext JS 4.2.x library, under independent
 * license. License of Sencha Architect does not include license for Ext JS
 * 4.2.x. For more details see http://www.sencha.com/license or contact
 * license@sencha.com.
 * 
 * This file will be auto-generated each and everytime you save your project.
 * 
 * Do NOT hand edit this file.
 */

Ext.define('action.view.DoAction', {
	extend : 'Ext.container.Viewport',
	controllers : [],

	initComponent : function() {
		var me = this;
		//me.application.getController(me.controllers);

		Ext.applyIf(me, {
					items : [{
								xtype : 'form',
								bodyPadding : 10,
								height : 600,
								layout : 'anchor',
								title : 'Model Creator',
								defaults : {
									anchor : '100%'
								},
								frame : true,
								dockedItems : [{
											dock : 'top',
											xtype : 'toolbar',
											items : [{
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
													},{
														text : 'Reload Api',
														listeners : {
															click : {
																fn : me.onReloadApi,
																scope : me
															}
														}
													}]
										}],
								items : [{
											xtype : 'textarea',
											name : 'result',
											labelAlign : 'top',
											fieldLabel : 'Result',
											anchor : '60% 40%'
										}]
							}]

				});

		me.callParent(arguments);
	},
	onSearch : function(button, e, eOpts) {
		console.log(button.text);
		Remote.ui_template.search({
					input_data : "<roo><name>hello world</name></root>"
				}, function(result, event) {
					console.log(result);
					str = Ext.JSON.encode(result);
					Ext.ComponentQuery.query("textarea[name='result']")[0].setValue(str);
			});
	},
	onCreate : function(button, e, eOpts) {
		console.log(button.text);
		Remote.ui_template.create({
					p_in_item: "test1",
                   p_in_price:102,
                   p_in_startdate:"2014/03/04",
                   p_in_time:"2014/03/03 19:38:00 123456",
                   p_in_data:"<ROOT>data to test</ROOT>"
				}, function(result, event) {
					console.log(result);
					str = Ext.JSON.encode(result);
					Ext.ComponentQuery.query("textarea[name='result']")[0].setValue(str);
			});
	},onEdit : function(button, e, eOpts) {
		console.log(button.text);
		Remote.ui_template.edit({
					input_data : "<roo><name>hello world</name></root>"
				}, function(result, event) {
					console.log(result);
					str = Ext.JSON.encode(result);
					Ext.ComponentQuery.query("textarea[name='result']")[0].setValue(str);
			});
	},
	onRemove : function(button, e, eOpts) {
		console.log(button.text);
		Remote.ui_template.remove({
					p_in_data : "<roo><name>hello world</name></root>"
				}, function(result, event) {
					console.log(result);
					str = Ext.JSON.encode(result);
					Ext.ComponentQuery.query("textarea[name='result']")[0].setValue(str);
			});
	},
	onReloadApi : function(button, e, eOpts) {
		console.log(button.text);
		Remote.action.initial_action_api(true,function(result, event) {
					console.log(result);
			});
	}

});
