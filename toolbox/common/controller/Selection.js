Ext.define('common.controller.Selection', {
	extend : 'Ext.app.Controller',

	views : ['Selection'],
	models : ['Selection'],
	stores : ['Selection'],

	init : function(application) {
		me = this;
		this.control({
					"form[uid=search_form] button[text=Search]" : {
						click : me.doSearch
					},
					"gridpanel" : {
						selectionchange : function(row, records, eOpts) {
							if (records.length > 0) {
								selection_form = Ext.ComponentQuery
										.query("form[title=Selection]")[0].form;
								selection_form.setValues(records[0].data);
							}
						}
					},
					"button[text=Save]" : {
						click : function(btn, e, eOpts) {
							selection_form = Ext.ComponentQuery
									.query("form[title=Selection]")[0].form;
							btn.disable();
							
							Ext.Ajax.request( {
								  url : APP_ROOT+'/common/selections/',
								  method : 'post',
								  params : selection_form.getValues(),
								  success : function(response, options) {
									  me.doSearch();
									  btn.enable();
								  },
								  failure : function(response, opts) {
									  Ext.Msg.alert('Warning!',
											  response.statusText);
									  btn.enable();
								  }
								 });
							
						}
					},
					"button[text=Delete]" : {
						click : function(btn, e, eOpts) {
							selection_form = Ext.ComponentQuery
									.query("form[title=Selection]")[0].form;
							btn.disable();
							
							Ext.Ajax.request( {
								  url : APP_ROOT+'/common/selections/',
								  method : 'delete',
								  params : selection_form.getValues(),
								  success : function(response, options) {
									  me.doSearch();
									  btn.enable();
								  },
								  failure : function(response, opts) {
									  Ext.Msg.alert('Warning!',
											  response.message);
									  btn.enable();
								  }
								 });
							}
					}
				});
	},
	doSearch : function(btn, e, eOpts) {
		search_form = Ext.ComponentQuery.query("form[uid=search_form]")[0].form;

		// search_form.submit();
		me.getStore('Selection').load({
					params : search_form.getValues()
				});
	},
	onLaunch : function() {

		this.getStore("Selection").load();

	}
});
