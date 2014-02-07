Ext.define('Packt.store.staticData.Actors', {
	extend : 'Packt.store.staticData.Abstract', // #1
	requires : ['Packt.model.staticData.Actor', // #2
	'Packt.proxy.StaticData' // #3
	],
	model : 'Packt.model.staticData.Actor', // #4
	proxy : {
		type : 'staticdataproxy', // #5
		extraParams : {
			entity : 'Actor' // #6
		}
	}
}); 