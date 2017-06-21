if(result.data.length>1)
	{
	  var column=[];
	  var i=0;
	  for(title in result.data[0])
		  {
		    column.push({header:title,dataIndex:"Col"+i});
		    i++;
		  }
	  
	  var render=[];
	  var i=0;
	  for(title in result.data[1])
	  {
	    render.push(){name:"Col"+i});
	    i++;
	  }
	  
	  var tabledata = result.data.slice(1);
	  var tablestore = new Ext.data.Store({
	  proxy: new Ext.data.MemoryProxy(tabledata),
	  reader: new Ext.data.ArrayReader({},render)
	  });
	  tablestore.load();

	  var tablecol = new Ext.grid.ColumnModel(column);
	  var grid = new Ext.grid.GridPanel({
	  region:"center",          
	  store:tablestore,
	  cm:tablecol                                           
	  });
	}