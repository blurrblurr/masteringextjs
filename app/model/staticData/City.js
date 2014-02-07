Ext.define('Packt.model.staticData.City', {
	extend : 'Packt.model.sakila.Sakila',
	idProperty : 'city_id',
	fields : [{
		name : 'city_id'
	},{
		name : 'city'
	},
	,{
		name : 'country_id'
	}]
}); 