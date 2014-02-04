Ext.define('Packt.store.Menu', {
	extend : 'Ext.data.Store',
	requires : ['Packt.model.menu.Root'],
	model : 'Packt.model.menu.Root',
	proxy : {
		type : 'ajax',
		url : 'php/menu.php',
		reader : {
			type : 'json',
			root : 'items'
		}
	}
}); 