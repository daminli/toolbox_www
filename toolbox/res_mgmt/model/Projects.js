Ext.define('res_mgmt.model.Projects', {
	extend : 'Ext.data.Model',

	fields : [ {
		name : "project_name"
	}, {
		name : "summary"
	}, {
		name : "it_focal"
	}, {
		name : "it_leader"
	}, {
		name : "int_md"
	}, {
		name : "ext_cost"
	}, {
		name : "start_date"
	}, {
		name : "end_date"
	}, {
		name : "creation_date"
	}, {
		name : "create_by"
	} ]
});