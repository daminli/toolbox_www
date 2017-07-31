Ext
		.define(
				'common.view.UploadForm',
				{
					extend : 'Ext.form.Panel',
					alias : 'widget.uploadform',

					initComponent : function() {
						var me = this;

						Ext
								.apply(
										me,
										{
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
													var form = this.up('form')
															.getForm();
													if (form.isValid()) {
														form
																.submit({
																	url : '/common/data_upload',
																	waitMsg : 'Uploading your data...',
																	success : function(
																			fp,
																			o) {
																		Ext.Msg
																				.alert(
																						'Success',
																						'Your data "'
																								+ o.result.file
																								+ '" has been uploaded.');
																		titles = o.result.titles;
																		data = o.result.data;
																		if (data.length > 1) {
																			var column = [];
																			var render = [];
																			column
																					.push({
																						text : 'Row',
																						dataIndex : '__linenum__',
																						width : 50
																					});
																			column
																					.push({
																						text : 'Ok',
																						dataIndex : '__success__',
																						xtype : 'actioncolumn',
																						sortable : true,
																						renderer : me.col_render,
																						width : 40,
																						align : "center",
																						items : [ {
																							getClass : me.getIconClass
																						} ]
																					});
																			for (index in titles) {
																				column
																						.push({
																							text : titles[index].title_name,
																							dataIndex : titles[index].prop_name,
																							renderer : me.col_render
																						});
																				render
																						.push({
																							name : titles[index].prop_name
																						});
																			}
																			column
																					.push({
																						text : 'Messgae',
																						dataIndex : '__row__',
																						renderer : me.col_render,
																						width : 200
																					});
																			var tablestore = Ext
																					.create(
																							'Ext.data.Store',
																							{
																								fields : render
																							});
																			tablestore
																					.loadData(data);
																			var grid = new Ext.grid.GridPanel(
																					{
																						region : "center",
																						store : tablestore,
																						frame : true,
																						height : 400,
																						columns : column
																					});
																			me
																					.up()
																					.remove(
																							me
																									.up()
																									.down(
																											'grid'));
																			me
																					.up()
																					.add(
																							grid);
																		}
																	},
																	failure : function(
																			fp,
																			o) {
																		Ext.Msg
																				.alert(
																						'Failure',
																						o.result.message);
																	}
																});
													}
												}
											} ]
										});

						me.getIconClass = function(v, meta, rec) {
							action = meta.column.items[0];
							if (rec.data.__success__) {
								// action.glyph = '61452';
								return 'grid-success-col';
							} else {
								// action.glyph = '61453';
								return 'grid-fail-col';
							}
						}

						me.col_render = function(value, metaData, record,
								rowIdx, colIdx, store) {
							msg = record.data.__msg__;
							dataIndex = metaData.column.dataIndex;

							if (msg) {

								if (msg[dataIndex]) {
									metaData.tdAttr = 'data-qtip="'
											+ Ext.String
													.htmlEncode(msg[dataIndex])
											+ '"';

									return '<span style="' + 'color:red">'
											+ value + '</span>';
								}
							}

							return value;

						}

						me.callParent(arguments);

					}
				});