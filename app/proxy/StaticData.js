Ext.define('Packt.proxy.StaticData', {
	extend : 'Ext.data.proxy.Ajax',
	alias : 'proxy.staticdataproxy',
	reader : {
		type : 'json',
		messageProperty : 'msg',
		root : 'data'
	},

	writer : {
		type : 'json',
		writeAllFields : true,
		encode : true,
		allowSingle : false,
		root : 'data'
	},
	actionMethods : {
		create : "POST",
		read : "POST", //changed to POST
		update : "POST",
		destroy : "POST"
	},
	api : {
		read : 'php/staticData/list.php',
		create : 'php/staticData/actor/create.php',
		update : 'php/staticData/update.php',
		destroy : 'php/staticData/delete.php'
	},
	listeners : {
		exception : function(proxy, response, operation) {
			Ext.MessageBox.show({
				title : 'REMOTE EXCEPTION',
				msg : operation.getError(),
				icon : Ext.MessageBox.ERROR,
				buttons : Ext.Msg.OK
			});
		}
	}
});
