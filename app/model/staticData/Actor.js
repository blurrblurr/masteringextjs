Ext.define('Packt.model.staticData.Actor', {
	extend : 'Packt.model.sakila.Sakila',
	idProperty : 'actor_id',
	fields : [{
		name : 'actor_id'
	}, {
		name : 'first_name'
	}, {
		name : 'last_name'
	}]
}); 