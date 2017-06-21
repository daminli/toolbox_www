Ext.define('common.view.UploadForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.uploadform',

	initComponent : function() {
		var me = this;

		Ext.apply(me, {
			title : 'Data Upload',
			width : 400,
			bodyPadding : 10,
			frame : true,
			renderTo : Ext.getBody(),
			items : [ {
				xtype : 'filefield',
				name : 'file',
				fieldLabel : 'Data File',
				labelWidth : 60,
				msgTarget : 'side',
				allowBlank : false,
				anchor : '100%'
			// buttonText : 'Select File...'
			}, {
				xtype : 'hiddenfield',
				name : 'template',
				value : me.template
			} ],

			buttons : [ {
				text : 'Upload',
				handler : function() {
					var form = this.up('form').getForm();
					if (form.isValid()) {
						form.submit({
							url : '/common/data_upload',
							waitMsg : 'Uploading your data...',
							success : function(fp, o) {
								Ext.Msg.alert('Success', 'Your data "'
										+ o.result.file
										+ '" has been uploaded.');
								data = o.result.data;
								if (data.length > 1) {
									var column = [];
									var render = [];
									for (index in data[0]) {
										column.push({
											text : data[0][index],
											dataIndex : "Col" + index
										});
										render.push({
											name : "Col" + index
										});
									}

									var tabledata = data.slice(1);
									var tablestore = Ext.create(
											'Ext.data.ArrayStore', {
												fields : render
											});
									tablestore.loadData(tabledata);

									// var tablecol = new
									// Ext.grid.ColumnModel(column);
									var grid = new Ext.grid.GridPanel({
										region : "center",
										store : tablestore,
										frame:true,
										height:400,
										columns : column
									});
									me.up().remove(me.up().down('grid'));
									me.up().add(grid);
								}
							},
							failure : function(fp, o) {
								Ext.Msg.alert('Failure', o.result.message);
							}
						});
					}
				}
			} ]
		});

		me.callParent(arguments);

	}
});