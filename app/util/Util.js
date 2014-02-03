Ext.define('Packt.util.Util', {
	statics : {
		decodeJSON : function(text) {

			var result = Ext.JSON.decode(text, true);
			if (!result) {
				result = {};
				result.success = false;
				result.msg = text;
			}
			return result;
		},
		showErrorMsg : function(text) {
			Ext.Msg.show({
				title : 'Error!',
				msg : text,
				icon : Ext.Msg.ERROR,
				buttons : Ext.Msg.OK
			});
		}
	}
});
